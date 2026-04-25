import type { AgeGroup } from './chores'

export interface RoutineStep {
  id: string
  label: string
  emoji: string
}

export const MORNING_STEPS_BY_AGE: Record<AgeGroup, RoutineStep[]> = {
  '2-3': [
    { id: 'mr-wake', label: 'Wake up & stretch', emoji: '🌅' },
    { id: 'mr-toilet', label: 'Use toilet', emoji: '🚽' },
    { id: 'mr-wash-face', label: 'Wash face & hands', emoji: '🧼' },
    { id: 'mr-get-dressed', label: 'Get dressed', emoji: '👗' },
    { id: 'mr-eat-breakfast', label: 'Eat breakfast', emoji: '🥣' },
    { id: 'mr-brush-teeth', label: 'Brush teeth', emoji: '🦷' },
    { id: 'mr-shoes', label: 'Put shoes on', emoji: '👟' },
  ],
  '4-5': [
    { id: 'mr-wake', label: 'Wake up', emoji: '☀️' },
    { id: 'mr-make-bed', label: 'Make bed', emoji: '🛏️' },
    { id: 'mr-get-dressed', label: 'Get dressed', emoji: '👕' },
    { id: 'mr-brush-teeth', label: 'Brush teeth & hair', emoji: '🦷' },
    { id: 'mr-wash-face', label: 'Wash face', emoji: '🧼' },
    { id: 'mr-eat-breakfast', label: 'Eat breakfast', emoji: '🥞' },
    { id: 'mr-pack-bag', label: 'Pack school bag', emoji: '🎒' },
  ],
  '6-7': [
    { id: 'mr-wake', label: 'Wake up on time', emoji: '⏰' },
    { id: 'mr-make-bed', label: 'Make bed', emoji: '🛏️' },
    { id: 'mr-brush-teeth', label: 'Brush teeth', emoji: '🦷' },
    { id: 'mr-get-dressed', label: 'Get dressed', emoji: '👔' },
    { id: 'mr-eat-breakfast', label: 'Eat breakfast', emoji: '🥣' },
    { id: 'mr-pack-bag', label: 'Pack school bag', emoji: '🎒' },
    { id: 'mr-shoes', label: 'Put on shoes', emoji: '👟' },
  ],
  '8-10': [
    { id: 'mr-wake', label: 'Wake up independently', emoji: '⏰' },
    { id: 'mr-make-bed', label: 'Make bed', emoji: '🛏️' },
    { id: 'mr-shower', label: 'Shower or wash up', emoji: '🚿' },
    { id: 'mr-brush-teeth', label: 'Brush teeth', emoji: '🦷' },
    { id: 'mr-get-dressed', label: 'Get dressed', emoji: '👔' },
    { id: 'mr-eat-breakfast', label: 'Eat breakfast', emoji: '🍳' },
    { id: 'mr-pack-bag', label: 'Check school bag', emoji: '🎒' },
  ],
}

export const EVENING_STEPS_BY_AGE: Record<AgeGroup, RoutineStep[]> = {
  '2-3': [
    { id: 'er-tidy-toys', label: 'Tidy toys', emoji: '🧸' },
    { id: 'er-bath', label: 'Bath time', emoji: '🛁' },
    { id: 'er-pajamas', label: 'Put on pajamas', emoji: '🌙' },
    { id: 'er-brush-teeth', label: 'Brush teeth', emoji: '🦷' },
    { id: 'er-story', label: 'Story time', emoji: '📖' },
    { id: 'er-hugs', label: 'Hugs & kisses', emoji: '🤗' },
    { id: 'er-lights-off', label: 'Lights off', emoji: '💤' },
  ],
  '4-5': [
    { id: 'er-tidy-room', label: 'Tidy room', emoji: '🏠' },
    { id: 'er-bath', label: 'Bath or shower', emoji: '🛁' },
    { id: 'er-pajamas', label: 'Put on pajamas', emoji: '🌙' },
    { id: 'er-brush-teeth', label: 'Brush teeth', emoji: '🦷' },
    { id: 'er-clothes-tomorrow', label: "Pick tomorrow's clothes", emoji: '👗' },
    { id: 'er-story', label: 'Story time', emoji: '📖' },
    { id: 'er-lights-off', label: 'Lights off', emoji: '💤' },
  ],
  '6-7': [
    { id: 'er-homework', label: 'Finish homework', emoji: '📝' },
    { id: 'er-tidy-room', label: 'Tidy room', emoji: '🏠' },
    { id: 'er-shower', label: 'Shower', emoji: '🚿' },
    { id: 'er-brush-teeth', label: 'Brush teeth & floss', emoji: '🦷' },
    { id: 'er-pajamas', label: 'Put on pajamas', emoji: '🌙' },
    { id: 'er-read', label: 'Read quietly', emoji: '📖' },
    { id: 'er-lights-off', label: 'Lights off', emoji: '💤' },
  ],
  '8-10': [
    { id: 'er-homework', label: 'Homework done', emoji: '📝' },
    { id: 'er-tidy-desk', label: 'Tidy desk', emoji: '📚' },
    { id: 'er-shower', label: 'Shower', emoji: '🚿' },
    { id: 'er-brush-teeth', label: 'Brush teeth & floss', emoji: '🦷' },
    { id: 'er-clothes-tomorrow', label: "Prepare tomorrow's outfit", emoji: '👔' },
    { id: 'er-pack-bag', label: 'Pack bag for tomorrow', emoji: '🎒' },
    { id: 'er-lights-off', label: 'Lights off', emoji: '💤' },
  ],
}
