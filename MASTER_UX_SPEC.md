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
