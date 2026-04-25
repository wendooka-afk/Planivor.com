type EventName =
  | 'age_selected'
  | 'theme_selected'
  | 'chore_toggled'
  | 'pdf_downloaded'
  | 'print_clicked'
  | 'chart_reset'

type EventProps = Record<string, string | number | boolean>

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: EventProps }) => void
    gtag?: (...args: unknown[]) => void
  }
}

export function trackEvent(name: EventName, props?: EventProps) {
  if (typeof window === 'undefined') return

  // Plausible
  if (typeof window.plausible === 'function') {
    window.plausible(name, { props })
  }

  // Google Analytics 4
  if (typeof window.gtag === 'function') {
    window.gtag('event', name, props)
  }
}
