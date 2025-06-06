# Styling Always Rule

- **Tailwind usage:** Prefer Tailwind utility classes for styling. Avoid ad-hoc CSS unless necessary (e.g., for dynamic transforms in Framer Motion).
- **Consistent design tokens:** Use colors, font sizes, and spacing from Tailwind config. Do not use arbitrary hex values or pixel values if a close Tailwind value exists.
- **No inline styles:** Avoid the `style` attribute in JSX for layout/styling, except for dynamic animation transforms or rare cases.
- **No border radius & shadows:** Do not use border-radius (use `rounded-none` or omit rounding classes). Avoid heavy shadows; use `shadow-none` or minimal shadows for a flat, luxury look.
- **Serif for headings:** All heading elements (`<h1>`–`<h6>`) must use the serif font class (e.g., `font-serif`).
- **Responsive design:** Always design mobile-first. Use Tailwind's responsive utilities (`sm:`, `md:`, etc.) to ensure layouts adapt to all screen sizes.
- **Naming & structure:** Use PascalCase for component filenames. One component per file. Organize components in `/components` and group by domain if needed.
- **Clean JSX:** Keep JSX readable. If a block has too many classes or logic, break it into sub-components.
- **No deeply nested components:** Avoid defining multiple components in a single file. Each component should have its own file for clarity.
- **Consistent spacing:** Use Tailwind's spacing scale for margins and padding. Avoid arbitrary values. 