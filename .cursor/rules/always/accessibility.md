# Accessibility Always Rule

- **Images must have alt text:** All `<img>` tags and Next.js `Image` components must include an `alt` attribute. Use descriptive alt text for meaningful images; use `alt=""` for decorative images.
- **Form elements need labels:** Every input, select, or textarea must have an associated `<label>` or `aria-label`. Never leave form controls unlabeled.
- **No autofocus or distractors:** Avoid using autoplaying media, flashing animations, or anything that could distract users. Always respect user `prefers-reduced-motion` settings (use Framer Motion's `useReducedMotion` hook where applicable).
- **No keyboard traps:** Modals, popovers, and dialogs must be closable with Escape and must manage focus correctly (focus trap inside, return focus on close).
- **Semantic HTML:** Use semantic elements (e.g., `<button>` for clickable actions, `<nav>`, `<main>`, `<footer>`, etc.). Avoid using `<div>` or `<span>` for interactive elements.
- **Contrast check:** Ensure all text and interactive elements meet WCAG AA contrast guidelines (4.5:1 for normal text). Manually verify new color combinations.
- **Keyboard navigation:** All interactive elements must be accessible by keyboard (tab order, focus indicators, etc.). Never remove focus outlines unless replaced with a visible alternative.
- **Accessible forms:** Use proper labels, helper text, and ARIA live regions for form errors. Ensure forms are usable with screen readers and keyboard only.
- **Skip link:** Implement a "Skip to Main Content" link at the top of the page, visible on focus, to allow keyboard users to bypass navigation.
- **ARIA and roles:** Use ARIA roles and attributes only when necessary (prefer semantic HTML). For custom widgets, ensure correct ARIA usage (e.g., `role="dialog"`, `aria-expanded`, etc.). 