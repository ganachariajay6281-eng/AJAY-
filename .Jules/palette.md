# Palette's Journal - Critical UX & Accessibility Learnings

## 2025-05-18 - Interactive Custom UI Components Keyboard Accessibility
**Learning:** Custom interactive UI elements created with `<div>` elements (like candles on a birthday cake or custom gift boxes) are completely inaccessible to keyboard users and screen readers unless explicitly assigned `role="button"`, `tabindex="0"`, dynamic `aria-label` updates, Enter/Space key listeners, and explicit `:focus-visible` outline styles.
**Action:** When building or enhancing interactive custom components in HTML/JS, ensure full ARIA roles, tabindex, keydown event handlers for keyboard triggers, dynamic screen reader updates, and `:focus-visible` styling are provided alongside mouse click events.
