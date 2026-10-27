## 2025-05-10 - Custom Interactive Elements Keyboard Accessibility
**Learning:** Custom CSS components like candles and gift boxes rendered as `<div>` tags with `onclick` handlers are invisible to keyboard and screen reader users unless explicitly configured with `role="button"`, `tabindex="0"`, dynamic `aria-label`s, and `keydown` handlers for `Enter` and `Space`.
**Action:** Always pair click event listeners on non-interactive HTML tags with keyboard event listeners and visual focus states (`:focus-visible`).
