import type { Metadata } from 'next'
import Link from 'next/link'
import AdUnit from '@/components/AdUnit'

export const metadata: Metadata = {
  title: 'Free Printable Reward Chart for Kids — Download PDF',
  description:
    'Download a free printable reward chart for kids. Star-based charts that motivate positive behaviour — personalize online and print instantly. No login required.',
  keywords: [
    'reward chart for kids printable',
    'printable reward chart',
    'star chart for kids',
    'behaviour reward chart',
    'free reward chart printable',
    'star reward chart pdf',
  ],
  openGraph: {
    title: 'Free Printable Reward Chart for Kids — Planivor',
    description: 'Personalize a star reward chart for your child and download a print-ready PDF instantly. Free at Planivor.',
    url: 'https://planivor.com/reward-chart-for-kids-printable',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a printable reward chart for kids?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A printable reward chart is a visual tool where children earn stars or stickers for positive behaviours. Each completed behaviour earns a mark on the chart, and when a goal is reached, the child earns a pre-agreed reward. It works because it makes progress visible and tangible for young children.',
      },
    },
    {
      '@type': 'Question',
      name: 'What age is a reward chart best for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Reward charts work best for children aged 3 to 8. Younger toddlers may not yet connect the chart to the reward, while older children often respond better to more nuanced systems. The sweet spot is ages 4–7, when kids are old enough to understand the concept and motivated by the visual progress.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you use a reward chart effectively?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Choose 2–4 specific behaviours to track (not too many). Award a star immediately after the behaviour — timing matters. Set a reachable goal for the first week so your child experiences success early. Celebrate the reward enthusiastically when the goal is met. Refresh the chart every 1–2 weeks to keep it motivating.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should the reward be?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best rewards are experiences, not objects — things like choosing the family movie, a trip to the park, staying up 30 minutes later, or picking dinner. Experience rewards tend to be more meaningful than toys and don\'t create a cycle of material expectations.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the reward chart generator free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Planivor\'s reward chart generator is completely free. No login, no account, no watermarks on the PDF download.',
      },
    },
  ],
}

const whyItems = [
  {
    emoji: '👁️',
    title: 'Makes progress visible',
    desc: 'Young children think concretely. Seeing stars accumulate on a chart is far more motivating than verbal praise alone.',
  },
  {
    emoji: '🎯',
    title: 'Focuses on specific behaviours',
    desc: 'Instead of vague requests to "be good", reward charts name exact behaviours — getting dressed on time, saying please, completing homework.',
  },
  {
    emoji: '⏱️',
    title: 'Builds habits in 3–4 weeks',
    desc: 'Research suggests it takes about 21 days to establish a routine. A reward chart bridges the gap between instruction and habit.',
  },
  {
    emoji: '🤝',
    title: 'Shifts from conflict to cooperation',
    desc: 'When the chart is the authority, parents stop nagging and children stop resisting. The chart becomes a neutral third party.',
  },
]

const tips = [
  { step: '1', title: 'Pick 2–4 behaviours only', desc: 'Too many targets dilutes focus. Start with the 2–3 behaviours that matter most right now.' },
  { step: '2', title: 'Set a reachable first goal', desc: 'Make week one easy to win. Early success builds confidence and buy-in.' },
  { step: '3', title: 'Award stars immediately', desc: 'The closer the reward to the behaviour, the stronger the connection in your child\'s brain.' },
  { step: '4', title: 'Let your child stick the star', desc: 'Physical involvement strengthens ownership. Even just marking the chart themselves matters.' },
  { step: '5', title: 'Celebrate loudly', desc: 'When the goal is reached, make it a moment. Enthusiasm from parents reinforces the value of the reward.' },
  { step: '6', title: 'Refresh monthly', desc: 'Once a behaviour becomes automatic, swap it out for a new one. Charts lose power if they never change.' },
]

export default function RewardChartPrintablePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-400 via-orange-400 to-amber-500 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-100 font-bold text-sm uppercase tracking-widest mb-3">Free Printable</p>
          <h1 className="font-display text-4xl md:text-5xl font-normal leading-tight mb-4">
            🌟 Printable Reward Chart for Kids
          </h1>
          <p className="text-amber-100 text-lg leading-relaxed max-w-xl mx-auto">
            Motivate positive behaviour with a personalized star reward chart. Customize it online,
            preview it live, and download a full-page PDF in seconds. Completely free.
          </p>
          <div className="mt-6">
            <Link
              href="/reward-chart-generator"
              className="inline-block bg-white text-amber-600 font-bold px-8 py-4 rounded-2xl text-lg hover:bg-amber-50 transition-colors shadow-lg"
            >
              🌟 Create My Reward Chart →
            </Link>
          </div>
          <p className="mt-4 text-amber-200 text-sm">No login · No account · Instant PDF</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 space-y-14">

        {/* Why reward charts work */}
        <section>
          <h2 className="font-display text-3xl text-gray-800 mb-2">Why Reward Charts Work</h2>
          <p className="text-gray-500 text-sm mb-8">
            Reward charts aren&apos;t just sticker boards — they&apos;re rooted in behavioural psychology.
            Here&apos;s why they&apos;re one of the most effective parenting tools for young children.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {whyItems.map(item => (
              <div key={item.title} className="bg-amber-50 rounded-2xl border border-amber-100 p-5">
                <div className="text-3xl mb-3">{item.emoji}</div>
                <h3 className="font-bold text-gray-800 mb-1 text-sm">{item.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <AdUnit slot={process.env.NEXT_PUBLIC_AD_SLOT_CONTENT} format="horizontal" />

        {/* How to use */}
        <section>
          <h2 className="font-display text-3xl text-gray-800 mb-2">How to Use a Reward Chart</h2>
          <p className="text-gray-500 text-sm mb-8">
            A reward chart only works if it&apos;s used consistently. Follow these steps for the best results.
          </p>
          <div className="space-y-4">
            {tips.map(tip => (
              <div key={tip.step} className="flex gap-4 bg-white rounded-2xl border border-gray-100 p-5">
                <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 font-bold flex items-center justify-center flex-shrink-0 text-sm">
                  {tip.step}
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-sm mb-1">{tip.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Behaviour ideas */}
        <section>
          <h2 className="font-display text-3xl text-gray-800 mb-6">Behaviour Ideas by Age</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                age: 'Ages 3–4', emoji: '🐣',
                items: ['Saying please and thank you', 'Getting dressed independently', 'Putting toys away', 'Using an inside voice'],
              },
              {
                age: 'Ages 5–6', emoji: '🌱',
                items: ['Making the bed', 'Eating dinner without fuss', 'Being kind to siblings', 'Completing homework'],
              },
              {
                age: 'Ages 7–8', emoji: '⭐',
                items: ['Doing homework without reminders', 'Keeping room tidy', 'Reading for 20 minutes', 'Going to bed on time'],
              },
              {
                age: 'Ages 9–10', emoji: '🚀',
                items: ['Managing own schedule', 'Completing chores unsupervised', 'Being responsible with screens', 'Helping younger siblings'],
              },
            ].map(group => (
              <div key={group.age} className="bg-gray-50 rounded-2xl border border-gray-100 p-5">
                <p className="font-bold text-gray-800 text-sm mb-3">{group.emoji} {group.age}</p>
                <ul className="space-y-1.5">
                  {group.items.map(item => (
                    <li key={item} className="text-xs text-gray-600 flex items-start gap-2">
                      <span className="text-amber-400 mt-0.5">★</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-amber-500 rounded-3xl p-8 text-center text-white">
          <h2 className="font-display text-3xl mb-3">Create Your Free Reward Chart</h2>
          <p className="text-amber-100 mb-6 text-sm">
            Personalize a star chart with your child&apos;s name, age-matched behaviours, a fun theme,
            and a reward goal. Download a full-page PDF instantly.
          </p>
          <Link
            href="/reward-chart-generator"
            className="inline-block bg-white text-amber-600 font-bold px-8 py-3.5 rounded-2xl hover:bg-amber-50 transition-colors"
          >
            🌟 Open the Reward Chart Generator
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
          <h3 className="font-bold text-gray-700 mb-4 text-sm uppercase tracking-wide">Related Tools</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { href: '/chore-chart-generator', emoji: '📋', label: 'Chore Chart Generator' },
              { href: '/morning-routine-chart', emoji: '☀️', label: 'Morning Routine Chart' },
              { href: '/evening-routine-chart', emoji: '🌙', label: 'Evening Routine Chart' },
              { href: '/chores-for-kids-by-age', emoji: '📚', label: 'Chores by Age Guide' },
            ].map(l => (
              <Link key={l.href} href={l.href} className="flex items-center gap-3 bg-white rounded-xl border border-gray-100 p-4 hover:border-amber-300 hover:bg-amber-50 transition-all text-sm font-semibold text-gray-700">
                <span className="text-xl">{l.emoji}</span> {l.label}
              </Link>
            ))}
          </div>
        </section>

      </div>
    </>
  )
}
