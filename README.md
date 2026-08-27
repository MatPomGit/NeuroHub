# PsyHub

PsyHub jest rozwijaną bazą wiedzy z psychologii. Łączy artykuły wiki, słownik pojęć, narzędzia pomiarowe i wybrane materiały interaktywne.

## Struktura repozytorium

- `wiki/` — artykuły Markdown pogrupowane tematycznie;
- `pages/`, `modules/`, `assets/` — strony, moduły interaktywne i zasoby statyczne;
- `narzedzia_psychometryczne/`, `tests/` — dane narzędzi i zestawy pytań;
- `tools/` — walidatory i narzędzia utrzymaniowe;
- `docs/` — aktualna dokumentacja techniczna i redakcyjna.

## Dokumentacja

Punktem wejścia do dokumentacji utrzymaniowej jest [`docs/README.md`](docs/README.md). Zasady pracy agentów znajdują się w [`AGENTS.md`](AGENTS.md), a zalecany wzorzec artykułu w [`wiki/reference/article_template.md`](wiki/reference/article_template.md).

Podstawową zasadą redakcyjną jest „jeden temat, jeden artykuł kanoniczny”. Dawne adresy po konsolidacji są zachowywane jako techniczne przekierowania, a główna nawigacja prowadzi bezpośrednio do artykułów kanonicznych.

## Walidacja

```bash
node tools/run-node-tests.js
node tools/check_content.js
```

Testy obejmują między innymi konfigurację interfejsu, linki artykułów, przekierowania, manifest konsolidacji i dostępność artykułów kanonicznych w głównej nawigacji.

## Uruchomienie lokalne

Warstwa publikacyjna korzysta z Jekylla:

```bash
bundle install
bundle exec jekyll serve
```

Wygenerowana strona trafia do `_site/`. Publikację produkcyjną realizują workflow GitHub Actions.

## Status

Projekt jest rozwijany iteracyjnie. Aktualne wymagania należy wyprowadzać z kodu, testów i dokumentów kanonicznych wskazanych w `docs/README.md`, a nie z historycznych raportów lub dawnych list TODO.
