# Standard nazewnictwa treści wiki

## Konwencja globalna

W całym katalogu `wiki/**` stosujemy **jedną konwencję**:

- nazwy katalogów i plików w `snake_case`,
- tylko małe litery `a-z`, cyfry `0-9` i podkreślenie `_`,
- bez polskich znaków,
- język nazw: **polski** (spójny z kontekstem polskiej psychologii).

Przykład poprawny:

- `wiki/temperament/rozwoj.md`
- `wiki/reacting_to_criticism/czym_jest_krytyka_i_informacja_zwrotna.md`

Przykład niepoprawny:

- `wiki/temperament/razvoj.md` (literówka i niespójność językowa)
- `wiki/reacting_to_criticism/czym_jest_krytyka_i_feedback.md` (mieszanka polskiego i angielskiego)

## Mapa rename (pierwsza fala porządkowania)

- `wiki/temperament/razvoj.md` → `wiki/temperament/rozwoj.md`
- `wiki/reacting_to_criticism/czym_jest_krytyka_i_feedback.md` → `wiki/reacting_to_criticism/czym_jest_krytyka_i_informacja_zwrotna.md`

## Walidacja

Do automatycznej kontroli używamy:

- `node tools/check_content.js`

Skrypt sprawdza m.in. zgodność nazw plików i katalogów `wiki/**` z powyższą konwencją.
