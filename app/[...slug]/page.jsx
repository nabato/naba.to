import { notFound } from 'next/navigation'
import { allPages } from 'contentlayer/generated'

import { Mdx } from '@/components/mdx-components'

async function getPageFromParams(params) {
  const slug = params?.slug?.join('/')
  const page = allPages.find(page => page.slugAsParams === slug)

  if (!page) {
    notFound()
  }

  return page
}

export async function generateMetadata({ params }) {
  const page = await getPageFromParams(params)

  return !page
    ? {}
    : {
        title: page.title,
        description: page.description
      }
}

export async function generateStaticParams() {
  return allPages.map(page => ({
    slug: page.slugAsParams.split('/')
  }))
}

export default async function PagePage({ params }) {
  const page = await getPageFromParams(params)

  if (!page) {
    notFound()
  }

  return (
    <article className="py-6 prose prose-stone dark:prose-invert">
      {!!page.hideTitle && page.title && <h1>{page.title}</h1>}
      {!!page.hideDescription && page.description && <p className="text-xl">{page.description}</p>}
      {!!page.hideTopDivider && <hr />}
      <Mdx code={page.body.code} />
    </article>
  )
}
