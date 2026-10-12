
## 2025-02-17 - Keyboard Navigation for Interactive Visual Elements
**Learning:** In interactive web experiences like celebration cards, visual interactive elements (such as candles and gift boxes) often lack basic keyboard accessibility (tabindex, ARIA attributes, keydown listeners).
**Action:** Always ensure interactive non-button elements have `tabindex="0"`, `role="button"`, `aria-label`, keydown handlers for Enter/Space, and explicit `:focus-visible` CSS rules.
