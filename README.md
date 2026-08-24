# Travel Companion · Antalya Beta 0.7.2

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


## 0.7.2 frissítés
- kompakt ikon-only fő dock; a Companion logó megtartott mérettel középvonalra igazítva
- a logo rövid nyomásra Sonar PING, hosszan teljes Sonar mód
- Sonar találatok 60 mp-ig élnek; kijelölt találatnál az időzítő megáll, lekattintás után újraindul
- értesítések kerültek a korábbi Sonar főgomb helyére, badge-dzsel; swipe kezelés
- Info Mini mellett a kompakt dock megmarad, a logo eltűnik; 1/3 felett a fő dock és térképgombok eltűnnek
- kijelölt marker nagyobb és pulzál
- Napok valódi térképre lebegő carousel, pozícióindikátorral
- világosabb, kartografikusabb dark map megjelenés
- online úthálózat-követő útvonal geometria (OSRM fallbackkel)
