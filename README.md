# Travel Companion · Antalya · 0.7.9 RC8 Final Candidate

RC8 is a narrow stabilization build based on RC7. Working navigation/transit behavior is intentionally frozen; this round only addresses the remaining layout and gesture issues from the latest iPhone screenshots.

## RC8 changes
- Compact **Napok** panel uses the exact same outer side geometry as the fixed bottom dock.
- Compact day-photo captions get a strong lower gradient and text shadow for consistent readability.
- Full **Napok** cards have a fixed hero-photo height and a separately scrollable content area, so portrait images (especially Day 4 / Düden) cannot stretch the carousel.
- **Útiterv** day switching no longer competes with card swipes/reordering: explicit `Előző nap` / `Következő nap` controls replace whole-panel horizontal day swipe.
- **Útiterv** drag handle has an exclusive 64 px touch zone; route content starts below it.
- Central Companion logo: short tap closes the current transient panel and performs a Sonar ping on the map; long press opens Sonar view without an automatic extra ping.
- Sonar view has its own explicit Ping, Favorites and Close controls; all four distance buttons remain one row.
- Notification swipe cleanup now mirrors the itinerary-card swipe cleanup, including pointer/touch cancellation.
- Existing navigation, navigation steps and Apple/Google transit handoff are intentionally unchanged from RC7.

## QA gate
Two separate QA passes are required before handoff.

1. Developer regression/static + mobile UI pass.
2. Independent 390 px stress/audit pass from a fresh test flow.

Physical iPhone Safari/PWA touch, GPS and external Apple/Google Maps handoff remain the final device-only checks.
