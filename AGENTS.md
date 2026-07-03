# AGENTS.md

## Cel dokumentu

Ten dokument określa zasady pracy agenta AI, który tworzy lub modyfikuje treści artykułowe w projekcie **PsyHub**.

## Standard językowy i styl

1. **Poprawna polszczyzna**

   - Pisz zgodnie z zasadami ortografii, interpunkcji i składni języka polskiego.
   - Unikaj kalk językowych i niepotrzebnych anglicyzmów (chyba że termin specjalistyczny wymaga użycia oryginalnej nazwy).

2. **Forma naukowa**
   - Każdy artykuł prowadź w formie merytorycznej, opartej na sprawdzalnych źródłach.
   - Rozdzielaj fakty od opinii i wyraźnie zaznaczaj, kiedy przedstawiasz interpretację.
   - Stosuj precyzyjne definicje pojęć i utrzymuj spójność terminologiczną w całym tekście.

3. **Jakość merytoryczna**
   - Artykuły muszą reprezentować wysoki poziom jakościowy: klarowna struktura, logiczny wywód, brak uproszczeń zniekształcających temat.
   - Priorytetem jest wartość edukacyjna i rzetelność naukowa.

4. **Ton wypowiedzi**
   - Domyślny język: akademicki i precyzyjny.
   - Poza ścisłymi definicjami dopuszczalny jest swobodniejszy styl, zwięzłe ciekawostki i analogie.
   - Preferowany ton narracji: „doświadczony profesor prowadzący wykład dla młodych studentów” - rzeczowy, życzliwy, obrazowy i inspirujący.

5. **Język treści użytkowych i wyjątki techniczne**
   - Wszystkie treści widoczne dla użytkownika końcowego (np. artykuły, opisy, komunikaty, nagłówki) pisz poprawną polszczyzną i zgodnie z zasadami stylistycznymi języka polskiego, wszędzie tam, gdzie używany jest język polski.
   - Wyjątki od tej reguły (kod programu, tabele oraz rysunki) nie wymagają pełnej redakcji stylistycznej ciągłego tekstu.
   - Ograniczaj użycie długiej pauzy „—”. Preferuj inne poprawne rozwiązania interpunkcyjne (np. przecinek, nawias, dwukropek) i stosuj długą pauzę wyłącznie wtedy, gdy jest rzeczywiście niezbędna dla klarowności wypowiedzi.

## Struktura artykułów

Każdy nowy lub aktualizowany artykuł powinien (o ile temat na to pozwala) zawierać:

1. Krótkie wprowadzenie.
2. Definicje.
3. Część analityczną z omówieniem mechanizmów i zależności.
4. **Praktyczne przykłady**:
   - co najmniej jeden przykład „dobrej praktyki”,
   - co najmniej jeden przykład „złej praktyki” lub częstego błędu,
   - krótkie omówienie konsekwencji obu podejść.
5. Perspektywę nieoczywistą:
   - spróbuj pokazać zagadnienie z innego punktu widzenia niż dominujący społecznie,
   - uzasadnij tę perspektywę argumentami i danymi.
6. Podsumowanie głównych wniosków.
7. **Bibliografię**.

## Bibliografia i źródła

1. Każdy artykuł musi zawierać sekcję **Bibliografia**.
2. Uwzględniaj źródła naukowe wysokiej jakości (np. artykuły recenzowane, podręczniki akademickie, raporty instytucji naukowych).
3. Dbaj o aktualność źródeł oraz równowagę między klasycznymi pozycjami a nowszymi badaniami.
4. Jeśli używasz danych liczbowych, wskaż ich źródło bezpośrednio w treści.
5. Dla każdego wykresu, statystyki lub zestawienia danych podaj adekwatne źródło bezpośrednio przy elemencie albo w jego podpisie.
6. Sekcja `## Bibliografia` musi znajdować się na końcu artykułu (ostatni rozdział).

## Zasady argumentacji

1. Nie powielaj bezrefleksyjnie popularnych opinii.
2. Pokazuj alternatywne interpretacje i ograniczenia prezentowanych podejść.
3. Wskazuj konsekwencje praktyczne omawianych teorii.
4. Jeżeli temat jest kontrowersyjny, przedstaw argumenty wielu stron oraz krótką ocenę jakości dowodów.

## Zasady integralności treści i lokalizacji plików

1. **Nie usuwaj istniejącej treści bez uzasadnienia merytorycznego**
   - Przy aktualizacji artykułu zachowuj dotychczasowe, wartościowe fragmenty.
   - Jeżeli przenosisz treści między sekcjami, integruj je w odpowiednich rozdziałach zamiast kasować.

2. **Integracja zamiast nadpisywania**
   - Nowe treści dopisuj tak, aby rozwijały istniejący wywód i nie tworzyły duplikatów.
   - W przypadku konfliktu treści wybieraj wersję lepiej udokumentowaną źródłowo, a słabszą scalaj lub skracaj z zachowaniem sensu.

3. **Zakaz treści generycznych**
   - Nie dodawaj akapitów ogólnikowych, które mogłyby pasować do dowolnego tematu.
   - Każdy nowy fragment musi być ściśle związany z tematem pliku i oparty na literaturze przedmiotu.

4. **Nazewnictwo i umiejscowienie plików wiki**
   - Nazwy plików i katalogów muszą być w `snake_case`, małymi literami i bez spacji.
   - Artykuł umieszczaj wyłącznie w folderze odpowiadającym jego tematyce (np. diagnoza → `wiki/diagnoza/`, relacje → `wiki/relacje/`).
   - Przy zmianie nazwy lub lokalizacji pliku zaktualizuj wszystkie odwołania (linki wewnętrzne, `site-config.js`, raporty referencyjne).

## Zasady pracy nad architekturą i kodem strony

1. **Stosuj zasadę KISS (Keep It Simple, Stupid)**
   - Wybieraj najprostsze rozwiązanie, które poprawnie spełnia wymagania użytkownika i jest łatwe do utrzymania.
   - Nie dodawaj abstrakcji, warstw pośrednich, wzorców projektowych ani zależności „na zapas”.
   - Zanim utworzysz nowy mechanizm, sprawdź, czy istniejący kod projektu nie rozwiązuje już podobnego problemu w wystarczająco prosty sposób.

2. **Unikaj nadmiernego komplikowania (overengineeringu) architektury strony**
   - Unikaj rozbudowywania struktury katalogów, systemów konfiguracji i komponentów, jeśli zmiana dotyczy prostego wymagania.
   - Preferuj lokalne, czytelne modyfikacje zamiast globalnych refaktoryzacji, o ile nie są one konieczne dla bezpieczeństwa, poprawności lub spójności projektu.
   - Nowe narzędzia, biblioteki i procesy dodawaj tylko wtedy, gdy realnie upraszczają pracę albo eliminują konkretny, udokumentowany problem.

3. **Utrzymuj decyzje techniczne proporcjonalne do skali zadania**
   - Dla małych zmian stosuj małe, bezpośrednie poprawki.
   - Dla większych zmian najpierw zachowaj istniejące konwencje projektu, a dopiero potem rozważaj nową architekturę.
   - Jeżeli wprowadzasz bardziej złożone rozwiązanie, krótko uzasadnij, jaki problem rozwiązuje i dlaczego prostsze podejście byłoby niewystarczające.

## Dodatkowe zasady redakcyjne

1. Unikaj sensacyjności i języka stygmatyzującego.
2. Jeśli to możliwe, stosuj krótkie sekcje i śródtytuły, aby poprawić czytelność.
3. Przy specjalistycznych pojęciach podawaj zwięzłe objaśnienia dla mniej zaawansowanych czytelników.

## Lista kontrolna przed zakończeniem pracy nad artykułem

- [ ] Czy tekst jest napisany poprawną polszczyzną?
- [ ] Czy forma i argumentacja są naukowe i rzetelne?
- [ ] Czy dodano przykłady dobrej i złej praktyki?
- [ ] Czy przedstawiono perspektywę nieoczywistą, popartą argumentami?
- [ ] Czy artykuł zawiera sekcję Bibliografia z wiarygodnymi źródłami?
- [ ] Czy każdy wykres, statystyka lub zestawienie danych ma podane adekwatne źródło?
- [ ] Czy sekcja „## Bibliografia” jest ostatnim rozdziałem artykułu?
- [ ] Czy całość utrzymuje wysoki poziom jakościowy i edukacyjny?
- [ ] Czy podczas edycji zachowano i zintegrowano wartościową treść istniejącą wcześniej?
- [ ] Czy uniknięto generycznych akapitów niedopasowanych do tematu?
- [ ] Czy nazwa i lokalizacja pliku wiki są zgodne z tematyką oraz konwencją snake_case?
