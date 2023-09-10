import { useStore } from '@nanostores/preact'
import { atom } from 'nanostores'

export const isMenuOpen = atom(false)

export default function MenuBtn() {
  const $isMenuOpen = useStore(isMenuOpen)

  return (
    <button
      class="group relative flex flex-col justify-between w-[1.125rem] h-4 overflow-hidden"
      onClick={() => isMenuOpen.set(!$isMenuOpen)}
    >
      <span class="w-full h-[0.125rem] bg-black"></span>
      <span class="w-2/3 h-[0.125rem] bg-black duration-200 group-hover:translate-x-[150%]"></span>
      <span class="w-full h-[0.125rem] bg-black"></span>

      <span class="w-2/3 h-[0.125rem] bg-black absolute top-1/2 -translate-y-1/2 -translate-x-full group-hover:translate-x-0 duration-200"></span>
    </button>
  )
}
