import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { motion, useScroll, useTransform } from 'framer-motion'

import Logo from '@/components/Logo'
import MenuBtn from '@/components/MenuBtn'
import NavMenuItems from '@/components/MenuItems'

const Nav = () => {
  const { scrollYProgress } = useScroll()
  const height = useTransform(scrollYProgress, [0, 0.05], [158, 80])

  return (
    <>
      <motion.header
        style={{ willChange: height, height }}
        className="left fixed top-0 z-50 w-screen bg-white/90 backdrop-blur-sm"
      >
        <div className="container h-full">
          <div className="relative flex h-full items-center justify-between">
            <Logo />

            <MenuBtn />

            <div className="absolute bottom-0 left-0 h-1 w-full bg-light-gray"></div>
          </div>
        </div>
      </motion.header>
      <div>
        <NavMenuItems />
      </div>
    </>
  )
}

export default Nav
