# PsyHub — baza wiedzy dla studentów psychologii

PsyHub to uporządkowana baza wiedzy, która pomaga studiować psychologię w sposób systematyczny: od definicji po zastosowania praktyczne. Serwis łączy artykuły wiki, słownik pojęć oraz wybrane materiały interaktywne.

## Struktura repozytorium

- Katalog wiki/ zawiera artykuły Markdown pogrupowane tematycznie.
- Katalogi pages/, modules/ i assets/ zawierają strony, moduły interaktywne oraz zasoby statyczne.
- Katalogi narzedzia_psychometryczne/ i tests/ przechowują dane katalogowe oraz zestawy pytań.
- Katalog tools/ skupia skrypty kontrolne i pomocnicze, a docs/ dokumentację utrzymaniową.

Podstawową walidację zapewniają skrypty run-node-tests.js, check_content.js i check_config.py z katalogu tools/.

## Dla kogo jest ta strona?

- dla studentów psychologii (I i II stopień),
- dla osób przygotowujących się do kolokwiów, egzaminów i seminariów,
- dla tych, którzy chcą szybko przejść od pojęcia do źródeł naukowych.

## Jak poruszać się po PsyHub?

### 1) Nawigacja po działach

Po lewej stronie (lub w widoku mobilnym: w górnym menu) znajdziesz działy tematyczne, np. diagnoza, psychometria, neurobiologia, psychoterapia czy metodologia badań. Każdy dział zawiera artykuły w formacie wiki, uporządkowane od tematów wprowadzających do bardziej zaawansowanych.

**Najlepsza praktyka:** zacznij od artykułu „wprowadzenie” w danym dziale, a potem przechodź do tematów szczegółowych.

### 2) Wyszukiwarka

Wyszukiwarka pozwala odnajdywać treści po:

- tytułach artykułów,
- słowach kluczowych,
- treści merytorycznej.

To najszybsza droga, gdy szukasz konkretnego pojęcia (np. „trafność”, „LTP”, „NSSI”).

### 3) Przejścia między powiązanymi tematami

W wielu miejscach znajdziesz odnośniki do tematów pokrewnych (cross-linki). Dzięki temu możesz śledzić relacje między działami, np. przejść z neurobiologii do psychofarmakologii albo z psychometrii do diagnozy.

### 4) Słownik pojęć

Słownik ułatwia szybkie przypomnienie terminów specjalistycznych. Każde hasło zawiera krótką definicję i link do artykułu rozwijającego temat.

### 5) Strony interaktywne i materiały dodatkowe

Poza klasycznymi artykułami wiki, PsyHub zawiera także:

- strony HTML z materiałami dydaktycznymi,
- prezentacje,
- wybrane ćwiczenia i demonstracje (np. eksperymenty poznawcze).

To dobre uzupełnienie nauki, kiedy chcesz zobaczyć temat „w działaniu”, a nie tylko w opisie.

## Co jest możliwe w PsyHub?

- szybkie powtórki przed zajęciami,
- budowanie ścieżki nauki między powiązanymi tematami,
- porównywanie ujęć teoretycznych z różnych działów psychologii,
- korzystanie z bibliografii artykułów jako punktu wyjścia do pracy zaliczeniowej,
- przechodzenie od definicji do praktycznych konsekwencji klinicznych i badawczych.

## Jak efektywnie korzystać z bazy? (krótki plan)

1. Wybierz dział zgodny z aktualnym kursem.
2. Przeczytaj artykuł wprowadzający.
3. Zapisz 3–5 kluczowych pojęć i sprawdź je w słowniku.
4. Przejdź do artykułów szczegółowych przez linki powiązane.
5. Na końcu skorzystaj z bibliografii i sięgnij do źródeł pierwotnych.

## Informacja dla autorów treści

Artykuły są rozwijane według standardu redakcyjnego projektu: jeden temat ma jedno opracowanie kanoniczne, struktura wynika z problemu, a każda część wnosi wartość merytoryczną. [Zalecany wzorzec artykułu](wiki/reference/article_template.md) jest elastyczną pomocą, nie obowiązkowym formularzem. Szczegółowe zasady znajdują się w [AGENTS.md](AGENTS.md) oraz [dokumentach konwencji treści](docs/content-conventions.md).

## Status projektu

PsyHub jest projektem rozwijanym iteracyjnie — część treści ma charakter pełnych opracowań, a część jest sukcesywnie rozbudowywana i aktualizowana.


## Budowanie strony z Jekyllem

Warstwa publikacyjna PsyHub korzysta z Jekylla. Dotychczasowy interfejs SPA, moduły JavaScript i samodzielne strony HTML pozostają zasobami statycznymi, natomiast artykuły z katalogu `wiki/` są dodatkowo generowane jako indeksowalne strony HTML.

Uruchomienie lokalne:

```bash
bundle install
bundle exec jekyll serve
```

Gotowa strona jest zapisywana w katalogu `_site/`. Wdrożenie produkcyjne wykonuje workflow `.github/workflows/pages.yml`; katalog źródłowy repozytorium nie jest publikowany bezpośrednio.
