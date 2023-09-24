import type { Variants } from 'framer-motion'

export const categoryLinkContainer: Variants = {
  visible: {
    maxHeight: 400,
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  hidden: {
    maxHeight: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
}

export const categoryLinkVariants = (index: number) => {
  const variants: Variants = {
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 40, delay: index / 100 + 0.1 }
    },
    hidden: {
      x: 20,
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: 'easeInOut'
      }
    }
  }

  return variants
}
