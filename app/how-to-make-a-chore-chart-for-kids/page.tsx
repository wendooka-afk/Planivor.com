import type { Metadata } from 'next'
import Link from 'next/link'
import AdUnit from '@/components/AdUnit'

export const metadata: Metadata = {
  title: 'How to Make a Chore Chart for Kids — Step-by-Step Guide',
  description:
    'Learn how to make a chore chart for kids that actually works. Step-by-step guide covering age-appropriate chores, rewards, and tips to keep kids motivated.',
  keywords: [
    'how to make a chore chart for kids',
    'how to create a chore chart',
    'chore chart tips',
    'chore chart that works',
    'kids chore chart ideas',
    'how to start a chore chart',
  ],
  openGraph: {
    title: 'How to Make a Chore Chart for Kids — Planivor',
    description: 'Step-by-step guide to creating a chore chart for kids that actually works — plus a free generator to build yours in seconds.',
    url: 'https://planivor.com/how-to-make-a-chore-chart-for-kids',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I make a chore chart that kids will actually use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The keys are: involve your child in choosing the chores, keep the list short (5–7 tasks max), use visuals instead of just text, attach a meaningful reward, and stay consistent for at least 3–4 weeks. Charts fail most often when parents choose all the chores without input, or give up after the first resistance.',
      },
    },
    {
      '@type': 'Question',
      name: 'What age should kids start doing chores?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Children can start simple chores as early as age 2–3. Toddlers can pick up toys, put clothes in a hamper, or throw trash in the bin. The tasks should match developmental ability — what matters at this age is building the habit, not perfect execution. By age 4–5, children can handle more structured chores like making their bed, setting the table, or watering plants.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I pay kids for doing chores?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This is a personal parenting decision, but many experts recommend separating allowance from chores. If chores are paid, children may refuse chores when they don\'t need money. Instead, consider using non-monetary rewards (movie night, extra screen time, choosing dinner) tied to the chart. This keeps chores in the category of family responsibility rather than paid labour.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many chores should a child have?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For ages 2–5: 2–3 simple tasks. For ages 6–8: 4–6 tasks. For ages 9–12: 6–8 tasks. The goal is building the habit, not maximizing the workload. Starting with too many chores is the fastest way to create resistance and burnout.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I keep kids motivated with a chore chart?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Change the chart every 4–6 weeks to keep it fresh. Let your child choose their own sticker or marker for tracking. Celebrate completions enthusiastically, not just the final reward. When a child masters a chore, replace it with a slightly harder one — this keeps the chart feeling like growth rather than routine.',
      },
    },
  ],
}

const steps = [
  {
    step: '1',
    title: 'Choose the right chores for your child\'s age',
    content: `The most common mistake parents make is assigning chores that are too advanced — or worse, too boring. Chores should be just slightly challenging: achievable with some effort, but not so easy they require no thought.

Use age as your guide: toddlers (2–3) can handle simple tidying tasks. Preschoolers (4–5) can make their beds and help set the table. Early school age (6–7) can load the dishwasher and fold clothes. Older kids (8–10) can take on real household responsibilities like vacuuming, laundry prep, and trash duty.`,
    link: { href: '/chores-for-kids-by-age', label: 'See full age-appropriate chore guide →' },
  },
  {
    step: '2',
    title: 'Involve your child in picking the chores',
    content: `Children are far more likely to do chores they helped choose. Sit down together and discuss which chores are needed in your home. Give your child a list of options and let them pick 3–5.

This doesn't mean they get unlimited veto power — some non-negotiable chores may be required. But giving ownership over at least part of the list dramatically increases buy-in.`,
  },
  {
    step: '3',
    title: 'Set a clear, achievable reward',
    content: `A chore chart without a meaningful reward is just a to-do list. The reward is what transforms the chart into a motivational system.

Keep rewards proportional and achievable. For young children, a week is already a long time — consider a mid-week mini-reward for completing every day so far. For the weekly goal, experiences work better than objects: a trip to the park, choosing the family movie, a special breakfast, or staying up 30 minutes later.`,
  },
  {
    step: '4',
    title: 'Design a chart that\'s clear and visual',
    content: `For children under 7, images matter more than text. A chart with emoji icons next to each chore is easier to follow than a text-only list. The grid should clearly show the days of the week, and the tracking mechanism (checkbox or star) should be obvious.

Post the chart at eye level — on the bedroom door, the bathroom mirror, or the fridge. Visibility drives compliance.`,
  },
  {
    step: '5',
    title: 'Walk through the routine together for the first week',
    content: `Don't hand your child the chart and expect them to self-direct immediately. Spend the first 5–7 days doing the routine side by side, pointing to the chart together and completing each step as a team.

By week two, step back to supervision. By week three, most children can manage independently — which is the whole point.`,
  },
  {
    step: '6',
    title: 'Stay consistent and refresh regularly',
    content: `Consistency is the ingredient that separates charts that work from charts that end up on the fridge untouched after two weeks. If you miss a day, don't abandon the chart — just resume the next day.

After 4–6 weeks, refresh the chart. Swap out mastered chores for new ones. Update the reward. A slightly new chart feels new and re-engages children who were starting to lose interest.`,
  },
]

export default function HowToMakeChoreChartPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-600 via-indigo-500 to-purple-600 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-indigo-200 font-bold text-sm uppercase tracking-widest mb-3">Parent Guide</p>
          <h1 className="font-display text-4xl md:text-5xl font-normal leading-tight mb-4">
            How to Make a Chore Chart for Kids
          </h1>
          <p className="text-indigo-100 text-lg leading-relaxed max-w-xl mx-auto">
            A step-by-step guide to creating a chore chart that your kids will actually use —
            plus a free generator to build yours in under 60 seconds.
          </p>
          <div className="mt-6">
            <Link
              href="/chore-chart-generator"
              className="inline-block bg-white text-indigo-600 font-bold px-8 py-4 rounded-2xl text-lg hover:bg-indigo-50 transition-colors shadow-lg"
            >
              📋 Create My Chore Chart →
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 space-y-14">

        {/* Intro */}
        <section>
          <p className="text-gray-600 text-sm leading-relaxed">
            A chore chart sounds simple — list some tasks, add some checkboxes, done. But the charts
            that actually work require a little more thought. This guide covers everything you need to
            know: how to pick the right chores, how to structure the reward, and how to keep your child
            engaged past the first week.
          </p>
        </section>

        {/* Steps */}
        <section>
          <h2 className="font-display text-3xl text-gray-800 mb-8">6 Steps to a Chore Chart That Works</h2>
          <div className="space-y-8">
            {steps.map(s => (
              <div key={s.step} className="flex gap-5">
                <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center flex-shrink-0 text-sm mt-1">
                  {s.step}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 mb-3">{s.title}</h3>
                  <div className="text-gray-600 text-sm leading-relaxed space-y-3">
                    {s.content.split('\n\n').map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                  {s.link && (
                    <Link href={s.link.href} className="inline-block mt-3 text-indigo-600 text-sm font-semibold hover:underline">
                      {s.link.label}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <AdUnit slot={process.env.NEXT_PUBLIC_AD_SLOT_CONTENT} format="horizontal" />

        {/* Quick reference */}
        <section>
          <h2 className="font-display text-3xl text-gray-800 mb-6">Quick Reference: Chores by Age</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { age: 'Ages 2–3', emoji: '🐣', chores: ['Pick up toys', 'Put clothes in hamper', 'Wipe small spills', 'Throw trash in bin'] },
              { age: 'Ages 4–5', emoji: '🌱', chores: ['Make bed (roughly)', 'Brush teeth', 'Set the table', 'Water a plant'] },
              { age: 'Ages 6–7', emoji: '⭐', chores: ['Load dishwasher', 'Fold clothes', 'Sweep floor', 'Pack school bag'] },
              { age: 'Ages 8–10', emoji: '🚀', chores: ['Take out trash', 'Vacuum room', 'Help with laundry', 'Wash dishes'] },
            ].map(group => (
              <div key={group.age} className="bg-indigo-50 rounded-2xl border border-indigo-100 p-5">
                <p className="font-bold text-indigo-800 text-sm mb-3">{group.emoji} {group.age}</p>
                <ul className="space-y-1.5">
                  {group.chores.map(c => (
                    <li key={c} className="text-xs text-gray-600 flex items-start gap-2">
                      <span className="text-indigo-400 mt-0.5">✓</span> {c}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Link href="/chores-for-kids-by-age" className="inline-block mt-4 text-indigo-600 text-sm font-semibold hover:underline">
            See the complete age-appropriate chores guide →
          </Link>
        </section>

        {/* Common mistakes */}
        <section>
          <h2 className="font-display text-3xl text-gray-800 mb-6">5 Common Chore Chart Mistakes</h2>
          <div className="space-y-4">
            {[
              { mistake: 'Too many chores at once', fix: 'Start with 3–5. Add more once the habit is established.' },
              { mistake: 'Choosing chores without input', fix: 'Let your child pick at least 2 chores from a list of options.' },
              { mistake: 'Vague tasks ("clean room")', fix: 'Be specific: "put dirty clothes in hamper" and "make bed" are clearer and easier to verify.' },
              { mistake: 'Skipping the reward', fix: 'The reward is the engine. Agree on it before the chart starts and honour it every time.' },
              { mistake: 'Giving up after the first refusal', fix: 'Expect resistance in week one. Stay consistent and warm — it passes.' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 p-5">
                <div className="flex items-start gap-3">
                  <span className="text-red-400 font-bold text-sm flex-shrink-0 mt-0.5">✗</span>
                  <div className="flex-1">
                    <p className="font-bold text-gray-800 text-sm">{item.mistake}</p>
                    <p className="text-xs text-gray-600 mt-1"><span className="text-green-600 font-semibold">Fix:</span> {item.fix}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-indigo-600 rounded-3xl p-8 text-center text-white">
          <h2 className="font-display text-3xl mb-3">Build Your Chart Now — Free</h2>
          <p className="text-indigo-200 mb-6 text-sm">
            Enter your child&apos;s name, pick their age group, choose from age-matched chore suggestions,
            and download a print-ready PDF in under 60 seconds.
          </p>
          <Link
            href="/chore-chart-generator"
            className="inline-block bg-white text-indigo-600 font-bold px-8 py-3.5 rounded-2xl hover:bg-indigo-50 transition-colors"
          >
            📋 Open the Chore Chart Generator
          </Link>
        </div>

        <AdUnit slot={process.env.NEXT_PUBLIC_AD_SLOT_CONTENT} format="horizontal" />

        {/* FAQ */}
        <section>
          <h2 className="font-display text-3xl text-gray-800 text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map(faq => (
              <div key={faq.name} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-gray-800 mb-2 text-sm">{faq.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal links */}
        <section>
          <h3 className="font-bold text-gray-700 mb-4 text-sm uppercase tracking-wide">More from Planivor</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { href: '/chore-chart-generator', emoji: '📋', label: 'Chore Chart Generator' },
              { href: '/chores-for-kids-by-age', emoji: '📚', label: 'Chores by Age Guide' },
              { href: '/reward-chart-generator', emoji: '🌟', label: 'Reward Chart Generator' },
              { href: '/morning-routine-chart', emoji: '☀️', label: 'Morning Routine Chart' },
              { href: '/weekly-chore-chart-template', emoji: '📅', label: 'Weekly Chore Chart Template' },
              { href: '/free-printable-chore-chart-for-kids', emoji: '🖨️', label: 'Free Printable Chore Charts' },
            ].map(l => (
              <Link key={l.href} href={l.href} className="flex items-center gap-3 bg-white rounded-xl border border-gray-100 p-4 hover:border-indigo-300 hover:bg-indigo-50 transition-all text-sm font-semibold text-gray-700">
                <span className="text-xl">{l.emoji}</span> {l.label}
              </Link>
            ))}
          </div>
        </section>

      </div>
    </>
  )
}
