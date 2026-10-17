## 2026-10-17 - Keyboard Accessibility & ARIA Roles for Custom Interactive Components
**Learning:** Custom interactive elements (e.g., `#gift-box` divs and `.candle` DOM elements) in vanilla JS apps lack keyboard focus, ARIA semantics, and keydown handlers by default, preventing screen reader and keyboard-only users from interacting with them.
**Action:** Always assign `role="button"`, `tabindex="0"`, descriptive `aria-label`s, Enter/Space `keydown` event listeners, and explicit `:focus-visible` CSS rules to custom interactive non-button components.
