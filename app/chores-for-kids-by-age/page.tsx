import type { Metadata } from 'next'
import Link from 'next/link'
import { CHORES_BY_AGE, AGE_GROUPS } from '@/lib/chores'

export const metadata: Metadata = {
  title: 'Age-Appropriate Chores for Kids — Complete Guide by Age',
  description:
    'Wondering what chores your child can handle? Our guide covers age-appropriate tasks for kids aged 2–10, with expert tips on building responsibility at each stage.',
  keywords: ['chores for kids by age', 'age appropriate chores', 'kids chore list', 'toddler chores', 'chores for 5 year old'],
}

const ageDetails = {
  '2-3': {
    intro:
      'Toddlers love to copy grown-ups. Short, simple tasks with instant results work best. Focus on building the habit rather than perfect execution.',
    tips: [
      'Keep tasks to under 2 minutes.',
      'Do the chore together the first few times.',
      'Praise effort, not perfection.',
      'Use a consistent routine (e.g. toys away before bath time).',
    ],
    bgColor: 'bg-pink-50',
    borderColor: 'border-pink-200',
    emoji: '🐣',
  },
  '4-5': {
    intro:
      'Preschoolers are proud to help and can handle slightly more complex tasks. They still need reminders and guidance, but are capable of real contributions.',
    tips: [
      'Use a visual chart they can tick off.',
      'Break tasks into clear steps.',
      'Praise specifically: "Great job putting your plate in the sink!"',
      'Let them choose which chore to do first.',
    ],
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200',
    emoji: '🌱',
  },
  '6-7': {
    intro:
      'Early school-age children can take on more responsibility and benefit from structured routines. Chores help develop focus and pride in their environment.',
    tips: [
      'Introduce a simple chore chart.',
      'Link chores to a small privilege or reward.',
      'Let them own a specific area (e.g. setting the table is always their job).',
      'Check in but avoid redoing their work in front of them.',
    ],
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    emoji: '🌿',
  },
  '8-10': {
    intro:
      'School-age children can handle multi-step tasks and more responsibility. This is an ideal age to build lasting habits around household contribution.',
    tips: [
      'Give increasing independence — trust them to complete tasks unsupervised.',
      'Involve them in choosing their chore list.',
      'Tie a small allowance to consistent completion.',
      'Discuss why chores matter for the whole family.',
    ],
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    emoji: '🌳',
  },
}

const faqs = [
  {
    q: 'At what age should children start doing chores?',
    a: 'Children as young as 2 can begin simple tasks like picking up toys. Starting early helps establish habits and develops a sense of responsibility.',
  },
  {
    q: 'Should kids be paid for doing chores?',
    a: 'This is a personal decision. Many experts recommend separating basic household chores (expected contribution) from extra chores that earn an allowance.',
  },
  {
    q: 'What if my child refuses to do chores?',
    a: 'Start with tasks they can succeed at, make it a game or routine, and use positive reinforcement. A visual chore chart can make expectations clearer and more motivating.',
  },
  {
    q: 'How many chores should a child have per week?',
    a: 'For toddlers, 1–3 simple tasks. For school-age children, 3–7 regular chores is a good range — enough to contribute without feeling overwhelming.',
  },
]

export default function ChoresByAgePage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-gradient-to-br from-green-600 to-teal-500 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-5xl mb-4">
            Age-Appropriate Chores for Kids
          </h1>
          <p className="text-green-100 text-lg max-w-xl mx-auto leading-relaxed">
            A complete guide to what tasks children can handle at each stage, plus tips for making chores stick.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-12">

        {/* Age sections */}
        {AGE_GROUPS.map(ag => {
          const detail = ageDetails[ag.value]
          const chores = CHORES_BY_AGE[ag.value]
          return (
            <section key={ag.value} className={`rounded-3xl border-2 ${detail.borderColor} ${detail.bgColor} p-8`}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{detail.emoji}</span>
                <div>
                  <h2 className="font-display text-2xl text-gray-800">{ag.label}</h2>
                  <p className="text-gray-500 text-sm font-semibold">{ag.description}</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-5">{detail.intro}</p>

              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {chores.map(chore => (
                  <div key={chore.id} className="bg-white rounded-xl px-4 py-3 flex items-center gap-3 border border-white shadow-sm">
                    <span className="text-2xl">{chore.emoji}</span>
                    <span className="font-semibold text-gray-800 text-sm">{chore.label}</span>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="font-bold text-gray-800 mb-2 text-sm uppercase tracking-wide">Tips for this age</h3>
                <ul className="space-y-1.5">
                  {detail.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-green-500 font-bold mt-0.5">✓</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <Link
                  href="/chore-chart-generator"
                  className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors"
                >
                  Make a Chart for {ag.label} →
                </Link>
              </div>
            </section>
          )
        })}

        {/* FAQ */}
        <section>
          <h2 className="font-display text-3xl text-gray-800 mb-6">Common Questions</h2>
          <div className="space-y-4">
            {faqs.map(faq => (
              <div key={faq.q} className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-gray-800 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-indigo-600 rounded-3xl p-8 text-center text-white">
          <h2 className="font-display text-3xl mb-3">Ready to Build Your Chart?</h2>
          <p className="text-indigo-200 mb-6">
            Use our free generator to create a printable chore chart matched to your child&apos;s age.
          </p>
          <Link
            href="/chore-chart-generator"
            className="inline-block bg-white text-indigo-600 font-bold px-8 py-3.5 rounded-2xl hover:bg-indigo-50 transition-colors"
          >
            📋 Open the Chore Chart Generator
          </Link>
        </div>
      </div>
    </>
  )
}
