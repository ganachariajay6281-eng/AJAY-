## 2025-05-18 - Interactive Custom Elements Accessibility
**Learning:** Custom interactive elements (like CSS gift boxes or cards) that trigger actions on click require `role="button"`, `tabindex="0"`, `aria-label`, and `Enter`/`Space` key event handlers so keyboard and screen reader users can interact with them seamlessly.
**Action:** Always add semantic button roles, keyboard navigation handlers, and visible `:focus-visible` states when attaching click handlers to non-button elements.
