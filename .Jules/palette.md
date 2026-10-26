## 2025-05-18 - Interactive Custom Div Elements as Buttons
**Learning:** Custom interactive `div` elements used as clickable controls (e.g. gift boxes, interactive cards) lack default keyboard focusability, ARIA roles, and keyboard event handling.
**Action:** Always add `role="button"`, `tabindex="0"`, `aria-label`, keydown handlers for `Enter` and `Space` keys, and explicit `:focus-visible` styling when making custom container elements interactive.
