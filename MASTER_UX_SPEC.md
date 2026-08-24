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
