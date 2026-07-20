# Polityka bezpieczeństwa PsyHub

## Wspierane wersje

PsyHub jest serwisem statycznym rozwijanym w sposób ciągły. Poprawki bezpieczeństwa są przygotowywane dla aktualnej wersji gałęzi `main`.

| Wersja | Wsparcie |
| --- | --- |
| Aktualna wersja `main` | Tak |
| Starsze commity i wdrożenia | Nie |

## Zgłaszanie podatności

Nie publikuj informacji o podatności w publicznym issue ani pull requeście.

1. Otwórz prywatne zgłoszenie w sekcji [Security Advisories](https://github.com/MatPomGit/PsyHub/security/advisories/new).
2. Opisz podatny komponent, kroki reprodukcji, możliwy wpływ i proponowany sposób ograniczenia ryzyka.
3. Jeżeli formularz prywatnego zgłoszenia jest niedostępny, skontaktuj się najpierw z właścicielem repozytorium przez [profil GitHub](https://github.com/MatPomGit), bez ujawniania publicznie szczegółów technicznych.

Potwierdzenie zgłoszenia powinno nastąpić w ciągu 7 dni. Informacja o planowanym sposobie obsługi zostanie przekazana po wstępnej analizie.

## Zakres

W szczególności zgłaszaj:

- podatności XSS lub możliwość wstrzyknięcia aktywnej treści,
- ujawnienie danych lub sekretów,
- przejęcie procesu budowania albo wdrażania GitHub Pages,
- podatne zależności Jekylla lub GitHub Actions,
- obejście mechanizmów integralności treści.

Błędy merytoryczne, literówki i problemy dostępności można zgłaszać jako zwykłe issues.
