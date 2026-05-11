@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

echo.
echo  â•”â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•-
echo  â•‘  PsyHub v3.0 "ATLAS"” Generator struktury plików   â•‘
echo  â•‘  Uruchom w folderze, w którym ma powstać portal.     â•‘
echo  â•šâ•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•ť
echo.

:: â”€â”€ Sprawdłş czy index.html już istnieje â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
if exist "index.html" (
  echo  [INFO]  Znaleziono istniejący projekt w tym folderze.
  echo          Skrypt utworzy tylko brakujace pliki i foldery.
) else (
  echo  [INFO]  Nowy folder projektu. Skopiuj index.html i site-config.js
  echo          do tego katalogu, a nastepnie uruchom skrypt ponownie.
  echo          Albo uruchom teraz” foldery i tak zostana utworzone.
)

echo.
echo  Tworzenie struktury folderow wiki...
echo.

:: â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
::  TWORZENIE FOLDERĂ“W
:: â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
for %%D in (
  wiki
  wiki\wstep_do_psychologii
  wiki\neuro
  wiki\poznawcza
  wiki\zaburzenia
  wiki\przypadki_kliniczne
  wiki\testy
  wiki\psychometria
  wiki\farmakologia
  wiki\roznice_indywidualne
  wiki\temperament
  wiki\emocje
  wiki\biology
  wiki\psychoterapia
  wiki\psychopatologia
  wiki\suicydologia
  wiki\seksuologia
  wiki\arteterapia
  wiki\animaloterapia
  wiki\reference
) do (
  if not exist "%%D\" (
    mkdir "%%D"
    echo  [MKDIR]  %%D
  )
)

echo.
echo  Tworzenie plikow MD (placeholdery dla brakujacych)...
echo.

:: â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
::  MAKRO POMOCNICZE” tworzy plik tylko gdy nie istnieje
:: â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
::  Wywołanie:  call :mkmd <ścieżka> <Tytuł H1> <Sekcja>
:: â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

:: â”€â”€ WPROWADZENIE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
call :mkmd "wiki\wstep_do_psychologii\definicja.md"  "Definicja i zakres neuropsychologii"  "Wprowadzenie"
call :mkmd "wiki\wstep_do_psychologii\historia.md"   "Historia dyscypliny"                  "Wprowadzenie"

:: â”€â”€ NEUROBIOLOGIA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
call :mkmd "wiki\neuro\anatomia.md"             "Anatomia mózgu"               "Neurobiologia"
call :mkmd "wiki\neuro\neuron.md"               "Neuron i synapsa"             "Neurobiologia"
call :mkmd "wiki\neuro\systemy.md"              "Układy i sieci mózgowe"       "Neurobiologia"
call :mkmd "wiki\neuro\myelinizacja.md"         "Mielinizacja i istota biała"  "Neurobiologia"
call :mkmd "wiki\neuro\plastycznosc.md"         "Neuroplastycznoć"            "Neurobiologia"
call :mkmd "wiki\neuro\neuroobrazowanie.md"     "Neuroobrazowanie"             "Neurobiologia"
call :mkmd "wiki\neuro\lateralizacja.md"        "Lateralizacja funkcji"        "Neurobiologia"
call :mkmd "wiki\neuro\kora_prefrontalna.md"    "Kora przedczołowa"            "Neurobiologia"
call :mkmd "wiki\neuro\uklad_limbiczny.md"      "Układ limbiczny"              "Neurobiologia"

:: â”€â”€ FUNKCJE POZNAWCZE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
call :mkmd "wiki\poznawcza\pamiec.md"               "Pamięć"                          "Funkcje Poznawcze"
call :mkmd "wiki\poznawcza\uwaga.md"                "Uwaga"                           "Funkcje Poznawcze"
call :mkmd "wiki\poznawcza\jezyk.md"                "Język"                           "Funkcje Poznawcze"
call :mkmd "wiki\poznawcza\funkcje_wykonawcze.md"   "Funkcje wykonawcze"              "Funkcje Poznawcze"
call :mkmd "wiki\poznawcza\percepcja.md"            "Percepcja i gnozja"              "Funkcje Poznawcze"
call :mkmd "wiki\poznawcza\zmeczenie_poznawcze.md"  "Zmęczenie poznawcze"             "Funkcje Poznawcze"
call :mkmd "wiki\poznawcza\myslenie.md"             "Myślenie i rozumowanie"          "Funkcje Poznawcze"
call :mkmd "wiki\poznawcza\uczenie.md"              "Uczenie się"                     "Funkcje Poznawcze"
call :mkmd "wiki\poznawcza\wyobraznia.md"           "Wyobrałşnia i reprezentacje"      "Funkcje Poznawcze"
call :mkmd "wiki\poznawcza\swiadomosc.md"           "łšwiadomoć i metapoznanie"       "Funkcje Poznawcze"
call :mkmd "wiki\poznawcza\podejmowanie_decyzji.md" "Podejmowanie decyzji"            "Funkcje Poznawcze"

:: â”€â”€ ZABURZENIA KLINICZNE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
call :mkmd "wiki\zaburzenia\afazje.md"    "Afazje"                 "Zaburzenia Kliniczne"
call :mkmd "wiki\zaburzenia\amnezje.md"   "Amnezje"                "Zaburzenia Kliniczne"
call :mkmd "wiki\zaburzenia\otepienia.md" "Otępienia"              "Zaburzenia Kliniczne"
call :mkmd "wiki\zaburzenia\tbi.md"       "Urazy gŁowy” TBI"      "Zaburzenia Kliniczne"
call :mkmd "wiki\zaburzenia\apraksja.md"  "Apraksja"               "Zaburzenia Kliniczne"
call :mkmd "wiki\zaburzenia\agnozja.md"   "Agnozja wzrokowa"       "Zaburzenia Kliniczne"
call :mkmd "wiki\zaburzenia\neglect.md"   "Neglect przestrzenny"   "Zaburzenia Kliniczne"
call :mkmd "wiki\zaburzenia\adhd.md"      "ADHD"                   "Zaburzenia Kliniczne"
call :mkmd "wiki\zaburzenia\asd.md"       "Spektrum autyzmu” ASD" "Zaburzenia Kliniczne"

:: â”€â”€ PRZYPADKI KLINICZNE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
call :mkmd "wiki\przypadki_kliniczne\hm.md"          "Henry Molaison” H.M."        "Przypadki Kliniczne"
call :mkmd "wiki\przypadki_kliniczne\gage.md"        "Phineas Gage"                "Przypadki Kliniczne"
call :mkmd "wiki\przypadki_kliniczne\tan.md"         "Louis Leborgne” Tan"         "Przypadki Kliniczne"
call :mkmd "wiki\przypadki_kliniczne\split_brain.md" "Rozdzielony mózg"           "Przypadki Kliniczne"

:: â”€â”€ DIAGNOSTYKA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
call :mkmd "wiki\testy\testy_przeglad.md"    "Testy neuropsychologiczne” przegląd"  "Diagnostyka"
call :mkmd "wiki\testy\mmse_moca.md"         "Testy przesiewowe” MMSE i MoCA"        "Diagnostyka"
call :mkmd "wiki\testy\testy_wykonawcze.md"  "Testy funkcji wykonawczych"            "Diagnostyka"
call :mkmd "wiki\testy\testy_pamieci.md"     "Testy pamięci"                         "Diagnostyka"
call :mkmd "wiki\testy\testy_uwagi.md"       "Testy uwagi"                           "Diagnostyka"
call :mkmd "wiki\testy\testy_jezyka.md"      "Testy językowe"                        "Diagnostyka"
call :mkmd "wiki\testy\wais.md"              "Skale Wechslera"                       "Diagnostyka"
call :mkmd "wiki\testy\neuropsych_battery.md" "Baterie neuropsychologiczne"          "Diagnostyka"

:: â”€â”€ PSYCHOMETRIA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
call :mkmd "wiki\psychometria\psychometria_wprowadzenie.md" "Psychometria” wprowadzenie"  "Psychometria"
call :mkmd "wiki\psychometria\rzetelnosc.md"   "Rzetelnoć pomiaru"           "Psychometria"
call :mkmd "wiki\psychometria\trafnosc.md"     "Trafnoć pomiaru"             "Psychometria"
call :mkmd "wiki\psychometria\normalizacja.md" "Normalizacja i normy"        "Psychometria"
call :mkmd "wiki\psychometria\teoria_ct.md"    "Klasyczna teoria testu"      "Psychometria"
call :mkmd "wiki\psychometria\irt.md"          "IRT i model Rascha"          "Psychometria"
call :mkmd "wiki\psychometria\cfa_efa.md"      "Analiza czynnikowa"          "Psychometria"
call :mkmd "wiki\psychometria\invariancja.md"  "Inwariancja pomiarowa"       "Psychometria"

:: â”€â”€ FARMAKOLOGIA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
call :mkmd "wiki\farmakologia\neurofarmakologia.md"    "Neurofarmakologia"              "Farmakologia"
call :mkmd "wiki\farmakologia\przeciwdepresyjne.md"    "Leki przeciwdepresyjne"         "Farmakologia"
call :mkmd "wiki\farmakologia\przeciwpsychotyczne.md"  "Leki przeciwpsychotyczne"       "Farmakologia"
call :mkmd "wiki\farmakologia\anxiolityki.md"          "Anksjolityki i leki nasenne"    "Farmakologia"
call :mkmd "wiki\farmakologia\stabilizatory.md"        "Stabilizatory nastroju"         "Farmakologia"
call :mkmd "wiki\farmakologia\uzaleznienia_farm.md"    "Farmakoterapia uzależnień"     "Farmakologia"
call :mkmd "wiki\farmakologia\psychodeliki.md"         "Psychodeliki w terapii"         "Farmakologia"
call :mkmd "wiki\farmakologia\nootropiki.md"           "Nootropiki i leki kognitywne"   "Farmakologia"

:: â”€â”€ RĂ“ł»NICE INDYWIDUALNE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
call :mkmd "wiki\roznice_indywidualne\roznice_wprowadzenie.md"   "Różnice indywidualne” wprowadzenie"   "Różnice Indywidualne"
call :mkmd "wiki\roznice_indywidualne\inteligencja.md"           "Inteligencja"                         "Różnice Indywidualne"
call :mkmd "wiki\roznice_indywidualne\osobowosc.md"              "Osobowoć"                             "Różnice Indywidualne"
call :mkmd "wiki\roznice_indywidualne\kreatywnosc.md"            "Kreatywnoć"                           "Różnice Indywidualne"
call :mkmd "wiki\roznice_indywidualne\genetyka.md"               "Uwarunkowania genetyczne"             "Różnice Indywidualne"
call :mkmd "wiki\roznice_indywidualne\style_poznawcze.md"        "Style poznawcze"                      "Różnice Indywidualne"
call :mkmd "wiki\roznice_indywidualne\plec_psychologia.md"       "Psychologia płci"                     "Różnice Indywidualne"

:: â”€â”€ TEMPERAMENT â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
call :mkmd "wiki\temperament\temperament_wprowadzenie.md"  "Temperament” wprowadzenie"  "Temperament"
call :mkmd "wiki\temperament\modele.md"    "Modele temperamentu"   "Temperament"
call :mkmd "wiki\temperament\pomiar.md"    "Pomiar temperamentu"   "Temperament"
call :mkmd "wiki\temperament\kliniczne.md" "Temperament w klinice" "Temperament"
call :mkmd "wiki\temperament\razvoj.md"    "Temperament a rozwój"  "Temperament"

:: â”€â”€ EMOCJE I MOTYWACJA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
call :mkmd "wiki\emocje\emocje_wprowadzenie.md"  "Emocje” wprowadzenie"   "Emocje i Motywacja"
call :mkmd "wiki\emocje\teorie.md"       "Teorie emocji"           "Emocje i Motywacja"
call :mkmd "wiki\emocje\regulacja.md"    "Regulacja emocjonalna"   "Emocje i Motywacja"
call :mkmd "wiki\emocje\motywacja.md"    "Motywacja"               "Emocje i Motywacja"
call :mkmd "wiki\emocje\neurobiologia.md" "Neurobiologia emocji"   "Emocje i Motywacja"
call :mkmd "wiki\emocje\wspolczucie.md"  "Empatia i współczucie"   "Emocje i Motywacja"
call :mkmd "wiki\emocje\aleksytymia.md"  "Aleksytymia"             "Emocje i Motywacja"

:: â”€â”€ BIOLOGICZNE PODSTAWY â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
call :mkmd "wiki\biology\biologiczne_podstawy.md"  "Biologiczne podstawy zachowania” wprowadzenie"  "Biologiczne Podstawy"
call :mkmd "wiki\biology\genetyka_beh.md"    "Genetyka behawioralna"       "Biologiczne Podstawy"
call :mkmd "wiki\biology\hormony.md"          "Hormony i zachowanie"        "Biologiczne Podstawy"
call :mkmd "wiki\biology\ewolucja.md"         "Psychologia ewolucyjna"      "Biologiczne Podstawy"
call :mkmd "wiki\biology\psychofizjologia.md" "Psychofizjologia"            "Biologiczne Podstawy"
call :mkmd "wiki\biology\chronobiologia.md"   "Chronobiologia i sen"        "Biologiczne Podstawy"
call :mkmd "wiki\biology\mikrobiom.md"        "Oś jelitaâ€“mózg"              "Biologiczne Podstawy"

:: â”€â”€ PSYCHOTERAPIA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
call :mkmd "wiki\psychoterapia\psychoterapia_wprowadzenie.md"  "Psychoterapia” wprowadzenie"  "Psychoterapia"
call :mkmd "wiki\psychoterapia\cbt.md"         "Terapia poznawczo-behawioralna” CBT"  "Psychoterapia"
call :mkmd "wiki\psychoterapia\dbt.md"         "Terapia dialektyczno-behawioralna” DBT"  "Psychoterapia"
call :mkmd "wiki\psychoterapia\psychodyn.md"   "Terapia psychodynamiczna"              "Psychoterapia"
call :mkmd "wiki\psychoterapia\humanist.md"    "Podejście humanistyczne"               "Psychoterapia"
call :mkmd "wiki\psychoterapia\systemowa.md"   "Terapia systemowa i rodzinna"          "Psychoterapia"
call :mkmd "wiki\psychoterapia\skutecznosc.md" "Skutecznoć psychoterapii"             "Psychoterapia"
call :mkmd "wiki\psychoterapia\sojusz.md"      "Sojusz terapeutyczny"                  "Psychoterapia"
call :mkmd "wiki\psychoterapia\emdr.md"        "EMDR"                                  "Psychoterapia"
call :mkmd "wiki\psychoterapia\act.md"         "Terapia akceptacji i zaangażowania” ACT"  "Psychoterapia"

:: â”€â”€ PSYCHOPATOLOGIA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
call :mkmd "wiki\psychopatologia\psychopatologia_wprowadzenie.md"  "Psychopatologia” wprowadzenie"   "Psychopatologia"
call :mkmd "wiki\psychopatologia\objawy_ogolne.md"             "Objawy ogólne i MSE"                 "Psychopatologia"
call :mkmd "wiki\psychopatologia\zaburzenia_lekowe.md"         "Zaburzenia lękowe"                   "Psychopatologia"
call :mkmd "wiki\psychopatologia\zaburzenia_nastroju.md"       "Zaburzenia nastroju"                 "Psychopatologia"
call :mkmd "wiki\psychopatologia\psychozy.md"                  "Psychozy i schizofrenia"             "Psychopatologia"
call :mkmd "wiki\psychopatologia\zaburzenia_osobowosci.md"     "Zaburzenia osobowości"               "Psychopatologia"
call :mkmd "wiki\psychopatologia\trauma_ptsd.md"               "Trauma i PTSD"                       "Psychopatologia"
call :mkmd "wiki\psychopatologia\zaburzenia_odzywiania.md"     "Zaburzenia odżywiania"               "Psychopatologia"
call :mkmd "wiki\psychopatologia\neurorozwojowe.md"            "Zaburzenia neurorozwojowe"           "Psychopatologia"
call :mkmd "wiki\psychopatologia\ocd.md"                       "OCD i zaburzenia pokrewne"           "Psychopatologia"
call :mkmd "wiki\psychopatologia\uzaleznienia_psych.md"        "Uzależnienia” aspekt psychologiczny" "Psychopatologia"

:: â”€â”€ SUICYDOLOGIA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
call :mkmd "wiki\suicydologia\suicydologia_wprowadzenie.md"  "Suicydologia” wprowadzenie"  "Suicydologia"
call :mkmd "wiki\suicydologia\epidemiologia.md"  "Epidemiologia samobójstw"      "Suicydologia"
call :mkmd "wiki\suicydologia\teorie.md"         "Teorie i modele"               "Suicydologia"
call :mkmd "wiki\suicydologia\ocena_ryzyka.md"   "Ocena ryzyka samobójczego"     "Suicydologia"
call :mkmd "wiki\suicydologia\interwencja.md"    "Interwencja kryzysowa"         "Suicydologia"
call :mkmd "wiki\suicydologia\profilaktyka.md"   "Profilaktyka"                  "Suicydologia"
call :mkmd "wiki\suicydologia\nssi.md"           "Samookaleczenia” NSSI"        "Suicydologia"
call :mkmd "wiki\suicydologia\postvention.md"    "Postvention"                   "Suicydologia"
call :mkmd "wiki\suicydologia\media.md"          "Efekt Wertera i Papageno"      "Suicydologia"

:: â”€â”€ SEKSUOLOGIA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
call :mkmd "wiki\seksuologia\seksuologia_wprowadzenie.md"  "Seksuologia” wprowadzenie"  "Seksuologia"
call :mkmd "wiki\seksuologia\orientacja.md"         "Orientacja seksualna"         "Seksuologia"
call :mkmd "wiki\seksuologia\tozsamosc_plciowa.md"  "Tożsamoć płciowa"            "Seksuologia"
call :mkmd "wiki\seksuologia\dysfunkcje.md"         "Dysfunkcje seksualne"         "Seksuologia"
call :mkmd "wiki\seksuologia\terapia_seksualna.md"  "Terapia seksualna"            "Seksuologia"
call :mkmd "wiki\seksuologia\trauma_seksualna.md"   "Trauma seksualna"             "Seksuologia"
call :mkmd "wiki\seksuologia\rozw_seksualny.md"     "Rozwój seksualny"             "Seksuologia"
call :mkmd "wiki\seksuologia\modele_odpowiedzi.md"  "Modele odpowiedzi seksualnej" "Seksuologia"

:: â”€â”€ ARTETERAPIA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
call :mkmd "wiki\arteterapia\arteterapia_wprowadzenie.md"  "Arteterapia” wprowadzenie"  "Arteterapia"
call :mkmd "wiki\arteterapia\art_therapy.md"   "Arteterapia plastyczna"   "Arteterapia"
call :mkmd "wiki\arteterapia\muzykoterapia.md" "Muzykoterapia"            "Arteterapia"
call :mkmd "wiki\arteterapia\dmt.md"           "Choreoterapia” DMT"      "Arteterapia"
call :mkmd "wiki\arteterapia\drameterapia.md"  "Drameterapia"             "Arteterapia"
call :mkmd "wiki\arteterapia\biblioterapia.md" "Biblioterapia"            "Arteterapia"
call :mkmd "wiki\arteterapia\mechanizmy.md"    "Mechanizmy działania"     "Arteterapia"
call :mkmd "wiki\arteterapia\zastosowania.md"  "Zastosowania kliniczne"   "Arteterapia"

:: â”€â”€ ANIMALOTERAPIA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
call :mkmd "wiki\animaloterapia\animaloterapia_wprowadzenie.md"  "Animaloterapia” wprowadzenie"  "Animaloterapia"
call :mkmd "wiki\animaloterapia\dogoterapia.md"      "Dogoterapia"          "Animaloterapia"
call :mkmd "wiki\animaloterapia\hipoterapia.md"      "Hipoterapia"          "Animaloterapia"
call :mkmd "wiki\animaloterapia\felinoterapia.md"    "Felinoterapia"        "Animaloterapia"
call :mkmd "wiki\animaloterapia\aat_zastosowania.md" "AAT” zastosowania"  "Animaloterapia"
call :mkmd "wiki\animaloterapia\etyka_aat.md"        "Etyka i dobrostan"   "Animaloterapia"
call :mkmd "wiki\animaloterapia\mechanizmy_aat.md"   "Mechanizmy AAT"      "Animaloterapia"

:: â”€â”€ REFERENCJE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
call :mkmd "wiki\reference\zakres.md"    "Zakres wiedzy" "Referencje"
call :mkmd "wiki\reference\literatura.md" "Literatura"   "Referencje"

:: â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
echo.
echo  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
echo  Gotowe! Struktura PsyHub v4.0 jest kompletna.
echo.
echo  Kolejne kroki:
echo    1. Upewnij sie ze index.html i site-config.js
echo       sa w tym samym katalogu co folder wiki\
echo    2. Otwórz index.html w przegladarce (plik lokalny)
echo       lub uruchom lokalny serwer HTTP:
echo         python -m http.server 8080
echo       i przejdz na http://localhost:8080
echo    3. Artykuly ze statusem "planned" to pliki-szkielety
echo       gotowe do uzupelnienia trescia.
echo  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
echo.
pause
goto :eof

:: â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
::  PODPROGRAM” :mkmd
::  Tworzy plik MD z minimalnym nagłówkiem TYLKO gdy nie istnieje
:: â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
:mkmd
  set "_path=%~1"
  set "_title=%~2"
  set "_section=%~3"
  if not exist "%_path%" (
    echo  [CREATE]  %_path%
    (
      echo # %_title%
      echo.
      echo ^> **Dział:** %_section%
      echo.
      echo *Ten artykuł jest planowany. Uzupełnij tę sekcję treścią.*
      echo.
      echo ## Wprowadzenie
      echo.
      echo Treć artykułu w przygotowaniu.
      echo.
      echo ## Zobacz też
      echo.
      echo - Powiązane artykuły z tego działu są widoczne poniżej artykułu w portalu.
    ) > "%_path%"
  ) else (
    echo  [EXISTS]  %_path%
  )
goto :eof


