# Travel Companion · Antalya Beta 0.7.4

Ez a build a 0.7.3 telefonos tesztje és a 2026-08-24-i UX/design finomítások alapján készült.

## Fő változások
- kékes/navy Companion vizuális rendszer, finom török piros accenttel
- jóváhagyott fémes török Companion embléma a dockban
- új, színes földgömbös app ikon
- finoman lebegő markerek, kijelölt marker nagyobb és pulzál
- rövid nyomás = kompakt művelet, hosszú nyomás = kibővített kezelőfelület
- navigáció: nincs alsó panel; csak felső navigációs kártya + kompakt dock
- hosszú Navigáció: 6 választható gyorsművelet
- Napok: rövid nyomás kompakt fotós választó, hosszú nyomás nagy fotós carousel
- Sonar: nincs duplikált PING doboz; 60 mp-es találat-megőrzés, kijelöléskor időzítő szünetel
- Sonar nagy nézet: egymás alatti kártyák Messenger-szerű swipe kezeléssel
- értesítések: balra eltüntetés, jobbra kapcsolódó tartalom; értesítésből mindig nagyobb nézet nyílik
- útvonal online állapotban OSM-alapú routing szolgáltatással próbál utcákat követni
- POI-képek: a csomagban lévő valódi fotó azonnal; egyébként helyi kategória-fallback, online pedig Wikipedia/Wikimedia thumbnail, ha elérhető

## Offline
Az útiterv, POI-adatok, Guide-szöveg, helyi fotók/fallbackek offline elérhetők. A korábban megnyitott térképcsempéket a service worker cache-eli. Új online POI-k, friss nyitvatartások és online routing internetet igényelnek.

## Ismert béta-korlát
A tömegközlekedési UI már szakaszos közlekedést jelez, de Antalya élő GTFS/GTFS-RT szolgáltatása még nincs teljesen bekötve; ezért ne tekintsd élő járatinformációnak.
