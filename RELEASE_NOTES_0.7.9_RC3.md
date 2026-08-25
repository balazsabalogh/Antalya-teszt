# Travel Companion Antalya · 0.7.9 RC3

Utolsó layout/gesztus stabilizáló kör az élő teszt előtt.

## Javítva
- Navigációs gyorsmenü változatlanul maradt az RC2 stabil állapotában.
- Útiterv: rövid koppintás félképernyős szerkesztő, hosszú nyomás teljes nézet.
- Útiterv teljes nézetben is balra/jobbra húzható a napváltás.
- Útiterv fogópontja újra használható: fél nézetből zár, teljesből fél nézetre léphet; húzással a route full snap is elérhető.
- Útiterv lista külön scrollterületet kapott; a `Térképről` és `Mentettekből` gombok mindig a lista alatt, a dock fölött maradnak.
- Több állomásnál a kártyák nem takarják el a hozzáadás gombokat.
- Swipe action layer pontosan a kártya mérete: nincs állandó piros/zöld toldás.
- Sonar: mind a négy távolság egyetlen sorban marad.
- Sonar magassága a találatok számához igazodik, nem marad nagy üres navy blokk egyetlen találat alatt.
- Sonar találati kártyák action layere sem nyúlik meg a szabad hely kitöltésére.

## QA
- JS szintaxis: OK.
- UI regresszió szimulálva 414×896 és 390×844 mobil viewporton.
- Route half/full, hosszú nyomás, napváltó swipe, sok kártyás scroll, Sonar, Kedvencek/Beállítások váltás és Navigáció quick menu ellenőrizve.
- A szimulált UI körben nem keletkezett JavaScript hiba.
