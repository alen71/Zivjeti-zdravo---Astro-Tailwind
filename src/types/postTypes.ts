type IPost = {
  id: number
  date: number
  date_gmt: string
  guid: { rendered: URL }
  modified: Date
  modified_gmt: Date
  slug: string
  status: 'publish' | 'future' | 'draft' | 'pending' | 'private'
  type: string
  link: URL
  title: { rendered: string }
  content: {
    rendered: string
    protected: boolean
  }
  excerpt: {
    rendered: string
    protected: boolean
  }
  author: number
  featured_media: number
  comment_status: 'open' | 'closed'
  ping_status: 'open' | 'closed'
  sticky: boolean
  template: string
  format: 'standard'
  meta: { footnotes: string }
  categories: number[]
  tags: number[]
  _links: {
    self: [[Object]]
    collection: [[Object]]
    about: [[Object]]
    author: [[Object]]
    replies: [[Object]]
    'version-history': [[Object]]
    'predecessor-version': [[Object]]
    'wp:featuredmedia': [[Object]]
    'wp:attachment': [[Object]]
    'wp:term': [[Object], [Object]]
    curies: [[Object]]
  }
}
