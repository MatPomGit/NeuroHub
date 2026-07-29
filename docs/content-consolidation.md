# Plan konsolidacji artykułów

## Cel

Porządkowanie treści ma zmniejszać liczbę nakładających się artykułów i rozwijać pełniejsze opracowania kanoniczne. Nie chodzi o sztuczne zwiększanie długości tekstów ani o łączenie wszystkich materiałów w duże podręczniki.

## Kolejność prac

1. Najpierw przejrzyj domeny z wieloma krótkimi artykułami.
2. W obrębie domeny pogrupuj pliki według głównego pytania czytelnika.
3. Dla każdej grupy wybierz artykuł kanoniczny.
4. Zintegruj definicje, mechanizmy, dane, przykłady, ograniczenia i bibliografię.
5. Usuń powtórzenia oraz fragmenty generyczne.
6. Zaktualizuj nawigację, plany domen, linki Markdown i aliasy.
7. Uruchom walidatory i sprawdź ręcznie najważniejsze ścieżki nawigacji.

## Kryteria wyboru artykułu kanonicznego

Pierwszeństwo ma plik, który:

- ma tytuł zgodny z terminem stosowanym w literaturze;
- obejmuje najszerszy właściwy zakres;
- zawiera najlepszą argumentację i bibliografię;
- ma już najwięcej poprawnych odwołań wewnętrznych.

## Kiedy nie scalać

Nie należy scalać artykułów, gdy:

- dotyczą odrębnych konstruktów, mimo podobnej nazwy;
- odpowiadają na wyraźnie różne pytania edukacyjne;
- jeden jest materiałem referencyjnym, a drugi analizą zagadnienia;
- połączenie utrudniłoby znalezienie informacji i wymagałoby powtarzania dużych części tekstu.

## Zakres pojedynczej iteracji

Jedna zmiana powinna obejmować małą, spójną grupę artykułów. Pozwala to zweryfikować kompletność treści, bibliografię, przekierowania oraz linki bez tworzenia trudnego do oceny przeglądu całego portalu.

## Rejestr konsolidacji

| Data | Temat kanoniczny | Scalony adres |
|---|---|---|
| 2026-07-29 | `wiki/emocje/aleksytymia.md` | `wiki/psychosomatyka/aleksytymia.md` |
| 2026-07-29 | `wiki/neuroroznorodnosc/spektrum_autyzmu.md` | `wiki/zaburzenia/asd.md` |
| 2026-07-29 | `wiki/etyka/etyka_badan.md` | `wiki/seminarium_dyplomowe/etyka_badan.md` |
| 2026-07-29 | `wiki/etyka/etyka_badan.md` | `wiki/wstep_do_psychologii/etyka_badan_psychologicznych.md` |
| 2026-07-29 | `wiki/neuroroznorodnosc/adhd.md` | `wiki/zaburzenia/adhd.md` |
| 2026-07-29 | `wiki/podstawy_pomocy/wsparcie_spoleczne.md` | `wiki/psychologia_zdrowia/wsparcie_spoleczne.md` |
| 2026-07-29 | `wiki/rezyliencja_i_mobbing/wypalenie_zawodowe.md` | `wiki/psychologia_zdrowia/wypalenie_zawodowe.md` |
| 2026-07-29 | `wiki/psychofarmakologia/05_leki_przeciwpsychotyczne.md` | `wiki/farmakologia/przeciwpsychotyczne.md` |
| 2026-07-29 | `wiki/psychofarmakologia/06_leki_przeciwdepresyjne.md` | `wiki/farmakologia/przeciwdepresyjne.md` |
| 2026-07-29 | `wiki/psychofarmakologia/07_leki_normotymiczne.md` | `wiki/farmakologia/stabilizatory.md` |
| 2026-07-29 | `wiki/psychofarmakologia/08_leki_prokognitywne.md` | `wiki/farmakologia/nootropiki.md` |
| 2026-07-29 | `wiki/psychofarmakologia/09_leki_anksjolityczne_i_nasenne.md` | `wiki/farmakologia/anxiolityki.md` |
| 2026-07-29 | `wiki/psychofarmakologia/11_leki_w_terapii_uzaleznien.md` | `wiki/farmakologia/uzaleznienia_farm.md` |

## Konsolidacja klas leków: farmakologia i psychofarmakologia

W tej iteracji główne pytanie brzmi: „Czym charakteryzuje się dana klasa leków, jakie ma zastosowania, ograniczenia i wymagania dotyczące bezpieczeństwa?”. Artykuły z pakietu `wiki/psychofarmakologia/` wybrano jako kanoniczne, ponieważ mają szerszy właściwy zakres, wyraźnie omawiają jakość dowodów i zawierają bibliografię bezpośrednio związaną z tematem. Pliki z `wiki/farmakologia/` zachowano wyłącznie jako przekierowania, aby nie zrywać dawnych adresów.

| Grupa | Główne pytanie czytelnika | Artykuł kanoniczny | Wycofany adres |
|---|---|---|---|
| Leki przeciwdepresyjne | Jak działają poszczególne klasy leków przeciwdepresyjnych oraz jak dobiera się je i bezpiecznie odstawia? | `wiki/psychofarmakologia/06_leki_przeciwdepresyjne.md` | `wiki/farmakologia/przeciwdepresyjne.md` |
| Leki przeciwpsychotyczne | Czym różnią się leki przeciwpsychotyczne pod względem skuteczności, działań niepożądanych i monitorowania? | `wiki/psychofarmakologia/05_leki_przeciwpsychotyczne.md` | `wiki/farmakologia/przeciwpsychotyczne.md` |
| Leki anksjolityczne i nasenne | Kiedy poszczególne leki zmniejszają lęk lub poprawiają sen i jak ograniczać ryzyko zależności? | `wiki/psychofarmakologia/09_leki_anksjolityczne_i_nasenne.md` | `wiki/farmakologia/anxiolityki.md` |
| Leki normotymiczne | Które leki zapobiegają manii lub depresji dwubiegunowej i jak zależy to od fazy choroby oraz profilu bezpieczeństwa? | `wiki/psychofarmakologia/07_leki_normotymiczne.md` | `wiki/farmakologia/stabilizatory.md` |
| Leki prokognitywne | Które leki mają udokumentowane działanie objawowe na funkcje poznawcze i czym różnią się od marketingowej kategorii nootropików? | `wiki/psychofarmakologia/08_leki_prokognitywne.md` | `wiki/farmakologia/nootropiki.md` |
| Leki stosowane w terapii uzależnień | Jak dobrać farmakoterapię do substancji i celu: przeżycia, redukcji szkód, ograniczenia używania lub abstynencji? | `wiki/psychofarmakologia/11_leki_w_terapii_uzaleznien.md` | `wiki/farmakologia/uzaleznienia_farm.md` |
