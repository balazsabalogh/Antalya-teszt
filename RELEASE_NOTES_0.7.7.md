# Beta 0.7.7 · Live Test UX

Ez a build a 2026-08-25-i élő teszt előtti panel- és interakciós javításokat tartalmazza.

## Fő változások
- A legkisebb POI panel már a kompakt menüvel egy összefüggő felület, és egy teljes kártyányi helyet biztosít.
- Sonar nagy nézet kb. fél képernyő; a távolság és a Sonar fejléc egy sorba került.
- A Sonar távolságválasztó ténylegesen szűr, a kategóriaszűrők azonnal frissítik a térképet és a listát.
- A kategóriaszűrők aktív állapota a marker kategóriaszínét használja, kikapcsolva grafitszürke.
- Aktív menüpontok minden panelen egyértelmű kiemelést kapnak.
- A középső Companion gomb rövid érintésre Sonar, hosszú nyomásra Beállítások; kis kettős ikon jelzi a két funkciót.
- A navigációs és napi kompakt panelek közvetlenül az alsó dockból nőnek ki, rés nélkül.
- A nagy Napok nézet teljes képernyős sötét felület, jobb felső X bezárással.
- Az útiterv félképernyős nézete teljes szerkesztő: sorrend húzással, Mentés/Visszaállítás, térképről és mentett helyből hozzáadás.
- Az útiterv napja a fejléc jobbra/balra húzásával váltható.
- A teljes képernyős sheet nézeteken egyetlen jobb felső X marad.
- A kártyák kissé vastagabbak és érintésre kényelmesebbek.
- Minden POI-nak van helyi fényképes fallbackje; hibás online kép esetén automatikusan visszaáll helyi képre, broken-image ikon nélkül.
- Új service-worker cache név és CSS/JS cache-busting a gyorsabb frissülésért.

## Telepítés / frissítés
GitHub Pages-re a zip tartalmát a repository gyökerébe kell feltölteni. iPhone PWA-nál a feltöltés után zárd be teljesen az appot és nyisd újra. Ha még a régi build látszik, nyisd meg egyszer Safariban, frissítsd az oldalt, majd indítsd újra a PWA-t.

### Utolsó kompakt-panel korrekció
- A legkisebb POI panel most nem külön lebegő kártyaként ül a menü fölött: az alsó sheet háttere egy teljes kártyányival nő felfelé.
- A kártya és az alsó menüsor számára külön hely van, így iPhone safe-area mellett sem metszhetnek egymásba.
