'use client'
import { useEffect, useRef } from 'react'

// Publisher ID — public constant, visible in page source
const PUB = 'ca-pub-4434058814138910'

interface AdUnitProps {
  slot?: string
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical'
  className?: string
}

declare global {
  interface Window {
    adsbygoogle: unknown[]
  }
}

export default function AdUnit({ slot, format = 'auto', className = '' }: AdUnitProps) {
  const pushed = useRef(false)

  useEffect(() => {
    if (!slot || pushed.current) return
    pushed.current = true
    try {
      window.adsbygoogle = window.adsbygoogle || []
      window.adsbygoogle.push({})
    } catch {}
  }, [slot])

  // Renders nothing until a real slot ID is provided via env var
  if (!slot) return null

  return (
    <div className={`overflow-hidden print:hidden ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={PUB}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  )
}
