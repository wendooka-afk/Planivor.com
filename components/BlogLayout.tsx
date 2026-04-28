import Link from 'next/link'
import AdUnit from '@/components/AdUnit'
import { blogPosts, formatDate } from '@/lib/blog'

// ── Theme presets ─────────────────────────────────────────────────────────────
const themes = {
  indigo: {
    hero:      'from-indigo-600 via-indigo-500 to-purple-600',
    badge:     'bg-indigo-700 text-indigo-100',
    crumb:     'text-indigo-200 hover:text-white',
    dot:       'text-indigo-300',
    meta:      'text-indigo-200',
    cta:       'bg-indigo-600',
    ctaHover:  'hover:bg-indigo-50',
    ctaText:   'text-indigo-600',
    ctaSub:    'text-indigo-200',
  },
  amber: {
    hero:      'from-amber-500 via-orange-400 to-yellow-400',
    badge:     'bg-amber-600 text-amber-100',
    crumb:     'text-amber-100 hover:text-white',
    dot:       'text-amber-200',
    meta:      'text-amber-100',
    cta:       'bg-amber-500',
    ctaHover:  'hover:bg-amber-50',
    ctaText:   'text-amber-600',
    ctaSub:    'text-amber-100',
  },
  emerald: {
    hero:      'from-emerald-500 via-teal-500 to-cyan-500',
    badge:     'bg-emerald-700 text-emerald-100',
    crumb:     'text-emerald-100 hover:text-white',
    dot:       'text-emerald-200',
    meta:      'text-emerald-100',
    cta:       'bg-emerald-600',
    ctaHover:  'hover:bg-emerald-50',
    ctaText:   'text-emerald-600',
    ctaSub:    'text-emerald-100',
  },
  violet: {
    hero:      'from-violet-600 via-purple-500 to-indigo-600',
    badge:     'bg-violet-700 text-violet-100',
    crumb:     'text-violet-200 hover:text-white',
    dot:       'text-violet-300',
    meta:      'text-violet-200',
    cta:       'bg-indigo-600',
    ctaHover:  'hover:bg-indigo-50',
    ctaText:   'text-indigo-600',
    ctaSub:    'text-indigo-200',
  },
} as const

export type BlogTheme = keyof typeof themes

interface BlogLayoutProps {
  /** Slug of this article */
  slug: string
  /** Category label shown in the badge */
  category: string
  /** H1 title — centered in hero */
  title: string
  /** Short description shown under the title */
  description: string
  /** ISO date string */
  date: string
  readingTime: string
  /** Large emoji shown in the hero banner (replaces a photo) */
  heroEmoji: string
  /** Color theme */
  theme?: BlogTheme
  /** CTA button props */
  cta: { href: string; label: string }
  /** Up to 3 related article slugs */
  related: string[]
  children: React.ReactNode
}

// ── Related articles mini-card ────────────────────────────────────────────────
function RelatedCard({ slug }: { slug: string }) {
  const post = blogPosts.find(p => p.slug === slug)
  if (!post) return null
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
    >
      <div className="bg-indigo-50 flex items-center justify-center h-24">
        <span className="text-5xl">{post.emoji}</span>
      </div>
      <div className="p-4 flex-1">
        <span className="text-xs font-bold uppercase tracking-wide text-indigo-400 block mb-1">
          {post.category}
        </span>
        <p className="text-sm font-bold text-gray-800 group-hover:text-indigo-600 transition-colors leading-snug">
          {post.title}
        </p>
        <p className="text-xs text-gray-400 mt-2">{formatDate(post.date)} · {post.readingTime}</p>
      </div>
    </Link>
  )
}

// ── Main layout component ─────────────────────────────────────────────────────
export default function BlogLayout({
  slug,
  category,
  title,
  description,
  date,
  readingTime,
  heroEmoji,
  theme = 'indigo',
  cta,
  related,
  children,
}: BlogLayoutProps) {
  const t = themes[theme]

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <div className={`bg-gradient-to-br ${t.hero} text-white pt-14 pb-0 px-4`}>
        <div className="max-w-3xl mx-auto text-center">

          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <Link href="/blog" className={`text-sm transition-colors ${t.crumb}`}>
              ← Blog
            </Link>
            <span className={t.dot}>·</span>
            <span className={`text-xs font-bold uppercase tracking-wide px-3 py-0.5 rounded-full ${t.badge}`}>
              {category}
            </span>
          </div>

          {/* Title — centered */}
          <h1 className="font-display text-3xl md:text-5xl font-normal leading-tight mb-5">
            {title}
          </h1>

          {/* Description */}
          <p className={`text-lg leading-relaxed max-w-2xl mx-auto mb-6 ${t.meta}`}>
            {description}
          </p>

          {/* Meta */}
          <div className={`flex items-center justify-center gap-3 text-sm mb-8 ${t.meta}`}>
            <time dateTime={date}>{formatDate(date)}</time>
            <span className={t.dot}>·</span>
            <span>{readingTime}</span>
            <span className={t.dot}>·</span>
            <span>By Planivor</span>
          </div>
        </div>

        {/* Hero emoji banner — bleeds into body */}
        <div className="max-w-4xl mx-auto -mb-8 px-4">
          <div className="w-full h-40 md:h-52 rounded-t-3xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center gap-6">
            <span className="text-8xl md:text-9xl opacity-90 select-none">{heroEmoji}</span>
          </div>
        </div>
      </div>

      {/* ── Article body ──────────────────────────────────────────────── */}
      <div className="bg-gray-50 pt-16 pb-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          {/* Top ad */}
          <AdUnit
            slot={process.env.NEXT_PUBLIC_AD_SLOT_CONTENT}
            format="horizontal"
            className="mb-10"
          />

          {/* Content slot */}
          <article className="text-gray-700 leading-relaxed space-y-5">
            {children}
          </article>

          {/* Mid ad */}
          <AdUnit
            slot={process.env.NEXT_PUBLIC_AD_SLOT_CONTENT}
            format="horizontal"
            className="my-12"
          />

          {/* CTA */}
          <div className={`${t.cta} rounded-3xl p-8 text-center text-white mb-12`}>
            <h2 className="font-display text-3xl mb-3">Ready to Get Started?</h2>
            <p className={`mb-6 ${t.ctaSub}`}>
              Free printable charts &amp; schedules — no login, no account required.
            </p>
            <Link
              href={cta.href}
              className={`inline-block bg-white font-bold px-8 py-3.5 rounded-2xl transition-colors ${t.ctaText} ${t.ctaHover}`}
            >
              {cta.label}
            </Link>
          </div>

          {/* Bottom ad */}
          <AdUnit
            slot={process.env.NEXT_PUBLIC_AD_SLOT_CONTENT}
            format="horizontal"
            className="mb-12"
          />

          {/* Related articles */}
          {related.length > 0 && (
            <section className="mb-12">
              <h2 className="font-display text-2xl text-gray-800 mb-5">You Might Also Like</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {related.map(s => <RelatedCard key={s} slug={s} />)}
              </div>
            </section>
          )}

          {/* Back */}
          <div className="text-center pb-4">
            <Link href="/blog" className="text-indigo-600 hover:underline font-semibold text-sm">
              ← Back to all articles
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
