## 2025-05-18 - Keyboard Accessibility for Custom Interactive Elements
**Learning:** Custom interactive elements rendered using standard `<div>` containers (such as birthday candles or gift boxes) are invisible to keyboard navigation and screen readers unless explicitly assigned `role="button"`, `tabindex="0"`, appropriate `aria-label`s, and `keydown` handlers for `Enter` and `Space`.
**Action:** When creating custom interactive components with `<div>` tags, always include `role="button"`, `tabindex="0"`, dynamic ARIA labels, and keyboard event handlers.
