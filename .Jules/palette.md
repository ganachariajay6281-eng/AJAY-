## 2025-02-26 - Custom Interactive Elements Keyboard & Screen Reader Accessibility
**Learning:** Custom interactive elements (e.g. gift boxes, dynamically generated candles) built with styled `<div>` elements need explicit `role="button"`, `tabindex="0"`, descriptive `aria-label`, and `keydown` handlers for `Enter` and `Space` to be accessible to screen reader and keyboard users.
**Action:** When building interactive card widgets, ensure all custom element generators assign accessible roles, keyboard listeners, and `:focus-visible` styling alongside mouse click events.
