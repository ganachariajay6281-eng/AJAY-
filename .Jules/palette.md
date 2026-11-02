# Palette's Journal

## 2025-05-18 - Keyboard Interactivity for Custom Dynamic Canvas/DOM Elements
**Learning:** Custom interactive micro-elements rendered in dynamic DOM containers (such as birthday cake candles or floating objects) often omit native `<button>` semantics, ARIA states, and `:focus-visible` styles, rendering them invisible to screen readers and unreachable by keyboard-only users. Furthermore, interactive state transitions (like lit vs. blown out) need real-time ARIA updates so assistive tech announces the new state without requiring full DOM re-renders.
**Action:** When creating custom interactive objects, always assign `role="button"`, `tabindex="0"`, dynamic stateful `aria-label` attributes (`lit` vs. `blown out`), keyboard handlers (`Enter` and `Space`), and pair with standard modal `Escape` dismissal for consistent accessibility.
