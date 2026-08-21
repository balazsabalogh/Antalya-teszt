# Travel Companion Antalya Beta 0.6.2 — iOS/PWA Fix

Javítások:
- iPhone dinamikus viewport kezelése (`100dvh` + VisualViewport)
- bottom sheet fixen az alsó élhez kötve
- csukott állapot 86 px, nem nyílik ki induláskor
- PWA manifest: standalone, scope és start_url javítva
- régi service-worker cache automatikus törlése
- a Travel Companion logó lent marad

GitHub Pages feltöltésnél a fájlokat a repository gyökerébe töltsd.
Fontos iPhone-on: a régi főképernyős ikont töröld, Safari-ban nyisd meg az új oldalt, majd Share → Add to Home Screen. Így az új manifesttel standalone módban indul.
