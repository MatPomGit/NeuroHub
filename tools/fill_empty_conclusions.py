#!/usr/bin/env python3

from __future__ import annotations

import argparse
import re
from pathlib import Path


HEADING_RE = re.compile(r"^(#{1,6})\s+(.+?)\s*$")
NUMBER_PREFIX_RE = re.compile(r"^\d+[.)]?\s*")
STOPWORDS = {
    "a",
    "aby",
    "albo",
    "ale",
    "bez",
    "by",
    "byc",
    "być",
    "co",
    "czy",
    "dla",
    "do",
    "dotyczace",
    "dotyczące",
    "gdzie",
    "i",
    "ich",
    "im",
    "in",
    "jak",
    "jako",
    "jest",
    "jego",
    "jej",
    "już",
    "ktora",
    "ktore",
    "które",
    "ktory",
    "który",
    "lub",
    "ma",
    "na",
    "nad",
    "nie",
    "o",
    "od",
    "oraz",
    "po",
    "pod",
    "przez",
    "przy",
    "sie",
    "się",
    "tak",
    "także",
    "te",
    "temat",
    "to",
    "tu",
    "w",
    "we",
    "z",
    "za",
    "ze",
}

SECTION_ALIASES = {
    "wprowadzenie",
    "abstrakt",
    "co to jest głębokie czytanie?",
    "perspektywa nieoczywista",
    "podsumowanie",
    "bibliografia",
    "bibliografia orientacyjna (kierunkowa)",
    "praktyczne przykłady",
    "analiza",
    "definicje",
    "wnioski",
}

DOMAIN_FRAMES = {
    "animaloterapia": (
        "o skuteczności nie decyduje samo włączenie zwierzęcia do kontaktu, lecz jakość doboru celu, bezpieczeństwa i relacji",
        "największą wartość praktyczną daje łączenie wiedzy o mechanizmie oddziaływania z ostrożnym planowaniem interwencji i oceną efektów",
    ),
    "arteterapia": (
        "wartość oddziaływań twórczych nie wynika wyłącznie z ekspresji, ale z tego, jak dobrze forma pracy została dopasowana do funkcji klinicznej i możliwości uczestnika",
        "najważniejsze jest traktowanie technik twórczych jako narzędzi regulacji, symbolizacji i komunikacji, a nie jako uniwersalnej recepty",
    ),
    "biologia": (
        "mechanizmy biologiczne rzadko działają w izolacji; ich znaczenie ujawnia się dopiero w powiązaniu z rozwojem, środowiskiem i zachowaniem",
        "kluczowe pozostaje łączenie poziomu biologicznego z funkcjonalnym, aby uniknąć uproszczenia złożonych zjawisk psychicznych do jednej przyczyny",
    ),
    "diagnoza": (
        "w diagnozie najwięcej błędów powstaje nie na poziomie pojedynczej techniki, lecz na etapie wnioskowania z danych o różnej jakości i pochodzeniu",
        "najbardziej użyteczna diagnoza łączy precyzję metodologiczną z uważnością na kontekst, relację i ograniczenia interpretacji",
    ),
    "dla_studentow": (
        "skuteczne przygotowanie zawodowe nie polega wyłącznie na zdobyciu wiedzy deklaratywnej, ale na uczeniu się podejmowania decyzji w realnym kontekście pracy",
        "największą wartość daje przekładanie wiedzy akademickiej na konkretne kompetencje, standardy i nawyki profesjonalne",
    ),
    "e_terapia": (
        "o jakości pracy online decyduje nie sama technologia, lecz to, jak wpływa ona na przymierze, bezpieczeństwo, dostępność i ramę interwencji",
        "najważniejsze jest traktowanie e-terapii jako środowiska pracy klinicznej z własnymi ograniczeniami i przewagami, a nie jako prostego zamiennika kontaktu bezpośredniego",
    ),
    "ekrany_ksiazki_i_natura": (
        "wpływ środowiska cyfrowego i naturalnego nie jest prostym bilansem szkód i korzyści, lecz zależy od wzorca używania, czasu ekspozycji i funkcji, jaką pełni dane doświadczenie",
        "najbardziej wartościowe wnioski pojawiają się wtedy, gdy analizuje się wspólnie uwagę, emocje, regenerację i długofalowe nawyki poznawcze",
    ),
    "eksperyment_psychologiczny": (
        "o sile wniosku badawczego decyduje nie efektowność procedury, lecz przejrzystość projektu, kontrola zakłóceń i jakość interpretacji wyników",
        "najważniejsze pozostaje łączenie rygoru metodologicznego z pokorą interpretacyjną oraz świadomością ograniczeń projektu",
    ),
    "emocje": (
        "emocje najtrafniej rozumie się nie jako przeszkodę dla poznania, lecz jako system informacji o potrzebach, zagrożeniach i relacjach",
        "największą wartość ma ujmowanie emocji jednocześnie na poziomie doświadczenia, regulacji i konsekwencji interpersonalnych",
    ),
    "etyka": (
        "etyka zawodowa nie sprowadza się do mechanicznego stosowania reguł, lecz wymaga ważenia dóbr, ryzyk i odpowiedzialności w warunkach niepewności",
        "najbardziej dojrzałe wnioski etyczne wynikają z łączenia zasad, kontekstu sytuacyjnego i refleksji nad skutkami decyzji",
    ),
    "farmakologia": (
        "o wartości leczenia farmakologicznego decyduje nie sama znajomość mechanizmu działania leku, lecz umiejętność dopasowania terapii do profilu objawów, ryzyka i funkcjonowania pacjenta",
        "najważniejsze jest łączenie wiedzy o mechanizmach działania z monitorowaniem skuteczności, bezpieczeństwa i współpracy terapeutycznej",
    ),
    "filozofia": (
        "siła analizy filozoficznej polega nie tylko na obronie stanowiska, lecz także na ujawnianiu kosztów założeń, granic pojęć i konsekwencji intuicji",
        "najbardziej wartościowe podsumowanie wymaga odróżnienia tego, co logicznie możliwe, od tego, co epistemicznie uzasadnione i praktycznie doniosłe",
    ),
    "geropsychologia": (
        "starzenie nie jest jedynie procesem strat, lecz zmianą relacji między zasobami, ograniczeniami i środowiskiem życia",
        "największą wartość ma ujmowanie starzenia na przecięciu biologii, relacji społecznych, zdrowia i poczucia sensu",
    ),
    "kulturowa": (
        "różnice kulturowe nie są dodatkiem do psychologii ogólnej, lecz zmieniają sposób definiowania normy, motywacji i relacyjności",
        "najbardziej trafne wnioski pojawiają się wtedy, gdy unika się etnocentryzmu i analizuje zjawisko w jego własnym kontekście znaczeń",
    ),
    "neuropsychologia": (
        "związek mózg-zachowanie jest wielopoziomowy, dlatego pojedyncza struktura lub proces nabiera znaczenia dopiero w kontekście całych sieci funkcjonalnych",
        "najważniejsze jest łączenie wiedzy anatomicznej, poznawczej i klinicznej, aby przełożyć opis mechanizmu na rozumienie funkcjonowania człowieka",
    ),
    "neuroroznorodnosc": (
        "neuroróżnorodność najlepiej rozumieć nie jako prostą listę deficytów, lecz jako odmienny profil przetwarzania, który może generować zarówno trudności, jak i zasoby",
        "kluczowe pozostaje łączenie wsparcia funkcjonalnego z redukowaniem barier środowiskowych i stygmatyzacji",
    ),
    "podstawy_pomocy": (
        "skuteczna pomoc nie wynika z samej dobrej intencji, ale z jakości kontaktu, granic, regulacji emocji i adekwatności interwencji do sytuacji osoby wspieranej",
        "najważniejsze jest traktowanie pomocy jako procesu wymagającego zarówno empatii, jak i struktury, kompetencji oraz samoograniczenia",
    ),
    "porozumiewanie_sie_bez_przemocy": (
        "NVC nie jest techniką grzecznego mówienia, lecz sposobem porządkowania relacji między obserwacją, uczuciami, potrzebami i działaniem",
        "największą wartość ma traktowanie komunikacji jako praktyki rozpoznawania potrzeb i odpowiedzialnego wpływu, a nie tylko doboru słów",
    ),
    "przypadki_kliniczne": (
        "pojedynczy przypadek ma znaczenie nie dlatego, że daje prostą odpowiedź, lecz dlatego, że ujawnia ograniczenia teorii i złożoność realnego funkcjonowania człowieka",
        "najbardziej użyteczne jest traktowanie studium przypadku jako narzędzia integrowania danych klinicznych, a nie jako gotowego wzorca dla wszystkich pacjentów",
    ),
    "psychologia_ai": (
        "najważniejsze pytania o AI dotyczą nie tylko sprawności systemu, lecz także tego, jak technologia przekształca uwagę, zaufanie, odpowiedzialność i relacje społeczne",
        "kluczowe pozostaje łączenie perspektywy technologicznej z psychologiczną analizą decyzji, emocji i skutków społecznych",
    ),
    "psychologia_gier": (
        "gry oddziałują nie przez sam fakt istnienia medium, lecz przez strukturę reguł, motywacji, relacji i czasu zaangażowania",
        "najbardziej trafne wnioski wymagają odróżnienia efektów samej gry od efektów kontekstu używania, podatności indywidualnych i funkcji, jaką gra pełni dla użytkownika",
    ),
    "psychologia_niepelnosprawnosci": (
        "najbardziej ograniczające bywają nie same deficyty, lecz bariery środowiskowe, organizacyjne i społeczne, które wzmacniają koszt codziennego funkcjonowania",
        "najważniejsze jest łączenie perspektywy klinicznej z prawami, dostępnością i jakością uczestnictwa w życiu społecznym",
    ),
    "psychologia_poznawcza": (
        "pojedynczy proces poznawczy najczęściej nie wyjaśnia zachowania samodzielnie; jego znaczenie ujawnia się w relacji do obciążenia, celu działania i innych systemów kontroli",
        "najbardziej użyteczne wnioski pojawiają się wtedy, gdy łączy się opis mechanizmu z ograniczeniami zasobów poznawczych i konsekwencjami praktycznymi",
    ),
    "psychologia_pozytywna": (
        "dobrostan nie rośnie liniowo wraz z liczbą pozytywnych doświadczeń, lecz zależy od sposobu integrowania zasobów z codziennym funkcjonowaniem i relacjami",
        "największą wartość ma traktowanie zasobów psychicznych jako praktyk podtrzymujących sens, relacyjność i samoregulację, a nie jako zestawu haseł motywacyjnych",
    ),
    "psychologia_rozwojowa": (
        "rozwój nie jest prostą sekwencją etapów, lecz dynamiczną relacją między dojrzewaniem biologicznym, środowiskiem i doświadczeniem uczenia się",
        "najbardziej trafne podsumowanie wymaga łączenia perspektywy etapowej z analizą różnic indywidualnych, kontekstu i plastyczności",
    ),
    "psychologia_sadowa": (
        "w psychologii sądowej najważniejsze jest nie tylko to, co badany przeżywa, ale również to, jak wiarygodnie można tę informację udokumentować i uzasadnić przed sądem",
        "kluczowe pozostaje łączenie standardów naukowych, prawnych i etycznych przy formułowaniu opinii oraz ograniczeń wnioskowania",
    ),
    "psychologia_spoleczna": (
        "wiele zjawisk społecznych wydaje się cechą jednostki, choć w rzeczywistości jest produktem norm, sytuacji i architektury relacji",
        "najważniejsze jest analizowanie jednocześnie procesów indywidualnych i warunków społecznych, które wzmacniają określone zachowania lub przekonania",
    ),
    "psychologia_szkolna": (
        "trudności szkolne rzadko wynikają z pojedynczej cechy ucznia; zwykle odzwierciedlają relację między wymaganiami szkoły, wsparciem, klimatem klasy i profilem rozwojowym dziecka",
        "najbardziej użyteczne są wnioski, które łączą perspektywę ucznia, nauczyciela i systemu edukacyjnego",
    ),
    "psychologia_technologii": (
        "technologia oddziałuje psychologicznie nie tylko przez treść, lecz także przez tempo, dostępność, architekturę wyboru i sposób włączania jej w relacje",
        "najważniejsze jest traktowanie wpływu technologii jako skutku interakcji między projektem narzędzia a ludzkimi potrzebami i ograniczeniami",
    ),
    "psychologia_zdrowia": (
        "stan zdrowia i zachowania zdrowotne są wynikiem współdziałania biologii, interpretacji objawów, relacji z otoczeniem i jakości codziennych nawyków",
        "największą wartość ma łączenie perspektywy medycznej z psychologicznym rozumieniem motywacji, stresu i adaptacji",
    ),
    "psychometria": (
        "wartość narzędzia psychometrycznego nie wynika z samej popularności testu, lecz z jakości jego trafności, rzetelności i adekwatności do konkretnego celu decyzji",
        "najważniejsze pozostaje odróżnianie pomiaru od interpretacji oraz świadome uwzględnianie ograniczeń metodologicznych narzędzia",
    ),
    "psychopatologia": (
        "objawy nabierają znaczenia dopiero wtedy, gdy analizuje się je w przebiegu, kontekście funkcjonowania i relacji do mechanizmów podtrzymujących",
        "najbardziej użyteczna perspektywa łączy opis symptomów z rozumieniem procesu, różnicowaniem i planowaniem interwencji",
    ),
    "psychosomatyka": (
        "związek ciała i psychiki najtrafniej rozumieć jako dwukierunkową regulację, a nie prosty model psychicznej przyczyny objawu somatycznego",
        "największą wartość ma integrowanie danych biologicznych, emocjonalnych i relacyjnych bez redukcjonizmu w żadną stronę",
    ),
    "psychoterapia": (
        "skuteczność psychoterapii zależy nie tylko od nazwy nurtu, ale od jakości konceptualizacji, przymierza, dawkowania interwencji i dopasowania do pacjenta",
        "najbardziej praktyczne wnioski wynikają z łączenia modelu teoretycznego z uważnością na proces zmiany, relację i ograniczenia danej metody",
    ),
    "relacje": (
        "zjawiska relacyjne rzadko są wyłącznie wynikiem cech partnerów; zwykle podtrzymują je wzorce komunikacji, historia przywiązania i bieżący kontekst stresu",
        "najbardziej użyteczne jest ujmowanie relacji jako systemu współregulacji, negocjacji granic i wzajemnych interpretacji",
    ),
    "rezyliencja_i_mobbing": (
        "odporność psychiczna nie oznacza braku podatności na zranienie, lecz zdolność do odzyskiwania sprawstwa w warunkach przeciążenia i presji",
        "najważniejsze jest łączenie profilaktyki indywidualnej z analizą środowiska pracy, procedur i kultury organizacyjnej",
    ),
    "robotyka_afektywna": (
        "najciekawsze pytania o robotykę afektywną dotyczą nie tylko tego, czy maszyna rozpoznaje emocje, ale jak ludzie nadają temu rozpoznaniu znaczenie i zaufanie",
        "największą wartość ma łączenie perspektywy technicznej z analizą relacji człowiek-maszyna, norm społecznych i odpowiedzialności projektowej",
    ),
    "roznice_indywidualne": (
        "różnice indywidualne mają znaczenie praktyczne dopiero wtedy, gdy opisuje się ich konsekwencje dla uczenia się, relacji i środowiska działania, a nie tylko sam wynik pomiaru",
        "najważniejsze jest ujmowanie zmienności psychologicznej jako źródła zarówno ryzyka, jak i potencjalnych zasobów",
    ),
    "seksuologia": (
        "seksualność najtrafniej opisuje się jako obszar współtworzony przez ciało, znaczenia kulturowe, relacje i doświadczenie bezpieczeństwa",
        "najbardziej użyteczne wnioski wynikają z łączenia perspektywy biologicznej, relacyjnej i rozwojowej bez moralizowania i redukcjonizmu",
    ),
    "seminarium_dyplomowe": (
        "najczęstsze trudności w pracy dyplomowej wynikają nie z braku pojedynczej informacji, lecz z jakości planowania, konsekwencji metodologicznej i dyscypliny redakcyjnej",
        "największą wartość daje traktowanie pracy badawczej jako procesu integrowania pytania, metody, analizy i argumentacji",
    ),
    "suicydologia": (
        "w suicydologii najważniejsze jest odchodzenie od prostych wyjaśnień na rzecz wieloczynnikowego rozumienia kryzysu, podatności i dostępnych punktów interwencji",
        "najbardziej praktyczne wnioski pojawiają się wtedy, gdy łączy się ocenę ryzyka z analizą funkcji zachowania, wsparcia i możliwości ochronnych",
    ),
    "temperament": (
        "temperament nie przesądza o losie jednostki, lecz wpływa na sposób reagowania, uczenia się i dopasowania do wymagań środowiska",
        "najbardziej wartościowe jest ujmowanie temperamentu w relacji do rozwoju, stresu i strategii regulacyjnych, a nie jako sztywnej etykiety",
    ),
    "testy": (
        "wynik testu ma wartość tylko wtedy, gdy jest interpretowany w kontekście celu badania, ograniczeń narzędzia i pozostałych danych o osobie badanej",
        "najważniejsze pozostaje odróżnianie pomiaru od decyzji diagnostycznej oraz łączenie danych testowych z obserwacją i wywiadem",
    ),
    "uzaleznienia": (
        "uzależnienie najtrafniej rozumieć jako proces regulacyjny i relacyjny, a nie wyłącznie problem substancji lub zachowania",
        "najbardziej użyteczne jest łączenie perspektywy neurobiologicznej, motywacyjnej i środowiskowej przy planowaniu wsparcia",
    ),
    "wstep_do_psychologii": (
        "podstawowe pojęcia psychologii nabierają wartości dopiero wtedy, gdy pokazuje się ich ograniczenia, zakres stosowania i relacje z metodą badania",
        "najważniejsze jest traktowanie psychologii jako nauki o złożonych zależnościach, a nie zbioru prostych definicji",
    ),
    "zaburzenia": (
        "opis zaburzenia jest użyteczny dopiero wtedy, gdy łączy kryteria rozpoznania z mechanizmami, funkcjonowaniem i zróżnicowaniem przebiegu",
        "najbardziej wartościowe podsumowanie wymaga połączenia obrazu klinicznego z różnicowaniem, rokowaniem i implikacjami dla wsparcia",
    ),
}

DEFAULT_FRAME = (
    "najbardziej użyteczne rozumienie omawianego zjawiska pojawia się wtedy, gdy łączy się opis mechanizmu z analizą funkcji, kontekstu i skutków praktycznych",
    "najważniejsze wnioski wynikają z integrowania poziomu teorii, danych empirycznych i konsekwencji dla praktyki",
)


def clean_heading(text: str) -> str:
    text = NUMBER_PREFIX_RE.sub("", text.strip())
    return text.strip("-–—: ")


def normalize_key(text: str) -> str:
    return clean_heading(text).casefold()


def split_frontmatter(text: str) -> tuple[str, str]:
    if text.startswith("---\n"):
        end = text.find("\n---\n", 4)
        if end != -1:
            return text[: end + 5], text[end + 5 :]
    return "", text


def extract_title(lines: list[str], fallback: str) -> str:
    for line in lines:
        match = HEADING_RE.match(line)
        if match and len(match.group(1)) == 1:
            return clean_heading(match.group(2))
    return clean_heading(fallback.replace("_", " "))


def extract_h2_headings(lines: list[str]) -> list[str]:
    headings = []
    for line in lines:
        match = HEADING_RE.match(line)
        if match and len(match.group(1)) == 2:
            name = clean_heading(match.group(2))
            if normalize_key(name) not in SECTION_ALIASES:
                headings.append(name)
    return headings


def section_empty(lines: list[str], idx: int) -> bool:
    pos = idx + 1
    while pos < len(lines) and not lines[pos].startswith("## "):
        if lines[pos].strip():
            return False
        pos += 1
    return True


def pick_focus_points(headings: list[str]) -> list[str]:
    unique: list[str] = []
    for heading in headings:
        cleaned = clean_heading(heading)
        if not cleaned:
            continue
        if normalize_key(cleaned) in SECTION_ALIASES:
            continue
        if cleaned not in unique:
            unique.append(cleaned)
    if len(unique) >= 3:
        return [unique[0], unique[len(unique) // 2], unique[-1]]
    return unique[:3]


def last_substantive_sentence(lines: list[str], stop_idx: int) -> str | None:
    paragraph: list[str] = []
    for idx in range(stop_idx - 1, -1, -1):
        line = lines[idx].strip()
        if not line:
            if paragraph:
                break
            continue
        if line.startswith("## "):
            break
        if line.startswith("### "):
            continue
        if line.startswith("-") or re.match(r"^\d+[.)]", line):
            continue
        paragraph.append(line)
    if not paragraph:
        return None
    paragraph.reverse()
    text = " ".join(paragraph)
    sentences = re.split(r"(?<=[.!?])\s+", text)
    for sentence in reversed(sentences):
        sentence = sentence.strip()
        if len(sentence) > 60:
            return sentence
    return text.strip() or None


def title_tokens(title: str) -> list[str]:
    words = re.findall(r"[A-Za-zÀ-ž0-9]+", title.casefold())
    return [word for word in words if word not in STOPWORDS and len(word) > 2]


def domain_frame(folder: str) -> tuple[str, str]:
    return DOMAIN_FRAMES.get(folder, DEFAULT_FRAME)


def build_focus_sentence(points: list[str]) -> str:
    if not points:
        return "W praktyce najwięcej wyjaśnia spojrzenie łączące mechanizm, kontekst i konsekwencje działania."
    if len(points) == 1:
        return f"Szczególnego znaczenia nabiera tu powiązanie między głównym problemem artykułu a obszarem takim jak {points[0].casefold()}."
    if len(points) == 2:
        return f"Dopiero zestawienie takich obszarów jak {points[0].casefold()} oraz {points[1].casefold()} pokazuje pełny ciężar omawianego zagadnienia."
    return (
        f"Dopiero wspólna analiza zagadnień takich jak {points[0].casefold()}, "
        f"{points[1].casefold()} oraz {points[2].casefold()} pokazuje pełny zakres omawianego zjawiska."
    )


def build_perspective(title: str, folder: str, points: list[str], anchor: str | None) -> str:
    frame, _ = domain_frame(folder)
    lines = [
        f'Nieoczywista perspektywa na temat "{title}" polega na tym, że {frame}.',
        build_focus_sentence(points),
    ]
    if anchor:
        lines.append(
            "Z tego powodu trafna interpretacja wymaga nie tylko nazwania zjawiska, "
            "ale także oceny jego funkcji, ograniczeń i długofalowych skutków dla osoby lub systemu, którego dotyczy."
        )
    else:
        lines.append(
            "Taka perspektywa przesuwa akcent z prostego opisu na rozumienie procesu, "
            "co zwykle prowadzi do ostrożniejszych i praktycznie lepszych wniosków."
        )
    return "\n\n".join(lines)


def build_summary(title: str, folder: str, points: list[str], anchor: str | None) -> str:
    _, frame = domain_frame(folder)
    lines = [
        f'Temat "{title}" pokazuje, że {frame}.',
    ]
    if anchor:
        lines.append(
            "W praktyce oznacza to potrzebę łączenia danych, kontekstu i celu działania zamiast opierania się na pojedynczym wskaźniku lub uproszczonej interpretacji."
        )
    else:
        lines.append(
            "W praktyce oznacza to potrzebę łączenia poziomu teorii, obserwacji i zastosowania zamiast opierania się na pojedynczym, oderwanym wskaźniku."
        )
    if points:
        lines.append(build_focus_sentence(points))
    return "\n\n".join(lines)


def process_file(path: Path, dry_run: bool = False) -> tuple[bool, list[str]]:
    raw = path.read_text(encoding="utf-8")
    frontmatter, body = split_frontmatter(raw)
    lines = body.splitlines()
    title = extract_title(lines, path.stem)
    folder = path.parent.name
    points = pick_focus_points(extract_h2_headings(lines))
    changed = False
    preview: list[str] = []
    output: list[str] = []

    idx = 0
    while idx < len(lines):
        line = lines[idx]
        output.append(line)
        if line == "## Perspektywa nieoczywista" and section_empty(lines, idx):
            text = build_perspective(title, folder, points, last_substantive_sentence(lines, idx))
            output.extend(["", *text.splitlines()])
            changed = True
            preview.append(f"{path}: Perspektywa nieoczywista")
        elif line == "## Podsumowanie" and section_empty(lines, idx):
            text = build_summary(title, folder, points, last_substantive_sentence(lines, idx))
            output.extend(["", *text.splitlines()])
            changed = True
            preview.append(f"{path}: Podsumowanie")
        idx += 1

    if changed and not dry_run:
        final_text = "\n".join(output).rstrip() + "\n"
        path.write_text(frontmatter + final_text, encoding="utf-8")
    return changed, preview


def iter_targets(root: Path) -> list[Path]:
    return sorted(root.rglob("*.md"))


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("root", nargs="?", default="d:/Projekty/neurohub/wiki")
    parser.add_argument("--dry-run", action="store_true")
    parser.add_argument("--limit", type=int, default=0)
    args = parser.parse_args()

    root = Path(args.root)
    count = 0
    previews: list[str] = []
    for path in iter_targets(root):
        changed, preview = process_file(path, dry_run=args.dry_run)
        if changed:
            count += 1
            previews.extend(preview)
            if args.limit and count >= args.limit:
                break

    print(f"UPDATED_FILES={count}")
    for item in previews[:20]:
        print(item)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())