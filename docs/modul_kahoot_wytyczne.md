# Wytyczne dla strony modułu wspólnej gry Kahoot

## Cel dokumentu

Ten dokument opisuje, jak rozwijać i utrzymywać stronę modułu `wspolna_gra_kahoot.html` w projekcie PsyHub.
Celem modułu jest szybkie przejście studentów od nauki indywidualnej do wspólnej sesji quizowej.

## Zakres modułu

Moduł powinien:

1. Ułatwiać uruchomienie sesji grupowej (prowadzący i uczestnik).
2. Dawać krótką, jasną instrukcję przebiegu sesji.
3. Wspierać powrót do modułu testów teoretycznych po grze.
4. Być lekki, czytelny i gotowy do użycia na telefonie oraz desktopie.

## Co ma być zrobione (plan prac)

### 1) Struktura i UX

- Dodać wyraźne sekcje:
  - „Start sesji” (przyciski host/dołącz),
  - „Przebieg krok po kroku”,
  - „Dobre praktyki moderatora”,
  - „Najczęstsze błędy”.
- Zapewnić jeden główny cel na ekranie: szybkie rozpoczęcie sesji.
- Utrzymać prostą nawigację bez przeładowania dodatkowymi elementami.

### 2) Treść merytoryczna

- Opisać minimalny scenariusz sesji (czas rundy, liczba pytań, omówienie odpowiedzi).
- Dodać checklistę dla prowadzącego przed startem (np. test linku, jasne zasady punktacji).
- Dodać checklistę podsumowania po sesji (co powtórzyć, jak wrócić do testów indywidualnych).

### 3) Dostępność i standard UI

- Każdy przycisk/link ma mieć jednoznaczną etykietę działania.
- Zachować odpowiedni kontrast tekstu i tła.
- Nie opierać znaczenia wyłącznie na kolorze.
- Zachować czytelność na małych ekranach (min. 320 px szerokości).

### 4) Integracja z aplikacją

- Moduł ma działać poprawnie osadzony w iframe (`renderKahootGame` w `app.js`).
- Link „powrót do testów teoretycznych” ma prowadzić do `dla_studentow/testy_teoretyczne`.
- W `site-config.js` wpis modułu powinien pozostać typu `custom: 'kahoot_game'`.

### 5) Utrzymanie i rozwój

- Przy każdej zmianie treści sprawdzić aktualność linków zewnętrznych.
- Unikać twardego kodowania wielu wariantów językowych w jednym widoku.
- W przypadku rozbudowy funkcji dodać sekcję „Historia zmian” na końcu tego dokumentu.

## Kryteria akceptacji

Zmiana może zostać uznana za gotową, gdy:

- moduł zawiera sekcje „Start”, „Instrukcja”, „Dobre praktyki”, „Błędy”,
- użytkownik w 1–2 kliknięciach może przejść do hostowania lub dołączania,
- użytkownik ma jasną ścieżkę powrotu do nauki indywidualnej,
- layout pozostaje czytelny na mobile i desktopie,
- integracja z nawigacją PsyHub działa bez błędów.

## Historia zmian

- 2026-05-13: utworzenie dokumentu wytycznych dla modułu Kahoot.
