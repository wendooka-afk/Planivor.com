import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Planivor — Free Printable Tools for Families',
  description:
    'Planivor is a free platform helping parents and educators build healthy routines and good habits with kids. No login, no fees — ever.',
}

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
      <h1 className="font-display text-4xl text-gray-800 mb-2">About Planivor</h1>
      <p className="text-gray-500 text-sm mb-10">Helping families build better routines, one chart at a time.</p>

      <div className="space-y-10 text-gray-700 text-sm leading-relaxed">

        <section>
          <h2 className="font-bold text-gray-800 text-lg mb-3">What is Planivor?</h2>
          <p>
            Planivor is a free, browser-based platform that helps parents, educators, and caregivers
            create beautiful printable tools for kids — chore charts, reward charts, morning routines,
            evening routines, and more. Everything runs directly in your browser. No account, no login,
            no subscription required.
          </p>
          <p className="mt-3">
            Every tool on Planivor generates a full-page, print-ready PDF instantly. You customize it,
            preview it live, and download it in seconds.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-gray-800 text-lg mb-3">Why We Built This</h2>
          <p>
            Building good habits in children takes consistency — and consistency is easier with the right
            visual tools. But most printable chart sites either require a paid subscription, hide downloads
            behind a login wall, or produce charts that don&apos;t fill the page properly when printed.
          </p>
          <p className="mt-3">
            Planivor was built to fix all of that. Every chart fills the full page (A4 or US Letter),
            exports as a proper PDF, and is completely free — no watermarks, no account, no catch.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-gray-800 text-lg mb-3">Our Tools</h2>
          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            {[
              { href: '/chore-chart-generator', emoji: '📋', title: 'Chore Chart Generator', desc: 'Weekly chore charts with age-matched tasks and themes.' },
              { href: '/reward-chart-generator', emoji: '🌟', title: 'Reward Chart Generator', desc: 'Star-based charts to reinforce positive behaviour.' },
              { href: '/morning-routine-chart', emoji: '☀️', title: 'Morning Routine Chart', desc: 'Step-by-step morning routines for independent kids.' },
              { href: '/evening-routine-chart', emoji: '🌙', title: 'Evening Routine Chart', desc: 'Calming bedtime routines that reduce conflict.' },
            ].map(tool => (
              <Link
                key={tool.href}
                href={tool.href}
                className="flex gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:border-indigo-200 hover:bg-indigo-50 transition-all"
              >
                <span className="text-2xl flex-shrink-0">{tool.emoji}</span>
                <div>
                  <p className="font-bold text-gray-800 text-sm">{tool.title}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{tool.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-bold text-gray-800 text-lg mb-3">Our Commitment</h2>
          <ul className="space-y-2">
            {[
              '🔒 No login or account required — ever',
              '💰 100% free — all tools, all downloads, forever',
              '🖨️ Print-ready PDFs — full-page, no margins, no watermarks',
              '🧒 Age-appropriate content — tailored suggestions for each stage',
              '🔒 Privacy-first — no personal data collected or stored',
            ].map(item => (
              <li key={item} className="flex items-start gap-2">
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-bold text-gray-800 text-lg mb-3">Contact</h2>
          <p>
            Questions, feedback, or suggestions? We&apos;d love to hear from you.
          </p>
          <p className="mt-2">
            📧{' '}
            <a href="mailto:hello@planivor.com" className="text-indigo-600 underline font-semibold">
              hello@planivor.com
            </a>
          </p>
        </section>

      </div>
    </div>
  )
}
