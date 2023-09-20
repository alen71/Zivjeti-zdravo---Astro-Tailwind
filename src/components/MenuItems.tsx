import { useStore } from '@nanostores/react'
import { motion } from 'framer-motion'

import { isMenuOpen } from '@/components/MenuBtn'

export default function NavMenuItems() {
  const $isMenuOpen = useStore(isMenuOpen)

  return <motion.div>NavMenuItems</motion.div>
}
