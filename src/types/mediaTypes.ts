export type IMedia = {
  id: number
  date: string
  date_gmt: string
  guid: {
    rendered: URL
  }
  modified: string
  modified_gmt: string
  slug: string
  status: string
  type: string
  link: string
  title: { rendered: string }
  author: 1
  comment_status: 'open' | 'closed'
  ping_status: 'closed' | 'open'
  template: string
  meta: []
  description: {
    rendered: string
  }
  caption: { rendered: string }
  alt_text: string
  media_type: string
  mime_type: string
  media_details: {
    width: number
    height: number
    file: string
    filesize: number
    sizes: {
      medium: [Object]
      large: [Object]
      thumbnail: [Object]
      medium_large: [Object]
      '1536x1536': [Object]
      full: [Object]
    }
    image_meta: {
      aperture: string
      credit: string
      camera: string
      caption: string
      created_timestamp: string
      copyright: string
      focal_length: string
      iso: string
      shutter_speed: string
      title: string
      orientation: string
      keywords: []
    }
  }
  post: number
  source_url: string
  _links: {
    self: [[Object]]
    collection: [[Object]]
    about: [[Object]]
    author: [[Object]]
    replies: [[Object]]
  }
}
