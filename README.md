# Travel Companion · Antalya 0.7.9 RC4

Ez a build a teljes, kétlépcsős stabilitási audit utáni release candidate.

## Fő funkciók
- stabil közös bottom-sheet rendszer és fix alsó dock
- Útiterv: fél/full nézet, nap swipe, reorder, Megnéztem/Kihagyás swipe, hozzáadás térképről/mentettekből
- Napok: kompakt és full carousel
- Kedvencek fix főmenüpont
- középső Companion logó = Sonar
- Sonar: szűrők, 4 távolság egy sorban, adaptív panel, találati előzmény
- POI mini/half/full Guide állapotok
- Beállítások, Értesítések, Navigáció
- Companion belső GPS navigáció folyamatos pozíciófrissítéssel
- Apple Maps és Google Maps tömegközlekedési handoff
- útiterv/aktív nap/sorrend tartós mentése
- offline helyi tartalom + fotó/category fallback + runtime cache
- külön iOS/normal és Android maskable ikon

## Fontos live megjegyzés
A valós iPhone GPS-engedélyt, PWA safe-area viselkedést és az Apple/Google Maps appátadást a célkészüléken még egyszer ellenőrizni kell. A statikus és logikai QA mindkét körben átment.

Lásd:
- `MASTER_UX_SPEC.md`
- `QA_INDEPENDENT_RC4.md`
- `LIVE_TEST_CHECKLIST.md`
