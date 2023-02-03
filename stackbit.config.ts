import type * as Stackbit from '@stackbit/sdk'
import { Post } from './.stackbit/models/Post'

const stackbitConfig: Stackbit.RawConfig = {
  stackbitVersion: '~0.5.0',
  cmsName: 'git',
  ssgName: 'nextjs',
  pagesDir: 'content/pages',
  pageLayoutKey: 'type',
  models: [Post],
  customContentReload: true,
}

export default stackbitConfig
