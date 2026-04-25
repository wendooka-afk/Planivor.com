'use client'
import { forwardRef } from 'react'
import { Theme } from '@/lib/themes'
import { ChoreItem, DAYS_OF_WEEK } from '@/lib/chores'
import type { PaperSize } from '@/lib/pdf'

export const PAPER_PX: Record<PaperSize, { w: number; h: number }> = {
  letter: { w: 816, h: 1056 },
  a4: { w: 794, h: 1123 },
}

export type ChartMode = 'chore' | 'reward' | 'routine-morning' | 'routine-evening'

interface ChoreChartPreviewProps {
  childName: string
  chores: ChoreItem[]
  rewardGoal: string
  theme: Theme
  weekLabel?: string
  paperSize?: PaperSize
  mode?: ChartMode
}

const ChoreChartPreview = forwardRef<HTMLDivElement, ChoreChartPreviewProps>(
  ({ childName, chores, rewardGoal, theme, weekLabel, paperSize = 'letter', mode = 'chore' }, ref) => {
    const name = childName.trim() || 'My Child'
    const isReward = mode === 'reward'
    const isMorning = mode === 'routine-morning'
    const isEvening = mode === 'routine-evening'
    const isRoutine = isMorning || isEvening

    const placeholder = isReward
      ? { id: 'example', label: 'Example behaviour', emoji: '⭐' }
      : isRoutine
      ? { id: 'example', label: 'Example step', emoji: '✅' }
      : { id: 'example', label: 'Example chore', emoji: '⭐' }
    const choreList = chores.length > 0 ? chores : [placeholder]
    const decor = theme.decorEmojis
    const { w, h } = PAPER_PX[paperSize]

    const subtitle = isReward
      ? 'Star Reward Chart'
      : isMorning
      ? 'Morning Routine Chart'
      : isEvening
      ? 'Evening Routine Chart'
      : 'Weekly Chore Chart'
    const titleText = isRoutine
      ? `${name}'s ${isMorning ? 'Morning' : 'Evening'} Routine`
      : `${name}'s Chart`
    const titleEmoji = isReward ? '🌟' : isMorning ? '☀️' : isEvening ? '🌙' : decor[0]
    const goalEmoji = isReward ? '🌟' : isMorning ? '🌅' : isEvening ? '🌙' : '🏆'
    const goalLabel = isRoutine ? 'Note' : isReward ? 'Reward Goal' : "This Week's Reward Goal"
    const rightLabel = isReward ? 'Total Stars ⭐' : isMorning ? 'Morning Done ✓' : isEvening ? 'Evening Done ✓' : 'Chores Done ✓'

    const labelFlex = 2
    const dayFlex = 1

    return (
      <div
        ref={ref}
        id="chart-print-inner"
        style={{
          width: w,
          height: h,
          background: theme.chartBg,
          fontFamily: "'Nunito', sans-serif",
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        {/* ── Header ── */}
        <div style={{
          background: theme.headerBg,
          padding: '24px 32px 20px',
          position: 'relative',
          overflow: 'hidden',
          flexShrink: 0,
        }}>
          <span style={{ position: 'absolute', top: 12, right: 28, fontSize: 48, opacity: 0.22 }}>{decor[0]}</span>
          <span style={{ position: 'absolute', bottom: 8, right: 88, fontSize: 32, opacity: 0.16 }}>{decor[1]}</span>
          <span style={{ position: 'absolute', top: 16, right: 120, fontSize: 22, opacity: 0.12 }}>{decor[2]}</span>

          <p style={{ color: theme.headerText, fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', opacity: 0.85, margin: 0, textTransform: 'uppercase' }}>
            {subtitle}
          </p>
          <h1 style={{
            color: theme.headerText,
            fontFamily: "'Fredoka One', cursive",
            fontSize: 46,
            fontWeight: 400,
            margin: '6px 0 0',
            lineHeight: 1.1,
          }}>
            {titleText} {titleEmoji}
          </h1>
          {weekLabel && (
            <p style={{ color: theme.headerText, fontSize: 12, opacity: 0.7, margin: '6px 0 0' }}>{weekLabel}</p>
          )}
        </div>

        {/* ── Grid section — fills remaining height ── */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          padding: '14px 22px',
          minHeight: 0,
          gap: 5,
        }}>
          {/* Day header row */}
          <div style={{ display: 'flex', gap: 5, flexShrink: 0 }}>
            <div style={{ flex: labelFlex }} />
            {DAYS_OF_WEEK.map(day => (
              <div key={day} style={{
                flex: dayFlex,
                background: theme.accentBg,
                color: theme.accentText,
                borderRadius: 8,
                fontSize: 12,
                fontWeight: 800,
                textAlign: 'center',
                padding: '8px 0',
                letterSpacing: '0.04em',
              }}>
                {day}
              </div>
            ))}
          </div>

          {/* Chore rows — each row gets equal share of remaining height via flex: 1 */}
          {choreList.map((chore, i) => (
            <div
              key={chore.id}
              style={{
                flex: 1,
                display: 'flex',
                gap: 5,
                minHeight: 44,
              }}
            >
              {/* Label cell */}
              <div style={{
                flex: labelFlex,
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '10px 14px',
                background: i % 2 === 0 ? theme.cellBg : theme.accentBg + '55',
                borderRadius: 10,
                color: theme.textColor,
              }}>
                <span style={{ fontSize: 22, flexShrink: 0 }}>{chore.emoji}</span>
                <span style={{ fontSize: 14, fontWeight: 700, lineHeight: 1.3 }}>{chore.label}</span>
              </div>

              {/* Day cells */}
              {DAYS_OF_WEEK.map(day => (
                <div key={day} style={{
                  flex: dayFlex,
                  background: i % 2 === 0 ? theme.cellBg : theme.accentBg + '55',
                  borderRadius: 10,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  {isReward ? (
                    <span style={{ fontSize: 22, color: theme.checkColor, lineHeight: 1, userSelect: 'none' }}>☆</span>
                  ) : (
                    <div style={{
                      width: 26,
                      height: 26,
                      borderRadius: 7,
                      border: `2.5px solid ${theme.checkColor}`,
                      background: 'white',
                    }} />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* ── Bottom: reward + signature + branding ── */}
        <div style={{ padding: '0 22px 18px', flexShrink: 0 }}>
          {rewardGoal && (
            <div style={{
              marginBottom: 12,
              padding: '11px 16px',
              background: theme.badgeBg,
              borderRadius: 12,
              display: 'flex',
              alignItems: 'center',
              gap: 10,
            }}>
              <span style={{ fontSize: 24 }}>{goalEmoji}</span>
              <div>
                <p style={{ margin: 0, fontSize: 11, fontWeight: 700, color: theme.subtleText, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  {goalLabel}
                </p>
                <p style={{ margin: 0, fontSize: 15, fontWeight: 800, color: theme.badgeText }}>
                  {rewardGoal}
                </p>
              </div>
            </div>
          )}

          <div style={{ display: 'flex', gap: 32, paddingTop: 10, borderTop: `1.5px dashed ${theme.borderColor}` }}>
            <div style={{ flex: 1, textAlign: 'center' }}>
              <div style={{ height: 1, background: theme.borderColor, marginBottom: 6, marginRight: 16 }} />
              <p style={{ margin: 0, fontSize: 11, color: theme.subtleText, fontWeight: 700 }}>Parent Signature</p>
            </div>
            <div style={{ flex: 1, textAlign: 'center' }}>
              <div style={{ height: 1, background: theme.borderColor, marginBottom: 6, marginLeft: 16 }} />
              <p style={{ margin: 0, fontSize: 11, color: theme.subtleText, fontWeight: 700 }}>{rightLabel}</p>
            </div>
          </div>

          <p style={{ textAlign: 'center', fontSize: 10, color: theme.subtleText, margin: '8px 0 0', opacity: 0.55 }}>
            Made free at planivor.com
          </p>
        </div>
      </div>
    )
  }
)

ChoreChartPreview.displayName = 'ChoreChartPreview'
export default ChoreChartPreview
