# Travel Companion · Antalya Beta 0.7.8

Polish + Antalya content build based on the 2026-08-24 iPhone field-test feedback.

## Ebben a buildben
- navigáció: rövid Navigáció-tap aktív navigációnál ténylegesen befejezi; bal swipe = navigáció vége, jobb swipe = következő cél
- navigációs swipe: a teljes kártya mögötti felület piros/zöld, a külön béta-pill nem marad a navigáció alatt
- aktív menüpont: finom, egyértelmű kiemelés; a Beállítások ikon már nem külön kék
- markerek: klasszikus, nap-színű keretezett pin; a következő cél mindig nagyobb, de áll; csak a kijelölt marker kap finom mozgást
- Napok kompakt: teljesen lekerekített panel, nagyobb húzófelület, egy tapos napválasztás
- Napok nagy: minden kártya azonos méretű, fix keretben csak vízszintes carousel; lefelé húzva teljesen bezár
- Napok nagy: majdnem a teljes rendelkezésre álló képernyőmagasságot használja, az alsó CTA a kártyán belül marad
- Értesítések: felső fogópont eltávolítva
- teljes útvonaltervező: csak egy bezáró X
- környékszűrők: ismét vízszintesen görgethetők, egy tapos ki/be kapcsolás, kategóriaszínű aktív állapot
- több közeli Antalya POI: Yivli Minare, Saat Kulesi, Kesik Minare, Cumhuriyet Meydanı, Tophane Parkı, Antalya Oyuncak Müzesi, Mermerli Plajı, Antalya Aquarium, 5M Migros
- fotók: a biztos helyi képek továbbra is a csomag részei; online első használatkor a fő Antalya POI-khoz Wikipedia/Wikimedia Commons thumbnail kerül betöltésre és runtime cache-be
- Antalya Archaeology Museum státusz: a jelenlegi hivatalos zárt státusz külön figyelmeztetésként szerepel a POI-ban

## Offline fotóviselkedés
A csomagban lévő biztos fotók azonnal offline elérhetők. A további valós helyszínfotókat az app online első használatkor próbálja letölteni nyílt Wikimedia-forrásból, majd a service worker cache-eli őket. Ha egy helyhez nincs biztonságosan azonosítható kép, kategória-placeholder marad; nem mutatunk másik helyről félrevezető fotót.

## Továbbra is beta
- élő Antalya tömegközlekedési feed nincs integrálva
- online road routing hálózatfüggő
- a Wikimedia-fotók első betöltéséhez internet kell; utána a böngésző cache-éből elérhetők lehetnek
