---
lastReviewed: 2026-04-01
reviewCycleMonths: 24
evidenceCutoffDate: 2025-12-31
---

# Interfejsy mózg–maszyna (BCI)

## Definicja i historia

**Interfejs mózg–maszyna** (*Brain-Computer Interface*, BCI), zwany też interfejsem neuronalnym lub *brain-machine interface* (BMI), to system umożliwiający bezpośrednią komunikację między mózgiem a urządzeniem zewnętrznym - z pominięciem normalnych dróg nerwowo-mięśniowych.

BCI dekoduje sygnały neuronalne i przekłada je na komendy sterujące komputerem, protezą, robotem lub innym urządzeniem. Kierunek może być też odwrotny - **neuromodulacja** - gdy urządzenie wysyła sygnały do mózgu.

Pierwsze eksperymentalne BCI opracowano w latach 70. XX wieku. Jacques Vidal w 1973 roku po raz pierwszy użył terminu „brain-computer interface" i zademonstrował sterowanie kursorem za pomocą EEG.

> **Fakt:** W 2021 roku firma Neuralink (Elon Musk) wszczepił chip BrainChip świni Gertrudzie - demonstrując zapis aktywności neuronów w czasie rzeczywistym. W 2024 roku Neuralink przeprowadził pierwszą implantację u człowieka, umożliwiając pacjentowi z paraliżem sterowanie komputerem.

## Typy BCI

### Ze względu na metodę rejestracji sygnałów

**Nieinwazyjne BCI** - elektrody na skórze głowy lub powierzchni ciała:

- **EEG** (*elektroencefalografia*) - najtańsza i najszerzej stosowana metoda; rejestruje sumaryczną aktywność elektryczną kory mózgowej; dobra rozdzielczość czasowa, słaba przestrzenna
- **fNIRS** (*funkcjonalna spektroskopia w bliskiej podczerwieni*) - mierzy utlenowanie krwi; dobra do monitorowania obciążenia poznawczego
- **MEG** (*magnetoencefalografia*) - mierzy pola magnetyczne mózgu; wysoka rozdzielczość czasowa i przestrzenna, ale drogie i nieprzenośne

**Inwazyjne BCI** - elektrody implantowane chirurgicznie:

- **ECoG** (*elektrokortykografia*) - elektrody na powierzchni kory; dobry kompromis między jakością sygnału a inwazyjnością
- **implanty wewnątrzkortykalne** - mikroelektrody w tkance mózgowej; najlepsza rozdzielczość; stosowane w BrainGate, Neuralink

### Ze względu na kierunek komunikacji

- **BCI wyjściowe** - mózg steruje urządzeniem (proteza, komputer)
- **BCI wejściowe** - urządzenie stymuluje mózg (implanty ślimakowe, DBS)
- **BCI dwukierunkowe** - obydwa kierunki jednocześnie

## Kluczowe paradygmaty BCI

### P300 Speller

Użytkownik patrzy na matrycę liter, które błyskają losowo. Gdy błysknie pożądana litera, mózg generuje charakterystyczny potencjał P300 (fala pojawiająca się ok. 300 ms po bodźcu). System wykrywa P300 i identyfikuje wybraną literę. Umożliwia komunikację z prędkością ok. 20-30 liter/minutę.

### SSVEP (*Steady-State Visual Evoked Potential*)

Bodźce wizualne o różnych częstotliwościach wywołują rezonans w korze wzrokowej. Skupienie wzroku na bodźcu o danej częstotliwości generuje SSVEP o tej samej częstotliwości - robot lub kursor może być sterowany szybko i z dużą dokładnością.

### Motor Imagery BCI

Wyobrażanie sobie ruchu (np. ściskania dłoni) wywołuje charakterystyczne wzorce aktywności w korze ruchowej - możliwe do wykrycia i sklasyfikowania przez algorytmy uczenia maszynowego.

## Zastosowania kliniczne

### Komunikacja u osób z ALS i paraliżem

Pacjenci z zaawansowanym stwardnieniem zanikowym bocznym (ALS) lub paraliżem rdzenia kręgowego mogą komunikować się za pomocą BCI. System **BrainGate** (Brown University, 2004) umożliwił sparaliżowanym pacjentom sterowanie kursorem myszy i klawiaturą ekranową.

> **Fakt:** Badanie Hochberga i współpracowników (2012) opublikowane w *Nature* wykazało, że pacjentka z paraliżem czterokończynowym potrafiła przy użyciu BrainGate2 sterować ramieniem robotycznym i samodzielnie pić kawę po raz pierwszy od 15 lat.

### Implanty ślimakowe

**Implant ślimakowy** (*cochlear implant*) to najszerzej stosowane kliniczne BCI - na świecie funkcjonuje ponad 750 000 implantów ślimakowych. Przetwarza dźwięk na impulsy elektryczne stymulujące nerw słuchowy, przywracając słuch osobom głuchym.

### Głęboka stymulacja mózgu (DBS)

Elektrody implantowane w jądrach podstawy mózgu, stosowane w leczeniu choroby Parkinsona, drżenia samoistnego i OCD. Stymulacja wysokoczęstotliwościowa moduluje nieprawidłowe wzorce aktywności.

## Wyzwania techniczne

- **przebijanie sygnału** - implantowane elektrody stopniowo tracą kontakt z neuronami z powodu odpowiedzi zapalnej tkanki
- **rozdzielczość** - najtańsze nieinwazyjne BCI mają słabą rozdzielczość przestrzenną
- **opóźnienie** - przetwarzanie sygnałów wprowadza opóźnienie ograniczające zastosowania w czasie rzeczywistym
- **artefakty** - ruchy mięśni, mruganie, zakłócenia EMG utrudniają odczyt sygnałów EEG

## Kwestie etyczne

### Prywatność kognitywna

Dane z mózgu są najbardziej intymnymi danymi osobowymi. BCI rejestrujące aktywność mózgową mogą ujawniać myśli, emocje i stany psychiczne. Pojęcie **neurorights** (*praw neuralnych*) - wprowadzone przez Rafael Yuste'a (Columbia) - obejmuje prawo do prywatności myśli, wolności kognitywnej i równości kognitywnej.

### Enhancement kognitywny

BCI mogłyby być stosowane nie tylko terapeutycznie, lecz i w celu wzmocnienia poznania u zdrowych osób - „neuroboostingu". Budzi to pytania o sprawiedliwość, presję społeczną i nierówności.



Interfejsy mózg–maszyna to jedna z najbardziej transformacyjnych technologii naszych czasów - łącząca inżynierię, neuronaukę i psychologię w projekcie bezpośredniego połączenia umysłu z maszyną. Ich kliniczne zastosowania już dziś zmieniają życie tysięcy pacjentów, a przyszłość przyniesie jeszcze głębszą integrację człowieka i technologii.

## Granice i wnioski

BCI jest neurotechnologią, a nie ogólną nazwą interakcji człowiek–AI. Sygnał EEG lub aktywność pojedynczych neuronów jest zaszumionym pomiarem fizjologicznym; jego dekodowanie nie oznacza bezpośredniego „czytania myśli”. Trafność zależy od zadania, kalibracji, stabilności sygnału i aktywnego udziału użytkownika.

Najlepiej udokumentowane zastosowania dotyczą przywracania komunikacji i sterowania osobom z ciężkimi ograniczeniami ruchowymi. Rozszerzanie wniosków na konsumenckie rozpoznawanie emocji albo swobodne odtwarzanie treści psychicznych wymaga osobnych dowodów. Wraz z postępem rośnie znaczenie świadomej zgody, bezpieczeństwa urządzenia, prywatności danych neuronalnych, długoterminowego wsparcia i sprawiedliwego dostępu.

## Bibliografia

1. Chaudhary, U., Birbaumer, N., & Ramos-Murguialday, A. (2016). Brain–computer interfaces for communication and rehabilitation. *Nature Reviews Neurology, 12*, 513–525. https://doi.org/10.1038/nrneurol.2016.113
2. Hochberg, L. R. i in. (2012). Reach and grasp by people with tetraplegia using a neurally controlled robotic arm. *Nature, 485*, 372–375. https://doi.org/10.1038/nature11076
3. Moses, D. A. i in. (2021). Neuroprosthesis for decoding speech in a paralyzed person with anarthria. *New England Journal of Medicine, 385*, 217–227. https://doi.org/10.1056/NEJMoa2027540
4. Nuyujukian, P. i in. (2018). Cortical control of a tablet computer by people with paralysis. *PLOS ONE, 13*(11), e0204566. https://doi.org/10.1371/journal.pone.0204566
5. U.S. Food and Drug Administration. (2021). *Implanted Brain-Computer Interface (BCI) Devices for Patients with Paralysis or Amputation: Non-clinical Testing and Clinical Considerations*. Guidance for Industry and Food and Drug Administration Staff.
6. UNESCO. (2023). *Report of the International Bioethics Committee of UNESCO (IBC) on the ethical issues of neurotechnology*. UNESCO.
