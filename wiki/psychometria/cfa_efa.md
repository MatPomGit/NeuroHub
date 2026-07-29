---
lastReviewed: 2026-04-01
reviewCycleMonths: 24
evidenceCutoffDate: 2025-12-31
---

# Analiza czynnikowa (EFA i CFA)

Analiza czynnikowa to metoda statystyczna służąca do wykrywania ukrytych (latentnych) struktur w danych - grup zmiennych obserwowalnych, które korelują ze sobą, bo mają wspólne przyczyny (czynniki). Jest fundamentem tworzenia i walidacji testów psychologicznych.

## Eksploracyjna analiza czynnikowa (EFA)

**EFA** stosuje się, gdy nie wiadomo z góry, ile czynników leży u podstaw zestawu zmiennych ani które zmienne na które czynniki się ładują. Jest narzędziem odkrywczym.

### Etapy EFA

1. **Ocena korelacji:** Macierz korelacji powinna zawierać korelacje umiarkowane do wysokich. Test Bartletta sprawdza, czy macierz różni się od macierzy jednostkowej (brak czynników).

2. **Ekstrakcja czynników:** Metody: analiza składowych głównych (PCA - technicznie nie jest EFA), analiza czynnikowa metodą głównych osi (PAF), metoda maksymalnego prawdopodobieństwa (ML).

3. **Wyznaczenie liczby czynników:** Kryterium Kaisera (eigenvalue > 1), wykres osypiska (scree plot), analiza równoległa (parallel analysis - najbardziej wiarygodna), MAP Vealicera.

4. **Rotacja:** Zmiana orientacji czynników w celu uzyskania prostszej struktury (każda zmienna ładuje wysoko tylko na jeden czynnik). Rotacja ortogonalna (Varimax) zakłada niezależność czynników. Rotacja skośna (Oblimin, Promax) zezwala na korelacje między czynnikami - bardziej realistyczna w psychologii.

5. **Interpretacja:** Ładunki czynnikowe > |0,30|–|0,40| uznaje się za znaczące. Każdy czynnik powinien mieć co najmniej 3 pozycje z wysokimi ładunkami.

> **Pułapka:** EFA daje "rozwiązania matematyczne", nie "prawdziwe czynniki". Ta sama macierz korelacji może być równie dobrze wyjaśniona przez różne rozwiązania czynnikowe. Interpretacja zawsze wymaga merytorycznego uzasadnienia.

## Konfirmacyjna analiza czynnikowa (CFA)

**CFA** testuje *a priori* zdefiniowany model - który czynnik ładuje które zmienne, jakie są korelacje między czynnikami. Wymaga wcześniejszej teorii lub wyników EFA.

### Wskaźniki dopasowania modelu

| Wskaźnik | Dobre dopasowanie |
|---|---|
| Chi² (nieformalnie) | p > 0.05 (wrażliwy na N) |
| CFI (Comparative Fit Index) | > 0.95 |
| TLI (Tucker-Lewis Index) | > 0.95 |
| RMSEA | < 0.06 (95% CI < 0.10) |
| SRMR | < 0.08 |

Żaden pojedynczy wskaźnik nie jest wystarczający - interpretuje się zawsze komplet.

### Modele zagnieżdżone

CFA pozwala porównywać modele zagnieżdżone (jeden jest szczególnym przypadkiem drugiego) testem chi², różnicą CFI lub kryterium informacyjnym (AIC, BIC). Umożliwia to testowanie hipotez o strukturze.

## Inwariancja pomiarowa a CFA

CFA jest narzędziem do badania **inwariancji pomiarowej** - czy test mierzy to samo konstrukty u różnych grup. Etapy:
1. Model konfiguracyjny (ta sama struktura, dowolne ładunki)
2. Inwariancja metryczna (równe ładunki - warunkuje porównanie korelacji)
3. Inwariancja skalarna (równe progi/intercepty - warunkuje porównanie średnich)
4. Inwariancja resztkowa (równe residua)

## Modele bifaktorowe

**Model bifaktorowy** zakłada jeden czynnik ogólny (g) i kilka czynników specyficznych, przy czym każda zmienna ładuje zarówno na g jak i jeden czynnik specyficzny. Popularny w modelowaniu inteligencji (g + zdolności specyficzne) i psychopatologii (p-faktor).

## EFA vs CFA - kiedy stosować?

**EFA:** Nowe narzędzia bez ustalonej struktury; eksploracja danych; generowanie hipotez.

**CFA:** Walidacja narzędzi z ugruntowaną teorią; replikacja struktury na nowej próbie; porównanie grup (inwariancja).

Najlepsza praktyka: EFA na połowie próby, CFA na drugiej połowie (split-sample cross-validation).

## Przykłady zastosowań

- Odkrycie struktury czynnikowej NEO-PI (Wielka Piątka) przez EFA i potwierdzenie przez CFA
- Walidacja polskich adaptacji testów klinicznych (np. Beck Depression Inventory)
- Badanie struktury dystresu psychologicznego (modele internalizing/externalizing)
- Analiza struktury kwestionariusza MMPI

> **Podsumowanie:** Analiza czynnikowa jest podstawową metodą budowania i walidacji narzędzi pomiarowych w psychologii. Właściwe stosowanie EFA i CFA wymaga zrozumienia założeń, wskaźników dopasowania i ograniczeń - szczególnie wrażliwości na wielkość próby i specyfikę danych.

## Perspektywa nieoczywista

Nieoczywista perspektywa na temat "Analiza czynnikowa (EFA i CFA)" polega na tym, że wartość narzędzia psychometrycznego nie wynika z samej popularności testu, lecz z jakości jego trafności, rzetelności i adekwatności do konkretnego celu decyzji.

Dopiero wspólna analiza zagadnień takich jak eksploracyjna analiza czynnikowa (efa), modele bifaktorowe oraz przykłady zastosowań pokazuje pełny zakres omawianego zjawiska.

Z tego powodu trafna interpretacja wymaga nie tylko nazwania zjawiska, ale także oceny jego funkcji, ograniczeń i długofalowych skutków dla osoby lub systemu, którego dotyczy.

## Podsumowanie

Temat "Analiza czynnikowa (EFA i CFA)" pokazuje, że najważniejsze pozostaje odróżnianie pomiaru od interpretacji oraz świadome uwzględnianie ograniczeń metodologicznych narzędzia.


Dopiero wspólna analiza zagadnień takich jak eksploracyjna analiza czynnikowa (efa), modele bifaktorowe oraz przykłady zastosowań pokazuje pełny zakres omawianego zjawiska.

## Bibliografia

1. American Psychiatric Association. (2022). Diagnostic and Statistical Manual of Mental Disorders (5th ed., text rev.).
2. Kahneman, D. (2011). Thinking, Fast and Slow. Farrar, Straus and Giroux.
3. Nęcka, E., Orzechowski, J., & Szymura, B. (2020). Psychologia poznawcza. PWN.
4. World Health Organization. (2022). World Mental Health Report: Transforming mental health for all.
5. Zimbardo, P. G., Johnson, R. L., & McCann, V. (2021). Psychologia: kluczowe koncepcje. PWN.
