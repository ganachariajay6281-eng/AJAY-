# Palette's Journal - Critical Learnings

## 2026-09-30 - Modal Dialog Keyboard Dismissal & Focus Restoration
**Learning:** In vanilla JS modal overlays without native `<dialog>`, missing Escape key dismissal and lack of focus management trap or disorient keyboard and screen reader users when overlays activate. Explicitly managing `aria-hidden`, focusing the first input or primary action on open, and restoring focus to trigger elements upon closing via Escape or submit buttons makes overlays accessible without heavy libraries.
**Action:** Always pair custom modal open/close handlers with dynamic `aria-hidden`, `Escape` key listeners, autofocus on first interactive element, and return focus to the triggering element on dismiss.
