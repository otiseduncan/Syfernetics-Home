import { posts } from '../data/posts'
import Link from 'next/link'

export default function BlogPage() {
  return (
    <section className="py-20 bg-panel px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-accent mb-12 text-center">
          Insights & Blog
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <div
              key={post.slug}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold text-fg mb-2">{post.title}</h3>
              <p className="text-xs text-muted mb-2">{post.date}</p>
              <p className="text-sm text-muted mb-4">{post.summary}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-accent hover:underline text-sm"
              >
                Read more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}