# Travel Companion · Antalya Beta 0.7.0 — Master UX Build

Ez a build a beszélgetésben lezárt Master UX specifikációra épül, nem a köztes mockupokra.

## Beépített fő működések
- fix Antalya / Törökország projekt
- lefixált főnézet: Útiterv · Napok · Companion logó · Sonar · Navigáció
- számozott napi markerek kategóriajellel
- Info Mini → 1/3 → 2/3 → teljes útvonaltervező panel
- teljes útvonaltervező: swipe állapotok, kézi Megnéztem, állomás hozzáadás
- Sonar rövid nyomás = PING; hosszú nyomás = Sonar mód
- Napok rövid nyomás = képes carousel; hosszú nyomás = gyors napválasztó
- Companionon belüli navigációs követő mód
- felső Companion értesítési sáv + lehúzható értesítési panel
- felnyitott panelnél 6 gombos kezelősor
- Beállítások: tempó, közlekedés, dark/light/auto, Sonar, navigáció, offline állapot
- Kedvencek / mentett helyek
- Guide / Traveler Intel
- Utazás előtt / Közelgő alapnézet
- PWA standalone konfiguráció

## Offline
A helyi POI-, útiterv-, Guide- és fotóadatok a ZIP-ben vannak. A térkép online CARTO/OSM csempéket használ és a service worker a már megnyitott csempéket gyorsítótárazza; hálózat nélkül a csomagban lévő egyszerű offline Antalya-alaptérkép marad a markerek és útvonal alatt.

A béta navigáció jelenleg GPS-alapú Companion követő mód (célirány/távolság), nem teljes turn-by-turn utcai routingmotor. A valós routingmotor bekötése külön következő technikai lépés.

## iPhone telepítés
GitHub Pages → Safari → Megosztás → Főképernyőhöz adás. Új buildnél, ha az iOS makacsul régi cache-t tart, érdemes a korábbi főképernyős ikont eltávolítani és újra hozzáadni.
