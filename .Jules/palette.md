# Palette's Journal - Critical Learnings

## 2026-10-07 - Keyboard accessibility for custom interactive elements & modals
**Learning:** Custom interactive elements (like the CSS gift box) and modal dialogs need explicit `role="button"`, `tabindex="0"`, keyboard triggers (Enter/Space), and global `Escape` key handlers to be fully accessible to keyboard and screen reader users.
**Action:** Always verify interactive `div`s have keyboard event listeners and modals support dismiss via `Escape`.
