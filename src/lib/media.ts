import type { IMedia } from '@/types/mediaTypes'

export const getFeaturedImage = async (featured_media: number) => {
  const res = await fetch(
    `https://wp.zivjetizdravo.com/wp-json/wp/v2/media/${featured_media}`
  )

  const featuredImage: IMedia = await res.json()

  return featuredImage
}
