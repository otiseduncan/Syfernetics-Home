import Link from 'next/link'
import { posts } from '@/data/posts'

export const metadata = {
  title: 'Syfernetics Notes | Web Design, Workflow Automation & Small Business IT',
  description:
    'Notes from Syfernetics on small business websites, workflow tools, dashboards, security-minded setup, and practical technology habits.',
  openGraph: {
    title: 'Syfernetics Notes | Web Design, Workflow Automation & Small Business IT',
    description:
      'Notes from Syfernetics on small business websites, workflow tools, dashboards, security-minded setup, and practical technology habits.',
    type: 'website',
    url: 'https://www.syfernetics.com/blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Syfernetics Notes | Web Design, Workflow Automation & Small Business IT',
    description:
      'Notes from Syfernetics on small business websites, workflow tools, dashboards, security-minded setup, and practical technology habits.',
  },
}

export default function BlogPage() {
  return (
    <main className="brand-shell px-6 py-20 text-fg">
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
          Notes
        </p>
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
          Practical technology notes for small businesses
        </h1>
        <p className="mb-12 text-lg leading-8 text-muted">
          Straightforward writeups on websites, workflow automation, business email, and practical IT for Central Georgia small businesses.
        </p>

        <div className="grid gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-2xl border border-white/10 bg-card/70 p-6 shadow-soft transition hover:border-accent/40 hover:bg-card"
            >
              <div className="mb-3 flex flex-wrap items-center gap-3">
                {post.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-bg px-3 py-0.5 text-xs font-semibold text-muted"
                  >
                    {tag}
                  </span>
                ))}
                {post.readTime && (
                  <span className="text-xs text-muted">{post.readTime}</span>
                )}
              </div>
              <h2 className="mb-2 text-xl font-bold text-fg transition group-hover:text-accent">
                {post.title}
              </h2>
              <p className="text-sm leading-7 text-muted">{post.summary}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-muted">
                {post.date}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
