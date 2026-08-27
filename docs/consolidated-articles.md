# Struktura konsolidowanych artykułów

PsyHub rozdziela trzy poziomy organizacji treści:

1. **Artykuły kanoniczne** są pełnymi opracowaniami Markdown w katalogach `wiki/<dziedzina>/`. Lista artykułów objętych konsolidacją jest utrzymywana w `wiki/reference/consolidation_batches.json`.
2. **Dawne artykuły i adresy** pozostają wyłącznie jako przekierowania. `SITE_CONFIG.articleRedirects` zachowuje zgodność starych tras SPA, a pliki z `layout: redirect` zachowują zgodność adresów generowanych przez Jekyll.
3. **Nawigacja użytkownika** pokazuje artykuły kanoniczne przez `SITE_CONFIG.nav`. Główny spis treści i panel boczny korzystają z tej samej hierarchii `SIDEBAR_TOPIC_GROUPS` w `app.js`, dlatego artykuł nie powinien mieć dwóch niezależnych przypisań kategorii.

## Główne kategorie

Aktualny podział katalogu użytkownika obejmuje:

- Podstawy psychologii i badań
- Biologiczne podstawy zachowania
- Procesy psychiczne
- Rozwój i edukację
- Psychologię kliniczną i pomoc
- Zdrowie i specjalizacje stosowane
- Psychologię technologii
- Naukę i praktykę akademicką

Sekcje dziedzinowe pozostają drugim poziomem nawigacji. Artykuły kanoniczne są trzecim poziomem. Nie tworzymy osobnych stron katalogowych tylko po to, aby pośredniczyły w przejściu do artykułu.

## Reguła utrzymania

Po każdej konsolidacji trzeba jednocześnie:

1. wskazać artykuł kanoniczny w `consolidation_batches.json`,
2. pozostawić przekierowania ze starych adresów,
3. umieścić docelowy artykuł w `SITE_CONFIG.nav`,
4. przypisać jego sekcję do dokładnie jednej głównej kategorii,
5. uruchomić `node tools/run-node-tests.js`.

`tools/check-consolidated-navigation.js` automatycznie sprawdza dostępność kanonicznych artykułów w głównym spisie treści, kompletność przypisania sekcji do głównych kategorii oraz zgodność spisu treści z hierarchią panelu bocznego. `tools/check-consolidation-batches.js` kontroluje strukturę samych partii konsolidacyjnych i przekierowań.
