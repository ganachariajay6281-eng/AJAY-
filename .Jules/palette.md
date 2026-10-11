## 2025-05-18 - Interactive Custom Elements Accessibility Pattern
**Learning:** Custom interactive components (like dynamic SVG/div candles or gift box graphics) require explicit `role="button"`, `tabindex="0"`, dynamic `aria-label` updates, and both `Enter`/`Space` keydown handlers alongside `:focus-visible` CSS rules to be accessible to keyboard and screen reader users.
**Action:** When building custom interactive DOM controls without native `<button>` markup, always attach `tabindex="0"`, `role="button"`, `keydown` handlers for Enter/Space, and dynamic `aria-label` state updates.
