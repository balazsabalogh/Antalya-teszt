# Travel Companion Antalya 0.7.7 – gyors élő teszt

## Frissítés iPhone-on
1. GitHub Pages-re töltsd fel a ZIP tartalmát a repo gyökerébe, a régi fájlokat felülírva.
2. Várj 1–3 percet.
3. A PWA-t húzd ki teljesen az appváltóból, majd nyisd meg újra.
4. Ha még 0.7.6 látszik: Safariban nyisd meg egyszer az oldalt és frissítsd, utána nyisd újra a főképernyős PWA-t.

## 2 perces indulás előtti próba
- Egy POI-ra bökve a legkisebb panelben egy teljes kártya látszik, az alsó menü nem metsz bele.
- Sonar: középső logó rövid nyomás → kb. félképernyős Sonar; a térkép marad használható.
- Középső logó hosszú nyomás → Beállítások; jobb felső X zárja.
- Szűrő kikapcsolva sötét, bekapcsolva a marker-kategória színét kapja.
- Napok: rövid nyomás kompakt választó, nagy nézet teljes képernyős, jobb felső X-szel.
- Útiterv: hosszú nyomás félképernyős szerkesztő; a ≡ fogantyún húzva az állomások átrendezhetők.
- Útitervben a „Térképről” és „Mentettekből” hozzáadás működik.
- Navigáció hosszú nyomás: a 6 gombos panel közvetlenül az alsó dockból nő ki, nincs rés.
- A teljes nézetekben csak egy bezáró X legyen.
- Kép hiba esetén se jelenjen meg broken-image / kérdőjeles üres hely: helyi Antalya-kép maradjon fallbackként.
