# Referencja parsera: listy wielopoziomowe

## Kontekst testu
Ten artykuł‚ referencyjny zawiera przypadki graniczne dla parsera Markdown w PsyHub. Celem jest sprawdzenie, czy zagnieżdżone listy numerowane i nienumerowane renderują sie stabilnie.

## Przypadek 1: lista nienumerowana z trzema poziomami
- Poziom 1 â€” diagnoza
  - Poziom 2 â€” wywiad kliniczny
    - Poziom 3 â€” pytania o objawy
    - Poziom 3 â€” pytania o zasoby
  - Poziom 2 â€” obserwacja zachowania
- Poziom 1 â€” plan interwencji

### Dobra praktyka
- Utrzymuj spojne wciecia (2 spacje).
  - Dzieki temu parser nie â€žgubiâ€ť poziomu.

### Zł‚a praktyka
- Mieszanie wcieć przypadkowo.
   - Jeden poziom ma 3 spacje, a kolejny 2.

Konsekwencja: użytkownik otrzymuje niejednoznaczną strukture i trudniej ł›ledzić logike listy.

## Przypadek 2: lista numerowana z trzema poziomami
1. Etap konceptualizacji
   1. Identyfikacja problemu
      1. Operacjonalizacja objawu
      2. Kryteria nasilenia
   2. Hipotezy robocze
2. Etap planowania
   1. Wybor narzedzi

## Przypadek 3: listy mieszane
1. Proces badawczy
   - Dobor proby
   - Walidacja narzedzia
     1. Rzetelnoł›ć
     2. Trafnoł›ć
2. Raportowanie
   - Ograniczenia
   - Implikacje praktyczne

### Perspektywa nieoczywista
W praktyce edukacyjnej listy peł‚nią role â€žmikro-struktury argumentuâ€ť. To nie tylko formatowanie, ale narzedzie epistemiczne: dobrze uł‚ożona lista porządkuje relacje przyczynowo-skutkowe i obniża koszt poznawczy analizy tekstu.


Parser powinien poprawnie obsł‚użyć:
- 2â€“3 poziomy zagnieżdżeł„,
- zmiane typu listy (UL â†” OL),
- przejrzystoł›ć semantyczną bez utraty czytelnoł›ci.

## Bibliografia
1. Gruber, J. (2004). *Markdown* (specyfikacja pierwotna).
2. CommonMark. (2024). *CommonMark Spec*.
3. W3C. (2021). *HTML Living Standard* â€” sekcje dotyczące list.
