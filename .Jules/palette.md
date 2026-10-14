## 2025-10-14 - Interactive Card Component Keyboard Navigation & ARIA Patterns
**Learning:** Custom visual card components (like dynamic SVG/div candles and interactive gift boxes) often lack semantic HTML markup, keyboard focus management, and screen reader labels.
**Action:** Always wrap or convert interactive visual items into semantic `<button>` elements with `aria-label` updates on state changes, or apply `role="button"`, `tabindex="0"`, and `keydown` handlers with visible `:focus-visible` styling.
