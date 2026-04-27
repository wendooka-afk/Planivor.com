import type { Metadata } from 'next'
import Link from 'next/link'
import AdUnit from '@/components/AdUnit'

export const metadata: Metadata = {
  title: 'Weekly Chore Chart Template for Kids — Free Printable PDF',
  description:
    'Free weekly chore chart templates for kids. Customise with your child\'s name, age-appropriate tasks, and a reward goal — then download as a print-ready PDF. No login needed.',
  keywords: [
    'weekly chore chart template',
    'printable weekly chore chart',
    'weekly chore chart for kids',
    'free chore chart template',
    'weekly task chart kids',
  ],
}

const features = [
  {
    emoji: '📅',
    title: '7-Day Grid',
    desc: 'Mon to Sun columns with a checkbox for every task, every day.',
  },
  {
    emoji: '🧒',
    title: 'Age-Matched Chores',
    desc: 'Suggestions for ages 2–3, 4–5, 6–7, and 8–10 so tasks are always appropriate.',
  },
  {
    emoji: '🏆',
    title: 'Reward Section',
    desc: 'Add a weekly reward goal to keep kids motivated and consistent.',
  },
  {
    emoji: '✍️',
    title: 'Signature Lines',
    desc: 'Parent sign-off and star counter at the bottom of every chart.',
  },
  {
    emoji: '🎨',
    title: '6 Themes',
    desc: 'Rainbow, Dinosaurs, Space, Animals, Pastel, and Neutral — pick what your child loves.',
  },
  {
    emoji: '📄',
    title: 'A4 & US Letter',
    desc: 'Print on any home printer. Works perfectly on both paper sizes.',
  },
]

const whyWeekly = [
  {
    title: 'Builds routine',
    body: 'A weekly view helps children understand that chores are a regular, expected part of each day — not a one-off request.',
  },
  {
    title: 'Visible progress',
    body: 'Ticking off each day\'s box gives kids a tangible sense of accomplishment that builds throughout the week.',
  },
  {
    title: 'Encourages consistency',
    body: 'Seeing the full week at a glance motivates children to keep going, especially as the chart fills up.',
  },
  {
    title: 'Easy for parents to review',
    body: 'One glance tells you exactly which chores were done and which were missed, making feedback simple and fair.',
  },
]

const faqs = [
  {
    q: 'How many tasks should be on a weekly chore chart?',
    a: 'Between 3 and 7 tasks per week works well for most children. Fewer tasks work best for toddlers; older kids can manage more. Our template supports up to 7 chores.',
  },
  {
    q: 'Should the same chores repeat every day?',
    a: 'Daily tasks like making the bed or brushing teeth work well on a weekly chart. Other chores — like vacuuming — might only appear on specific days. The template lets you assign any chore to all 7 days.',
  },
  {
    q: 'Can I laminate the chart and reuse it each week?',
    a: 'Yes! Print on cardstock, laminate it, and use a dry-erase marker. Your child can tick off tasks with the marker and you wipe clean at the end of each week.',
  },
  {
    q: 'Is this template free to use?',
    a: 'Completely free. No account, no watermarks, no hidden costs. You can generate and download as many charts as you need.',
  },
  {
    q: 'Can I print a separate chart for each child?',
    a: 'Yes. Just run the generator again with a different name, age group, and theme. Each chart downloads as its own PDF.',
  },
]

export default function WeeklyChoreChartTemplatePage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-gradient-to-br from-teal-600 to-cyan-500 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-teal-200 font-bold text-sm uppercase tracking-widest mb-3">Free · Printable · Instant PDF</p>
          <h1 className="font-display text-4xl md:text-5xl mb-4 leading-tight">
            Weekly Chore Chart Template for Kids
          </h1>
          <p className="text-teal-100 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            A personalised, print-ready weekly chore chart built in under 60 seconds.
            Pick your child&apos;s age, choose up to 7 chores, add a reward — done.
          </p>
          <Link
            href="/chore-chart-generator"
            className="inline-block bg-white text-teal-700 font-bold px-10 py-4 rounded-2xl text-lg hover:bg-teal-50 transition-colors shadow-lg"
          >
            📋 Build My Weekly Chart — Free
          </Link>
          <p className="mt-3 text-teal-300 text-sm">No login · No watermarks · A4 &amp; US Letter</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 space-y-14">

        {/* What's in the template */}
        <section>
          <h2 className="font-display text-3xl text-gray-800 mb-4">What&apos;s in the Template</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Every Planivor weekly chart includes everything you need in one clean, printable page:
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {features.map(f => (
              <div key={f.title} className="bg-white rounded-2xl border border-gray-100 p-5">
                <div className="text-3xl mb-3">{f.emoji}</div>
                <h3 className="font-bold text-gray-800 mb-1 text-sm">{f.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why weekly */}
        <section className="bg-teal-50 rounded-3xl border border-teal-100 p-8">
          <h2 className="font-display text-3xl text-gray-800 mb-6">Why a Weekly Format Works</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {whyWeekly.map(item => (
              <div key={item.title} className="flex gap-3">
                <span className="text-teal-500 font-bold text-lg mt-0.5">✓</span>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1 text-sm">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How to use */}
        <section>
          <h2 className="font-display text-3xl text-gray-800 mb-4">How to Create Your Weekly Chart</h2>
          <ol className="space-y-4">
            {[
              { n: '1', text: 'Click the button above to open the free generator.' },
              { n: '2', text: 'Enter your child\'s first name and choose their age group.' },
              { n: '3', text: 'Select up to 7 age-matched chores from the suggestion list — or type your own.' },
              { n: '4', text: 'Optionally add a weekly reward goal (e.g. "Movie night on Saturday").' },
              { n: '5', text: 'Choose one of 6 fun themes your child will love.' },
              { n: '6', text: 'Download as a PDF (A4 or US Letter) or print directly.' },
            ].map(s => (
              <li key={s.n} className="flex items-start gap-4">
                <span className="w-8 h-8 rounded-full bg-teal-600 text-white font-bold text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                  {s.n}
                </span>
                <p className="text-gray-700 leading-relaxed">{s.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Tip box */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 flex gap-4">
          <span className="text-2xl flex-shrink-0">💡</span>
          <div>
            <p className="font-bold text-gray-800 mb-1">Pro tip: Laminate and reuse</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Print on cardstock and laminate the chart. Give your child a dry-erase marker
              to tick off tasks each day. Wipe clean every Sunday and start fresh — no reprinting needed.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <section>
          <h2 className="font-display text-3xl text-gray-800 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map(faq => (
              <div key={faq.q} className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-gray-800 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal links */}
        <section className="bg-indigo-50 rounded-3xl p-8 border border-indigo-100">
          <h2 className="font-bold text-gray-800 text-xl mb-4">More Free Tools</h2>
          <div className="space-y-3">
            <Link href="/chore-chart-generator" className="flex items-center gap-3 text-indigo-700 font-semibold hover:underline">
              <span>📋</span> Chore Chart Generator
            </Link>
            <Link href="/reward-chart-generator" className="flex items-center gap-3 text-indigo-700 font-semibold hover:underline">
              <span>🌟</span> Reward Chart Generator
            </Link>
            <Link href="/chores-for-kids-by-age" className="flex items-center gap-3 text-indigo-700 font-semibold hover:underline">
              <span>📚</span> Age-Appropriate Chores Guide
            </Link>
            <Link href="/free-printable-chore-chart-for-kids" className="flex items-center gap-3 text-indigo-700 font-semibold hover:underline">
              <span>📄</span> Free Printable Chore Charts
            </Link>
          </div>
        </section>

        {/* Ad before CTA */}
        <AdUnit slot={process.env.NEXT_PUBLIC_AD_SLOT_CONTENT} format="horizontal" className="my-6" />

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/chore-chart-generator"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-10 py-4 rounded-2xl text-lg transition-colors shadow-md"
          >
            📋 Create My Weekly Chore Chart — Free
          </Link>
          <p className="mt-3 text-gray-400 text-sm">Instant PDF download · No login required · Free forever</p>
        </div>

      </div>
    </>
  )
}
