# Photo behavior · 0.7.1

## Offline
A csomagban lévő saját/korábbi helyi fotók használhatók ezekhez a POI-khoz: Hadrianus Kapısı, Konyaaltı, Lower Düden, Perge, Kurşunlu, Phaselis.
A többi hely offline módban kategória-placeholdert kap (pl. szállás, bolt, WC, étterem, múzeum, romok), hogy ne jelenjen meg téves helyszínfotó.

## Online
Ha van internet, az app a biztosan azonosítható enciklopédikus POI-knál a Wikipedia REST API-ból próbál kis méretű thumbnailt betölteni. A Guide nézetben Wikipedia/Wikimedia forráshivatkozás is megjelenik. A letöltött képek a böngésző/service-worker cache-be kerülhetnek.

Ha egy helyhez nem találunk biztonságosan azonosítható szabad online képet, a kategória-placeholder marad; nem helyettesítjük egy másik hely fotójával.

## 0.7.5 megjelenítés
A kategória-fallbackok újrarajzolt, helyben csomagolt SVG-k: nem használnak iOS-en hiányzó Unicode-ikonokat, ezért offline sem jelenhet meg kék kérdőjeles törött ikon. A Napok fotós borítóin csak a csomagban lévő Antalya-fotók szerepelnek hangulat/napborítóként; a konkrét POI-k részletes kártyáján továbbra is csak biztosan azonosított helyi fotó vagy egyértelmű kategória-fallback jelenik meg.
