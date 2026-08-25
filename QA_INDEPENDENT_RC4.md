# RC4 — független fejlesztői audit

## A második auditban talált valódi hibák és javítások
- Útiterv módosításai és aktív nap nem voltak tartósan mentve → route/day persistence bekerült.
- Régi mentett route visszahozhatta a jelenleg zárt Antalya Archaeology Museumot → mentett útvonal migráció/szűrés bekerült.
- Ha minden állomás kész volt, új POI rossz helyre kerülhetett → lista végére kerül.
- Overlay return állapot átfolyhatott másik menübe → hard close nullázza.
- Térképről hozzáadás állapota tabváltás után bennragadhatott → transient cleanup bővítve.
- Sonar találatok lejárati időzítője megállhatott a Sonar megnyitásakor → újraütemezés javítva.
- Sonar értesítési előzmény friss találattal felülíródhatott → history megnyitás refresh nélkül.
- Navigáció csak egyszeri GPS pozíciót kért → watchPosition + frissülő banner/route.
- Belső navigáció hamis, fix tömegközlekedési lábszöveget mutatott → eltávolítva; transit csak Apple/Google átadással állít konkrét útvonalat.
- Több Beállítások kapcsoló csak vizuális volt → nem működő kapcsolók eltávolítva; csak valódi funkciók maradtak.
- Sérült localStorage JSON indulási crash-t okozhatott → biztonságos parser és enum/number validáció.
- Régi session resume POI minden pageshow-n újranyílhatott → egyszeri olvasás után törlés.
- Offline státusz túl erős ígéretet tett → szöveg pontosítva, Leaflet prewarm és offline fallback hozzáadva.
- Android icon `any maskable` ugyanazzal a szélig érő grafikával clipping kockázat volt → külön maskable safe-zone ikonok.
- Térképes béta badge → nincs; build infó csak Beállításokban.

## Korlát
A statikus/logic/package QA nem tudja helyettesíteni a valós iPhone-on a GPS engedély, PWA safe-area és Apple/Google Maps app handoff végső fizikai ellenőrzését. Ezek a live checklist kötelező pontjai.
