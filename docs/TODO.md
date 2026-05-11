# PsyHub - TODO (realny plan pracy)

> Ostatnia aktualizacja: 2026-05-10
> Źródło weryfikacji: `app.js`, `index.html`, `site-config.js`, komendy CLI (Node.js)

## Plan techniczny

### Roadmap - techniczna

- [x] **Etap 3: filtry i eksport** (UI/UX i operacje na danych katalogu)
  **Właściciel:** Frontend + Tooling
  **Priorytet:** P2
  **Definition of Done:** Dostępne filtrowanie po typie/licencji/evidence level oraz eksport danych (np. CSV/JSON).
  **Weryfikacja:** 2026-05-10, dodano filtry i eksport CSV/JSON w `renderMeasurementTools` oraz testy sanity: `node tools/run-node-tests.js`.

- [x] **Rozszerzenie `tools/konwerter.py` o generowanie szkieletów artykułów z szablonu.**
  **Właściciel:** Tooling + Content
  **Priorytet:** P3
  **Definition of Done:** CLI przyjmuje domenę i tytuł, tworzy plik `.md` z gotowym szkieletem sekcji i metadanych.
  **Weryfikacja:** 2026-05-10, `python tools/konwerter.py new-article --help` pokazuje opcje `--domain`, `--slug`, `--with-metadata`.

- [ ] **Addon // mały stworek chodzący po stronie**

## Plan contentowy

### Roadmap - content

- [ ] **Etap 1: dziedziny z gotową bazą testową** (`testy`, `psychometria`, `zaburzenia`, `neuro`, `spoleczna`)
  **Właściciel:** Content + Config
  **Priorytet:** P1
  **Definition of Done:** Każda z wymienionych dziedzin ma komplet wpisów spełniających DoD i uzupełnione `updatedAt`.

- [ ] **Etap 2: pozostałe dziedziny** (uzupełnianie listy `measurementToolsTodoDomains`)
  **Właściciel:** Content + Config
  **Priorytet:** P2
  **Definition of Done:** Każda domena z listy TODO ma co najmniej startowy zestaw narzędzi + datę `updatedAt`.

- [ ] **Nowa zakładka z 12 artykułami „Somatic Experiencing jako metoda pracy ze stresem i traumą”**
  **Postęp:** 2026-05-10, uruchomiono folder `doswiadczenie_somatyczne` i opublikowano 12/12 artykułów (wprowadzenie, neurofizjologia, titracja i pendulacja, zasoby i bezpieczeństwo, orientacja i uziemienie, dysocjacja, reakcja obronna, trauma złożona, interocepcja, granice, przewlekły ból, integracja terapeutyczna).
- [ ] **Nowa zakładka z 12 artykułami „Systemy rodzinne”**
- [x] **Nowa zakładka z 14 artykułami „Systemy rodzinne"** ✓ (2026-04-28)
- [ ] **Nowa zakładka z 12 artykułami „Wystąpienia publiczne i autoprezentacja”**
- [ ] **Nowa zakładka z 12 artykułami „Psycholog w IT”**

## Backlog jakości kodu (audyt 2026-05-10)

- [ ] **Literówka/encoding w etykiecie nawigacji (`site-config.js`)**
  **Cel:** poprawić zniekształconą etykietę `Interwencja kryzysowa i dz ~Niebieska Kartadz e` na poprawną językowo formę.
  **Uzasadnienie:** aktualna treść wygląda na artefakt kodowania i obniża czytelność UI.
  **Zakres:** skorygować etykietę w obu miejscach konfiguracji (sekcja `nav` i `plans`), a następnie uruchomić walidację konfiguracji.
  **Akceptacja:** brak zniekształconych znaków w etykiecie + `python3 tools/check_config.py --strict-nav-plan` kończy się bez nowych błędów.

- [ ] **Usunięcie błędu jakości danych: uszkodzone znaki w wielu labelach (`site-config.js`)**
  **Cel:** naprawić wszystkie wpisy typu `rBznicowa`, `nawrotBw` i podobne artefakty kodowania.
  **Uzasadnienie:** to błąd merytoryczny i UX (niepoprawne nazwy artykułów mogą utrudniać wyszukiwanie i indeksowanie).
  **Zakres:** przygotować listę wystąpień (regex dla nietypowych sekwencji), poprawić wartości i uruchomić kontrolę regresji dla wyszukiwarki.
  **Akceptacja:** brak wykryć wzorców artefaktów kodowania w `site-config.js` oraz przejście `node tools/check_content.js`.

- [ ] **Korekta komentarza do kodu (mojibake) w `app.js`**
  **Cel:** poprawić komentarze przy `getVoicePreset` i `choosePreferredVoice`, które zawierają zniekształcone polskie znaki.
  **Uzasadnienie:** komentarze są częścią dokumentacji technicznej; obecna forma utrudnia utrzymanie.
  **Zakres:** podmienić komentarze na poprawną polszczyznę i dodać krótki sanity-check kodowania UTF-8 dla plików JS w narzędziach CI.
  **Akceptacja:** komentarze są czytelne po otwarciu pliku i nie zawierają ciągów `gł`/`Ä`.

- [ ] **Ulepszenie testu: wykrywanie artefaktów kodowania w konfiguracji**
  **Cel:** dodać test automatyczny, który blokuje commity z uszkodzonymi znakami w labelach i opisach `site-config.js`.
  **Uzasadnienie:** obecne testy nie łapią regresji encodingu, mimo że problem już występuje.
  **Zakres:** rozszerzyć `tools/lint-measurement-tools-config.js` lub dodać nowy test w `tools/run-node-tests.js`, który skanuje `site-config.js` pod kątem podejrzanych sekwencji (np. `~N`, `Bz`, `ł`, `Ä`).
  **Akceptacja:** test failuje na aktualnych danych z artefaktami i przechodzi po ich poprawie.
