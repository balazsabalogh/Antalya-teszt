# Travel Companion · Antalya · 0.7.9 RC7

iPhone hotfix based directly on RC6 field screenshots.

## Fixed in RC7
- POI generated fallbacks are embedded into the application bundle, so missing `assets/generated` deploys or stale cache cannot produce question-mark/broken-image cards for hotel, bakery, Migros or generic categories.
- Incomplete route-card swipes are cleared on pointer/touch cancel, lost capture, release, blur and visibility change; the green/red action layer is visible only while the card is actively moving.
- The full day carousel has only the dot pager; an opaque pager strip covers iOS's native horizontal scroll indicator.
- Half route view has extra bottom scroll clearance above the fixed add buttons.

## Frozen behavior
Navigation and transit handoff were not modified in this hotfix. Sonar interaction remains: short logo tap = ping without opening the view; long press = open Sonar view without an automatic extra ping.

## QA
RC7 uses the normal two-pass gate: developer/source regression checks followed by an independent regression audit. Browser-device emulation is environment-blocked in this session, so physical iPhone behavior remains the final check.
