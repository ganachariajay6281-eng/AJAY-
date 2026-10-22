# Palette's Journal

## 2025-05-18 - Keyboard Accessibility for Interactive Elements & Modals
**Learning:** Non-button interactive div elements (like `#gift-box`) require explicit `role="button"`, `tabindex="0"`, `aria-label`, and `keydown` handlers (Enter/Space) to be accessible to keyboard users. Additionally, global Escape key handling is essential for modal dismissal UX.
**Action:** Always ensure interactive non-button cards/elements have keyboard event listeners, proper focus-visible outline indicators, and Escape key dismissal for modals.
