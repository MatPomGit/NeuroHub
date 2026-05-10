# Audyt treści wiki (content audit)

## Cel
Ten dokument porządkuje proces przeglądu jakości artykułów i wyznacza priorytety aktualizacji.

## Tabela audytowa

| Ścieżka artykułu | Ma bibliografię (tak/nie) | Ma dobre/złe praktyki (tak/nie) | Ma perspektywę nieoczywistą (tak/nie) | Ma cytat badacza (tak/nie) | Priorytet aktualizacji |
|---|---|---|---|---|---|
| `wiki/wstep_do_psychologii/definicja.md` | nie | nie | nie | nie | wysoki |
| `wiki/psychoterapia/cbt.md` | nie | nie | nie | nie | wysoki |
| `wiki/zaburzenia/adhd.md` | nie | nie | nie | nie | wysoki |
| `wiki/seksuologia/seksuologia_wprowadzenie.md` | nie | nie | nie | nie | wysoki |
| `wiki/psychologia_ai/wprowadzenie.md` | nie | nie | nie | nie | średni |
| `wiki/psychologia_religii/wprowadzenie.md` | nie | nie | nie | nie | średni |
| `wiki/animaloterapia/animaloterapia_wprowadzenie.md` | nie | nie | nie | nie | średni |
| `wiki/dla_studentow/sciezki_kariery.md` | nie | nie | nie | nie | niski |

> Uwaga: wartości początkowe w tabeli należy traktować jako status roboczy do weryfikacji podczas kolejnych iteracji redakcyjnych.

## Plan prac etapowych

### Etap 1: standaryzacja nazw
- Weryfikacja, czy wszystkie pliki i katalogi w `wiki/**` są zapisane w konwencji `snake_case`.
- Korekta nazw plików niezgodnych ze standardem.
- Aktualizacja odwołań po zmianach (linki wewnętrzne, `site-config.js`, pliki referencyjne).

### Etap 2: uzupełnienie struktury
- Uzupełnienie brakujących sekcji wymaganych standardem redakcyjnym:
  - wprowadzenie,
  - definicje,
  - analiza,
  - dobra praktyka,
  - zła praktyka,
  - perspektywa nieoczywista,
  - podsumowanie,
  - bibliografia.
- Integracja wartościowych istniejących treści bez nadpisywania sensu merytorycznego.

### Etap 3: cytaty + bibliografia
- Dodanie co najmniej jednego cytatu badacza (krótkiego, kontekstowego i poprawnie opisanego) do każdego aktualizowanego artykułu.
- Uzupełnienie sekcji `## Bibliografia` o źródła recenzowane i/lub podręcznikowe.
- Weryfikacja aktualności źródeł oraz równowagi między klasycznymi i nowszymi publikacjami.

### Etap 4: walidacja automatyczna
- Uruchomienie walidatora struktury artykułów:
  - `python3 tools/konwerter.py validate-article wiki/**/*.md`
- Uruchomienie zintegrowanej kontroli treści:
  - `node tools/check_content.js`
- Naprawa błędów i ponowna walidacja do momentu uzyskania wyniku pozytywnego.

## Definition of Done (DoD) dla artykułu
Artykuł uznaje się za gotowy, gdy łącznie spełnia poniższe kryteria:

1. Ma komplet sekcji wymaganych standardem redakcyjnym projektu.
2. Zawiera sekcję `## Bibliografia` jako ostatni rozdział.
3. Obejmuje co najmniej jeden przykład dobrej praktyki i jeden przykład złej praktyki (lub częstego błędu).
4. Przedstawia perspektywę nieoczywistą wraz z uzasadnieniem.
5. Zawiera co najmniej jeden cytat badacza osadzony w kontekście omawianego zagadnienia.
6. Opiera twierdzenia i dane na wiarygodnych źródłach naukowych.
7. Utrzymuje spójne nazewnictwo (`snake_case`) oraz poprawną lokalizację pliku w strukturze `wiki/`.
8. Przechodzi walidację automatyczną bez błędów.
