# Travel Companion Antalya · 0.7.9 RC4

## Independent audit fixes
- route/day persistence és mentett útvonal migráció
- zárt Antalya Archaeology Museum kivétele az aktív/mentett útvonalakból
- stale overlay/add-mode state cleanup
- Sonar timer/history javítás
- folyamatos GPS watch navigáció közben
- külső Apple/Google Transit handoff; hamis in-app transit lábak eltávolítva
- nem működő Beállítások kapcsolók eltávolítva
- localStorage sérült adatok elleni hardening
- offline-first UI map-engine guardok
- Leaflet prewarm és offline fallback
- helytelen másik-hely fotó fallback helyett kategóriaillusztráció
- külön Android maskable ikonok
- teljes napnézet fogópont tap működés
- hold-menu outside listener leak megszüntetve

## QA
- fejlesztői statikus/logic audit: 54/54 PASS
- független második audit: 44/44 PASS
- Node syntax: PASS
- CSS brace balance: PASS
- csomag/asset integritás: PASS

## Fizikai eszközön még kötelező
- iPhone PWA safe area
- GPS permission + mozgás közbeni bannerfrissülés
- Apple Maps transit handoff
- Google Maps transit handoff
