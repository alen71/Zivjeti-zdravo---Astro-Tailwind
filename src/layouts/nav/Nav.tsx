import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import Logo from '@/components/Logo'
import MenuBtn from '@/layouts/nav/MenuBtn'
import NavMenuItems from '@/layouts/nav/MenuItems'

import useWindowWidth from '@/hooks/useWindowWidth'
import useGetCategories from '@/hooks/useGetCategories'

const Nav = () => {
  const [isScroll, setIsScroll] = useState(false)
  const width = useWindowWidth()

  const categories = useGetCategories()

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setIsScroll(window.scrollY > 0)
    })
  }, [])

  return (
    <>
      <motion.header
        style={{ willChange: 'height', height: isScroll ? 110 : 138 }}
        className="left fixed top-0 z-50 w-screen bg-white duration-300"
      >
        <div className="container relative z-10 h-full bg-white">
          <div className="relative flex h-full items-center justify-between">
            <Logo />

            <ul className="hidden gap-6 font-light lg:flex ">
              {categories.map(({ name, parent, slug, id }) => {
                if (parent !== 0 || id === 1) return

                return (
                  <li>
                    <a
                      href={'/' + slug}
                      className="duration-200 hover:text-primary"
                    >
                      {name}
                    </a>
                  </li>
                )
              })}
            </ul>

            <div className="lg:hidden">
              <MenuBtn />
            </div>

            <div className="absolute bottom-0 left-0 h-1 w-full bg-light-gray"></div>
          </div>
        </div>

        <NavMenuItems categories={categories} />
      </motion.header>
    </>
  )
}

export default Nav
