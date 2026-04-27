import type { Metadata } from 'next'
import RoutineChartGenerator from '@/components/RoutineChartGenerator'
import AdUnit from '@/components/AdUnit'

export const metadata: Metadata = {
  title: 'Free Morning Routine Chart for Kids — Printable PDF',
  description:
    'Create a personalized morning routine chart for your child. Age-appropriate steps, fun themes, and instant PDF download. Free, no login required.',
  keywords: ['morning routine chart', 'morning routine for kids', 'printable morning routine', 'kids morning checklist'],
  openGraph: {
    title: 'Free Morning Routine Chart for Kids — Planivor',
    description: 'Create a personalized morning routine chart — age-matched steps, fun themes, instant PDF. Free at Planivor.',
    url: 'https://planivor.com/morning-routine-chart',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What should be on a morning routine chart for kids?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A morning routine chart typically includes: waking up, using the bathroom, brushing teeth, getting dressed, eating breakfast, and packing the school bag. The exact steps vary by age — toddlers need simpler steps, while older kids can handle more independence.',
      },
    },
    {
      '@type': 'Question',
      name: 'What age is a morning routine chart good for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morning routine charts work well for kids ages 2 through 10. Planivor offers age-specific step suggestions for toddlers (2–3), preschoolers (4–5), early school age (6–7), and school age (8–10).',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I use the morning routine chart?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Enter your child\'s name, pick their age group, choose the routine steps, select a theme, and download the PDF or print directly. Post the chart somewhere visible — bathroom mirror, bedroom door — so kids can check each step themselves.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the morning routine chart free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The Planivor morning routine chart generator is completely free. No login, no account, no watermarks.',
      },
    },
  ],
}

export default function MorningRoutineChartPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-emerald-100 font-bold text-sm uppercase tracking-widest mb-3">Free Printable Tool</p>
          <h1 className="font-display text-4xl md:text-5xl font-normal leading-tight mb-4">
            ☀️ Morning Routine Chart for Kids
          </h1>
          <p className="text-emerald-100 text-lg leading-relaxed max-w-xl mx-auto">
            Build independent morning habits with a personalized, printable routine chart.
            Pick age-appropriate steps, choose a theme, and download your PDF in seconds.
          </p>
          <p className="mt-4 text-emerald-200 text-sm">No login · No account · Instant PDF</p>
        </div>
      </section>

      {/* Generator */}
      <RoutineChartGenerator routineType="morning" />

      {/* Ad between generator and SEO content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <AdUnit slot={process.env.NEXT_PUBLIC_AD_SLOT_CONTENT} format="horizontal" className="my-6" />
      </div>

      {/* SEO section */}
      <section className="bg-gray-50 border-t border-gray-100 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-3xl text-gray-800 mb-6">Why Morning Routines Help Kids Thrive</h2>
          <div className="prose prose-gray max-w-none text-sm text-gray-600 space-y-4">
            <p>
              A consistent morning routine gives children a sense of predictability and control that reduces
              anxiety and improves behaviour throughout the day. When kids know exactly what comes next,
              they spend less mental energy on uncertainty — and parents spend less time repeating themselves.
            </p>
            <p>
              Visual charts are especially powerful for early learners who can&apos;t yet read fluently.
              The emoji icons and step-by-step layout let young children follow the routine independently,
              which builds confidence and self-regulation skills over time.
            </p>
            <h3 className="font-bold text-gray-800 text-base mt-6 mb-2">Tips for a Successful Morning Routine</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Post the chart at eye level — on the bathroom mirror or bedroom door</li>
              <li>Walk through it together for the first week; then let them lead</li>
              <li>Start with 5–6 steps and add more as the routine becomes habit</li>
              <li>Celebrate small wins — a high-five for each completed step goes a long way</li>
              <li>Refresh the chart every month or two to keep it feeling new</li>
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
