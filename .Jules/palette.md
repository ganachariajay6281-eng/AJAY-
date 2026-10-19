## 2025-05-18 - Keyboard Navigation for Interactive SVG/Div Components
**Learning:** Interactive non-button elements (like the interactive cake candles and gift box) require explicit `role="button"`, `tabindex="0"`, `aria-label`, and `keydown` handlers for Enter and Space keys to be accessible for keyboard and screen reader users.
**Action:** Always ensure custom interactive elements have proper ARIA attributes, tab sequence entry points, and keyboard activation support alongside hover/focus indicator styles.
