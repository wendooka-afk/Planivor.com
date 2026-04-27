'use client'
import { useState, useRef, useCallback, useEffect } from 'react'
import ChoreChartPreview, { PAPER_PX } from './ChoreChartPreview'
import AdUnit from './AdUnit'
import { AGE_GROUPS, CHORES_BY_AGE, AgeGroup, ChoreItem } from '@/lib/chores'
import { THEMES, THEME_LIST, ThemeId } from '@/lib/themes'
import { PAPER_SIZES, PaperSize, exportChartToPDF } from '@/lib/pdf'
import { trackEvent } from '@/lib/analytics'

const MAX_CHORES = 7

export default function ChoreChartGenerator() {
  const [childName, setChildName] = useState('')
  const [ageGroup, setAgeGroup] = useState<AgeGroup>('6-7')
  const [selectedChores, setSelectedChores] = useState<ChoreItem[]>([])
  const [rewardGoal, setRewardGoal] = useState('')
  const [themeId, setThemeId] = useState<ThemeId>('rainbow')
  const [paperSize, setPaperSize] = useState<PaperSize>('letter')
  const [isExporting, setIsExporting] = useState(false)

  const previewRef = useRef<HTMLDivElement>(null)
  const previewContainerRef = useRef<HTMLDivElement>(null)
  const [containerW, setContainerW] = useState(600)

  useEffect(() => {
    const el = previewContainerRef.current
    if (!el) return
    const ro = new ResizeObserver(() => setContainerW(el.clientWidth))
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const theme = THEMES[themeId]
  const suggestions = CHORES_BY_AGE[ageGroup]
  const dims = PAPER_PX[paperSize]
  // Never scale beyond 1 — on large screens show at natural size
  const previewScale = Math.min(containerW / dims.w, 1)

  const toggleChore = useCallback((chore: ChoreItem) => {
    setSelectedChores(prev => {
      const exists = prev.find(c => c.id === chore.id)
      if (exists) return prev.filter(c => c.id !== chore.id)
      if (prev.length >= MAX_CHORES) return prev
      trackEvent('chore_toggled', { chore: chore.id })
      return [...prev, chore]
    })
  }, [])

  const handleAgeChange = (age: AgeGroup) => {
    setAgeGroup(age)
    setSelectedChores([])
    trackEvent('age_selected', { age })
  }

  const handleDownload = async () => {
    setIsExporting(true)
    try {
      await exportChartToPDF('chart-print-inner', childName, paperSize)
      trackEvent('pdf_downloaded', { theme: themeId, age: ageGroup, paper: paperSize, chores: selectedChores.length })
    } finally {
      setIsExporting(false)
    }
  }

  const handlePrint = () => {
    trackEvent('print_clicked', { theme: themeId, age: ageGroup })
    window.print()
  }

  const handleReset = () => {
    setChildName('')
    setAgeGroup('6-7')
    setSelectedChores([])
    setRewardGoal('')
    setThemeId('rainbow')
    setPaperSize('letter')
    trackEvent('chart_reset')
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div className="flex flex-col lg:flex-row gap-8">

        {/* ── Left panel: Form ── */}
        <aside className="lg:w-[360px] flex-shrink-0 space-y-4 print:hidden">

          {/* Child name */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Child&apos;s Name
            </label>
            <input
              type="text"
              value={childName}
              onChange={e => setChildName(e.target.value)}
              placeholder="e.g. Emma"
              maxLength={30}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-400 text-base"
            />
          </section>

          {/* Age group */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <p className="text-sm font-bold text-gray-700 mb-3">Age Group</p>
            <div className="grid grid-cols-2 gap-2">
              {AGE_GROUPS.map(ag => (
                <button
                  key={ag.value}
                  onClick={() => handleAgeChange(ag.value)}
                  className={`rounded-xl border-2 px-3 py-2.5 text-left transition-all ${
                    ageGroup === ag.value
                      ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                      : 'border-gray-200 hover:border-indigo-300 text-gray-700'
                  }`}
                >
                  <p className="font-bold text-sm">{ag.label}</p>
                  <p className="text-xs text-gray-500">{ag.description}</p>
                </button>
              ))}
            </div>
          </section>

          {/* Chore selector */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm font-bold text-gray-700">Choose Chores</p>
              <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                selectedChores.length >= MAX_CHORES ? 'bg-amber-100 text-amber-700' : 'bg-gray-100 text-gray-500'
              }`}>
                {selectedChores.length}/{MAX_CHORES}
              </span>
            </div>
            <div className="space-y-2">
              {suggestions.map(chore => {
                const selected = selectedChores.some(c => c.id === chore.id)
                const disabled = !selected && selectedChores.length >= MAX_CHORES
                return (
                  <button
                    key={chore.id}
                    onClick={() => toggleChore(chore)}
                    disabled={disabled}
                    className={`w-full flex items-center gap-3 rounded-xl border-2 px-3 py-2.5 text-left transition-all ${
                      selected
                        ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                        : disabled
                        ? 'border-gray-100 bg-gray-50 text-gray-300 cursor-not-allowed'
                        : 'border-gray-200 hover:border-indigo-300 text-gray-700'
                    }`}
                  >
                    <span className="text-xl w-7 text-center">{chore.emoji}</span>
                    <span className="text-sm font-semibold flex-1">{chore.label}</span>
                    {selected && <span className="text-indigo-500 font-bold text-base">✓</span>}
                  </button>
                )
              })}
            </div>
            {selectedChores.length >= MAX_CHORES && (
              <p className="mt-2 text-xs text-amber-600 font-semibold">
                Max 7 chores reached. Deselect one to swap.
              </p>
            )}
          </section>

          {/* Reward goal */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Reward Goal <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <input
              type="text"
              value={rewardGoal}
              onChange={e => setRewardGoal(e.target.value)}
              placeholder="e.g. Movie night on Saturday 🎬"
              maxLength={60}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm"
            />
          </section>

          {/* Theme selector */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <p className="text-sm font-bold text-gray-700 mb-3">Theme</p>
            <div className="grid grid-cols-3 gap-2">
              {THEME_LIST.map(t => (
                <button
                  key={t.id}
                  onClick={() => { setThemeId(t.id); trackEvent('theme_selected', { theme: t.id }) }}
                  className={`rounded-xl border-2 p-2.5 text-center transition-all ${
                    themeId === t.id
                      ? 'border-indigo-500 ring-2 ring-indigo-200'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  style={{ background: t.chartBg }}
                >
                  <div className="w-full h-4 rounded mb-1.5" style={{ background: t.headerBg }} />
                  <span className="text-lg">{t.emoji}</span>
                  <p className="text-xs font-bold mt-0.5" style={{ color: t.textColor }}>{t.name}</p>
                </button>
              ))}
            </div>
          </section>

          {/* Paper size */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <p className="text-sm font-bold text-gray-700 mb-3">Paper Size</p>
            <div className="flex gap-2">
              {PAPER_SIZES.map(ps => (
                <button
                  key={ps.value}
                  onClick={() => setPaperSize(ps.value)}
                  className={`flex-1 rounded-xl border-2 px-3 py-2.5 text-sm font-bold transition-all ${
                    paperSize === ps.value
                      ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                      : 'border-gray-200 hover:border-indigo-300 text-gray-700'
                  }`}
                >
                  {ps.label}
                </button>
              ))}
            </div>
          </section>

          {/* Action buttons */}
          <div className="space-y-3">
            <button
              onClick={handleDownload}
              disabled={isExporting}
              className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-bold py-3.5 px-6 rounded-2xl text-base transition-colors flex items-center justify-center gap-2 shadow-md shadow-indigo-100"
            >
              {isExporting ? (
                <>
                  <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Generating PDF…
                </>
              ) : (
                <>⬇ Download PDF</>
              )}
            </button>
            <div className="flex gap-3">
              <button
                onClick={handlePrint}
                className="flex-1 bg-white hover:bg-gray-50 text-gray-700 font-bold py-3 px-4 rounded-2xl text-sm border-2 border-gray-200 hover:border-gray-300 transition-colors flex items-center justify-center gap-1.5"
              >
                🖨️ Print
              </button>
              <button
                onClick={handleReset}
                className="flex-1 bg-white hover:bg-gray-50 text-gray-500 font-bold py-3 px-4 rounded-2xl text-sm border-2 border-gray-200 hover:border-gray-300 transition-colors"
              >
                ↺ Reset
              </button>
            </div>
          </div>

          <AdUnit
            slot={process.env.NEXT_PUBLIC_AD_SLOT_SIDEBAR}
            format="rectangle"
            className="mt-2"
          />
        </aside>

        {/* ── Right panel: Preview ── */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-4 print:hidden">
            <h2 className="font-bold text-gray-800 text-lg">Live Preview</h2>
            <span className="text-xs text-gray-400 bg-gray-100 px-3 py-1 rounded-full font-semibold">
              What you&apos;ll get
            </span>
          </div>

          {/* Outer ref measures the available panel width */}
          <div ref={previewContainerRef} className="w-full animate-fade">
            {/* Inner wrapper is sized exactly to the scaled chart — no extra whitespace */}
            <div style={{
              width: Math.round(dims.w * previewScale),
              height: Math.round(dims.h * previewScale),
              position: 'relative',
              overflow: 'hidden',
              borderRadius: 10,
              boxShadow: '0 4px 32px rgba(0,0,0,0.14)',
            }}>
              <div style={{
                transform: `scale(${previewScale})`,
                transformOrigin: 'top left',
                position: 'absolute',
                top: 0,
                left: 0,
              }}>
                <ChoreChartPreview
                  ref={previewRef}
                  childName={childName}
                  chores={selectedChores}
                  rewardGoal={rewardGoal}
                  theme={theme}
                  paperSize={paperSize}
                />
              </div>
            </div>
          </div>

          <p className="text-center text-xs text-gray-400 mt-3 print:hidden">
            The chart fills the full page when printed or exported as PDF.
          </p>
        </div>

      </div>
    </div>
  )
}
