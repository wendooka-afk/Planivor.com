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
      <div className="bg-white border-b border-gray-100 py-8 px-4 print:hidden">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-display text-3xl md:text-4xl text-gray-800 mb-2">
            🌟 Free Star Reward Chart Generator for Kids
          </h1>
          <p className="text-gray-500 text-base max-w-2xl">
            Pick positive behaviours, set a weekly reward goal, choose a theme — and download a beautiful star chart your child will love. No login required.
          </p>
        </div>
      </div>

      {/* Ad — between header and generator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AdUnit slot={process.env.NEXT_PUBLIC_AD_SLOT_CONTENT} format="horizontal" className="mt-4 mb-2" />
      </div>

      <RewardChartGenerator />
    </>
  )
}
