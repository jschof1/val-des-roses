# Motion Auto-Attached Rule

- **Use variants for consistency:** Define and reuse animation variants (e.g., `fadeInUp`, `fadeIn`, etc.) instead of inlining similar animations in multiple places.
- **Avoid layout thrash:** Animate transforms (translate, scale, opacity) instead of width/height or position for better performance.
- **Prefer Motion components:** Use `<motion.div>`, `<motion.img>`, etc., for animations. Avoid manual event listeners or JS for animation effects.
- **Page transitions:** Use `<AnimatePresence>` for route changes and component unmount animations. Wrap page components to enable smooth transitions.
- **Staggering and sequencing:** Use `staggerChildren` and `delay` in parent variants to create polished, cascading animations for lists or grids.
- **Reduce motion:** Always check for and respect user `prefers-reduced-motion` using Framer Motion's `useReducedMotion` hook. Disable or simplify animations for users who prefer less motion.
- **MotionConfig:** Use `<MotionConfig>` for global settings if needed (e.g., spring config, reduced motion).
- **Performance:** Only animate what is necessary. Prefer transforms and opacity for GPU-optimized performance. Avoid animating too many elements at once; stagger or limit simultaneous animations.
- **Testing:** Test animations on real devices (especially mobile) for smoothness and comfort. Adjust durations and distances as needed.
- **Code examples:** Refer to Framer Motion docs for best practices and advanced usage: https://motion.dev/docs/. 