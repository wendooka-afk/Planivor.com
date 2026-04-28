'use client'
import Link from 'next/link'
import { useState } from 'react'

const links = [
  { href: '/chore-chart-generator', label: 'Chore Chart' },
  { href: '/reward-chart-generator', label: 'Reward Chart' },
  { href: '/morning-routine-chart', label: '☀️ Morning Routine' },
  { href: '/evening-routine-chart', label: '🌙 Evening Routine' },
  { href: '/blog', label: '📝 Blog' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 font-display text-2xl text-indigo-600">
            <span className="text-2xl">📋</span>
            <span>Planivor</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-semibold text-gray-600 hover:text-indigo-600 transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/chore-chart-generator"
              className="ml-2 bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-indigo-700 transition-colors"
            >
              Create Chart →
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden py-3 border-t border-gray-100 flex flex-col gap-2 pb-4">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-2 py-2 text-sm font-semibold text-gray-700 hover:text-indigo-600"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/chore-chart-generator"
              onClick={() => setOpen(false)}
              className="mt-1 bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-bold text-center hover:bg-indigo-700"
            >
              Create Chart →
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
