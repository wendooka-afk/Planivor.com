import { MetadataRoute } from 'next'

const BASE_URL = 'https://planivor.com'

// Static dates — avoid dynamic new Date() which forces the route to be
// fully server-rendered on every request and can confuse crawlers.
const TODAY = '2026-04-27'
const BLOG_DATE = '2026-04-27'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ── Core pages ──────────────────────────────────────────────────
    {
      url: BASE_URL,
      lastModified: TODAY,
      changeFrequency: 'weekly',
      priority: 1,
    },

    // ── Generator tools ─────────────────────────────────────────────
    {
      url: `${BASE_URL}/chore-chart-generator`,
      lastModified: TODAY,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/reward-chart-generator`,
      lastModified: TODAY,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/morning-routine-chart`,
      lastModified: TODAY,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/evening-routine-chart`,
      lastModified: TODAY,
      changeFrequency: 'weekly',
      priority: 0.9,
    },

    // ── SEO landing pages ────────────────────────────────────────────
    {
      url: `${BASE_URL}/chores-for-kids-by-age`,
      lastModified: TODAY,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/free-printable-chore-chart-for-kids`,
      lastModified: TODAY,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/weekly-chore-chart-template`,
      lastModified: TODAY,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/reward-chart-for-kids-printable`,
      lastModified: TODAY,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/printable-behavior-chart-for-kids`,
      lastModified: TODAY,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/how-to-make-a-chore-chart-for-kids`,
      lastModified: TODAY,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // ── Blog ─────────────────────────────────────────────────────────
    {
      url: `${BASE_URL}/blog`,
      lastModified: BLOG_DATE,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog/how-to-get-kids-to-do-chores`,
      lastModified: BLOG_DATE,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/blog/do-reward-charts-work`,
      lastModified: BLOG_DATE,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/blog/morning-routine-tips-for-kids`,
      lastModified: BLOG_DATE,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/blog/building-good-habits-in-children`,
      lastModified: BLOG_DATE,
      changeFrequency: 'monthly',
      priority: 0.6,
    },

    // ── Static ───────────────────────────────────────────────────────
    {
      url: `${BASE_URL}/about`,
      lastModified: TODAY,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: TODAY,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
  ]
}
