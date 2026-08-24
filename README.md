# Travel Companion · Antalya Beta 0.7.5

Field-test refinement build based on the locked Antalya UX.

## This build focuses on
- marker selection: only the active marker subtly floats/pulses; darker navy marker interiors
- POI sheet: compact → detailed → fullscreen Guide, with a horizontal action carousel
- working nearby category filters
- itinerary: quick 2×2 menu on short press, large sheet on long press, then fullscreen planner
- planner backup: up to 10 local snapshots + manual save / latest restore
- navigation: no bottom sheet, persistent state, show/hide toggle, swipe next/hide on the top card
- notifications: Messenger-style swipe (right contextual action, left dismiss), close hides the top strip
- days: compact photo carousel in a real panel, working position dots, pull-up to large photo carousel
- Sonar: 60-second result persistence; selected Sonar POI pauses expiry
- fullscreen panels: no map strip at top and a one-tap close button
- richer offline presentation: local photos for known POIs and redesigned SVG category fallbacks without missing-glyph icons
- blue/navy Companion visual skin retained; Turkey remains a subtle accent rather than recoloring the whole UI

## Still beta / not complete
- live Antalya public-transport feeds are not yet integrated
- online road routing depends on network availability; offline route geometry falls back to cached/preloaded state
- only the POIs with bundled source photos have exact offline photos; other POIs use explicit category artwork rather than a misleading photo
