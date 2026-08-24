# Travel Companion Antalya — Master UX Spec v1 (rögzített)

Ez a fájl a build fejlesztési referenciája. A köztes mockupok nem írják felül.

## Rögzített flow
1. Alapnézet: térkép + Útiterv / Napok / lebegő Companion logó / Sonar / Navigáció; jobb oldalon saját pozíció és útvonal középre.
2. Markerek: számozott napi pont + felső kategóriajel; Sonar POI kisebb, számozatlan.
3. Marker tap → Info Mini.
4. Felhúzás → 1/3: gyorsműveletek + környékszűrők.
5. Felhúzás → 2/3: hely részletei + útvonal-kontextus; még nem szerkesztő.
6. Teljes felhúzás / drag → teljes útvonaltervező.
7. Tervező: jobbra swipe Megnéztem; balra Kihagyás; drag handle sorrend; + Állomás.
8. + Állomás: térképes kiválasztó mód, útvonal halvány, POI-k előtérben.
9. Sonar: rövid nyomás PING; hosszú nyomás teljes Sonar mód.
10. Napok: rövid nyomás képes carousel; hosszú nyomás gyors napválasztó.
11. Még belefér: mentett helyek, majd Sonar javaslatok; értesítésből is elérhető.
12. Navigáció: Companionon belül; gyorsválasztó: Következő / Szállás / Mai útvonal / Vissza.
13. Megérkezés: GPS jelzés, kézi Megnéztük / Még maradunk.
14. Útiterv főgomb: rövid 2/3 gyorsnézet; hosszú gyorsműveletek.
15. Értesítések: felső Companion sáv csak aktív értesítésnél; lehúzható panel; logón csak badge.
16. Felnyitott panel: logo eltűnik, 6 gombos kezelősor (Útiterv, Napok, Sonar, Beállítások, Értesítések, Kedvencek).
17. Beállítások: Antalya utazás + Companion általános; tempó 5 fokozat, közlekedés, téma, Sonar, navigáció, offline.
18. Guide: POI részletek / praktikus / Traveler Intel / közlekedés / közelben; offline.
19. Kedvencek: Mentés nem azonos útitervhez adással.
20. Utazás előtt → utazás alatt Közelgő.
21. Térkép: OSM-alapú Companion Dark/Light; nem ugrik vissza automatikusan; panelhez igazítja a fókuszt.
22. Offline: helyi POI, Guide, itinerary és fotók; megnyitott térképcsempék runtime cache; helyi offline Antalya-háttér.

## Antalya Beta scope
Egy projekt, egy ország (Törökország), egy utazás (Antalya). Nincs projekt- vagy országváltó ebben a bétában.

## 0.7.4 finomítások
- Vizuális alap: mély navy/kékes Companion skin, nem fekete; török piros csak accent.
- A középső török embléma a jóváhagyott teljes fémkör + felső iránytűnyíl változat.
- App ikon: teljes fémkör + felső iránytűnyíl + színes földgömb, felhők nélkül.
- Rövid tap = gyors/kompakt funkció; hosszú tap = kibővített választó, ahol az adott funkciónál értelmes.
- Navigáció közben nincs alsó sheet; felső cél/manőver kártya + kompakt dock marad.
- Napok: rövid tap kompakt képes napválasztó; hosszú tap nagy fotós carousel.
- Sonar PING: találatok 60 mp-ig élnek; kijelölt találat nem jár le; kijelölés megszüntetése után új 60 mp indul.
- Értesítésből megnyitott tartalom mindig részletesebb/nagyobb állapotban nyílik.
- Messenger-szerű swipe: a kártya mozog, a művelet mögötte jelenik meg; nincs állandó fele piros/fele zöld háttér.

## 0.7.5 field-test refinements (locked for this build)
- Same main-function button toggles its opened view closed where applicable.
- Itinerary: short press opens persistent 2×2 quick actions; long press opens the large itinerary sheet. Itinerary uses only large + fullscreen snap states.
- Navigation: short press starts/continues or hides/shows the UI without deleting navigation state. Long press opens persistent navigation choices. Top navigation card: right swipe = next destination, left swipe = hide UI only.
- Notifications: right swipe = contextual positive action, left swipe = dismiss. Closing the expanded notification drawer hides the compact top strip until a new notification arrives or the bell is opened again.
- POI: full expansion is the Guide, not an enlarged duplicate info card. Guide is image-led and fullscreen.
- POI action rail: Guide, Navigation, Seen, Favorite, Add/Remove, Share; horizontal scroll with visible peek.
- Marker motion only on the selected marker.
- Sonar results persist 60 seconds; selected result suspends expiry, deselection restarts 60 seconds.
- Days compact carousel has its own panel, working position indicator and pull-up transition to large photo cards.
- Fullscreen panels touch the display top and include a direct close action.
- Itinerary snapshots: max 10 local versions; automatic before destructive/structural changes plus manual save.

## 0.7.6 field-test override — a 0.7.5 pontokat ez írja felül
- Navigáció: aktív navigációnál a Navigáció főgomb rövid tapja **befejezi** a navigációt. A felső kártyán bal swipe = navigáció vége; jobb swipe = következő úti cél. Nem marad rejtett, aktív navigációs állapot.
- Navigációs swipe: a kártya mögötti teljes felület kapja a piros/zöld műveleti színt.
- Aktív menüpont kap finom vizuális kiemelést; a Beállítások inaktív színe egységes a többi ikonnal.
- Route marker: klasszikus teardrop pin, nap színével. Következő cél mindig nagyobb és álló. Kijelölt marker nagyobb + finom animáció. Más marker nem mozog.
- Napok kompakt: teljesen lekerekített panel; nagyobb fogóterület; egy tap = nap kiválasztása.
- Napok nagy: fix, azonos méretű kártyák; carousel csak vízszintesen mozog. A kártyán belüli hosszabb tartalom külön görgethető, de maga a kártyasor nem mozdul fel/le.
- Napok nagy: lefelé swipe a felső fogózónán az egész Napok nézetet zárja be; nem tér vissza automatikusan kompakt állapotba.
- Értesítések: nincs felső drag-handle.
- Teljes útvonaltervező: egyetlen bezáró X.
- Környékszűrők: egy tapos toggle, azonnali markerfrissítés, egyértelmű kategóriaszínű aktív állapot, vízszintes scroll.
- Tartalom: a környék érdekes és praktikus POI-jai is legyenek a Sonar/szűrők adatbázisában; a fő helyekhez valós fotó online betöltéssel + runtime cache-sel.
