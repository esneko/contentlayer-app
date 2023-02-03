import { allPosts, Post } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import Head from 'next/head'

export async function getStaticPaths() {
  const paths: string[] = allPosts.map((post) => post.url)
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const post: Post = allPosts.find((post) => post.url === `/posts/${params.slug}`)
  return {
    props: {
      post,
    },
  }
}

const PostLayout = ({ post }: { post: Post }) => {
  return (
    <div data-sb-object-id={post.id}>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article className="max-w-xl py-12 mx-auto">
        <div className="mb-8 text-center">
          <time
            dateTime={post.date}
            className="block mb-2 text-sm text-gray-600 dark:text-slate-400"
          >
            {format(parseISO(post.date), 'LLLL d, yyyy')}
          </time>
          <h1 className="text-4xl" data-sb-field-path="title">
            {post.title}
          </h1>
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.body.html }} />
      </article>
    </div>
  )
}

export default PostLayout
