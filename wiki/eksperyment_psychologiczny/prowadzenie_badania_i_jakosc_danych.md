---
title: Prowadzenie badania i jakość danych
lastReviewed: 2026-08-07
reviewCycleMonths: 24
evidenceCutoffDate: 2026-08-07
---

# Prowadzenie badania i jakość danych

Podczas sesji [projekt eksperymentu](wprowadzenie.md) staje się kontaktem z uczestnikiem i strumieniem danych. Jakości nie można dodać po zakończeniu rekrutacji: tworzą ją wierna realizacja protokołu, bezpieczne traktowanie uczestnika, sprawny pomiar oraz ślad decyzji pozwalający odróżnić obserwację od późniejszej korekty.

## Standaryzacja procedury

Standaryzacja oznacza stałość elementów istotnych dla porównania, nie bezrefleksyjną identyczność każdego kontaktu. Protokół określa kolejność, czas, brzmienie instrukcji, ustawienia sprzętu, warunki otoczenia, dopuszczalne odpowiedzi na pytania oraz kryteria przerwania. Listy kontrolne przed sesją, podczas niej i po niej ograniczają pominięcia. W badaniu zdalnym trzeba dodatkowo rejestrować zgodność urządzenia, przerwy w połączeniu i okoliczności, których laboratorium nie kontroluje.

Identyfikator wersji powinien łączyć sesję z użytymi materiałami i oprogramowaniem. Zmiany w trakcie zbierania danych zatwierdza się zgodnie z protokołem, zapisując datę, powód, zakres osób objętych zmianą i potencjalny wpływ na wynik.

## Szkolenie i nadzór nad zespołem

Szkolenie obejmuje nie tylko odczyt instrukcji, ale też próby całej sesji, obsługę awarii, rozpoznawanie kryteriów zatrzymania, ochronę danych i komunikację bez sugerowania odpowiedzi. Dopuszczenie do samodzielnej pracy powinno zależeć od obserwowalnych kompetencji, a nie od samej obecności na szkoleniu. Okresowe kontrole wierności protokołowi pozwalają wykrywać dryf.

Podział ról ogranicza konflikty interesów. Osoba rekrutująca nie musi znać przyszłego warunku, prowadzący nie musi widzieć wcześniejszych wyników, a analityk może otrzymać warunki oznaczone neutralnie. Uprawnienia do danych nadaje się zgodnie z zasadą minimalnego dostępu.

## Randomizacja i zaślepienie w praktyce

Sekwencję przydziału generuje się przed sesją i ukrywa do właściwego momentu. Ręczne „wyrównywanie grup” przez prowadzącego nie jest randomizacją. System zapisuje wynik przydziału i błędy, ale nie powinien ujawniać kolejnych pozycji listy.

Zaślepienie może dotyczyć uczestnika, prowadzącego, kodera wyniku lub analityka. Należy podać, kto nie znał jakiej informacji i do kiedy, zamiast używać niejednoznacznego określenia „podwójnie ślepa próba”. Każde ujawnienie warunku się dokumentuje. Gdy interwencji nie da się ukryć, można standaryzować kontakt, stosować zaślepioną ocenę wyniku i aktywny warunek kontrolny.

## Odstępstwa, incydenty i wierność protokołowi

**Odstępstwo** to różnica między zatwierdzonym protokołem a realizacją; **incydent techniczny** może, lecz nie musi, powodować odstępstwo; **zdarzenie niepożądane** dotyczy szkody lub niepożądanej reakcji uczestnika. Rejestr powinien zawierać czas, opis bez interpretacyjnego upiększania, etap, warunek (jeśli osoba zapisująca może go znać), działanie naprawcze i osobę podejmującą decyzję.

Nie należy usuwać sesji automatycznie tylko dlatego, że wystąpiło odstępstwo. Wpływ zdarzenia ocenia się według wcześniej określonych reguł, a nie po obejrzeniu wyniku. Poważne albo powtarzalne problemy mogą wymagać wstrzymania rekrutacji, zgłoszenia komisji i zmiany protokołu.

## Obserwacja jako metoda pomiaru

Obserwacja badawcza przekształca zachowanie w dane według uprzednich reguł. Różni się od [obserwacji klinicznej](../diagnoza/wywiad_psychologiczny.md#obserwacja-fakt-zapis-i-interpretacja) celem i logiką wnioskowania. Schemat obserwacyjny określa sytuację, jednostkę kodowania, kategorie, sposób próbkowania osób, czasu lub zdarzeń oraz reguły dla materiału nieczytelnego.

Mierzyć można częstość, czas trwania, latencję, intensywność albo sekwencję zachowań. Próbkowanie ogniskowe śledzi jedną osobę, skanowe okresowo obejmuje grupę, zdarzeniowe rejestruje wskazane zajście, a interwałowe obecność zachowania w odcinkach czasu. Interwały tej samej osoby nie są niezależnymi uczestnikami.

Podręcznik kodowania zawiera definicje włączające i wykluczające, przykłady graniczne oraz kod „nie można ocenić”. Koderzy ćwiczą na materiale treningowym, a zgodność ocenia się na niezależnie kodowanej, reprezentatywnej próbce przed uzgodnieniem rozbieżności. Dla kategorii można stosować kappę, a dla wyników ilościowych odpowiednio dobrany współczynnik korelacji wewnątrzklasowej. Sam procent zgodności nie koryguje zgodności przypadkowej. Wybrany współczynnik, model, próbkę i przedział ufności trzeba raportować; jeden uniwersalny próg nie zastępuje oceny konsekwencji błędu. Ukryte próbki kontrolne i okresowa kalibracja pomagają wykryć dryf kodowania.

## Kontrola jakości w toku zbierania danych

Kontrole automatyczne powinny wykrywać niedopuszczalne zakresy, niespójne identyfikatory, brakujące znaczniki czasu, duplikaty i awarie zapisu. Kontrola ręczna nie może zmieniać danych źródłowych bez historii. Dane surowe zachowuje się jako tylko do odczytu, a czyszczenie i budowę zbioru analitycznego wykonuje odtwarzalny skrypt.

Monitorowanie jakości prowadzi się bez podglądania efektu między warunkami, o ile projekt sekwencyjny tego nie przewiduje. Można sprawdzać kompletność, tempo rekrutacji, czas reakcji, jakość sygnału, rozkład przydziału i zdarzenia niepożądane. Progi alarmowe oraz osoby uprawnione do zatrzymania badania powinny być ustalone wcześniej.

## Braki danych, artefakty i wykluczenia

Plan jakości i plan analizy muszą wspólnie określać, kiedy pomiar jest brakujący, wadliwy technicznie lub biologicznie mało prawdopodobny. **Obserwacja skrajna** może być prawdziwa; nie jest synonimem błędu. Artefakt identyfikuje się za pomocą cech procesu pomiarowego, na przykład nasycenia czujnika, a nie dlatego, że osłabia hipotezę.

Dla braków danych zapisuje się zakres i prawdopodobny mechanizm ich powstania. Usuwanie wszystkich niekompletnych przypadków może obciążać wynik i zmniejszać precyzję. W zależności od modelu oraz założeń właściwe mogą być estymacja pełnej informacji, wielokrotna imputacja i analizy wrażliwości. Imputacja nie odtwarza informacji, której systematycznie nie zebrano, dlatego należy jawnie badać zależność wniosków od założeń.

Kryteria wykluczeń ustala się przed analizą i stosuje bez znajomości wyniku oraz, gdy to możliwe, warunku. Raportuje się liczby i powody na każdym etapie. Warto porównać analizę główną z rozsądnymi wariantami obejmującymi sporne przypadki. Nie wolno zastępować wyniku po randomizacji wyłącznie analizą osób „idealnie przestrzegających” procedury bez omówienia obciążenia selekcyjnego.

## Zarządzanie i bezpieczeństwo danych

Plan zarządzania danymi opisuje formaty, słownik zmiennych, identyfikatory, walidację, kopie zapasowe, wersjonowanie, okres przechowywania i odpowiedzialność. Dane kontaktowe przechowuje się oddzielnie od wyników, a klucz łączenia zabezpiecza mocniej niż zbiór pseudonimizowany. Rejestr transformacji wskazuje, kto, kiedy i dlaczego podjął decyzję.

Zasady FAIR, czyli odnajdywalność, dostępność, interoperacyjność i możliwość ponownego użycia, nie znaczą „publiczne dla wszystkich”. Dostęp może wymagać umowy, bezpiecznego środowiska lub pozostać niemożliwy, gdy ryzyko prywatności przeważa nad korzyścią.

## Etyka podczas sesji

Ogólne podstawy zgody, oceny ryzyka, ochrony prywatności i nadzoru komisji przedstawia kanoniczny artykuł [Etyka badań naukowych w psychologii](../etyka/etyka_badan.md). Tutaj istotne jest ich wykonanie podczas konkretnej sesji.

**Świadoma zgoda** jest procesem poprzedzającym udział: osoba otrzymuje zrozumiałą informację, ma możliwość zadania pytań i dobrowolnie potwierdza decyzję. Nie jest tym samym co **debriefing**, czyli wyjaśnienie rzeczywistego celu i procedury po udziale. Uczestnik ma prawo odmówić odpowiedzi, zrobić przerwę oraz **wycofać udział** bez kary; zakres możliwości wycofania już zanonimizowanych danych trzeba wyjaśnić zgodnie z rzeczywistym procesem danych.

Zatajenie celu lub wprowadzenie w błąd może być dopuszczalne tylko wtedy, gdy jest metodologicznie konieczne, nie istnieje wystarczająca alternatywa, ryzyko pozostaje dopuszczalne, a komisja zatwierdziła procedurę. Nie zataja się ryzyka ani informacji, które mogłyby rozsądnie zmienić decyzję o udziale. Debriefing ujawnia zatajenie i jego powód, prostuje fałszywe przekonania, ocenia dobrostan, przypomina właściwe zasady dotyczące danych i podaje kontakt do zespołu oraz komisji.

Prowadzący powinien znać kryteria przerwania, ścieżkę pomocy i procedurę zgłaszania zdarzeń. Dobrowolność trzeba chronić szczególnie przy zależności służbowej lub dydaktycznej oraz wynagrodzeniu. Bezpieczeństwo uczestnika ma pierwszeństwo przed kompletnością rekordu.

## Przekazanie zbioru do analizy

Przed zamknięciem zbioru zespół uzgadnia rejestr rekrutacji z zapisami sesji, zamraża wersję danych surowych, uruchamia zaplanowane kontrole i tworzy raport jakości. Zbiór analityczny otrzymuje numer wersji, słownik, kod transformacji oraz listę udokumentowanych odstępstw. Dopiero taki pakiet przechodzi do etapu [analizy, raportowania i replikacji](analiza_raportowanie_i_replikacja.md).

## Bibliografia

- Altmann, J. (1974). Observational study of behavior: Sampling methods. *Behaviour, 49*(3–4), 227–267. [https://doi.org/10.1163/156853974X00534](https://doi.org/10.1163/156853974X00534)
- Hallgren, K. A. (2012). Computing inter-rater reliability for observational data: An overview and tutorial. *Tutorials in Quantitative Methods for Psychology, 8*(1), 23–34. [https://doi.org/10.20982/tqmp.08.1.p023](https://doi.org/10.20982/tqmp.08.1.p023)
- Little, R. J. A., & Rubin, D. B. (2019). *Statistical Analysis with Missing Data* (3rd ed.). Wiley.
- National Commission for the Protection of Human Subjects of Biomedical and Behavioral Research. (1979). *The Belmont Report*. U.S. Department of Health and Human Services.
- Shadish, W. R., Cook, T. D., & Campbell, D. T. (2002). *Experimental and Quasi-Experimental Designs for Generalized Causal Inference*. Houghton Mifflin.
- Wilkinson, M. D., et al. (2016). The FAIR guiding principles for scientific data management and stewardship. *Scientific Data, 3*, 160018. [https://doi.org/10.1038/sdata.2016.18](https://doi.org/10.1038/sdata.2016.18)
- World Medical Association. (2024). Declaration of Helsinki: Ethical principles for medical research involving human participants. *JAMA, 333*(1), 71–74. [https://doi.org/10.1001/jama.2024.21972](https://doi.org/10.1001/jama.2024.21972)
