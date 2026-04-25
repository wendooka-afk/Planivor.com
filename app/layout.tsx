import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://planivor.com'),
  other: {
    'google-adsense-account': 'ca-pub-4434058814138910',
  },
  title: {
    default: 'Planivor — Free Printable Tools for Families',
    template: '%s | Planivor',
  },
  description:
    'Free printable tools for parents and families. Create chore charts, reward charts, routine schedules and more — download as PDF instantly, no login required.',
  keywords: [
    'chore chart for kids',
    'printable chore chart',
    'free family planning tools',
    'reward chart for kids',
    'kids routine chart',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://planivor.com',
    siteName: 'Planivor',
    title: 'Planivor — Free Printable Tools for Families',
    description:
      'Free printable tools for parents and families. Chore charts, reward charts, routine schedules — instant PDF, no login.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Planivor — Free Printable Tools for Families',
    description: 'Free printable tools for parents and families. Chore charts, reward charts, routine schedules — instant PDF, no login.',
  },
  robots: { index: true, follow: true },
}

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50">
        {/* Google AdSense — always loaded for verification + auto-ads */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4434058814138910"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
          </>
        )}
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
