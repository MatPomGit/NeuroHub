---
content_type: editorial_documentation
article_requirements: false
sitemap: false
public_navigation: false
published: false

lastReviewed: 2026-04-01
reviewCycleMonths: 24
evidenceCutoffDate: 2025-12-31
---

# Katalog narzedzi pomiarowych â€” zasady operacyjne

## Cel dokumentu

Ten dokument porządkuje sposob dodawania i utrzymania wpisow w katalogu narzedzi pomiarowych (`measurementToolsByDomain` w `site-config.js`) tak, aby dane był‚y spojne, audytowalne i użyteczne w UI.

## Checklista dodawania nowego narzedzia

> Uzupeł‚nij wszystkie kroki przed oznaczeniem wpisu jako gotowego.

1. **Wybierz dziedzine** i sprawdłş, czy istnieje sekcja domeny w `measurementToolsByDomain`.
2. **Uzupeł‚nij pola identyfikacyjne:** `id`, `name`, `type`.
3. **Uzupeł‚nij pola merytoryczne:** `constructs`, `population`, `ageRange`, `administrationTime`, `scoring`.
4. **Uzupeł‚nij pola jakoł›ciowe:** `evidenceLevel`, `reliability`, `validity`, `normsInfo`, `limitations`.
5. **Uzupeł‚nij pola zgodnoł›ci i bezpieczeł„stwa:** `ethicalNotes`, `contraindications`, `license`, `requiresPermissions`.
6. **Dodaj pola referencyjne:** `articleLinks`, `methodologyLinks`, `language`.
7. **Zweryfikuj sł‚owniki kontrolowane** (`type`, `evidenceLevel`, `license`) wzgledem `measurementToolsControlledVocabulary`.
8. **Dodaj minimum 1 link merytoryczny** w `methodologyLinks` (np. artykuł‚ o rzetelnoł›ci/trafnoł›ci/normalizacji).
9. **Zaktualizuj date domeny** w `measurementToolsDomainUpdates.<domain>.updatedAt` (format `YYYY-MM-DD`).
10. **Sprawdłş UI** â€” czy wpis renderuje sie poprawnie i czy widoczna jest sekcja â€žOstatnia aktualizacja (dziedzina)â€ť.

## Definition of Done (DoD) dla wpisu narzedzia

Wpis uznajemy za ukoł„czony tylko wtedy, gdy:

- zawiera komplet pol obowiązkowych:
  - `id`, `name`, `type`, `constructs`, `population`, `ageRange`, `administrationTime`, `scoring`,
  - `evidenceLevel`, `license`, `requiresPermissions`, `language`,
  - `articleLinks`, `methodologyLinks`,
  - `reliability`, `validity`, `normsInfo`, `limitations`, `ethicalNotes`, `contraindications`;
- zawiera **co najmniej 1 link do artykuł‚u merytorycznego** (`methodologyLinks.length >= 1`);
- używa wartoł›ci ze sł‚ownikow kontrolowanych (`measurementToolsControlledVocabulary`);
- dla dziedziny wpisu ustawiono aktualne `updatedAt`.

## Ostatnia aktualizacja per dziedzina (`updatedAt`)

W każdej dziedzinie utrzymujemy metadane aktualizacji:

- lokalizacja: `measurementToolsDomainUpdates.<domain>.updatedAt` w `site-config.js`;
- format: `YYYY-MM-DD` (ISO);
- zasada: przy każdej zmianie wpisow narzedzi w domenie aktualizujemy odpowiadającą date `updatedAt`.

## Cykliczny przegląd katalogu (kwartalny)

Przegląd wykonujemy raz na kwartał‚ (Q1/Q2/Q3/Q4):

1. Przegląd kompletnoł›ci pol obowiązkowych.
2. Przegląd aktualnoł›ci linkow (`articleLinks` i `methodologyLinks`).
3. Weryfikacja jakoł›ci opisow (`reliability`, `validity`, `limitations`, `ethicalNotes`).
4. Aktualizacja `updatedAt` dla każdej dziedziny, w ktorej wykonano zmiane.

### Procedura oznaczania wpisow â€ždo rewizjiâ€ť

Wpis oznaczamy jako â€ždo rewizjiâ€ť, gdy:

- brakuje pola obowiązkowego,
- brak linku merytorycznego,
- link prowadzi do nieistniejącego artykuł‚u,
- opis jakoł›ciowy jest nieaktualny lub niespojny.

Sugerowany workflow:

1. Dodać etykiete roboczą `DO_REWIZJI` w opisie problemu (issue / TODO zespoł‚u).
2. Uzupeł‚nić brakujące pola i/lub poprawić linki.
3. Po poprawce: usunąć etykiete `DO_REWIZJI`, zaktualizować `updatedAt`, zweryfikować render w UI.

## Uwagi koł„cowe

- Katalog ma charakter edukacyjny i nie zastepuje peł‚nej procedury diagnostycznej.
- Zmiany merytoryczne powinny być konsultowane z osobą odpowiedzialną za obszar psychometrii/diagnostyki.
