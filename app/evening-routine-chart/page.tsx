import type { Metadata } from 'next'
import RoutineChartGenerator from '@/components/RoutineChartGenerator'
import AdUnit from '@/components/AdUnit'

export const metadata: Metadata = {
  title: 'Free Evening Routine Chart for Kids — Printable PDF',
  description:
    'Create a personalized bedtime and evening routine chart for your child. Age-appropriate steps, calming themes, and instant PDF download. Free, no login required.',
  keywords: ['evening routine chart', 'bedtime routine chart', 'bedtime routine for kids', 'printable bedtime routine'],
  openGraph: {
    title: 'Free Evening Routine Chart for Kids — Planivor',
    description: 'Create a personalized evening routine chart — age-matched steps, calming themes, instant PDF. Free at Planivor.',
    url: 'https://planivor.com/evening-routine-chart',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What should be on an evening routine chart for kids?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An evening routine chart typically includes: tidying up, bath or shower, brushing teeth, putting on pajamas, and a wind-down activity like reading. Older kids might also include finishing homework, packing the school bag, and picking out tomorrow\'s clothes.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does a bedtime routine chart help with sleep?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A consistent bedtime routine signals to the brain that sleep is coming, which helps children fall asleep faster. Visual charts reduce bedtime battles by giving kids agency — they can follow the steps without constant parental prompting.',
      },
    },
    {
      '@type': 'Question',
      name: 'What age is an evening routine chart good for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Evening routine charts work well from age 2 through 10+. Planivor offers age-specific steps for toddlers (2–3), preschoolers (4–5), early school age (6–7), and school age (8–10).',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the evening routine chart free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The Planivor evening routine chart generator is completely free. No login, no account, no watermarks on your download.',
      },
    },
  ],
}

export default function EveningRoutineChartPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-violet-200 font-bold text-sm uppercase tracking-widest mb-3">Free Printable Tool</p>
          <h1 className="font-display text-4xl md:text-5xl font-normal leading-tight mb-4">
            🌙 Evening Routine Chart for Kids
          </h1>
          <p className="text-violet-100 text-lg leading-relaxed max-w-xl mx-auto">
            Make bedtime easier with a calming, visual evening routine. Pick age-appropriate steps,
            choose a theme, and print your chart in seconds — free, no login needed.
          </p>
          <p className="mt-4 text-violet-300 text-sm">No login · No account · Instant PDF</p>
        </div>
      </section>

      {/* Generator */}
      <RoutineChartGenerator routineType="evening" />

      {/* Ad between generator and SEO content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <AdUnit slot={process.env.NEXT_PUBLIC_AD_SLOT_CONTENT} format="horizontal" className="my-6" />
      </div>

      {/* SEO section */}
      <section className="bg-gray-50 border-t border-gray-100 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-3xl text-gray-800 mb-6">Why a Bedtime Routine Chart Works</h2>
          <div className="prose prose-gray max-w-none text-sm text-gray-600 space-y-4">
            <p>
              Sleep researchers consistently find that a predictable bedtime routine is one of the most
              effective tools for improving children&apos;s sleep quality and duration. The routine acts
              as a signal — body and brain learn to associate the steps with the approach of sleep.
            </p>
            <p>
              A visual chart helps even more because it shifts responsibility to the child. Instead of
              a parent saying &quot;time to brush teeth&quot; for the fifth time, the child checks the chart
              and does it themselves. This reduces conflict and builds independence simultaneously.
            </p>
            <h3 className="font-bold text-gray-800 text-base mt-6 mb-2">Tips for a Calm Evening Routine</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Start the routine at the same time every night — consistency is the key ingredient</li>
              <li>Dim lights and reduce screen time 30 minutes before the routine begins</li>
              <li>Keep the chart to 5–7 steps — fewer steps means less friction</li>
              <li>Let your child check off each step themselves to build ownership</li>
              <li>End with something calming: a short story, quiet reading, or soft music</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white border-t border-gray-100 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-3xl text-gray-800 text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-5">
            {faqSchema.mainEntity.map((faq) => (
              <div key={faq.name} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-gray-800 mb-2 text-sm">{faq.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
