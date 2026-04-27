import type { Metadata } from 'next'
import ChoreChartGenerator from '@/components/ChoreChartGenerator'
import AdUnit from '@/components/AdUnit'

export const metadata: Metadata = {
  title: 'Free Printable Chore Chart Generator for Kids',
  description:
    'Create a custom weekly chore chart for your child in seconds. Choose age-appropriate chores, pick a fun theme, add a reward goal, and download a print-ready PDF. Free, no login needed.',
  keywords: ['chore chart generator', 'printable chore chart', 'free chore chart for kids', 'kids weekly chore chart'],
}

export default function ChoreChartGeneratorPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-600 via-indigo-500 to-purple-600 text-white py-14 px-4 print:hidden">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-indigo-200 font-bold text-sm uppercase tracking-widest mb-3">Free Printable Tool</p>
          <h1 className="font-display text-4xl md:text-5xl font-normal leading-tight mb-4">
            📋 Chore Chart Generator for Kids
          </h1>
          <p className="text-indigo-100 text-lg leading-relaxed max-w-xl mx-auto">
            Create a personalized weekly chore chart with age-matched tasks, fun themes, and a reward goal.
            Preview live and download your print-ready PDF in seconds.
          </p>
          <p className="mt-4 text-indigo-300 text-sm">No login · No account · Instant PDF</p>
        </div>
      </section>

      {/* Ad — between header and generator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AdUnit slot={process.env.NEXT_PUBLIC_AD_SLOT_CONTENT} format="horizontal" className="mt-4 mb-2" />
      </div>

      {/* Generator */}
      <ChoreChartGenerator />
    </>
  )
}
