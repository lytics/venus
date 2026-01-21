export interface LyticsProject {
  id: string
  title: string
  organization: string
  audiences: number
  lastSync: string
}

export const lyticsProjects: LyticsProject[] = [
  {
    id: "1",
    title: "E-commerce Analytics",
    organization: "Acme Corp",
    audiences: 12,
    lastSync: "Jan 07, 2026 10:30 AM"
  },
  {
    id: "2",
    title: "Marketing Platform",
    organization: "TechStart Inc",
    audiences: 8,
    lastSync: "Jan 07, 2026 09:15 AM"
  },
  {
    id: "3",
    title: "Customer Insights",
    organization: "Global Retail",
    audiences: 15,
    lastSync: "Jan 06, 2026 11:45 PM"
  }
]
