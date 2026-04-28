import type { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts, formatDate } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog — Parenting Tips, Chore Charts & Family Routines',
  description:
    'Practical parenting advice on chore charts, reward systems, morning routines, and building good habits in children. Free printable tools included.',
  keywords: [
    'parenting blog',
    'chore chart tips',
    'reward chart advice',
    'kids morning routine',
    'building habits in children',
  ],
}

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  'Chore Charts': { bg: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-200' },
  'Reward Charts': { bg: 'bg-amber-50',  text: 'text-amber-700',  border: 'border-amber-200'  },
  'Routines':      { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' },
  'Habits':        { bg: 'bg-violet-50', text: 'text-violet-700', border: 'border-violet-200' },
}

export default function BlogIndexPage() {
  // Sort newest first
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
  const [featured, ...rest] = sorted

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-indigo-600 via-indigo-500 to-purple-600 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-indigo-200 font-bold text-sm uppercase tracking-widest mb-3">
            Planivor Blog
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-normal leading-tight mb-4">
            📝 Parenting Tips & Family Routines
          </h1>
          <p className="text-indigo-100 text-lg leading-relaxed max-w-xl mx-auto">
            Practical advice on chore charts, reward systems, morning routines, and building
            good habits that last a lifetime.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">

        {/* ── Featured article ──────────────────────────────────────── */}
        <section className="mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-4">
            ✨ Latest Post
          </p>
          <Link
            href={`/blog/${featured.slug}`}
            className="group block bg-white rounded-3xl border border-gray-100 shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center h-48">
              <span className="text-8xl">{featured.emoji}</span>
            </div>
            <div className="p-8">
              {/* Category pill */}
              {(() => {
                const c = categoryColors[featured.category] ?? categoryColors['Habits']
                return (
                  <span className={`inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full border ${c.bg} ${c.text} ${c.border} mb-3`}>
                    {featured.category}
                  </span>
                )
              })()}
              <h2 className="font-display text-2xl md:text-3xl text-gray-800 group-hover:text-indigo-600 transition-colors leading-snug mb-3">
                {featured.title}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">{featured.description}</p>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span>{formatDate(featured.date)}</span>
                <span>·</span>
                <span>{featured.readingTime}</span>
              </div>
            </div>
          </Link>
        </section>

        {/* ── All articles grid ─────────────────────────────────────── */}
        <section>
          <h2 className="font-display text-2xl text-gray-800 mb-6">All Articles</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map(post => {
              const c = categoryColors[post.category] ?? categoryColors['Habits']
              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                >
                  {/* Card thumbnail */}
                  <div className={`${c.bg} flex items-center justify-center h-32`}>
                    <span className="text-6xl">{post.emoji}</span>
                  </div>

                  <div className="flex flex-col flex-1 p-5">
                    <span className={`self-start text-xs font-bold uppercase tracking-wide px-2.5 py-0.5 rounded-full border ${c.bg} ${c.text} ${c.border} mb-2`}>
                      {post.category}
                    </span>
                    <h3 className="font-bold text-gray-800 group-hover:text-indigo-600 transition-colors leading-snug mb-2 text-base">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-3 line-clamp-3">
                      {post.description}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gray-400 mt-auto">
                      <span>{formatDate(post.date)}</span>
                      <span>·</span>
                      <span>{post.readingTime}</span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────── */}
        <div className="mt-14 bg-indigo-600 rounded-3xl p-8 text-center text-white">
          <h2 className="font-display text-3xl mb-3">Ready to Get Organised?</h2>
          <p className="text-indigo-200 mb-6">
            Free printable chore charts, reward charts &amp; routine schedules — no login required.
          </p>
          <Link
            href="/chore-chart-generator"
            className="inline-block bg-white text-indigo-600 font-bold px-8 py-3.5 rounded-2xl hover:bg-indigo-50 transition-colors"
          >
            📋 Create Your Free Chart
          </Link>
        </div>
      </div>
    </>
  )
}
