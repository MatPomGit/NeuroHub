---
title: Analiza, raportowanie i otwarta nauka
lastReviewed: 2026-08-07
reviewCycleMonths: 24
evidenceCutoffDate: 2026-08-07
---

# Analiza, raportowanie i otwarta nauka

Analiza nie jest samodzielnym etapem, w którym wybiera się najkorzystniejszy model. Realizuje plan wynikający z [projektu eksperymentu](wprowadzenie.md), korzystając z udokumentowanego zbioru przekazanego po [prowadzeniu badania i kontroli jakości](prowadzenie_badania_i_jakosc_danych.md). Raport ma umożliwić ocenę całego łańcucha dowodowego, także wtedy, gdy wynik jest nieistotny lub niezgodny z przewidywaniem.

## Od planu analitycznego do wykonania

Przed analizą potwierdzającą należy zablokować wersję danych i kodu, sprawdzić kompletność oraz wykonać zaplanowane transformacje bez podglądania wyniku. Każda hipoteza powinna prowadzić do określonego wyniku, kontrastu, modelu i miary niepewności. Model musi odzwierciedlać projekt: powtarzane pomiary, zagnieżdżenie, stratyfikację i sposób randomizacji.

Dziennik analizy odnotowuje uruchomione modele, błędy, decyzje i powody odstępstw. Korekta oczywistego błędu w prerejestracji może być racjonalna, lecz nie staje się przez to decyzją zaplanowaną. W raporcie podaje się zarówno pierwotną specyfikację, jeśli jest interpretowalna, jak i uzasadnioną zmianę lub analizę wrażliwości.

## Analiza potwierdzająca i eksploracyjna

Analiza **potwierdzająca** testuje wcześniej określoną hipotezę według zamrożonego planu. Analiza **eksploracyjna** szuka wzorców, ocenia nieprzewidziane moderatory albo rozwija nowe modele po kontakcie z danymi. Rozróżnienie dotyczy czasu i swobody decyzji, a nie wartości naukowej.

Eksplorację należy wyraźnie oznaczyć, ujawnić zakres przeszukiwania i traktować jej wyniki jako hipotezy do sprawdzenia na nowych danych. Podział jednego zbioru na część odkrywczą i potwierdzającą lub walidacja krzyżowa może ograniczyć przeuczenie, ale mała próba nie zapewni obu częściom odpowiedniej precyzji. Prerejestracja sama nie czyni analizy potwierdzającą, jeśli zapis pozostawia niemal nieograniczone możliwości wyboru.

## Estymacja efektu i niepewność

**Wielkość efektu** opisuje natężenie różnicy lub związku w skali surowej albo standaryzowanej. Miara surowa bywa łatwiejsza do interpretacji praktycznej, natomiast standaryzowana wspiera porównania, lecz zależy od zmienności próby i własności pomiaru. Należy raportować miarę odpowiadającą projektowi i wyjaśnić kierunek kodowania.

**Przedział ufności** przedstawia zakres wartości zgodnych z danymi i modelem przy określonej procedurze. Nie jest prawdopodobieństwem, że stały parametr leży w konkretnym, już obliczonym przedziale. Szeroki przedział może być zgodny zarówno z korzyścią, brakiem efektu, jak i szkodą; wynik nieistotny nie dowodzi równoważności. Do wniosku o praktycznym braku efektu służą wcześniej zaplanowane testy równoważności lub inne podejścia odnoszące wynik do najmniejszego efektu istotnego praktycznie.

Wartość *p* nie mierzy wielkości efektu, prawdopodobieństwa hipotezy ani jakości badania. Wniosek powinien łączyć estymatę, przedział, zgodność z przewidywaniem, jakość pomiaru i projektu oraz analizy wrażliwości. Niepewność obejmuje nie tylko losowanie próby, lecz także założenia modelu, braki danych, wykluczenia i trafność konstruktu.

## Wielokrotne testowanie i elastyczność analityczna

Testowanie wielu hipotez lub wybieranie spośród wielu punktów końcowych zwiększa ryzyko co najmniej jednego wyniku fałszywie dodatniego. Plan powinien wskazywać rodzinę wniosków i metodę kontroli, na przykład kontrolę rodzinnego błędu I rodzaju lub odsetka fałszywych odkryć. Metoda zależy od celu; mechaniczna korekta wszystkich liczb w raporcie może być równie nieadekwatna jak brak korekty.

Hierarchia wyników głównych i dodatkowych, ograniczona liczba kontrastów oraz ujawnienie wszystkich analiz są ważniejsze niż selektywne przedstawienie skorygowanego wyniku. Analizy wrażliwości sprawdzają, czy wniosek utrzymuje się przy rozsądnych sposobach traktowania braków, obserwacji skrajnych i specyfikacji modelu. Jeśli rozsądne decyzje prowadzą do różnych wniosków, ta niestabilność jest wynikiem, który należy zaraportować.

## Raportowanie kompletne i odtwarzalne

Raport łączy pytanie, hipotezy, projekt, próbę, procedurę, jakość danych i wyniki. Standardy JARS pomagają dobrać wymagane informacje, ale nie zastępują osądu. Należy przedstawić:

- sposób uzasadnienia liczebności i przepływ uczestników;
- operacjonalizacje, randomizację, zaślepienie i odstępstwa;
- reguły braków, artefaktów, wykluczeń i każdą liczebność analityczną;
- wszystkie zaplanowane wyniki, także nieistotne, z wielkościami efektu i niepewnością;
- analizy nieplanowane oznaczone jako eksploracyjne;
- dostępność prerejestracji, danych, materiałów i kodu albo konkretne ograniczenia dostępu.

Tabele i wykresy powinny pokazywać rozkład oraz jednostki, a nie tylko wartości *p*. Kod analityczny, wersje oprogramowania, ziarna generatorów losowych i opis środowiska wspierają odtworzenie obliczeń. Odtwarzalność obliczeniowa nie gwarantuje jednak trafności projektu.

## Ograniczenia jako plan dalszych badań

Sekcja ograniczeń nie jest rytualnym katalogiem wad. Powinna wskazać, jaki element wniosku ogranicza każde zagrożenie, w jakim kierunku może działać i jak można je rozstrzygnąć. Selektywna utrata uczestników osłabia inny aspekt dowodu niż wąska populacja czy niedoskonałe zaślepienie.

Wnioski trzeba ograniczyć do zastosowanej manipulacji, miar, populacji i czasu. Brak istotności, niska moc albo niestabilność specyfikacji nie uprawniają do twierdzenia o braku zjawiska. Z kolei mały efekt może mieć znaczenie przy taniej interwencji lub skumulowanym działaniu, dlatego znaczenie praktyczne wymaga kontekstu, a nie samej standaryzowanej wartości.

## Replikacja i kumulacja dowodów

Replikacja bezpośrednia możliwie wiernie odtwarza operacjonalizacje i kontrast; replikacja konceptualna sprawdza postulowany mechanizm inną procedurą. Pierwsza lepiej ocenia stabilność konkretnego wyniku, druga jego zakres teoretyczny, ale nieudana replikacja konceptualna może być trudna do interpretacji. Replikacja nie jest plebiscytem nad autorami, lecz nowym oszacowaniem obarczonym własną niepewnością.

Projekt replikacji powinien mieć uzasadnioną moc lub precyzję, protokół porównany z oryginałem oraz kryterium interpretacji ustalone przed danymi. Registered Reports ograniczają zależność publikacji od kierunku wyniku. Synteza wielu badań wymaga oceny heterogeniczności, jakości i błędu publikacyjnego; samo policzenie „udanych” replikacji traci informację o wielkości efektów.

## Otwarta nauka z ochroną prywatności

Otwarta nauka to sposób organizacji całego cyklu: jawne pytania i decyzje, prerejestracja, trwała dokumentacja, dostępne materiały i kod, identyfikowalne wersje oraz rzetelne raportowanie wszystkich wyników. Samo umieszczenie plików w repozytorium nie wystarcza, jeśli brakuje metadanych, licencji, słownika zmiennych lub kod nie odtwarza tabel.

Zasada „tak otwarte, jak to możliwe, tak zamknięte, jak to konieczne” wymaga oceny ryzyka ponownej identyfikacji. Usunięcie imienia nie anonimizuje automatycznie nagrań, lokalizacji, dat, rzadkich cech ani ich połączeń. Zgoda na udział nie musi obejmować publicznego udostępnienia. Minimalizacja danych, agregacja, dane syntetyczne, kontrolowany dostęp, umowy użytkownika i bezpieczne środowiska analityczne mogą umożliwiać weryfikację bez publikacji rekordów jednostkowych. Dane syntetyczne nie zastępują jednak oryginału we wszystkich reanalizach, a kontrolowany dostęp wymaga przejrzystych kryteriów.

Jeśli danych nie można udostępnić, nadal można opublikować protokół, materiały dozwolone prawem, schemat danych, kod na danych przykładowych, metadane i procedurę ubiegania się o dostęp. Ograniczenie powinno być konkretne, a nie opisane ogólną formułą „na uzasadnioną prośbę”. Interes otwartości nie uchyla zobowiązań wobec uczestników ani ryzyka dla grup możliwych do rozpoznania.

## Wnioski

Wiarygodność wyniku powstaje przez zgodność analizy z planem, pełne pokazanie niepewności i decyzji oraz umożliwienie krytycznej kontroli w granicach etyki. Raport końcowy jest zarazem dokumentacją ograniczeń i projektem następnego testu. Otwarta nauka osiąga cel wtedy, gdy ułatwia sprawdzanie i kumulację wiedzy, nie gdy maksymalizuje liczbę publicznych plików.

## Bibliografia

- Appelbaum, M., et al. (2018). Journal article reporting standards for quantitative research in psychology. *American Psychologist, 73*(1), 3–25. https://doi.org/10.1037/amp0000191
- Cumming, G. (2014). The new statistics: Why and how. *Psychological Science, 25*(1), 7–29. https://doi.org/10.1177/0956797613504966
- Greenland, S., et al. (2016). Statistical tests, P values, confidence intervals, and power: A guide to misinterpretations. *European Journal of Epidemiology, 31*, 337–350. https://doi.org/10.1007/s10654-016-0149-3
- Munafò, M. R., et al. (2017). A manifesto for reproducible science. *Nature Human Behaviour, 1*, 0021. https://doi.org/10.1038/s41562-016-0021
- Nosek, B. A., et al. (2018). The preregistration revolution. *Proceedings of the National Academy of Sciences, 115*(11), 2600–2606. https://doi.org/10.1073/pnas.1708274114
- Open Science Collaboration. (2015). Estimating the reproducibility of psychological science. *Science, 349*(6251), aac4716. https://doi.org/10.1126/science.aac4716
- Wasserstein, R. L., Schirm, A. L., & Lazar, N. A. (2019). Moving to a world beyond “p < 0.05”. *The American Statistician, 73*(sup1), 1–19. https://doi.org/10.1080/00031305.2019.1583913
- Wilkinson, M. D., et al. (2016). The FAIR guiding principles for scientific data management and stewardship. *Scientific Data, 3*, 160018. https://doi.org/10.1038/sdata.2016.18
