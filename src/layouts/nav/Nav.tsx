import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

import Logo from '@/components/Logo'
import MenuBtn from '@/layouts/nav/MenuBtn'
import NavMenuItems from '@/layouts/nav/MenuItems'

import useWindowWidth from '@/hooks/useWindowWidth'

const Nav = () => {
  const [isScroll, setIsScroll] = useState(false)
  const width = useWindowWidth()

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setIsScroll(window.scrollY > 0)
    })
  }, [])

  return (
    <>
      <motion.header
        style={{ willChange: 'height', height: isScroll ? 80 : 158 }}
        className="left fixed top-0 z-50 w-screen bg-white duration-300"
      >
        <div className="container relative z-10 h-full bg-white">
          <div className="relative flex h-full items-center justify-between">
            <Logo />

            <MenuBtn />

            <div className="absolute bottom-0 left-0 h-1 w-full bg-light-gray"></div>
          </div>
        </div>

        <NavMenuItems />
      </motion.header>
    </>
  )
}

export default Nav
