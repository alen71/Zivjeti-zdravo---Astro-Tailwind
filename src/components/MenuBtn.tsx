import { useStore } from '@nanostores/react'

import { motion, type Variants } from 'framer-motion'

import { atom } from 'nanostores'

export const isMenuOpen = atom(false)

export default function MenuBtn() {
  const $isMenuOpen = useStore(isMenuOpen)

  const openVariants: Variants = {
    visible: {
      opacity: 1,
      transition: { type: 'tween', duration: 0.3, delay: 0.5 }
    },
    hidden: {
      opacity: 0,
      transition: { duration: 0.4, ease: 'easeIn' }
    }
  }

  const closeVariants: Variants = {
    visible: {
      opacity: 1,
      transition: { type: 'tween', duration: 0.3, delay: 0.5 }
    },
    hidden: {
      opacity: 0,
      transition: { duration: 0.4, ease: 'easeIn' }
    }
  }

  return (
    <button
      className="group relative z-50 h-5 w-6"
      onClick={() => isMenuOpen.set(!$isMenuOpen)}
    >
      <motion.div
        initial="visible"
        animate={$isMenuOpen ? 'hidden' : 'visible'}
        variants={openVariants}
        className=" relative flex h-full w-full flex-col justify-between overflow-hidden"
      >
        <span className="h-[0.125rem] w-full bg-black duration-300 group-hover:-translate-x-[150%]"></span>
        <span className="h-[0.125rem] w-2/3 bg-black duration-200 group-hover:translate-x-[150%]"></span>
        <span className="h-[0.125rem] w-full bg-black delay-100 duration-300 group-hover:-translate-x-[150%]"></span>

        <span className="absolute top-0 h-[0.125rem] w-full bg-black  duration-300 translate-x-full group-hover:translate-x-0"></span>

        <span className="absolute top-1/2 h-[0.125rem] w-2/3 bg-black duration-200 -translate-x-full -translate-y-1/2 group-hover:translate-x-0"></span>

        <span className="absolute bottom-0 h-[0.125rem] w-full bg-black  delay-100 duration-300 translate-x-full group-hover:translate-x-0"></span>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={$isMenuOpen ? 'visible' : 'hidden'}
        variants={closeVariants}
        className="absolute left-0 top-0 flex h-5 w-6 flex-col justify-center overflow-hidden "
      >
        <span className="h-[0.125rem] w-full bg-black translate-y-[0.0625rem] rotate-45" />
        <span className="h-[0.125rem] w-full bg-black -translate-y-[0.0625rem] -rotate-45" />
      </motion.div>
    </button>
  )
}
