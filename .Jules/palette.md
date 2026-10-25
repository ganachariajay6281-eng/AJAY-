## 2025-10-25 - Interactive Custom UI Components Keyboard Accessibility & Focus
**Learning:** In interactive custom UI elements built with `<div>` elements (e.g. birthday cake candles or gift boxes), mouse-only event handlers prevent keyboard-only and screen reader users from triggering interactions.
**Action:** Always assign `role="button"`, `tabindex="0"`, explicit dynamic `aria-label`s, `:focus-visible` styling, and `keydown` event handlers for `Enter` and `Space` keys to custom interactive elements.
