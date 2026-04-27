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
      {/* Page header */}
      <div className="bg-white border-b border-gray-100 py-8 px-4 print:hidden">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-display text-3xl md:text-4xl text-gray-800 mb-2">
            Free Chore Chart Generator for Kids
          </h1>
          <p className="text-gray-500 text-base max-w-2xl">
            Customize your child&apos;s weekly chore chart, preview it live, and download a beautiful PDF in seconds. No login required.
          </p>
        </div>
      </div>

      {/* Ad — between header and generator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AdUnit slot={process.env.NEXT_PUBLIC_AD_SLOT_CONTENT} format="horizontal" className="mt-4 mb-2" />
      </div>

      {/* Generator */}
      <ChoreChartGenerator />
    </>
  )
}
