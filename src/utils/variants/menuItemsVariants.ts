import type { Variants } from 'framer-motion'

export const menuContainerVariants: Variants = {
  open: {
    y: '100%',
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 14,
      mass: 0.5
    }
  },
  closed: {
    y: '0%',
    transition: {
      delay: 0.2,
      duration: 0.4,
      ease: 'easeInOut'
    }
  }
}

export const shadowVariants: Variants = {
  open: {
    boxShadow: '0 25px 40px -12px rgb(0 0 0 / 0.35)',
    transition: { duration: 0.2, delay: 0.1 }
  },
  closed: {
    boxShadow: '0',
    transition: { delay: 0.3, duration: 0.3, ease: 'anticipate' }
  }
}

export const menuItemsVariants: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 45, delay: 0.3 }
  },
  closed: {
    y: -50,
    opacity: 0,
    transition: { type: 'tween', duration: 0.2 }
  }
}
