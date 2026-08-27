# Katalog narzędzi pomiarowych

Dokument opisuje sposób utrzymania danych narzędzi psychometrycznych używanych przez PsyHub.

## Struktura

Dane źródłowe znajdują się w katalogu `narzedzia_psychometryczne/`.

- każdy wpis narzędzia jest osobnym plikiem JSON w katalogu domeny;
- indeks domen znajduje się w `narzedzia_psychometryczne/index.json`;
- identyfikator pliku powinien być stabilny i zgodny z identyfikatorem narzędzia;
- dane prezentowane w UI muszą pozostawać zgodne z `measurementToolsByDomain` w `site-config.js`.

Przykłady:

- `narzedzia_psychometryczne/psychometryczne/bdi_ii.json`
- `narzedzia_psychometryczne/neuropsychologiczne/stroop.json`

## Dodawanie lub aktualizacja narzędzia

1. Zaktualizuj właściwy plik JSON i indeks domeny, jeśli jest to wymagane.
2. Upewnij się, że nazwa, typ, populacja, licencja i poziom dowodów są opisane jednoznacznie.
3. Zaktualizuj `site-config.js`, jeżeli narzędzie ma być widoczne w interfejsie.
4. Uruchom `node tools/lint-measurement-tools-config.js --strict` oraz `node tools/run-node-tests.js`.

Nie twórz równoległego katalogu danych dla tej samej klasy narzędzi. `narzedzia_psychometryczne/` jest jedyną kanoniczną lokalizacją plików JSON tego katalogu.
