import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Planivor — how we handle data, cookies, and third-party services.',
  robots: { index: false, follow: false },
}

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
      <h1 className="font-display text-4xl text-gray-800 mb-2">Privacy Policy</h1>
      <p className="text-gray-500 text-sm mb-10">Last updated: April 25, 2026</p>

      <div className="prose prose-gray max-w-none space-y-8 text-gray-700 text-sm leading-relaxed">

        <section>
          <h2 className="font-bold text-gray-800 text-lg mb-2">1. Overview</h2>
          <p>
            Planivor (<strong>planivor.com</strong>) is a free, browser-based tool that helps families
            create printable charts and routine planners. We do not require you to create an account,
            and we do not collect any personally identifiable information directly.
          </p>
          <p className="mt-3">
            This Privacy Policy explains what data may be collected through third-party services we use,
            how it is used, and how you can control it.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-gray-800 text-lg mb-2">2. Information We Collect</h2>
          <p>
            <strong>We do not collect:</strong> names, email addresses, passwords, or any personally
            identifiable information. Any text you enter into Planivor tools (such as a child&apos;s name
            or chore list) is processed entirely in your browser and is never sent to our servers.
          </p>
          <p className="mt-3">
            <strong>Usage data:</strong> We use Google Analytics to collect anonymized usage statistics
            (pages visited, session duration, general geographic region). This helps us improve the
            tools. No personal data is linked to this information.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-gray-800 text-lg mb-2">3. Google AdSense</h2>
          <p>
            Planivor displays advertisements served by <strong>Google AdSense</strong>. Google may use
            cookies and similar tracking technologies to serve ads based on your prior visits to this
            and other websites. This is standard practice for online advertising.
          </p>
          <p className="mt-3">
            Google&apos;s use of advertising cookies enables it and its partners to serve ads based on
            your visit to planivor.com and/or other sites on the Internet. You may opt out of
            personalized advertising by visiting{' '}
            <a
              href="https://www.google.com/settings/ads"
              className="text-indigo-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Ads Settings
            </a>
            . You may also opt out via{' '}
            <a
              href="https://www.aboutads.info"
              className="text-indigo-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              aboutads.info
            </a>
            .
          </p>
          <p className="mt-3">
            For more information on how Google uses data collected through advertising, see{' '}
            <a
              href="https://policies.google.com/technologies/ads"
              className="text-indigo-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google&apos;s Advertising Privacy Policy
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-bold text-gray-800 text-lg mb-2">4. Cookies</h2>
          <p>
            Planivor itself does not set cookies. However, third-party services we use (Google Analytics
            and Google AdSense) may set cookies on your device. These cookies are governed by Google&apos;s
            privacy policy.
          </p>
          <p className="mt-3">
            You can control cookies through your browser settings. Note that disabling cookies may affect
            the performance of some features.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-gray-800 text-lg mb-2">5. Third-Party Links</h2>
          <p>
            Our website may contain links to external sites. We are not responsible for the privacy
            practices of those sites. We encourage you to read their privacy policies.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-gray-800 text-lg mb-2">6. Children&apos;s Privacy</h2>
          <p>
            Planivor is designed for use by parents, educators, and caregivers — not directly by
            children. We do not knowingly collect any information from children under 13.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-gray-800 text-lg mb-2">7. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this page
            with an updated date. Continued use of Planivor after changes are posted constitutes
            acceptance of the updated policy.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-gray-800 text-lg mb-2">8. Contact</h2>
          <p>
            If you have questions about this Privacy Policy, you can contact us at{' '}
            <a href="mailto:hello@planivor.com" className="text-indigo-600 underline">
              hello@planivor.com
            </a>
            .
          </p>
        </section>

      </div>
    </div>
  )
}
