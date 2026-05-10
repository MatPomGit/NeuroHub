# PsyHub â€” TODO (realny plan pracy)

> Ostatnia aktualizacja: 2026-05-10  
> ĹąrĂłdĹ‚o weryfikacji: `app.js`, `index.html`, `site-config.js`, komendy CLI (Node.js)

## Plan techniczny

### Roadmap â€” techniczna

- [x] **Etap 3: filtry i eksport** (UI/UX i operacje na danych katalogu).  
  **Właściciel:** Frontend + Tooling  
  **Priorytet:** P2  
  **Definition of Done:** DostÄ™pne filtrowanie po typie/licencji/evidence level oraz eksport danych (np. CSV/JSON).  
  **Weryfikacja:** 2026-05-10, dodano filtry i eksport CSV/JSON w `renderMeasurementTools` oraz testy sanity: `node tools/run-node-tests.js`.

- [x] **Rozszerzenie `tools/konwerter.py` o generowanie szkieletĂłw artykuĹ‚Ăłw z szablonu.**  
  **Właściciel:** Tooling + Content  
  **Priorytet:** P3  
  **Definition of Done:** CLI przyjmuje domenÄ™ i tytuĹ‚, tworzy plik `.md` z gotowym szkieletem sekcji i metadanych.  
  **Weryfikacja:** 2026-05-10, `python tools/konwerter.py new-article --help` pokazuje opcje `--domain`, `--slug`, `--with-metadata`.

- [ ] **Addon // maĹ‚y stworek chodzÄ…cy po stronie**

## Plan contentowy

### Roadmap â€” content

- [ ] **Etap 1: dziedziny z gotowÄ… bazÄ… testowÄ…** (`testy`, `psychometria`, `zaburzenia`, `neuro`, `spoleczna`).  
  **Właściciel:** Content + Config  
  **Priorytet:** P1  
  **Definition of Done:** KaĹĽda z wymienionych dziedzin ma komplet wpisĂłw speĹ‚niajÄ…cych DoD i uzupeĹ‚nione `updatedAt`.

- [ ] **Etap 2: pozostaĹ‚e dziedziny** (uzupeĹ‚nianie listy `measurementToolsTodoDomains`).  
  **Właściciel:** Content + Config  
  **Priorytet:** P2  
  **Definition of Done:** KaĹĽda domena z listy TODO ma co najmniej startowy zestaw narzÄ™dzi + datÄ™ `updatedAt`.

- [ ] **Nowa zakĹ‚adka z 12 artykuĹ‚ami â€žSomatic Experiencing jako metoda pracy ze stresem i traumÄ…â€ť**
  **PostÄ™p:** 2026-05-10, uruchomiono folder `doswiadczenie_somatyczne` i opublikowano 12/12 artykuĹ‚Ăłw (wprowadzenie, neurofizjologia, titracja i pendulacja, zasoby i bezpieczeĹ„stwo, orientacja i uziemienie, dysocjacja, reakcja obronna, trauma zĹ‚oĹĽona, interocepcja, granice, przewlekĹ‚y bĂłl, integracja terapeutyczna).
- [ ] **Nowa zakĹ‚adka z 12 artykuĹ‚ami â€žSystemy rodzinneâ€ť**
- [ ] **Nowa zakĹ‚adka z 12 artykuĹ‚ami â€žWystÄ…pienia publiczne i autoprezentacjaâ€ť**
- [ ] **Nowa zakĹ‚adka z 12 artykuĹ‚ami â€žPsycholog w ITâ€ť**


