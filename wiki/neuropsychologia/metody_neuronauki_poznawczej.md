---
title: Metody neuronauki poznawczej
aliases:
  - neuronauka poznawcza
  - neuroobrazowanie
  - eye tracking
lastReviewed: 2026-08-01
reviewCycleMonths: 24
evidenceCutoffDate: 2026-07-31
---

# Metody neuronauki poznawczej

Neuronauka poznawcza łączy pomiary zachowania i fizjologii, aby testować modele percepcji, uwagi, pamięci, języka i działania. Aparatura nie odczytuje bezpośrednio myśli. Każda metoda rejestruje konkretny sygnał, a przypisanie mu procesu psychicznego jest wnioskiem zależnym od projektu badania, modelu i alternatywnych wyjaśnień.

## Co naprawdę mierzą metody

| Metoda | Sygnał | Rozdzielczość czasowa | Rozdzielczość przestrzenna | Typowe ograniczenia |
|---|---|---|---|---|
| EEG/ERP | napięcie na skórze głowy powstające głównie z zsynchronizowanych potencjałów postsynaptycznych | milisekundy | niska, zależna od modelu źródeł | mruganie, mięśnie, ruch, przewodnictwo tkanek |
| fMRI BOLD | zmiana utlenowania krwi związana pośrednio z aktywnością neuronalną | sekundy | milimetry | opóźnienie hemodynamiczne, ruch, szum fizjologiczny |
| PET | rozkład znacznika promieniotwórczego, zależnie od ligandu metabolizm lub wiązanie molekularne | dziesiątki sekund–minuty | zwykle kilka milimetrów | promieniowanie, koszt, kinetyka znacznika |
| MRI strukturalne | właściwości relaksacji protonów i kontrast tkanek | nie służy do śledzenia szybkiej aktywności | około milimetra lub mniej | ruch, segmentacja, brak bezpośredniej miary funkcji |
| DWI/DTI | kierunkowość dyfuzji wody | nie służy do śledzenia szybkiej aktywności | milimetry | skrzyżowania włókien, niejednoznaczność traktografii |
| eye tracking | położenie źrenicy i odbicie rogówkowe | milisekundy | położenie spojrzenia, nie lokalizacja aktywności mózgu | utrata kalibracji, mruganie, założenia o uwadze |

Parametry zależą od urządzenia i protokołu, dlatego tabela pokazuje rząd wielkości, nie gwarancję. Lepsza rozdzielczość jednej osi zwykle nie usuwa niepewności interpretacyjnej.

## EEG i potencjały związane ze zdarzeniem

EEG dobrze śledzi czas zmian, rytmy i odpowiedzi związane ze zdarzeniami (ERP). Sygnał na elektrodzie jest mieszaniną wielu źródeł, zniekształconą przez czaszkę i skórę. Lokalizacja generatora stanowi problem odwrotny, który ma wiele matematycznie zgodnych rozwiązań. Filtry, wybór odniesienia, odrzucanie prób i korekcja artefaktów muszą być opisane przed interpretacją różnic między warunkami.

## fMRI, PET i metody strukturalne

Sygnał BOLD jest pośrednią miarą odpowiedzi naczyniowej. Kontrast między warunkami wskazuje różnicę sygnału przy przyjętym modelu, a nie „obszar włączony wyłącznie dla” danej zdolności. Analiza połączeń funkcjonalnych opisuje współzmienność; sama nie przesądza o kierunku ani przyczynowości.

PET może badać metabolizm albo układ receptorowy, jeżeli dostępny jest odpowiedni znacznik. Koszt, ekspozycja na promieniowanie i wolna dynamika ograniczają liczbę pomiarów. MRI strukturalne służy do oceny morfologii, a DWI do wnioskowania o mikrostrukturze istoty białej. Traktografia rekonstruuje prawdopodobne przebiegi na podstawie dyfuzji, nie pokazuje aksonów bezpośrednio i może tworzyć połączenia fałszywie dodatnie lub pomijać rzeczywiste.

## Ruchy oczu

Eye tracking umożliwia analizę fiksacji, sakkad, czasu przebywania w obszarze zainteresowania i zmian średnicy źrenicy. Fiksacja nie jest tożsama z uwagą, a dłuższe spojrzenie może oznaczać zainteresowanie, trudność, zaskoczenie albo kontrolę zadania. Pupillometria jest wrażliwa na luminancję i wiele procesów autonomicznych. Poprawny projekt kontroluje bodźce, kalibrację, ubytki danych oraz arbitralność definicji fiksacji i obszarów zainteresowania.

## Muse jako przykład konsumenckiego EEG

Muse i podobne opaski rejestrują EEG z niewielu suchych elektrod i zwykle oferują aplikacje do relaksacji lub neurofeedbacku (Krigolson i in., 2017). Mogą służyć do demonstracji rytmów, prostych projektów edukacyjnych i niektórych badań poza laboratorium. Mniejsza liczba kanałów, położenie elektrod, podatność na ruch oraz nieprzejrzyste algorytmy ograniczają jednak lokalizację źródeł i interpretację stanów psychicznych.

Konsumenckie EEG nie diagnozuje ADHD, depresji, padaczki ani „poziomu medytacji”. Informacja zwrotna może wspierać praktykę, lecz nie dowodzi specyficznej zmiany klinicznej. Muse jest urządzeniem pomiarowym o określonych parametrach, nie osobnym działem neuropsychologii ani zamiennikiem aparatury medycznej.

## Od sygnału do wniosku

**Odwrotne wnioskowanie** zachodzi, gdy z aktywności regionu wnioskuje się o jednym procesie psychicznym dlatego, że region bywa z nim związany. Jeżeli ten sam obszar uczestniczy w wielu procesach, wniosek jest słaby. Wiarygodność zwiększają selektywne przewidywania, porównania modeli, niezależne lokalizatory i konwergencja EEG, obrazowania, zachowania oraz danych z uszkodzeń lub stymulacji.

Tysiące elektrod, punktów czasu, wokseli lub połączeń tworzą problem **wielokrotnych porównań**. Próg nieskorygowany zwiększa liczbę wyników przypadkowych. Stosuje się między innymi kontrolę błędu rodzinnego lub odsetka fałszywych odkryć, a analizę potwierdzającą należy oddzielić od eksploracyjnej. Wybór regionu na podstawie tych samych danych, na których testuje się efekt, prowadzi do analizy kołowej.

## Artefakty, replikacja i dobra praktyka

Ruch głowy może naśladować zmiany fMRI i połączeń, a mięśnie twarzy aktywność EEG. Mruganie, oświetlenie i utrata kalibracji zmieniają dane okulograficzne. Usuwanie artefaktów nie jest neutralne: może również usunąć sygnał. Plan analizy powinien z góry określać kryteria wykluczeń, a raport podawać jakość danych i wrażliwość wyników na decyzje analityczne.

Małe próby dają niestabilne oszacowania i zawyżone efekty. Rejestracja hipotez, jawne dane i kod, walidacja poza próbą oraz replikacja ograniczają swobodę analityczną. Klasyfikator, który rozróżnia warunki w jednej próbie, nie jest jeszcze narzędziem diagnostycznym: potrzebuje walidacji zewnętrznej, kalibracji i oceny użyteczności klinicznej.

## Jak dobierać metodę

Metodę wybiera się do hipotezy. EEG odpowiada na pytania o czas, fMRI o rozkład odpowiedzi hemodynamicznej, PET o wybrane procesy molekularne, MRI o strukturę, a eye tracking o zachowanie wzrokowe. Łączenie metod jest wartościowe, gdy każda wnosi niezależne ograniczenie modelu, nie wtedy, gdy mnoży dekoracyjne miary.

## Bibliografia

- Eklund, A., Nichols, T. E., & Knutsson, H. (2016). Cluster failure: Why fMRI inferences for spatial extent have inflated false-positive rates. *PNAS, 113*(28), 7900–7905. [https://doi.org/10.1073/pnas.1602413113](https://doi.org/10.1073/pnas.1602413113)
- Luck, S. J. (2014). *An introduction to the event-related potential technique* (2nd ed.). MIT Press.
- Poldrack, R. A. (2006). Can cognitive processes be inferred from neuroimaging data? *Trends in Cognitive Sciences, 10*(2), 59–63. [https://doi.org/10.1016/j.tics.2005.12.004](https://doi.org/10.1016/j.tics.2005.12.004)
- Poldrack, R. A., Mumford, J. A., & Nichols, T. E. (2011). *Handbook of functional MRI data analysis*. Cambridge University Press.
- Krigolson, O. E., Williams, C. C., Norton, A., Hassall, C. D., & Colino, F. L. (2017). Choosing MUSE: Validation of a low-cost, portable EEG system for ERP research. *Frontiers in Neuroscience, 11*, 109. [https://doi.org/10.3389/fnins.2017.00109](https://doi.org/10.3389/fnins.2017.00109)
- Yarkoni, T. (2022). The generalizability crisis. *Behavioral and Brain Sciences, 45*, e1. [https://doi.org/10.1017/S0140525X20001685](https://doi.org/10.1017/S0140525X20001685)
