export interface Experience {
  id: string
  priority: number
  name: string
  shortUid: string
  status: 'Active' | 'Inactive' | 'Draft'
  type: 'Segmented' | 'Default' | 'Personalized'
  audiences: number
  activatedAt: string
  activatedBy: string
  description: string
  uniqueId: string
  modifiedAt: string
  createdAt: string
}

export const mockExperiences: Experience[] = [
  {
    id: '1',
    priority: 1,
    name: 'Test Segment',
    shortUid: '0',
    status: 'Active',
    type: 'Segmented',
    audiences: 1,
    activatedAt: 'Jul 02, 2025 11:07 AM',
    activatedBy: 'Andrew Seatter',
    description: '-',
    uniqueId: '6865754793I6d787297ddef8',
    modifiedAt: 'Jul 02, 2025 11:07 AM',
    createdAt: 'Jul 02, 2025 11:07 AM'
  }
]
