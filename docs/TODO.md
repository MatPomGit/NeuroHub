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


