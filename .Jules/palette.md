## 2023-10-27 - Custom Interactive Elements Keyboard & ARIA Pattern
**Learning:** Custom interactive elements (like the gift box div and dynamic cake candles) lacked native keyboard focus (`tabindex="0"`), `role="button"`, descriptive `aria-label`s, and `Enter`/`Space` keydown handlers, making them inaccessible to keyboard and screen reader users.
**Action:** Always ensure custom non-button interactive elements are augmented with `role="button"`, `tabindex="0"`, descriptive `aria-label` attributes, keyboard event listeners (`Enter` and `Space`), and `:focus-visible` CSS rules.
