# Travel Companion · Antalya · 0.7.9 RC6

Live-candidate hotfix after RC5 iPhone feedback.

## Sonar interaction
- Short tap on the center Companion logo performs a Sonar ping only. It does not open the Sonar sheet.
- Long press on the center logo opens the Sonar view without automatically starting a new ping.
- While the Sonar view is open, a short logo tap performs the ping.
- Sonar has its own close button and any other main-menu selection closes it.

## UI stabilization
- Joined sheets use the same side inset as the main dock and attach exactly to its top edge.
- Full-screen views remain opaque through the iPhone home-indicator area.
- Full day selector uses only the dot page indicator; native horizontal scrollbar is hidden.
- Planner action colors appear only during active horizontal swipe and always reset on cancel/incomplete swipe.

## Images
- RC6 bundles generated local image fallbacks for every POI category and dedicated fallbacks for the hotel, bakery, Migros/shop, food and service POIs.
- Location-specific Wikimedia images can replace these when available online.
- There is a second-level bundled generic fallback, so a broken-image / question-mark slot should not be visible.

## QA
See `QA_PASS1_RC6.json` and `QA_PASS2_INDEPENDENT_RC6.json`.
