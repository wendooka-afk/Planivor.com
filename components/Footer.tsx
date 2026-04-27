import Link from 'next/link'

const tools = [
  { href: '/chore-chart-generator', label: 'Chore Chart Generator' },
  { href: '/reward-chart-generator', label: 'Reward Chart Generator' },
  { href: '/morning-routine-chart', label: 'Morning Routine Chart' },
  { href: '/evening-routine-chart', label: 'Evening Routine Chart' },
  { href: '/chores-for-kids-by-age', label: 'Chores by Age Guide' },
  { href: '/free-printable-chore-chart-for-kids', label: 'Free Printable Charts' },
  { href: '/weekly-chore-chart-template', label: 'Weekly Chore Chart Template' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 mt-16 print:hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 font-display text-xl text-white mb-3">
              <span>📋</span>
              <span>Planivor</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Free printable tools for families — chore charts, reward charts, morning & evening routines. No login, no fuss.
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-3 text-sm uppercase tracking-wide">Tools</h3>
            <ul className="space-y-2">
              {tools.map(t => (
                <li key={t.href}>
                  <Link href={t.href} className="text-sm hover:text-white transition-colors">
                    {t.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-3 text-sm uppercase tracking-wide">About</h3>
            <p className="text-sm leading-relaxed">
              Planivor helps parents build good habits with kids through simple, beautiful printable tools.
              100% free, no account required.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-gray-600">
          <span>© {new Date().getFullYear()} Planivor. Free for personal and classroom use.</span>
          <span className="hidden sm:inline text-gray-700">·</span>
          <Link href="/about" className="hover:text-gray-400 transition-colors">About</Link>
          <span className="hidden sm:inline text-gray-700">·</span>
          <Link href="/privacy" className="hover:text-gray-400 transition-colors">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  )
}
