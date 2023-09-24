import { motion, useScroll, useTransform } from 'framer-motion'

import Logo from '@/components/Logo'
import MenuBtn from '@/layouts/nav/MenuBtn'
import NavMenuItems from '@/layouts/nav/MenuItems'

import useWindowWidth from '@/hooks/useWindowWidth'

const Nav = () => {
  const width = useWindowWidth()

  const { scrollYProgress } = useScroll()
  const height = useTransform(scrollYProgress, [0, 0.05], [158, 80])

  return (
    <>
      <motion.header
        style={{ willChange: 'height', height: width > 1024 ? height : 80 }}
        className="left fixed top-0 z-50 w-screen bg-white "
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
