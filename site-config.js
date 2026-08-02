/**
 * site-config.js - PsyHub v3.2 "traumo-bajaderka"
 * Jedyne źródło prawdy: nawigacja, mapowanie plikow MD, definicje WIKI.
 *
 * Konwencja statusow artykulu:
 *   live    - plik MD istnieje, artykul dostepny
 *   planned - artykul zaplanowany, plik jeszcze nie istnieje
 *   xlink   - artykul wspoldzielony z innym dzialem (jeden plik MD)
 *   wiki    - odnosnik do strony indeksu WIKI
 */

window.SITE_CONFIG = {

  defaultPage: '__home__',

  // Zachowuje dawne adresy SPA po scaleniu lub przeniesieniu artykułów.
  articleRedirects: {
    'animaloterapia/aat_zastosowania': 'animaloterapia/animaloterapia_wprowadzenie',
    'animaloterapia/dogoterapia': 'animaloterapia/animaloterapia_wprowadzenie',
    'animaloterapia/etyka_aat': 'animaloterapia/animaloterapia_wprowadzenie',
    'animaloterapia/felinoterapia': 'animaloterapia/animaloterapia_wprowadzenie',
    'animaloterapia/hipoterapia': 'animaloterapia/animaloterapia_wprowadzenie',
    'animaloterapia/mechanizmy_aat': 'animaloterapia/animaloterapia_wprowadzenie',
    'doswiadczenie_somatyczne/dysocjacja_i_zawazenie_okna_tolerancji': 'doswiadczenie_somatyczne/wprowadzenie_do_doswiadczenia_somatycznego',
    'doswiadczenie_somatyczne/granice_zgoda_i_tempo_pracy': 'doswiadczenie_somatyczne/wprowadzenie_do_doswiadczenia_somatycznego',
    'doswiadczenie_somatyczne/integracja_z_innymi_terapiami_traumy': 'doswiadczenie_somatyczne/wprowadzenie_do_doswiadczenia_somatycznego',
    'doswiadczenie_somatyczne/interocepcja_i_propriocepcja_w_somatic_experiencing': 'doswiadczenie_somatyczne/wprowadzenie_do_doswiadczenia_somatycznego',
    'doswiadczenie_somatyczne/neurofizjologia_traumy_i_autonomiczny_uklad_nerwowy': 'doswiadczenie_somatyczne/wprowadzenie_do_doswiadczenia_somatycznego',
    'doswiadczenie_somatyczne/orientacja_i_uziemienie_w_somatic_experiencing': 'doswiadczenie_somatyczne/wprowadzenie_do_doswiadczenia_somatycznego',
    'doswiadczenie_somatyczne/przewlekly_bol_i_objawy_somatyczne': 'doswiadczenie_somatyczne/wprowadzenie_do_doswiadczenia_somatycznego',
    'doswiadczenie_somatyczne/reakcja_obronna_i_dokonczenie_ruchu': 'doswiadczenie_somatyczne/wprowadzenie_do_doswiadczenia_somatycznego',
    'doswiadczenie_somatyczne/stabilizacja_i_sekwencjonowanie': 'doswiadczenie_somatyczne/wprowadzenie_do_doswiadczenia_somatycznego',
    'doswiadczenie_somatyczne/titracja_i_pendulacja': 'doswiadczenie_somatyczne/wprowadzenie_do_doswiadczenia_somatycznego',
    'doswiadczenie_somatyczne/trauma_zlozona_i_relacja_terapeutyczna': 'doswiadczenie_somatyczne/wprowadzenie_do_doswiadczenia_somatycznego',
    'doswiadczenie_somatyczne/zasoby_i_poczucie_bezpieczenstwa': 'doswiadczenie_somatyczne/wprowadzenie_do_doswiadczenia_somatycznego',
    'ekrany_ksiazki_i_natura/czytanie_fikcja_empatia': 'ekrany_ksiazki_i_natura/czytanie_i_psychologia',
    'ekrany_ksiazki_i_natura/ekrany_funkcje_poznawcze': 'ekrany_ksiazki_i_natura/ekrany_i_funkcjonowanie_psychiczne',
    'ekrany_ksiazki_i_natura/gleboke_czytanie': 'ekrany_ksiazki_i_natura/czytanie_i_psychologia',
    'ekrany_ksiazki_i_natura/gory_psychologia': 'ekrany_ksiazki_i_natura/kontakt_z_natura_i_zdrowie_psychiczne',
    'ekrany_ksiazki_i_natura/las_shinrin_yoku': 'ekrany_ksiazki_i_natura/kontakt_z_natura_i_zdrowie_psychiczne',
    'ekrany_ksiazki_i_natura/smartfony_psychologia': 'ekrany_ksiazki_i_natura/ekrany_i_funkcjonowanie_psychiczne',
    'ekrany_ksiazki_i_natura/tablety_dzieci': 'ekrany_ksiazki_i_natura/ekrany_i_funkcjonowanie_psychiczne',
    'ekrany_ksiazki_i_natura/telewizja_psychologia': 'ekrany_ksiazki_i_natura/ekrany_i_funkcjonowanie_psychiczne',
    'filozofia/asymetria_dobra_i_bolu': 'filozofia/etyka',
    'filozofia/cien_antropiczny': 'filozofia/argumenty_antropiczne_i_realizm_modalny',
    'filozofia/efilizm': 'filozofia/etyka',
    'filozofia/egocentryczny_dylemat': 'filozofia/filozofia_czlowieka',
    'filozofia/egzystencjalizm': 'filozofia/filozofia_czlowieka',
    'filozofia/eliminatywizm_materialny': 'filozofia/filozofia_umyslu',
    'filozofia/epistemologia': 'filozofia/wprowadzenie',
    'filozofia/fenomenologia': 'filozofia/wprowadzenie',
    'filozofia/filozofia_jezyka': 'filozofia/filozofia_nauki',
    'filozofia/filozoficzne_zombie': 'filozofia/filozofia_umyslu',
    'filozofia/hermeneutyka': 'filozofia/wprowadzenie',
    'filozofia/horror_panpsychizmu': 'filozofia/filozofia_umyslu',
    'filozofia/logika': 'filozofia/wprowadzenie',
    'filozofia/mozg_boltzmanna': 'filozofia/argumenty_antropiczne_i_realizm_modalny',
    'filozofia/niemoralnosc_braku_zgody': 'filozofia/etyka',
    'filozofia/odpowiedzialnosc_epistemiczna': 'filozofia/filozofia_nauki',
    'filozofia/ontologia': 'filozofia/wprowadzenie',
    'filozofia/paradoksalny_determinizm': 'filozofia/filozofia_czlowieka',
    'filozofia/pesymizm_biologiczny': 'filozofia/etyka',
    'filozofia/podswiadomy_nihilizm': 'filozofia/filozofia_czlowieka',
    'filozofia/pusty_indywidualizm': 'filozofia/filozofia_umyslu',
    'filozofia/realizm_modalny': 'filozofia/argumenty_antropiczne_i_realizm_modalny',
    'filozofia/redukcjonizm_tozsamosci': 'filozofia/filozofia_umyslu',
    'neuropsychologia/agregaty_neuronalne': 'neuropsychologia/podstawy_neurologii',
    'neuropsychologia/cykl_miesiaczkowy': 'neuropsychologia/plastycznosc',
    'neuropsychologia/eye_tracking': 'neuropsychologia/neuronauka_poznawcza',
    'neuropsychologia/kora_prefrontalna': 'neuropsychologia/anatomia',
    'neuropsychologia/lateralizacja': 'neuropsychologia/anatomia',
    'neuropsychologia/muse': 'neuropsychologia/neuronauka_poznawcza',
    'neuropsychologia/myelinizacja': 'neuropsychologia/podstawy_neurologii',
    'neuropsychologia/neuron': 'neuropsychologia/podstawy_neurologii',
    'neuropsychologia/neuroobrazowanie': 'neuropsychologia/neuronauka_poznawcza',
    'neuropsychologia/pien_mozgu': 'neuropsychologia/anatomia',
    'neuropsychologia/przesilenie_wiosenne': 'neuropsychologia/plastycznosc',
    'neuropsychologia/systemy': 'neuropsychologia/anatomia',
    'neuropsychologia/uklad_limbiczny': 'neuropsychologia/anatomia',
    'neuropsychologia/zachowanie_i_dwie_polkule_mozgu': 'neuropsychologia/anatomia',
    'porozumiewanie_sie_bez_przemocy/autoempatia': 'porozumiewanie_sie_bez_przemocy/nvc_w_praktyce',
    'porozumiewanie_sie_bez_przemocy/cztery_komponenty': 'porozumiewanie_sie_bez_przemocy/wprowadzenie',
    'porozumiewanie_sie_bez_przemocy/empatia_nvc': 'porozumiewanie_sie_bez_przemocy/nvc_w_praktyce',
    'porozumiewanie_sie_bez_przemocy/jezyk_szakala_i_zyrafy': 'porozumiewanie_sie_bez_przemocy/wprowadzenie',
    'porozumiewanie_sie_bez_przemocy/nvc_w_konfliktach': 'porozumiewanie_sie_bez_przemocy/nvc_w_praktyce',
    'porozumiewanie_sie_bez_przemocy/nvc_w_wychowaniu': 'porozumiewanie_sie_bez_przemocy/nvc_w_praktyce',
    'porozumiewanie_sie_bez_przemocy/obserwacja': 'porozumiewanie_sie_bez_przemocy/wprowadzenie',
    'porozumiewanie_sie_bez_przemocy/potrzeby': 'porozumiewanie_sie_bez_przemocy/wprowadzenie',
    'porozumiewanie_sie_bez_przemocy/prosba_i_zadanie': 'porozumiewanie_sie_bez_przemocy/wprowadzenie',
    'porozumiewanie_sie_bez_przemocy/uczucia': 'porozumiewanie_sie_bez_przemocy/wprowadzenie',
    'psychofarmakologia/05_leki_przeciwpsychotyczne': 'psychofarmakologia/klasy_lekow_psychotropowych',
    'psychofarmakologia/06_leki_przeciwdepresyjne': 'psychofarmakologia/klasy_lekow_psychotropowych',
    'psychofarmakologia/07_leki_normotymiczne': 'psychofarmakologia/klasy_lekow_psychotropowych',
    'psychofarmakologia/08_leki_prokognitywne': 'psychofarmakologia/klasy_lekow_psychotropowych',
    'psychofarmakologia/09_leki_przeciwlekowe_i_nasenne': 'psychofarmakologia/klasy_lekow_psychotropowych',
    'psychofarmakologia/10_leki_stymulujace': 'psychofarmakologia/klasy_lekow_psychotropowych',
    'psychofarmakologia/12_inne_leki_psychotropowe_lub_stosowane_w_psychiatrii': 'psychofarmakologia/klasy_lekow_psychotropowych',
    'psychologia_ai/ai_emocje': 'psychologia_ai/psychologia_interakcji_czlowiek_ai',
    'psychologia_ai/ai_poznawcze': 'psychologia_ai/mechanizmy_ograniczenia_i_etyka_ai',
    'psychologia_ai/ai_w_terapii': 'psychologia_ai/ai_w_zdrowiu_psychicznym_i_opiece',
    'psychologia_ai/antropomorfizacja_ai': 'psychologia_ai/psychologia_interakcji_czlowiek_ai',
    'psychologia_ai/czlowiek_a_ai': 'psychologia_ai/psychologia_interakcji_czlowiek_ai',
    'psychologia_ai/decyzje_ai': 'psychologia_ai/psychologia_interakcji_czlowiek_ai',
    'psychologia_ai/etyka_ai': 'psychologia_ai/mechanizmy_ograniczenia_i_etyka_ai',
    'psychologia_ai/historia_ai': 'psychologia_ai/mechanizmy_ograniczenia_i_etyka_ai',
    'psychologia_ai/przyszlosc_ai': 'psychologia_ai/mechanizmy_ograniczenia_i_etyka_ai',
    'psychologia_ai/psychoza_ai': 'psychologia_ai/ai_w_zdrowiu_psychicznym_i_opiece',
    'psychologia_ai/uprzedzenia_ai': 'psychologia_ai/mechanizmy_ograniczenia_i_etyka_ai',
    'psychologia_ai/wprowadzenie': 'psychologia_ai/psychologia_interakcji_czlowiek_ai',
    'psychologia_ai/zaufanie_do_ai': 'psychologia_ai/psychologia_interakcji_czlowiek_ai',
    'psychologia_gier/agresja_a_gry': 'psychologia_gier/skutki_grania_i_uzywanie_problemowe',
    'psychologia_gier/efekty_poznawcze': 'psychologia_gier/skutki_grania_i_uzywanie_problemowe',
    'psychologia_gier/esport': 'psychologia_gier/zastosowania_gier_i_esport',
    'psychologia_gier/flow_i_immersja': 'psychologia_gier/wprowadzenie',
    'psychologia_gier/gry_a_dzieci': 'psychologia_gier/skutki_grania_i_uzywanie_problemowe',
    'psychologia_gier/gry_spolecznosciowe': 'psychologia_gier/wprowadzenie',
    'psychologia_gier/gry_terapeutyczne': 'psychologia_gier/zastosowania_gier_i_esport',
    'psychologia_gier/motywacja_gracza': 'psychologia_gier/wprowadzenie',
    'psychologia_gier/uzaleznienie_od_gier': 'psychologia_gier/skutki_grania_i_uzywanie_problemowe',
    'psychologia_niepelnosprawnosci/jakosc_zycia': 'psychologia_zdrowia/choroby_przewlekle',
    'psychologia_poznawcza/architektury_kognitywne': 'psychologia_poznawcza/nauki_kognitywne',
    'psychologia_poznawcza/efekt_ramowania': 'psychologia_poznawcza/myslenie',
    'psychologia_poznawcza/eksperyment_posnera': 'psychologia_poznawcza/percepcja',
    'psychologia_poznawcza/exploration_exploitation_dilemma': 'psychologia_poznawcza/myslenie',
    'psychologia_poznawcza/hda': 'psychologia_poznawcza/funkcje_wykonawcze',
    'psychologia_poznawcza/iluzje': 'psychologia_poznawcza/percepcja',
    'psychologia_poznawcza/maly_albert': 'psychologia_poznawcza/pamiec',
    'psychologia_poznawcza/narracje_i_psychika': 'psychologia_poznawcza/jezyk',
    'psychologia_poznawcza/nasa_tlx': 'psychologia_poznawcza/funkcje_wykonawcze',
    'psychologia_poznawcza/pamiec_dlugotrwala': 'psychologia_poznawcza/pamiec',
    'psychologia_poznawcza/podejmowanie_decyzji': 'psychologia_poznawcza/myslenie',
    'psychologia_poznawcza/przetwarzanie_predyktywne': 'psychologia_poznawcza/swiadomosc',
    'psychologia_poznawcza/przyklad_testu_stroopa': 'psychologia_poznawcza/percepcja',
    'psychologia_poznawcza/system1_system2': 'psychologia_poznawcza/myslenie',
    'psychologia_poznawcza/teoria_perspektywy': 'psychologia_poznawcza/myslenie',
    'psychologia_poznawcza/test_stroopa': 'psychologia_poznawcza/funkcje_wykonawcze',
    'psychologia_poznawcza/ucielesnienie': 'psychologia_poznawcza/swiadomosc',
    'psychologia_poznawcza/uczenie': 'psychologia_poznawcza/pamiec',
    'psychologia_poznawcza/uklad_siatkowaty': 'psychologia_poznawcza/percepcja',
    'psychologia_poznawcza/uwaga': 'psychologia_poznawcza/percepcja',
    'psychologia_poznawcza/uwaga_mimowolna': 'psychologia_poznawcza/percepcja',
    'psychologia_poznawcza/wyobraznia': 'psychologia_poznawcza/jezyk',
    'psychologia_poznawcza/zmeczenie_poznawcze': 'psychologia_poznawcza/funkcje_wykonawcze',
    'psychologia_religii/coping_religijny': 'psychologia_religii/religia_a_zdrowie_psychiczne',
    'psychologia_religii/doswiadczenia_mistyczne': 'psychologia_religii/doswiadczenia_religijne_w_praktyce_klinicznej',
    'psychologia_religii/konwersja_religijna': 'psychologia_religii/religijnosc_i_duchowosc',
    'psychologia_religii/negatywny_wplyw_religii_na_zycie_rozwoj_i_moralnosc': 'psychologia_religii/religia_a_zdrowie_psychiczne',
    'psychologia_religii/obrazy_boga': 'psychologia_religii/religijnosc_i_duchowosc',
    'psychologia_religii/pozytywny_wplyw_religii_na_psychike': 'psychologia_religii/religia_a_zdrowie_psychiczne',
    'psychologia_religii/religia_a_moralnosc_i_etyka_postepowania': 'psychologia_religii/metodologia_badan',
    'psychologia_religii/religia_w_psychoterapii': 'psychologia_religii/doswiadczenia_religijne_w_praktyce_klinicznej',
    'psychologia_religii/rozwoj_religijnosci': 'psychologia_religii/religijnosc_i_duchowosc',
    'psychologia_religii/rytualy_i_zdrowie': 'psychologia_religii/religia_a_zdrowie_psychiczne',
    'psychologia_religii/skrupulatyzm': 'psychologia_religii/doswiadczenia_religijne_w_praktyce_klinicznej',
    'psychologia_religii/wprowadzenie': 'psychologia_religii/religijnosc_i_duchowosc',
    'psychologia_religii/wspolnota_i_tozsamosc': 'psychologia_religii/religijnosc_i_duchowosc',
    'psychologia_spoleczna/atrakcyjnosc': 'psychologia_spoleczna/grupy_relacje_i_wspolpraca',
    'psychologia_spoleczna/eksperyment_wiezienny': 'psychologia_spoleczna/wplyw_spoleczny_perswazja_i_posluszenstwo',
    'psychologia_spoleczna/hejt_w_sieci': 'psychologia_spoleczna/agresja_uprzedzenia_i_przemoc_spoleczna',
    'psychologia_spoleczna/manipulacja': 'psychologia_spoleczna/wplyw_spoleczny_perswazja_i_posluszenstwo',
    'psychologia_spoleczna/manosfera_feminizm': 'psychologia_spoleczna/agresja_uprzedzenia_i_przemoc_spoleczna',
    'psychologia_spoleczna/perswazja': 'psychologia_spoleczna/wplyw_spoleczny_perswazja_i_posluszenstwo',
    'psychologia_spoleczna/postawy': 'psychologia_spoleczna/percepcja_spoleczna',
    'psychologia_spoleczna/stereotypy': 'psychologia_spoleczna/percepcja_spoleczna',
    'psychologia_spoleczna/zachowania_prospoleczne': 'psychologia_spoleczna/grupy_relacje_i_wspolpraca',
    'psychologia_spoleczna/zdrowe_poczucie_wlasnej_wartosci': 'psychologia_spoleczna/ja_i_samoocena',
    'psychopatologia/formulowanie_przypadku': 'diagnoza/formulowanie_przypadku',
    'robotyka_afektywna/dolina_niesamowitosci': 'psychologia_ai/psychologia_interakcji_czlowiek_ai',
    'robotyka_afektywna/emocje_robotow': 'psychologia_ai/mechanizmy_ograniczenia_i_etyka_ai',
    'robotyka_afektywna/historia_robotyki_afektywnej': 'psychologia_ai/mechanizmy_ograniczenia_i_etyka_ai',
    'robotyka_afektywna/kognitywistyka_obliczeniowa': 'psychologia_ai/mechanizmy_ograniczenia_i_etyka_ai',
    'robotyka_afektywna/percepcja_robotow': 'psychologia_ai/psychologia_interakcji_czlowiek_ai',
    'robotyka_afektywna/przyszlosc_robotyki_afektywnej': 'psychologia_ai/mechanizmy_ograniczenia_i_etyka_ai',
    'robotyka_afektywna/roboty_spoleczne': 'psychologia_ai/psychologia_interakcji_czlowiek_ai',
    'robotyka_afektywna/roboty_w_opiece': 'psychologia_ai/ai_w_zdrowiu_psychicznym_i_opiece',
    'robotyka_afektywna/swiadomosc_maszyn': 'psychologia_ai/mechanizmy_ograniczenia_i_etyka_ai',
    'robotyka_afektywna/wprowadzenie': 'psychologia_ai/psychologia_interakcji_czlowiek_ai',
    'robotyka_afektywna/wspolpraca_czlowiek_robot': 'psychologia_ai/psychologia_interakcji_czlowiek_ai',
    'seksuologia/dda_a_seksualnosc': 'seksuologia/trauma_seksualna',
    'seksuologia/emocjonalne_zaangazowanie_w_seksie': 'seksuologia/seksuologia_wprowadzenie',
    'seksuologia/modele_odpowiedzi': 'seksuologia/dysfunkcje',
    'seksuologia/orientacja': 'seksuologia/orientacja_seksualna_i_tozsamosc_plciowa',
    'seksuologia/przemoc_w_dziecinstwie_a_seksualnosc': 'seksuologia/trauma_seksualna',
    'seksuologia/psychologia_seksu': 'seksuologia/seksuologia_wprowadzenie',
    'seksuologia/rozw_seksualny': 'seksuologia/seksuologia_wprowadzenie',
    'seksuologia/terapia_seksualna': 'seksuologia/dysfunkcje',
    'seksuologia/tozsamosc_plciowa': 'seksuologia/orientacja_seksualna_i_tozsamosc_plciowa',
    'seksuologia/wstyd_ciala_a_pozycje': 'seksuologia/dysfunkcje',
    'psychometria/ados': 'psychometria/narzedzia_diagnozy_neurorozwojowej',
    'psychometria/bdi_2': 'psychometria/narzedzia_kliniczne',
    'psychometria/cfa_efa': 'psychometria/modele_psychometryczne_i_struktura_testu',
    'psychometria/diva': 'psychometria/narzedzia_diagnozy_neurorozwojowej',
    'psychometria/invariancja': 'psychometria/modele_psychometryczne_i_struktura_testu',
    'psychometria/irt': 'psychometria/modele_psychometryczne_i_struktura_testu',
    'psychometria/mmpi': 'psychometria/testy_osobowosci_i_zdolnosci',
    'psychometria/normalizacja': 'psychometria/psychometria_wprowadzenie',
    'psychometria/rzetelnosc': 'psychometria/psychometria_wprowadzenie',
    'psychometria/teoria_ct': 'psychometria/psychometria_wprowadzenie',
    'psychometria/test_matryc_ravena': 'psychometria/testy_osobowosci_i_zdolnosci',
    'psychometria/trafnosc': 'psychometria/psychometria_wprowadzenie',
    'psychopatologia/klasyfikacje': 'psychopatologia/psychopatologia_wprowadzenie',
    'psychopatologia/objawy_ogolne': 'psychopatologia/psychopatologia_wprowadzenie',
    'psychopatologia/neurorozwojowe': 'psychopatologia/psychopatologia_wprowadzenie',
    'psychopatologia/depresja_poporodowa': 'psychopatologia/zaburzenia_nastroju',
    'psychopatologia/wyuczona_bezradnosc': 'psychopatologia/zaburzenia_nastroju',
    'psychopatologia/dezintegracja_pozytywna': 'psychopatologia/zaburzenia_nastroju',
    'psychopatologia/zaburzenia_lekowe': 'psychopatologia/zaburzenia_lekowe_i_obsesyjno_kompulsyjne',
    'psychopatologia/ocd': 'psychopatologia/zaburzenia_lekowe_i_obsesyjno_kompulsyjne',
    'psychopatologia/intelektualizacja': 'psychopatologia/zaburzenia_lekowe_i_obsesyjno_kompulsyjne',
    'psychopatologia/wiktymizacja': 'psychopatologia/trauma_ptsd',
    'psychopatologia/przymus_powtarzania': 'psychopatologia/trauma_ptsd',
    'psychopatologia/psychopatia': 'psychopatologia/zaburzenia_osobowosci',
    'psychopatologia/socjopatia': 'psychopatologia/zaburzenia_osobowosci',
    'psychopatologia/zaburzenia_odzywiania': 'psychopatologia/zaburzenia_odzywiania_i_uzaleznienia',
    'psychopatologia/uzaleznienia_psych': 'psychopatologia/zaburzenia_odzywiania_i_uzaleznienia',
    'kulturowa/metody': 'kulturowa/wprowadzenie',
    'kulturowa/indywidualizm_kolektywizm': 'kulturowa/wprowadzenie',
    'kulturowa/wschodnia_zachodnia': 'kulturowa/wprowadzenie',
    'kulturowa/kultura_percepcja': 'kulturowa/kultura_a_procesy_psychiczne',
    'kulturowa/kultura_jezyk': 'kulturowa/kultura_a_procesy_psychiczne',
    'kulturowa/kultura_emocje': 'kulturowa/kultura_a_procesy_psychiczne',
    'kulturowa/kultura_osobowosc': 'kulturowa/kultura_a_procesy_psychiczne',
    'kulturowa/kulturowe_modele_ja': 'kulturowa/kultura_a_procesy_psychiczne',
    'kulturowa/akulturacja': 'kulturowa/akulturacja_relacje_i_zdrowie',
    'kulturowa/kultura_relacje': 'kulturowa/akulturacja_relacje_i_zdrowie',
    'kulturowa/kultura_zdrowie': 'kulturowa/akulturacja_relacje_i_zdrowie',
    'psychologia_sadowa/rola_bieglego': 'psychologia_sadowa/wprowadzenie',
    'psychologia_sadowa/biegly_a_sad': 'psychologia_sadowa/wprowadzenie',
    'psychologia_sadowa/podstawy_prawne': 'psychologia_sadowa/wprowadzenie',
    'psychologia_sadowa/metodologia_opinii': 'psychologia_sadowa/wprowadzenie',
    'psychologia_sadowa/narzedzia_diagnostyczne': 'psychologia_sadowa/wprowadzenie',
    'psychologia_sadowa/etyka_opiniowania': 'psychologia_sadowa/wprowadzenie',
    'psychologia_sadowa/opinia_karna': 'psychologia_sadowa/zastosowania_opiniowania_sadowego',
    'psychologia_sadowa/opinia_cywilna': 'psychologia_sadowa/zastosowania_opiniowania_sadowego',
    'psychologia_sadowa/opinia_rodzinna': 'psychologia_sadowa/zastosowania_opiniowania_sadowego',
    'psychologia_sadowa/opiniowanie_nieletnich': 'psychologia_sadowa/zastosowania_opiniowania_sadowego',
    'psychologia_sadowa/ocena_wiarygodnosci': 'psychologia_sadowa/zastosowania_opiniowania_sadowego',
    'psychologia_niepelnosprawnosci/autyzm_niepelnosprawnosc': 'neuroroznorodnosc/spektrum_autyzmu',
    'psychologia_niepelnosprawnosci/rehabilitacja_psychologiczna': 'psychologia_zdrowia/choroby_przewlekle',
    'psychoterapia/systemowa': 'systemy_rodzinne/terapie_systemowe_i_rodzinne',
    'psychoterapia/skutecznosc': 'psychoterapia/psychoterapia_wprowadzenie',
    'psychoterapia/sojusz': 'psychoterapia/psychoterapia_wprowadzenie',
    'psychoterapia/superwizja': 'psychoterapia/psychoterapia_wprowadzenie',
    'psychoterapia/aktywacja_behawioralna': 'psychoterapia/cbt',
    'psychoterapia/rebt': 'psychoterapia/cbt',
    'psychoterapia/trening_umiejetnosci_spolecznych': 'psychoterapia/cbt',
    'psychoterapia/heksafleks_act': 'psychoterapia/act',
    'psychoterapia/psychodyn': 'psychoterapia/podejscia_psychodynamiczne_i_humanistyczne',
    'psychoterapia/humanist': 'psychoterapia/podejscia_psychodynamiczne_i_humanistyczne',
    'psychoterapia/gestalt': 'psychoterapia/podejscia_psychodynamiczne_i_humanistyczne',
    'psychoterapia/logoterapia_frankl': 'psychoterapia/podejscia_psychodynamiczne_i_humanistyczne',
    'psychoterapia/psychoanaliza_fromma': 'psychoterapia/podejscia_psychodynamiczne_i_humanistyczne',
    'psychoterapia/kontenerowanie_emocji': 'psychoterapia/podejscia_psychodynamiczne_i_humanistyczne',
    'psychoterapia/terapia_prowokatywna': 'psychoterapia/interwencje_relacyjne_i_niestandardowe',
    'psychoterapia/psychologiczne_mechanizmy_przebaczenia': 'psychoterapia/interwencje_relacyjne_i_niestandardowe',
    'psychoterapia/psychologia_zimbardo': 'psychologia_spoleczna/wplyw_spoleczny_perswazja_i_posluszenstwo',
    'psychoterapia/systemy_rodzinne': 'systemy_rodzinne/wprowadzenie_do_terapii_systemowej',
    'psychoterapia/systemy_rodzinne_genogram': 'systemy_rodzinne/wprowadzenie_do_terapii_systemowej',
    'psychoterapia/systemy_rodzinne_genogram_i_hipotezy_kliniczne': 'systemy_rodzinne/wprowadzenie_do_terapii_systemowej',
    'e_terapia/wprowadzenie': 'e_terapia/terapia_online',
    'e_terapia/historia_e_terapii': 'e_terapia/terapia_online',
    'e_terapia/skutecznosc_e_terapii': 'e_terapia/terapia_online',
    'e_terapia/platformy_e_terapii': 'e_terapia/terapia_online',
    'e_terapia/dostepnosc_cyfrowa': 'e_terapia/terapia_online',
    'e_terapia/e_terapia_dzieci': 'e_terapia/terapia_online',
    'e_terapia/etyka_e_terapii': 'e_terapia/terapia_online',
    'e_terapia/aplikacje_zdrowia_psychicznego': 'e_terapia/cyfrowe_narzedzia_zdrowia_psychicznego',
    'e_terapia/chatboty_terapeutyczne': 'e_terapia/cyfrowe_narzedzia_zdrowia_psychicznego',
    'e_terapia/przyszlosc_e_terapii': 'e_terapia/terapia_online',
    'arteterapia/art_therapy': 'arteterapia/arteterapia_wprowadzenie',
    'arteterapia/muzykoterapia': 'arteterapia/arteterapia_wprowadzenie',
    'arteterapia/biblioterapia': 'arteterapia/arteterapia_wprowadzenie',
    'arteterapia/drameterapia': 'arteterapia/arteterapia_wprowadzenie',
    'arteterapia/dmt': 'arteterapia/arteterapia_wprowadzenie',
    'arteterapia/mechanizmy': 'arteterapia/arteterapia_wprowadzenie',
    'arteterapia/zastosowania': 'arteterapia/arteterapia_wprowadzenie',
    'somatic_experiencing/dysocjacja_i_zawazenie_okna_tolerancji': 'somatic_experiencing/wprowadzenie_do_doswiadczenia_somatycznego',
    'somatic_experiencing/granice_zgoda_i_tempo_pracy': 'somatic_experiencing/wprowadzenie_do_doswiadczenia_somatycznego',
    'somatic_experiencing/integracja_z_innymi_terapiami_traumy': 'somatic_experiencing/wprowadzenie_do_doswiadczenia_somatycznego',
    'somatic_experiencing/interocepcja_i_propriocepcja_w_somatic_experiencing': 'somatic_experiencing/wprowadzenie_do_doswiadczenia_somatycznego',
    'somatic_experiencing/neurofizjologia_traumy_i_autonomiczny_uklad_nerwowy': 'somatic_experiencing/wprowadzenie_do_doswiadczenia_somatycznego',
    'somatic_experiencing/orientacja_i_uziemienie_w_somatic_experiencing': 'somatic_experiencing/wprowadzenie_do_doswiadczenia_somatycznego',
    'somatic_experiencing/przewlekly_bol_i_objawy_somatyczne': 'somatic_experiencing/wprowadzenie_do_doswiadczenia_somatycznego',
    'somatic_experiencing/reakcja_obronna_i_dokonczenie_ruchu': 'somatic_experiencing/wprowadzenie_do_doswiadczenia_somatycznego',
    'somatic_experiencing/stabilizacja_i_sekwencjonowanie': 'somatic_experiencing/wprowadzenie_do_doswiadczenia_somatycznego',
    'somatic_experiencing/titracja_i_pendulacja': 'somatic_experiencing/wprowadzenie_do_doswiadczenia_somatycznego',
    'somatic_experiencing/trauma_zlozona_i_relacja_terapeutyczna': 'somatic_experiencing/wprowadzenie_do_doswiadczenia_somatycznego',
    'somatic_experiencing/zasoby_i_poczucie_bezpieczenstwa': 'somatic_experiencing/wprowadzenie_do_doswiadczenia_somatycznego',
    'reagowanie_na_krytyke/czym_jest_krytyka_i_informacja_zwrotna': 'reagowanie_na_krytyke/jak_nie_brac_do_siebie_opinii_innych',
    'reagowanie_na_krytyke/granice_i_asertywnosc': 'reagowanie_na_krytyke/jak_nie_brac_do_siebie_opinii_innych',
    'reagowanie_na_krytyke/mentalizacja_i_intencje_nadawcy': 'reagowanie_na_krytyke/jak_nie_brac_do_siebie_opinii_innych',
    'reagowanie_na_krytyke/mikrointerwencje_w_czasie_rzeczywistym': 'reagowanie_na_krytyke/jak_nie_brac_do_siebie_opinii_innych',
    'reagowanie_na_krytyke/model_sbi_nvc_w_praktyce': 'reagowanie_na_krytyke/jak_nie_brac_do_siebie_opinii_innych',
    'reagowanie_na_krytyke/najczestsze_bledy_po_krytyce': 'reagowanie_na_krytyke/jak_nie_brac_do_siebie_opinii_innych',
    'reagowanie_na_krytyke/neurobiologia_stresu_oceny': 'reagowanie_na_krytyke/jak_nie_brac_do_siebie_opinii_innych',
    'reagowanie_na_krytyke/plan_30_dni_trening_odpornosci': 'reagowanie_na_krytyke/jak_nie_brac_do_siebie_opinii_innych',
    'reagowanie_na_krytyke/samowspolczucie_i_act': 'reagowanie_na_krytyke/jak_nie_brac_do_siebie_opinii_innych',
    'reagowanie_na_krytyke/schematy_poznawcze_i_znieksztalcenia': 'reagowanie_na_krytyke/jak_nie_brac_do_siebie_opinii_innych',
    'reagowanie_na_krytyke/style_reagowania_na_krytyke': 'reagowanie_na_krytyke/jak_nie_brac_do_siebie_opinii_innych',
    'reagowanie_na_krytyke/trudne_rozmowy_w_pracy': 'reagowanie_na_krytyke/jak_nie_brac_do_siebie_opinii_innych',
    'resocjalizacja/desistance_i_zmiana_tozsamosci': 'resocjalizacja/podstawy_resocjalizacji',
    'resocjalizacja/diagnoza_ryzyka_i_potrzeb': 'resocjalizacja/podstawy_resocjalizacji',
    'resocjalizacja/edukacja_i_aktywizacja_zawodowa': 'resocjalizacja/podstawy_resocjalizacji',
    'resocjalizacja/etyka_i_prawa_czlowieka': 'resocjalizacja/podstawy_resocjalizacji',
    'resocjalizacja/ewaluacja_skutecznosci_programow': 'resocjalizacja/podstawy_resocjalizacji',
    'resocjalizacja/model_rnr_w_praktyce': 'resocjalizacja/podstawy_resocjalizacji',
    'resocjalizacja/praca_z_uzaleznieniami_w_resocjalizacji': 'resocjalizacja/podstawy_resocjalizacji',
    'resocjalizacja/readaptacja_postpenitencjarna': 'resocjalizacja/podstawy_resocjalizacji',
    'resocjalizacja/resocjalizacja_nieletnich': 'resocjalizacja/podstawy_resocjalizacji',
    'resocjalizacja/sprawiedliwosc_naprawcza_mediacje': 'resocjalizacja/podstawy_resocjalizacji',
    'resocjalizacja/trening_umiejetnosci_spolecznych_i_samokontroli': 'resocjalizacja/podstawy_resocjalizacji',
    'psychologia_pozytywna/wprowadzenie': 'psychologia_pozytywna/szczescie_dobrostan',
    'psychologia_pozytywna/model_perma': 'psychologia_pozytywna/szczescie_dobrostan',
    'psychologia_pozytywna/optymizm_nadzieja': 'psychologia_pozytywna/szczescie_dobrostan',
    'psychologia_pozytywna/relacje_pozytywne': 'psychologia_pozytywna/szczescie_dobrostan',
    'psychologia_pozytywna/sens_i_cel': 'psychologia_pozytywna/szczescie_dobrostan',
    'psychologia_pozytywna/sily_charakteru': 'psychologia_pozytywna/szczescie_dobrostan',
    'psychologia_pozytywna/wdziecznosc': 'psychologia_pozytywna/interwencje_pozytywne',
    'psychologia_pozytywna/3p_optymizmu_seligmana': 'psychologia_pozytywna/interwencje_pozytywne',
    'psychologia_pozytywna/mindfulness': 'psychologia_pozytywna/uwaznosc_przeplyw_i_samowspolczucie',
    'psychologia_pozytywna/przeplyw_flow': 'psychologia_pozytywna/uwaznosc_przeplyw_i_samowspolczucie',
    'psychologia_pozytywna/wspolczucie_dla_siebie': 'psychologia_pozytywna/uwaznosc_przeplyw_i_samowspolczucie',
    'psychologia_nadmiernego_jedzenia/neurobiologia_nagrody_i_glodu': 'psychologia_nadmiernego_jedzenia/czym_jest_nadmierne_jedzenie',
    'psychologia_nadmiernego_jedzenia/regulacja_emocji_i_jedzenie': 'psychologia_nadmiernego_jedzenia/czym_jest_nadmierne_jedzenie',
    'psychologia_nadmiernego_jedzenia/stres_i_jedzenie_kompulsywne': 'psychologia_nadmiernego_jedzenia/czym_jest_nadmierne_jedzenie',
    'psychologia_nadmiernego_jedzenia/srodowisko_zywieniowe_i_nawyki': 'psychologia_nadmiernego_jedzenia/czym_jest_nadmierne_jedzenie',
    'psychologia_nadmiernego_jedzenia/rodzinne_wzorce_jedzenia': 'psychologia_nadmiernego_jedzenia/czym_jest_nadmierne_jedzenie',
    'psychologia_nadmiernego_jedzenia/obraz_ciala_i_samokrytycyzm': 'psychologia_nadmiernego_jedzenia/czym_jest_nadmierne_jedzenie',
    'psychologia_nadmiernego_jedzenia/diagnoza_roznicowa_bed_bulimia': 'psychologia_nadmiernego_jedzenia/czym_jest_nadmierne_jedzenie',
    'psychologia_nadmiernego_jedzenia/interwencje_poznawczo_behawioralne': 'psychologia_nadmiernego_jedzenia/czym_jest_nadmierne_jedzenie',
    'psychologia_nadmiernego_jedzenia/mindfulness_i_regulacja_apetytu': 'psychologia_nadmiernego_jedzenia/czym_jest_nadmierne_jedzenie',
    'psychologia_nadmiernego_jedzenia/farmakoterapia_i_wskazania': 'psychologia_nadmiernego_jedzenia/czym_jest_nadmierne_jedzenie',
    'psychologia_nadmiernego_jedzenia/profilaktyka_nawrotow': 'psychologia_nadmiernego_jedzenia/czym_jest_nadmierne_jedzenie',
    'psychologia_kliniczna_dziecka/bledy_diagnostyczne_i_iatrogenia': 'psychologia_kliniczna_dziecka/czym_jest_psychologia_kliniczna_dziecka',
    'psychologia_kliniczna_dziecka/cbt_dzieci_i_mlodziez': 'psychologia_kliniczna_dziecka/czym_jest_psychologia_kliniczna_dziecka',
    'psychologia_kliniczna_dziecka/czynniki_ryzyka_i_ochronne': 'psychologia_kliniczna_dziecka/czym_jest_psychologia_kliniczna_dziecka',
    'psychologia_kliniczna_dziecka/diagnoza_roznicowa_neurorozwojowa': 'psychologia_kliniczna_dziecka/czym_jest_psychologia_kliniczna_dziecka',
    'psychologia_kliniczna_dziecka/formulowanie_przypadku_4p': 'psychologia_kliniczna_dziecka/czym_jest_psychologia_kliniczna_dziecka',
    'psychologia_kliniczna_dziecka/interwencje_rodzicielskie_pmt': 'psychologia_kliniczna_dziecka/czym_jest_psychologia_kliniczna_dziecka',
    'psychologia_kliniczna_dziecka/norma_rozwojowa_a_objaw': 'psychologia_kliniczna_dziecka/czym_jest_psychologia_kliniczna_dziecka',
    'psychologia_kliniczna_dziecka/przywiazanie_i_relacje_opiekuncze': 'psychologia_kliniczna_dziecka/czym_jest_psychologia_kliniczna_dziecka',
    'psychologia_kliniczna_dziecka/regulacja_emocji_i_samokontrola': 'psychologia_kliniczna_dziecka/czym_jest_psychologia_kliniczna_dziecka',
    'psychologia_kliniczna_dziecka/wspolpraca_rodzina_szkola_system': 'psychologia_kliniczna_dziecka/czym_jest_psychologia_kliniczna_dziecka',
    'psychologia_kliniczna_dziecka/wywiad_kliniczny_z_dzieckiem_i_rodzina': 'psychologia_kliniczna_dziecka/czym_jest_psychologia_kliniczna_dziecka',
    'psychosomatyka/historia': 'psychosomatyka/historia_psychosomatyki',
    'instytucje_wsparcia_dziecka_i_rodziny/bledy_systemowe_i_dobre_praktyki': 'instytucje_wsparcia_dziecka_i_rodziny/system_wsparcia_dziecka_i_rodziny',
    'instytucje_wsparcia_dziecka_i_rodziny/interwencja_kryzysowa_i_niebieska_karta': 'instytucje_wsparcia_dziecka_i_rodziny/system_wsparcia_dziecka_i_rodziny',
    'instytucje_wsparcia_dziecka_i_rodziny/koordynacja_miedzyinstytucjonalna': 'instytucje_wsparcia_dziecka_i_rodziny/system_wsparcia_dziecka_i_rodziny',
    'instytucje_wsparcia_dziecka_i_rodziny/mapa_systemu_wsparcia': 'instytucje_wsparcia_dziecka_i_rodziny/system_wsparcia_dziecka_i_rodziny',
    'instytucje_wsparcia_dziecka_i_rodziny/ngo_i_programy_srodowiskowe': 'instytucje_wsparcia_dziecka_i_rodziny/system_wsparcia_dziecka_i_rodziny',
    'instytucje_wsparcia_dziecka_i_rodziny/ochrona_zdrowia_psychicznego_dzieci': 'instytucje_wsparcia_dziecka_i_rodziny/system_wsparcia_dziecka_i_rodziny',
    'instytucje_wsparcia_dziecka_i_rodziny/osrodek_pomocy_spolecznej_i_praca_socjalna': 'instytucje_wsparcia_dziecka_i_rodziny/system_wsparcia_dziecka_i_rodziny',
    'instytucje_wsparcia_dziecka_i_rodziny/piecza_zastepcza_i_asysta_rodziny': 'instytucje_wsparcia_dziecka_i_rodziny/system_wsparcia_dziecka_i_rodziny',
    'instytucje_wsparcia_dziecka_i_rodziny/poradnia_psychologiczno_pedagogiczna': 'instytucje_wsparcia_dziecka_i_rodziny/system_wsparcia_dziecka_i_rodziny',
    'instytucje_wsparcia_dziecka_i_rodziny/prawa_dziecka_i_standardy_ochrony': 'instytucje_wsparcia_dziecka_i_rodziny/system_wsparcia_dziecka_i_rodziny',
    'instytucje_wsparcia_dziecka_i_rodziny/sad_rodzinny_i_kurator': 'instytucje_wsparcia_dziecka_i_rodziny/system_wsparcia_dziecka_i_rodziny',
    'instytucje_wsparcia_dziecka_i_rodziny/szkola_jako_instytucja_wsparcia': 'instytucje_wsparcia_dziecka_i_rodziny/system_wsparcia_dziecka_i_rodziny',
    'wstep_do_psychologii/historia': 'wstep_do_psychologii/historia_psychologii',
    'emocje/teorie': 'emocje/teorie_emocji',
    'podstawy_pomocy/empatia_w_pomocy': 'emocje/wspolczucie',
    'podstawy_pomocy/empatia_kontra_sympatia_brene_brown': 'emocje/wspolczucie',
    'suicydologia/teorie': 'suicydologia/modele_suicydologiczne',
    'geropsychologia/adaptacja_do_starosci': 'geropsychologia/wprowadzenie',
    'geropsychologia/jakosc_zycia_starszych': 'geropsychologia/wprowadzenie',
    'geropsychologia/relacje_spoleczne_starszych': 'geropsychologia/wprowadzenie',
    'geropsychologia/aktywnosc_poznawcza': 'geropsychologia/poznanie_i_zdrowie_psychiczne_w_starosci',
    'geropsychologia/starzenie_poznawcze': 'geropsychologia/poznanie_i_zdrowie_psychiczne_w_starosci',
    'geropsychologia/demencja': 'geropsychologia/poznanie_i_zdrowie_psychiczne_w_starosci',
    'geropsychologia/depresja_starszych': 'geropsychologia/poznanie_i_zdrowie_psychiczne_w_starosci',
    'geropsychologia/interwencje_terapeutyczne': 'geropsychologia/pomoc_psychologiczna_i_opieka_w_starosci',
    'geropsychologia/opieka_nad_opiekunami': 'geropsychologia/pomoc_psychologiczna_i_opieka_w_starosci',
    'geropsychologia/umieranie_smierc': 'geropsychologia/pomoc_psychologiczna_i_opieka_w_starosci',
    'geropsychologia/samotnosc': 'relacje/samotnosc',
    'psychofarmakologia/01_rys_historyczny_psychofarmakologii_klinicznej': 'psychofarmakologia/podstawy_psychofarmakologii',
    'psychofarmakologia/02_anatomia_funkcjonalna_mozgu': 'psychofarmakologia/podstawy_psychofarmakologii',
    'psychofarmakologia/03_podstawy_neurochemii_oun': 'psychofarmakologia/podstawy_psychofarmakologii',
    'psychofarmakologia/04_aktualna_nomenklatura_lekow_psychotropowych': 'psychofarmakologia/podstawy_psychofarmakologii',
    'psychofarmakologia/13_badania_kliniczne_lekow_psychotropowych': 'psychofarmakologia/podstawy_psychofarmakologii',
    'psychofarmakologia/14_farmakoterapia_schizofrenii': 'psychofarmakologia/farmakoterapia_psychoz_i_zaburzen_neurokognitywnych',
    'psychofarmakologia/22_farmakoterapia_zespolow_otepiennych': 'psychofarmakologia/farmakoterapia_psychoz_i_zaburzen_neurokognitywnych',
    'psychofarmakologia/15_farmakoterapia_chad': 'psychofarmakologia/farmakoterapia_nastroju_leku_i_stresu',
    'psychofarmakologia/16_farmakoterapia_depresji': 'psychofarmakologia/farmakoterapia_nastroju_leku_i_stresu',
    'psychofarmakologia/18_farmakoterapia_ocd': 'psychofarmakologia/farmakoterapia_nastroju_leku_i_stresu',
    'psychofarmakologia/19_farmakoterapia_zespolow_lekowych': 'psychofarmakologia/farmakoterapia_nastroju_leku_i_stresu',
    'psychofarmakologia/20_farmakoterapia_zespolow_stresowych': 'psychofarmakologia/farmakoterapia_nastroju_leku_i_stresu',
    'psychofarmakologia/17_farmakoterapia_asd': 'psychofarmakologia/farmakoterapia_neurorozwojowa_i_objawowa',
    'psychofarmakologia/21_farmakoterapia_adhd_dzieci_dorosli': 'psychofarmakologia/farmakoterapia_neurorozwojowa_i_objawowa',
    'psychofarmakologia/26_farmakoterapia_zaburzen_odzywiania': 'psychofarmakologia/farmakoterapia_neurorozwojowa_i_objawowa',
    'psychofarmakologia/27_farmakologiczne_leczenie_zaburzen_seksualnych': 'psychofarmakologia/farmakoterapia_neurorozwojowa_i_objawowa',
    'psychofarmakologia/28_farmakoterapia_zaburzen_snu': 'psychofarmakologia/farmakoterapia_neurorozwojowa_i_objawowa',
    'psychofarmakologia/29_farmakologiczne_proby_leczenia_zaburzen_osobowosci': 'psychofarmakologia/farmakoterapia_neurorozwojowa_i_objawowa',
    'psychofarmakologia/23_farmakoterapia_uzaleznienia_od_alkoholu': 'psychofarmakologia/11_leki_w_terapii_uzaleznien',
    'psychofarmakologia/24_farmakoterapia_uzaleznien_inne_substancje': 'psychofarmakologia/11_leki_w_terapii_uzaleznien',
    'psychofarmakologia/30_farmakogenetyka_lekow_psychotropowych': 'psychofarmakologia/bezpieczenstwo_i_personalizacja_farmakoterapii',
    'psychofarmakologia/31_psychofarmakoterapia_wieku_dziecieco_mlodziezowego': 'psychofarmakologia/bezpieczenstwo_i_personalizacja_farmakoterapii',
    'psychofarmakologia/32_psychofarmakoterapia_wieku_podeszlego': 'psychofarmakologia/bezpieczenstwo_i_personalizacja_farmakoterapii',
    'psychofarmakologia/33_psychofarmakoterapia_ciazy_i_okresu_okoloporodowego': 'psychofarmakologia/bezpieczenstwo_i_personalizacja_farmakoterapii',
    'psychofarmakologia/34_leczenie_zaburzen_psychicznych_w_chorobach_somatycznych': 'psychofarmakologia/bezpieczenstwo_i_personalizacja_farmakoterapii',
    'psychofarmakologia/35_leczenie_skojarzone_lekami_psychotropowymi': 'psychofarmakologia/bezpieczenstwo_i_personalizacja_farmakoterapii',
    'psychofarmakologia/36_psychofarmakoterapia_zgodna_z_zaleceniami': 'psychofarmakologia/bezpieczenstwo_i_personalizacja_farmakoterapii',
    'psychofarmakologia/37_farmakologiczne_aspekty_terapii_elektrowstrzasowej': 'psychofarmakologia/bezpieczenstwo_i_personalizacja_farmakoterapii',
    'psychofarmakologia/09_leki_anksjolityczne_i_nasenne': 'psychofarmakologia/klasy_lekow_psychotropowych',
    'farmakologia/anxiolityki': 'psychofarmakologia/klasy_lekow_psychotropowych',
    'farmakologia/nootropiki': 'psychofarmakologia/klasy_lekow_psychotropowych',
    'farmakologia/przeciwdepresyjne': 'psychofarmakologia/klasy_lekow_psychotropowych',
    'farmakologia/przeciwpsychotyczne': 'psychofarmakologia/klasy_lekow_psychotropowych',
    'farmakologia/stabilizatory': 'psychofarmakologia/klasy_lekow_psychotropowych',
    'farmakologia/uzaleznienia_farm': 'psychofarmakologia/11_leki_w_terapii_uzaleznien',
    'zaburzenia/adhd': 'neuroroznorodnosc/adhd',
    'psychologia_zdrowia/model_biopsychospoleczny': 'psychologia_zdrowia/zdrowie_wprowadzenie',
    'psychologia_zdrowia/psychoneuroimmunologia': 'psychologia_zdrowia/zdrowie_wprowadzenie',
    'psychologia_zdrowia/styl_zycia': 'psychologia_zdrowia/zachowania_zdrowotne',
    'psychologia_zdrowia/aktywnosc_fizyczna': 'psychologia_zdrowia/zachowania_zdrowotne',
    'psychologia_zdrowia/dieta_zdrowie': 'psychologia_zdrowia/zachowania_zdrowotne',
    'psychologia_zdrowia/sen_zdrowie': 'psychologia_zdrowia/zachowania_zdrowotne',
    'psychologia_zdrowia/promocja_zdrowia': 'psychologia_zdrowia/zachowania_zdrowotne',
    'psychologia_zdrowia/radzenie_sobie': 'psychologia_zdrowia/stres',
    'psychologia_zdrowia/rehabilitacja': 'psychologia_zdrowia/choroby_przewlekle',
    'psychologia_zdrowia/jakosc_zycia': 'psychologia_zdrowia/choroby_przewlekle',
    'psychologia_zdrowia/adherencja': 'psychologia_zdrowia/choroby_przewlekle',
    'psychologia_zdrowia/bol_chroniczny': 'psychologia_zdrowia/bol',
    'psychologia_zdrowia/komunikacja_medyczna': 'psychologia_zdrowia/interwencje_zdrowotne',
    'psychologia_zdrowia/placebo': 'psychologia_zdrowia/interwencje_zdrowotne',
    'psychologia_zdrowia/psychoonkologia': 'psychologia_zdrowia/interwencje_zdrowotne',
    'psychologia_zdrowia/choroby_ukladu_krazenia': 'psychologia_zdrowia/interwencje_zdrowotne',
    'psychologia_zdrowia/cukrzyca': 'psychologia_zdrowia/interwencje_zdrowotne',
    'psychologia_zdrowia/wsparcie_spoleczne': 'podstawy_pomocy/wsparcie_spoleczne',
    'psychologia_zdrowia/wypalenie_zawodowe': 'rezyliencja_i_mobbing/wypalenie_zawodowe',
    'psychosomatyka/aleksytymia': 'emocje/aleksytymia',
    'zaburzenia/asd': 'neuroroznorodnosc/spektrum_autyzmu',
    'seminarium_dyplomowe/etyka_badan': 'etyka/etyka_badan',
    'reference/etyka_psychologa': 'etyka/kodeksy_etyczne',
    'diagnoza/tajemnica_zawodowa': 'etyka/tajemnica_zawodowa_granice',
    'psychologia_szkolna/ocenianie_i_feedback': 'psychologia_szkolna/ocenianie_i_informacja_zwrotna',
    'psychologia_szkolna/wprowadzenie': 'psychologia_szkolna/klimat_szkolny',
    'psychologia_szkolna/neurodydaktyka': 'psychologia_szkolna/teorie_uczenia_sie',
    'psychologia_szkolna/strefa_najblizszego_rozwoju': 'psychologia_szkolna/teorie_uczenia_sie',
    'psychologia_szkolna/motywacja_szkolna': 'psychologia_szkolna/teorie_uczenia_sie',
    'psychologia_szkolna/inteligencja_wieloraka': 'psychologia_szkolna/teorie_uczenia_sie',
    'psychologia_szkolna/adhd_w_szkole': 'psychologia_szkolna/trudnosci_w_uczeniu_sie',
    'psychologia_szkolna/relacje_nauczyciel_uczen': 'psychologia_szkolna/ocenianie_i_informacja_zwrotna',
    'psychologia_szkolna/bullying': 'psychologia_szkolna/klimat_szkolny',
    'psychologia_szkolna/stres_szkolny': 'psychologia_szkolna/klimat_szkolny',
    'psychologia_szkolna/interwencje_szkolne': 'psychologia_szkolna/trudnosci_w_uczeniu_sie',
    'systemy_rodzinne/internal_family_systems_ifs': 'systemy_rodzinne/terapia_systemow_wewnetrznej_rodziny_ifs',
    'systemy_rodzinne/cykl_zycia_rodziny': 'systemy_rodzinne/wprowadzenie_do_terapii_systemowej',
    'systemy_rodzinne/genogram_i_przekaz_miedzygeneracyjny': 'systemy_rodzinne/wprowadzenie_do_terapii_systemowej',
    'systemy_rodzinne/granice_subsystemow': 'systemy_rodzinne/wprowadzenie_do_terapii_systemowej',
    'systemy_rodzinne/koalicje_i_trojkaty': 'systemy_rodzinne/wprowadzenie_do_terapii_systemowej',
    'systemy_rodzinne/lojalnosci_rodzinne': 'systemy_rodzinne/wprowadzenie_do_terapii_systemowej',
    'systemy_rodzinne/role_w_systemie_rodzinnym': 'systemy_rodzinne/wprowadzenie_do_terapii_systemowej',
    'systemy_rodzinne/model_bowena': 'systemy_rodzinne/wprowadzenie_do_terapii_systemowej',
    'systemy_rodzinne/terapia_strukturalna_minuchin': 'systemy_rodzinne/terapie_systemowe_i_rodzinne',
    'systemy_rodzinne/terapia_narracyjna': 'systemy_rodzinne/terapie_systemowe_i_rodzinne',
    'systemy_rodzinne/zastosowania_kliniczne': 'systemy_rodzinne/terapie_systemowe_i_rodzinne',
    'systemy_rodzinne/rodzina_z_uzaleznieniem': 'systemy_rodzinne/terapie_systemowe_i_rodzinne',
    'systemy_rodzinne/trauma_relacyjna_i_system': 'systemy_rodzinne/terapie_systemowe_i_rodzinne',
    'wstep_do_psychologii/etyka_badan_psychologicznych': 'etyka/etyka_badan',
    'biology/biologiczne_podstawy': 'biologia/biologiczne_podstawy',
    'biology/chronobiologia': 'biologia/chronobiologia',
    'biology/chronopsychologia': 'biologia/chronopsychologia',
    'biology/epigenetyka': 'biologia/epigenetyka',
    'biology/ewolucja': 'biologia/ewolucja',
    'biology/genetyka_beh': 'biologia/genetyka_beh',
    'biology/hormony': 'biologia/hormony',
    'biology/mikrobiom': 'biologia/mikrobiom',
    'biology/psychofizjologia': 'biologia/psychofizjologia',
    'biology/transmisja_genetyczna_zaburzen': 'biologia/transmisja_genetyczna_zaburzen_psychicznych',
    'neuro/agregaty_neuronalne': 'neuropsychologia/podstawy_neurologii',
    'neuro/anatomia': 'neuropsychologia/anatomia',
    'neuro/cykl_miesiaczkowy': 'neuropsychologia/plastycznosc',
    'neuro/eye_tracking': 'neuropsychologia/neuronauka_poznawcza',
    'neuro/kora_prefrontalna': 'neuropsychologia/anatomia',
    'neuro/lateralizacja': 'neuropsychologia/anatomia',
    'neuro/muse': 'neuropsychologia/neuronauka_poznawcza',
    'neuro/myelinizacja': 'neuropsychologia/podstawy_neurologii',
    'neuro/neuron': 'neuropsychologia/podstawy_neurologii',
    'neuro/neuronauka_poznawcza': 'neuropsychologia/neuronauka_poznawcza',
    'neuro/neuroobrazowanie': 'neuropsychologia/neuronauka_poznawcza',
    'neuro/pien_mozgu': 'neuropsychologia/anatomia',
    'neuro/plastycznosc': 'neuropsychologia/plastycznosc',
    'neuro/podstawy_neurologii': 'neuropsychologia/podstawy_neurologii',
    'neuro/przesilenie_wiosenne': 'neuropsychologia/plastycznosc',
    'neuro/rehabilitacja_neuropsychologiczna': 'neuropsychologia/rehabilitacja_neuropsychologiczna',
    'neuro/systemy': 'neuropsychologia/anatomia',
    'neuro/uklad_limbiczny': 'neuropsychologia/anatomia',
    'neuro/zachowanie_i_dwie_polkule_mozgu': 'neuropsychologia/anatomia',
    'poznawcza/architektury_kognitywne': 'psychologia_poznawcza/nauki_kognitywne',
    'poznawcza/efekt_ramowania': 'psychologia_poznawcza/myslenie',
    'poznawcza/eksperyment_posnera': 'psychologia_poznawcza/percepcja',
    'poznawcza/exploration_exploitation_dilemma': 'psychologia_poznawcza/myslenie',
    'poznawcza/funkcje_wykonawcze': 'psychologia_poznawcza/funkcje_wykonawcze',
    'poznawcza/hda': 'psychologia_poznawcza/funkcje_wykonawcze',
    'poznawcza/iluzje': 'psychologia_poznawcza/percepcja',
    'poznawcza/jezyk': 'psychologia_poznawcza/jezyk',
    'poznawcza/maly_albert': 'psychologia_poznawcza/pamiec',
    'poznawcza/myslenie': 'psychologia_poznawcza/myslenie',
    'poznawcza/narracje_i_psychika': 'psychologia_poznawcza/jezyk',
    'poznawcza/nasa_tlx': 'psychologia_poznawcza/funkcje_wykonawcze',
    'poznawcza/nauki_kognitywne': 'psychologia_poznawcza/nauki_kognitywne',
    'poznawcza/pamiec': 'psychologia_poznawcza/pamiec',
    'poznawcza/pamiec_dlugotrwala': 'psychologia_poznawcza/pamiec',
    'poznawcza/percepcja': 'psychologia_poznawcza/percepcja',
    'poznawcza/podejmowanie_decyzji': 'psychologia_poznawcza/myslenie',
    'poznawcza/przetwarzanie_predyktywne': 'psychologia_poznawcza/swiadomosc',
    'poznawcza/przyklad_testu_stroopa': 'psychologia_poznawcza/percepcja',
    'poznawcza/swiadomosc': 'psychologia_poznawcza/swiadomosc',
    'poznawcza/system1_system2': 'psychologia_poznawcza/myslenie',
    'poznawcza/teoria_perspektywy': 'psychologia_poznawcza/myslenie',
    'poznawcza/test_stroopa': 'psychologia_poznawcza/funkcje_wykonawcze',
    'poznawcza/ucielesnienie': 'psychologia_poznawcza/swiadomosc',
    'poznawcza/uczenie': 'psychologia_poznawcza/pamiec',
    'poznawcza/uklad_siatkowaty': 'psychologia_poznawcza/percepcja',
    'poznawcza/uwaga': 'psychologia_poznawcza/percepcja',
    'poznawcza/uwaga_mimowolna': 'psychologia_poznawcza/percepcja',
    'poznawcza/wyobraznia': 'psychologia_poznawcza/jezyk',
    'poznawcza/zmeczenie_poznawcze': 'psychologia_poznawcza/funkcje_wykonawcze',
    'rozwojowa/adolescencja': 'psychologia_rozwojowa/adolescencja',
    'rozwojowa/doroslosc': 'psychologia_rozwojowa/doroslosc',
    'rozwojowa/metody_podluzne': 'psychologia_rozwojowa/metody_podluzne',
    'rozwojowa/niemowlectwo': 'psychologia_rozwojowa/niemowlectwo',
    'rozwojowa/plastycznosc_mozgu': 'psychologia_rozwojowa/plastycznosc_mozgu',
    'rozwojowa/przywiazanie': 'psychologia_rozwojowa/przywiazanie',
    'rozwojowa/rodzicielstwo': 'psychologia_rozwojowa/rodzicielstwo',
    'rozwojowa/rozwoj_jezyka': 'psychologia_rozwojowa/rozwoj_jezyka',
    'rozwojowa/teorie_rozwoju': 'psychologia_rozwojowa/teorie_rozwoju',
    'rozwojowa/tozsamosc': 'psychologia_rozwojowa/tozsamosc',
    'rozwojowa/trauma_rozwojowa': 'psychologia_rozwojowa/trauma_rozwojowa',
    'rozwojowa/wiek_szkolny': 'psychologia_rozwojowa/wiek_szkolny',
    'spoleczna/agresja': 'psychologia_spoleczna/agresja_uprzedzenia_i_przemoc_spoleczna',
    'spoleczna/atrakcyjnosc': 'psychologia_spoleczna/grupy_relacje_i_wspolpraca',
    'spoleczna/dynamika_grupowa': 'psychologia_spoleczna/grupy_relacje_i_wspolpraca',
    'spoleczna/eksperyment_wiezienny': 'psychologia_spoleczna/wplyw_spoleczny_perswazja_i_posluszenstwo',
    'spoleczna/hejt_w_sieci': 'psychologia_spoleczna/agresja_uprzedzenia_i_przemoc_spoleczna',
    'spoleczna/ja_i_samoocena': 'psychologia_spoleczna/ja_i_samoocena',
    'spoleczna/konformizm': 'psychologia_spoleczna/wplyw_spoleczny_perswazja_i_posluszenstwo',
    'spoleczna/manipulacja': 'psychologia_spoleczna/wplyw_spoleczny_perswazja_i_posluszenstwo',
    'spoleczna/manosfera_feminizm': 'psychologia_spoleczna/agresja_uprzedzenia_i_przemoc_spoleczna',
    'spoleczna/percepcja_spoleczna': 'psychologia_spoleczna/percepcja_spoleczna',
    'spoleczna/perswazja': 'psychologia_spoleczna/wplyw_spoleczny_perswazja_i_posluszenstwo',
    'spoleczna/postawy': 'psychologia_spoleczna/percepcja_spoleczna',
    'spoleczna/stereotypy': 'psychologia_spoleczna/percepcja_spoleczna',
    'spoleczna/zachowania_prospoleczne': 'psychologia_spoleczna/grupy_relacje_i_wspolpraca',
  },

  // Sekcje pomijane przy budowie katalogu dziedzin na stronie glownej.
  catalogExcludedSections: ['Encyklopedie', 'Referencje', 'Wprowadzenie', 'Dla studentów'],



  // 
  //  NARZĘDZIA POMIAROWE WG DZIEDZIN
  //  Struktura sluzy do katalogowania testow/skal/kwestionariuszy i ma byc
  //  aktualizowana wylacznie przez dopisywanie nowych obiektow zgodnych ze
  //  slownikiem wartosci kontrolowanych ponizej.
  //  Zasady aktualizacji:
  //  1) Kazdy wpis narzedzia musi zawierac kompletny minimalny schemat pol,
  //     w tym: reliability, validity, normsInfo, limitations, ethicalNotes,
  //     contraindications, requiresPermissions, methodologyLinks oraz pola
  //     metodologiczne: evidenceType, sampleInfo, normCountry, normYear,
  //     effectSizeInfo, sourceRefs.
  //  2) Wartosci pol type/evidenceLevel/license/evidenceType musza pochodzic
  //     ze slownika.
  //  3) Dla domen bez opracowanych wpisow uzywamy listy TODO w `docs/todo.md` oraz listy todoDomains.
  //  4) Pole primarySourceYear zapisujemy jako rok (YYYY) pierwszej publikacji
  //     wersji bazowej narzedzia; jesli w projekcie narzedzie jest definiowane
  //     przez oficjalna rewizje (np. ADOS-2, DIVA-5), wpisujemy rok tej rewizji.
  // 

  // Katalog narzedzi ladowany z plikow JSON (1 narzedzie = 1 plik),
  // zorganizowanych w folderze `narzedzia_psychometryczne`.
  measurementToolsByDomain: {
    diagnostyczne: [],
    psychometryczne: [],
    zaburzenia: [],
    neuropsychologiczne: [],
    spoleczne: [],
  },
  // Źródło plikowe katalogu narzędzi.
  measurementToolsDataPath: 'data/narzedzia_psychometryczne/',
  measurementToolsControlledVocabulary: {
    type: ['test', 'kwestionariusz', 'skala', 'protokol', 'obserwacja'],
    evidenceLevel: ['wysoki', 'umiarkowany', 'wstepny', 'niewystarczajacy'],
    license: ['komercyjna', 'otwarta', 'instytucjonalna', 'do_ustalenia'],
    evidenceType: ['meta_analiza', 'rct', 'walidacja_lokalna', 'przeglad'],
    normCountry: ['PL', 'USA', 'UK', 'EU', 'miedzynarodowe', 'brak_danych'],
    effectSizeInfo: ['male', 'umiarkowane', 'duze', 'mieszane', 'nie_dotyczy', 'brak_danych'],
  },

  // Data ostatniej aktualizacji katalogu narzedzi per domena (ISO YYYY-MM-DD).
  // Pole updatedAt jest uzywane przez UI do komunikatu "Ostatnia aktualizacja".
  measurementToolsDomainUpdates: {
    diagnostyczne: { updatedAt: '2026-05-15' },
    psychometryczne: { updatedAt: '2026-05-15' },
    zaburzenia: { updatedAt: '2026-04-15' },
    neuropsychologiczne: { updatedAt: '2026-04-15' },
    spoleczne: { updatedAt: '2026-04-15' },
  },

  // Domeny obecne w serwisie, dla ktorych wpisy narzedzi pomiarowych sa jeszcze nieuzupelnione.
  measurementToolsTodoDomains: [
    'robotyka_afektywna', 'psychologia_ai', 'animaloterapia', 'arteterapia', 'biologia', 'przypadki_kliniczne',
    'psychologia_poznawcza', 'diagnoza', 'psychologia_niepelnosprawnosci', 'e_terapia', 'eksperyment_psychologiczny',
    'emocje', 'etyka', 'psychologia_sadowa', 'psychologia_gier', 'geropsychologia', 'psychologia_zdrowia',
    'roznice_indywidualne', 'wstep_do_psychologii', 'kulturowa', 'ekrany_ksiazki_i_natura', 'neuroroznorodnosc',
    'porozumiewanie_sie_bez_przemocy', 'farmakologia', 'filozofia', 'podstawy_pomocy', 'psychologia_religii',
    'psychologia_pozytywna', 'seminarium_dyplomowe', 'psychopatologia', 'psychosomatyka', 'psychoterapia',
    'reference', 'relacje', 'rezyliencja_i_mobbing', 'psychologia_rozwojowa', 'psychologia_szkolna', 'seksuologia',
    'dla_studentow', 'suicydologia', 'psychologia_technologii', 'temperament', 'uzaleznienia', 'wiki-index'
  ],

  //
  //  NAWIGACJA BOCZNA
  //  Kazda sekcja to zwijany blok w sidebarze.
  //  Klucz "file" -> ladowanie MD; "wiki" -> strona indeksu WIKI.
  //
  nav: [
    {
      section: 'Wprowadzenie',
      domainKey: 'wstep_do_psychologii',
      items: [
        { id: 'wstep_do_psychologii/definicja', label: 'Definicja i zakres',  file: 'wiki/wstep_do_psychologii/definicja.md' },
        { id: 'wstep_do_psychologii/historia_psychologii',  label: 'Historia psychologii', file: 'wiki/wstep_do_psychologii/historia_psychologii.md'  },
        { id: 'wstep_do_psychologii/nurty_psychologii', label: 'Główne nurty psychologii', file: 'wiki/wstep_do_psychologii/nurty_psychologii.md'  },
      ]
    },
    {
      section: 'Dla studentów',
      domainKey: 'dla_studentow',
      items: [
        { id: 'dla_studentow/etyka_studenta',     label: 'Etyka studenta psychologii', file: 'wiki/dla_studentow/etyka_studenta.md' },
        { id: 'dla_studentow/wybor_specjalnosci', label: 'Wybór specjalności', file: 'wiki/dla_studentow/wybor_specjalnosci.md' },
        { id: 'dla_studentow/sciezki_kariery', label: 'Ścieżki kariery po psychologii', file: 'wiki/dla_studentow/sciezki_kariery.md' },
        { id: 'dla_studentow/psychologia_codziennej', label: 'Psychologia codzienna',    custom: 'daily_psychology' },
        /**{ id: 'dla_studentow/monopoly_psychologiczne', href: 'https://matpomgit.github.io/Psychopoly/', label: 'Monopoly Psychologiczne' },*/
        { id: 'dla_studentow/wspolna_gra_kahoot',    label: 'Wspólna gra testowa (Kahoot)', custom: 'kahoot_game', kind: 'test' },
        { id: 'dla_studentow/test_specjalnosci',  label: 'Test wyboru specjalności', custom: 'specialization_test', kind: 'test' },
        { id: 'dla_studentow/testy_teoretyczne',      label: 'Testy teoretyczne',         custom: 'theoretical_test', kind: 'test' },
        { id: 'dla_studentow/winietki_kliniczne',     label: 'Winietki kliniczne',        custom: 'theoretical_test', presetTopic: 'winiety_kliniczne', kind: 'test' },
        { id: 'dla_studentow/testy_dyplomowe',        label: 'Testy dyplomowe',           custom: 'theoretical_test', presetTopic: 'egzamin_dyplomowy', kind: 'test' },
        ]
    },
    { /** Filozofia */
      section: 'Filozofia',
      domainKey: 'filozofia',
      items: [
        { id: 'filozofia/wprowadzenie',                 label: 'Filozofia',                                  file: 'wiki/filozofia/wprowadzenie.md'        },
        { id: 'filozofia/ontologia',                    label: 'Ontologia i metafizyka',                     file: 'wiki/filozofia/ontologia.md'           },
        { id: 'filozofia/epistemologia',                label: 'Epistemologia i teoria poznania',            file: 'wiki/filozofia/epistemologia.md'       },
        { id: 'filozofia/egocentryczny_dylemat',        label: 'Egocentryczny dylemat poznania',             file: 'wiki/filozofia/egocentryczny_dylemat.md' },
        { id: 'filozofia/odpowiedzialnosc_epistemiczna',label: 'Odpowiedzialność epistemiczna',              file: 'wiki/filozofia/odpowiedzialnosc_epistemiczna.md' },
        { id: 'filozofia/etyka',                        label: 'Etyka i filozofia moralna',                  file: 'wiki/filozofia/etyka.md'               },
        { id: 'filozofia/filozofia_umyslu',             label: 'Filozofia umyslu',                           file: 'wiki/filozofia/filozofia_umyslu.md'    },
        { id: 'filozofia/filozofia_nauki',              label: 'Filozofia nauki',                            file: 'wiki/filozofia/filozofia_nauki.md'     },
        { id: 'filozofia/egzystencjalizm',              label: 'Egzystencjalizm',                            file: 'wiki/filozofia/egzystencjalizm.md'     },
        { id: 'filozofia/fenomenologia',                label: 'Fenomenologia',                              file: 'wiki/filozofia/fenomenologia.md'       },
        { id: 'filozofia/hermeneutyka',                 label: 'Hermeneutyka i interpretacja',               file: 'wiki/filozofia/hermeneutyka.md'        },
        { id: 'filozofia/logika',                       label: 'Logika i argumentacja',                      file: 'wiki/filozofia/logika.md'              },
        { id: 'filozofia/filozofia_jezyka',             label: 'Filozofia jezyka',                           file: 'wiki/filozofia/filozofia_jezyka.md'    },
        { id: 'filozofia/filozofia_czlowieka',          label: 'Filozofia człowieka',                        file: 'wiki/filozofia/filozofia_czlowieka.md'         },
        { id: 'filozofia/cien_antropiczny',             label: 'Cień antropiczny',                           file: 'wiki/filozofia/cien_antropiczny.md'            },
        { id: 'filozofia/mozg_boltzmanna',              label: 'Mozg Boltzmanna',                            file: 'wiki/filozofia/mozg_boltzmanna.md'             },
        { id: 'filozofia/horror_panpsychizmu',          label: 'Horror panpsychizmu',                        file: 'wiki/filozofia/horror_panpsychizmu.md'         },
        { id: 'filozofia/filozoficzne_zombie',          label: 'Filozoficzne zombie',                        file: 'wiki/filozofia/filozoficzne_zombie.md'         },
        { id: 'filozofia/pusty_indywidualizm',          label: 'Pusty indywidualizm',                        file: 'wiki/filozofia/pusty_indywidualizm.md'         },
        { id: 'filozofia/asymetria_dobra_i_bolu',       label: 'Asymetria dobra i bolu',                     file: 'wiki/filozofia/asymetria_dobra_i_bolu.md'      },
        { id: 'filozofia/niemoralnosc_braku_zgody',     label: 'Niemoralność braku zgody na narodziny',      file: 'wiki/filozofia/niemoralnosc_braku_zgody.md'    },
        { id: 'filozofia/redukcjonizm_tozsamosci',      label: 'Redukcjonizm tozsamosci osobowej',           file: 'wiki/filozofia/redukcjonizm_tozsamosci.md'     },
        { id: 'filozofia/eliminatywizm_materialny',     label: 'Eliminatywizm materialny',                   file: 'wiki/filozofia/eliminatywizm_materialny.md'    },
        { id: 'filozofia/efilizm',                      label: 'Efilizm',                                    file: 'wiki/filozofia/efilizm.md'                     },
        { id: 'filozofia/pesymizm_biologiczny',         label: 'Pesymizm biologiczny',                       file: 'wiki/filozofia/pesymizm_biologiczny.md'        },
        { id: 'filozofia/podswiadomy_nihilizm',         label: 'Podswiadomy nihilizm',                       file: 'wiki/filozofia/podswiadomy_nihilizm.md'        },
        { id: 'filozofia/paradoksalny_determinizm',     label: 'Paradoksalny determinizm',                   file: 'wiki/filozofia/paradoksalny_determinizm.md'    },
        { id: 'filozofia/realizm_modalny',              label: 'Realizm modalny',                            file: 'wiki/filozofia/realizm_modalny.md'             },
      ]
    },
    { /* Biologiczne podstawy zachowania */
      section: 'Biologiczne podstawy zachowania',
      domainKey: 'biology',
      items: [
        { id: 'biologia/biologiczne_podstawy', label: 'Biologiczne podstawy - wprow.',  file: 'wiki/biologia/biologiczne_podstawy.md'  },
        { id: 'biologia/genetyka_beh',         label: 'Genetyka behawioralna',          file: 'wiki/biologia/genetyka_beh.md'          },
        { id: 'biologia/transmisja_genetyczna_zaburzen_psychicznych', label: 'Transmisja genetyczna zaburzen', file: 'wiki/biologia/transmisja_genetyczna_zaburzen_psychicznych.md' },
        { id: 'biologia/epigenetyka',          label: 'Epigenetyka',                    file: 'wiki/biologia/epigenetyka.md'           },
        { id: 'biologia/hormony',              label: 'Hormony i zachowanie',           file: 'wiki/biologia/hormony.md'               },
        { id: 'biologia/ewolucja',             label: 'Ewolucja i psychologia ewol.',   file: 'wiki/biologia/ewolucja.md'              },
        { id: 'biologia/psychofizjologia',     label: 'Psychofizjologia',               file: 'wiki/biologia/psychofizjologia.md'      },
        { id: 'biologia/chronobiologia',       label: 'Chronobiologia i sen',           file: 'wiki/biologia/chronobiologia.md'        },
        { id: 'biologia/chronopsychologia',    label: 'Chronopsychologia',              file: 'wiki/biologia/chronopsychologia.md'     },
        { id: 'biologia/mikrobiom',            label: 'Oś jelita-mózg',               file: 'wiki/biologia/mikrobiom.md'             },
      ]
    },
    { /* Psychologia rozwojowa */
      section: 'Psychologia rozwojowa',
      domainKey: 'rozwojowa',
      items: [
        { id: 'psychologia_rozwojowa/teorie_rozwoju',     label: 'Glowne teorie rozwoju',                    file: 'wiki/psychologia_rozwojowa/teorie_rozwoju.md'     },
        { id: 'psychologia_rozwojowa/metody_podluzne',    label: 'Metody badań podłużnych',                  file: 'wiki/psychologia_rozwojowa/metody_podluzne.md'    },
        { id: 'psychologia_rozwojowa/niemowlectwo',       label: 'Niemowlęctwo i wczesne dzieciństwo',       file: 'wiki/psychologia_rozwojowa/niemowlectwo.md'       },
        { id: 'psychologia_rozwojowa/wiek_szkolny',       label: 'Wiek szkolny',                             file: 'wiki/psychologia_rozwojowa/wiek_szkolny.md'       },
        { id: 'psychologia_rozwojowa/adolescencja',       label: 'Adolescencja',                             file: 'wiki/psychologia_rozwojowa/adolescencja.md'       },
        { id: 'psychologia_rozwojowa/doroslosc',          label: 'Dorosłość i starzenie się',                file: 'wiki/psychologia_rozwojowa/doroslosc.md'          },
        { id: 'psychologia_rozwojowa/plastycznosc_mozgu', label: 'Plastycznosc mózgu, a okresy krytyczne',   file: 'wiki/psychologia_rozwojowa/plastycznosc_mozgu.md' },
        { id: 'psychologia_rozwojowa/przywiazanie',       label: 'Teoria przywiazania',                      file: 'wiki/psychologia_rozwojowa/przywiazanie.md'       },
        { id: 'psychologia_rozwojowa/rozwoj_jezyka',      label: 'Rozwoj jezyka i komunikacji',              file: 'wiki/psychologia_rozwojowa/rozwoj_jezyka.md'      },
        { id: 'psychologia_rozwojowa/rodzicielstwo',      label: 'Style rodzicielskie',                      file: 'wiki/psychologia_rozwojowa/rodzicielstwo.md'      },
        { id: 'psychologia_rozwojowa/trauma_rozwojowa',   label: 'Trauma rozwojowa',                         file: 'wiki/psychologia_rozwojowa/trauma_rozwojowa.md'   },
        { id: 'psychologia_rozwojowa/tozsamosc',          label: 'Ksztaltowanie tozsamosci',                 file: 'wiki/psychologia_rozwojowa/tozsamosc.md'          },
      ]
    },
    { /* Psychologia społeczna */
      section: 'Psychologia społeczna',
      domainKey: 'spoleczna',
      items: [
        { id: 'psychologia_spoleczna/ja_i_samoocena', label: 'Ja, samoocena i tożsamość społeczna', file: 'wiki/psychologia_spoleczna/ja_i_samoocena.md' },
        { id: 'psychologia_spoleczna/percepcja_spoleczna', label: 'Percepcja społeczna, postawy i atrybucje', file: 'wiki/psychologia_spoleczna/percepcja_spoleczna.md' },
        { id: 'psychologia_spoleczna/wplyw_spoleczny_perswazja_i_posluszenstwo', label: 'Wpływ społeczny, perswazja i posłuszeństwo', file: 'wiki/psychologia_spoleczna/wplyw_spoleczny_perswazja_i_posluszenstwo.md' },
        { id: 'psychologia_spoleczna/grupy_relacje_i_wspolpraca', label: 'Grupy, relacje i współpraca', file: 'wiki/psychologia_spoleczna/grupy_relacje_i_wspolpraca.md' },
        { id: 'psychologia_spoleczna/agresja_uprzedzenia_i_przemoc_spoleczna', label: 'Agresja, uprzedzenia i przemoc społeczna', file: 'wiki/psychologia_spoleczna/agresja_uprzedzenia_i_przemoc_spoleczna.md' },
      ]
    },
    { /* Psychologia kulturowa */
      section: 'Psychologia kulturowa',
      domainKey: 'kulturowa',
      items: [
        { id: 'kulturowa/wprowadzenie', label: 'Podstawy i metodologia psychologii kulturowej', file: 'wiki/kulturowa/wprowadzenie.md' },
        { id: 'kulturowa/kultura_a_procesy_psychiczne', label: 'Kultura a poznanie, emocje i Ja', file: 'wiki/kulturowa/kultura_a_procesy_psychiczne.md' },
        { id: 'kulturowa/akulturacja_relacje_i_zdrowie', label: 'Akulturacja, relacje i zdrowie', file: 'wiki/kulturowa/akulturacja_relacje_i_zdrowie.md' },
      ]
    },
    { /* Psychologia religii */
      section: 'Psychologia religii',
      domainKey: 'psychologia_religii',
      items: [
        { id: 'psychologia_religii/religijnosc_i_duchowosc', label: 'Religijność, duchowość i rozwój', file: 'wiki/psychologia_religii/religijnosc_i_duchowosc.md' },
        { id: 'psychologia_religii/religia_a_zdrowie_psychiczne', label: 'Religia, zdrowie psychiczne i radzenie sobie', file: 'wiki/psychologia_religii/religia_a_zdrowie_psychiczne.md' },
        { id: 'psychologia_religii/doswiadczenia_religijne_w_praktyce_klinicznej', label: 'Doświadczenia religijne w praktyce klinicznej', file: 'wiki/psychologia_religii/doswiadczenia_religijne_w_praktyce_klinicznej.md' },
        { id: 'psychologia_religii/metodologia_badan', label: 'Metodologia badań nad religią i moralnością', file: 'wiki/psychologia_religii/metodologia_badan.md' },
        ]
    },
    { /* Psychologia uzaleznien */
      section: 'Psychologia uzaleznien',
      domainKey: 'uzaleznienia',
      items: [
        { id: 'uzaleznienia/kryteria_diagnostyczne', label: 'Kryteria diagnostyczne', file: 'wiki/uzaleznienia/kryteria_diagnostyczne.md' },
        { id: 'uzaleznienia/dialog_motywujacy', label: 'Dialog motywujacy', file: 'wiki/uzaleznienia/dialog_motywujacy.md' },
        { id: 'uzaleznienia/zapobieganie_nawrotom', label: 'Zapobieganie nawrotom', file: 'wiki/uzaleznienia/zapobieganie_nawrotom.md' },
        { id: 'uzaleznienia/uzaleznienia_mlodziezy', label: 'Uzależnienia u młodzieży', file: 'wiki/uzaleznienia/uzaleznienia_mlodziezy.md' },
        { id: 'uzaleznienia/wspoluzaleznienie', label: 'Wspoluzaleznienie', file: 'wiki/uzaleznienia/wspoluzaleznienie.md' },
        { id: 'uzaleznienia/profilaktyka', label: 'Profilaktyka uzależnień', file: 'wiki/uzaleznienia/profilaktyka.md' },
        { id: 'uzaleznienia/uzaleznienia_behawioralne', label: 'Uzaleznienia behawioralne',              file: 'wiki/uzaleznienia/uzaleznienia_behawioralne.md' },
        { id: 'uzaleznienia/neurobiologia_uzaleznien',  label: 'Neurobiologia uzalezniel',               file: 'wiki/uzaleznienia/neurobiologia_uzaleznien.md'  },
        { id: 'uzaleznienia/rodzina_w_uzaleznieniach',  label: 'Rodzina w systemie uzaleznienia',        file: 'wiki/uzaleznienia/rodzina_w_uzaleznieniach.md'  },
        { id: 'uzaleznienia/internet_uzaleznienie',     label: 'Uzaleznienie od internetu i technologii',file: 'wiki/uzaleznienia/internet_uzaleznienie.md'     },
        { id: 'uzaleznienia/terapia_grupowa',           label: 'Terapia grupowa w uzaleznieniach',       file: 'wiki/uzaleznienia/terapia_grupowa.md'           },
        { id: 'uzaleznienia/recovery',                  label: 'Recovery - droga do zdrowia',            file: 'wiki/uzaleznienia/recovery.md'                  },
      ]
    },
    { /* Relacje i związki */
      section: 'Relacje i związki',
      domainKey: 'relacje',
      items: [
        { id: 'relacje/przywiezanie_doroslych', label: 'Style przywiazania u doroslych', file: 'wiki/relacje/przywiezanie_doroslych.md' },
        { id: 'relacje/trojkatna_teoria_milosci', label: 'Triangularna teoria milosci', file: 'wiki/relacje/trojkatna_teoria_milosci.md' },
        { id: 'relacje/dobor_partnera', label: 'Dobor partnera', file: 'wiki/relacje/dobor_partnera.md' },
        { id: 'relacje/komunikacja_para', label: 'Komunikacja w parze', file: 'wiki/relacje/komunikacja_para.md' },
        { id: 'relacje/glebia_relacji_a_traumy', label: 'Głębia relacji a dzielenie się traumą', file: 'wiki/relacje/glebia_relacji_a_traumy.md' },
        { id: 'relacje/konflikty', label: 'Konflikty i ich rozwiazywanie', file: 'wiki/relacje/konflikty.md' },
        { id: 'relacje/zdrada', label: 'Zdrada i odbudowa zaufania', file: 'wiki/relacje/zdrada.md' },
        { id: 'relacje/terapia_par', label: 'Terapia par', file: 'wiki/relacje/terapia_par.md' },
        { id: 'relacje/przemoc_zwiazki',  label: 'Przemoc w związkach',             file: 'wiki/relacje/przemoc_zwiazki.md'  },
        { id: 'relacje/samotnosc',        label: 'Samotność i izolacja społeczna',  file: 'wiki/relacje/samotnosc.md'        },
        { id: 'relacje/przyjaznie',       label: 'Przyjaźń',                        file: 'wiki/relacje/przyjaznie.md'       },
        { id: 'relacje/rozstanie',        label: 'Rozpad zwiazku i zaloba',         file: 'wiki/relacje/rozstanie.md'        },
        { id: 'relacje/relacje_rodzinne', label: 'Relacje rodzinne - dynamika',     file: 'wiki/relacje/relacje_rodzinne.md' },
      ]
    },
    { /* Etyka zawodowa */
      section: 'Etyka zawodowa',
      domainKey: 'etyka',
      items: [
        { id: 'etyka/kodeksy_etyczne', label: 'Kodeksy etyczne - przeglad', file: 'wiki/etyka/kodeksy_etyczne.md' },
        { id: 'etyka/zasady_apa_ptp', label: 'Zasady APA i PTP', file: 'wiki/etyka/zasady_apa_ptp.md' },
        { id: 'etyka/dobro_nieszkodzenie', label: 'Dobro i nieszkodzenie', file: 'wiki/etyka/dobro_nieszkodzenie.md' },
        { id: 'etyka/tajemnica_zawodowa_granice', label: 'Tajemnica zawodowa i jej granice', aliases: ['Tajemnica zawodowa psychologa', 'Poufność w pracy psychologa'], file: 'wiki/etyka/tajemnica_zawodowa_granice.md' },
        { id: 'etyka/swiadoma_zgoda', label: 'Świadoma zgoda', file: 'wiki/etyka/swiadoma_zgoda.md' },
        { id: 'etyka/granice_relacji', label: 'Granice relacji terapeutycznej', file: 'wiki/etyka/granice_relacji.md' },
        { id: 'etyka/superwizja_odpowiedzialnosc', label: 'Superwizja i odpowiedzialność', file: 'wiki/etyka/superwizja_odpowiedzialnosc.md' },
        { id: 'etyka/dylematy_etyczne',          label: 'Dylematy etyczne w praktyce',           file: 'wiki/etyka/dylematy_etyczne.md'          },
        { id: 'etyka/kompetencje_kulturowe',     label: 'Kompetencje kulturowe',                 file: 'wiki/etyka/kompetencje_kulturowe.md'     },
        { id: 'etyka/etyka_badan',               label: 'Etyka badań naukowych',                 file: 'wiki/etyka/etyka_badan.md'               },
        { id: 'etyka/etyka_cyfrowa',             label: 'Etyka w psychologii cyfrowej',          file: 'wiki/etyka/etyka_cyfrowa.md'             },
        { id: 'etyka/odpowiedzialnosc_zawodowa', label: 'Odpowiedzialnosc zawodowa',             file: 'wiki/etyka/odpowiedzialnosc_zawodowa.md' },
          { id: 'etyka/polska_adaptacja_3d_ws', label: 'Polska adaptacja 3D-WS', file: 'wiki/etyka/polska_adaptacja_3d_ws.md' },
        ]
    },
    { /* Diagnoza psychologiczna */
      section: 'Diagnoza psychologiczna',
      domainKey: 'diagnoza',
      items: [
        { id: 'diagnoza/etapy_diagnozy', label: 'Etapy i cele diagnozy', file: 'wiki/diagnoza/etapy_diagnozy.md' },
        { id: 'diagnoza/wywiad_psychologiczny', label: 'Wywiad psychologiczny', file: 'wiki/diagnoza/wywiad_psychologiczny.md' },
        { id: 'diagnoza/wywiad_kognitywny_poznawczy', label: 'Wywiad kognitywny (poznawczy)', file: 'wiki/diagnoza/wywiad_kognitywny_poznawczy.md' },
        { id: 'diagnoza/diagnoza_techniki_rozmowy_psychologicznej', label: 'Techniki rozmowy psychologicznej', file: 'wiki/diagnoza/diagnoza_techniki_rozmowy_psychologicznej.md' },
        { id: 'diagnoza/obserwacja_kliniczna', label: 'Obserwacja kliniczna', file: 'wiki/diagnoza/obserwacja_kliniczna.md' },
        { id: 'diagnoza/formulowanie_przypadku', label: 'Formulowanie przypadku', file: 'wiki/diagnoza/formulowanie_przypadku.md' },
        { id: 'diagnoza/techniki_projekcyjne', label: 'Techniki projekcyjne', file: 'wiki/diagnoza/techniki_projekcyjne.md' },
        { id: 'diagnoza/opinia_psychologiczna', label: 'Opinia psychologiczna', file: 'wiki/diagnoza/opinia_psychologiczna.md' },
        { id: 'diagnoza/diagnoza_stygmatyzacja', label: 'Diagnoza, a stygmatyzacja', file: 'wiki/diagnoza/diagnoza_stygmatyzacja.md' },
      ]
    },
    { /* Emocje i motywacje */
      section: 'Emocje i motywacje',
      domainKey: 'emocje',
      items: [
        { id: 'emocje/emocje_wprowadzenie', label: 'Emocje',   file: 'wiki/emocje/emocje_wprowadzenie.md'  },
        { id: 'emocje/teorie_emocji',              label: 'Teorie emocji',            file: 'wiki/emocje/teorie_emocji.md'              },
        { id: 'emocje/regulacja',           label: 'Regulacja emocjonalna',    file: 'wiki/emocje/regulacja.md'           },
        { id: 'emocje/motywacja',           label: 'Motywacja',                file: 'wiki/emocje/motywacja.md'           },
        { id: 'emocje/neurobiologia',       label: 'Neurobiologia emocji',     file: 'wiki/emocje/neurobiologia.md'       },
        { id: 'emocje/wspolczucie',         label: 'Empatia i współczucie',    file: 'wiki/emocje/wspolczucie.md'         },
        { id: 'emocje/aleksytymia',         label: 'Aleksytymia',              file: 'wiki/emocje/aleksytymia.md'         },
        { id: 'emocje/inteligencja_emocjonalna', label: 'Inteligencja emocjonalna',          file: 'wiki/emocje/inteligencja_emocjonalna.md' },
        { id: 'emocje/stres_emocje',             label: 'Stres a procesy emocjonalne',       file: 'wiki/emocje/stres_emocje.md'             },
        { id: 'emocje/pozytywne_emocje',         label: 'Pozytywne emocje i broaden-build',  file: 'wiki/emocje/pozytywne_emocje.md'         },
        { id: 'emocje/wstyd_wina',               label: 'Wstyd i wina',                      file: 'wiki/emocje/wstyd_wina.md'               },
        { id: 'emocje/emocje_spoleczne',         label: 'Emocje społeczne i moralne',        file: 'wiki/emocje/emocje_spoleczne.md'         },
      ]
    },
    { /* Podstawy pomocy psychologicznej */
      section: 'Podstawy pomocy psychologicznej',
      domainKey: 'podstawy_pomocy',
      items: [
        { id: 'podstawy_pomocy/wprowadzenie',                   label: 'Pomoc psychologiczna',  file: 'wiki/podstawy_pomocy/wprowadzenie.md'                   },
        { id: 'podstawy_pomocy/relacja_pomocowa',               label: 'Relacja pomocowa',                     file: 'wiki/podstawy_pomocy/relacja_pomocowa.md'               },
        { id: 'podstawy_pomocy/aktywne_sluchanie',              label: 'Aktywne sluchanie',                    file: 'wiki/podstawy_pomocy/aktywne_sluchanie.md'              },
        { id: 'podstawy_pomocy/granice_w_pomocy',               label: 'Granice w relacji pomocowej',          file: 'wiki/podstawy_pomocy/granice_w_pomocy.md'               },
        { id: 'podstawy_pomocy/kryzys_psychologiczny',          label: 'Kryzys psychologiczny i interwencja',  file: 'wiki/podstawy_pomocy/kryzys_psychologiczny.md'          },
        { id: 'podstawy_pomocy/pierwsza_pomoc_psychologiczna',  label: 'Pierwsza pomoc psychologiczna',        file: 'wiki/podstawy_pomocy/pierwsza_pomoc_psychologiczna.md'  },
        { id: 'podstawy_pomocy/modele_pomocy',                  label: 'Modele pomocy psychologicznej',        file: 'wiki/podstawy_pomocy/modele_pomocy.md'                  },
        { id: 'podstawy_pomocy/komunikacja_wspierajaca',        label: 'Komunikacja wspierajaca',              file: 'wiki/podstawy_pomocy/komunikacja_wspierajaca.md'        },
        { id: 'podstawy_pomocy/wsparcie_spoleczne',             label: 'Wsparcie społeczne',                   file: 'wiki/podstawy_pomocy/wsparcie_spoleczne.md'             },
        { id: 'podstawy_pomocy/facylitacja',                    label: 'Facylitacja w pracy pomocowej',        file: 'wiki/podstawy_pomocy/facylitacja.md'                    },
        { id: 'podstawy_pomocy/samoopieka_pomagajacego',        label: 'Samoopieka pomagajacego',              file: 'wiki/podstawy_pomocy/samoopieka_pomagajacego.md'        },
        { id: 'podstawy_pomocy/etyka_pomocy',                   label: 'Etyka pomocy psychologicznej',         file: 'wiki/podstawy_pomocy/etyka_pomocy.md'                   },
      ]
    },
    { /* Temperament */
      section: 'Temperament',
      domainKey: 'temperament',
      items: [
        { id: 'temperament/temperament_wprowadzenie', label: 'Temperament', file: 'wiki/temperament/temperament_wprowadzenie.md' },
        { id: 'temperament/modele',   label: 'Modele temperamentu',  file: 'wiki/temperament/modele.md'   },
        { id: 'temperament/pomiar',   label: 'Pomiar temperamentu',  file: 'wiki/temperament/pomiar.md'   },
        { id: 'temperament/kliniczne',label: 'Wymiar kliniczny',     file: 'wiki/temperament/kliniczne.md'},
        { id: 'temperament/rozwoj',                  label: 'Temperament, a Rozwoj',                file: 'wiki/temperament/rozwoj.md'                   },
        { id: 'temperament/strelau',                 label: 'RTT - teoria Strelaua',               file: 'wiki/temperament/strelau.md'                  },
        { id: 'temperament/eysenck',                 label: 'Model Eysencka (PEN)',                file: 'wiki/temperament/eysenck.md'                  },
        { id: 'temperament/gray',                    label: 'Teoria BIS/BAS Graya',                file: 'wiki/temperament/gray.md'                     },
        { id: 'temperament/kagan',                   label: 'Zahamowanie behawioralne (Kagan)',    file: 'wiki/temperament/kagan.md'                    },
        { id: 'temperament/temperament_a_psychopat', label: 'Temperament, a psychopatologia',       file: 'wiki/temperament/temperament_a_psychopat.md'  },
        { id: 'temperament/biologia_temperamentu',   label: 'Biologiczne podloze temperamentu',    file: 'wiki/temperament/biologia_temperamentu.md'    },
        { id: 'temperament/temperament_a_kariera',   label: 'Temperament, a kariera i praca',       file: 'wiki/temperament/temperament_a_kariera.md'    },
      ]
    },
    { /* Różnice indywidualne */
      section: 'Różnice indywidualne',
      domainKey: 'roznice_indywidualne',
      items: [
        { id: 'roznice_indywidualne/roznice_wprowadzenie', label: 'Różnice indywidualne',                file: 'wiki/roznice_indywidualne/roznice_wprowadzenie.md' },
        { id: 'roznice_indywidualne/inteligencja',         label: 'Inteligencja',                file: 'wiki/roznice_indywidualne/inteligencja.md'          },
        { id: 'roznice_indywidualne/osobowosc',            label: 'Osobowosc',                   file: 'wiki/roznice_indywidualne/osobowosc.md'             },
        { id: 'roznice_indywidualne/kreatywnosc',          label: 'Kreatywnosc',                 file: 'wiki/roznice_indywidualne/kreatywnosc.md'           },
        { id: 'roznice_indywidualne/genetyka',             label: 'Uwarunkowania genetyczne',    file: 'wiki/roznice_indywidualne/genetyka.md'              },
        { id: 'roznice_indywidualne/style_poznawcze',      label: 'Style poznawcze',             file: 'wiki/roznice_indywidualne/style_poznawcze.md'       },
        { id: 'roznice_indywidualne/reiss_motivation_profile', label: 'Reiss Motivation Profile', file: 'wiki/roznice_indywidualne/reiss_motivation_profile.md' },
        { id: 'roznice_indywidualne/plec_psychologia',     label: 'Psychologia plci',            file: 'wiki/roznice_indywidualne/plec_psychologia.md'      },
        { id: 'roznice_indywidualne/ciemna_triada',        label: 'Ciemna Triada',               file: 'wiki/roznice_indywidualne/ciemna_triada.md'          },
      ]
    },
    { /* Psychometria */
      section: 'Psychometria',
      domainKey: 'psychometria',
      items: [
        { id: 'psychometria/psychometria_wprowadzenie', label: 'Podstawy pomiaru psychologicznego', file: 'wiki/psychometria/psychometria_wprowadzenie.md' },
        { id: 'psychometria/modele_psychometryczne_i_struktura_testu', label: 'Modele psychometryczne i struktura testu', file: 'wiki/psychometria/modele_psychometryczne_i_struktura_testu.md' },
        { id: 'psychometria/narzedzia_kliniczne', label: 'Narzędzia przesiewowe i kliniczne', file: 'wiki/psychometria/narzedzia_kliniczne.md' },
        { id: 'psychometria/narzedzia_diagnozy_neurorozwojowej', label: 'Narzędzia diagnozy neurorozwojowej', file: 'wiki/psychometria/narzedzia_diagnozy_neurorozwojowej.md' },
        { id: 'psychometria/testy_osobowosci_i_zdolnosci', label: 'Testy osobowości i zdolności', file: 'wiki/psychometria/testy_osobowosci_i_zdolnosci.md' },
      ]
    },
    { /* Neurobiologia i neuropsychologia */
      section: 'Neurobiologia',
      domainKey: 'neuro',
      items: [
        { id: 'neuropsychologia/podstawy_neurologii', label: 'Podstawy układu nerwowego', file: 'wiki/neuropsychologia/podstawy_neurologii.md' },
        { id: 'neuropsychologia/anatomia', label: 'Funkcjonalna anatomia mózgu', file: 'wiki/neuropsychologia/anatomia.md' },
        { id: 'neuropsychologia/neuronauka_poznawcza', label: 'Metody neuronauki poznawczej', file: 'wiki/neuropsychologia/neuronauka_poznawcza.md' },
        { id: 'neuropsychologia/plastycznosc', label: 'Rozwój, plastyczność i zmienność mózgu', file: 'wiki/neuropsychologia/plastycznosc.md' },
        { id: 'neuropsychologia/rehabilitacja_neuropsychologiczna', label: 'Diagnoza i rehabilitacja neuropsychologiczna', file: 'wiki/neuropsychologia/rehabilitacja_neuropsychologiczna.md' },
      ]
    },
    { /* Zaburzenia kliniczne */
      section: 'Zaburzenia kliniczne',
      domainKey: 'zaburzenia',
      items: [
        { id: 'zaburzenia/afazje',    label: 'Afazje',                file: 'wiki/zaburzenia/afazje.md'    },
        { id: 'zaburzenia/amnezje',   label: 'Amnezje',               file: 'wiki/zaburzenia/amnezje.md'   },
        { id: 'zaburzenia/otepienia', label: 'Otepienia',             file: 'wiki/zaburzenia/otepienia.md' },
        { id: 'zaburzenia/tbi',       label: 'Urazy glowy (TBI)',     file: 'wiki/zaburzenia/tbi.md'       },
        { id: 'zaburzenia/apraksja',  label: 'Apraksja',              file: 'wiki/zaburzenia/apraksja.md'  },
        { id: 'zaburzenia/agnozja',   label: 'Agnozja wzrokowa',      file: 'wiki/zaburzenia/agnozja.md'   },
        { id: 'zaburzenia/neglect',   label: 'Neglect przestrzenny',  file: 'wiki/zaburzenia/neglect.md'   },
      ]
    },
    { /* Przypadki kliniczne */
      section: 'Przypadki kliniczne',
      domainKey: 'przypadki_kliniczne',
      items: [
        { id: 'przypadki_kliniczne/hm',            label: 'H.M. - amnezja',              file: 'wiki/przypadki_kliniczne/hm.md'            },
        { id: 'przypadki_kliniczne/gage',          label: 'Phineas Gage',                file: 'wiki/przypadki_kliniczne/gage.md'          },
        { id: 'przypadki_kliniczne/tan',           label: 'Pacjent „Tan” - afazja',           file: 'wiki/przypadki_kliniczne/tan.md'           },
        { id: 'przypadki_kliniczne/split_brain',   label: 'Rozdzielony mózg',            file: 'wiki/przypadki_kliniczne/split_brain.md'   },
        { id: 'przypadki_kliniczne/clive_wearing', label: 'Clive Wearing',               file: 'wiki/przypadki_kliniczne/clive_wearing.md' },
        { id: 'przypadki_kliniczne/elliot',        label: 'Elliot',                      file: 'wiki/przypadki_kliniczne/elliot.md'        },
        { id: 'przypadki_kliniczne/df',            label: 'Pacjentka D.F.',              file: 'wiki/przypadki_kliniczne/df.md'            },
        { id: 'przypadki_kliniczne/kc',            label: 'Pacjent K.C.',                file: 'wiki/przypadki_kliniczne/kc.md'            },
        { id: 'przypadki_kliniczne/na',            label: 'Pacjent N.A.',                file: 'wiki/przypadki_kliniczne/na.md'            },
        { id: 'przypadki_kliniczne/patient_kn',    label: 'Pacjent K.N.',                file: 'wiki/przypadki_kliniczne/patient_kn.md'    },
        { id: 'przypadki_kliniczne/patient_rb',    label: 'Pacjent R.B.',                file: 'wiki/przypadki_kliniczne/patient_rb.md'    },
        { id: 'przypadki_kliniczne/ps',            label: 'Pacjent P.S.',                file: 'wiki/przypadki_kliniczne/ps.md'            },
        { id: 'przypadki_kliniczne/sm',            label: 'Pacjentka S.M. (uszkodzenie ciala migdalowatego)', file: 'wiki/przypadki_kliniczne/sm.md' },
      ]
    },
    { /* Psychopatologia */
      section: 'Psychopatologia',
      domainKey: 'psychopatologia',
      items: [
        { id: 'psychopatologia/psychopatologia_wprowadzenie', label: 'Podstawy psychopatologii', file: 'wiki/psychopatologia/psychopatologia_wprowadzenie.md' },
        { id: 'psychopatologia/zaburzenia_nastroju', label: 'Zaburzenia nastroju', file: 'wiki/psychopatologia/zaburzenia_nastroju.md' },
        { id: 'psychopatologia/zaburzenia_lekowe_i_obsesyjno_kompulsyjne', label: 'Zaburzenia lękowe i OCD', file: 'wiki/psychopatologia/zaburzenia_lekowe_i_obsesyjno_kompulsyjne.md' },
        { id: 'psychopatologia/psychozy', label: 'Psychozy', file: 'wiki/psychopatologia/psychozy.md' },
        { id: 'psychopatologia/trauma_ptsd', label: 'Trauma, dysocjacja i wiktymizacja', file: 'wiki/psychopatologia/trauma_ptsd.md' },
        { id: 'psychopatologia/zaburzenia_osobowosci', label: 'Osobowość, psychopatia i socjopatia', file: 'wiki/psychopatologia/zaburzenia_osobowosci.md' },
        { id: 'psychopatologia/zaburzenia_odzywiania_i_uzaleznienia', label: 'Zaburzenia odżywiania i uzależnienia', file: 'wiki/psychopatologia/zaburzenia_odzywiania_i_uzaleznienia.md' },
      ]
    },
    { /* Testy psychologiczne */
      section: 'Testy psychologiczne',
      domainKey: 'tests',
      items: [
        { id: 'testy/testy_przeglad',    label: 'Testy - przeglad',           file: 'wiki/testy/testy_przeglad.md'    },
        { id: 'testy/mmse_moca',         label: 'Testy przesiewowe',          file: 'wiki/testy/mmse_moca.md'         },
        { id: 'testy/testy_wykonawcze',  label: 'Testy wyk. - przeglad',      file: 'wiki/testy/testy_wykonawcze.md'  },
        { id: 'testy/testy_pamieci',     label: 'Testy pamieci',              file: 'wiki/testy/testy_pamieci.md'     },
        { id: 'testy/testy_uwagi',       label: 'Testy uwagi',                file: 'wiki/testy/testy_uwagi.md'       },
        { id: 'testy/testy_jezyka',      label: 'Testy jezykowe',             file: 'wiki/testy/testy_jezyka.md'      },
        { id: 'testy/wais',              label: 'Skale Wechslera (WAIS/WISC)',file: 'wiki/testy/wais.md'              },
        { id: 'testy/wisc_v',            label: 'WISC-V - opis testu',        file: 'wiki/testy/wisc_v.md'            },
        { id: 'testy/neuropsych_battery',label: 'Baterie neuropsychologiczne',file: 'wiki/testy/neuropsych_battery.md'},
        { id: 'testy/rdoc',              label: 'Model RDoC',                  file: 'wiki/testy/rdoc.md'              },
        { id: 'testy/scid_v',            label: 'SCID-5 / SCID-V',             file: 'wiki/testy/scid_v.md'            },
        { id: 'testy/apis_zr',           label: 'APIS-ZR - zastosowanie w diagnozie', file: 'wiki/testy/apis_zr.md' },
      ]
    },
    { /* Funkcje poznawcze */
      section: 'Funkcje poznawcze',
      domainKey: 'poznawcza',
      items: [
        { id: 'psychologia_poznawcza/percepcja',          label: 'Percepcja i uwaga',                            file: 'wiki/psychologia_poznawcza/percepcja.md'          },
        { id: 'psychologia_poznawcza/pamiec',             label: 'Pamięć i uczenie się',                          file: 'wiki/psychologia_poznawcza/pamiec.md'             },
        { id: 'psychologia_poznawcza/funkcje_wykonawcze', label: 'Funkcje wykonawcze i obciążenie poznawcze',     file: 'wiki/psychologia_poznawcza/funkcje_wykonawcze.md' },
        { id: 'psychologia_poznawcza/myslenie',           label: 'Myślenie i podejmowanie decyzji',               file: 'wiki/psychologia_poznawcza/myslenie.md'           },
        { id: 'psychologia_poznawcza/jezyk',              label: 'Język, narracja i wyobraźnia',                  file: 'wiki/psychologia_poznawcza/jezyk.md'              },
        { id: 'psychologia_poznawcza/swiadomosc',         label: 'Świadomość, ucieleśnienie i predykcja',         file: 'wiki/psychologia_poznawcza/swiadomosc.md'         },
        { id: 'psychologia_poznawcza/nauki_kognitywne',   label: 'Nauki kognitywne i architektury poznawcze',    file: 'wiki/psychologia_poznawcza/nauki_kognitywne.md'   },
      ]
    },
    { /* Psychologia zdrowia */
      section: 'Psychologia zdrowia',
      domainKey: 'psychologia_zdrowia',
      items: [
        { id: 'psychologia_zdrowia/zdrowie_wprowadzenie', label: 'Modele zdrowia i choroby', file: 'wiki/psychologia_zdrowia/zdrowie_wprowadzenie.md' },
        { id: 'psychologia_zdrowia/zachowania_zdrowotne', label: 'Zachowania i styl życia', file: 'wiki/psychologia_zdrowia/zachowania_zdrowotne.md' },
        { id: 'psychologia_zdrowia/stres', label: 'Stres, radzenie sobie i wsparcie', file: 'wiki/psychologia_zdrowia/stres.md' },
        { id: 'psychologia_zdrowia/choroby_przewlekle', label: 'Choroba przewlekła, rehabilitacja i jakość życia', file: 'wiki/psychologia_zdrowia/choroby_przewlekle.md' },
        { id: 'psychologia_zdrowia/bol', label: 'Psychologia bólu', file: 'wiki/psychologia_zdrowia/bol.md' },
        { id: 'psychologia_zdrowia/interwencje_zdrowotne', label: 'Komunikacja i interwencje w opiece zdrowotnej', file: 'wiki/psychologia_zdrowia/interwencje_zdrowotne.md' },
      ]
    },
    
    { /* Psychosomatyka */
      section: 'Psychosomatyka',
      domainKey: 'psychosomatyka',
      items: [
        { id: 'psychosomatyka/wprowadzenie',               label: 'Psychosomatyka',    file: 'wiki/psychosomatyka/wprowadzenie.md'               },
        { id: 'psychosomatyka/historia_psychosomatyki',                   label: 'Historia psychosomatyki',           file: 'wiki/psychosomatyka/historia_psychosomatyki.md'                  },
        { id: 'psychosomatyka/modele_psychosomatyczne',    label: 'Modele psychosomatyczne',           file: 'wiki/psychosomatyka/modele_psychosomatyczne.md'   },
        { id: 'psychosomatyka/os_hpa',                     label: 'Os HPA i mechanizmy stresu',        file: 'wiki/psychosomatyka/os_hpa.md'                    },
        { id: 'psychosomatyka/somatyzacja',                label: 'Somatyzacja i zaburzenia somatyczne', file: 'wiki/psychosomatyka/somatyzacja.md'             },
        { id: 'psychosomatyka/bol_psychosomatyczny',       label: 'Ból psychosomatyczny',              file: 'wiki/psychosomatyka/bol_psychosomatyczny.md'      },
        { id: 'psychosomatyka/psychodermatologia',         label: 'Psychodermatologia',                file: 'wiki/psychosomatyka/psychodermatologia.md'        },
        { id: 'psychosomatyka/psychogastroenterologia',    label: 'Psychogastroenterologia',           file: 'wiki/psychosomatyka/psychogastroenterologia.md'   },
        { id: 'psychosomatyka/psychokardiologia',          label: 'Psychokardiologia',                 file: 'wiki/psychosomatyka/psychokardiologia.md'         },
        { id: 'psychosomatyka/uklad_oddechowy',            label: 'Psychosomatyka ukladu oddechowego', file: 'wiki/psychosomatyka/uklad_oddechowy.md'           },
        { id: 'psychosomatyka/choroby_autoimmunologiczne', label: 'Choroby autoimmunologiczne',        file: 'wiki/psychosomatyka/choroby_autoimmunologiczne.md'},
        { id: 'psychosomatyka/diagnoza_psychosomatyczna',  label: 'Diagnoza psychosomatyczna',         file: 'wiki/psychosomatyka/diagnoza_psychosomatyczna.md' },
        { id: 'psychosomatyka/terapia_psychosomatyczna',   label: 'Terapia psychosomatyczna',          file: 'wiki/psychosomatyka/terapia_psychosomatyczna.md'  },
      ]
    },
    
    { /* Porozumiewanie się bez przemocy (NVC) */
      section: 'Porozumiewanie się bez przemocy (NVC)',
      domainKey: 'porozumiewanie_sie_bez_przemocy',
      items: [
        { id: 'porozumiewanie_sie_bez_przemocy/wprowadzenie',              label: 'NVC',                    file: 'wiki/porozumiewanie_sie_bez_przemocy/wprowadzenie.md'              },
        { id: 'porozumiewanie_sie_bez_przemocy/nvc_w_praktyce',            label: 'NVC w praktyce',         file: 'wiki/porozumiewanie_sie_bez_przemocy/nvc_w_praktyce.md'            },
      ]
    },
    { /* Arteterapia */
      section: 'Arteterapia',
      domainKey: 'arteterapia',
      items: [
        {
          id: 'arteterapia/arteterapia_wprowadzenie',
          label: 'Arteterapia i terapie wykorzystujące sztukę',
          aliases: ['Arteterapia', 'Terapie wykorzystujące sztukę'],
          file: 'wiki/arteterapia/arteterapia_wprowadzenie.md'
        },
      ]
    },
    { /* Animaloterapia */
      section: 'Animaloterapia',
      domainKey: 'animaloterapia',
      items: [
        { id: 'animaloterapia/animaloterapia_wprowadzenie', label: 'Interwencje wspomagane przez zwierzęta', file: 'wiki/animaloterapia/animaloterapia_wprowadzenie.md' },
      ]
    },
    { /* Odpornosc psychiczna i mobbing */
      section: 'Odpornosc psychiczna',
      domainKey: 'rezyliencja_i_mobbing',
      items: [
        { id: 'rezyliencja_i_mobbing/odpornosc_wprowadzenie',   label: 'Odpornosc psychiczna - wprow.',        file: 'wiki/rezyliencja_i_mobbing/odpornosc_wprowadzenie.md'   },
        { id: 'rezyliencja_i_mobbing/modele_odpornosci',        label: 'Modele i teorie odporności',           file: 'wiki/rezyliencja_i_mobbing/modele_odpornosci.md'        },
        { id: 'rezyliencja_i_mobbing/budowanie_odpornosci',     label: 'Budowanie odporności psychicznej',     file: 'wiki/rezyliencja_i_mobbing/budowanie_odpornosci.md'     },
        { id: 'rezyliencja_i_mobbing/przemoc_psychiczna',       label: 'Przemoc psychiczna - definicja',       file: 'wiki/rezyliencja_i_mobbing/przemoc_psychiczna.md'       },
        { id: 'rezyliencja_i_mobbing/mobbing_definicja',        label: 'Mobbing - definicja, rodzaje, fazy',   file: 'wiki/rezyliencja_i_mobbing/mobbing_definicja.md'        },
        { id: 'rezyliencja_i_mobbing/mobbing_skutki',           label: 'Skutki psychologiczne mobbingu',       file: 'wiki/rezyliencja_i_mobbing/mobbing_skutki.md'           },
        { id: 'rezyliencja_i_mobbing/mobbing_interwencja',      label: 'Interwencja i zapobieganie mobbingowi',file: 'wiki/rezyliencja_i_mobbing/mobbing_interwencja.md'      },
        { id: 'rezyliencja_i_mobbing/wypalenie_zawodowe',       label: 'Wypalenie zawodowe - definicja',       file: 'wiki/rezyliencja_i_mobbing/wypalenie_zawodowe.md'       },
        { id: 'rezyliencja_i_mobbing/fazy_wypalenia',           label: 'Fazy i wymiary wypalenia',             file: 'wiki/rezyliencja_i_mobbing/fazy_wypalenia.md'           },
        { id: 'rezyliencja_i_mobbing/wypalenie_zawody',         label: 'Wypalenie w wybranych zawodach',       file: 'wiki/rezyliencja_i_mobbing/wypalenie_zawody.md'         },
        { id: 'rezyliencja_i_mobbing/profilaktyka_wypalenia',   label: 'Profilaktyka wypalenia zawodowego',    file: 'wiki/rezyliencja_i_mobbing/profilaktyka_wypalenia.md'   },
        { id: 'rezyliencja_i_mobbing/wsparcie_psychologiczne',  label: 'Wsparcie psychologiczne ofiar',        file: 'wiki/rezyliencja_i_mobbing/wsparcie_psychologiczne.md'  },
      ]
    },
    { /* Psychologia szkolna i edukacyjna */
      section: 'Psychologia szkolna i edukacyjna',
      domainKey: 'psychologia_szkolna',
      items: [
        { id: 'psychologia_szkolna/teorie_uczenia_sie',            label: 'Uczenie się i motywacja szkolna',                       file: 'wiki/psychologia_szkolna/teorie_uczenia_sie.md'            },
        { id: 'psychologia_szkolna/trudnosci_w_uczeniu_sie',       label: 'Trudności w uczeniu i wsparcie szkolne',                 file: 'wiki/psychologia_szkolna/trudnosci_w_uczeniu_sie.md'       },
        { id: 'psychologia_szkolna/klimat_szkolny',                label: 'Klimat szkolny, stres i przemoc',                           file: 'wiki/psychologia_szkolna/klimat_szkolny.md'                },
        { id: 'psychologia_szkolna/ocenianie_i_informacja_zwrotna', label: 'Ocenianie, informacja zwrotna i relacja edukacyjna', file: 'wiki/psychologia_szkolna/ocenianie_i_informacja_zwrotna.md' },
      ]
    },
    { /* Psychologia osob z niepelnosprawnoscia */
      section: 'Psychologia osob z niepelnosprawnoscia',
      domainKey: 'psychologia_niepelnosprawnosci',
      items: [
        { id: 'psychologia_niepelnosprawnosci/wprowadzenie',                  label: 'Psychologia niepelnosprawnosci - wprow.', file: 'wiki/psychologia_niepelnosprawnosci/wprowadzenie.md'                  },
        { id: 'psychologia_niepelnosprawnosci/modele_niepelnosprawnosci',     label: 'Modele niepelnosprawnosci',              file: 'wiki/psychologia_niepelnosprawnosci/modele_niepelnosprawnosci.md'     },
        { id: 'psychologia_niepelnosprawnosci/niepelnosprawnosc_intelektualna', label: 'Niepelnosprawnosc intelektualna',      file: 'wiki/psychologia_niepelnosprawnosci/niepelnosprawnosc_intelektualna.md' },
        { id: 'psychologia_niepelnosprawnosci/niepelnosprawnosc_ruchowa',     label: 'Niepelnosprawnosc ruchowa',              file: 'wiki/psychologia_niepelnosprawnosci/niepelnosprawnosc_ruchowa.md'     },
        { id: 'psychologia_niepelnosprawnosci/niepelnosprawnosc_wzrokowa',    label: 'Niepelnosprawnosc wzrokowa',             file: 'wiki/psychologia_niepelnosprawnosci/niepelnosprawnosc_wzrokowa.md'    },
        { id: 'psychologia_niepelnosprawnosci/niepelnosprawnosc_sluchowa',    label: 'Niepelnosprawnosc sluchowa',             file: 'wiki/psychologia_niepelnosprawnosci/niepelnosprawnosc_sluchowa.md'    },
        { id: 'psychologia_niepelnosprawnosci/stres_i_adaptacja',             label: 'Stres, adaptacja i radzenie sobie',      file: 'wiki/psychologia_niepelnosprawnosci/stres_i_adaptacja.md'             },
        { id: 'psychologia_niepelnosprawnosci/rodzina_i_opiekunowie',         label: 'Rodzina i opiekunowie',                  file: 'wiki/psychologia_niepelnosprawnosci/rodzina_i_opiekunowie.md'         },
        { id: 'psychologia_niepelnosprawnosci/inkluzja_spoleczna',            label: 'Inkluzja spoleczna i prawa',             file: 'wiki/psychologia_niepelnosprawnosci/inkluzja_spoleczna.md'            },
      ]
    },
    { /* Psychologia osob w podeszlym wieku */
      section: 'Psychologia osob w podeszlym wieku',
      domainKey: 'geropsychologia',
      items: [
        { id: 'geropsychologia/wprowadzenie', label: 'Psychologia starzenia się i późnej dorosłości', file: 'wiki/geropsychologia/wprowadzenie.md' },
        { id: 'geropsychologia/poznanie_i_zdrowie_psychiczne_w_starosci', label: 'Funkcje poznawcze i zdrowie psychiczne', file: 'wiki/geropsychologia/poznanie_i_zdrowie_psychiczne_w_starosci.md' },
        { id: 'geropsychologia/pomoc_psychologiczna_i_opieka_w_starosci', label: 'Pomoc psychologiczna, opieka i koniec życia', file: 'wiki/geropsychologia/pomoc_psychologiczna_i_opieka_w_starosci.md' },
      ]
    },
    { /* Neuroroznorodnosc i neurodiversity */
      section: 'Neuroroznorodnosc',
      domainKey: 'neuroroznorodnosc',
      items: [
        { id: 'neuroroznorodnosc/wprowadzenie',               label: 'Neuroroznorodnosc',                    file: 'wiki/neuroroznorodnosc/wprowadzenie.md'               },
        { id: 'neuroroznorodnosc/adhd',                       label: 'ADHD jako wariant neuroroznorodnosci', file: 'wiki/neuroroznorodnosc/adhd.md'                       },
        { id: 'neuroroznorodnosc/spektrum_autyzmu', label: 'Spektrum autyzmu (ASD)', aliases: ['Spektrum autyzmu', 'Autyzm', 'ASD'], file: 'wiki/neuroroznorodnosc/spektrum_autyzmu.md' },
        { id: 'neuroroznorodnosc/dysleksja',                  label: 'Dysleksja',                            file: 'wiki/neuroroznorodnosc/dysleksja.md'                  },
        { id: 'neuroroznorodnosc/dyskalkulia',                label: 'Dyskalkulia',                          file: 'wiki/neuroroznorodnosc/dyskalkulia.md'                },
        { id: 'neuroroznorodnosc/dyspraksja',                 label: 'Dyspraksja i DCD',                     file: 'wiki/neuroroznorodnosc/dyspraksja.md'                 },
        { id: 'neuroroznorodnosc/profil_sensoryczny',         label: 'Profil sensoryczny',                   file: 'wiki/neuroroznorodnosc/profil_sensoryczny.md'         },
        { id: 'neuroroznorodnosc/tourette',                   label: "Zespół Tourette'a i tiki",            file: 'wiki/neuroroznorodnosc/tourette.md'                   },
        { id: 'neuroroznorodnosc/hiperleksja',                label: 'Hiperleksja i wyjatkowe zdolnosci',    file: 'wiki/neuroroznorodnosc/hiperleksja.md'                },
        { id: 'neuroroznorodnosc/model_mocnych_stron',        label: 'Model mocnych stron',                  file: 'wiki/neuroroznorodnosc/model_mocnych_stron.md'        },
        { id: 'neuroroznorodnosc/wsparcie_interwencje',       label: 'Wsparcie i interwencje',               file: 'wiki/neuroroznorodnosc/wsparcie_interwencje.md'       },
        { id: 'neuroroznorodnosc/neurozroznorodnosc_w_pracy', label: 'Neuroróżnorodność w miejscu pracy',   file: 'wiki/neuroroznorodnosc/neurozroznorodnosc_w_pracy.md' },
        { id: 'neuroroznorodnosc/identyfikacja_i_diagnoza',   label: 'Identyfikacja i diagnoza',             file: 'wiki/neuroroznorodnosc/identyfikacja_i_diagnoza.md'   },
      ]
    },
    { /* Psychoterapia */
      section: 'Psychoterapia',
      domainKey: 'psychoterapia',
      items: [
        { id: 'psychoterapia/psychoterapia_wprowadzenie', label: 'Podstawy, skuteczność i czynniki wspólne', file: 'wiki/psychoterapia/psychoterapia_wprowadzenie.md' },
        { id: 'psychoterapia/cbt', label: 'Terapie poznawcze i behawioralne', file: 'wiki/psychoterapia/cbt.md' },
        { id: 'psychoterapia/act', label: 'ACT i terapie kontekstualne', file: 'wiki/psychoterapia/act.md' },
        { id: 'psychoterapia/dbt', label: 'Terapia dialektyczno-behawioralna (DBT)', file: 'wiki/psychoterapia/dbt.md' },
        { id: 'psychoterapia/podejscia_psychodynamiczne_i_humanistyczne', label: 'Podejścia psychodynamiczne i humanistyczne', file: 'wiki/psychoterapia/podejscia_psychodynamiczne_i_humanistyczne.md' },
        { id: 'psychoterapia/emdr', label: 'Psychoterapia traumy i EMDR', file: 'wiki/psychoterapia/emdr.md' },
        { id: 'psychoterapia/interwencje_relacyjne_i_niestandardowe', label: 'Interwencje relacyjne i niestandardowe', file: 'wiki/psychoterapia/interwencje_relacyjne_i_niestandardowe.md' },
      ]
    },
    { /* Farmakologia i psychofarmakologia */
      section: 'Farmakologia',
      domainKey: 'farmakologia',
      items: [
        { id: 'farmakologia/neurofarmakologia',           label: 'Neurofarmakologia',                file: 'wiki/farmakologia/neurofarmakologia.md'           },
        { id: 'farmakologia/neurofarmakologia_behawioralna', label: 'Neurofarmakologia behawioralna', file: 'wiki/farmakologia/neurofarmakologia_behawioralna.md' },
        { id: 'farmakologia/ketamina',                    label: 'Ketamina w psychiatrii',           file: 'wiki/farmakologia/ketamina.md'                    },
        { id: 'farmakologia/psychodeliki',                label: 'Psychodeliki w terapii',           file: 'wiki/farmakologia/psychodeliki.md'                },
          // PSYCHOFARMAKOLOGIA - artykuły kanoniczne
          { id: 'psychofarmakologia/spis_tresci', label: 'Psychofarmakologia - spis treści', file: 'wiki/psychofarmakologia/spis_tresci.md' },
          { id: 'psychofarmakologia/podstawy_psychofarmakologii', label: 'Podstawy psychofarmakologii', file: 'wiki/psychofarmakologia/podstawy_psychofarmakologii.md' },
          { id: 'psychofarmakologia/klasy_lekow_psychotropowych', label: 'Główne klasy leków psychotropowych', file: 'wiki/psychofarmakologia/klasy_lekow_psychotropowych.md' },
          { id: 'psychofarmakologia/farmakoterapia_nastroju_leku_i_stresu', label: 'Farmakoterapia nastroju, lęku i stresu', file: 'wiki/psychofarmakologia/farmakoterapia_nastroju_leku_i_stresu.md' },
          { id: 'psychofarmakologia/farmakoterapia_psychoz_i_zaburzen_neurokognitywnych', label: 'Farmakoterapia psychoz i zaburzeń neurokognitywnych', file: 'wiki/psychofarmakologia/farmakoterapia_psychoz_i_zaburzen_neurokognitywnych.md' },
          { id: 'psychofarmakologia/farmakoterapia_neurorozwojowa_i_objawowa', label: 'Farmakoterapia neurorozwojowa i objawowa', file: 'wiki/psychofarmakologia/farmakoterapia_neurorozwojowa_i_objawowa.md' },
          { id: 'psychofarmakologia/11_leki_w_terapii_uzaleznien', label: 'Farmakoterapia uzależnień', file: 'wiki/psychofarmakologia/11_leki_w_terapii_uzaleznien.md' },
          { id: 'psychofarmakologia/bezpieczenstwo_i_personalizacja_farmakoterapii', label: 'Bezpieczeństwo i personalizacja farmakoterapii', file: 'wiki/psychofarmakologia/bezpieczenstwo_i_personalizacja_farmakoterapii.md' },
        ]
    },
    { /* Psychologia pozytywna */
      section: 'Psychologia pozytywna',
      domainKey: 'psychologia_pozytywna',
      items: [
        { id: 'psychologia_pozytywna/szczescie_dobrostan', label: 'Dobrostan psychiczny', file: 'wiki/psychologia_pozytywna/szczescie_dobrostan.md' },
        { id: 'psychologia_pozytywna/interwencje_pozytywne', label: 'Interwencje psychologii pozytywnej', file: 'wiki/psychologia_pozytywna/interwencje_pozytywne.md' },
        { id: 'psychologia_pozytywna/uwaznosc_przeplyw_i_samowspolczucie', label: 'Uważność, przepływ i samowspółczucie', file: 'wiki/psychologia_pozytywna/uwaznosc_przeplyw_i_samowspolczucie.md' },
      ]
    },
    { /* Suicydologia */
      section: 'Suicydologia',
      domainKey: 'suicydologia',
      items: [
        { id: 'suicydologia/suicydologia_wprowadzenie', label: 'Suicydologia', file: 'wiki/suicydologia/suicydologia_wprowadzenie.md' },
        { id: 'suicydologia/epidemiologia',             label: 'Epidemiologia',                file: 'wiki/suicydologia/epidemiologia.md'             },
        { id: 'suicydologia/modele_suicydologiczne',                    label: 'Modele suicydologiczne',              file: 'wiki/suicydologia/modele_suicydologiczne.md'                    },
        { id: 'suicydologia/ocena_ryzyka',              label: 'Ocena ryzyka',                 file: 'wiki/suicydologia/ocena_ryzyka.md'              },
        { id: 'suicydologia/interwencja',               label: 'Interwencja kryzysowa',        file: 'wiki/suicydologia/interwencja.md'               },
        { id: 'suicydologia/profilaktyka', label: 'Profilaktyka zachowań samobójczych', file: 'wiki/suicydologia/profilaktyka.md' },
        { id: 'suicydologia/nssi',                      label: 'Samookaleczenia (NSSI)',        file: 'wiki/suicydologia/nssi.md'                      },
        { id: 'suicydologia/postvention',               label: 'Postvention',                  file: 'wiki/suicydologia/postvention.md'               },
        { id: 'suicydologia/media',                     label: 'Efekt Wertera i Papageno',     file: 'wiki/suicydologia/media.md'                     },
        { id: 'suicydologia/biologiczne_neurobiologiczne_podstawy', label: 'Biologiczne i neurobiologiczne podstawy', file: 'wiki/suicydologia/biologiczne_neurobiologiczne_podstawy_zachowan_suicydalnych.md' },
        { id: 'suicydologia/genetyczne_i_epigenetyczne_uwarunkowania', label: 'Genetyczne i epigenetyczne uwarunkowania', file: 'wiki/suicydologia/genetyczne_i_epigenetyczne_uwarunkowania_suicydalnosci.md' },
        { id: 'suicydologia/psychopatologia_a_ryzyko',  label: 'Psychopatologia a ryzyko samobójstwa', file: 'wiki/suicydologia/psychopatologia_a_ryzyko_samobojstwa.md' },
        { id: 'suicydologia/trauma_ace_i_stres_chroniczny', label: 'Trauma ACE i stres chroniczny', file: 'wiki/suicydologia/trauma_ace_i_stres_chroniczny_a_ryzyko_samobojstwa.md' },
      ]
    },
    { /* Seksuologia */
      section: 'Seksuologia',
      domainKey: 'seksuologia',
      items: [
        { id: 'seksuologia/seksuologia_wprowadzenie', label: 'Psychologia seksualności w cyklu życia', file: 'wiki/seksuologia/seksuologia_wprowadzenie.md' },
        { id: 'seksuologia/orientacja_seksualna_i_tozsamosc_plciowa', label: 'Orientacja seksualna i tożsamość płciowa', file: 'wiki/seksuologia/orientacja_seksualna_i_tozsamosc_plciowa.md' },
        { id: 'seksuologia/dysfunkcje', label: 'Odpowiedź seksualna, trudności i terapia', file: 'wiki/seksuologia/dysfunkcje.md' },
        { id: 'seksuologia/hiperseksualnosc_mechanizm', label: 'Kompulsywne zachowania seksualne', file: 'wiki/seksuologia/hiperseksualnosc_mechanizm.md' },
        { id: 'seksuologia/trauma_seksualna', label: 'Trauma seksualna i konsekwencje przemocy', file: 'wiki/seksuologia/trauma_seksualna.md' },
      ]
    },
    { /* Psychologia sadowa i opiniowanie */
      section: 'Psychologia sadowa i opiniowanie',
      domainKey: 'psychologia_sadowa',
      items: [
        { id: 'psychologia_sadowa/wprowadzenie', label: 'Opiniowanie psychologiczne dla sądu', file: 'wiki/psychologia_sadowa/wprowadzenie.md' },
        { id: 'psychologia_sadowa/zastosowania_opiniowania_sadowego', label: 'Opiniowanie w różnych postępowaniach', file: 'wiki/psychologia_sadowa/zastosowania_opiniowania_sadowego.md' },
      ]
    },
    { /* Ekrany, ksiazki i natura */
      section: 'Ekrany, książki i natura',
      domainKey: 'ekrany_ksiazki_i_natura',
      items: [
        { id: 'ekrany_ksiazki_i_natura/ekrany_i_funkcjonowanie_psychiczne', label: 'Ekrany i funkcjonowanie psychiczne', file: 'wiki/ekrany_ksiazki_i_natura/ekrany_i_funkcjonowanie_psychiczne.md' },
        { id: 'ekrany_ksiazki_i_natura/czytanie_i_psychologia', label: 'Czytanie i psychologia', file: 'wiki/ekrany_ksiazki_i_natura/czytanie_i_psychologia.md' },
        { id: 'ekrany_ksiazki_i_natura/kontakt_z_natura_i_zdrowie_psychiczne', label: 'Kontakt z naturą i zdrowie psychiczne', file: 'wiki/ekrany_ksiazki_i_natura/kontakt_z_natura_i_zdrowie_psychiczne.md' },
      ]
    },
    { /* Psychologia gier wideo */
      section: 'Psychologia gier wideo',
      domainKey: 'psychologia_gier',
      items: [
        { id: 'psychologia_gier/wprowadzenie', label: 'Motywacja i doświadczenie gracza', file: 'wiki/psychologia_gier/wprowadzenie.md' },
        { id: 'psychologia_gier/skutki_grania_i_uzywanie_problemowe', label: 'Skutki grania i używanie problemowe', file: 'wiki/psychologia_gier/skutki_grania_i_uzywanie_problemowe.md' },
        { id: 'psychologia_gier/zastosowania_gier_i_esport', label: 'Zastosowania gier i esport', file: 'wiki/psychologia_gier/zastosowania_gier_i_esport.md' },
      ]
    },
    { /* E-terapia */
      section: 'E-terapia',
      domainKey: 'e_terapia',
      items: [
        { id: 'e_terapia/terapia_online', label: 'Terapia online', file: 'wiki/e_terapia/terapia_online.md' },
        { id: 'e_terapia/cyfrowe_narzedzia_zdrowia_psychicznego', label: 'Cyfrowe narzędzia zdrowia psychicznego', file: 'wiki/e_terapia/cyfrowe_narzedzia_zdrowia_psychicznego.md' },
        { id: 'e_terapia/vr_terapia', label: 'Wirtualna rzeczywistość w terapii', file: 'wiki/e_terapia/vr_terapia.md' },
      ]
    },
    { /* Psychologia sztucznej inteligencji */
      section: 'Psychologia sztucznej inteligencji',
      domainKey: 'psychologia_ai',
      items: [
        { id: 'psychologia_ai/psychologia_interakcji_czlowiek_ai', label: 'Psychologia interakcji człowiek–AI', file: 'wiki/psychologia_ai/psychologia_interakcji_czlowiek_ai.md' },
        { id: 'psychologia_ai/ai_w_zdrowiu_psychicznym_i_opiece', label: 'AI w zdrowiu psychicznym i opiece', file: 'wiki/psychologia_ai/ai_w_zdrowiu_psychicznym_i_opiece.md' },
        { id: 'psychologia_ai/mechanizmy_ograniczenia_i_etyka_ai', label: 'Mechanizmy, ograniczenia i etyka AI', file: 'wiki/psychologia_ai/mechanizmy_ograniczenia_i_etyka_ai.md' },
        { id: 'robotyka_afektywna/interfejsy_mozg_maszyna', label: 'Interfejsy mózg–maszyna (neurotechnologia)', file: 'wiki/robotyka_afektywna/interfejsy_mozg_maszyna.md' },
      ]
    },
    { /* Psychologia technologii i dobrostan cyfrowy */
      section: 'Psychologia technologii i dobrostan cyfrowy',
      domainKey: 'psychologia_technologii',
      items: [
        { id: 'psychologia_technologii/technostres', label: 'Technostres - artykul naukowy', file: 'wiki/psychologia_technologii/technostres.md' },
        { id: 'psychologia_technologii/zmeczenie_cyfrowe', label: 'Zmeczenie cyfrowe i przeciazenie informacyjne', file: 'wiki/psychologia_technologii/zmeczenie_cyfrowe.md' },
        { id: 'psychologia_technologii/fomo_i_nomofobia', label: 'FOMO i nomofobia', file: 'wiki/psychologia_technologii/fomo_i_nomofobia.md' },
        { id: 'psychologia_technologii/algorytmy_a_samoocena', label: 'Algorytmy personalizacji, a samoocena', file: 'wiki/psychologia_technologii/algorytmy_a_samoocena.md' },
        { id: 'psychologia_technologii/higiena_cyfrowa', label: 'Higiena cyfrowa i profilaktyka przeciazenia', file: 'wiki/psychologia_technologii/higiena_cyfrowa.md' },
        { id: 'psychologia_technologii/technologia_w_pracy', label: 'Technologia w pracy: granice, kontrola i autonomia', file: 'wiki/psychologia_technologii/technologia_w_pracy.md' },
        { id: 'psychologia_technologii/technologia_a_sen', label: 'Technologia, a sen i regeneracja psychiczna', file: 'wiki/psychologia_technologii/technologia_a_sen.md' },
        { id: 'psychologia_technologii/psychoedukacja_rodzinna', label: 'Psychoedukacja rodzinna w erze ekranów', file: 'wiki/psychologia_technologii/psychoedukacja_rodzinna.md' },
        { id: 'psychologia_technologii/zdrada_technologii', label: 'Zdrada technologii', file: 'wiki/psychologia_technologii/zdrada_technologii.md' },
        { id: 'dla_studentow/psycholog_w_it', label: 'Psycholog w IT', file: 'wiki/dla_studentow/psycholog_w_it.md' },
        { id: 'dla_studentow/psycholog_w_it_kompetencje_mierniki_i_portfolio', label: 'Psycholog w IT - kompetencje, mierniki i portfolio', file: 'wiki/dla_studentow/psycholog_w_it_kompetencje_mierniki_i_portfolio.md' },
      ]
    },
    { /* Seminarium dyplomowe */
      section: 'Seminarium dyplomowe',
      domainKey: 'seminarium_dyplomowe',
      items: [
        { id: 'seminarium_dyplomowe/wprowadzenie',             label: 'Seminarium dyplomowe',    file: 'wiki/seminarium_dyplomowe/wprowadzenie.md'             },
        { id: 'seminarium_dyplomowe/struktura_pracy',          label: 'Struktura pracy magisterskiej',          file: 'wiki/seminarium_dyplomowe/struktura_pracy.md'          },
        { id: 'seminarium_dyplomowe/przeglad_literatury',      label: 'Przegląd literatury naukowej',           file: 'wiki/seminarium_dyplomowe/przeglad_literatury.md'      },
        { id: 'seminarium_dyplomowe/metodologia_badan',        label: 'Metodologia badań psychologicznych',     file: 'wiki/seminarium_dyplomowe/metodologia_badan.md'        },
        { id: 'seminarium_dyplomowe/pomiary_psychologiczne',   label: 'Zasady prowadzenia pomiarów',            file: 'wiki/seminarium_dyplomowe/pomiary_psychologiczne.md'   },
        { id: 'seminarium_dyplomowe/narzedzia_badawcze',       label: 'Narzedzia badawcze i kwestionariusze',  file: 'wiki/seminarium_dyplomowe/narzedzia_badawcze.md'       },
        { id: 'seminarium_dyplomowe/analizy_statystyczne',     label: 'Analizy statystyczne',                  file: 'wiki/seminarium_dyplomowe/analizy_statystyczne.md'     },
        { id: 'seminarium_dyplomowe/bledy_badawcze',           label: 'Błędy badawcze - czego unikac',         file: 'wiki/seminarium_dyplomowe/bledy_badawcze.md'           },
        { id: 'seminarium_dyplomowe/opis_wynikow',             label: 'Pisanie i interpretacja wyników',       file: 'wiki/seminarium_dyplomowe/opis_wynikow.md'             },
        { id: 'seminarium_dyplomowe/obrona_pracy',             label: 'Obrona pracy magisterskiej',            file: 'wiki/seminarium_dyplomowe/obrona_pracy.md'             },
        { id: 'seminarium_dyplomowe/dobre_praktyki',           label: 'Dobre praktyki w pisaniu pracy',        file: 'wiki/seminarium_dyplomowe/dobre_praktyki.md'           },
        { id: 'dla_studentow/wystapienia_publiczne_autoprezentacja', label: 'Wystapienia publiczne i autoprezentacja', file: 'wiki/dla_studentow/wystapienia_publiczne_autoprezentacja.md' },
        { id: 'dla_studentow/wystapienia_publiczne_trudne_pytania_i_q_a', label: 'Wystapienia publiczne - trudne pytania i Q&A', file: 'wiki/dla_studentow/wystapienia_publiczne_trudne_pytania_i_q_a.md' },
      ]
    },
    { /* Eksperyment psychologiczny */
      section: 'Eksperyment psychologiczny',
      domainKey: 'eksperyment_psychologiczny',
      items: [
        { id: 'eksperyment_psychologiczny/wprowadzenie',              label: 'Wprowadzenie do metod eksperymentalnych',   file: 'wiki/eksperyment_psychologiczny/wprowadzenie.md'              },
        { id: 'eksperyment_psychologiczny/problemy_i_hipotezy',       label: 'Problem badawczy i hipotezy',                file: 'wiki/eksperyment_psychologiczny/problemy_i_hipotezy.md'       },
        { id: 'eksperyment_psychologiczny/operacjonalizacja',         label: 'Operacjonalizacja zmiennych',                file: 'wiki/eksperyment_psychologiczny/operacjonalizacja.md'         },
        { id: 'eksperyment_psychologiczny/proby_i_rekrutacja',        label: 'Dobór próby i rekrutacja',                   file: 'wiki/eksperyment_psychologiczny/proby_i_rekrutacja.md'        },
        { id: 'eksperyment_psychologiczny/etyka_i_zgoda',             label: 'Etyka badania i swiadoma zgoda',             file: 'wiki/eksperyment_psychologiczny/etyka_i_zgoda.md'             },
        { id: 'eksperyment_psychologiczny/obserwacja_psychologiczna', label: 'Obserwacja jako metoda badawcza',           file: 'wiki/eksperyment_psychologiczny/obserwacja_psychologiczna.md' },
        { id: 'eksperyment_psychologiczny/protokol_i_pilotaz',        label: 'Protokół badania i pilotaż',                 file: 'wiki/eksperyment_psychologiczny/protokol_i_pilotaz.md'        },
        { id: 'eksperyment_psychologiczny/prowadzenie_eksperymentu',  label: 'Prowadzenie sesji eksperymentalnej',         file: 'wiki/eksperyment_psychologiczny/prowadzenie_eksperymentu.md'  },
        { id: 'eksperyment_psychologiczny/jakosc_danych',             label: 'Kontrola jakosci i zarzadzanie danymi',      file: 'wiki/eksperyment_psychologiczny/jakosc_danych.md'             },
        { id: 'eksperyment_psychologiczny/analiza_i_wnioskowanie',    label: 'Analiza danych i wnioskowanie',              file: 'wiki/eksperyment_psychologiczny/analiza_i_wnioskowanie.md'    },
        { id: 'eksperyment_psychologiczny/replikacja_i_otwarta_nauka',label: 'Replikacja i otwarta nauka',                 file: 'wiki/eksperyment_psychologiczny/replikacja_i_otwarta_nauka.md'},
        { id: 'eksperyment_psychologiczny/raportowanie_wynikow',      label: 'Raportowanie wyników i ograniczeń',          file: 'wiki/eksperyment_psychologiczny/raportowanie_wynikow.md'      },
      ]
    },
    { /* Psychologia kliniczna dzieci i młodzieży */
      section: 'Psychologia kliniczna dzieci i młodzieży',
      domainKey: 'psychologia_kliniczna_dziecka',
      items: [
        { id: 'psychologia_kliniczna_dziecka/czym_jest_psychologia_kliniczna_dziecka', label: 'Psychologia kliniczna dzieci i młodzieży', file: 'wiki/psychologia_kliniczna_dziecka/czym_jest_psychologia_kliniczna_dziecka.md', aliases: ['psychologia kliniczna dziecka', 'psychologia kliniczna dzieci'] },
      ]
    },
    { /* Reagowanie na krytykę */
      section: 'Reagowanie na krytykę',
      domainKey: 'reagowanie_na_krytyke',
      items: [
        { id: 'reagowanie_na_krytyke/jak_nie_brac_do_siebie_opinii_innych', label: 'Jak konstruktywnie reagować na krytykę i informację zwrotną', file: 'wiki/reagowanie_na_krytyke/jak_nie_brac_do_siebie_opinii_innych.md' },
      ]
    },
    { /* Psychologia nadmiernego jedzenia */
      section: 'Psychologia nadmiernego jedzenia',
      domainKey: 'psychologia_nadmiernego_jedzenia',
      items: [
        { id: 'psychologia_nadmiernego_jedzenia/czym_jest_nadmierne_jedzenie', label: 'Nadmierne jedzenie i jedzenie kompulsywne', file: 'wiki/psychologia_nadmiernego_jedzenia/czym_jest_nadmierne_jedzenie.md' },
      ]
    },
    { /* Instytucje pomocy dziecku i rodzinie */
      section: 'Instytucje pomocy dziecku i rodzinie',
      domainKey: 'instytucje_wsparcia_dziecka_i_rodziny',
      items: [
        { id: 'instytucje_wsparcia_dziecka_i_rodziny/system_wsparcia_dziecka_i_rodziny', label: 'System wsparcia dziecka i rodziny', file: 'wiki/instytucje_wsparcia_dziecka_i_rodziny/system_wsparcia_dziecka_i_rodziny.md' },
      ]
    },
    { /* Resocjalizacja */
      section: 'Resocjalizacja',
      domainKey: 'resocjalizacja',
      items: [
        { id: 'resocjalizacja/podstawy_resocjalizacji', label: 'Resocjalizacja, readaptacja i zaprzestawanie przestępczości', file: 'wiki/resocjalizacja/podstawy_resocjalizacji.md' },
      ]
    },
    { /* Somatic Experiencing */
      section: 'Somatic Experiencing',
      domainKey: 'somatic_experiencing',
      items: [
        { id: 'somatic_experiencing/wprowadzenie_do_doswiadczenia_somatycznego', label: 'Somatic Experiencing: założenia, praktyka i stan badań', file: 'wiki/doswiadczenie_somatyczne/wprowadzenie_do_doswiadczenia_somatycznego.md' },
      ]
    },
    { /* Systemy rodzinne */
      section: 'Systemy rodzinne',
      domainKey: 'systemy_rodzinne',
      items: [
        { id: 'systemy_rodzinne/wprowadzenie_do_terapii_systemowej', label: 'Systemowe rozumienie rodziny', file: 'wiki/systemy_rodzinne/wprowadzenie_do_terapii_systemowej.md' },
        { id: 'systemy_rodzinne/terapia_systemow_wewnetrznej_rodziny_ifs', label: 'Terapia systemów wewnętrznej rodziny (IFS)', file: 'wiki/systemy_rodzinne/terapia_systemow_wewnetrznej_rodziny_ifs.md' },
      ]
    },
    
    { /* Encyklopedie */
      section: 'Encyklopedie',
      domainKey: 'wiki-index',
      items: [
        { id: 'wiki-index/neuropsychologia',     label: 'WIKI - Neuropsychologia',                   wiki: 'neuropsychologia'     },
        { id: 'wiki-index/kliniczna',            label: 'WIKI - Psych. kliniczna',                   wiki: 'kliniczna'            },
        { id: 'wiki-index/poznawcza',            label: 'WIKI - Psych. poznawcza',                   wiki: 'poznawcza'            },
        { id: 'wiki-index/spoleczna',            label: 'WIKI - Psych. spoleczna',                   wiki: 'spoleczna'            },
        { id: 'wiki-index/kulturowa',            label: 'WIKI - Psych. kulturowa',                   wiki: 'kulturowa'            },
        { id: 'wiki-index/rozwojowa',            label: 'WIKI - Psych. rozwojowa',                   wiki: 'rozwojowa'            },
        { id: 'wiki-index/uzaleznienia',         label: 'WIKI - Uzaleznienia',                       wiki: 'uzaleznienia'         },
        { id: 'wiki-index/relacje',              label: 'WIKI - Relacje i związki',                  wiki: 'relacje'              },
        { id: 'wiki-index/diagnoza',             label: 'WIKI - Diagnoza psychologiczna',            wiki: 'diagnoza'             },
        { id: 'wiki-index/biologia',             label: 'WIKI - Biologia zachowania',                wiki: 'biologia'             },
        { id: 'wiki-index/roznice_ind',          label: 'WIKI - Różnice indywidualne',               wiki: 'roznice_ind'          },
        { id: 'wiki-index/terapie_artystyczne',  label: 'WIKI - Terapie artystyczne',                wiki: 'terapie_artystyczne'  },
        { id: 'wiki-index/etyka',                label: 'WIKI - Etyka zawodowa',                     wiki: 'etyka'                },
        { id: 'wiki-index/slownik',              label: 'WIKI - Slownik terminow',                   wiki: 'slownik'              },
        { id: 'wiki-index/zdrowie',              label: 'WIKI - Psych. zdrowia',                     wiki: 'zdrowie'              },
        { id: 'wiki-index/psychosomatics',       label: 'WIKI - Psychosomatyka',                     wiki: 'psychosomatyka'       },
        { id: 'wiki-index/niepelnosprawnosc',    label: 'WIKI - Psych. niepelnosprawnosci',          wiki: 'niepelnosprawnosc'    },
        { id: 'wiki-index/geropsychology',       label: 'WIKI - Psych. osob starszych',              wiki: 'geropsychologia'       },
        { id: 'wiki-index/gry_wideo',            label: 'WIKI - Psych. gier wideo',                  wiki: 'gry_wideo'            },
        { id: 'wiki-index/odpornosc_mobbing',    label: 'WIKI - Odpornosc, mobbing, wypalenie',      wiki: 'odpornosc_mobbing'    },
        { id: 'wiki-index/media_natura',         label: 'WIKI - Ekrany, ksiazki i naturą',           wiki: 'media_natura'         },
        { id: 'wiki-index/psych_pozytywna',      label: 'WIKI - Psychologia pozytywna',              wiki: 'psych_pozytywna'      },
        { id: 'wiki-index/psych_ai',             label: 'WIKI - Psychologia AI',                     wiki: 'psych_ai'             },
        { id: 'wiki-index/psychologia_technologii', label: 'WIKI - Psychologia technologii',         wiki: 'psychologia_technologii' },
        { id: 'wiki-index/robotyka_afektywna',   label: 'WIKI - Robotyka afektywna',                 wiki: 'robotyka_afektywna'   },
        { id: 'wiki-index/psych_szkolna',        label: 'WIKI - Psych. szkolna i edukacyjna',        wiki: 'psych_szkolna'        },
        { id: 'wiki-index/neurozroznorodnosc',   label: 'WIKI - Neuroroznorodnosc',                  wiki: 'neurozroznorodnosc'   },
        { id: 'wiki-index/psych_sadowa',         label: 'WIKI - Psychologia sadowa',                 wiki: 'psych_sadowa'         },
        { id: 'wiki-index/e_terapia',            label: 'WIKI - E-terapia',                          wiki: 'e_terapia'            },
        { id: 'wiki-index/filozofia',            label: 'WIKI - Filozofia',                          wiki: 'filozofia'            },
        { id: 'wiki-index/nvc',                  label: 'WIKI - Porozumiewanie sie bez przemocy',    wiki: 'porozumiewanie_sie_bez_przemocy'                  },
        { id: 'wiki-index/seminarium_dyplomowe', label: 'WIKI - Seminarium dyplomowe',               wiki: 'seminarium_dyplomowe' },
        { id: 'wiki-index/podstawy_pomocy',      label: 'WIKI - Podstawy pomocy psychologicznej',    wiki: 'podstawy_pomocy'      },
        { id: 'wiki-index/dodatkowe_strony',     label: 'Dodatkowe strony',                          wiki: 'dodatkowe_strony'     },
        { id: 'wiki-index/instrukcje_lab_pdf',   label: 'WIKI - Instrukcje laboratoryjne PDF',       wiki: 'instrukcje_lab_pdf'   },
      ]
    },
    { /* Referencje */
      section: 'Referencje',
      domainKey: 'reference',
      // Pliki stricte developerskie (np. testy parsera/TOC i standardy redakcyjne)
      // celowo pozostaja poza menu publicznym:
      // - wiki/reference/standard_przypisow.md
      // - wiki/reference/listy_wielopoziomowe.md
      // - wiki/reference/katalog_narzedzi_zasady.md
      // - wiki/reference/toc_dlugi_artykul.md
      items: [
        { id: 'reference/zakres',             label: 'Zakres wiedzy',                      file: 'wiki/reference/zakres.md'             },
        { id: 'reference/literatura',         label: 'Literatura',                         file: 'wiki/reference/literatura.md'         },
        { id: 'reference/bibliografia_portalu', label: 'Bibliografia portalu',             file: 'wiki/reference/bibliografia_portalu.md' },
        { id: 'reference/skale_i_akronimy',   label: 'Skale i akronimy diagnostyczne',    file: 'wiki/reference/skale_i_akronimy.md'   },
        { id: 'reference/przepisy_zawod',     label: 'Przepisy i zasady pracy psychologa', file: 'wiki/reference/przepisy_zawod.md'     },
        { id: 'reference/mapa_powiazan_nowe_artykuly', label: 'Mapa powiazal nowych artykulow', file: 'wiki/reference/mapa_powiazan_nowe_artykuly.md' },
        {
          id: 'reference/article_template',
          label: 'Zalecany wzorzec artykułu',
          aliases: ['wzorzec artykułu', 'schemat artykułu', 'szablon artykułu'],
          file: 'wiki/reference/article_template.md'
        },
      ]
    },
  ],

  // 
  //  PLANY ARTYKUŁÓW PER DZIAŁ
  //  Uzywane przez strony dzialu jako lista zaplanowanych prac.
  //  Klucz = id dzialu z nav (pierwsza czesc przed "/")
  // 
  plans: {
    // Domeny ponizej sa aktualnie sekcjami nawigacji bez szczegolowych planow.
    // Zachowujemy puste tablice, aby walidator konfiguracji byl spojny z nav.
    students: [
      { id: 'dla_studentow/wybor_specjalnosci', label: 'Wybor specjalnosci', file: 'wiki/dla_studentow/wybor_specjalnosci.md', status: 'live' },
      { id: 'dla_studentow/sciezki_kariery', label: 'laciezki kariery po psychologii', file: 'wiki/dla_studentow/sciezki_kariery.md', status: 'live' },
      { id: 'dla_studentow/wystapienia_publiczne_autoprezentacja', label: 'Wystapienia publiczne i autoprezentacja', file: 'wiki/dla_studentow/wystapienia_publiczne_autoprezentacja.md', status: 'live' },
      { id: 'dla_studentow/psycholog_w_it', label: 'Psycholog w IT', file: 'wiki/dla_studentow/psycholog_w_it.md', status: 'live' },
      { id: 'dla_studentow/test_specjalnosci', label: 'Test wyboru specjalności' },
      { id: 'dla_studentow/etyka_studenta', label: 'Etyka studenta psychologii', file: 'wiki/dla_studentow/etyka_studenta.md', status: 'live' },
      { id: 'dla_studentow/psychologia_codziennej', label: 'Psychologia codzienna' },
      { id: 'dla_studentow/testy_teoretyczne', label: 'Testy teoretyczne' },
      { id: 'dla_studentow/winietki_kliniczne', label: 'Winietki kliniczne' },
      { id: 'dla_studentow/testy_dyplomowe', label: 'Testy dyplomowe' },
    ],
    psychologia_religii: [
      { id: 'psychologia_religii/religijnosc_i_duchowosc', label: 'Religijność, duchowość i rozwój', file: 'wiki/psychologia_religii/religijnosc_i_duchowosc.md', status: 'live' },
      { id: 'psychologia_religii/religia_a_zdrowie_psychiczne', label: 'Religia, zdrowie psychiczne i radzenie sobie', file: 'wiki/psychologia_religii/religia_a_zdrowie_psychiczne.md', status: 'live' },
      { id: 'psychologia_religii/doswiadczenia_religijne_w_praktyce_klinicznej', label: 'Doświadczenia religijne w praktyce klinicznej', file: 'wiki/psychologia_religii/doswiadczenia_religijne_w_praktyce_klinicznej.md', status: 'live' },
      { id: 'psychologia_religii/metodologia_badan', label: 'Metodologia badań nad religią i moralnością', file: 'wiki/psychologia_religii/metodologia_badan.md', status: 'live' },
    ],
    child_clinical_intro: [
      { id: 'psychologia_kliniczna_dziecka/czym_jest_psychologia_kliniczna_dziecka', label: 'Psychologia kliniczna dzieci i młodzieży', file: 'wiki/psychologia_kliniczna_dziecka/czym_jest_psychologia_kliniczna_dziecka.md', status: 'live', aliases: ['psychologia kliniczna dziecka', 'psychologia kliniczna dzieci'] },
    ],
    reacting_to_criticism: [
      { id: 'reagowanie_na_krytyke/jak_nie_brac_do_siebie_opinii_innych', label: 'Jak konstruktywnie reagować na krytykę i informację zwrotną', file: 'wiki/reagowanie_na_krytyke/jak_nie_brac_do_siebie_opinii_innych.md', status: 'live' },
    ],
    overeating_psychology: [
      { id: 'psychologia_nadmiernego_jedzenia/czym_jest_nadmierne_jedzenie', label: 'Nadmierne jedzenie i jedzenie kompulsywne', file: 'wiki/psychologia_nadmiernego_jedzenia/czym_jest_nadmierne_jedzenie.md', status: 'live' },
    ],
    child_family_support_institutions: [
      { id: 'instytucje_wsparcia_dziecka_i_rodziny/system_wsparcia_dziecka_i_rodziny', label: 'System wsparcia dziecka i rodziny', file: 'wiki/instytucje_wsparcia_dziecka_i_rodziny/system_wsparcia_dziecka_i_rodziny.md', status: 'live' },
    ],
    resocialization: [
      { id: 'resocjalizacja/podstawy_resocjalizacji', label: 'Resocjalizacja, readaptacja i zaprzestawanie przestępczości', file: 'wiki/resocjalizacja/podstawy_resocjalizacji.md', status: 'live' },
    ],
    'wiki-index': [],
    neuro: [
      { file: 'wiki/neuropsychologia/podstawy_neurologii.md', label: 'Podstawy układu nerwowego', status: 'live' },
      { file: 'wiki/neuropsychologia/anatomia.md', label: 'Funkcjonalna anatomia mózgu', status: 'live' },
      { file: 'wiki/neuropsychologia/neuronauka_poznawcza.md', label: 'Metody neuronauki poznawczej', status: 'live' },
      { file: 'wiki/neuropsychologia/plastycznosc.md', label: 'Rozwój, plastyczność i zmienność mózgu', status: 'live' },
      { file: 'wiki/neuropsychologia/rehabilitacja_neuropsychologiczna.md', label: 'Diagnoza i rehabilitacja neuropsychologiczna', status: 'live' },
    ],
    cognitive: [
      { file: 'wiki/psychologia_poznawcza/percepcja.md', label: 'Percepcja i uwaga', status: 'live' },
      { file: 'wiki/psychologia_poznawcza/pamiec.md', label: 'Pamięć i uczenie się', status: 'live' },
      { file: 'wiki/psychologia_poznawcza/funkcje_wykonawcze.md', label: 'Funkcje wykonawcze i obciążenie poznawcze', status: 'live' },
      { file: 'wiki/psychologia_poznawcza/myslenie.md', label: 'Myślenie i podejmowanie decyzji', status: 'live' },
      { file: 'wiki/psychologia_poznawcza/jezyk.md', label: 'Język, narracja i wyobraźnia', status: 'live' },
      { file: 'wiki/psychologia_poznawcza/swiadomosc.md', label: 'Świadomość, ucieleśnienie i predykcja', status: 'live' },
      { file: 'wiki/psychologia_poznawcza/nauki_kognitywne.md', label: 'Nauki kognitywne i architektury poznawcze', status: 'live' },
    ],
    spoleczna: [
      { file: 'wiki/psychologia_spoleczna/ja_i_samoocena.md', label: 'Ja, samoocena i tożsamość społeczna', status: 'live' },
      { file: 'wiki/psychologia_spoleczna/percepcja_spoleczna.md', label: 'Percepcja społeczna, postawy i atrybucje', status: 'live' },
      { file: 'wiki/psychologia_spoleczna/wplyw_spoleczny_perswazja_i_posluszenstwo.md', label: 'Wpływ społeczny, perswazja i posłuszeństwo', status: 'live' },
      { file: 'wiki/psychologia_spoleczna/grupy_relacje_i_wspolpraca.md', label: 'Grupy, relacje i współpraca', status: 'live' },
      { file: 'wiki/psychologia_spoleczna/agresja_uprzedzenia_i_przemoc_spoleczna.md', label: 'Agresja, uprzedzenia i przemoc społeczna', status: 'live' },
    ],
    disorders: [
      { file: 'wiki/zaburzenia/afazje.md',    label: 'Afazje',                 status: 'live' },
      { file: 'wiki/zaburzenia/amnezje.md',   label: 'Amnezje',                status: 'live' },
      { file: 'wiki/zaburzenia/otepienia.md', label: 'Otepienia',              status: 'live' },
      { file: 'wiki/zaburzenia/tbi.md',       label: 'Urazy glowy (TBI)',      status: 'live' },
      { file: 'wiki/zaburzenia/apraksja.md',  label: 'Apraksja',               status: 'live' },
      { file: 'wiki/zaburzenia/agnozja.md',   label: 'Agnozja wzrokowa',       status: 'live' },
      { file: 'wiki/zaburzenia/neglect.md',   label: 'Neglect przestrzenny',   status: 'live' },
      { file: 'wiki/neuroroznorodnosc/adhd.md', label: 'ADHD', status: 'live' },
    ],
    tests: [
      { file: 'wiki/testy/testy_przeglad.md',   label: 'Testy - przeglad',      status: 'live' },
      { file: 'wiki/testy/mmse_moca.md',        label: 'MMSE i MoCA',           status: 'live' },
      { file: 'wiki/testy/testy_wykonawcze.md', label: 'Testy funkcji wyk.',    status: 'live' },
      { file: 'wiki/testy/testy_pamieci.md',    label: 'Testy pamieci',         status: 'live' },
      { file: 'wiki/testy/testy_uwagi.md',      label: 'Testy uwagi',           status: 'live' },
      { file: 'wiki/testy/testy_jezyka.md',     label: 'Testy jezykowe',        status: 'live' },
      { file: 'wiki/testy/wais.md',             label: 'Skale Wechslera (WAIS/WISC)', status: 'live' },
      { file: 'wiki/testy/wisc_v.md',           label: 'WISC-V - opis testu',         status: 'live' },
      { file: 'wiki/testy/neuropsych_battery.md',label: 'Baterie neuropsychologiczne', status: 'live' },
      { file: 'wiki/testy/rdoc.md',              label: 'Model RDoC',                  status: 'live' },
      { file: 'wiki/testy/scid_v.md',            label: 'SCID-5 / SCID-V',             status: 'live' },
    ],
    psychometrics: [
      { file: 'wiki/psychometria/psychometria_wprowadzenie.md', label: 'Podstawy pomiaru psychologicznego', status: 'live' },
      { file: 'wiki/psychometria/modele_psychometryczne_i_struktura_testu.md', label: 'Modele psychometryczne i struktura testu', status: 'live' },
      { file: 'wiki/psychometria/narzedzia_kliniczne.md', label: 'Narzędzia przesiewowe i kliniczne', status: 'live' },
      { file: 'wiki/psychometria/narzedzia_diagnozy_neurorozwojowej.md', label: 'Narzędzia diagnozy neurorozwojowej', status: 'live' },
      { file: 'wiki/psychometria/testy_osobowosci_i_zdolnosci.md', label: 'Testy osobowości i zdolności', status: 'live' },
    ],
    pharmacology: [
      { file: 'wiki/farmakologia/neurofarmakologia.md',   label: 'Neurofarmakologia',           status: 'live' },
      { file: 'wiki/psychofarmakologia/klasy_lekow_psychotropowych.md', label: 'Główne klasy leków psychotropowych', status: 'live' },
      { file: 'wiki/psychofarmakologia/11_leki_w_terapii_uzaleznien.md',   label: 'Farmakoterapia uzależnień',   status: 'live' },
      { file: 'wiki/farmakologia/psychodeliki.md',        label: 'Psychodeliki w terapii',      status: 'live' },
    ],
    individual_diffs: [
      { file: 'wiki/roznice_indywidualne/roznice_wprowadzenie.md', label: 'Roznice ind.',       status: 'live' },
      { file: 'wiki/roznice_indywidualne/inteligencja.md',  label: 'Inteligencja',              status: 'live' },
      { file: 'wiki/roznice_indywidualne/osobowosc.md',     label: 'Osobowosc (Wielka Piatka)', status: 'live' },
      { file: 'wiki/roznice_indywidualne/kreatywnosc.md',   label: 'Kreatywnosc',               status: 'live' },
      { file: 'wiki/roznice_indywidualne/genetyka.md',      label: 'Uwarunkowania genetyczne',  status: 'live' },
      { file: 'wiki/roznice_indywidualne/style_poznawcze.md',label: 'Style poznawcze',          status: 'live' },
      { file: 'wiki/roznice_indywidualne/reiss_motivation_profile.md', label: 'Reiss Motivation Profile', status: 'live' },
      { file: 'wiki/roznice_indywidualne/plec_psychologia.md', label: 'Psychologia plci',       status: 'live' },
      { file: 'wiki/roznice_indywidualne/ciemna_triada.md',   label: 'Ciemna Triada',           status: 'live' },
    ],
    podstawy_pomocy: [
      { file: 'wiki/podstawy_pomocy/wprowadzenie.md',                  label: 'Pomoc psychologiczna',                status: 'live' },
      { file: 'wiki/podstawy_pomocy/relacja_pomocowa.md',              label: 'Relacja pomocowa',                    status: 'live' },
      { file: 'wiki/podstawy_pomocy/aktywne_sluchanie.md',             label: 'Aktywne sluchanie',                   status: 'live' },
      { file: 'wiki/emocje/wspolczucie.md',                            label: 'Empatia w relacji pomocowej',         status: 'xlink' },
      { file: 'wiki/podstawy_pomocy/granice_w_pomocy.md',              label: 'Granice w relacji pomocowej',         status: 'live' },
      { file: 'wiki/podstawy_pomocy/kryzys_psychologiczny.md',         label: 'Kryzys psychologiczny i interwencja', status: 'live' },
      { file: 'wiki/podstawy_pomocy/pierwsza_pomoc_psychologiczna.md', label: 'Pierwsza pomoc psychologiczna',       status: 'live' },
      { file: 'wiki/podstawy_pomocy/modele_pomocy.md',                 label: 'Modele pomocy psychologicznej',       status: 'live' },
      { file: 'wiki/podstawy_pomocy/komunikacja_wspierajaca.md',       label: 'Komunikacja wspierajaca',             status: 'live' },
      { file: 'wiki/podstawy_pomocy/wsparcie_spoleczne.md',            label: 'Wsparcie społeczne',                  status: 'live' },
      { file: 'wiki/podstawy_pomocy/samoopieka_pomagajacego.md',       label: 'Samoopieka pomagajacego',             status: 'live' },
      { file: 'wiki/podstawy_pomocy/etyka_pomocy.md',                  label: 'Etyka pomocy psychologicznej',        status: 'live' },
    ],
    temperament: [
      { file: 'wiki/temperament/temperament_wprowadzenie.md', label: 'Temperament',                          status: 'live' },
      { file: 'wiki/temperament/modele.md',                   label: 'Modele temperamentu',                  status: 'live' },
      { file: 'wiki/temperament/pomiar.md',                   label: 'Pomiar temperamentu',                  status: 'live' },
      { file: 'wiki/temperament/kliniczne.md',                label: 'Temperament w klinice',                status: 'live' },
      { file: 'wiki/temperament/rozwoj.md',                   label: 'Temperament, a Rozwoj',                status: 'live' },
      { file: 'wiki/temperament/strelau.md',                  label: 'RTT - teoria Strelaua',                status: 'live' },
      { file: 'wiki/temperament/eysenck.md',                  label: 'Model Eysencka (PEN)',                 status: 'live' },
      { file: 'wiki/temperament/gray.md',                     label: 'Teoria BIS/BAS Graya',                 status: 'live' },
      { file: 'wiki/temperament/kagan.md',                    label: 'Zahamowanie behawioralne (Kagan)',     status: 'live' },
      { file: 'wiki/temperament/temperament_a_psychopat.md',  label: 'Temperament, a psychopatologia',       status: 'live' },
      { file: 'wiki/temperament/biologia_temperamentu.md',    label: 'Biologiczne podloze temperamentu',     status: 'live' },
      { file: 'wiki/temperament/temperament_a_kariera.md',    label: 'Temperament, a kariera i praca',       status: 'live' },
    ],
    emotions: [
      { file: 'wiki/emocje/emocje_wprowadzenie.md', label: 'Emocje',           status: 'live' },
      { file: 'wiki/emocje/teorie_emocji.md',       label: 'Teorie emocji',           status: 'live' },
      { file: 'wiki/emocje/regulacja.md',    label: 'Regulacja emocjonalna',   status: 'live' },
      { file: 'wiki/emocje/motywacja.md',    label: 'Motywacja',               status: 'live' },
      { file: 'wiki/emocje/neurobiologia.md',label: 'Neurobiologia emocji',    status: 'live' },
      { file: 'wiki/emocje/wspolczucie.md',  label: 'Empatia i współczucie',   status: 'live' },
      { file: 'wiki/emocje/aleksytymia.md',  label: 'Aleksytymia',             status: 'live' },
      { file: 'wiki/emocje/inteligencja_emocjonalna.md', label: 'Inteligencja emocjonalna',         status: 'live' },
      { file: 'wiki/emocje/stres_emocje.md',             label: 'Stres a procesy emocjonalne',      status: 'live' },
      { file: 'wiki/emocje/pozytywne_emocje.md',         label: 'Pozytywne emocje i broaden-build', status: 'live' },
      { file: 'wiki/emocje/wstyd_wina.md',               label: 'Wstyd i wina',                     status: 'live' },
      { file: 'wiki/emocje/emocje_spoleczne.md',         label: 'Emocje społeczne i moralne',       status: 'live' },
    ],
    biology: [
      { file: 'wiki/biologia/biologiczne_podstawy.md', label: 'Biologiczne podstawy - wprow.', status: 'live' },
      { file: 'wiki/biologia/genetyka_beh.md',    label: 'Genetyka behawioralna',      status: 'live' },
      { file: 'wiki/biologia/transmisja_genetyczna_zaburzen_psychicznych.md', label: 'Transmisja genetyczna zaburzeń psychicznych', status: 'live' },
      { file: 'wiki/biologia/epigenetyka.md',    label: 'Epigenetyka',                status: 'live' },
      { file: 'wiki/biologia/hormony.md',          label: 'Hormony i zachowanie',       status: 'live' },
      { file: 'wiki/biologia/ewolucja.md',         label: 'Ewolucja i psychologia ewol.',status: 'live' },
      { file: 'wiki/biologia/psychofizjologia.md', label: 'Psychofizjologia',           status: 'live' },
      { file: 'wiki/biologia/chronobiologia.md',   label: 'Chronobiologia i sen',       status: 'live' },
      { file: 'wiki/biologia/chronopsychologia.md', label: 'Chronopsychologia',          status: 'live' },
      { file: 'wiki/biologia/mikrobiom.md',        label: 'Oś jelita-mózg',            status: 'live' },
    ],
    psychotherapy: [
      { file: 'wiki/psychoterapia/psychoterapia_wprowadzenie.md', label: 'Podstawy, skuteczność i czynniki wspólne', status: 'live' },
      { file: 'wiki/psychoterapia/cbt.md', label: 'Terapie poznawcze i behawioralne', status: 'live' },
      { file: 'wiki/psychoterapia/act.md', label: 'ACT i terapie kontekstualne', status: 'live' },
      { file: 'wiki/psychoterapia/dbt.md', label: 'Terapia dialektyczno-behawioralna (DBT)', status: 'live' },
      { file: 'wiki/psychoterapia/podejscia_psychodynamiczne_i_humanistyczne.md', label: 'Podejścia psychodynamiczne i humanistyczne', status: 'live' },
      { file: 'wiki/psychoterapia/emdr.md', label: 'Psychoterapia traumy i EMDR', status: 'live' },
      { file: 'wiki/psychoterapia/interwencje_relacyjne_i_niestandardowe.md', label: 'Interwencje relacyjne i niestandardowe', status: 'live' },
    ],
    psychopathology: [
      { file: 'wiki/psychopatologia/psychopatologia_wprowadzenie.md', label: 'Podstawy psychopatologii', status: 'live' },
      { file: 'wiki/psychopatologia/zaburzenia_nastroju.md', label: 'Zaburzenia nastroju', status: 'live' },
      { file: 'wiki/psychopatologia/zaburzenia_lekowe_i_obsesyjno_kompulsyjne.md', label: 'Zaburzenia lękowe i OCD', status: 'live' },
      { file: 'wiki/psychopatologia/psychozy.md', label: 'Psychozy', status: 'live' },
      { file: 'wiki/psychopatologia/trauma_ptsd.md', label: 'Trauma, dysocjacja i wiktymizacja', status: 'live' },
      { file: 'wiki/psychopatologia/zaburzenia_osobowosci.md', label: 'Osobowość, psychopatia i socjopatia', status: 'live' },
      { file: 'wiki/psychopatologia/zaburzenia_odzywiania_i_uzaleznienia.md', label: 'Zaburzenia odżywiania i uzależnienia', status: 'live' },
      { file: 'wiki/diagnoza/formulowanie_przypadku.md', label: 'Formułowanie przypadku', status: 'xlink' },
    ],
    suicidology: [
      { file: 'wiki/suicydologia/suicydologia_wprowadzenie.md', label: 'Suicydologia', status: 'live' },
      { file: 'wiki/suicydologia/epidemiologia.md',  label: 'Epidemiologia',              status: 'live' },
      { file: 'wiki/suicydologia/modele_suicydologiczne.md',         label: 'Modele suicydologiczne',       status: 'live' },
      { file: 'wiki/suicydologia/ocena_ryzyka.md',   label: 'Ocena ryzyka (C-SSRS)',      status: 'live' },
      { file: 'wiki/suicydologia/interwencja.md',    label: 'Interwencja kryzysowa',      status: 'live' },
      { file: 'wiki/suicydologia/profilaktyka.md',   label: 'Profilaktyka zachowań samobójczych',   status: 'live' },
      { file: 'wiki/suicydologia/nssi.md',           label: 'Samookaleczenia (NSSI)',     status: 'live' },
      { file: 'wiki/suicydologia/postvention.md',    label: 'Postvention',                status: 'live' },
      { file: 'wiki/suicydologia/media.md',          label: 'Efekt Wertera i Papageno',   status: 'live' },
    ],
    sexology: [
      { file: 'wiki/seksuologia/seksuologia_wprowadzenie.md', label: 'Psychologia seksualności w cyklu życia', status: 'live' },
      { file: 'wiki/seksuologia/orientacja_seksualna_i_tozsamosc_plciowa.md', label: 'Orientacja seksualna i tożsamość płciowa', status: 'live' },
      { file: 'wiki/seksuologia/dysfunkcje.md', label: 'Odpowiedź seksualna, trudności i terapia', status: 'live' },
      { file: 'wiki/seksuologia/hiperseksualnosc_mechanizm.md', label: 'Kompulsywne zachowania seksualne', status: 'live' },
      { file: 'wiki/seksuologia/trauma_seksualna.md', label: 'Trauma seksualna i konsekwencje przemocy', status: 'live' },
    ],
    artetherapy: [
      { file: 'wiki/arteterapia/arteterapia_wprowadzenie.md', label: 'Arteterapia i terapie wykorzystujące sztukę', status: 'live' },
    ],
    animaltherapy: [
      { file: 'wiki/animaloterapia/animaloterapia_wprowadzenie.md', label: 'Interwencje wspomagane przez zwierzęta', status: 'live' },
    ],
    health_psychology: [
      { file: 'wiki/psychologia_zdrowia/zdrowie_wprowadzenie.md', label: 'Modele zdrowia i choroby', status: 'live' },
      { file: 'wiki/psychologia_zdrowia/zachowania_zdrowotne.md', label: 'Zachowania i styl życia', status: 'live' },
      { file: 'wiki/psychologia_zdrowia/stres.md', label: 'Stres, radzenie sobie i wsparcie', status: 'live' },
      { file: 'wiki/psychologia_zdrowia/choroby_przewlekle.md', label: 'Choroba przewlekła, rehabilitacja i jakość życia', status: 'live' },
      { file: 'wiki/psychologia_zdrowia/bol.md', label: 'Psychologia bólu', status: 'live' },
      { file: 'wiki/psychologia_zdrowia/interwencje_zdrowotne.md', label: 'Komunikacja i interwencje w opiece zdrowotnej', status: 'live' },
    ],
    psychosomatics: [
      { file: 'wiki/psychosomatyka/wprowadzenie.md',               label: 'Psychosomatyka',                      status: 'live' },
      { file: 'wiki/psychosomatyka/historia_psychosomatyki.md',                   label: 'Historia psychosomatyki',             status: 'live' },
      { file: 'wiki/psychosomatyka/modele_psychosomatyczne.md',    label: 'Modele psychosomatyczne',             status: 'live' },
      { file: 'wiki/psychosomatyka/os_hpa.md',                     label: 'Os HPA i mechanizmy stresu',          status: 'live' },
      { file: 'wiki/psychosomatyka/somatyzacja.md',                label: 'Somatyzacja i zaburzenia somatyczne', status: 'live' },
      { file: 'wiki/psychosomatyka/bol_psychosomatyczny.md',       label: 'Ból psychosomatyczny',                status: 'live' },
      { file: 'wiki/psychosomatyka/psychodermatologia.md',         label: 'Psychodermatologia',                  status: 'live' },
      { file: 'wiki/psychosomatyka/psychogastroenterologia.md',    label: 'Psychogastroenterologia',             status: 'live' },
      { file: 'wiki/psychosomatyka/psychokardiologia.md',          label: 'Psychokardiologia',                   status: 'live' },
      { file: 'wiki/psychosomatyka/uklad_oddechowy.md',            label: 'Psychosomatyka ukladu oddechowego',   status: 'live' },
      { file: 'wiki/psychosomatyka/choroby_autoimmunologiczne.md', label: 'Choroby autoimmunologiczne',          status: 'live' },
      { file: 'wiki/psychosomatyka/diagnoza_psychosomatyczna.md',  label: 'Diagnoza psychosomatyczna',           status: 'live' },
      { file: 'wiki/psychosomatyka/terapia_psychosomatyczna.md',   label: 'Terapia psychosomatyczna',            status: 'live' },
    ],
    disability_psychology: [
      { file: 'wiki/psychologia_niepelnosprawnosci/wprowadzenie.md',                  label: 'Psychologia niepelnosprawnosci - wprow.',       status: 'live' },
      { file: 'wiki/psychologia_niepelnosprawnosci/modele_niepelnosprawnosci.md',     label: 'Modele niepelnosprawnosci',                     status: 'live' },
      { file: 'wiki/psychologia_niepelnosprawnosci/niepelnosprawnosc_intelektualna.md', label: 'Niepelnosprawnosc intelektualna',             status: 'live' },
      { file: 'wiki/psychologia_niepelnosprawnosci/niepelnosprawnosc_ruchowa.md',     label: 'Niepelnosprawnosc ruchowa',                     status: 'live' },
      { file: 'wiki/psychologia_niepelnosprawnosci/niepelnosprawnosc_wzrokowa.md',    label: 'Niepelnosprawnosc wzrokowa',                    status: 'live' },
      { file: 'wiki/psychologia_niepelnosprawnosci/niepelnosprawnosc_sluchowa.md',    label: 'Niepelnosprawnosc sluchowa',                    status: 'live' },
      { file: 'wiki/psychologia_niepelnosprawnosci/stres_i_adaptacja.md',             label: 'Stres, adaptacja i radzenie sobie',             status: 'live' },
      { file: 'wiki/psychologia_niepelnosprawnosci/rodzina_i_opiekunowie.md',         label: 'Rodzina i opiekunowie',                        status: 'live' },
      { file: 'wiki/psychologia_niepelnosprawnosci/inkluzja_spoleczna.md',            label: 'Inkluzja spoleczna i prawa',                   status: 'live' },
    ],
    intro: [
      { file: 'wiki/wstep_do_psychologii/definicja.md', label: 'Definicja i zakres',  status: 'live' },
      { file: 'wiki/wstep_do_psychologii/historia_psychologii.md',  label: 'Historia psychologii', status: 'live' },
      { file: 'wiki/wstep_do_psychologii/nurty_psychologii.md',  label: 'Glowne nurty psychologii', status: 'live' },
    ],
    cases: [
      { file: 'wiki/przypadki_kliniczne/hm.md',            label: 'H.M. - amnezja',  status: 'live' },
      { file: 'wiki/przypadki_kliniczne/gage.md',          label: 'Phineas Gage', status: 'live' },
      { file: 'wiki/przypadki_kliniczne/tan.md',           label: 'Pacjent „Tan” - afazja', status: 'live' },
      { file: 'wiki/przypadki_kliniczne/split_brain.md',   label: 'Rozdzielony mózg', status: 'live' },
      { file: 'wiki/przypadki_kliniczne/clive_wearing.md', label: 'Clive Wearing', status: 'live' },
      { file: 'wiki/przypadki_kliniczne/elliot.md',        label: 'Elliot', status: 'live' },
      { file: 'wiki/przypadki_kliniczne/df.md',            label: 'Pacjentka D.F.', status: 'live' },
      { file: 'wiki/przypadki_kliniczne/kc.md',            label: 'Pacjent K.C.', status: 'live' },
      { file: 'wiki/przypadki_kliniczne/na.md',            label: 'Pacjent N.A.', status: 'live' },
      { file: 'wiki/przypadki_kliniczne/patient_kn.md',    label: 'Pacjent K.N.', status: 'live' },
      { file: 'wiki/przypadki_kliniczne/patient_rb.md',    label: 'Pacjent R.B.', status: 'live' },
      { file: 'wiki/przypadki_kliniczne/ps.md',            label: 'Pacjent P.S.', status: 'live' },
      { file: 'wiki/przypadki_kliniczne/sm.md',            label: 'Pacjentka S.M. (uszkodzenie ciala migdalowatego)', status: 'live' },
    ],
    reference: [
      { file: 'wiki/reference/zakres.md',               label: 'Zakres wiedzy',                               status: 'live' },
      { file: 'wiki/reference/literatura.md',           label: 'Literatura',                                  status: 'live' },
      { file: 'wiki/reference/bibliografia_portalu.md', label: 'Bibliografia portalu',                        status: 'live' },
      { file: 'wiki/reference/skale_i_akronimy.md',     label: 'Skale i akronimy diagnostyczne',              status: 'live' },
      { file: 'wiki/reference/przepisy_zawod.md',       label: 'Przepisy i zasady pracy psychologa',          status: 'live' },
      { file: 'wiki/reference/mapa_powiazan_nowe_artykuly.md', label: 'Mapa powiazal nowych artykulow', status: 'live' },
      { file: 'wiki/reference/article_template.md', label: 'Zalecany wzorzec artykułu', status: 'live' },
    ],
    geropsychology: [
      { file: 'wiki/geropsychologia/wprowadzenie.md', label: 'Psychologia starzenia się i późnej dorosłości', status: 'live' },
      { file: 'wiki/relacje/samotnosc.md', label: 'Samotność i izolacja społeczna w późnej dorosłości', status: 'xlink' },
      { file: 'wiki/geropsychologia/poznanie_i_zdrowie_psychiczne_w_starosci.md', label: 'Funkcje poznawcze i zdrowie psychiczne', status: 'live' },
      { file: 'wiki/geropsychologia/pomoc_psychologiczna_i_opieka_w_starosci.md', label: 'Pomoc psychologiczna, opieka i koniec życia', status: 'live' },
    ],
    game_psychology: [
      { file: 'wiki/psychologia_gier/wprowadzenie.md', label: 'Motywacja i doświadczenie gracza', status: 'live' },
      { file: 'wiki/psychologia_gier/skutki_grania_i_uzywanie_problemowe.md', label: 'Skutki grania i używanie problemowe', status: 'live' },
      { file: 'wiki/psychologia_gier/zastosowania_gier_i_esport.md', label: 'Zastosowania gier i esport', status: 'live' },
    ],
    resilience_mobbing: [
      { file: 'wiki/rezyliencja_i_mobbing/odpornosc_wprowadzenie.md',  label: 'Odpornosc psychiczna',      status: 'live' },
      { file: 'wiki/rezyliencja_i_mobbing/modele_odpornosci.md',       label: 'Modele i teorie odporności',               status: 'live' },
      { file: 'wiki/rezyliencja_i_mobbing/budowanie_odpornosci.md',    label: 'Budowanie odporności psychicznej',         status: 'live' },
      { file: 'wiki/rezyliencja_i_mobbing/przemoc_psychiczna.md',      label: 'Przemoc psychiczna - definicja i formy',   status: 'live' },
      { file: 'wiki/rezyliencja_i_mobbing/mobbing_definicja.md',       label: 'Mobbing - definicja, rodzaje i fazy',      status: 'live' },
      { file: 'wiki/rezyliencja_i_mobbing/mobbing_skutki.md',          label: 'Skutki psychologiczne mobbingu',           status: 'live' },
      { file: 'wiki/rezyliencja_i_mobbing/mobbing_interwencja.md',     label: 'Interwencja i zapobieganie mobbingowi',    status: 'live' },
      { file: 'wiki/rezyliencja_i_mobbing/wypalenie_zawodowe.md',      label: 'Wypalenie zawodowe - definicja i modele',  status: 'live' },
      { file: 'wiki/rezyliencja_i_mobbing/fazy_wypalenia.md',          label: 'Fazy i wymiary wypalenia zawodowego',      status: 'live' },
      { file: 'wiki/rezyliencja_i_mobbing/wypalenie_zawody.md',        label: 'Wypalenie w wybranych zawodach',           status: 'live' },
      { file: 'wiki/rezyliencja_i_mobbing/profilaktyka_wypalenia.md',  label: 'Profilaktyka wypalenia zawodowego',        status: 'live' },
      { file: 'wiki/rezyliencja_i_mobbing/wsparcie_psychologiczne.md', label: 'Wsparcie psychologiczne ofiar',            status: 'live' },
    ],

    media_nature: [
      { file: 'wiki/ekrany_ksiazki_i_natura/ekrany_i_funkcjonowanie_psychiczne.md', label: 'Ekrany i funkcjonowanie psychiczne', status: 'live' },
      { file: 'wiki/ekrany_ksiazki_i_natura/czytanie_i_psychologia.md', label: 'Czytanie i psychologia', status: 'live' },
      { file: 'wiki/ekrany_ksiazki_i_natura/kontakt_z_natura_i_zdrowie_psychiczne.md', label: 'Kontakt z naturą i zdrowie psychiczne', status: 'live' },
    ],

    positive_psychology: [
      { file: 'wiki/psychologia_pozytywna/szczescie_dobrostan.md', label: 'Dobrostan psychiczny: modele, uwarunkowania i pomiar', status: 'live' },
      { file: 'wiki/psychologia_pozytywna/interwencje_pozytywne.md', label: 'Interwencje psychologii pozytywnej', status: 'live' },
      { file: 'wiki/psychologia_pozytywna/uwaznosc_przeplyw_i_samowspolczucie.md', label: 'Uważność, przepływ i samowspółczucie', status: 'live' },
    ],
    ai_psychology: [
      { file: 'wiki/psychologia_ai/psychologia_interakcji_czlowiek_ai.md', label: 'Psychologia interakcji człowiek–AI', status: 'live' },
      { file: 'wiki/psychologia_ai/ai_w_zdrowiu_psychicznym_i_opiece.md', label: 'AI w zdrowiu psychicznym i opiece', status: 'live' },
      { file: 'wiki/psychologia_ai/mechanizmy_ograniczenia_i_etyka_ai.md', label: 'Mechanizmy, ograniczenia i etyka AI', status: 'live' },
      { file: 'wiki/robotyka_afektywna/interfejsy_mozg_maszyna.md', label: 'Interfejsy mózg–maszyna (neurotechnologia)', status: 'live' },
    ],
    technology_psychology: [
      { file: 'wiki/psychologia_technologii/technostres.md',            label: 'Technostres - artykul naukowy',                      status: 'live' },
      { file: 'wiki/psychologia_technologii/zmeczenie_cyfrowe.md',      label: 'Zmeczenie cyfrowe i przeciazenie informacyjne',      status: 'live' },
      { file: 'wiki/psychologia_technologii/fomo_i_nomofobia.md',       label: 'FOMO i nomofobia',                                   status: 'live' },
      { file: 'wiki/psychologia_technologii/algorytmy_a_samoocena.md',  label: 'Algorytmy personalizacji, a samoocena',              status: 'live' },
      { file: 'wiki/psychologia_technologii/higiena_cyfrowa.md',        label: 'Higiena cyfrowa i profilaktyka przeciazenia',        status: 'live' },
      { file: 'wiki/psychologia_technologii/technologia_w_pracy.md',    label: 'Technologia w pracy: granice, kontrola i autonomia', status: 'live' },
      { file: 'wiki/psychologia_technologii/technologia_a_sen.md',      label: 'Technologia, a sen i regeneracja psychiczna',        status: 'live' },
      { file: 'wiki/psychologia_technologii/psychoedukacja_rodzinna.md',label: 'Psychoedukacja rodzinna w erze ekranow',             status: 'live' },
    ],
    affective_robotics: [
      { file: 'wiki/psychologia_ai/psychologia_interakcji_czlowiek_ai.md', label: 'Psychologia interakcji człowiek–AI', status: 'live' },
      { file: 'wiki/psychologia_ai/ai_w_zdrowiu_psychicznym_i_opiece.md', label: 'AI w zdrowiu psychicznym i opiece', status: 'live' },
      { file: 'wiki/psychologia_ai/mechanizmy_ograniczenia_i_etyka_ai.md', label: 'Mechanizmy, ograniczenia i etyka AI', status: 'live' },
      { file: 'wiki/robotyka_afektywna/interfejsy_mozg_maszyna.md', label: 'Interfejsy mózg–maszyna (neurotechnologia)', status: 'live' },
    ],
    school_psychology: [
      { file: 'wiki/psychologia_szkolna/teorie_uczenia_sie.md',           label: 'Uczenie się i motywacja szkolna',                        status: 'live' },
      { file: 'wiki/psychologia_szkolna/trudnosci_w_uczeniu_sie.md',      label: 'Trudności w uczeniu i wsparcie szkolne',                   status: 'live' },
      { file: 'wiki/psychologia_szkolna/klimat_szkolny.md',               label: 'Klimat szkolny, stres i przemoc',                            status: 'live' },
      { file: 'wiki/psychologia_szkolna/ocenianie_i_informacja_zwrotna.md', label: 'Ocenianie, informacja zwrotna i relacja edukacyjna', status: 'live' },
    ],
    neurodiversity: [
      { file: 'wiki/neuroroznorodnosc/wprowadzenie.md',               label: 'Neuroroznorodnosc',                    status: 'live' },
      { file: 'wiki/neuroroznorodnosc/adhd.md',                       label: 'ADHD jako wariant neuroroznorodnosci', status: 'live' },
      { file: 'wiki/neuroroznorodnosc/spektrum_autyzmu.md',           label: 'Spektrum autyzmu (ASD)',               status: 'live' },
      { file: 'wiki/neuroroznorodnosc/dysleksja.md',                  label: 'Dysleksja',                            status: 'live' },
      { file: 'wiki/neuroroznorodnosc/dyskalkulia.md',                label: 'Dyskalkulia',                          status: 'live' },
      { file: 'wiki/neuroroznorodnosc/dyspraksja.md',                 label: 'Dyspraksja i DCD',                     status: 'live' },
      { file: 'wiki/neuroroznorodnosc/profil_sensoryczny.md',         label: 'Profil sensoryczny',                   status: 'live' },
      { file: 'wiki/neuroroznorodnosc/tourette.md',                   label: "Zespol Tourette'a i tiki",             status: 'live' },
      { file: 'wiki/neuroroznorodnosc/hiperleksja.md',                label: 'Hiperleksja i wyjatkowe zdolnosci',    status: 'live' },
      { file: 'wiki/neuroroznorodnosc/model_mocnych_stron.md',        label: 'Model mocnych stron',                  status: 'live' },
      { file: 'wiki/neuroroznorodnosc/wsparcie_interwencje.md',       label: 'Wsparcie i interwencje',               status: 'live' },
      { file: 'wiki/neuroroznorodnosc/neurozroznorodnosc_w_pracy.md', label: 'Neuroroznorodnosc w miejscu pracy',    status: 'live' },
      { file: 'wiki/neuroroznorodnosc/identyfikacja_i_diagnoza.md',   label: 'Identyfikacja i diagnoza',             status: 'live' },
    ],
    forensic_psychology: [
      { file: 'wiki/psychologia_sadowa/wprowadzenie.md', label: 'Opiniowanie psychologiczne dla sądu', status: 'live' },
      { file: 'wiki/psychologia_sadowa/zastosowania_opiniowania_sadowego.md', label: 'Opiniowanie w różnych postępowaniach', status: 'live' },
    ],
    e_therapy: [
      { file: 'wiki/e_terapia/terapia_online.md', label: 'Terapia online', status: 'live' },
      { file: 'wiki/e_terapia/cyfrowe_narzedzia_zdrowia_psychicznego.md', label: 'Cyfrowe narzędzia zdrowia psychicznego', status: 'live' },
      { file: 'wiki/e_terapia/vr_terapia.md', label: 'Wirtualna rzeczywistość w terapii', status: 'live' },
    ],
    philosophy: [
      { file: 'wiki/filozofia/wprowadzenie.md',        label: 'Filozofia',                       status: 'live' },
      { file: 'wiki/filozofia/ontologia.md',           label: 'Ontologia i metafizyka',          status: 'live' },
      { file: 'wiki/filozofia/epistemologia.md',       label: 'Epistemologia i teoria poznania', status: 'live' },
      { file: 'wiki/filozofia/egocentryczny_dylemat.md',label: 'Egocentryczny dylemat poznania', status: 'live' },
      { file: 'wiki/filozofia/etyka.md',               label: 'Etyka i filozofia moralna',       status: 'live' },
      { file: 'wiki/filozofia/filozofia_umyslu.md',    label: 'Filozofia umyslu',                status: 'live' },
      { file: 'wiki/filozofia/filozofia_nauki.md',     label: 'Filozofia nauki',                 status: 'live' },
      { file: 'wiki/filozofia/egzystencjalizm.md',     label: 'Egzystencjalizm',                 status: 'live' },
      { file: 'wiki/filozofia/fenomenologia.md',       label: 'Fenomenologia',                   status: 'live' },
      { file: 'wiki/filozofia/hermeneutyka.md',        label: 'Hermeneutyka i interpretacja',    status: 'live' },
      { file: 'wiki/filozofia/logika.md',              label: 'Logika i argumentacja',           status: 'live' },
      { file: 'wiki/filozofia/filozofia_jezyka.md',    label: 'Filozofia jezyka',                status: 'live' },
      { file: 'wiki/filozofia/filozofia_czlowieka.md',       label: 'Filozofia człowieka',                        status: 'live' },
      { file: 'wiki/filozofia/cien_antropiczny.md',          label: 'Cień antropiczny',                           status: 'live' },
      { file: 'wiki/filozofia/mozg_boltzmanna.md',           label: 'Mozg Boltzmanna',                            status: 'live' },
      { file: 'wiki/filozofia/horror_panpsychizmu.md',       label: 'Horror panpsychizmu',                        status: 'live' },
      { file: 'wiki/filozofia/filozoficzne_zombie.md',       label: 'Filozoficzne zombie',                        status: 'live' },
      { file: 'wiki/filozofia/pusty_indywidualizm.md',       label: 'Pusty indywidualizm',                        status: 'live' },
      { file: 'wiki/filozofia/asymetria_dobra_i_bolu.md',    label: 'Asymetria dobra i bolu',                     status: 'live' },
      { file: 'wiki/filozofia/niemoralnosc_braku_zgody.md',  label: 'Niemoralność braku zgody na narodziny',      status: 'live' },
      { file: 'wiki/filozofia/redukcjonizm_tozsamosci.md',   label: 'Redukcjonizm tozsamosci osobowej',           status: 'live' },
      { file: 'wiki/filozofia/eliminatywizm_materialny.md',  label: 'Eliminatywizm materialny',                   status: 'live' },
      { file: 'wiki/filozofia/efilizm.md',                   label: 'Efilizm',                                    status: 'live' },
      { file: 'wiki/filozofia/pesymizm_biologiczny.md',      label: 'Pesymizm biologiczny',                       status: 'live' },
      { file: 'wiki/filozofia/podswiadomy_nihilizm.md',      label: 'Podswiadomy nihilizm',                       status: 'live' },
      { file: 'wiki/filozofia/paradoksalny_determinizm.md',  label: 'Paradoksalny determinizm',                   status: 'live' },
      { file: 'wiki/filozofia/realizm_modalny.md',           label: 'Realizm modalny',                            status: 'live' },
    ],
    nvc: [
      { file: 'wiki/porozumiewanie_sie_bez_przemocy/wprowadzenie.md',            label: 'NVC',                                   status: 'live' },
      { file: 'wiki/porozumiewanie_sie_bez_przemocy/nvc_w_praktyce.md',          label: 'NVC w praktyce',                       status: 'live' },
    ],
    ppd: [
      { file: 'wiki/seminarium_dyplomowe/wprowadzenie.md',           label: 'Seminarium dyplomowe',                  status: 'live' },
      { file: 'wiki/seminarium_dyplomowe/struktura_pracy.md',        label: 'Struktura pracy magisterskiej',         status: 'live' },
      { file: 'wiki/seminarium_dyplomowe/przeglad_literatury.md',    label: 'Przegląd literatury naukowej',          status: 'live' },
      { file: 'wiki/seminarium_dyplomowe/metodologia_badan.md',      label: 'Metodologia badań psychologicznych',    status: 'live' },
      { file: 'wiki/seminarium_dyplomowe/pomiary_psychologiczne.md', label: 'Zasady prowadzenia pomiarow',           status: 'live' },
      { file: 'wiki/seminarium_dyplomowe/narzedzia_badawcze.md',     label: 'Narzedzia badawcze i kwestionariusze',  status: 'live' },
      { file: 'wiki/seminarium_dyplomowe/analizy_statystyczne.md',   label: 'Analizy statystyczne',                 status: 'live' },
      { file: 'wiki/seminarium_dyplomowe/bledy_badawcze.md',         label: 'Błędy badawcze - czego unikac',        status: 'live' },
      { file: 'wiki/seminarium_dyplomowe/opis_wynikow.md',           label: 'Pisanie i interpretacja wynikow',      status: 'live' },
      { file: 'wiki/seminarium_dyplomowe/obrona_pracy.md',           label: 'Obrona pracy magisterskiej',           status: 'live' },
      { file: 'wiki/seminarium_dyplomowe/dobre_praktyki.md',         label: 'Dobre praktyki w pisaniu pracy',       status: 'live' },
    ],
    kulturowa: [
      { file: 'wiki/kulturowa/wprowadzenie.md', label: 'Podstawy i metodologia psychologii kulturowej', status: 'live' },
      { file: 'wiki/kulturowa/kultura_a_procesy_psychiczne.md', label: 'Kultura a poznanie, emocje i Ja', status: 'live' },
      { file: 'wiki/kulturowa/akulturacja_relacje_i_zdrowie.md', label: 'Akulturacja, relacje i zdrowie', status: 'live' },
    ],
    uzaleznienia: [
      { file: 'wiki/uzaleznienia/kryteria_diagnostyczne.md',     label: 'Kryteria diagnostyczne',             status: 'live' },
      { file: 'wiki/uzaleznienia/dialog_motywujacy.md',          label: 'Dialog motywujacy',                  status: 'live' },
      { file: 'wiki/uzaleznienia/zapobieganie_nawrotom.md',      label: 'Zapobieganie nawrotom',              status: 'live' },
      { file: 'wiki/uzaleznienia/uzaleznienia_mlodziezy.md',     label: 'Uzależnienia u młodzieży',           status: 'live' },
      { file: 'wiki/uzaleznienia/wspoluzaleznienie.md',          label: 'Wspoluzaleznienie',                  status: 'live' },
      { file: 'wiki/uzaleznienia/profilaktyka.md', label: 'Profilaktyka uzależnień', status: 'live' },
      { file: 'wiki/uzaleznienia/uzaleznienia_behawioralne.md', label: 'Uzaleznienia behawioralne',              status: 'live' },
      { file: 'wiki/uzaleznienia/neurobiologia_uzaleznien.md',  label: 'Neurobiologia uzalezniel',               status: 'live' },
      { file: 'wiki/uzaleznienia/rodzina_w_uzaleznieniach.md',  label: 'Rodzina w systemie uzaleznienia',        status: 'live' },
      { file: 'wiki/uzaleznienia/internet_uzaleznienie.md',     label: 'Uzaleznienie od internetu i technologii',status: 'live' },
      { file: 'wiki/uzaleznienia/terapia_grupowa.md',           label: 'Terapia grupowa w uzaleznieniach',       status: 'live' },
      { file: 'wiki/uzaleznienia/recovery.md',                  label: 'Recovery - droga do zdrowia',            status: 'live' },
    ],
    relacje: [
      { file: 'wiki/relacje/przywiezanie_doroslych.md',          label: 'Style przywiazania u doroslych',     status: 'live' },
      { file: 'wiki/relacje/trojkatna_teoria_milosci.md',        label: 'Triangularna teoria milosci',        status: 'live' },
      { file: 'wiki/relacje/dobor_partnera.md',                  label: 'Dobor partnera',                     status: 'live' },
      { file: 'wiki/relacje/komunikacja_para.md',                label: 'Komunikacja w parze',                status: 'live' },
      { file: 'wiki/relacje/konflikty.md',                       label: 'Konflikty i ich rozwiazywanie',      status: 'live' },
      { file: 'wiki/relacje/zdrada.md',                          label: 'Zdrada i odbudowa zaufania',         status: 'live' },
      { file: 'wiki/relacje/terapia_par.md',                     label: 'Terapia par',                        status: 'live' },
      { file: 'wiki/relacje/przemoc_zwiazki.md',                 label: 'Przemoc w związkach',                status: 'live' },
      { file: 'wiki/relacje/samotnosc.md',                       label: 'Samotność i izolacja społeczna',     status: 'live' },
      { file: 'wiki/relacje/przyjaznie.md',                      label: 'Przyjaźń',                           status: 'live' },
      { file: 'wiki/relacje/rozstanie.md',                       label: 'Rozpad zwiazku i zaloba relacyjna',  status: 'live' },
      { file: 'wiki/relacje/relacje_rodzinne.md',                label: 'Relacje rodzinne - dynamika',        status: 'live' },
    ],
    etyka: [
      { file: 'wiki/etyka/kodeksy_etyczne.md',                   label: 'Kodeksy etyczne - przeglad',         status: 'live' },
      { file: 'wiki/etyka/zasady_apa_ptp.md',                    label: 'Zasady APA i PTP',                   status: 'live' },
      { file: 'wiki/etyka/dobro_nieszkodzenie.md',               label: 'Dobro i nieszkodzenie',              status: 'live' },
      { file: 'wiki/etyka/tajemnica_zawodowa_granice.md',        label: 'Tajemnica zawodowa i jej granice',   status: 'live' },
      { file: 'wiki/etyka/swiadoma_zgoda.md',                    label: 'Świadoma zgoda',                     status: 'live' },
      { file: 'wiki/etyka/granice_relacji.md',                   label: 'Granice relacji terapeutycznej',     status: 'live' },
      { file: 'wiki/etyka/superwizja_odpowiedzialnosc.md',       label: 'Superwizja i odpowiedzialność',      status: 'live' },
      { file: 'wiki/etyka/dylematy_etyczne.md',          label: 'Dylematy etyczne w praktyce',          status: 'live' },
      { file: 'wiki/etyka/kompetencje_kulturowe.md',     label: 'Kompetencje kulturowe',                status: 'live' },
      { file: 'wiki/etyka/etyka_badan.md',               label: 'Etyka badań naukowych',                status: 'live' },
      { file: 'wiki/etyka/etyka_cyfrowa.md',             label: 'Etyka w psychologii cyfrowej',         status: 'live' },
      { file: 'wiki/etyka/odpowiedzialnosc_zawodowa.md', label: 'Odpowiedzialnosc zawodowa',            status: 'live' },
    ],
    diagnoza: [
      { file: 'wiki/diagnoza/etapy_diagnozy.md',                 label: 'Etapy i cele diagnozy',              status: 'live' },
      { file: 'wiki/diagnoza/wywiad_psychologiczny.md',          label: 'Wywiad psychologiczny',              status: 'live' },
      { file: 'wiki/diagnoza/wywiad_kognitywny_poznawczy.md',     label: 'Wywiad kognitywny (poznawczy)',       status: 'live' },
      { file: 'wiki/diagnoza/diagnoza_techniki_rozmowy_psychologicznej.md', label: 'Techniki rozmowy psychologicznej', status: 'live' },
      { file: 'wiki/diagnoza/obserwacja_kliniczna.md',           label: 'Obserwacja kliniczna',               status: 'live' },
      { file: 'wiki/diagnoza/formulowanie_przypadku.md',         label: 'Formulowanie przypadku',             status: 'live' },
      { file: 'wiki/diagnoza/techniki_projekcyjne.md',           label: 'Techniki projekcyjne',               status: 'live' },
      { file: 'wiki/diagnoza/opinia_psychologiczna.md',          label: 'Opinia psychologiczna',              status: 'live' },
      { file: 'wiki/diagnoza/diagnoza_stygmatyzacja.md',         label: 'Diagnoza, a stygmatyzacja',          status: 'live' },
    ],
    rozwojowa: [
      { file: 'wiki/psychologia_rozwojowa/teorie_rozwoju.md',                label: 'Glowne teorie rozwoju',                   status: 'live' },
      { file: 'wiki/psychologia_rozwojowa/metody_podluzne.md',               label: 'Metody badań podłużnych',                 status: 'live' },
      { file: 'wiki/psychologia_rozwojowa/niemowlectwo.md',                  label: 'Niemowlęctwo i wczesne dzieciństwo',      status: 'live' },
      { file: 'wiki/psychologia_rozwojowa/wiek_szkolny.md',                  label: 'Wiek szkolny',                            status: 'live' },
      { file: 'wiki/psychologia_rozwojowa/adolescencja.md',                  label: 'Adolescencja',                            status: 'live' },
      { file: 'wiki/psychologia_rozwojowa/doroslosc.md',                     label: 'Dorosłość i starzenie się',               status: 'live' },
      { file: 'wiki/psychologia_rozwojowa/plastycznosc_mozgu.md',            label: 'Plastycznosc mózgu, a okresy krytyczne',  status: 'live' },
      { file: 'wiki/psychologia_rozwojowa/przywiazanie.md',                  label: 'Teoria przywiazania',                     status: 'live' },
      { file: 'wiki/psychologia_rozwojowa/rozwoj_jezyka.md',                 label: 'Rozwoj jezyka i komunikacji',             status: 'live' },
      { file: 'wiki/psychologia_rozwojowa/rodzicielstwo.md',                 label: 'Style rodzicielskie',                     status: 'live' },
      { file: 'wiki/psychologia_rozwojowa/trauma_rozwojowa.md',              label: 'Trauma rozwojowa',                        status: 'live' },
      { file: 'wiki/psychologia_rozwojowa/tozsamosc.md',                     label: 'Ksztaltowanie tozsamosci',                status: 'live' },
    ],
    eksperyment_psychologiczny: [
      { file: 'wiki/eksperyment_psychologiczny/wprowadzenie.md',               label: 'Wprowadzenie do metod eksperymentalnych',  status: 'live' },
      { file: 'wiki/eksperyment_psychologiczny/problemy_i_hipotezy.md',        label: 'Problem badawczy i hipotezy',              status: 'live' },
      { file: 'wiki/eksperyment_psychologiczny/operacjonalizacja.md',          label: 'Operacjonalizacja zmiennych',              status: 'live' },
      { file: 'wiki/eksperyment_psychologiczny/proby_i_rekrutacja.md',         label: 'Dobor proby i rekrutacja',                 status: 'live' },
      { file: 'wiki/eksperyment_psychologiczny/etyka_i_zgoda.md',              label: 'Etyka badania i swiadoma zgoda',           status: 'live' },
      { file: 'wiki/eksperyment_psychologiczny/obserwacja_psychologiczna.md',  label: 'Obserwacja jako metoda badawcza',          status: 'live' },
      { file: 'wiki/eksperyment_psychologiczny/protokol_i_pilotaz.md',         label: 'Protokół badania i pilotaż',               status: 'live' },
      { file: 'wiki/eksperyment_psychologiczny/prowadzenie_eksperymentu.md',   label: 'Prowadzenie sesji eksperymentalnej',       status: 'live' },
      { file: 'wiki/eksperyment_psychologiczny/jakosc_danych.md',              label: 'Kontrola jakosci i zarzadzanie danymi',    status: 'live' },
      { file: 'wiki/eksperyment_psychologiczny/analiza_i_wnioskowanie.md',     label: 'Analiza danych i wnioskowanie',            status: 'live' },
      { file: 'wiki/eksperyment_psychologiczny/replikacja_i_otwarta_nauka.md', label: 'Replikacja i otwarta nauka',               status: 'live' },
      { file: 'wiki/eksperyment_psychologiczny/raportowanie_wynikow.md',       label: 'Raportowanie wynikow i ograniczel',        status: 'live' },
    ],
  },

  // 
  //  WIKI - definicje encyklopedii tematycznych
  // 
  wikis: {
    neuropsychologia: {
      title: 'WIKI - Neuropsychologia kliniczna',
      intro: 'Systematyczny przeglad zagadnieln neuropsychologii klinicznej. Od struktur mózgu przez syndromologie po rehabilitacje.',
      sections: [
        {
          title: 'Pięć opracowań kanonicznych',
          articles: [
            { label: 'Podstawy układu nerwowego', id: 'neuropsychologia/podstawy_neurologii', status: 'live', desc: 'Komórki, przewodzenie, synapsy, mielina i poziomy organizacji.' },
            { label: 'Funkcjonalna anatomia mózgu', id: 'neuropsychologia/anatomia', status: 'live', desc: 'Struktury rozpatrywane w sieciach percepcji, pamięci, regulacji i działania.' },
            { label: 'Metody neuronauki poznawczej', id: 'neuropsychologia/neuronauka_poznawcza', status: 'live', desc: 'EEG, fMRI, PET, MRI, eye tracking i urządzenia konsumenckie.' },
            { label: 'Rozwój, plastyczność i zmienność mózgu', id: 'neuropsychologia/plastycznosc', status: 'live', desc: 'Rozwój, doświadczenie, uszkodzenie, cykl i sezonowość.' },
            { label: 'Diagnoza i rehabilitacja neuropsychologiczna', id: 'neuropsychologia/rehabilitacja_neuropsychologiczna', status: 'live', desc: 'Ocena, cele, restytucja, kompensacja i codzienne funkcjonowanie.' },
          ]
        },
        {
          title: 'Syndromologia',
          articles: [
            { label: 'Afazje - klasyfikacja i diagnoza', id: 'zaburzenia/afazje', status: 'live' },
            { label: 'Amnezje - typy i podloze', id: 'zaburzenia/amnezje', status: 'live' },
            { label: 'Agnozja wzrokowa i prozopagnozja', id: 'zaburzenia/agnozja', status: 'live' },
            { label: 'Neglect przestrzenny', id: 'zaburzenia/neglect', status: 'live' },
            { label: 'Apraksja', id: 'zaburzenia/apraksja', status: 'live' },
            { label: 'Urazy glowy (TBI)', id: 'zaburzenia/tbi', status: 'live' },
            { label: 'Otepienia', id: 'zaburzenia/otepienia', status: 'live' },
            { label: 'ADHD', id: 'neuroroznorodnosc/adhd', status: 'xlink' },
          ]
        },
        {
          title: 'Ocena neuropsychologiczna',
          articles: [
            { label: 'Testy przesiewowe (MMSE, MoCA)', id: 'testy/mmse_moca', status: 'live' },
            { label: 'Testy funkcji wykonawczych', id: 'testy/testy_wykonawcze', status: 'live' },
            { label: 'Testy pamieci', id: 'testy/testy_pamieci', status: 'live' },
            { label: 'Testy uwagi', id: 'testy/testy_uwagi', status: 'live' },
            { label: 'Testy jezykowe', id: 'testy/testy_jezyka', status: 'live' },
            { label: 'Skale Wechslera (WAIS/WISC)', id: 'testy/wais', status: 'live' },
            { label: 'WISC-V - opis testu', id: 'testy/wisc_v', status: 'live' },
            { label: 'Baterie neuropsychologiczne', id: 'testy/neuropsych_battery', status: 'live', desc: 'LNNB, HRNB, D-KEFS.' },
            { label: 'SCID-5 / SCID-V', id: 'testy/scid_v', status: 'live' },
          ]
        },
        {
          title: 'Przypadki kliniczne',
          articles: [
            { label: 'H.M. - amnezja', id: 'przypadki_kliniczne/hm', status: 'live' },
            { label: 'Phineas Gage', id: 'przypadki_kliniczne/gage', status: 'live' },
            { label: 'Pacjent „Tan” - afazja Broki', id: 'przypadki_kliniczne/tan', status: 'live' },
            { label: 'Rozdzielony mózg', id: 'przypadki_kliniczne/split_brain', status: 'live' },
            { label: 'Clive Wearing', id: 'przypadki_kliniczne/clive_wearing', status: 'live' },
            { label: 'Elliot', id: 'przypadki_kliniczne/elliot', status: 'live' },
            { label: 'Pacjentka D.F.', id: 'przypadki_kliniczne/df', status: 'live' },
            { label: 'Pacjent K.C.', id: 'przypadki_kliniczne/kc', status: 'live' },
            { label: 'Pacjent N.A.', id: 'przypadki_kliniczne/na', status: 'live' },
            { label: 'Pacjent K.N.', id: 'przypadki_kliniczne/patient_kn', status: 'live' },
            { label: 'Pacjent R.B.', id: 'przypadki_kliniczne/patient_rb', status: 'live' },
            { label: 'Pacjent P.S.', id: 'przypadki_kliniczne/ps', status: 'live' },
            { label: 'Pacjentka S.M.', id: 'przypadki_kliniczne/sm', status: 'live' },
          ]
        },
        {
          title: 'Rehabilitacja neuropsychologiczna',
          articles: [
            { label: 'Rehabilitacja neuropsychologiczna', id: 'neuropsychologia/rehabilitacja_neuropsychologiczna', status: 'live', desc: 'Metody, modele i praktyka rehabilitacji po uszkodzeniach mózgu.' },
          ]
        },
        {
          title: 'Wprowadzenie do dyscypliny',
          articles: [
            { label: 'Definicja i zakres', id: 'wstep_do_psychologii/definicja', status: 'live' },
            { label: 'Historia psychologii', id: 'wstep_do_psychologii/historia_psychologii', status: 'live' },
            { label: 'Główne nurtы psychologii', id: 'wstep_do_psychologii/nurty_psychologii', status: 'live' },
            { label: 'Etyka badań psychologicznych', id: 'etyka/etyka_badan', file: 'wiki/etyka/etyka_badan.md', status: 'xlink' },
          ]
        },
      ]
    },

    kliniczna: {
      title: 'WIKI - Psychologia kliniczna',
      intro: 'Diagnoza, terapia i praca kliniczna - od rozumienia zaburzen po praktyke w systemie ochrony zdrowia.',
      sections: [
        {
          title: 'Podstawy diagnostyki',
          articles: [
            { label: 'Podstawy psychopatologii i opis objawów', id: 'psychopatologia/psychopatologia_wprowadzenie', status: 'live' },
            { label: 'Formułowanie przypadku', id: 'diagnoza/formulowanie_przypadku', status: 'xlink' },
          ]
        },
        {
          title: 'Zaburzenia kliniczne',
          articles: [
            { label: 'Zaburzenia nastroju', id: 'psychopatologia/zaburzenia_nastroju', status: 'live' },
            { label: 'Zaburzenia lękowe i obsesyjno-kompulsyjne', id: 'psychopatologia/zaburzenia_lekowe_i_obsesyjno_kompulsyjne', status: 'live' },
            { label: 'Psychozy', id: 'psychopatologia/psychozy', status: 'live' },
            { label: 'Trauma, dysocjacja i wiktymizacja', id: 'psychopatologia/trauma_ptsd', status: 'live' },
            { label: 'Osobowość, psychopatia i socjopatia', id: 'psychopatologia/zaburzenia_osobowosci', status: 'live' },
            { label: 'Zaburzenia odżywiania i uzależnienia', id: 'psychopatologia/zaburzenia_odzywiania_i_uzaleznienia', status: 'live' },
          ]
        },
        {
          title: 'Interwencje i psychoterapia',
          articles: [
            { label: 'Podstawy, skuteczność i czynniki wspólne', id: 'psychoterapia/psychoterapia_wprowadzenie', status: 'live' },
            { label: 'Terapie poznawcze i behawioralne', id: 'psychoterapia/cbt', status: 'live' },
            { label: 'ACT i terapie kontekstualne', id: 'psychoterapia/act', status: 'live' },
            { label: 'Terapia dialektyczno-behawioralna (DBT)', id: 'psychoterapia/dbt', status: 'live' },
            { label: 'Podejścia psychodynamiczne i humanistyczne', id: 'psychoterapia/podejscia_psychodynamiczne_i_humanistyczne', status: 'live' },
            { label: 'Psychoterapia traumy i EMDR', id: 'psychoterapia/emdr', status: 'live' },
            { label: 'Interwencje relacyjne i niestandardowe', id: 'psychoterapia/interwencje_relacyjne_i_niestandardowe', status: 'live' },
            { label: 'Terapie systemowe i rodzinne', id: 'systemy_rodzinne/terapie_systemowe_i_rodzinne', status: 'xlink' },
            { label: 'Interwencja kryzysowa', id: 'suicydologia/interwencja', status: 'live' },
          ]
        },
        {
          title: 'Suicydologia',
          articles: [
            { label: 'Suicydologia', id: 'suicydologia/suicydologia_wprowadzenie', status: 'live' },
            { label: 'Epidemiologia', id: 'suicydologia/epidemiologia', status: 'live' },
            { label: 'Modele suicydologiczne', id: 'suicydologia/modele_suicydologiczne', status: 'live' },
            { label: 'Ocena ryzyka (C-SSRS)', id: 'suicydologia/ocena_ryzyka', status: 'live' },
            { label: 'Profilaktyka zachowań samobójczych', id: 'suicydologia/profilaktyka', status: 'live' },
            { label: 'Samookaleczenia (NSSI)', id: 'suicydologia/nssi', status: 'live' },
            { label: 'Postvention', id: 'suicydologia/postvention', status: 'live' },
            { label: 'Efekt Wertera i Papageno', id: 'suicydologia/media', status: 'live' },
          ]
        },
        {
          title: 'Psychometria',
          articles: [
            { label: 'Psychometria', id: 'psychometria/psychometria_wprowadzenie', status: 'xlink' },
            { label: 'Narzedzia kliniczne (PHQ-l, GAD-7, PCL-5)', id: 'psychometria/narzedzia_kliniczne', status: 'live' },
          ]
        },
      ]
    },

    poznawcza: {
      title: 'WIKI - Psychologia poznawcza',
      intro: 'Procesy przetwarzania informacji - od percepcji przez pamiec i uwage po myslenie i podejmowanie decyzji.',
      sections: [
        {
          title: 'Procesy poznawcze',
          articles: [
            { label: 'Percepcja i uwaga', id: 'psychologia_poznawcza/percepcja', status: 'live' },
            { label: 'Pamięć i uczenie się', id: 'psychologia_poznawcza/pamiec', status: 'live' },
            { label: 'Funkcje wykonawcze i obciążenie poznawcze', id: 'psychologia_poznawcza/funkcje_wykonawcze', status: 'live' },
            { label: 'Myślenie i podejmowanie decyzji', id: 'psychologia_poznawcza/myslenie', status: 'live' },
            { label: 'Język, narracja i wyobraźnia', id: 'psychologia_poznawcza/jezyk', status: 'live' },
            { label: 'Świadomość, ucieleśnienie i predykcja', id: 'psychologia_poznawcza/swiadomosc', status: 'live' },
            { label: 'Nauki kognitywne i architektury poznawcze', id: 'psychologia_poznawcza/nauki_kognitywne', status: 'live' },
          ]
        },
      ]
    },

    spoleczna: {
      title: 'WIKI - Psychologia społeczna',
      intro: 'Jak myśli, emocje i zachowania jednostki kształtują się pod wpływem obecności innych, od percepcji społecznej po współpracę i konflikty grupowe.',
      sections: [
        {
          title: 'Poznanie społeczne',
          articles: [
            { label: 'Ja, samoocena i tożsamość społeczna', id: 'psychologia_spoleczna/ja_i_samoocena', status: 'live' },
            { label: 'Percepcja społeczna, postawy i atrybucje', id: 'psychologia_spoleczna/percepcja_spoleczna', status: 'live' },
            { label: 'Wpływ społeczny, perswazja i posłuszeństwo', id: 'psychologia_spoleczna/wplyw_spoleczny_perswazja_i_posluszenstwo', status: 'live' },
            { label: 'Grupy, relacje i współpraca', id: 'psychologia_spoleczna/grupy_relacje_i_wspolpraca', status: 'live' },
            { label: 'Agresja, uprzedzenia i przemoc społeczna', id: 'psychologia_spoleczna/agresja_uprzedzenia_i_przemoc_spoleczna', status: 'live' },
          ]
        },
      ]
    },

    kulturowa: {
      title: 'WIKI - Psychologia kulturowa',
      intro: 'Jak kultura wspoltworzy poznanie, emocje, Ja i relacje - badania porownawcze i perspektywa emic/etic.',
      sections: [
        {
          title: 'Podstawy',
          articles: [
            { label: 'Czym jest psychologia kulturowa?', id: 'kulturowa/wprowadzenie', status: 'live' },
            { label: 'Metody: emic vs. etic', id: 'kulturowa/metody', status: 'live' },
            { label: 'Wymiar indywidualizm kolektywizm', id: 'kulturowa/indywidualizm_kolektywizm', status: 'live' },
          ]
        },
        {
          title: 'Kultura, a procesy psychiczne',
          articles: [
            { label: 'Kultura, a percepcja i uwaga', id: 'kulturowa/kultura_percepcja', status: 'live' },
            { label: 'Kultura, a emocje', id: 'emocje/emocje_wprowadzenie', status: 'xlink' },
            { label: 'Kulturowe modele Ja', id: 'kulturowa/kulturowe_modele_ja', status: 'live' },
            { label: 'Kultura, a zdrowie psychiczne', id: 'kulturowa/kultura_zdrowie', status: 'live' },
          ]
        },
        {
          title: 'Kultura i tozsamosc',
          articles: [
            { label: 'Kultura, a emocje',                  id: 'kulturowa/kultura_emocje',     status: 'live' },
            { label: 'Akulturacja i adaptacja kulturowa', id: 'kulturowa/akulturacja',         status: 'live' },
            { label: 'Kultura, a jezyk (Sapir-Whorf)',     id: 'kulturowa/kultura_jezyk',       status: 'live' },
            { label: 'Kultura, a osobowosc',               id: 'kulturowa/kultura_osobowosc',   status: 'live' },
            { label: 'Psychologia Wschodu i Zachodu',     id: 'kulturowa/wschodnia_zachodnia', status: 'live' },
            { label: 'Kultura, a relacje interpersonalne', id: 'kulturowa/kultura_relacje',     status: 'live' },
          ]
        },
        {
          title: 'Emocje i motywacja',
          articles: [
            { label: 'Emocje', id: 'emocje/emocje_wprowadzenie', status: 'live' },
            { label: 'Teorie emocji', id: 'emocje/teorie_emocji', status: 'live' },
            { label: 'Regulacja emocjonalna', id: 'emocje/regulacja', status: 'live' },
            { label: 'Motywacja', id: 'emocje/motywacja', status: 'live' },
            { label: 'Neurobiologia emocji', id: 'emocje/neurobiologia', status: 'live' },
            { label: 'Empatia i współczucie', id: 'emocje/wspolczucie', status: 'live' },
            { label: 'Aleksytymia', id: 'emocje/aleksytymia', status: 'live' },
            { label: 'Inteligencja emocjonalna', id: 'emocje/inteligencja_emocjonalna', status: 'live' },
            { label: 'Stres a procesy emocjonalne', id: 'emocje/stres_emocje', status: 'live' },
            { label: 'Pozytywne emocje i broaden-build', id: 'emocje/pozytywne_emocje', status: 'live' },
            { label: 'Wstyd i wina', id: 'emocje/wstyd_wina', status: 'live' },
            { label: 'Emocje społeczne i moralne', id: 'emocje/emocje_spoleczne', status: 'live' },
          ]
        },
      ]
    },

    rozwojowa: {
      title: 'WIKI - Psychologia rozwojowa',
      intro: 'Zmiany w funkcjonowaniu psychicznym od okresu prenatalnego po pelna doroslosc - normatywne i atypowe sciezki.',
      sections: [
        {
          title: 'Fundamenty',
          articles: [
            { label: 'Główne teorie rozwoju', id: 'psychologia_rozwojowa/teorie_rozwoju', status: 'live' },
            { label: 'Metody badań podłużnych', id: 'psychologia_rozwojowa/metody_podluzne', status: 'live' },
          ]
        },
        {
          title: 'Etapy zycia',
          articles: [
            { label: 'Niemowlęctwo i wczesne dzieciństwo', id: 'psychologia_rozwojowa/niemowlectwo', status: 'live' },
            { label: 'Wiek szkolny', id: 'psychologia_rozwojowa/wiek_szkolny', status: 'live' },
            { label: 'Adolescencja', id: 'psychologia_rozwojowa/adolescencja', status: 'live' },
            { label: 'Dorosłość i starzenie się', id: 'psychologia_rozwojowa/doroslosc', status: 'live' },
          ]
        },
        {
          title: 'Neurobiologia rozwoju',
          articles: [
            { label: 'Neurobiologia - podstawy', id: 'neuropsychologia/anatomia', status: 'xlink' },
            { label: 'Plastycznosc mózgu, a okresy krytyczne', id: 'psychologia_rozwojowa/plastycznosc_mozgu', status: 'live' },
          ]
        },
        {
          title: 'Relacje i srodowisko',
          articles: [
            { label: 'Teoria przywiazania', id: 'psychologia_rozwojowa/przywiazanie', status: 'live' },
            { label: 'Style rodzicielskie', id: 'psychologia_rozwojowa/rodzicielstwo', status: 'live' },
            { label: 'Trauma rozwojowa', id: 'psychologia_rozwojowa/trauma_rozwojowa', status: 'live' },
          ]
        },
        {
          title: 'Jezyk, tozsamosc i samoRozwoj',
          articles: [
            { label: 'Rozwoj jezyka i komunikacji', id: 'psychologia_rozwojowa/rozwoj_jezyka', status: 'live' },
            { label: 'Ksztaltowanie tozsamosci', id: 'psychologia_rozwojowa/tozsamosc', status: 'live' },
          ]
        },
      ]
    },

    uzaleznienia: {
      title: 'WIKI - Psychologia uzaleznien',
      intro: 'Mechanizmy uzaleznien, diagnoza, terapia i profilaktyka - od neurobiologii nalogu po prace z rodzina.',
      sections: [
        {
          title: 'Mechanizmy i diagnoza',
          articles: [
            { label: 'Neurobiologia uzalezniel', id: 'farmakologia/neurofarmakologia', status: 'xlink' },
            { label: 'Zaburzenia odżywiania i uzależnienia', id: 'psychopatologia/zaburzenia_odzywiania_i_uzaleznienia', status: 'xlink' },
            { label: 'Kryteria diagnostyczne', id: 'uzaleznienia/kryteria_diagnostyczne', status: 'live' },
          ]
        },
        {
          title: 'Farmakoterapia',
          articles: [
            { label: 'Neurofarmakologia', id: 'farmakologia/neurofarmakologia', status: 'live' },
            { label: 'Główne klasy leków psychotropowych', id: 'psychofarmakologia/klasy_lekow_psychotropowych', status: 'live' },
            { label: 'Farmakoterapia uzależnień', id: 'psychofarmakologia/11_leki_w_terapii_uzaleznien', status: 'live' },
            { label: 'Psychodeliki w terapii', id: 'farmakologia/psychodeliki', status: 'live' },
          ]
        },
        {
          title: 'Terapia',
          articles: [
            { label: 'Dialog motywujacy', id: 'uzaleznienia/dialog_motywujacy', status: 'live' },
            { label: 'CBT w uzaleznieniach', id: 'psychoterapia/cbt', status: 'xlink' },
            { label: 'Zapobieganie nawrotom', id: 'uzaleznienia/zapobieganie_nawrotom', status: 'live' },
          ]
        },
        {
          title: 'Konteksty',
          articles: [
            { label: 'Uzależnienia u młodzieży', id: 'uzaleznienia/uzaleznienia_mlodziezy', status: 'live' },
            { label: 'Wspoluzaleznienie', id: 'uzaleznienia/wspoluzaleznienie', status: 'live' },
            { label: 'Profilaktyka uzależnień', id: 'uzaleznienia/profilaktyka', status: 'live' },
          ]
        },
        {
          title: 'Neurobiologia i zaawansowane zagadnienia',
          articles: [
            { label: 'Neurobiologia uzalezniel',               id: 'uzaleznienia/neurobiologia_uzaleznien',   status: 'live' },
            { label: 'Uzaleznienia behawioralne',              id: 'uzaleznienia/uzaleznienia_behawioralne',  status: 'live' },
            { label: 'Uzaleznienie od internetu i technologii',id: 'uzaleznienia/internet_uzaleznienie',      status: 'live' },
            { label: 'Rodzina w systemie uzaleznienia',        id: 'uzaleznienia/rodzina_w_uzaleznieniach',   status: 'live' },
            { label: 'Terapia grupowa w uzaleznieniach',       id: 'uzaleznienia/terapia_grupowa',            status: 'live' },
            { label: 'Recovery - droga do zdrowia',           id: 'uzaleznienia/recovery',                   status: 'live' },
          ]
        },
      ]
    },

    relacje: {
      title: 'WIKI - Relacje i związki',
      intro: 'Psychologia bliskich relacji - przywiazanie, milosc, komunikacja, konflikty i terapia par.',
      sections: [
        {
          title: 'Podstawy',
          articles: [
            { label: 'Style przywiazania u doroslych', id: 'relacje/przywiezanie_doroslych', status: 'live' },
            { label: 'Triangularna teoria milosci', id: 'relacje/trojkatna_teoria_milosci', status: 'live' },
            { label: 'Dobor partnera', id: 'relacje/dobor_partnera', status: 'live' },
          ]
        },
        {
          title: 'Dynamika zwiazku',
          articles: [
            { label: 'Komunikacja w parze', id: 'relacje/komunikacja_para', status: 'live' },
            { label: 'Konflikty i ich rozwiazywanie', id: 'relacje/konflikty', status: 'live' },
            { label: 'Zdrada i odbudowa zaufania', id: 'relacje/zdrada', status: 'live' },
          ]
        },
        {
          title: 'Terapia i trudne sytuacje',
          articles: [
            { label: 'Terapia par', id: 'relacje/terapia_par', status: 'live' },
            { label: 'Przemoc w związkach', id: 'relacje/przemoc_zwiazki', status: 'live' },
            { label: 'Psychologia seksualności', id: 'seksuologia/seksuologia_wprowadzenie', status: 'xlink' },
          ]
        },
        {
          title: 'Seksuologia',
          articles: [
            { label: 'Psychologia seksualności w cyklu życia', id: 'seksuologia/seksuologia_wprowadzenie', status: 'live' },
            { label: 'Orientacja seksualna i tożsamość płciowa', id: 'seksuologia/orientacja_seksualna_i_tozsamosc_plciowa', status: 'live' },
            { label: 'Odpowiedź seksualna, trudności i terapia', id: 'seksuologia/dysfunkcje', status: 'live' },
            { label: 'Kompulsywne zachowania seksualne', id: 'seksuologia/hiperseksualnosc_mechanizm', status: 'live' },
            { label: 'Trauma seksualna i konsekwencje przemocy', id: 'seksuologia/trauma_seksualna', status: 'live' },
          ]
        },
        {
          title: 'Inne relacje i utrata',
          articles: [
            { label: 'Samotność i izolacja społeczna',    id: 'relacje/samotnosc',        status: 'live' },
            { label: 'Przyjaźń',                          id: 'relacje/przyjaznie',        status: 'live' },
            { label: 'Rozpad zwiazku i zaloba relacyjna', id: 'relacje/rozstanie',         status: 'live' },
            { label: 'Relacje rodzinne - dynamika',       id: 'relacje/relacje_rodzinne',  status: 'live' },
          ]
        },
      ]
    },

    diagnoza: {
      title: 'WIKI - Diagnoza psychologiczna',
      intro: 'Metody diagnozy jakosciowej i ilosciowej, wymagania prawne i etyczne, sporzadzanie opinii.',
      sections: [
        {
          title: 'Proces diagnostyczny',
          articles: [
            { label: 'Etapy i cele diagnozy', id: 'diagnoza/etapy_diagnozy', status: 'live' },
            { label: 'Wywiad psychologiczny', id: 'diagnoza/wywiad_psychologiczny', status: 'live' },
            { label: 'Techniki rozmowy psychologicznej', id: 'diagnoza/diagnoza_techniki_rozmowy_psychologicznej', status: 'live' },
            { label: 'Obserwacja kliniczna', id: 'diagnoza/obserwacja_kliniczna', status: 'live' },
            { label: 'Formulowanie przypadku', id: 'diagnoza/formulowanie_przypadku', status: 'live' },
          ]
        },
        {
          title: 'Modele diagnostyczne',
          articles: [
            { label: 'Model RDoC', id: 'testy/rdoc', status: 'live' },
          ]
        },
        {
          title: 'Narzedzia diagnostyczne',
          articles: [
            { label: 'Psychometria - podstawy', id: 'psychometria/psychometria_wprowadzenie', status: 'xlink' },
            { label: 'Testy neuropsychologiczne', id: 'testy/testy_przeglad', status: 'xlink' },
            { label: 'Techniki projekcyjne', id: 'diagnoza/techniki_projekcyjne', status: 'live' },
          ]
        },
        {
          title: 'Psychometria',
          articles: [
            { label: 'Podstawy pomiaru psychologicznego', id: 'psychometria/psychometria_wprowadzenie', status: 'live' },
            { label: 'Modele psychometryczne i struktura testu', id: 'psychometria/modele_psychometryczne_i_struktura_testu', status: 'live' },
            { label: 'Narzędzia przesiewowe i kliniczne', id: 'psychometria/narzedzia_kliniczne', status: 'live' },
            { label: 'Narzędzia diagnozy neurorozwojowej', id: 'psychometria/narzedzia_diagnozy_neurorozwojowej', status: 'live' },
            { label: 'Testy osobowości i zdolności', id: 'psychometria/testy_osobowosci_i_zdolnosci', status: 'live' },
          ]
        },
        {
          title: 'Etyka i prawo',
          articles: [
            { label: 'Opinia psychologiczna', id: 'diagnoza/opinia_psychologiczna', status: 'live' },
            { label: 'Tajemnica zawodowa w diagnozie', id: 'etyka/tajemnica_zawodowa_granice', sectionId: 'tajemnica-zawodowa-w-diagnozie-psychologicznej', status: 'xlink' },
            { label: 'Diagnoza, a stygmatyzacja', id: 'diagnoza/diagnoza_stygmatyzacja', status: 'live' },
          ]
        },
        {
          title: 'Literatura i zasoby',
          articles: [
            { label: 'Zakres wiedzy', id: 'reference/zakres', status: 'live' },
            { label: 'Literatura', id: 'reference/literatura', status: 'live' },
            { label: 'Bibliografia portalu', id: 'reference/bibliografia_portalu', status: 'live' },
            { label: 'Skale i akronimy diagnostyczne', id: 'reference/skale_i_akronimy', status: 'live' },
          ]
        },
      ]
    },

    biologia: {
      title: 'WIKI - Biologiczne podstawy zachowania',
      intro: 'Biologiczne podloze zachowaln i procesow psychicznych - od genetyki przez hormony po chronobiologie i mikrobiom.',
      sections: [
        {
          title: 'Podstawy',
          articles: [
            { label: 'Biologiczne podstawy zachowania', id: 'biologia/biologiczne_podstawy', status: 'live' },
            { label: 'Genetyka zachowania', id: 'biologia/genetyka_beh', status: 'live' },
            { label: 'Transmisja genetyczna zaburzeń', id: 'biologia/transmisja_genetyczna_zaburzen_psychicznych', status: 'live' },
            { label: 'Epigenetyka', id: 'biologia/epigenetyka', status: 'live' },
            { label: 'Psychofizjologia', id: 'biologia/psychofizjologia', status: 'live' },
          ]
        },
        {
          title: 'Regulacja biologiczna',
          articles: [
            { label: 'Hormony, a zachowanie', id: 'biologia/hormony', status: 'live' },
            { label: 'Chronobiologia', id: 'biologia/chronobiologia', status: 'live' },
            { label: 'Chronopsychologia', id: 'biologia/chronopsychologia', status: 'live' },
            { label: 'Mikrobiom, a mózg', id: 'biologia/mikrobiom', status: 'live' },
            { label: 'Ewolucja zachowania', id: 'biologia/ewolucja', status: 'live' },
          ]
        },
      ]
    },

    roznice_ind: {
      title: 'WIKI - Różnice indywidualne i temperament',
      intro: 'Czynniki wyjasniajace roznorodnosc psychologiczna - inteligencja, osobowosc, temperament i ich biologiczne podloze.',
      sections: [
        {
          title: 'Różnice indywidualne',
          articles: [
            { label: 'Wprowadzenie - roznice indywidualne', id: 'roznice_indywidualne/roznice_wprowadzenie', status: 'live' },
            { label: 'Inteligencja', id: 'roznice_indywidualne/inteligencja', status: 'live' },
            { label: 'Osobowosc - modele', id: 'roznice_indywidualne/osobowosc', status: 'live' },
            { label: 'Kreatywnosc', id: 'roznice_indywidualne/kreatywnosc', status: 'live' },
            { label: 'Genetyka osobowosci', id: 'roznice_indywidualne/genetyka', status: 'live' },
            { label: 'Style poznawcze', id: 'roznice_indywidualne/style_poznawcze', status: 'live' },
            { label: 'Reiss Motivation Profile', id: 'roznice_indywidualne/reiss_motivation_profile', status: 'live' },
            { label: 'Psychologia plci', id: 'roznice_indywidualne/plec_psychologia', status: 'live' },
            { label: 'Ciemna Triada', id: 'roznice_indywidualne/ciemna_triada', status: 'live' },
          ]
        },
        {
          title: 'Temperament',
          articles: [
            { label: 'Temperament',                        id: 'temperament/temperament_wprowadzenie', status: 'live' },
            { label: 'Modele temperamentu',                id: 'temperament/modele',                   status: 'live' },
            { label: 'Pomiar temperamentu',                id: 'temperament/pomiar',                   status: 'live' },
            { label: 'Temperament, a klinika',             id: 'temperament/kliniczne',                status: 'live' },
            { label: 'Rozwoj temperamentu',                id: 'temperament/rozwoj',                   status: 'live' },
            { label: 'RTT - teoria Strelaua',              id: 'temperament/strelau',                  status: 'live' },
            { label: 'Model Eysencka (PEN)',               id: 'temperament/eysenck',                  status: 'live' },
            { label: 'Teoria BIS/BAS Graya',               id: 'temperament/gray',                     status: 'live' },
            { label: 'Zahamowanie behawioralne (Kagan)',   id: 'temperament/kagan',                    status: 'live' },
            { label: 'Temperament, a psychopatologia',     id: 'temperament/temperament_a_psychopat',  status: 'live' },
            { label: 'Biologiczne podloze temperamentu',   id: 'temperament/biologia_temperamentu',    status: 'live' },
            { label: 'Temperament, a kariera i praca',     id: 'temperament/temperament_a_kariera',    status: 'live' },
          ]
        },
      ]
    },

    terapie_artystyczne: {
      title: 'WIKI - Terapie artystyczne i animaloterapia',
      intro: 'Terapie wykorzystujące sztukę oraz interwencje wspomagane przez zwierzęta: zakres, dowody i bezpieczne zastosowanie.',
      sections: [
        {
          title: 'Arteterapia',
          articles: [
            { label: 'Arteterapia i terapie wykorzystujące sztukę', id: 'arteterapia/arteterapia_wprowadzenie', status: 'live' },
          ]
        },
        {
          title: 'Animaloterapia',
          articles: [
            { label: 'Interwencje wspomagane przez zwierzęta', id: 'animaloterapia/animaloterapia_wprowadzenie', status: 'live' },
          ]
        },
      ]
    },

    etyka: {
      title: 'WIKI - Etyka zawodowa',
      intro: 'Zasady etyczne wykonywania zawodu psychologa i psychoterapeuty - od tajemnicy zawodowej po granice relacji.',
      sections: [
        {
          title: 'Fundament etyki',
          articles: [
            { label: 'Kodeksy etyczne - przeglad', id: 'etyka/kodeksy_etyczne', status: 'live' },
            { label: 'Zasady APA i PTP', id: 'etyka/zasady_apa_ptp', status: 'live' },
            { label: 'Dobro i nieszkodzenie', id: 'etyka/dobro_nieszkodzenie', status: 'live' },
          ]
        },
        {
          title: 'Praktyka',
          articles: [
            { label: 'Przepisy i zasady pracy psychologa w Polsce i NFZ', id: 'reference/przepisy_zawod', status: 'live' },
            { label: 'Tajemnica zawodowa i jej granice', id: 'etyka/tajemnica_zawodowa_granice', status: 'live' },
            { label: 'Świadoma zgoda', id: 'etyka/swiadoma_zgoda', status: 'live' },
            { label: 'Granice relacji terapeutycznej', id: 'etyka/granice_relacji', status: 'live' },
            { label: 'Superwizja i odpowiedzialność', id: 'etyka/superwizja_odpowiedzialnosc', status: 'live' },
          ]
        },
        {
          title: 'Zaawansowane zagadnienia',
          articles: [
            { label: 'Dylematy etyczne w praktyce',        id: 'etyka/dylematy_etyczne',          status: 'live' },
            { label: 'Kompetencje kulturowe',              id: 'etyka/kompetencje_kulturowe',     status: 'live' },
            { label: 'Etyka badań naukowych',              id: 'etyka/etyka_badan',               status: 'live' },
            { label: 'Etyka w psychologii cyfrowej',       id: 'etyka/etyka_cyfrowa',             status: 'live' },
            { label: 'Odpowiedzialnosc zawodowa',          id: 'etyka/odpowiedzialnosc_zawodowa', status: 'live' },
          ]
        },
      ]
    },

    zdrowie: {
      title: 'WIKI - Psychologia zdrowia',
      intro: 'Sześć opracowań łączy modele zdrowia, zachowania, stres, chorobę przewlekłą, ból oraz interwencje w opiece.',
      sections: [
        {
          title: 'Opracowania kanoniczne',
          articles: [
            { label: 'Modele zdrowia i choroby', id: 'psychologia_zdrowia/zdrowie_wprowadzenie', status: 'live' },
            { label: 'Zachowania i styl życia', id: 'psychologia_zdrowia/zachowania_zdrowotne', status: 'live' },
            { label: 'Stres, radzenie sobie i wsparcie', id: 'psychologia_zdrowia/stres', status: 'live' },
            { label: 'Choroba przewlekła, rehabilitacja i jakość życia', id: 'psychologia_zdrowia/choroby_przewlekle', status: 'live' },
            { label: 'Psychologia bólu', id: 'psychologia_zdrowia/bol', status: 'live' },
            { label: 'Komunikacja i interwencje w opiece zdrowotnej', id: 'psychologia_zdrowia/interwencje_zdrowotne', status: 'live' },
          ]
        },
        {
          title: 'Powiązane opracowania',
          articles: [
            { label: 'Wsparcie społeczne', id: 'podstawy_pomocy/wsparcie_spoleczne', status: 'xlink' },
            { label: 'Wypalenie zawodowe', id: 'rezyliencja_i_mobbing/wypalenie_zawodowe', status: 'xlink' },
          ]
        },
      ]
    },

    psychosomatics: {
      title: 'WIKI - Psychosomatyka',
      intro: 'Psychosomatyka bada wzajemne relacje miedzy procesami psychicznymi, a cialem - od osi HPA i aleksytymii po psychodermatologie, psychokardiologie i terapie psychosomatyczna.',
      sections: [
        {
          title: 'Podstawy i historia',
          articles: [
            { label: 'Psychosomatyka',                  id: 'psychosomatyka/wprowadzenie',            status: 'live' },
            { label: 'Historia psychosomatyki',         id: 'psychosomatyka/historia_psychosomatyki',                status: 'live' },
            { label: 'Modele psychosomatyczne',         id: 'psychosomatyka/modele_psychosomatyczne', status: 'live' },
          ]
        },
        {
          title: 'Mechanizmy biologiczne',
          articles: [
            { label: 'Os HPA i mechanizmy stresu',      id: 'psychosomatyka/os_hpa',                  status: 'live' },
          ]
        },
        {
          title: 'Zaburzenia i somatyzacja',
          articles: [
            { label: 'Somatyzacja i zaburzenia somatyczne', id: 'psychosomatyka/somatyzacja',         status: 'live' },
            { label: 'Ból psychosomatyczny',            id: 'psychosomatyka/bol_psychosomatyczny',    status: 'live' },
          ]
        },
        {
          title: 'Uklady narzadowe',
          articles: [
            { label: 'Psychodermatologia',              id: 'psychosomatyka/psychodermatologia',      status: 'live' },
            { label: 'Psychogastroenterologia',         id: 'psychosomatyka/psychogastroenterologia', status: 'live' },
            { label: 'Psychokardiologia',               id: 'psychosomatyka/psychokardiologia',       status: 'live' },
            { label: 'Psychosomatyka ukladu oddechowego', id: 'psychosomatyka/uklad_oddechowy',       status: 'live' },
            { label: 'Choroby autoimmunologiczne',      id: 'psychosomatyka/choroby_autoimmunologiczne', status: 'live' },
          ]
        },
        {
          title: 'Praktyka kliniczna',
          articles: [
            { label: 'Diagnoza psychosomatyczna',       id: 'psychosomatyka/diagnoza_psychosomatyczna', status: 'live' },
            { label: 'Terapia psychosomatyczna',        id: 'psychosomatyka/terapia_psychosomatyczna',  status: 'live' },
          ]
        },
      ]
    },

    niepelnosprawnosc: {
      title: 'WIKI - Psychologia osob z niepelnosprawnoscia',
      intro: 'Psychologiczne aspekty zycia z niepelnosprawnoscia. Od modeli i klasyfikacji przez specyfike poszczegolnych rodzajow niepelnosprawnosci po rehabilitacje, jakosc zycia i inkluzje spoleczna.',
      sections: [
        {
          title: 'Podstawy',
          articles: [
            { label: 'Psychologia niepelnosprawnosci',     id: 'psychologia_niepelnosprawnosci/wprowadzenie', status: 'live' },
            { label: 'Modele niepelnosprawnosci',          id: 'psychologia_niepelnosprawnosci/modele_niepelnosprawnosci', status: 'live' },
          ]
        },
        {
          title: 'Rodzaje niepelnosprawnosci',
          articles: [
            { label: 'Niepelnosprawnosc intelektualna',  id: 'psychologia_niepelnosprawnosci/niepelnosprawnosc_intelektualna', status: 'live' },
            { label: 'Niepelnosprawnosc ruchowa',        id: 'psychologia_niepelnosprawnosci/niepelnosprawnosc_ruchowa', status: 'live' },
            { label: 'Niepelnosprawnosc wzrokowa',       id: 'psychologia_niepelnosprawnosci/niepelnosprawnosc_wzrokowa', status: 'live' },
            { label: 'Niepelnosprawnosc sluchowa',       id: 'psychologia_niepelnosprawnosci/niepelnosprawnosc_sluchowa', status: 'live' },
            { label: 'Spektrum autyzmu', id: 'neuroroznorodnosc/spektrum_autyzmu', status: 'xlink' },
          ]
        },
        {
          title: 'Funkcjonowanie psychiczne',
          articles: [
            { label: 'Jakość życia',                          id: 'psychologia_zdrowia/jakosc_zycia',                  status: 'live' },
            { label: 'Stres, adaptacja i radzenie sobie',       id: 'psychologia_niepelnosprawnosci/stres_i_adaptacja', status: 'live' },
          ]
        },
        {
          title: 'Srodowisko i wsparcie',
          articles: [
            { label: 'Rodzina i opiekunowie',         id: 'psychologia_niepelnosprawnosci/rodzina_i_opiekunowie', status: 'live' },
            { label: 'Rehabilitacja psychologiczna', id: 'psychologia_zdrowia/choroby_przewlekle', status: 'xlink' },
            { label: 'Inkluzja spoleczna i prawa',    id: 'psychologia_niepelnosprawnosci/inkluzja_spoleczna', status: 'live' },
          ]
        },
      ]
    },

    geropsychology: {
      title: 'WIKI - Psychologia osob w podeszlym wieku',
      intro: 'Psychologia osob w podeszlym wieku bada procesy starzenia się, zdrowie psychiczne, funkcjonowanie poznawcze i społeczne seniorów - od demencji i depresji po adaptacje do starości i wsparcie opiekunów.',
      sections: [
        {
          title: 'Podstawy i wprowadzenie',
          articles: [
            { label: 'Psychologia starzenia się i późnej dorosłości', id: 'geropsychologia/wprowadzenie', status: 'live' },
            { label: 'Samotność i izolacja społeczna w późnej dorosłości', id: 'relacje/samotnosc', status: 'xlink' },
            { label: 'Funkcje poznawcze i zdrowie psychiczne', id: 'geropsychologia/poznanie_i_zdrowie_psychiczne_w_starosci', status: 'live' },
            { label: 'Pomoc psychologiczna, opieka i koniec życia', id: 'geropsychologia/pomoc_psychologiczna_i_opieka_w_starosci', status: 'live' },
          ]
        },
      ]
    },

    gry_wideo: {
      title: 'WIKI - Psychologia gier wideo',
      intro: 'Trzy opracowania o motywacji i doświadczeniu gracza, skutkach grania i używaniu problemowym oraz zastosowaniach gier i esporcie.',
      sections: [
        {
          title: 'Psychologia gier',
          articles: [
            { label: 'Motywacja i doświadczenie gracza', id: 'psychologia_gier/wprowadzenie', status: 'live' },
            { label: 'Skutki grania i używanie problemowe', id: 'psychologia_gier/skutki_grania_i_uzywanie_problemowe', status: 'live' },
            { label: 'Zastosowania gier i esport', id: 'psychologia_gier/zastosowania_gier_i_esport', status: 'live' },
          ]
        },
      ]
    },

    odpornosc_mobbing: {
      title: 'WIKI - Odpornosc psychiczna, mobbing i wypalenie zawodowe',
      intro: 'Encyklopedia obejmuje trzy powiązane obszary: odporność psychiczna (resilience) jako zasób chroniący, psychologiczne aspekty przemocy psychicznej i mobbingu w miejscu pracy oraz wypalenie zawodowe - mechanizmy, skutki i profilaktykę.',
      sections: [
        {
          title: 'Odpornosc psychiczna',
          articles: [
            { label: 'Odpornosc psychiczna',  id: 'rezyliencja_i_mobbing/odpornosc_wprowadzenie', status: 'live' },
            { label: 'Modele i teorie odporności',            id: 'rezyliencja_i_mobbing/modele_odpornosci',      status: 'live' },
            { label: 'Budowanie odporności psychicznej',      id: 'rezyliencja_i_mobbing/budowanie_odpornosci',   status: 'live' },
          ]
        },
        {
          title: 'Przemoc psychiczna i mobbing',
          articles: [
            { label: 'Przemoc psychiczna - definicja i formy',   id: 'rezyliencja_i_mobbing/przemoc_psychiczna',    status: 'live' },
            { label: 'Mobbing - definicja, rodzaje i fazy',      id: 'rezyliencja_i_mobbing/mobbing_definicja',     status: 'live' },
            { label: 'Skutki psychologiczne mobbingu',           id: 'rezyliencja_i_mobbing/mobbing_skutki',        status: 'live' },
            { label: 'Interwencja i zapobieganie mobbingowi',    id: 'rezyliencja_i_mobbing/mobbing_interwencja',   status: 'live' },
            { label: 'Wsparcie psychologiczne ofiar',            id: 'rezyliencja_i_mobbing/wsparcie_psychologiczne', status: 'live' },
          ]
        },
        {
          title: 'Wypalenie zawodowe',
          articles: [
            { label: 'Wypalenie zawodowe - definicja i modele',  id: 'rezyliencja_i_mobbing/wypalenie_zawodowe',    status: 'live' },
            { label: 'Fazy i wymiary wypalenia zawodowego',      id: 'rezyliencja_i_mobbing/fazy_wypalenia',        status: 'live' },
            { label: 'Wypalenie w wybranych zawodach',           id: 'rezyliencja_i_mobbing/wypalenie_zawody',      status: 'live' },
            { label: 'Profilaktyka wypalenia zawodowego',        id: 'rezyliencja_i_mobbing/profilaktyka_wypalenia', status: 'live' },
          ]
        },
      ]
    },

    media_natura: {
      title: 'WIKI - Ekrany, książki i natura',
      intro: 'Trzy kanoniczne opracowania pokazują, jak sposób używania ekranów, praktyki czytelnicze i kontakt z naturą wiążą się z funkcjonowaniem psychicznym.',
      sections: [
        {
          title: 'Ekrany',
          articles: [
            { label: 'Ekrany i funkcjonowanie psychiczne', id: 'ekrany_ksiazki_i_natura/ekrany_i_funkcjonowanie_psychiczne', status: 'live' },
          ]
        },
        {
          title: 'Czytanie',
          articles: [
            { label: 'Czytanie i psychologia', id: 'ekrany_ksiazki_i_natura/czytanie_i_psychologia', status: 'live' },
          ]
        },
        {
          title: 'Kontakt z naturą',
          articles: [
            { label: 'Kontakt z naturą i zdrowie psychiczne', id: 'ekrany_ksiazki_i_natura/kontakt_z_natura_i_zdrowie_psychiczne', status: 'live' },
          ]
        },
      ]
    },

    psych_pozytywna: {
      title: 'WIKI - Psychologia pozytywna',
      intro: 'Psychologia pozytywna bada dobrostan, jego uwarunkowania oraz możliwości odpowiedzialnego wspierania dobrego funkcjonowania.',
      sections: [
        {
          title: 'Artykuły kanoniczne',
          articles: [
            { label: 'Dobrostan psychiczny: modele, uwarunkowania i pomiar', id: 'psychologia_pozytywna/szczescie_dobrostan', status: 'live' },
            { label: 'Interwencje psychologii pozytywnej', id: 'psychologia_pozytywna/interwencje_pozytywne', status: 'live' },
            { label: 'Uważność, przepływ i samowspółczucie', id: 'psychologia_pozytywna/uwaznosc_przeplyw_i_samowspolczucie', status: 'live' },
          ]
        },
      ]
    },

    psych_ai: {
      title: 'WIKI - Psychologia sztucznej inteligencji',
      intro: 'Trzy kanoniczne opracowania łączą psychologię interakcji człowiek–AI i robotów, zastosowania w zdrowiu i opiece oraz mechanizmy, ograniczenia i etykę AI. Interfejsy mózg–maszyna pozostają osobnym artykułem neurotechnologicznym.',
      sections: [
        {
          title: 'Artykuły kanoniczne',
          articles: [
            { label: 'Psychologia interakcji człowiek–AI', id: 'psychologia_ai/psychologia_interakcji_czlowiek_ai', status: 'live' },
            { label: 'AI w zdrowiu psychicznym i opiece', id: 'psychologia_ai/ai_w_zdrowiu_psychicznym_i_opiece', status: 'live' },
            { label: 'Mechanizmy, ograniczenia i etyka AI', id: 'psychologia_ai/mechanizmy_ograniczenia_i_etyka_ai', status: 'live' },
          ]
        },
        {
          title: 'Neurotechnologia',
          articles: [
            { label: 'Interfejsy mózg–maszyna (BCI)', id: 'robotyka_afektywna/interfejsy_mozg_maszyna', status: 'xlink' },
          ]
        },
      ]
    },

    psychologia_technologii: {
      title: 'WIKI - Psychologia technologii i dobrostanu cyfrowego',
      intro: 'Encyklopedia porzadkuje wiedze o wplywie technologii cyfrowych na funkcjonowanie psychiczne człowieka: stres, uwage, sen, regulacje emocji, relacje, poczucie sprawczosci oraz dobrostan. Łączy perspektywę badawczą z praktyką psychoedukacyjną i profilaktyką zdrowia psychicznego.',
      sections: [
        {
          title: 'Artykuly dostepne',
          articles: [
            { label: 'Technostres - artykul naukowy', id: 'psychologia_technologii/technostres', status: 'live' },
          ]
        },
        {
          title: 'Plan redakcyjny: wplyw technologii na psychologie człowieka',
          articles: [
            { label: 'Zmeczenie cyfrowe i przeciazenie informacyjne',    id: 'psychologia_technologii/zmeczenie_cyfrowe',     status: 'live' },
            { label: 'FOMO i nomofobia',                                  id: 'psychologia_technologii/fomo_i_nomofobia',      status: 'live' },
            { label: 'Algorytmy personalizacji, a samoocena',              id: 'psychologia_technologii/algorytmy_a_samoocena', status: 'live' },
            { label: 'Higiena cyfrowa i profilaktyka przeciazenia',       id: 'psychologia_technologii/higiena_cyfrowa',       status: 'live' },
            { label: 'Technologia w pracy: granice, kontrola i autonomia',id: 'psychologia_technologii/technologia_w_pracy',   status: 'live' },
            { label: 'Technologia, a sen i regeneracja psychiczna',        id: 'psychologia_technologii/technologia_a_sen',     status: 'live' },
            { label: 'Psychoedukacja rodzinna w erze ekranów',            id: 'psychologia_technologii/psychoedukacja_rodzinna', status: 'live' },
            { label: 'Psycholog w IT',                                       id: 'dla_studentow/psycholog_w_it', status: 'xlink' },
          ]
        },
      ]
    },

    robotyka_afektywna: {
      title: 'WIKI - Psychologia sztucznej inteligencji',
      intro: 'Treści robotyki afektywnej zostały włączone do trzech artykułów kanonicznych psychologii AI; osobno zachowano neurotechnologiczne opracowanie o interfejsach mózg–maszyna.',
      sections: [
        {
          title: 'Nowa domena kanoniczna',
          articles: [
            { label: 'Psychologia interakcji człowiek–AI', id: 'psychologia_ai/psychologia_interakcji_czlowiek_ai', status: 'xlink' },
            { label: 'AI w zdrowiu psychicznym i opiece', id: 'psychologia_ai/ai_w_zdrowiu_psychicznym_i_opiece', status: 'xlink' },
            { label: 'Mechanizmy, ograniczenia i etyka AI', id: 'psychologia_ai/mechanizmy_ograniczenia_i_etyka_ai', status: 'xlink' },
            { label: 'Interfejsy mózg–maszyna (BCI)', id: 'robotyka_afektywna/interfejsy_mozg_maszyna', status: 'live' },
          ]
        },
      ]
    },

    psych_szkolna: {
      title: 'WIKI - Psychologia szkolna i edukacyjna',
      intro: 'Cztery kanoniczne opracowania łączą wiedzę o uczeniu i motywacji, ocenianiu i relacji edukacyjnej, trudnościach i wsparciu oraz klimacie, stresie i przemocy szkolnej.',
      sections: [
        {
          title: 'Uczenie, wsparcie i środowisko szkoły',
          articles: [
            { label: 'Uczenie się i motywacja szkolna', id: 'psychologia_szkolna/teorie_uczenia_sie', status: 'live' },
            { label: 'Ocenianie, informacja zwrotna i relacja edukacyjna', id: 'psychologia_szkolna/ocenianie_i_informacja_zwrotna', status: 'live' },
            { label: 'Trudności w uczeniu i wsparcie szkolne', id: 'psychologia_szkolna/trudnosci_w_uczeniu_sie', status: 'live' },
            { label: 'Klimat szkolny, stres i przemoc', id: 'psychologia_szkolna/klimat_szkolny', status: 'live' },
          ]
        },
      ]
    },

    neurozroznorodnosc: {
      title: 'WIKI - Neuroróżnorodność',
      intro: 'Neuroróżnorodność to koncepcja uznająca naturalne różnice neurologiczne - takie jak autyzm, ADHD, dysleksja, dyskalkulia czy dyspraksja - za warianty ludzkiego mózgu, a nie zaburzenia wymagające "naprawy". Encyklopedia obejmuje zagadnienia od podstaw teoretycznych neuroróżnorodności, przez poszczególne profile neurologiczne, po modele mocnych stron, wsparcie, interwencje i inkluzję zawodową.',
      sections: [
        {
          title: 'Podstawy i profile',
          articles: [
            { label: 'Neuroróżnorodność',     id: 'neuroroznorodnosc/wprowadzenie',     status: 'live' },
            { label: 'ADHD jako wariant neuroróżnorodności', id: 'neuroroznorodnosc/adhd',             status: 'live' },
            { label: 'Spektrum autyzmu (ASD)',                id: 'neuroroznorodnosc/spektrum_autyzmu', status: 'live' },
          ]
        },
        {
          title: 'Trudnosci uczenia się',
          articles: [
            { label: 'Dysleksja',        id: 'neuroroznorodnosc/dysleksja',   status: 'live' },
            { label: 'Dyskalkulia',      id: 'neuroroznorodnosc/dyskalkulia', status: 'live' },
            { label: 'Dyspraksja i DCD', id: 'neuroroznorodnosc/dyspraksja',  status: 'live' },
          ]
        },
        {
          title: 'Inne profile i zdolnosci',
          articles: [
            { label: 'Profil sensoryczny',                 id: 'neuroroznorodnosc/profil_sensoryczny', status: 'live' },
            { label: "Zespół Tourette'a i tiki",         id: 'neuroroznorodnosc/tourette',    status: 'live' },
            { label: 'Hiperleksja i wyjatkowe zdolnosci', id: 'neuroroznorodnosc/hiperleksja', status: 'live' },
          ]
        },
        {
          title: 'Wsparcie i inkluzja',
          articles: [
            { label: 'Model mocnych stron',                id: 'neuroroznorodnosc/model_mocnych_stron',        status: 'live' },
            { label: 'Wsparcie i interwencje',             id: 'neuroroznorodnosc/wsparcie_interwencje',       status: 'live' },
            { label: 'Neuroróżnorodność w miejscu pracy', id: 'neuroroznorodnosc/neurozroznorodnosc_w_pracy', status: 'live' },
            { label: 'Identyfikacja i diagnoza',           id: 'neuroroznorodnosc/identyfikacja_i_diagnoza',   status: 'live' },
          ]
        },
      ]
    },

    psych_sadowa: {
      title: 'WIKI - Psychologia sadowa i opiniowanie',
      intro: 'Psychologia sadowa zajmuje sie stosowaniem wiedzy i metod psychologicznych w postepowaniach prawnych - karnych, cywilnych i rodzinnych. Encyklopedia obejmuje role bieglego psychologa, podstawy prawne opiniowania, metodologię sporzadzania opinii, ocene wiarygodnosci zeznaln, specjalistyczne narzedzia diagnostyczne oraz etykę zawodowa w pracy sadowej.',
      sections: [
        {
          title: 'Podstawy i rola bieglego',
          articles: [
            { label: 'Biegly psycholog',                 id: 'psychologia_sadowa/wprowadzenie',   status: 'live' },
            { label: 'Rola i status bieglego',           id: 'psychologia_sadowa/rola_bieglego',  status: 'live' },
            { label: 'Podstawy prawne opiniowania',      id: 'psychologia_sadowa/podstawy_prawne', status: 'live' },
            { label: 'Metodologia sporzadzania opinii',  id: 'psychologia_sadowa/metodologia_opinii', status: 'live' },
          ]
        },
        {
          title: 'Ocena i opiniowanie',
          articles: [
            { label: 'Ocena wiarygodnosci zeznal',         id: 'psychologia_sadowa/ocena_wiarygodnosci',    status: 'live' },
            { label: 'Opiniowanie w sprawach karnych',     id: 'psychologia_sadowa/opinia_karna',           status: 'live' },
            { label: 'Opiniowanie w sprawach cywilnych',   id: 'psychologia_sadowa/opinia_cywilna',         status: 'live' },
            { label: 'Opiniowanie w sprawach rodzinnych',  id: 'psychologia_sadowa/opinia_rodzinna',        status: 'live' },
            { label: 'Opiniowanie nieletnich i dzieci',    id: 'psychologia_sadowa/opiniowanie_nieletnich', status: 'live' },
          ]
        },
        {
          title: 'Narzedzia i etyka',
          articles: [
            { label: 'Narzedzia diagnostyczne (sadowe)',  id: 'psychologia_sadowa/narzedzia_diagnostyczne', status: 'live' },
            { label: 'Etyka opiniowania sadowego',        id: 'psychologia_sadowa/etyka_opiniowania',       status: 'live' },
            { label: 'Biegly, a sad - komunikacja',       id: 'psychologia_sadowa/biegly_a_sad',            status: 'live' },
          ]
        },
      ]
    },

    e_terapia: {
      title: 'WIKI - E-terapia',
      intro: 'E-terapia obejmuje pracę specjalisty na odległość, samodzielne cyfrowe narzędzia zdrowia psychicznego oraz interwencje wykorzystujące wirtualną rzeczywistość.',
      sections: [
        {
          title: 'Opracowania kanoniczne',
          articles: [
            { label: 'Terapia online', id: 'e_terapia/terapia_online', status: 'live' },
            { label: 'Cyfrowe narzędzia zdrowia psychicznego', id: 'e_terapia/cyfrowe_narzedzia_zdrowia_psychicznego', status: 'live' },
            { label: 'Wirtualna rzeczywistość w terapii', id: 'e_terapia/vr_terapia', status: 'live' },
          ]
        },
      ]
    },

    filozofia: {
      title: 'WIKI - Filozofia',
      intro: 'Filozofia jest matką wszystkich nauk - bada fundamentalne pytania o rzeczywistość, poznanie, wartości i naturę człowieka. Encyklopedia obejmuje główne działy filozofii (ontologię, epistemologię, etykę, filozofie umyslu) oraz kierunki szczególnie bliskie psychologii: egzystencjalizm, fenomenologie, hermeneutyke i filozofię języka.',
      sections: [
        {
          title: 'Podstawy filozofii',
          articles: [
            { label: 'Filozofia',                       id: 'filozofia/wprowadzenie',  status: 'live' },
            { label: 'Ontologia i metafizyka',          id: 'filozofia/ontologia',     status: 'live' },
            { label: 'Epistemologia i teoria poznania', id: 'filozofia/epistemologia', status: 'live' },
            { label: 'Egocentryczny dylemat poznania',  id: 'filozofia/egocentryczny_dylemat', status: 'live' },
            { label: 'Etyka i filozofia moralna',       id: 'filozofia/etyka',         status: 'live' },
          ]
        },
        {
          title: 'Filozofia umyslu i nauki',
          articles: [
            { label: 'Filozofia umyslu',                id: 'filozofia/filozofia_umyslu',    status: 'live' },
            { label: 'Filozofia nauki',                 id: 'filozofia/filozofia_nauki',     status: 'live' },
            { label: 'Logika i argumentacja',           id: 'filozofia/logika',              status: 'live' },
          ]
        },
        {
          title: 'Kierunki bliskie psychologii',
          articles: [
            { label: 'Egzystencjalizm',                 id: 'filozofia/egzystencjalizm',     status: 'live' },
            { label: 'Fenomenologia',                   id: 'filozofia/fenomenologia',       status: 'live' },
            { label: 'Hermeneutyka i interpretacja',    id: 'filozofia/hermeneutyka',        status: 'live' },
            { label: 'Filozofia jezyka',                id: 'filozofia/filozofia_jezyka',    status: 'live' },
            { label: 'Filozofia człowieka',             id: 'filozofia/filozofia_czlowieka', status: 'live' },
          ]
        },
        {
          title: 'Filozofia ciemna i spekulatywna',
          articles: [
            { label: 'Cień antropiczny',                       id: 'filozofia/cien_antropiczny',          status: 'live' },
            { label: 'MBzg Boltzmanna',                        id: 'filozofia/mozg_boltzmanna',           status: 'live' },
            { label: 'Horror panpsychizmu',                    id: 'filozofia/horror_panpsychizmu',       status: 'live' },
            { label: 'Filozoficzne zombie',                    id: 'filozofia/filozoficzne_zombie',       status: 'live' },
            { label: 'Pusty indywidualizm',                    id: 'filozofia/pusty_indywidualizm',       status: 'live' },
            { label: 'Asymetria dobra i bólu',                 id: 'filozofia/asymetria_dobra_i_bolu',    status: 'live' },
            { label: 'Niemoralność braku zgody na narodziny',  id: 'filozofia/niemoralnosc_braku_zgody',  status: 'live' },
            { label: 'Redukcjonizm tozsamosci osobowej',       id: 'filozofia/redukcjonizm_tozsamosci',   status: 'live' },
            { label: 'Eliminatywizm materialny',               id: 'filozofia/eliminatywizm_materialny',  status: 'live' },
            { label: 'Efilizm',                                id: 'filozofia/efilizm',                   status: 'live' },
            { label: 'Pesymizm biologiczny',                   id: 'filozofia/pesymizm_biologiczny',      status: 'live' },
            { label: 'Podswiadomy nihilizm',                   id: 'filozofia/podswiadomy_nihilizm',      status: 'live' },
            { label: 'Paradoksalny determinizm',               id: 'filozofia/paradoksalny_determinizm',  status: 'live' },
            { label: 'Realizm modalny',                        id: 'filozofia/realizm_modalny',           status: 'live' },
          ]
        },
      ]
    },

    nvc: {
      title: 'WIKI - Porozumiewanie się bez przemocy (NVC)',
      intro: 'Porozumienie bez Przemocy (NVC) to model komunikacji opracowany przez Marshalla Rosenberga. Encyklopedia przedstawia jego założenia i cztery komponenty, zastosowania, granice oraz stan badań.',
      sections: [
        {
          title: 'Porozumienie bez Przemocy',
          articles: [
            { label: 'Założenia i cztery komponenty', id: 'porozumiewanie_sie_bez_przemocy/wprowadzenie',   status: 'live', desc: 'Założenia NVC, obserwacja, uczucie, potrzeba, prośba oraz dydaktyczne metafory szakala i żyrafy.' },
            { label: 'NVC w praktyce',                 id: 'porozumiewanie_sie_bez_przemocy/nvc_w_praktyce', status: 'live', desc: 'Słuchanie, autoempatia, konflikt, wychowanie, bezpieczeństwo i jakość dowodów.' },
          ]
        },
      ]
    },

    seminarium_dyplomowe: {
      title: 'WIKI - Seminarium dyplomowe',
      intro: 'Seminarium dyplomowe przygotowuje studentów psychologii do samodzielnego prowadzenia badań i pisania pracy magisterskiej. Encyklopedia obejmuje zasady pisania pracy naukowej, metodologię badań, prowadzenie pomiarów psychologicznych, analizy statystyczne, etykę naukowa, typowe błędy badawcze oraz dobre praktyki akademickie.',
      sections: [
        {
          title: 'Podstawy pracy naukowej',
          articles: [
            { label: 'Seminarium dyplomowe',                 id: 'seminarium_dyplomowe/wprowadzenie',         status: 'live', desc: 'Cel i struktura seminarium dyplomowego, typy prac magisterskich.' },
            { label: 'Struktura pracy magisterskiej',        id: 'seminarium_dyplomowe/struktura_pracy',      status: 'live', desc: 'Standardowe rozdzialy, formatowanie i objetosc pracy.' },
            { label: 'Przegląd literatury naukowej',         id: 'seminarium_dyplomowe/przeglad_literatury',  status: 'live', desc: 'Bazy danych, strategie wyszukiwania, ocena źródeł, cytowanie.' },
          ]
        },
        {
          title: 'Metodologia i pomiar',
          articles: [
            { label: 'Metodologia badań psychologicznych',    id: 'seminarium_dyplomowe/metodologia_badan',       status: 'live', desc: 'Paradygmaty, typy projektów, dobór próby, operacjonalizacja.' },
            { label: 'Zasady prowadzenia pomiarów',           id: 'seminarium_dyplomowe/pomiary_psychologiczne',  status: 'live', desc: 'Skale, rzetelnosc, trafnosc, standaryzacja, normy.' },
            { label: 'Narzedzia badawcze i kwestionariusze',  id: 'seminarium_dyplomowe/narzedzia_badawcze',      status: 'live', desc: 'Wybór narzędzia, adaptacja, tworzenie własnych kwestionariuszy.' },
            { label: 'Analizy statystyczne',                  id: 'seminarium_dyplomowe/analizy_statystyczne',    status: 'live', desc: 'Testy parametryczne i nieparametryczne, efekty, raportowanie APA.' },
          ]
        },
        {
          title: 'Etyka i jakosc badań',
          articles: [
            { label: 'Błędy badawcze - czego unikac',       id: 'seminarium_dyplomowe/bledy_badawcze',   status: 'live', desc: 'Błędy projektowania, pomiaru, analizy i interpretacji wyników.' },
          ]
        },
        {
          title: 'Pisanie i obrona',
          articles: [
            { label: 'Pisanie i interpretacja wyników',  id: 'seminarium_dyplomowe/opis_wynikow',    status: 'live', desc: 'Raportowanie statystyk, tabele, wykresy, dyskusja i ograniczenia.' },
            { label: 'Obrona pracy magisterskiej',       id: 'seminarium_dyplomowe/obrona_pracy',    status: 'live', desc: 'Prezentacja, typowe pytania, strategia odpowiedzi, stres.' },
            { label: 'Dobre praktyki w pisaniu pracy',   id: 'seminarium_dyplomowe/dobre_praktyki',  status: 'live', desc: 'Organizacja czasu, zarzadzanie danymi, relacja z promotorem, dobrostan.' },
          ]
        },
      ]
    },

    dodatkowe_strony: {
      title: 'Dodatkowe strony',
      intro: 'Zbior dodatkowych materialow HTML umieszczonych w katalogu /pages. Sekcja ulatwia szybki dostep do stron pomocniczych i raportow.',
      sections: [
        {
          title: 'Strony HTML w katalogu /pages',
          articles: [
            { label: 'Przyjazń', href: 'pages/przyjazn.html', status: 'xlink', desc: 'Dodatkowa strona HTML: przyjazn.html.' },
            { label: 'Diagnoza - prezentacja', href: 'pages/diagnoza_prezentacja.html', status: 'xlink', desc: 'diagnoza_prezentacja.html' },
            { label: 'Diagnoza - prezentacja (wersja 2)', href: 'pages/diagnoza_prezentacja_2.html', status: 'xlink', desc: 'Dodatkowa strona HTML: diagnoza_prezentacja_2.html.' },
            { label: 'Eksperyment n-back', href: 'pages/n_back_eksperyment.html', status: 'xlink', desc: 'Interaktywna strona HTML do przeprowadzania eksperymentu zadania n-back.' },
            { label: 'Wstyd i wina', href: 'pages/wstyd_i_wina.html', status: 'xlink', desc: 'wstyd_i_wina.html' },
            { label: 'Raport neuroroznorodnosci', href: 'pages/Raport_neuroroznorodnosci.html', status: 'xlink', desc: 'Raport_neuroroznorodnosci.html' },
            { label: 'ADHD', href: 'pages/adhd.html', status: 'xlink', desc: 'ADHD', icon: 'mdi-book-open-page-variant' },
            { label: 'ADHD u dziecka', href: 'pages/trudne_zachowania_dziecka.html', status: 'xlink', desc: 'ADHD u dziecka', icon: 'mdi-book-open-page-variant' },
            { label: 'ADHD full', href: 'pages/adhd_2.html', status: 'xlink', desc: 'ADHD v2', icon: 'mdi-book-open-page-variant' },
            { label: 'ASD', href: 'pages/asd.html', status: 'xlink', desc: 'ASD', icon: 'mdi-book-open-page-variant' },
            { label: 'Borderline', href: 'pages/borderline.html', status: 'xlink', desc: 'Borderline', icon: 'mdi-book-open-page-variant' },
            { label: 'PTSD', href: 'pages/ptsd.html', status: 'xlink', desc: 'PTSD', icon: 'mdi-book-open-page-variant' },
            { label: 'Unikowy styl przywiązaia', href: 'pages/styl_unikowy.html', status: 'xlink', desc: 'Styl unikowy', icon: 'mdi-book-open-page-variant' },
            { label: 'Strona P1', href: 'pages/p1.html', status: 'xlink', desc: 'Manipulacja kulturowa' },
            { label: 'Strona P2', href: 'pages/p2.html', status: 'xlink', desc: 'Rozmowa i obserwacja w diagnozie psychologicznej' },
            { label: 'Strona P3', href: 'pages/p3.html', status: 'xlink', desc: 'Czarna obsada w filmie historycznym' },
            { label: 'Strona P4', href: 'pages/p4.html', status: 'xlink', desc: 'Psychiatria obliczeniowa' },
            { label: 'Strona P5', href: 'pages/p5.html', status: 'xlink', desc: 'Humor jako mechanizm obronny' },
            { label: 'Strona P6', href: 'pages/p6.html', status: 'xlink', desc: 'Planowana dodatkowa strona HTML: p6.html' },
            { label: 'Strona P7', href: 'pages/p7.html', status: 'xlink', desc: 'NLP oraz testu Insightful Profiler iP121' },
            { label: 'Strona P8', href: 'pages/p8.html', status: 'xlink', desc: 'Gry psychologiczne' },
            { label: 'Strona P9', href: 'pages/p9.html', status: 'xlink', desc: 'Planowana strona HTML' },
            { label: 'Strona P10', href: 'pages/p10.html', status: 'xlink', desc: 'Planowana strona HTML' },
          ]
        }
      ]
    },

    instrukcje_lab_pdf: {
      title: 'WIKI - Instrukcje laboratoryjne PDF',
      intro: 'Modul zbierajacy instrukcje laboratoryjne w formacie PDF z katalogu /labs. Umozliwia wybor pliku z listy oraz wygodne podgladanie materialu bez opuszczania portalu.',
      sections: [
        {
          type: 'pdfLabBrowser',
          title: 'Wybór instrukcji laboratoryjnej',
          files: [
            { id: 'labs/neuro_lab1', label: 'Neuropsychologia - lab 1', href: 'labs/neuro_lab1.pdf' },
            { id: 'labs/neuro_lab2', label: 'Neuropsychologia - lab 2', href: 'labs/neuro_lab2.pdf' },
            { id: 'labs/neuro_lab3', label: 'Neuropsychologia - lab 3', href: 'labs/neuro_lab3.pdf' },
            { id: 'labs/neuro_lab4', label: 'Neuropsychologia - lab 4', href: 'labs/neuro_lab4.pdf' },
            { id: 'labs/diagnoza_lab2', label: 'Diagnoza psychologiczna - lab 2', href: 'labs/diagnoza_lab2.pdf' },
            { id: 'labs/diagnoza_lab3', label: 'Diagnoza psychologiczna - lab 3', href: 'labs/diagnoza_lab3.pdf' },
            { id: 'labs/diagnoza_lab4', label: 'Diagnoza psychologiczna - lab 4', href: 'labs/diagnoza_lab4.pdf' },
            { id: 'labs/diagnoza_lab5', label: 'Diagnoza psychologiczna - lab 5', href: 'labs/diagnoza_lab5.pdf' },
            { id: 'labs/psych_pozn_lab1', label: 'Psychologia poznawcza - lab 1', href: 'labs/psych_pozn_lab1.pdf' },
            { id: 'labs/psych_pozn_lab2', label: 'Psychologia poznawcza - lab 2', href: 'labs/psych_pozn_lab2.pdf' },
            { id: 'labs/psych_pozn_lab3', label: 'Psychologia poznawcza - lab 3', href: 'labs/psych_pozn_lab3.pdf' },
            { id: 'labs/psych_pozn_lab4', label: 'Psychologia poznawcza - lab 4', href: 'labs/psych_pozn_lab4.pdf' },
            { id: 'labs/psych_pozn_lab5', label: 'Psychologia poznawcza - lab 5', href: 'labs/psych_pozn_lab5.pdf' },
            { id: 'labs/psych_pozn_lab6', label: 'Psychologia poznawcza - lab 6', href: 'labs/psych_pozn_lab6.pdf' }
          ]
        }
      ]
    },

    podstawy_pomocy: {
      title: 'WIKI - Podstawy pomocy psychologicznej',
      intro: 'Podstawy pomocy psychologicznej to dziedzina obejmujaca fundamentalne umiejetnosci i wiedze niezbedna kazdemu, kto profesjonalnie lub wolontariacko udziela wsparcia psychologicznego. Od relacji pomocowej i aktywnego sluchania, przez interwencje kryzysowa, po samoopieke pomagajacego i etykę zawodowa.',
      sections: [
        {
          title: 'Istota pomocy psychologicznej',
          articles: [
            { label: 'Pomoc psychologiczna',                id: 'podstawy_pomocy/wprowadzenie',                  status: 'live', desc: 'Rodzaje pomocy psychologicznej, zasady podstawowe i roznice miedzy nimi.' },
            { label: 'Relacja pomocowa',                    id: 'podstawy_pomocy/relacja_pomocowa',              status: 'live', desc: 'Sojusz terapeutyczny, czynniki budujace relacje i zagrozenia dla niej.' },
            { label: 'Modele pomocy psychologicznej',       id: 'podstawy_pomocy/modele_pomocy',                 status: 'live', desc: 'Medyczny, psychodynamiczny, CBT, humanistyczny, systemowy i ekologiczny.' },
          ]
        },
        {
          title: 'Umiejetnosci pomocowe',
          articles: [
            { label: 'Aktywne sluchanie',                   id: 'podstawy_pomocy/aktywne_sluchanie',             status: 'live', desc: 'Parafrazowanie, odzwierciedlanie emocji, klaryfikacja i bariery sluchania.' },
            { label: 'Empatia w relacji pomocowej',         id: 'emocje/wspolczucie',                            status: 'xlink', desc: 'Procesy empatii, współczucie, granice, dystres empatyczny i superwizja.' },
            { label: 'Komunikacja wspierajaca',             id: 'podstawy_pomocy/komunikacja_wspierajaca',       status: 'live', desc: 'Walidacja, normalizacja, pytania otwarte i nieskuteczne wzorce komunikacji.' },
          ]
        },
        {
          title: 'Interwencja i wsparcie',
          articles: [
            { label: 'Kryzys psychologiczny i interwencja', id: 'podstawy_pomocy/kryzys_psychologiczny',         status: 'live', desc: 'Fazy kryzysu, rodzaje, zasady ABC interwencji i model FASTER.' },
            { label: 'Pierwsza pomoc psychologiczna',       id: 'podstawy_pomocy/pierwsza_pomoc_psychologiczna', status: 'live', desc: 'Osiem komponentow PFA, co robic i czego unikac, PPP, a debriefing.' },
            { label: 'Wsparcie społeczne',                  id: 'podstawy_pomocy/wsparcie_spoleczne',            status: 'live', desc: 'Rodzaje wsparcia, modele efektu glownego i buforowego, grupy wsparcia.' },
          ]
        },
        {
          title: 'Profesjonalizm i dobrostan pomagajacego',
          articles: [
            { label: 'Granice w relacji pomocowej',         id: 'podstawy_pomocy/granice_w_pomocy',              status: 'live', desc: 'Granice fizyczne, emocjonalne, roli; naruszenia i asertywne wyznaczanie granic.' },
            { label: 'Samoopieka pomagajacego',             id: 'podstawy_pomocy/samoopieka_pomagajacego',       status: 'live', desc: 'Wypalenie zawodowe, wtorna traumatyzacja i obszary samoopieki.' },
            { label: 'Etyka pomocy psychologicznej',        id: 'podstawy_pomocy/etyka_pomocy',                  status: 'live', desc: 'Cztery zasady bioetyki, tajemnica zawodowa, swiadoma zgoda, dylematy etyczne.' },
          ]
        },
      ]
    },

    slownik: {
      title: 'WIKI - Slownik terminow',
      intro: 'Alfabetyczny slownik kluczowych pojec neuropsychologii i psychologii klinicznej.',
      sections: [
        {
          isGlossary: true,
          entries: [
            { term: 'Afazja',          def: 'Nabyte zaburzenie jezykowe po uszkodzeniu mózgu - moze dotyczyc mowienia, rozumienia, czytania i pisania.', link: 'disorders/afazje' },
            { term: 'Agnozja',         def: 'Niemoznosc rozpoznawania obiektow przy zachowanych zmyslach i inteligencji.', link: 'disorders/agnozja' },
            { term: 'Amnezja',         def: 'Zaburzenie pamieci - anterogradna (nowe wspomnienia) lub retrogradna (dawne wspomnienia).', link: 'disorders/amnezje' },
            { term: 'Apraksja',        def: 'Zaburzenie wykonywania celowych ruchow przy zachowanej sprawnosci motorycznej i rozumieniu polecenia.', link: 'disorders/apraksja' },
            { term: 'ARAS',            def: 'Wstepujacy uklad siatkowaty aktywujacy - reguluje poziom czujnosci i aktywacji kory.' },
            { term: 'Cialo modzelowate', def: 'Najwieksza komisura mózgu laczaca obie polkule - ~200 milionow aksonow mielinowanych.' },
            { term: 'DAI',             def: 'Rozlane uszkodzenie aksonalne - rozerwanie długich włókien wskutek sił przyspieszenia-opóźnienia w TBI.', link: 'disorders/tbi' },
            { term: 'DMN',             def: 'Default Mode Network - siec trybu domyslnego aktywna w spoczynku i autorefleksji; zaburzona w depresji i Alzheimerze.' },
            { term: 'Dopamina',        def: 'Neuroprzekaznik modulacyjny - motywacja, nagroda, kontrola ruchu. Niedobor -> Parkinson; nadmiar -> objawy psychotyczne.', link: 'pharmacology/neurofarmakologia' },
            { term: 'DTI',             def: 'Dyfuzyjna tomografia tensora - technika MRI pozwalajaca wizualizowac szlaki istoty bialej (traktografia).' },
            { term: 'ERP',             def: 'Potencjały wywołane - uśrednione odpowiedzi EEG na powtarzane bodźce; N400, P300, MMN.' },
            { term: 'FFA',             def: 'Fusiform Face Area - obszar zakretu wrzecionowatego wyspecjalizowany w rozpoznawaniu twarzy. Uszkodzenie -> prozopagnozja.' },
            { term: 'fMRI',            def: 'Funkcjonalny rezonans magnetyczny - mierzy aktywnosc mózgu przez zmiany przeplywu krwi (sygnal BOLD).' },
            { term: 'GABA',            def: 'Główny neuroprzekaźnik inhibicyjny OUN. Cel benzodiazepin i barbituranow.', link: 'pharmacology/neurofarmakologia' },
            { term: 'Glutaminian',     def: 'Główny neuroprzekaźnik ekscytacyjny. Kluczowy w LTP i ekscytotoksycznosci udarowej.', link: 'pharmacology/neurofarmakologia' },
            { term: 'Hipokamp',        def: 'Struktura ksztaltu konika morskiego - konsolidacja pamieci deklaratywnej i nawigacja przestrzenna.', link: 'neuropsychologia/anatomia' },
            { term: 'IRT',             def: 'Item Response Theory - rodzina modeli psychometrycznych opisujacych prawdopodobienstwo odpowiedzi w zaleznosci od trudnosci i zdolnosci.', link: 'psychometrics/irt' },
            { term: 'Lateralizacja',   def: 'Asymetryczna lokalizacja funkcji - jezyk zazwyczaj w lewej polkuli, uwaga przestrzenna w prawej.', link: 'neuropsychologia/anatomia' },
            { term: 'LTD',             def: 'Long-Term Depression - dlugotrwale oslabienie synapsy przy niskiej aktywnosci. Mechanizm zapominania.' },
            { term: 'LTP',             def: 'Long-Term Potentiation - trwale wzmocnienie synapsy po wysokiej aktywnosci. Podstawa uczenia się w hipokampie.', link: 'neuropsychologia/podstawy_neurologii' },
            { term: 'MoCA',            def: 'Montreal Cognitive Assessment - test przesiewowy zaburzeń poznawczych, bardziej czuly niz MMSE na lagodne deficyty.', link: 'diagnostics/mmse_moca' },
            { term: 'Neglect',         def: 'Zaburzenie uwagi przestrzennej - nieswiadome pomijanie jednej strony przestrzeni po uszkodzeniu prawej polkuli.', link: 'disorders/neglect' },
            { term: 'Neuroplastycznosc', def: 'Zdolnosc mózgu do zmiany struktury i funkcji - od poziomu synaptycznego (LTP/LTD) po reorganizacje kortykalna.', link: 'neuropsychologia/plastycznosc' },
            { term: 'NSSI',            def: 'Non-Suicidal Self-Injury - samookaleczenie bez intencji smierci, czesto pelniace funkcje regulacji emocji.', link: 'suicidology/nssi' },
            { term: 'Pola Brodmanna',  def: '52 obszary kory mózgowej wyznaczone przez Brodmanna (1l0l) na podstawie cytoarchitektoniki.', link: 'neuropsychologia/anatomia' },
            { term: 'Prozopagnozja',   def: 'Specyficzny deficyt rozpoznawania twarzy - zwiazany z uszkodzeniem FFA w zakrecie wrzecionowatym.', link: 'disorders/agnozja' },
            { term: 'Psychometria',    def: 'Dzial metodologii zajmujacy sie teoria i technika pomiaru psychologicznego - rzetelnosc, trafnosc, normalizacja.', link: 'psychometrics/psychometria_wprowadzenie' },
            { term: 'Peczek lukowaty', def: 'Szlak istoty bialej laczacy obszar Wernickego z Broki. Uszkodzenie -> afazja przewodzenia.', link: 'disorders/afazje' },
            { term: 'Rzetelnosc',      def: 'Stopien, w jakim wyniki testu sa stabilne i wolne od bledu pomiarowego (alfa Cronbacha, test-retest).', link: 'psychometrics/rzetelnosc' },
            { term: 'TBI',             def: 'Traumatic Brain Injury - uraz mózgu od lagodnego wstrzasnienia po ciezki uraz z dlugoterminowymi konsekwencjami.', link: 'disorders/tbi' },
            { term: 'Trafnosc',        def: 'Stopien, w jakim test mierzy to, co ma mierzyc˝! - tresciowa, kryterialna, zbiezna, czynnikowa.', link: 'psychometrics/trafnosc' },
            { term: 'Wzgorze',         def: '"Brama swiadomosci" - przekaznik zmyslow do kory, regulacja czujnosci. Uszkodzenie -> amnezja wzgorzowa.', link: 'neuropsychologia/anatomia' },
          ]
        }
      ]
    },
  },
};

/* Uzupelnia metadane wyszukiwania (keywords, level, type) dla wszystkich wpisow nawigacji. */
(function enrichNavigationMetadata(config) {
  if (!config || !Array.isArray(config.nav)) return;

  /* Mapuje dzialy na poziom trudnosci domyslnej sciezki nauki. */
  const sectionLevelMap = {
    'Wprowadzenie': 'beginner',
    'Dla studentów': 'beginner',
    'Podstawy pomocy psychologicznej': 'beginner',
    'Filozofia': 'intermediate',
  };

  config.nav.forEach(section => {
    section.items.forEach(item => {
      const inferredType = item.type || (item.kind === 'test' ? 'test' : (item.wiki ? 'wiki' : 'article'));
      const inferredLevel = item.level || sectionLevelMap[section.section] || 'intermediate';
      const baseKeywords = [
        section.section,
        item.label,
        item.id.split('/')[0],
        item.id.split('/')[1],
        inferredType,
      ];

      item.type = inferredType;
      item.level = inferredLevel;
      item.keywords = Array.from(new Set([...(item.keywords || []), ...baseKeywords]
        .filter(Boolean)
        .map(value => String(value).trim())
      ));
    });
  });
})(window.SITE_CONFIG);

/* Uzupełnia metadane recenzji źródeł dla każdego narzędzia pomiarowego. */
(function enrichMeasurementToolsReviewMetadata(config) {
  if (!config || typeof config !== 'object') return;
  const byDomain = config.measurementToolsByDomain;
  const domainUpdates = config.measurementToolsDomainUpdates || {};
  if (!byDomain || typeof byDomain !== 'object') return;

  /* Wydobywa najwcześniejszy rok z listy źródeł narzędzia (np. "Autor (2021)"). */
  const inferPrimarySourceYear = tool => {
    if (Number.isFinite(tool?.primarySourceYear)) return Math.trunc(tool.primarySourceYear);
    if (typeof tool?.primarySourceYear === 'string' && /^\d{4}$/.test(tool.primarySourceYear.trim())) {
      return Number(tool.primarySourceYear.trim());
    }
    const years = (Array.isArray(tool?.sourceRefs) ? tool.sourceRefs : [])
      .map(ref => {
        const match = String(ref).match(/\b(1l|20)\d{2}\b/g);
        if (!match || !match.length) return null;
        return Number(match[match.length - 1]);
      })
      .filter(Number.isFinite);
    if (!years.length) return null;
    return Math.min(...years);
  };

  Object.entries(byDomain).forEach(([domainKey, tools]) => {
    if (!Array.isArray(tools)) return;
    const domainUpdatedAt = domainUpdates?.[domainKey]?.updatedAt;
    tools.forEach(tool => {
      if (!tool || typeof tool !== 'object') return;
      const inferredYear = inferPrimarySourceYear(tool);
      if (!tool.lastReviewed && domainUpdatedAt) {
        tool.lastReviewed = domainUpdatedAt;
      } else if (!tool.lastReviewed) {
        tool.lastReviewed = '2024-01-01';
      }
      if (!tool.primarySourceYear && inferredYear) {
        tool.primarySourceYear = inferredYear;
      } else if (!tool.primarySourceYear) {
        tool.primarySourceYear = 'brak';
      }
    });
  });
})(window.SITE_CONFIG);

/* Uzupelnia brakujace `id` w plans na podstawie sciezki `file` (wiki/<domain>/<slug>.md). */
(function enrichPlansWithIds(config) {
  if (!config || typeof config !== 'object') return;
  if (!config.plans || typeof config.plans !== 'object') return;

  const toIdFromFile = filePath => {
    const normalized = String(filePath || '').trim().replace(/\\/g, '/');
    const match = normalized.match(/^wiki\/(.+)\.md$/);
    return match ? match[1] : null;
  };

  Object.values(config.plans).forEach(planEntries => {
    if (!Array.isArray(planEntries)) return;
    planEntries.forEach(entry => {
      if (!entry || typeof entry !== 'object') return;
      if (entry.id || !entry.file) return;
      const inferredId = toIdFromFile(entry.file);
      if (inferredId) entry.id = inferredId;
    });
  });
})(window.SITE_CONFIG);

/* Dla spojnosci dopisuje brakujace pozycje planu na podstawie wpisow nawigacji. */
(function backfillPlansFromNav(config) {
  if (!config || typeof config !== 'object') return;
  if (!Array.isArray(config.nav)) return;
  if (!config.plans || typeof config.plans !== 'object') return;

  config.nav.forEach(section => {
    if (!section || typeof section !== 'object') return;
    const domainKey = section.domainKey;
    if (!domainKey || !Array.isArray(section.items)) return;

    if (!Array.isArray(config.plans[domainKey])) {
      config.plans[domainKey] = [];
    }

    const planEntries = config.plans[domainKey];
    const existingIds = new Set(
      planEntries
        .map(entry => (entry && typeof entry === 'object' ? entry.id : null))
        .filter(Boolean)
    );

    section.items.forEach(item => {
      if (!item || typeof item !== 'object') return;
      if (!item.id || existingIds.has(item.id)) return;

      const nextEntry = {
        id: item.id,
        label: item.label || item.id,
      };
      if (item.file) nextEntry.file = item.file;
      if (item.file) nextEntry.status = 'live';

      planEntries.push(nextEntry);
      existingIds.add(item.id);
    });
  });
})(window.SITE_CONFIG);
