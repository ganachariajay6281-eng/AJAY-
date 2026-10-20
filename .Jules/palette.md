## 2026-10-20 - Custom Interactive Canvas/DOM Components Accessibility Pattern
**Learning:** Custom interactive elements (such as candles or gift boxes rendered with custom HTML/CSS divs) lack standard keyboard interactivity and screen reader semantics unless explicitly assigned `role="button"`, `tabindex="0"`, `aria-label`, keydown listeners for Space/Enter, and `:focus-visible` styling.
**Action:** Always add keyboard event handlers (Space/Enter) and explicit ARIA semantics whenever converting static/interactive div containers into clickable UI widgets.
