export interface LyticsUser {
  id: string
  email: string
  role: 'Owner' | 'Admin' | 'Viewer'
  dateInvited: string
  lastLogin: string
  status: 'active' | 'pending'
}

export interface AccessToken {
  id: string
  name: string
  key: string
  created: string
  lastUsed: string
  expiration: string
}

export interface ProjectSettings {
  name: string
  description: string
  id: string
  createdAt: string
  region: string
}

export const projectSettings: ProjectSettings = {
  name: "E-commerce Analytics",
  description: "Analytics and audience management for our e-commerce platform",
  id: "lyt_proj_abc123def456",
  createdAt: "Nov 01, 2025",
  region: "US East"
}

export const lyticsUsers: LyticsUser[] = [
  {
    id: "1",
    email: "admin@acmecorp.com",
    role: "Owner",
    dateInvited: "Nov 01, 2025",
    lastLogin: "Jan 07, 2026 09:15 AM",
    status: "active"
  },
  {
    id: "2",
    email: "sarah.marketing@acmecorp.com",
    role: "Admin",
    dateInvited: "Nov 15, 2025",
    lastLogin: "Jan 06, 2026 03:30 PM",
    status: "active"
  },
  {
    id: "3",
    email: "john.analyst@acmecorp.com",
    role: "Viewer",
    dateInvited: "Dec 01, 2025",
    lastLogin: "Jan 05, 2026 10:45 AM",
    status: "active"
  },
  {
    id: "4",
    email: "emma.dev@acmecorp.com",
    role: "Admin",
    dateInvited: "Jan 02, 2026",
    lastLogin: "Never",
    status: "pending"
  }
]

export const accessTokens: AccessToken[] = [
  {
    id: "1",
    name: "Production Access Token",
    key: "lyt_tok_abc123•••••••••••••",
    created: "Nov 15, 2025",
    lastUsed: "Jan 07, 2026 10:30 AM",
    expiration: "May 15, 2026"
  },
  {
    id: "2",
    name: "Development Access Token",
    key: "lyt_tok_def456•••••••••••••",
    created: "Nov 20, 2025",
    lastUsed: "Jan 06, 2026 02:15 PM",
    expiration: "May 20, 2026"
  },
  {
    id: "3",
    name: "Marketing Integration Token",
    key: "lyt_tok_ghi789•••••••••••••",
    created: "Dec 10, 2025",
    lastUsed: "Jan 07, 2026 08:00 AM",
    expiration: "Jun 10, 2026"
  },
  {
    id: "4",
    name: "Analytics Dashboard Token",
    key: "lyt_tok_jkl012•••••••••••••",
    created: "Dec 20, 2025",
    lastUsed: "Jan 05, 2026 04:22 PM",
    expiration: "Jun 20, 2026"
  }
]

export const roleOptions = [
  { value: 'Owner', label: 'Owner' },
  { value: 'Admin', label: 'Admin' },
  { value: 'Viewer', label: 'Viewer' }
]
