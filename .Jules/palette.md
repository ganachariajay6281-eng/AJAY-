## 2026-10-30 - Keyboard Accessibility for Custom Interactive Elements
**Learning:** Custom interactive UI elements like SVG/div candles and gift boxes require explicit `role="button"`, `tabindex="0"`, dynamic `aria-label` updates, and `Enter`/`Space` keydown handlers to ensure parity for keyboard and screen reader users.
**Action:** Always attach `role="button"`, `tabindex="0"`, dynamic `aria-label`, and `keydown` handlers (Enter/Space) when making custom non-native HTML elements interactive.
