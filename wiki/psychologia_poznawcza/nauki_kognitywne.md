---
lastReviewed: 2026-08-01
reviewCycleMonths: 24
evidenceCutoffDate: 2026-07-31
---

# Nauki kognitywne i architektury poznawcze

Nauki kognitywne badają poznanie przez łączenie pytań, metod i modeli wielu dyscyplin. Interdyscyplinarność nie polega na zestawieniu słownika neuronauki z opisem zachowania, lecz na tworzeniu wyjaśnień, które można sprawdzać na kilku poziomach.

## Dyscypliny i ich wkład

**Psychologia poznawcza** dostarcza paradygmatów behawioralnych i teorii procesów. **Neuronauka** bada biologiczne mechanizmy i skutki interwencji w układ nerwowy. **Językoznawstwo** opisuje strukturę, użycie i nabywanie języka. **Filozofia** analizuje pojęcia, założenia oraz kryteria wyjaśniania. **Sztuczna inteligencja** buduje systemy wykonujące zadania poznawcze i pozwala testować konsekwencje formalnych założeń. Antropologia, edukacja i robotyka wnoszą odpowiednio kontekst kulturowy, uczenie w praktyce oraz sprzężenie z ciałem i środowiskiem.

Sukces systemu sztucznego nie dowodzi, że człowiek rozwiązuje zadanie tym samym algorytmem. Z kolei podobieństwo do aktywacji mózgu nie wystarcza bez przewidywań zachowania.

## Poziomy wyjaśniania

W klasycznym rozróżnieniu Marra poziom **obliczeniowy** określa problem i cel, **algorytmiczny** reprezentacje oraz procedury, a **implementacyjny** fizyczną realizację. Poziomy ograniczają się wzajemnie, nie tworzą jednak prostej drabiny redukcji.

**Model funkcjonalny** mówi, jakie operacje i zależności wystarczają do odtworzenia zjawiska. **Postulat implementacji neuronalnej** mówi, że określone komórki, obwody lub dynamika realizują te operacje. Model pamięci roboczej może trafnie przewidywać błędy bez twierdzenia, że jego „bufor” jest wydzielonym miejscem w mózgu. Aby przejść od funkcji do implementacji, potrzeba danych o lokalizacji, czasie, kodzie i związku przyczynowym.

## Architektury symboliczne

Architektury symboliczne, takie jak ACT-R lub Soar, reprezentują wiedzę za pomocą dyskretnych struktur i reguł. Ułatwiają śledzenie kolejnych kroków, modelowanie celów oraz porównanie przewidywanego czasu i błędów z zachowaniem. Ich ograniczeniami bywają ręczne projektowanie reprezentacji, trudność uczenia z nieustrukturyzowanych danych i słabe odwzorowanie płynnej percepcji.

## Architektury koneksjonistyczne

Modele koneksjonistyczne rozkładają reprezentację na wzorzec aktywności wielu jednostek i uczą się przez zmianę wag. Dobrze opisują stopniowanie podobieństwa, generalizację i nabywanie regularności. Współczesne głębokie sieci osiągają wysoką sprawność, ale mogą wymagać innych danych niż człowiek, wykazywać kruchość poza rozkładem treningowym oraz utrudniać interpretację mechanizmu.

Termin „sieć neuronowa” oznacza inspirację lub klasę modelu matematycznego, nie automatyczną wierność biologiczną. Jednostka modelu zwykle nie odpowiada pojedynczemu neuronowi.

## Architektury hybrydowe

Architektury hybrydowe łączą uczenie rozproszone z manipulacją strukturami, pamięcią roboczą lub planowaniem. Mogą wykorzystywać sieć do percepcji, a reguły do jawnej kontroli albo uczyć reprezentacje potrzebne rozumowaniu. Zyskują elastyczność, lecz mnożą założenia i problemy z przypisaniem wyniku konkretnemu składnikowi. „Hybrydowy” nie znaczy z definicji bardziej psychologicznie trafny.

| Rodzina | Typowa mocna strona | Typowe ograniczenie |
|---|---|---|
| symboliczna | jawne reguły i wieloetapowe planowanie | uczenie reprezentacji i percepcja |
| koneksjonistyczna | uczenie statystyczne i generalizacja | interpretowalność i systematyczność |
| hybrydowa | łączenie uczenia z kontrolą | złożoność i identyfikowalność składników |

Zestawienie syntetyzuje charakterystyki opisane przez Newella (1990), Andersona (2007), McClellanda i współpracowników (1986) oraz Kotseraubę i Tsotsosa (2020).

## Metody i triangulacja

Czas reakcji i błędy ograniczają modele procesu; śledzenie oczu opisuje pobieranie informacji; EEG i MEG dostarczają rozdzielczości czasowej; fMRI wiąże wynik z sygnałem hemodynamicznym; badania uszkodzeń i stymulacja wspierają wnioskowanie przyczynowe. Każda metoda ma własne zmienne zakłócające. Zgodność niezależnych miar, prerejestracja porównań modeli i test na nowych danych są silniejsze niż dopasowanie jednego modelu do jednego zbioru.

Architektura jest wartościowa, gdy generuje ryzykowne przewidywania i obejmuje różne zadania bez dowolnego dostrajania. Wysoka trafność predykcyjna nie zawsze daje zrozumienie, a przejrzysta teoria nie zawsze wystarcza do predykcji. Dobór kryterium musi odpowiadać pytaniu badawczemu.

## Bibliografia

1. Anderson, J. R. (2007). *How Can the Human Mind Occur in the Physical Universe?* Oxford University Press.
2. Busemeyer, J. R., & Diederich, A. (2010). *Cognitive Modeling*. Sage.
3. Kotseruba, I., & Tsotsos, J. K. (2020). 40 years of cognitive architectures. *Artificial Intelligence Review, 53*, 17–94.
4. Marr, D. (1982). *Vision*. W. H. Freeman.
5. McClelland, J. L., Rumelhart, D. E., & PDP Research Group. (1986). *Parallel Distributed Processing*. MIT Press.
6. Newell, A. (1990). *Unified Theories of Cognition*. Harvard University Press.
7. van Rooij, I., & Baggio, G. (2021). Theory before the test. *Perspectives on Psychological Science, 16*, 682–697.
