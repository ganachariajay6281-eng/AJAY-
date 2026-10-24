## 2025-10-24 - Modal & Dynamic Component Keyboard Accessibility
**Learning:** Dynamic interactive elements (like generated cake candles) and custom interactive components (like gift box divs) in vanilla HTML/JS need explicit `tabindex="0"`, `role="button"`, and keyboard handlers (`Enter`/`Space`) along with proper `aria-hidden` modal lifecycle management to be fully accessible.
**Action:** Always ensure dynamic components and custom interactive elements are keyboard-navigable and modal overlays manage `aria-hidden` state dynamically upon open/close events.
