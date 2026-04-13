export type EventCategory = 'conference' | 'hackathon' | 'community' | 'charity'

export interface OriginEvent {
  id: string
  category: EventCategory
  title: string
  date: string
  location: string
  description: string
  ctaLabel?: string
  ctaHref?: string
  isFeatured?: boolean
}

export const EVENTS: OriginEvent[] = [
  {
    id: 'ces-2026',
    category: 'conference',
    title: 'CES 2026 — Consumer Electronics Show',
    date: 'January 2026',
    location: 'Las Vegas, NV',
    description: 'ORIGIN will be showcasing Tolen AI and our data ingestion platform to Fortune 500 leaders at the world\'s most influential tech event. Come see how we\'re redefining business intelligence.',
    ctaLabel: 'Learn More',
    ctaHref: '#',
    isFeatured: true,
  },
  {
    id: 'grocery-tech-2026',
    category: 'conference',
    title: 'Grocery Tech Summit 2026',
    date: 'Q2 2026',
    location: 'TBD',
    description: 'We\'re joining the leading minds in grocery e-commerce to demonstrate how ORIGIN solves the raw data ingestion challenges that even multibillion-dollar chains like HGG face daily.',
    ctaLabel: 'Stay Tuned',
    ctaHref: '#',
  },
  {
    id: 'origin-hackathon',
    category: 'hackathon',
    title: 'ORIGIN Internal Hackathon',
    date: 'Monthly',
    location: 'Virtual',
    description: 'Every month, our team pushes the boundaries of what ORIGIN can do. These sprints produce the innovations that become your next features — faster data pipelines, smarter AI, better UX.',
    ctaLabel: 'Follow Our Progress',
    ctaHref: '#',
  },
  {
    id: 'partner-hackathon',
    category: 'hackathon',
    title: 'Partner & Community Hackathons',
    date: 'Ongoing',
    location: 'Various',
    description: 'ORIGIN competes in and sponsors external hackathons focused on AI, data engineering, and retail tech — collaborating with developers and researchers driving the next wave of BI innovation.',
    ctaLabel: 'Get Involved',
    ctaHref: '#',
  },
  {
    id: 'zoom-community',
    category: 'community',
    title: 'ORIGIN Community Zoom Rooms',
    date: 'Every Thursday',
    location: 'Virtual (Zoom)',
    description: 'Join our weekly community sessions where we demo new features, answer live questions, and share updates on Tolen AI\'s latest capabilities. Open to clients, partners, and the curious.',
    ctaLabel: 'Register for Free',
    ctaHref: '#',
    isFeatured: true,
  },
  {
    id: 'product-updates',
    category: 'community',
    title: 'Live Product Update Sessions',
    date: 'Monthly',
    location: 'Virtual',
    description: 'Get a first look at new programs, integrations, and server updates before they go live. Direct access to our engineering and product teams to ask questions and shape the roadmap.',
    ctaLabel: 'Join Waitlist',
    ctaHref: '#',
  },
  {
    id: 'community-meetup',
    category: 'charity',
    title: 'ORIGIN Community Meet-Up',
    date: 'Quarterly',
    location: 'Los Angeles, CA',
    description: 'Meet the founders behind ORIGIN in person. We host quarterly community events to connect with clients, partners, and the broader tech community — with food, networking, and demos.',
    ctaLabel: 'RSVP',
    ctaHref: '#',
  },
  {
    id: 'charity-drive',
    category: 'charity',
    title: 'Tech for Good — ORIGIN Charity Initiative',
    date: '2026',
    location: 'Various',
    description: 'ORIGIN is committed to giving back. We partner with nonprofits to provide free BI tools and data literacy training to underserved communities and small businesses.',
    ctaLabel: 'Learn About Our Mission',
    ctaHref: '#',
  },
]
