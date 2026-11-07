# Palette's Journal - Critical Learnings

## 2026-11-07 - Accessible Dialog Management for Custom Vanilla Modals
**Learning:** In vanilla JS overlay modals that use CSS classes like `.active` to toggle visibility, screen readers and keyboard-only users get trapped or disoriented if `role="dialog"`, `aria-modal="true"`, dynamic `aria-hidden` updates, focus transfer on open, focus restoration to trigger elements on close, and Escape key dismissal are not explicitly handled.
**Action:** When adding or enhancing modals in vanilla JS, always pair modal open/close functions with `aria-hidden` synchronizing, focus setting to the first interactive element inside the modal, focus restoration to the trigger button upon close, and a global keydown handler for Escape.
