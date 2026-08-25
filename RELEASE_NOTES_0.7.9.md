# Travel Companion Antalya Beta 0.7.9 RC2

## Fő javítások
- Egységes alsó sheet-layout: a panel a fix dock tetején áll meg, nem futhat a menü alá.
- Működő panel-fogópont: tapra és húzásra reagál; bezárás után ugyanaz a menüpont újra megnyitható.
- Alsó dock: Útiterv · Napok · Kedvencek · középső logó/Sonar · Beállítások · Értesítések · Navigáció.
- A külön Sonar menüpont megszűnt; a középső Companion logó indítja a Sonart.
- Menüváltáskor az előző sheet/overlay/drawer/quick-menu teljesen bezár, nem marad réteg vagy rés.
- Full-screen nézetek tömör navy háttérrel takarják a térképet; a Leaflet attribution nem üt át.
- Sonar félmagas panel, színes aktív kategóriaszűrők és Mentett helyek elérés.
- Útiterv: fix zöld/piros swipe action-layer, drag sorrend, napváltás, térképről és mentettekből hozzáadás.
- POI félpanelben kisebb kép + több azonnali szöveg; teljes Guide bezárásakor ugyanaz a hely mini panelen marad.
- Béta/Antalya tesztjelvény lekerült a térképről, csak a Beállításokban jelenik meg.

## Tömegközlekedési MVP
- Navigáció gyorsmenüben Apple Térképek és Google Térképek tömegközlekedési átadás.
- Apple Maps: `dirflg=r`; Google Maps: `travelmode=transit`.
- A kiválasztott POI megmarad, hogy az appba visszatérve ugyanaz a cél folytatható legyen.

## RC2 külön javítás
- Fogóponttal bezárt Útiterv/Sonar után az aktív tab állapota törlődik, ezért a tab első koppintásra újra megnyílik.
- Service worker cache-verzió emelve, hogy a friss build biztosan lecserélje az RC1 fájlokat.
