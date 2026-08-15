# Audyt artykułów kanonicznych po konsolidacji

## Zakres i sposób weryfikacji

Punktem odniesienia jest commit `23fc255` („Ustal zalecany wzorzec artykułu i linki kanoniczne”), po którym rozpoczęto właściwe scalanie. Listę utworzono z celów przekierowań dodanych lub zmienionych w zakresie `23fc255..HEAD`, a następnie uzupełniono o opracowania, które nie mają własnego dawnego adresu. Pliki zawierające `redirect:` albo `layout: redirect` zostały wykluczone. Po kontroli sześciu ostatnich domen wykaz obejmuje **141 właściwych artykułów**, w tym 22 opracowania z najnowszej fali konsolidacji, a nie pliki techniczne, plany domen ani spisy treści.

Dla każdego artykułu zastosowano ten sam zestaw oznaczony w tabeli jako **10/10**:

1. jedno główne pytanie i adekwatny zakres tytułu;
2. logiczny tok: granice pojęcia, mechanizmy lub modele, stan dowodów, zastosowania i ograniczenia stosownie do tematu;
3. brak ponownego wprowadzenia po scaleniu;
4. brak identycznych definicji w kilku sekcjach;
5. brak dwóch sekcji podsumowujących;
6. dokładnie jedna sekcja `## Bibliografia`;
7. bibliografia jako ostatni rozdział;
8. zgodność odwołań autor–rok i nazw dokumentów z pozycjami bibliograficznymi;
9. źródło wskazane bezpośrednio przy liczbie, gdy liczba jest wynikiem badania, statystyką lub oszacowaniem;
10. rozwiązywalne odnośniki Markdown do właściwych artykułów lub ich kotwic.

Kontrole strukturalne, powtórzenia akapitów, trzy wskazane frazy generyczne, cele linków i różnice historyczne sprawdzono programowo. Zakres, tok wywodu, swoistość argumentacji, znaczenie usuniętych treści i to, czy tekst nie jest tylko streszczeniem, oceniono przez przegląd nagłówków, treści i zmian historycznych. `10/10` oznacza brak stwierdzonej usterki po tej weryfikacji, nie ocenę jakości dowodów w skali punktowej.

Dla 22 najnowszych tekstów nie przenoszono automatycznie wyniku `10/10`. Każdy plik przeczytano osobno, porównano z rodzicem właściwego commitu scalającego i poddano siedmiu kontrolom: **P** (jedno główne pytanie), **U** (zachowanie unikalnej treści), **D** (brak powtórzonych definicji), **W** (jedno funkcjonalne podsumowanie lub jedno domknięcie wywodu), **B** (jedna końcowa bibliografia), **C** (zgodność cytowań z bibliografią) oraz **L** (rozwiązywalne linki i kotwice). Wynik `7/7` poniżej jest rezultatem siedmiu odnotowanych rozstrzygnięć, a nie domyślną oceną maksymalną.

## Lista artykułów i wynik

### `animaloterapia` (1)

| Artykuł kanoniczny | Wynik |
|---|---|
| `wiki/animaloterapia/animaloterapia_wprowadzenie.md` | 10/10 |

### `arteterapia` (1)

| Artykuł kanoniczny | Wynik |
|---|---|
| `wiki/arteterapia/arteterapia_wprowadzenie.md` | 10/10 |

### `diagnoza` (1)

| Artykuł kanoniczny | Wynik |
|---|---|
| `wiki/diagnoza/formulowanie_przypadku.md` | 10/10 |

### `doswiadczenie_somatyczne` (1)

| Artykuł kanoniczny | Wynik |
|---|---|
| `wiki/doswiadczenie_somatyczne/wprowadzenie_do_doswiadczenia_somatycznego.md` | 10/10 |

### `e_terapia` (3)

| Artykuł kanoniczny | Wynik |
|---|---|
| `wiki/e_terapia/cyfrowe_narzedzia_zdrowia_psychicznego.md` | 10/10 |
| `wiki/e_terapia/terapia_online.md` | 10/10 |
| `wiki/e_terapia/vr_terapia.md` | 10/10 |

### `ekrany_ksiazki_i_natura` (3)

| Artykuł kanoniczny | Wynik |
|---|---|
| `wiki/ekrany_ksiazki_i_natura/czytanie_i_psychologia.md` | 10/10 |
| `wiki/ekrany_ksiazki_i_natura/ekrany_i_funkcjonowanie_psychiczne.md` | 10/10 |
| `wiki/ekrany_ksiazki_i_natura/kontakt_z_natura_i_zdrowie_psychiczne.md` | 10/10 |

### `emocje` (3)

| Artykuł kanoniczny | Wynik |
|---|---|
| `wiki/emocje/aleksytymia.md` | 10/10 |
| `wiki/emocje/teorie_emocji.md` | 10/10 |
| `wiki/emocje/wspolczucie.md` | 10/10 |

### `etyka` (3)

| Artykuł kanoniczny | Wynik |
|---|---|
| `wiki/etyka/etyka_badan.md` | 10/10 |
| `wiki/etyka/kodeksy_etyczne.md` | 10/10 |
| `wiki/etyka/tajemnica_zawodowa_granice.md` | 10/10 |

### `filozofia` (6)

| Artykuł kanoniczny | Wynik |
|---|---|
| `wiki/filozofia/argumenty_antropiczne_i_realizm_modalny.md` | 10/10 |
| `wiki/filozofia/etyka.md` | 10/10 |
| `wiki/filozofia/filozofia_czlowieka.md` | 10/10 |
| `wiki/filozofia/filozofia_nauki.md` | 10/10 |
| `wiki/filozofia/filozofia_umyslu.md` | 10/10 |
| `wiki/filozofia/wprowadzenie.md` | 10/10 |

### `geropsychologia` (3)

| Artykuł kanoniczny | Wynik |
|---|---|
| `wiki/geropsychologia/pomoc_psychologiczna_i_opieka_w_starosci.md` | 10/10 |
| `wiki/geropsychologia/poznanie_i_zdrowie_psychiczne_w_starosci.md` | 10/10 |
| `wiki/geropsychologia/wprowadzenie.md` | 10/10 |

### `instytucje_wsparcia_dziecka_i_rodziny` (1)

| Artykuł kanoniczny | Wynik |
|---|---|
| `wiki/instytucje_wsparcia_dziecka_i_rodziny/system_wsparcia_dziecka_i_rodziny.md` | 10/10 |

### `kulturowa` (3)

| Artykuł kanoniczny | Wynik |
|---|---|
| `wiki/kulturowa/akulturacja_relacje_i_zdrowie.md` | 10/10 |
| `wiki/kulturowa/kultura_a_procesy_psychiczne.md` | 10/10 |
| `wiki/kulturowa/wprowadzenie.md` | 10/10 |

### `neuropsychologia` (5)

| Artykuł kanoniczny | Wynik |
|---|---|
| `wiki/neuropsychologia/funkcjonalna_anatomia_mozgu.md` | 10/10 |
| `wiki/neuropsychologia/metody_neuronauki_poznawczej.md` | 10/10 |
| `wiki/neuropsychologia/rozwoj_plastycznosc_i_zmiennosc_mozgu.md` | 10/10 |
| `wiki/neuropsychologia/podstawy_ukladu_nerwowego.md` | 10/10 |
| `wiki/neuropsychologia/diagnoza_i_rehabilitacja_neuropsychologiczna.md` | 10/10 |

### `neuroroznorodnosc` (2)

| Artykuł kanoniczny | Wynik |
|---|---|
| `wiki/neuroroznorodnosc/adhd.md` | 10/10 |
| `wiki/neuroroznorodnosc/spektrum_autyzmu.md` | 10/10 |

### `podstawy_pomocy` (1)

| Artykuł kanoniczny | Wynik |
|---|---|
| `wiki/podstawy_pomocy/wsparcie_spoleczne.md` | 10/10 |

### `porozumiewanie_sie_bez_przemocy` (2)

| Artykuł kanoniczny | Wynik |
|---|---|
| `wiki/porozumiewanie_sie_bez_przemocy/nvc_w_praktyce.md` | 10/10 |
| `wiki/porozumiewanie_sie_bez_przemocy/wprowadzenie.md` | 10/10 |

### `psychofarmakologia` (7)

| Artykuł kanoniczny | Wynik |
|---|---|
| `wiki/psychofarmakologia/11_leki_w_terapii_uzaleznien.md` | 10/10 |
| `wiki/psychofarmakologia/bezpieczenstwo_i_personalizacja_farmakoterapii.md` | 10/10 |
| `wiki/psychofarmakologia/farmakoterapia_nastroju_leku_i_stresu.md` | 10/10 |
| `wiki/psychofarmakologia/farmakoterapia_neurorozwojowa_i_objawowa.md` | 10/10 |
| `wiki/psychofarmakologia/farmakoterapia_psychoz_i_zaburzen_neurokognitywnych.md` | 10/10 |
| `wiki/psychofarmakologia/klasy_lekow_psychotropowych.md` | 10/10 |
| `wiki/psychofarmakologia/podstawy_psychofarmakologii.md` | 10/10 |

### `psychologia_ai` (3)

| Artykuł kanoniczny | Wynik |
|---|---|
| `wiki/psychologia_ai/ai_w_zdrowiu_psychicznym_i_opiece.md` | 10/10 |
| `wiki/psychologia_ai/mechanizmy_ograniczenia_i_etyka_ai.md` | 10/10 |
| `wiki/psychologia_ai/psychologia_interakcji_czlowiek_ai.md` | 10/10 |

### `psychologia_gier` (3)

| Artykuł kanoniczny | Wynik |
|---|---|
| `wiki/psychologia_gier/skutki_grania_i_uzywanie_problemowe.md` | 10/10 |
| `wiki/psychologia_gier/wprowadzenie.md` | 10/10 |
| `wiki/psychologia_gier/zastosowania_gier_i_esport.md` | 10/10 |

### `psychologia_kliniczna_dziecka` (1)

| Artykuł kanoniczny | Wynik |
|---|---|
| `wiki/psychologia_kliniczna_dziecka/czym_jest_psychologia_kliniczna_dziecka.md` | 10/10 |

### `psychologia_nadmiernego_jedzenia` (1)

| Artykuł kanoniczny | Wynik |
|---|---|
| `wiki/psychologia_nadmiernego_jedzenia/czym_jest_nadmierne_jedzenie.md` | 10/10 |

### `psychologia_poznawcza` (7)

| Artykuł kanoniczny | Wynik |
|---|---|
| `wiki/psychologia_poznawcza/funkcje_wykonawcze.md` | 10/10 |
| `wiki/psychologia_poznawcza/jezyk.md` | 10/10 |
| `wiki/psychologia_poznawcza/myslenie.md` | 10/10 |
| `wiki/psychologia_poznawcza/nauki_kognitywne.md` | 10/10 |
| `wiki/psychologia_poznawcza/pamiec.md` | 10/10 |
| `wiki/psychologia_poznawcza/percepcja.md` | 10/10 |
| `wiki/psychologia_poznawcza/swiadomosc.md` | 10/10 |

### `psychologia_pozytywna` (3)

| Artykuł kanoniczny | Wynik |
|---|---|
| `wiki/psychologia_pozytywna/interwencje_pozytywne.md` | 10/10 |
| `wiki/psychologia_pozytywna/szczescie_dobrostan.md` | 10/10 |
| `wiki/psychologia_pozytywna/uwaznosc_przeplyw_i_samowspolczucie.md` | 10/10 |

### `psychologia_religii` (4)

| Artykuł kanoniczny | Wynik |
|---|---|
| `wiki/psychologia_religii/doswiadczenia_religijne_w_praktyce_klinicznej.md` | 10/10 |
| `wiki/psychologia_religii/metodologia_badan.md` | 10/10 |
| `wiki/psychologia_religii/religia_a_zdrowie_psychiczne.md` | 10/10 |
| `wiki/psychologia_religii/religijnosc_i_duchowosc.md` | 10/10 |

### `psychologia_sadowa` (2)

| Artykuł kanoniczny | Wynik |
|---|---|
| `wiki/psychologia_sadowa/wprowadzenie.md` | 10/10 |
| `wiki/psychologia_sadowa/zastosowania_opiniowania_sadowego.md` | 10/10 |

### `psychologia_spoleczna` (5)

| Artykuł kanoniczny | Wynik |
|---|---|
| `wiki/psychologia_spoleczna/agresja_uprzedzenia_i_przemoc_spoleczna.md` | 10/10 |
| `wiki/psychologia_spoleczna/grupy_relacje_i_wspolpraca.md` | 10/10 |
| `wiki/psychologia_spoleczna/ja_i_samoocena.md` | 10/10 |
| `wiki/psychologia_spoleczna/percepcja_spoleczna.md` | 10/10 |
| `wiki/psychologia_spoleczna/wplyw_spoleczny_perswazja_i_posluszenstwo.md` | 10/10 |

### `psychologia_szkolna` (4)

| Artykuł kanoniczny | Wynik |
|---|---|
| `wiki/psychologia_szkolna/klimat_szkolny.md` | 10/10 |
| `wiki/psychologia_szkolna/ocenianie_i_informacja_zwrotna.md` | 10/10 |
| `wiki/psychologia_szkolna/teorie_uczenia_sie.md` | 10/10 |
| `wiki/psychologia_szkolna/trudnosci_w_uczeniu_sie.md` | 10/10 |

### `psychologia_zdrowia` (6)

| Artykuł kanoniczny | Wynik |
|---|---|
| `wiki/psychologia_zdrowia/bol.md` | 10/10 |
| `wiki/psychologia_zdrowia/choroby_przewlekle.md` | 10/10 |
| `wiki/psychologia_zdrowia/interwencje_zdrowotne.md` | 10/10 |
| `wiki/psychologia_zdrowia/stres.md` | 10/10 |
| `wiki/psychologia_zdrowia/zachowania_zdrowotne.md` | 10/10 |
| `wiki/psychologia_zdrowia/zdrowie_wprowadzenie.md` | 10/10 |

### `psychometria` (5)

| Artykuł kanoniczny | Wynik |
|---|---|
| `wiki/psychometria/modele_psychometryczne_i_struktura_testu.md` | 10/10 |
| `wiki/psychometria/narzedzia_diagnozy_neurorozwojowej.md` | 10/10 |
| `wiki/psychometria/narzedzia_kliniczne.md` | 10/10 |
| `wiki/psychometria/psychometria_wprowadzenie.md` | 10/10 |
| `wiki/psychometria/testy_osobowosci_i_zdolnosci.md` | 10/10 |

### `psychopatologia` (7)

Klasyfikację wszystkich 23 zakresów źródłowych, kontrolę duplikatów między
domenami oraz osobne przeglądy kliniczne i terminologiczne opisuje
[`psychopatologia-scope-audit.md`](psychopatologia-scope-audit.md).

| Artykuł kanoniczny | Wynik |
|---|---|
| `wiki/psychopatologia/psychopatologia_wprowadzenie.md` | 10/10 |
| `wiki/psychopatologia/psychozy.md` | 10/10 |
| `wiki/psychopatologia/trauma_ptsd.md` | 10/10 |
| `wiki/psychopatologia/zaburzenia_lekowe_i_obsesyjno_kompulsyjne.md` | 10/10 |
| `wiki/psychopatologia/zaburzenia_nastroju.md` | 10/10 |
| `wiki/psychopatologia/zaburzenia_odzywiania_i_uzaleznienia.md` | 10/10 |
| `wiki/psychopatologia/zaburzenia_osobowosci.md` | 10/10 |

### `psychosomatyka` (1)

| Artykuł kanoniczny | Wynik |
|---|---|
| `wiki/psychosomatyka/historia_psychosomatyki.md` | 10/10 |

### `psychoterapia` (7)

| Artykuł kanoniczny | Wynik |
|---|---|
| `wiki/psychoterapia/act.md` | 10/10 |
| `wiki/psychoterapia/cbt.md` | 10/10 |
| `wiki/psychoterapia/dbt.md` | 10/10 |
| `wiki/psychoterapia/emdr.md` | 10/10 |
| `wiki/psychoterapia/interwencje_relacyjne_i_niestandardowe.md` | 10/10 |
| `wiki/psychoterapia/podejscia_psychodynamiczne_i_humanistyczne.md` | 10/10 |
| `wiki/psychoterapia/psychoterapia_wprowadzenie.md` | 10/10 |

### `reagowanie_na_krytyke` (1)

| Artykuł kanoniczny | Wynik |
|---|---|
| `wiki/reagowanie_na_krytyke/jak_nie_brac_do_siebie_opinii_innych.md` | 10/10 |

### `relacje` (1)

| Artykuł kanoniczny | Wynik |
|---|---|
| `wiki/relacje/przyjazn_rodzina_i_samotnosc.md` | 10/10 |

### `resocjalizacja` (1)

| Artykuł kanoniczny | Wynik |
|---|---|
| `wiki/resocjalizacja/podstawy_resocjalizacji.md` | 10/10 |

### `rezyliencja_i_mobbing` (1)

| Artykuł kanoniczny | Wynik |
|---|---|
| `wiki/rezyliencja_i_mobbing/wypalenie_zawodowe.md` | 10/10 |

### `seksuologia` (5)

| Artykuł kanoniczny | Wynik |
|---|---|
| `wiki/seksuologia/dysfunkcje.md` | 10/10 |
| `wiki/seksuologia/hiperseksualnosc_mechanizm.md` | 10/10 |
| `wiki/seksuologia/orientacja_seksualna_i_tozsamosc_plciowa.md` | 10/10 |
| `wiki/seksuologia/seksuologia_wprowadzenie.md` | 10/10 |
| `wiki/seksuologia/trauma_seksualna.md` | 10/10 |

### `suicydologia` (1)

| Artykuł kanoniczny | Wynik |
|---|---|
| `wiki/suicydologia/modele_suicydologiczne.md` | 10/10 |

### `systemy_rodzinne` (3)

| Artykuł kanoniczny | Wynik |
|---|---|
| `wiki/systemy_rodzinne/terapia_systemow_wewnetrznej_rodziny_ifs.md` | 10/10 |
| `wiki/systemy_rodzinne/terapie_systemowe_i_rodzinne.md` | 10/10 |
| `wiki/systemy_rodzinne/wprowadzenie_do_terapii_systemowej.md` | 10/10 |

### `wstep_do_psychologii` (1)

| Artykuł kanoniczny | Wynik |
|---|---|
| `wiki/wstep_do_psychologii/historia_psychologii.md` | 10/10 |

## Kontrola sześciu ostatnich domen (22)

Wartość „tak” oznacza, że dana kontrola została wykonana i nie ujawniła otwartej usterki. W kolumnie U porównano nie tylko liczbę akapitów, lecz także dawne mechanizmy, rozróżnienia, ograniczenia, zastosowania i źródła. Domknięcie wywodu bez nagłówka „Wnioski” uznano za jedno podsumowanie tylko wtedy, gdy pełniło tę funkcję i nie dublowało wcześniejszej sekcji.

| Domena | Artykuł kanoniczny | P | U | D | W | B | C | L | Wynik |
|---|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| eksperyment psychologiczny | `wiki/eksperyment_psychologiczny/wprowadzenie.md` | tak | tak | tak | tak | tak | tak | tak | 7/7 |
| eksperyment psychologiczny | `wiki/eksperyment_psychologiczny/prowadzenie_badania_i_jakosc_danych.md` | tak | tak | tak | tak | tak | tak | tak | 7/7 |
| eksperyment psychologiczny | `wiki/eksperyment_psychologiczny/analiza_raportowanie_i_replikacja.md` | tak | tak | tak | tak | tak | tak | tak | 7/7 |
| temperament | `wiki/temperament/modele.md` | tak | tak | tak | tak | tak | tak | tak | 7/7 |
| temperament | `wiki/temperament/biologia_rozwoj_i_pomiar_temperamentu.md` | tak | tak | tak | tak | tak | tak | tak | 7/7 |
| temperament | `wiki/temperament/kliniczne.md` | tak | tak | tak | tak | tak | tak | tak | 7/7 |
| emocje | `wiki/emocje/teorie_emocji.md` | tak | tak | tak | tak | tak | tak | tak | 7/7 |
| emocje | `wiki/emocje/regulacja.md` | tak | tak | tak | tak | tak | tak | tak | 7/7 |
| emocje | `wiki/emocje/motywacja.md` | tak | tak | tak | tak | tak | tak | tak | 7/7 |
| emocje | `wiki/emocje/wspolczucie.md` | tak | tak | tak | tak | tak | tak | tak | 7/7 |
| psychosomatyka | `wiki/psychosomatyka/wprowadzenie.md` | tak | tak | tak | tak | tak | tak | tak | 7/7 |
| psychosomatyka | `wiki/psychosomatyka/somatyzacja.md` | tak | tak | tak | tak | tak | tak | tak | 7/7 |
| psychosomatyka | `wiki/psychosomatyka/psychologiczne_aspekty_chorob_somatycznych.md` | tak | tak | tak | tak | tak | tak | tak | 7/7 |
| psychosomatyka | `wiki/psychosomatyka/terapia_psychosomatyczna.md` | tak | tak | tak | tak | tak | tak | tak | 7/7 |
| psychologia rozwojowa | `wiki/psychologia_rozwojowa/teorie_rozwoju.md` | tak | tak | tak | tak | tak | tak | tak | 7/7 |
| psychologia rozwojowa | `wiki/psychologia_rozwojowa/niemowlectwo.md` | tak | tak | tak | tak | tak | tak | tak | 7/7 |
| psychologia rozwojowa | `wiki/psychologia_rozwojowa/adolescencja.md` | tak | tak | tak | tak | tak | tak | tak | 7/7 |
| psychologia rozwojowa | `wiki/psychologia_rozwojowa/doroslosc.md` | tak | tak | tak | tak | tak | tak | tak | 7/7 |
| uzależnienia | `wiki/uzaleznienia/mechanizmy_i_diagnoza_uzaleznien.md` | tak | tak | tak | tak | tak | tak | tak | 7/7 |
| uzależnienia | `wiki/uzaleznienia/uzaleznienia_behawioralne.md` | tak | tak | tak | tak | tak | tak | tak | 7/7 |
| uzależnienia | `wiki/uzaleznienia/recovery.md` | tak | tak | tak | tak | tak | tak | tak | 7/7 |
| uzależnienia | `wiki/uzaleznienia/uzaleznienie_w_rodzinie_i_u_mlodziezy.md` | tak | tak | tak | tak | tak | tak | tak | 7/7 |

Kontrola historyczna objęła odpowiednio commity `70b76cc`, `4b2f034`, `3b4a149`, `bf4c304`, `5a08a75` i `1e72d71`. Usunięte fragmenty okazały się przekierowaniami, powtórzeniami albo treścią włączoną do jednego z celów; nie znaleziono unikalnego, udokumentowanego twierdzenia pozostawionego wyłącznie w dawnym pliku. Zastrzeżenia merytoryczne ujawnione w próbie źródłowej, choć nie obniżyły wyników strukturalnych, opisano w [`layered-content-verification.md`](layered-content-verification.md).

## Kontrola treści generycznych

W żadnym ze 141 artykułów nie pozostały zdania „W praktyce oznacza to potrzebę łączenia poziomu teorii…” ani „Dobrą praktyką jest rozpoczynanie pracy od jasnego celu…”. Nagłówek lub zwrot „Perspektywa nieoczywista” uznano za dopuszczalny wyłącznie wtedy, gdy następujący wywód dotyczy konkretnego sporu, mechanizmu albo ograniczenia dowodów. Podczas audytu usunięto generyczne „perspektywy” z artykułów o kodeksach etycznych, modelach suicydologicznych i historii psychosomatyki. Zastąpiono je swoistym omówieniem odpowiednio: konfliktów norm, granic predykcji ryzyka oraz przejścia od jednoprzyczynowych hipotez do modeli wielopoziomowych.

## Porównanie z wersją sprzed konsolidacji

Dla każdej grupy porównano stan bieżący z `23fc255` oraz z rodzicem commitu scalającego (`git diff <commit>^ <commit>` i `git show <commit>^:<ścieżka>`). Usunięte fragmenty przyporządkowano do czterech kategorii:

- **powtórzenie**: kolejne wprowadzenia, powielone definicje, równoległe podsumowania i listy praktyk; nie przywracano;
- **treść generyczna**: akapity możliwe do wklejenia do dowolnego tematu, arbitralne plany ćwiczeń i nieswoiste „perspektywy”; nie przywracano;
- **nieudokumentowane twierdzenie**: liczby bez źródła, prognozy, uproszczone twierdzenia o mechanizmach biologicznych, prawie lub skuteczności; nie przywracano bez lepszego źródła;
- **informacja unikalna**: mechanizm, ograniczenie, zastosowanie, definicyjne rozróżnienie albo istotny przykład nieobecny w tekście docelowym; zachowywano w artykule kanonicznym albo zastępowano precyzyjniejszym, udokumentowanym odpowiednikiem.

Nie stwierdzono usuniętej informacji unikalnej, która nadal wymagałaby przywrócenia. Artykuły zachowują istotne mechanizmy, ograniczenia i zastosowania; żaden z nich nie został zakwalifikowany jako krótkie streszczenie dawnych plików. Długość nie była kryterium zaliczenia.

## Korekta wykonana podczas audytu

- W `wiki/etyka/kodeksy_etyczne.md` bibliografia była błędnie doklejona do poprzedniego akapitu, zawierała źródła niezwiązane z kodeksami, a poprzedzająca ją „perspektywa nieoczywista” była generyczna. Rozdzielono podsumowanie i bibliografię, zastąpiono wykaz źródeł dokumentami kodeksowymi oraz literaturą etyki decyzyjnej, a generyczny fragment zastąpiono swoistą analizą ograniczeń kodeksów.
- W `wiki/suicydologia/modele_suicydologiczne.md` usunięto generyczną perspektywę i powtórzone podsumowanie, skorygowano zamienione definicje dwóch konstruktów teorii interpersonalnej, wycofano arbitralny próg BHS oraz wprowadzono bibliografię odpowiadającą cytowanym modelom.
- W `wiki/psychosomatyka/historia_psychosomatyki.md` usunięto generyczną perspektywę i powtórzone podsumowanie. Bibliografię ogólnych podręczników zastąpiono źródłami historycznymi i pracami bezpośrednio dokumentującymi rozwój psychosomatyki.
- Dwa odnośniki prowadzące do wycofanych adresów zastąpiono linkami do odpowiednich sekcji artykułów kanonicznych o nadmiernym jedzeniu i chorobach przewlekłych.

## Zamknięcie merytoryczne etapu

Warstwową weryfikację 30 artykułów i 150 wybranych twierdzeń, w tym kontrolę istnienia oraz adekwatności publikacji, opisano w raporcie [`layered-content-verification.md`](layered-content-verification.md). Po poprawieniu wykrytej niezgodności bibliograficznej próba nie zawiera otwartych błędów kategorii C ani D. Dotychczasowy etap konsolidacji jest zamknięty merytorycznie w zakresie tej bramki jakościowej; decyzja nie rozszerza ocen źródłowych na 111 artykułów spoza próby.
