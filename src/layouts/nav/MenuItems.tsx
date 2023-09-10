import { isMenuOpen } from '@/components/MenuBtn'
import { useStore } from '@nanostores/preact'

export default function NavMenuItems() {
  const $isMenuOpen = useStore(isMenuOpen)

  return <div>NavMenuItems</div>
}
