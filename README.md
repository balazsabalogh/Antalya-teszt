# Travel Companion · Antalya 0.7.9 RC5

Ez a live release candidate a kért kétlépcsős QA-val készült: fejlesztői regressziós ellenőrzés + külön független audit.

## Fixált fő funkciók
- stabil közös bottom-sheet rendszer és fix alsó dock
- Útiterv: rövid tap = fél nézet, hosszú nyomás = full; nap swipe; valódi ≡ drag & drop; Megnéztem/Kihagyás swipe; hozzáadás térképről/mentettekből
- Napok: kompakt és full carousel
- Kedvencek fix főmenüpont
- középső Companion logó: rövid tap = fő/térkép, hosszú nyomás = Sonar
- Sonar: szűrők, 4 távolság egy sorban, adaptív panel, találati előzmény
- POI mini/half/full: mini réteg stabil; fő műveleti sorrend Guide → Útitervhez/Kivétel → Navigáció
- Beállítások, Értesítések, Navigáció
- Companion belső GPS navigáció folyamatos pozíciófrissítéssel
- Companion Navigáció: térképes nézet + teljes képernyős Lépések nézet, egygombos visszatéréssel
- Apple Maps és Google Maps tömegközlekedési handoff
- útiterv/aktív nap/sorrend tartós mentése
- offline helyi tartalom + fotó/category fallback + runtime cache
- iOS normal + Android maskable ikon

## QA
- fejlesztői statikus/regressziós QA: PASS
- 414 px mobil UI QA: PASS
- független source audit: PASS
- 390 px stress/UI audit: PASS

A valós iPhone GPS-engedélyt, PWA safe-area viselkedést és Apple/Google Maps appátadást a célkészüléken kell utoljára kipróbálni.
