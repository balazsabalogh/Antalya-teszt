# Photo behavior · 0.7.7

## Helyben csomagolt képek
A biztos, korábban csomagolt helyszínfotók használhatók ezekhez a POI-khoz: Hadrianus Kapısı, Konyaaltı, Lower Düden, Perge, Kurşunlu, Phaselis.

A többi hely offline első indításkor kategória-placeholdert kap, hogy ne jelenjen meg téves vagy más helyszínről származó fotó.

## Wikipedia + Wikimedia Commons
Ha van internet, az app a biztosan azonosítható antalyai POI-knál először Wikipedia page-summary képet próbál betölteni, majd szükség esetén Wikimedia Commons képkeresésre vált. A betöltött thumbnail URL-je helyben megjegyezhető, maga a kép pedig a service-worker runtime cache-be kerülhet.

0.7.7-ban kibővített fotókeresést kap többek között: Kaleiçi, marina, Karaalioğlu, Yivli Minare, Saat Kulesi, Kesik Minare, Cumhuriyet Meydanı, Tophane Parkı, Antalya Toy Museum, Mermerli Beach és Antalya Aquarium.

A konkrét POI kártyáján és Guide galériájában csak az adott vagy közvetlenül kapcsolódó helyhez keresünk képet. Ha nincs kellően biztonságos találat, a kategória-placeholder marad.


## 0.7.7 fallback szabály
Minden POI helyi képpel indul. Ha egy online Wikimedia-kép hibás vagy nem tölthető be, az app automatikusan visszavált a helyi Antalya-/kategória-hangulatképre; a felhasználó nem lát broken-image ikont.
