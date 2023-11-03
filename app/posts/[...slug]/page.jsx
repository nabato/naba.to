import { notFound } from 'next/navigation'
import { allPosts } from '../../../.contentlayer/generated'

import { Mdx } from '../../../components/mdx-components'
import React from 'react'

async function getPostFromParams(params) {
  const slug = params?.slug?.join('/')
  const post = allPosts.find(post => post.slugAsParams === slug)

  if (!post) {
    null
  }

  return post
}

export async function generateMetadata({ params }) {
  const post = await getPostFromParams(params)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.description
  }
}

export async function generateStaticParams() {
  return allPosts.map(post => ({
    slug: post.slugAsParams.split('/')
  }))
}

export default async function PostPage({ params }) {
  const post = await getPostFromParams(params)

  if (!post) {
    notFound()
  }

  return (
    <article className="py-6 prose prose-stone dark:prose-invert">
      <h1 className="mb-2">{post.title}</h1>
      {post.description && <p className="text-xl mt-0">{post.description}</p>}
      <hr className="my-4" />
      <Mdx code={post.body.code} />
    </article>
  )
}
