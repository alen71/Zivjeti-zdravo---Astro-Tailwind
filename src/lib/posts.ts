export const getPostsByCategoryId = async (categoryId: number) => {
  const postsRes = await fetch(
    `https://wp.zivjetizdravo.com/wp-json/wp/v2/posts?categories=${categoryId}`
  )
  const posts: IPost[] = await postsRes.json()

  return posts
}

export const getPostBySlug = async (slug: string) => {
  const postsRes = await fetch(
    `https://wp.zivjetizdravo.com/wp-json/wp/v2/posts?slug=${slug}`
  )
  const posts: IPost = await postsRes.json()

  return posts[0]
}

export const getPosts = async (url: string) => {
  const postsRes = await fetch(url)
  const posts: IPost[] = await postsRes.json()

  return posts
}
