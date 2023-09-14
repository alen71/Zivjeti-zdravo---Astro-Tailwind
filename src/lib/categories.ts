export const getCategories = async (url: string) => {
  const res = await fetch(url)

  const categories: ICategory[] = await res.json()

  return categories
}

export const getCategoryBySlug = async (slug: string) => {
  const res = await fetch(
    `https://wp.zivjetizdravo.com/wp-json/wp/v2/categories?slug=${slug}`
  )

  const categories: ICategory[] = await res.json()

  return categories[0]
}

export const getCategoryById = async (id: number) => {
  const res = await fetch(
    `https://wp.zivjetizdravo.com/wp-json/wp/v2/categories/${id}`
  )

  const categories: ICategory = await res.json()

  return categories
}
