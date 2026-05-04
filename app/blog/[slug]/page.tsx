import { notFound } from 'next/navigation'
import Link from 'next/link'
import { posts } from '@/data/posts'
import type { Metadata } from 'next'

type Params = { slug: string }

export async function generateStaticParams(): Promise<Params[]> {
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) return { title: 'Not Found | Syfernetics' }
  return {
    title: `${post.title} | Syfernetics`,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: 'article',
      url: `https://www.syfernetics.com/blog/${post.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>
}) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) notFound()

  return (
    <main className="brand-shell px-6 py-20 text-fg">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8">
          <Link
            href="/blog"
            className="text-sm font-semibold text-muted transition hover:text-accent"
          >
            ← Back to Blog
          </Link>
        </div>

        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
          Notes
        </p>

        {post.tags && (
          <div className="mb-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-card/60 px-3 py-1 text-xs font-semibold text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <h1 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
          {post.title}
        </h1>

        <div className="mb-10 flex items-center gap-3 text-sm text-muted">
          {post.date && <span>{post.date}</span>}
          {post.readTime && <span>· {post.readTime}</span>}
        </div>

        <div
          className="space-y-4 leading-8 text-muted [&_a]:text-accent [&_a:hover]:underline [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-fg [&_li]:leading-8 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 [&_strong]:font-semibold [&_strong]:text-fg [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </main>
  )
}
