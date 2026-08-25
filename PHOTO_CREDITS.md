# Fotók és fallbackek · RC4

## Csomagolt helyszínfotók
A buildben helyi, konkrét helyszínkép van: Hadrianus Kapısı, Konyaaltı, Lower Düden, Perge, Kurşunlu és Phaselis.

## Online helyspecifikus fotók
Internetkapcsolatnál az app az azonosítható Antalya POI-khoz Wikipedia/Wikimedia Commons képet próbál lekérni, majd helyben cache-elni. Ilyen többek között Kaleiçi, Old City Marina, Karaalioğlu Park, Hıdırlık Tower, Yivli Minare, Saat Kulesi, Kesik Minare, Mermerli, Aquarium és több további városi pont.

## Offline / hibás online kép
Ha nincs konkrét csomagolt kép vagy az online kép nem tölthető be, **nem használunk másik helyről származó félrevezető fotót**. A POI saját kategóriájának egységes, helyi illusztratív fallbackje jelenik meg (szállás, bolt, kávé, park, WC stb.). Broken-image ikon, kérdőjel vagy üres képhely nem maradhat.

Ez szándékos live-stabilitási döntés: pontos kategóriaillusztráció jobb, mint egy másik hely téves fotója. Későbbi content buildben ezek egyedi, helyspecifikus fotóval vagy generált hangulatképpel bővíthetők.
