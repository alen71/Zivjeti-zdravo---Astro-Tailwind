import { useStore } from '@nanostores/react'
import { motion } from 'framer-motion'

import { isMenuOpen } from '@/layouts/nav/MenuBtn'

import { social } from '@/utils/social.astro'

import {
  menuContainerVariants,
  menuItemsVariants,
  shadowVariants
} from '@/utils/variants/menuItemsVariants.astro'

import useGetCategories from '@/hooks/useGetCategories'

export default function NavMenuItems() {
  const $isMenuOpen = useStore(isMenuOpen)

  const categories = useGetCategories()

  return (
    <motion.div
      initial="closed"
      animate={$isMenuOpen ? 'open' : 'closed'}
      variants={menuContainerVariants}
      className="absolute bottom-0 z-0 w-full  translate-y-full bg-white"
    >
      <motion.div
        variants={shadowVariants}
        className="h-full w-full overflow-hidden py-8 sm:py-12"
      >
        <motion.div
          variants={menuItemsVariants}
          className="container grid text-lg font-bold sm:grid-cols-2 sm:divide-x-1"
        >
          <div className="mb-8 border-b-1 pb-8 sm:mb-0 sm:border-b-0 sm:pb-0">
            <p className="mb-5 text-center text-dark-gray">Kategorije</p>
            <ul className="flex flex-col items-center gap-3">
              {categories.map(({ slug, name }) => {
                if (name === 'unrecognized') return
                return (
                  <li key={name}>
                    <a
                      href={'/category/' + slug}
                      onClick={() => {
                        isMenuOpen.set(!$isMenuOpen)
                        document
                          .querySelector('html')
                          .classList.toggle('stop-scroll')
                      }}
                    >
                      {name}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="">
            <p className="mb-5 text-center text-dark-gray">Social</p>
            <ul className="flex flex-col items-center gap-3">
              {social.map(({ href, name }) => (
                <li key={name}>
                  <a
                    href={href}
                    onClick={() => {
                      isMenuOpen.set(!$isMenuOpen)
                      document
                        .querySelector('html')
                        .classList.toggle('stop-scroll')
                    }}
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
