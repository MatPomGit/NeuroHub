## Struktura plików katalogu narzędzi

Ten dokument porządkuje sposób dodawania i utrzymania wpisów w katalogu narzędzi pomiarowych (`measurementToolsByDomain` w `site-config.js`) tak, aby dane były spójne, audytowalne i użyteczne w UI.

Narzędzia psychometryczne są przechowywane w folderze:

- `data/narzedzia_pomiarowe/`
- każdy wpis narzędzia to **osobny plik JSON** (`<domena>/<id_narzedzia>.json`),
- indeks domen i dat aktualizacji: `data/narzedzia_pomiarowe/index.json`.

Przykład:

- `data/narzedzia_pomiarowe/psychometryczne/bdi_ii.json`
- `data/narzedzia_pomiarowe/neuropsychologiczne/stroop.json`

## Checklista dodawania nowego narzędzia

> Uzupełnij wszystkie kroki przed oznaczeniem wpisu jako gotowego.
