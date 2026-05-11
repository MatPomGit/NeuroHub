/* ══════════════════════════════════════════════════
   PSYCHOLOGIA CODZIENNA - dane tygodniowe
   Plik: daily-psychology.js
   Moduł udostępnia wyłącznie metadane dni oraz ćwiczenia.
   Ciekawostki są ładowane z pliku data_psychology_reminders.json.
══════════════════════════════════════════════════ */
(function () {
  'use strict';

  /*
    Uwaga implementacyjna:
    - curiosity zawiera neutralny placeholder bez treści przykładowej,
      aby renderer mógł bezpiecznie działać do czasu podmiany danych z JSON.
    - curiosityVariants pozostaje puste, by wyeliminować lokalne przykłady ciekawostek.
  */
  const curiosityPlaceholder = {
    title: 'Ciekawostka ładowana z bazy przypomnień',
    lead: 'Treść zostanie pobrana z data_psychology_reminders.json.',
    body: []
  };

  const DAILY_PSYCHOLOGY = [
    {
      day: 1,
      dayName: 'Poniedziałek',
      theme: 'Efekt reflektora i samoświadomość',
      emoji: '🔦',
      curiosity: curiosityPlaceholder,
      exercise: {
        title: 'Wyjdź spod reflektora',
        type: 'social',
        intro: 'To ćwiczenie może być niekomfortowe – i właśnie o to w nim chodzi.',
        steps: [
          'Wybierz jedno drobne działanie, które normalnie odkładasz przez lęk przed oceną.',
          'Zrób to i obserwuj swoje myśli przed, w trakcie oraz po działaniu.',
          'Wieczorem zapisz, co faktycznie się wydarzyło i czego się nauczyłeś/aś.'
        ]
      }
    },
    {
      day: 2,
      dayName: 'Wtorek',
      theme: 'Okno tolerancji i regulacja emocjonalna',
      emoji: '🪟',
      curiosity: curiosityPlaceholder,
      exercise: {
        title: 'Skan okna tolerancji',
        type: 'bodyscan',
        intro: 'Potrzebujesz 10 minut i cichego miejsca.',
        steps: [
          'Wykonaj trzy spokojne oddechy z dłuższym wydechem.',
          'Zeskanuj ciało i oceń poziom pobudzenia w skali 1–10.',
          'Dobierz krótką interwencję regulacyjną adekwatnie do poziomu pobudzenia.'
        ]
      }
    },
    {
      day: 3,
      dayName: 'Środa',
      theme: 'Empatia ucieleśniona',
      emoji: '🪞',
      curiosity: curiosityPlaceholder,
      exercise: {
        title: 'Świadome słuchanie ciałem',
        type: 'social',
        intro: 'Ćwiczenie na cały dzień – wymaga jedynie uważności.',
        steps: [
          'Podczas rozmowy obserwuj tempo mowy i oddechu rozmówcy.',
          'Dopasuj własny rytm komunikacji w sposób naturalny i nienachalny.',
          'Po rozmowie zanotuj swoje odczucia i poziom obciążenia emocjonalnego.'
        ]
      }
    },
    {
      day: 4,
      dayName: 'Czwartek',
      theme: 'Siła oczekiwań',
      emoji: '🌱',
      curiosity: curiosityPlaceholder,
      exercise: {
        title: 'List od przyszłego siebie',
        type: 'writing',
        intro: 'Potrzebujesz 15 minut i kartki.',
        steps: [
          'Napisz list z perspektywy siebie za 5 lat.',
          'Zaznacz jedno wspierające zdanie, które dziś możesz wdrożyć.',
          'Wróć do tego zdania wieczorem i oceń jego wpływ na decyzje.'
        ]
      }
    },
    {
      day: 5,
      dayName: 'Piątek',
      theme: 'Regeneracja poznawcza',
      emoji: '🌊',
      curiosity: curiosityPlaceholder,
      exercise: {
        title: 'Dwadzieścia minut bez ekranu',
        type: 'mindfulness',
        intro: 'Koniec tygodnia pracy – czas na reset układu nerwowego.',
        steps: [
          'Odłóż ekran i ustaw timer na 20 minut.',
          'Pozwól myślom swobodnie płynąć bez oceniania i planowania.',
          'Po zakończeniu zapisz jedno najważniejsze spostrzeżenie.'
        ]
      }
    },
    {
      day: 6,
      dayName: 'Sobota',
      theme: 'Nastawienie na wzrost',
      emoji: '🚀',
      curiosity: curiosityPlaceholder,
      exercise: {
        title: 'Eksperyment niedoskonałości',
        type: 'challenge',
        intro: 'Ćwiczenie rozwijające tolerancję błędu i uczenie się.',
        steps: [
          'Wybierz aktywność, w której jesteś początkujący/a.',
          'Pracuj przez 30 minut, koncentrując się na informacji zwrotnej.',
          'Zapisz jedną rzecz, której się nauczyłeś/aś.'
        ]
      }
    },
    {
      day: 0,
      dayName: 'Niedziela',
      theme: 'Autonarracja i tożsamość',
      emoji: '🌙',
      curiosity: curiosityPlaceholder,
      exercise: {
        title: 'Trzyzdaniowa historia tygodnia',
        type: 'writing',
        intro: 'Niedzielna refleksja i domknięcie tygodnia.',
        steps: [
          'Napisz trzy zdania podsumowujące tydzień z perspektywy sprawczości.',
          'Wskaż jeden element, który chcesz kontynuować.',
          'Zapisz jeden priorytet na poniedziałek.'
        ]
      }
    }
  ];

  const DAILY_PSYCHOLOGY_ENRICHED = DAILY_PSYCHOLOGY.map((entry) => ({
    ...entry,
    curiosityVariants: [],
    exerciseVariants: [entry.exercise]
  }));

  window.DAILY_PSYCHOLOGY = DAILY_PSYCHOLOGY_ENRICHED;
}());
