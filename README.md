# Travel Companion · Antalya Beta 0.7.1

Telefonos teszt alapján javított build.

Fő változások:
- megszüntetve a térképet kettévágó offline overlay
- Info Mini nem ütközik a főmenüvel; a logó és főmenü panelnyitáskor eltűnik
- kisebb Info Mini, egységes bottom-sheet shell
- Budapest / Antalya teszt esetén nincs 1500 km-es gyalogos navigáció: automatikus Antalya-szimuláció
- Sonar PING státusz rendbetéve
- hosszú nyomásnál iOS szövegkijelölés tiltva
- Napok tipográfia és kártyamagasság javítva
- egységesebb vonalas fő/expanded menüikonok
- online Wikipedia/Wikimedia kisképek, ahol biztosan azonosítható a POI
- offline minden POI-hoz helyi fotó vagy kategória-placeholder
- Wikipedia képek és térképcsempék cache-elhetők a service workerrel

A teljes turn-by-turn routing továbbra sem kész; a navigáció Companion követő mód.
