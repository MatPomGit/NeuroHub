# Analiza błędów spójności strony PsyHub

## Cel analizy

Celem przeglądu było wskazanie elementów, które sprawiają wrażenie nieuporządkowania strony, oraz usunięcie najbardziej widocznych niespójności bez przebudowy architektury serwisu.

## Najważniejsze problemy

1. **Niespójne nazwy działów w konfiguracji i grupowaniu nawigacji**
   - Część nazw w `site-config.js` była zapisana bez polskich znaków, a równoległa mapa grup w `app.js` używała tych samych niepoprawnych wariantów.
   - Skutek: nawigacja boczna i strona główna wyglądały mniej profesjonalnie, mimo że dotyczyły tych samych działów tematycznych.

2. **Widoczne artefakty kodowania znaków**
   - W interfejsie pojawiały się uszkodzone sekwencje zastępujące strzałki, pauzy lub polskie znaki.
   - Skutek: komunikaty techniczne i etykiety wyglądały jak uszkodzone, co obniżało wiarygodność strony edukacyjnej.

3. **Nierówny styl etykiet i komunikatów użytkowych**
   - Część tekstów miała poprawną polszczyznę, a część była zapisana fonetycznie lub bez znaków diakrytycznych.
   - Skutek: elementy strony nie tworzyły jednolitego tonu, mimo że wizualnie korzystały z tych samych komponentów.

4. **Nieczytelne oznaczenia relacji i przejść**
   - Strzałki poprzedni/następny, link zewnętrzny oraz powrót z przypisu były zapisane jako artefakty kodowania.
   - Skutek: użytkownik otrzymywał poprawną funkcję, ale z błędną warstwą tekstową.

## Wprowadzone porządki

- Ujednolicono kluczowe nazwy działów i grup tematycznych w nawigacji.
- Poprawiono widoczne komunikaty ładowania, przejścia między artykułami, etykiety statusów i komunikaty narzędzi pomiarowych.
- Zastąpiono uszkodzone znaki prawidłowymi symbolami: `←`, `→`, `↗`, `↩` oraz wielokropkiem `…`.
- Poprawiono wybrane etykiety w katalogu działów, planach i dodatkowych stronach, zachowując istniejące identyfikatory oraz ścieżki plików.

## Rekomendacje na kolejne kroki

1. Przejść etapami przez pozostałe etykiety w `site-config.js`, szczególnie dalsze sekcje planów i słownika, aby usunąć resztki zapisu bez polskich znaków.
2. Dodać prosty test statyczny wykrywający artefakty kodowania w tekstach widocznych dla użytkownika.
3. Ograniczyć przyszłe zmiany nawigacji do jednego miejsca konfiguracji lub dodać walidację zgodności nazw sekcji między `site-config.js` i `app.js`.
