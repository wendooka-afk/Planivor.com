import type { Metadata } from 'next'
import RewardChartGenerator from '@/components/RewardChartGenerator'
import AdUnit from '@/components/AdUnit'

export const metadata: Metadata = {
  title: 'Free Printable Star Reward Chart Generator for Kids',
  description:
    'Create a free printable star reward chart for your child in seconds. Choose age-appropriate behaviours, set a weekly reward goal, pick a theme, and download a print-ready PDF. No login needed.',
  keywords: [
    'reward chart for kids',
    'star chart printable',
    'behaviour chart',
    'free reward chart',
    'star reward chart generator',
    'printable behaviour chart kids',
  ],
}

export default function RewardChartGeneratorPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-500 via-orange-400 to-amber-600 text-white py-14 px-4 print:hidden">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-100 font-bold text-sm uppercase tracking-widest mb-3">Free Printable Tool</p>
          <h1 className="font-display text-4xl md:text-5xl font-normal leading-tight mb-4">
            🌟 Star Reward Chart Generator for Kids
          </h1>
          <p className="text-amber-50 text-lg leading-relaxed max-w-xl mx-auto">
            Track positive behaviour with a star-based reward chart. Set a weekly reward goal and celebrate
            your child&apos;s achievements. Download a beautiful PDF in seconds.
          </p>
          <p className="mt-4 text-amber-200 text-sm">No login · No account · Instant PDF</p>
        </div>
      </section>

      {/* Ad — between header and generator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AdUnit slot={process.env.NEXT_PUBLIC_AD_SLOT_CONTENT} format="horizontal" className="mt-4 mb-2" />
      </div>

      <RewardChartGenerator />
    </>
  )
}
