import type * as Stackbit from '@stackbit/sdk'

export const Post: Stackbit.YamlPageModel = {
  name: 'Post',
  type: 'page',
  urlPath: '/posts/{slug}',
  fields: [
    {
      name: 'title',
      type: 'string',
      default: 'Post title',
      required: true,
    },
    {
      name: 'date',
      type: 'date',
      description: 'Publish date',
    },
  ],
}
