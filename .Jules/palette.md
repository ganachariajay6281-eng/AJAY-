# Palette's Journal

## 2026-11-08 - Accessible interactive widgets and dialog keyboard traps
**Learning:** In interactive celebration cards with custom CSS elements acting as buttons (such as the 3D gift box) and modal overlays, keyboard accessibility is frequently missed: elements lack `role="button"`, `tabindex="0"`, keyboard triggers (`Enter`/`Space`), and dialogs lack `Escape` dismissal and focus restoration.
**Action:** When working on playful or gamified web components, always ensure non-standard interactive widgets have ARIA roles/labels, keyboard activation, visible focus styling (`:focus-visible`), and standard Escape handling for modal overlays.
