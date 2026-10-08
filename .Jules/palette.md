## 2025-10-08 - Accessible Custom Interactive Elements in Canvas/HTML Widgets
**Learning:** Interactive HTML components like candles and gift boxes built with plain `<div>` tags are inaccessible to keyboard and screen reader users without explicit keyboard listeners (`keydown` for Space and Enter), focusability (`tabindex="0"`), and ARIA attributes (`role="button"`, `aria-label`, `aria-pressed`).
**Action:** Ensure all non-native interactive controls added to the DOM are initialized with proper ARIA semantics, `tabindex="0"`, and key event listeners to mirror click behavior.
