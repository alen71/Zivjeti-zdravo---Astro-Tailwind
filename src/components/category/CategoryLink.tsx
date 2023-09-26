import clsx from 'clsx'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

import Arrow from '@/icons/dropdown-arrow.svg'

import type { ICategoryList } from '@/pages/category/[slug].astro'

import {
  categoryLinkContainer,
  categoryLinkVariants
} from '@/utils/variants/categoryLinkVarians.astro'

type Props = ICategoryList & {
  urlSlug: string
}

const CategoryLink = ({ childCategories, slug, name, urlSlug }: Props) => {
  const [open, setOpen] = useState<ICategory | boolean>(
    childCategories.find(category => category.slug === urlSlug)
  )

  return (
    <div className=" flex flex-col gap-4">
      <div
        className={clsx('relative flex items-center', {
          'rounded-md border-1 bg-black/5 p-4': urlSlug === slug
        })}
      >
        <a
          href={'/category/' + slug}
          className="group flex items-center gap-3 text-2xl font-semibold"
        >
          <div className="relative grid h-5 w-5 place-items-center overflow-hidden rounded-full border-1 border-dark-gray">
            <div
              className={clsx(
                'absolute h-full w-full scale-0 rounded-full bg-black duration-300 group-hover:scale-100',
                {
                  'scale-100': urlSlug === slug
                }
              )}
            />
          </div>
          <span>{name}</span>
        </a>

        {childCategories.length > 0 && (
          <div
            className={clsx(
              'p- absolute right-3 grid h-6 w-6 cursor-pointer place-items-center duration-300 ',
              {
                'rotate-0': open,
                'rotate-180': !open
              }
            )}
            onClick={e => {
              e.stopPropagation()
              setOpen(state => !state)
            }}
          >
            <img
              height={20}
              width={20}
              src={Arrow.src}
              alt="Dropdown arrow"
              className="pointer-events-none"
            />
          </div>
        )}
      </div>

      {childCategories && (
        <motion.div
          initial={open ? 'visible' : 'hidden'}
          animate={open ? 'visible' : 'hidden'}
          variants={categoryLinkContainer}
          className={clsx('flex flex-col gap-4 overflow-hidden pl-4', {
            'pl-4': urlSlug !== slug,
            'pl-7': urlSlug === slug
          })}
        >
          {childCategories.map(({ name, slug }, i) => (
            <motion.div key={name} variants={categoryLinkVariants(i)}>
              <a
                href={'/category/' + slug}
                className={clsx(
                  'group flex items-center gap-3 text-xl font-semibold',
                  { 'rounded-md border-1 bg-black/5 p-4': urlSlug === slug }
                )}
              >
                <div className="relative grid h-4 w-4 place-items-center overflow-hidden rounded-full border-1 border-dark-gray">
                  <div
                    className={clsx(
                      'absolute h-full w-full scale-0 rounded-full bg-black duration-300 group-hover:scale-100',
                      {
                        'scale-100': urlSlug === slug
                      }
                    )}
                  />
                </div>
                <span>{name}</span>
              </a>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  )
}

export default CategoryLink
