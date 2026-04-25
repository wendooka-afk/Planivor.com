export type AgeGroup = '2-3' | '4-5' | '6-7' | '8-10'

export interface ChoreItem {
  id: string
  label: string
  emoji: string
}

export const AGE_GROUPS: { value: AgeGroup; label: string; description: string }[] = [
  { value: '2-3', label: 'Ages 2–3', description: 'Toddler' },
  { value: '4-5', label: 'Ages 4–5', description: 'Preschool' },
  { value: '6-7', label: 'Ages 6–7', description: 'Early School' },
  { value: '8-10', label: 'Ages 8–10', description: 'School Age' },
]

export const CHORES_BY_AGE: Record<AgeGroup, ChoreItem[]> = {
  '2-3': [
    { id: 'pick-up-toys', label: 'Pick up toys', emoji: '🧸' },
    { id: 'put-clothes-hamper', label: 'Put clothes in hamper', emoji: '👕' },
    { id: 'wipe-spills', label: 'Wipe small spills', emoji: '🧹' },
    { id: 'put-books-away', label: 'Put books away', emoji: '📚' },
    { id: 'throw-trash', label: 'Throw trash in bin', emoji: '🗑️' },
    { id: 'feed-self', label: 'Put plate in sink', emoji: '🍽️' },
    { id: 'tidy-shoes', label: 'Tidy shoes at door', emoji: '👟' },
  ],
  '4-5': [
    { id: 'make-bed', label: 'Make bed', emoji: '🛏️' },
    { id: 'brush-teeth', label: 'Brush teeth', emoji: '🦷' },
    { id: 'set-table', label: 'Set the table', emoji: '🍴' },
    { id: 'clear-plate', label: 'Clear own plate', emoji: '🍽️' },
    { id: 'water-plant', label: 'Water a plant', emoji: '🌱' },
    { id: 'put-toys-away', label: 'Put toys away neatly', emoji: '🧩' },
    { id: 'wash-hands', label: 'Wash hands before meals', emoji: '🧼' },
  ],
  '6-7': [
    { id: 'fold-clothes', label: 'Fold clothes', emoji: '👔' },
    { id: 'load-dishwasher', label: 'Load dishwasher', emoji: '🫧' },
    { id: 'tidy-room', label: 'Tidy room', emoji: '🏠' },
    { id: 'sweep-floor', label: 'Sweep floor', emoji: '🧹' },
    { id: 'pack-school-bag', label: 'Pack school bag', emoji: '🎒' },
    { id: 'feed-pet', label: 'Feed pet', emoji: '🐾' },
    { id: 'wipe-table', label: 'Wipe dining table', emoji: '✨' },
  ],
  '8-10': [
    { id: 'feed-pet-8', label: 'Feed pet', emoji: '🐾' },
    { id: 'take-out-trash', label: 'Take out trash', emoji: '🗑️' },
    { id: 'organize-desk', label: 'Organize desk', emoji: '📚' },
    { id: 'vacuum-room', label: 'Vacuum room', emoji: '🌀' },
    { id: 'do-laundry', label: 'Help with laundry', emoji: '👕' },
    { id: 'wash-dishes', label: 'Wash dishes', emoji: '🫧' },
    { id: 'prep-lunch', label: 'Help prep lunch', emoji: '🥪' },
  ],
}

export const DAYS_OF_WEEK = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
