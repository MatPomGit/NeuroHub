---
title: Modele psychometryczne i struktura testu
aliases: [Analiza czynnikowa, IRT, Model Rascha, Inwariancja pomiarowa]
lastReviewed: 2026-08-02
reviewCycleMonths: 24
evidenceCutoffDate: 2026-08-02
---

# Modele psychometryczne i struktura testu

Modele psychometryczne odpowiadają na różne pytania. Klasyczna teoria testu opisuje wynik łączny i jego błąd, analiza czynnikowa bada strukturę wspólnej zmienności, a teoria odpowiedzi na pozycję (IRT) wiąże odpowiedź na konkretną pozycję z cechą latentną. Model Rascha jest szczególnym, restrykcyjnym modelem IRT. Żaden model nie zwalnia z uzasadnienia, co wynik znaczy i do czego wolno go użyć.

## Porównanie ram

| Rama | Jednostka analizy | Główne pytanie | Ważne ograniczenie |
|---|---|---|---|
| Klasyczna teoria testu (CTT) | Wynik całkowity | Jak precyzyjny jest wynik w tej próbie? | Parametry wyniku i pozycji zależą od próby oraz testu. |
| Analiza czynnikowa | Współzmienność pozycji | Ile wymiarów wyjaśnia zależności i jak pozycje je reprezentują? | Czynnik jest konstruktem modelowym, nie bezpośrednio obserwowanym bytem. |
| IRT | Odpowiedź na pozycję | Jak prawdopodobieństwo odpowiedzi zależy od cechy i parametrów pozycji? | Porównywalność parametrów wymaga dopasowania modelu i spełnienia założeń. |
| Model Rascha | Odpowiedź na pozycję | Czy dane spełniają wymogi pomiaru określone przez model jednoparametryczny? | Restrykcyjność może ujawnić wadliwe pozycje, ale samo dopasowanie nie zapewnia trafności. |

[Podstawy CTT, rzetelności i trafności](psychometria_wprowadzenie.md) opisano osobno. Tu nacisk pada na relacje pozycji z cechami latentnymi i porównywalność struktury.

## EFA i CFA

**Eksploracyjna analiza czynnikowa (EFA)** służy rozpoznaniu możliwej struktury, gdy nie narzuca się z góry pełnego wzoru ładunków. Badacz wybiera metodę ekstrakcji, liczbę czynników oraz rotację. Ponieważ cechy psychologiczne często korelują, rotacja ukośna bywa bardziej realistyczna niż ortogonalna. Liczbę czynników warto ustalać na podstawie teorii, wykresu osypiska i analizy równoległej, a nie wyłącznie reguły wartości własnej większej od jedności.

**Konfirmacyjna analiza czynnikowa (CFA)** sprawdza wcześniej określony model: które pozycje mają ładować dane czynniki, czy czynniki korelują i jakie parametry są ograniczone. Wskaźniki dopasowania, takie jak CFI, TLI, RMSEA i SRMR, opisują różne aspekty rozbieżności. Ich progi są wskazówkami zależnymi od modelu, estymatora, liczebności próby i charakteru danych, a nie uniwersalnymi wyrokami. Eksplorowanie i potwierdzanie struktury w tej samej próbie sprzyja dopasowaniu do szumu; potrzebna jest replikacja lub walidacja krzyżowa.

## IRT: pozycja spotyka cechę latentną

W IRT krzywa charakterystyczna pozycji określa prawdopodobieństwo danej odpowiedzi przy poziomie cechy `θ`. Dla pozycji dychotomicznych typowe parametry to:

- **trudność/lokalizacja (`b`)**: poziom cechy, przy którym odpowiedź staje się odpowiednio prawdopodobna;
- **dyskryminacja (`a`)**: stromość krzywej, czyli siła różnicowania w pobliżu lokalizacji;
- **parametr pseudolosowania (`c`)** w modelu 3PL: dolna asymptota prawdopodobieństwa poprawnej odpowiedzi.

W kwestionariuszu osobowości „trudność” oznacza położenie pozycji na kontinuum cechy, nie trudność intelektualną. Dla odpowiedzi wielokategorialnych stosuje się między innymi modele odpowiedzi stopniowanej lub częściowego kredytu.

### Lokalna niezależność i informacja

Po uwzględnieniu modelowanej cechy odpowiedzi na pozycje powinny być warunkowo niezależne. Naruszenie występuje na przykład wtedy, gdy pozycje mają niemal tę samą treść, wspólny bodziec albo jedna zdradza odpowiedź na drugą. Lokalna zależność może sztucznie zwiększać informację i zaniżać niepewność.

**Informacja pozycji** pokazuje, z jaką precyzją dana pozycja mierzy na różnych poziomach `θ`. Informacje pozycji sumują się do funkcji informacji testu, a w uproszczeniu `SE(θ) = 1 / √I(θ)`. Test może więc precyzyjnie mierzyć środkowy zakres cechy, a słabo jej krańce. Umożliwia to także dobór pozycji w testach adaptacyjnych.

## Model Rascha

Dychotomiczny model Rascha wykorzystuje parametr trudności pozycji, a dyskryminację ustala jako wspólną. Model traktuje się często jako wymóg pomiaru, któremu dane powinny sprostać, zamiast zwiększać liczbę parametrów aż do poprawy dopasowania. Przy spełnieniu założeń porównania osób mogą być niezależne od konkretnego zestawu odpowiednio dobranych pozycji, a porównania pozycji od konkretnej próby osób.

Te własności wymagają wystarczającej jednowymiarowości, lokalnej niezależności, właściwego funkcjonowania kategorii i braku istotnego zróżnicowanego funkcjonowania pozycji (DIF). Model Rascha nie jest synonimem całej IRT: modele 2PL i 3PL pozwalają odpowiednio na różną dyskryminację i pseudolosowanie.

## Inwariancja pomiarowa

Porównanie średnich grup ma sens tylko wtedy, gdy wynik ma dostatecznie podobne znaczenie. W wielogrupowej CFA sprawdza się zwykle:

1. **Inwariancję konfiguralną**: podobny układ czynników i przypisanie pozycji do czynników.
2. **Inwariancję metryczną**: dodatkowo równe ładunki czynnikowe; wspiera porównywanie zależności konstruktu z innymi zmiennymi.
3. **Inwariancję skalarną**: dodatkowo równe wyrazy wolne, a przy pozycjach kategorialnych odpowiednie progi; jest potrzebna do interpretacji różnic średnich latentnych.

Gdy pełna inwariancja nie zachodzi, częściowa inwariancja może być uzasadniona, jeśli ograniczenia zwalnia się przejrzyście, oszczędnie i na podstawie teorii. W IRT analogicznym problemem jest DIF: osoby o tym samym poziomie cechy, lecz z różnych grup, mają różne prawdopodobieństwo odpowiedzi na pozycję.

## Dopasowanie nie jest dowodem trafności konstruktu

Dobrze dopasowany model mówi, że określona reprezentacja matematyczna nie jest wyraźnie sprzeczna z analizowanymi danymi. Nie dowodzi, że czynnik odpowiada postulowanemu konstruktowi, treść reprezentuje całą dziedzinę, skala przewiduje ważne kryteria, działa sprawiedliwie w innych grupach ani że konsekwencje decyzji są uzasadnione. Trafność wymaga programu dowodów obejmującego treść, proces odpowiadania, strukturę, relacje z innymi zmiennymi i konsekwencje użycia.

## Bibliografia

- American Educational Research Association, American Psychological Association, & National Council on Measurement in Education. (2014). *Standards for educational and psychological testing*. American Educational Research Association.
- Brown, T. A. (2015). *Confirmatory factor analysis for applied research* (2nd ed.). Guilford Press.
- Chen, F. F. (2007). Sensitivity of goodness of fit indexes to lack of measurement invariance. *Structural Equation Modeling, 14*(3), 464–504. https://doi.org/10.1080/10705510701301834
- Embretson, S. E., & Reise, S. P. (2000). *Item response theory for psychologists*. Lawrence Erlbaum Associates.
- Millsap, R. E. (2011). *Statistical approaches to measurement invariance*. Routledge.
- Rasch, G. (1960). *Probabilistic models for some intelligence and attainment tests*. Danish Institute for Educational Research.
- Reise, S. P., Ainsworth, A. T., & Haviland, M. G. (2005). Item response theory: Fundamentals, applications, and promise in psychological research. *Current Directions in Psychological Science, 14*(2), 95–101. https://doi.org/10.1111/j.0963-7214.2005.00342.x
- Schmitt, T. A. (2011). Current methodological considerations in exploratory and confirmatory factor analysis. *Journal of Psychoeducational Assessment, 29*(4), 304–321. https://doi.org/10.1177/0734282911406653
- Vandenberg, R. J., & Lance, C. E. (2000). A review and synthesis of the measurement invariance literature. *Organizational Research Methods, 3*(1), 4–70. https://doi.org/10.1177/109442810031002
