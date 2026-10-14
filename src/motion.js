// Shared motion tokens so every animation on the page feels like one system.
export const EASE_OUT = [0.22, 1, 0.36, 1]
export const SPRING = { type: 'spring', stiffness: 380, damping: 32 }

// Parent/child variants for staggered lists revealed on scroll.
export const staggerList = (stagger = 0.05) => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger } },
})
export const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } },
}
