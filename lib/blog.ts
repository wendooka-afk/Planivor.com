export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string        // ISO YYYY-MM-DD
  readingTime: string // e.g. "5 min read"
  category: string
  emoji: string
  tags: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-to-get-kids-to-do-chores',
    title: 'How to Get Kids to Do Chores (Without the Battles)',
    description:
      'Proven strategies to make chore time less painful — from gamification and visual charts to age-appropriate expectations and positive reinforcement.',
    date: '2026-04-20',
    readingTime: '6 min read',
    category: 'Chore Charts',
    emoji: '🧹',
    tags: ['chores', 'parenting tips', 'kids'],
  },
  {
    slug: 'do-reward-charts-work',
    title: 'Do Reward Charts Actually Work? What the Research Says',
    description:
      'A balanced look at the science behind reward charts — when they help, when they backfire, and how to use them effectively with your kids.',
    date: '2026-04-22',
    readingTime: '7 min read',
    category: 'Reward Charts',
    emoji: '⭐',
    tags: ['reward charts', 'behaviour', 'research'],
  },
  {
    slug: 'morning-routine-tips-for-kids',
    title: 'Morning Routine Tips for Kids: A Stress-Free Guide for Parents',
    description:
      'Transform chaotic mornings into calm, predictable routines. Practical tips, visual schedule ideas, and a free printable morning chart.',
    date: '2026-04-24',
    readingTime: '5 min read',
    category: 'Routines',
    emoji: '☀️',
    tags: ['morning routine', 'routines', 'school'],
  },
  {
    slug: 'building-good-habits-in-children',
    title: 'Building Good Habits in Children: The Science-Backed Approach',
    description:
      'How habits form in children, what parents can do to encourage positive behaviours, and why consistency beats perfection every time.',
    date: '2026-04-27',
    readingTime: '8 min read',
    category: 'Habits',
    emoji: '🌱',
    tags: ['habits', 'child development', 'routines'],
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug)
}

/** Format ISO date → "April 27, 2026" */
export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
