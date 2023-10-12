import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import Logo from '@/components/Logo'
import MenuBtn from '@/layouts/nav/MenuBtn'
import NavMenuItems from '@/layouts/nav/MenuItems'

import useWindowWidth from '@/hooks/useWindowWidth'
import useGetCategories from '@/hooks/useGetCategories'

import { social } from '@/utils/social.astro'

import InstagramIcon from '@/icons/components/InstagramIcon'
import YoutubeIcon from '@/icons/components/YoutubeIcon'
import TiktokIcon from '@/icons/components/TiktokIcon'

const socialIcons = [
  {
    icon: InstagramIcon
  },
  {
    icon: YoutubeIcon
  },
  {
    icon: TiktokIcon
  }
]

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

            <div className="hidden gap-14 lg:flex">
              <ul className="flex gap-6 font-light">
                {categories.map(({ name, parent, slug, id }) => {
                  if (parent !== 0 || id === 1) return

                  return (
                    <li>
                      <a
                        href={'/kategrorija/' + slug}
                        className="duration-200 hover:text-primary"
                      >
                        {name}
                      </a>
                    </li>
                  )
                })}
              </ul>

              <div className="flex items-center gap-5">
                {social.map(({ href, name }, i) => {
                  const Icon = socialIcons[i].icon

                  return (
                    <a
                      href={href}
                      key={href}
                      className="duration-200 hover:text-primary"
                    >
                      {/* <img
                      src={socialIcons[i].icon.src}
                      alt={name}
                      className="text-primary"
                    /> */}
                      <Icon />
                    </a>
                  )
                })}
              </div>
            </div>

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
