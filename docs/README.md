# Dokumentacja PsyHub

Ten katalog zawiera wyłącznie dokumentację potrzebną do bieżącego utrzymania projektu. Historyczne raporty, jednorazowe audyty i zamknięte listy TODO należy odczytywać z historii Git, a nie utrzymywać jako aktywne dokumenty.

## Dokumenty kanoniczne

- [`content-conventions.md`](content-conventions.md) — standard redakcyjny, nazewnictwo, model „jeden temat, jeden artykuł” oraz zasady przekierowań.
- [`consolidated-articles.md`](consolidated-articles.md) — aktualna architektura artykułów po konsolidacji i wymagania dotyczące głównej nawigacji.
- [`katalog_narzedzi_zasady.md`](katalog_narzedzi_zasady.md) — struktura danych katalogu narzędzi pomiarowych.
- [`modul_kahoot_wytyczne.md`](modul_kahoot_wytyczne.md) — wymagania utrzymaniowe modułu wspólnej gry Kahoot.

## Pozostałe źródła zasad

- [`../README.md`](../README.md) — cel projektu, uruchamianie i ogólna struktura repozytorium.
- [`../AGENTS.md`](../AGENTS.md) — zasady pracy agentów i procesu zmian.
- [`../wiki/reference/article_template.md`](../wiki/reference/article_template.md) — zalecany wzorzec artykułu.
- [`../wiki/reference/consolidation_batches.json`](../wiki/reference/consolidation_batches.json) — maszynowy manifest partii konsolidacji.

## Walidacja

Po zmianie dokumentacji, treści lub nawigacji uruchom:

```bash
node tools/run-node-tests.js
node tools/check_content.js
```

Standardowy zestaw testów sprawdza między innymi przekierowania, manifest konsolidacji oraz dostępność artykułów kanonicznych w głównej nawigacji.

## Zasada utrzymania dokumentacji

Dokument powinien pozostać w `docs/` tylko wtedy, gdy opisuje aktualny kontrakt, procedurę albo architekturę projektu. Wyniki zakończonych audytów i migawki stanu nie są dokumentacją kanoniczną. Po wykorzystaniu należy je usunąć; historia Git zachowuje ich pełną treść.
