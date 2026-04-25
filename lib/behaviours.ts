import type { AgeGroup } from '@/lib/chores'

export interface BehaviourItem {
  id: string
  label: string
  emoji: string
}

export const BEHAVIOURS_BY_AGE: Record<AgeGroup, BehaviourItem[]> = {
  '2-3': [
    { id: 'share-toys', label: 'Shared my toys', emoji: '🧸' },
    { id: 'say-please', label: 'Said please & thank you', emoji: '🙏' },
    { id: 'try-new-food', label: 'Tried a new food', emoji: '🍎' },
    { id: 'got-dressed', label: 'Got dressed by myself', emoji: '👕' },
    { id: 'gentle-hands', label: 'Used gentle hands', emoji: '🤲' },
    { id: 'listen-first', label: 'Listened the first time', emoji: '👂' },
    { id: 'help-clean-up', label: 'Helped clean up', emoji: '🧹' },
  ],
  '4-5': [
    { id: 'listen-b', label: 'Listened without being asked twice', emoji: '👂' },
    { id: 'kind-friends', label: 'Was kind to friends', emoji: '🤝' },
    { id: 'stayed-calm', label: 'Stayed calm when upset', emoji: '😌' },
    { id: 'tidy-without-ask', label: 'Helped tidy up without asking', emoji: '🏠' },
    { id: 'shared', label: 'Shared with others', emoji: '💝' },
    { id: 'try-best', label: 'Tried my best', emoji: '💪' },
    { id: 'good-manners', label: 'Used good manners', emoji: '🎀' },
  ],
  '6-7': [
    { id: 'homework-b', label: 'Completed homework on time', emoji: '📚' },
    { id: 'kind-sibling', label: 'Was kind to my sibling', emoji: '💕' },
    { id: 'patient', label: 'Practiced patience', emoji: '⏳' },
    { id: 'good-choices', label: 'Made good choices', emoji: '✨' },
    { id: 'helpful-b', label: 'Was helpful without being asked', emoji: '🤗' },
    { id: 'honest', label: 'Was honest', emoji: '💎' },
    { id: 'stay-positive', label: 'Stayed positive', emoji: '🌟' },
  ],
  '8-10': [
    { id: 'managed-time', label: 'Managed my time well', emoji: '⏰' },
    { id: 'responsible', label: 'Showed responsibility', emoji: '🏆' },
    { id: 'support-sibling', label: 'Supported my sibling', emoji: '💪' },
    { id: 'homework-no-remind', label: 'Did homework without reminders', emoji: '📚' },
    { id: 'positive-hard', label: 'Stayed positive when things were hard', emoji: '🌟' },
    { id: 'respectful', label: 'Was respectful to adults', emoji: '🎖️' },
    { id: 'self-control', label: 'Showed self-control', emoji: '🧘' },
  ],
}
