## 2026-10-05 - Interactive Non-Button Keyboard Accessibility
**Learning:** In vanilla HTML/JS interactive cards or widgets (like `.gift-box`), clickable `div` elements are unreachable by keyboard users without explicit `role="button"`, `tabindex="0"`, and `Enter`/`Space` `keydown` listeners.
**Action:** When making custom non-native button elements interactive, always pair `role="button"` and `tabindex="0"` with keyboard event listeners (`Enter` / `Space`) and explicit `:focus-visible` styling.
