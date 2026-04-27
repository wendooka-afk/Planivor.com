import type { Metadata } from 'next'
import Link from 'next/link'
import AdUnit from '@/components/AdUnit'

export const metadata: Metadata = {
  title: 'Free Printable Behavior Chart for Kids — PDF Download',
  description:
    'Create a free printable behavior chart for your child. Track positive behaviours, set goals, and celebrate achievements. Personalize online and download instantly.',
  keywords: [
    'printable behavior chart for kids',
    'behaviour chart for kids',
    'printable behaviour chart',
    'kids behavior chart pdf',
    'classroom behavior chart',
    'behavior chart for toddlers',
  ],
  openGraph: {
    title: 'Free Printable Behavior Chart for Kids — Planivor',
    description: 'Printable behavior charts for kids — personalize, preview, and download a PDF instantly. Free at Planivor.',
    url: 'https://planivor.com/printable-behavior-chart-for-kids',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a behavior chart for kids?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A behavior chart is a visual tracking system that records when a child demonstrates a specific positive behaviour. Each success earns a mark, star, or sticker. When a goal is reached, the child receives a reward. Charts make expectations clear and progress visible, which is especially powerful for young children who think concretely.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do behavior charts actually work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, when used correctly. Behavioral research supports positive reinforcement as one of the most effective tools for shaping children\'s behaviour. The key is focusing on specific, achievable behaviours, rewarding immediately, and keeping the chart fresh. Charts that track too many behaviours, or that are used punitively, tend to lose effectiveness quickly.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a behavior chart and a chore chart?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A chore chart tracks tasks and responsibilities (making the bed, feeding the pet, setting the table). A behavior chart tracks attitudes and social behaviours (being kind, using calm voices, following instructions the first time). Both use similar visual formats, but they target different goals. Many families use both simultaneously.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use a behavior chart in the classroom?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Planivor\'s charts work well in classroom settings. Teachers can create individual charts for students who need behavioral support, or a shared class chart for group goals. All charts are free for personal and classroom use.',
      },
    },
    {
      '@type': 'Question',
      name: 'At what age should I stop using a behavior chart?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most children naturally outgrow the need for explicit charts by ages 9–10, as behaviors become internalized habits. That said, some children benefit from visual tracking systems into their teens — especially for new habits or routines. Follow your child\'s lead.',
      },
    },
  ],
}

const behaviourTypes = [
  {
    category: 'Social & Emotional',
    emoji: '🤝',
    examples: ['Using kind words', 'Taking turns', 'Managing frustration calmly', 'Saying sorry when needed'],
  },
  {
    category: 'Morning & Evening Routines',
    emoji: '🌅',
    examples: ['Getting dressed independently', 'Brushing teeth without reminders', 'Being ready on time', 'Going to bed without fuss'],
  },
  {
    category: 'Homework & Learning',
    emoji: '📚',
    examples: ['Sitting down for homework', 'Completing reading', 'Asking for help politely', 'Packing the school bag'],
  },
  {
    category: 'Responsibility at Home',
    emoji: '🏠',
    examples: ['Tidying without being asked', 'Helping set the table', 'Taking care of belongings', 'Being gentle with pets'],
  },
]

export default function BehaviorChartPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-violet-600 via-purple-500 to-indigo-600 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-violet-200 font-bold text-sm uppercase tracking-widest mb-3">Free Printable</p>
          <h1 className="font-display text-4xl md:text-5xl font-normal leading-tight mb-4">
            Printable Behavior Chart for Kids
          </h1>
          <p className="text-violet-100 text-lg leading-relaxed max-w-xl mx-auto">
            Track positive behaviours with a personalized, printable chart. Choose age-appropriate
            goals, add a reward, and download a beautiful PDF — free, no login needed.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/reward-chart-generator"
              className="inline-block bg-white text-violet-600 font-bold px-8 py-4 rounded-2xl text-lg hover:bg-violet-50 transition-colors shadow-lg"
            >
              🌟 Create Behavior Chart →
            </Link>
            <Link
              href="/chore-chart-generator"
              className="inline-block bg-violet-500 border-2 border-violet-300 text-white font-bold px-8 py-4 rounded-2xl text-lg hover:bg-violet-400 transition-colors"
            >
              📋 Chore Chart →
            </Link>
          </div>
          <p className="mt-4 text-violet-300 text-sm">No login · No account · Instant PDF</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 space-y-14">

        {/* Intro */}
        <section>
          <h2 className="font-display text-3xl text-gray-800 mb-4">What Makes a Good Behavior Chart?</h2>
          <div className="text-gray-600 text-sm leading-relaxed space-y-4">
            <p>
              The most effective behavior charts share a few key traits: they target <strong>specific, observable behaviours</strong> (not vague concepts like &ldquo;be good&rdquo;), they provide <strong>immediate positive reinforcement</strong>, and they set <strong>achievable short-term goals</strong> that give children early wins.
            </p>
            <p>
              Visual charts work particularly well for children under 8 because they think concretely — seeing a star appear on the chart creates an immediate, tangible connection between behaviour and reward that words alone can&apos;t replicate.
            </p>
            <p>
              Planivor&apos;s behavior charts are built around these principles. Each chart is personalized with your child&apos;s name, uses age-matched behaviour suggestions, and generates a full-page printable PDF that you can post anywhere in your home.
            </p>
          </div>
        </section>

        <AdUnit slot={process.env.NEXT_PUBLIC_AD_SLOT_CONTENT} format="horizontal" />

        {/* Behaviour categories */}
        <section>
          <h2 className="font-display text-3xl text-gray-800 mb-2">What Behaviours Can You Track?</h2>
          <p className="text-gray-500 text-sm mb-8">
            The best behavior charts focus on one category at a time. Here are the most common areas parents and teachers target.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {behaviourTypes.map(type => (
              <div key={type.category} className="bg-gray-50 rounded-2xl border border-gray-100 p-5">
                <p className="font-bold text-gray-800 text-sm mb-3">{type.emoji} {type.category}</p>
                <ul className="space-y-1.5">
                  {type.examples.map(ex => (
                    <li key={ex} className="text-xs text-gray-600 flex items-start gap-2">
                      <span className="text-violet-400 mt-0.5">✓</span> {ex}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Behavior vs chore */}
        <section>
          <h2 className="font-display text-3xl text-gray-800 mb-4">Behavior Chart vs Chore Chart — Which Do You Need?</h2>
          <div className="overflow-hidden rounded-2xl border border-gray-100">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left p-4 font-bold text-gray-700">Behavior Chart</th>
                  <th className="text-left p-4 font-bold text-gray-700">Chore Chart</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Tracks attitudes & social skills', 'Tracks tasks & responsibilities'],
                  ['e.g. "Use kind words"', 'e.g. "Make the bed"'],
                  ['Works from ages 3+', 'Works from ages 4+'],
                  ['Great for emotional regulation', 'Great for building independence'],
                  ['Often used for 1 specific challenge', 'Used for daily household routine'],
                ].map(([col1, col2], i) => (
                  <tr key={i} className={`border-b border-gray-50 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                    <td className="p-4 text-gray-600">{col1}</td>
                    <td className="p-4 text-gray-600">{col2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">Many families use both — the Planivor generators support both formats.</p>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-br from-violet-600 to-indigo-600 rounded-3xl p-8 text-center text-white">
          <h2 className="font-display text-3xl mb-3">Create Your Free Behavior Chart</h2>
          <p className="text-violet-100 mb-6 text-sm max-w-md mx-auto">
            Use the Planivor reward chart generator to track positive behaviours.
            Personalize it, preview it live, and download a full-page PDF instantly.
          </p>
          <Link
            href="/reward-chart-generator"
            className="inline-block bg-white text-violet-600 font-bold px-8 py-3.5 rounded-2xl hover:bg-violet-50 transition-colors"
          >
            🌟 Open the Behavior Chart Generator
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
          <h3 className="font-bold text-gray-700 mb-4 text-sm uppercase tracking-wide">Related Tools & Guides</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { href: '/reward-chart-generator', emoji: '🌟', label: 'Reward Chart Generator' },
              { href: '/chore-chart-generator', emoji: '📋', label: 'Chore Chart Generator' },
              { href: '/chores-for-kids-by-age', emoji: '📚', label: 'Chores by Age Guide' },
              { href: '/reward-chart-for-kids-printable', emoji: '⭐', label: 'Printable Reward Charts' },
            ].map(l => (
              <Link key={l.href} href={l.href} className="flex items-center gap-3 bg-white rounded-xl border border-gray-100 p-4 hover:border-violet-300 hover:bg-violet-50 transition-all text-sm font-semibold text-gray-700">
                <span className="text-xl">{l.emoji}</span> {l.label}
              </Link>
            ))}
          </div>
        </section>

      </div>
    </>
  )
}
