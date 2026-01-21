export interface Audience {
  id: string
  name: string
  description: string
  size: number
  modifiedAt: string
  createdAt: string
  status: 'active' | 'draft' | 'archived'
}

export const audiences: Audience[] = [
  {
    id: "1",
    name: "High-Value Customers",
    description: "Users with lifetime value greater than $1000",
    size: 2543,
    modifiedAt: "Jan 05, 2026",
    createdAt: "Dec 01, 2025",
    status: "active"
  },
  {
    id: "2",
    name: "Cart Abandoners",
    description: "Users who added items to cart but didn't complete purchase",
    size: 1876,
    modifiedAt: "Jan 04, 2026",
    createdAt: "Dec 15, 2025",
    status: "active"
  },
  {
    id: "3",
    name: "Email Subscribers",
    description: "Users who opted in to marketing emails",
    size: 8932,
    modifiedAt: "Jan 03, 2026",
    createdAt: "Nov 20, 2025",
    status: "active"
  },
  {
    id: "4",
    name: "VIP Tier Members",
    description: "Premium membership holders with exclusive benefits",
    size: 456,
    modifiedAt: "Jan 02, 2026",
    createdAt: "Oct 10, 2025",
    status: "active"
  },
  {
    id: "5",
    name: "Recent Purchasers",
    description: "Users who made a purchase in the last 30 days",
    size: 3214,
    modifiedAt: "Dec 28, 2025",
    createdAt: "Nov 05, 2025",
    status: "draft"
  },
  {
    id: "6",
    name: "Inactive Users",
    description: "Users with no activity in the last 90 days",
    size: 5621,
    modifiedAt: "Dec 20, 2025",
    createdAt: "Sep 15, 2025",
    status: "archived"
  }
]
