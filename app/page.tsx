import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Planivor — Free Printable Planning Tools for Families',
  description:
    'Free printable tools designed for parents and families. Chore charts, reward charts, routine schedules and more — personalize, preview, and download as PDF in seconds. No login required.',
}

const currentTools = [
  {
    href: '/chore-chart-generator',
    emoji: '📋',
    title: 'Chore Chart Generator',
    desc: 'Create a personalized weekly chore chart with age-matched tasks, fun themes, and a reward goal. Download as PDF instantly.',
    cta: 'Create Chart →',
    bg: 'bg-indigo-50',
    border: 'border-indigo-200',
    btn: 'bg-indigo-600 hover:bg-indigo-700',
    badge: 'Available now',
    badgeColor: 'bg-indigo-100 text-indigo-700',
  },
  {
    href: '/reward-chart-generator',
    emoji: '🌟',
    title: 'Reward Chart Generator',
    desc: 'Track positive behaviour with a star-based reward chart. Set a weekly goal and celebrate your child\'s achievements.',
    cta: 'Create Reward Chart →',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    btn: 'bg-amber-500 hover:bg-amber-600',
    badge: 'Available now',
    badgeColor: 'bg-amber-100 text-amber-700',
  },
  {
    href: '/morning-routine-chart',
    emoji: '☀️',
    title: 'Morning Routine Chart',
    desc: 'Help kids start the day right with a visual step-by-step morning routine. Age-matched steps for toddlers through school age.',
    cta: 'Create Morning Chart →',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    btn: 'bg-emerald-600 hover:bg-emerald-700',
    badge: 'Available now',
    badgeColor: 'bg-emerald-100 text-emerald-700',
  },
  {
    href: '/evening-routine-chart',
    emoji: '🌙',
    title: 'Evening Routine Chart',
    desc: 'Make bedtime easier with a calming visual routine chart. Wind-down steps that reduce conflict and build independence.',
    cta: 'Create Evening Chart →',
    bg: 'bg-violet-50',
    border: 'border-violet-200',
    btn: 'bg-violet-600 hover:bg-violet-700',
    badge: 'Available now',
    badgeColor: 'bg-violet-100 text-violet-700',
  },
]

const comingTools = [
  { emoji: '📅', title: 'Weekly Family Planner', desc: 'A shared planner for the whole family — activities, meals, and tasks.' },
  { emoji: '🧸', title: 'Habit Tracker for Kids', desc: 'Build lasting good habits with a visual tracker kids actually enjoy.' },
  { emoji: '👨‍👩‍👧‍👦', title: 'Multi-Child Family Chart', desc: 'Manage chores and routines for multiple children from one place.' },
  { emoji: '🎓', title: 'Homework Planner', desc: 'Keep school assignments organized with a simple printable planner.' },
]

const features = [
  { emoji: '⚡', title: 'Instant Preview', desc: 'See your chart update live as you make changes — no refresh needed.' },
  { emoji: '📄', title: 'PDF & Print Ready', desc: 'Download as a full-page PDF or print directly. A4 & US Letter.' },
  { emoji: '🎨', title: 'Themes Kids Love', desc: 'Rainbow, Dinosaurs, Space, Animals, Pastel, Minimal — 6 themes and growing.' },
  { emoji: '🧒', title: 'Age-Matched Content', desc: 'Smart suggestions tailored to your child\'s age group.' },
  { emoji: '🔒', title: 'No Login, Ever', desc: '100% free. No account, no email, no watermarks.' },
  { emoji: '📱', title: 'Works Everywhere', desc: 'Mobile-friendly and works on any modern browser.' },
]

const faqs = [
  {
    q: 'Is Planivor completely free?',
    a: 'Yes. Every tool on Planivor is 100% free to use. No login, no hidden fees, no watermarks on any download.',
  },
  {
    q: 'Do I need to create an account?',
    a: 'No. Just open the tool, customize your chart, and download. Everything runs directly in your browser.',
  },
  {
    q: 'Can I print the charts at home?',
    a: 'Absolutely. Click the Print button to print directly, or download the PDF and print from any device or printer.',
  },
  {
    q: 'What age groups are supported?',
    a: 'The generators include age-appropriate suggestions for toddlers (2–3), preschoolers (4–5), early school age (6–7), and school age (8–10).',
  },
  {
    q: 'Can I use Planivor tools in a classroom?',
    a: 'Yes. All Planivor tools are free for personal and classroom use.',
  },
  {
    q: 'Will there be more tools added?',
    a: 'Yes! Planivor is growing into a full toolkit for families. Morning routines, habit trackers, family planners, and more are on the roadmap.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-indigo-600 via-indigo-500 to-purple-600 text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-indigo-200 font-bold text-sm uppercase tracking-widest mb-4">Free Printable Tools for Families</p>
          <h1 className="font-display text-5xl md:text-6xl font-normal leading-tight mb-6">
            Everything Parents Need<br />to Organize Family Life
          </h1>
          <p className="text-indigo-100 text-lg md:text-xl leading-relaxed mb-8 max-w-xl mx-auto">
            Chore charts, reward charts, routine planners and more — personalize, preview live,
            and download a print-ready PDF in under 60 seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/chore-chart-generator"
              className="bg-white text-indigo-600 font-bold px-8 py-4 rounded-2xl text-lg hover:bg-indigo-50 transition-colors shadow-lg"
            >
              📋 Start with a Chore Chart
            </Link>
            <Link
              href="/reward-chart-generator"
              className="bg-indigo-500 border-2 border-indigo-300 text-white font-bold px-8 py-4 rounded-2xl text-lg hover:bg-indigo-400 transition-colors"
            >
              🌟 Reward Chart
            </Link>
          </div>
          <p className="mt-4 text-indigo-300 text-sm">No login · No account · No watermarks · Instant PDF</p>
        </div>
      </section>

      {/* ── Current Tools ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-3xl font-display text-gray-800 text-center mb-3">Tools Available Now</h2>
        <p className="text-center text-gray-500 mb-10 max-w-xl mx-auto">
          Each tool generates a personalized, print-ready PDF in seconds. No design skills needed.
        </p>
        <div className="grid sm:grid-cols-2 gap-6">
          {currentTools.map(tool => (
            <div key={tool.href} className={`rounded-3xl border-2 ${tool.border} ${tool.bg} p-8`}>
              <div className="flex items-start justify-between mb-4">
                <div className="text-5xl">{tool.emoji}</div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${tool.badgeColor}`}>{tool.badge}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{tool.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm">{tool.desc}</p>
              <Link
                href={tool.href}
                className={`inline-block ${tool.btn} text-white font-bold px-6 py-3 rounded-xl transition-colors`}
              >
                {tool.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── Coming Soon ── */}
      <section className="bg-gray-50 border-y border-gray-100 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="inline-block bg-indigo-100 text-indigo-700 font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">Coming Soon</span>
            <h2 className="text-3xl font-display text-gray-800 mb-3">More Tools on the Way</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Planivor is building a complete toolkit for family life. Here&apos;s what&apos;s coming next.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {comingTools.map(t => (
              <div key={t.title} className="bg-white rounded-2xl border border-gray-100 p-5 opacity-80">
                <div className="text-3xl mb-3">{t.emoji}</div>
                <h3 className="font-bold text-gray-700 mb-1 text-sm">{t.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-3xl font-display text-gray-800 text-center mb-10">Why Families Choose Planivor</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map(f => (
            <div key={f.title} className="flex gap-4">
              <span className="text-3xl flex-shrink-0">{f.emoji}</span>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">{f.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="bg-white border-y border-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-display text-gray-800 text-center mb-10">How It Works</h2>
          <div className="grid sm:grid-cols-4 gap-6 text-center">
            {[
              { step: '1', emoji: '✏️', text: 'Enter your child\'s name and age group' },
              { step: '2', emoji: '✅', text: 'Pick tasks from age-appropriate suggestions' },
              { step: '3', emoji: '🎨', text: 'Choose a theme and add a reward goal' },
              { step: '4', emoji: '⬇️', text: 'Download PDF or print instantly' },
            ].map(s => (
              <div key={s.step} className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-700 font-display text-xl flex items-center justify-center font-bold">
                  {s.step}
                </div>
                <div className="text-3xl">{s.emoji}</div>
                <p className="text-sm text-gray-600 font-semibold">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-gray-50 border-t border-gray-100 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-display text-gray-800 text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-5">
            {faqs.map(faq => (
              <div key={faq.q} className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-gray-800 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-indigo-600 text-white py-16 text-center px-4">
        <h2 className="font-display text-4xl mb-4">Start Organizing Family Life Today</h2>
        <p className="text-indigo-200 mb-8 text-lg max-w-lg mx-auto">
          Free forever. No account needed. Print today.
        </p>
        <Link
          href="/chore-chart-generator"
          className="bg-white text-indigo-600 font-bold px-10 py-4 rounded-2xl text-lg hover:bg-indigo-50 transition-colors inline-block"
        >
          📋 Create My Free Chore Chart
        </Link>
      </section>
    </>
  )
}
