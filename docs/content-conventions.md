# Standard nazewnictwa treści wiki

## Konwencja globalna

W całym katalogu `wiki/**` stosujemy **jedną konwencję**:

- nazwy katalogów i plików w `snake_case`,
- tylko małe litery `a-z`, cyfry `0-9` i podkreślenie `_`,
- bez polskich znaków,
- język nazw: **polski** (spójny z kontekstem polskiej psychologii).

Przykład poprawny:

- `wiki/temperament/rozwoj.md`
- `wiki/reagowanie_na_krytyke/czym_jest_krytyka_i_informacja_zwrotna.md`

Przykład niepoprawny:

- `wiki/temperament/razvoj.md` (literówka i niespójność językowa)
- `wiki/reagowanie_na_krytyke/czym_jest_krytyka_i_feedback.md` (mieszanka polskiego i angielskiego)

## Mapa rename (pierwsza fala porządkowania)

- `wiki/temperament/razvoj.md` → `wiki/temperament/rozwoj.md`
- `wiki/reagowanie_na_krytyke/czym_jest_krytyka_i_feedback.md` → `wiki/reagowanie_na_krytyke/czym_jest_krytyka_i_informacja_zwrotna.md`

## Walidacja

Do automatycznej kontroli używamy:

- `node tools/check_content.js`

Skrypt sprawdza m.in. zgodność nazw plików i katalogów `wiki/**` z powyższą konwencją.

## Reguła opcjonalnej sekcji „Cytat badacza”

W artykułach `wiki/**` można dodać sekcję:

- `## Cytat badacza`

Sekcja jest **opcjonalna** i powinna być umieszczona:

- po sekcji definicji (jeśli występuje), albo
- po części analitycznej.

### Wymagane metadane cytatu

Każdy cytat w sekcji `## Cytat badacza` musi zawierać komplet metadanych:

- **autor**,
- **rok**,
- **źródło pierwotne (publikacja)**,
- **interpretacja**: 1–2 zdania, które łączą cytat z treścią artykułu.

Rekomendowany format listy:

- `- autor: ...`
- `- rok: ...`
- `- źródło: ...`
- `- cytat: „...”`
- `- interpretacja: ...`

### Dozwoleni autorzy per dział

- **emocje**: Ekman, Barrett, Lazarus,
- **temperament**: Strelau, Eysenck, Gray, Kagan,
- **psychoterapia/farmakologia**: Beck, Linehan, Kendler (zależnie od tematu).

Jeśli temat artykułu wykracza poza powyższe działy, autor cytatu powinien być dobrany adekwatnie do literatury danego obszaru.

### Ograniczenia redakcyjne

- maksymalnie **1 cytat na sekcję**,
- cytat dodajemy tylko wtedy, gdy realnie wspiera argument,
- cytat musi mieć pełny wpis w sekcji `## Bibliografia`.

### Walidacja automatyczna

Skrypt `node tools/check_content.js` sprawdza dodatkowo:

- jeśli w pliku istnieje sekcja `## Cytat badacza`,
- to musi istnieć sekcja `## Bibliografia`,
- oraz w bibliografii musi pojawić się wpis odpowiadający metadanym cytatu (kontrola autora i roku).

## Standard językowy dla treści użytkownika końcowego

Dla wszystkich treści widocznych dla użytkownika końcowego (artykuły, opisy, komunikaty interfejsu, śródtytuły, podpisy tekstowe) obowiązują następujące zasady:

- stosuj poprawną polszczyznę (ortografia, interpunkcja, fleksja, składnia),
- zachowuj zasady stylistyczne języka polskiego i unikaj nieuzasadnionych kalk językowych,
- dbaj o spójny rejestr wypowiedzi w obrębie jednego materiału.

### Wyjątki

Powyższe reguły nie dotyczą elementów, które z natury mają charakter techniczny lub skrótowy:

- kod programu,
- tabele,
- rysunki.

### Ograniczenie stosowania długiej pauzy „—”

- ograniczaj użycie znaku „—” do sytuacji, w których jest on niezbędny dla precyzji lub czytelności zdania,
- domyślnie preferuj inne poprawne środki interpunkcyjne (przecinek, nawias, dwukropek),
- nie nadużywaj długiej pauzy jako uniwersalnego separatora myśli.
