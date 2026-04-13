export interface TeamMember {
  id: string
  name: string
  role: string
  title: string
  badgeColor: string
  bio: string
  education: string
  experience: string[]
  linkedIn?: string
}

export const TEAM: TeamMember[] = [
  {
    id: 'josh-s',
    name: 'Joshua Saenz',
    role: 'Co-Founder & Chief Executive Officer',
    title: 'CEO',
    badgeColor: 'bg-[#F59E0B]/20 text-[#F59E0B] border-[#F59E0B]/30',
    bio: 'Joshua founded ORIGIN around a question he couldn\'t stop asking: why are so many businesses still struggling with the same operational inefficiencies when the technology to solve them already exists? That conviction became the foundation of ORIGIN — an intelligent platform designed to reduce friction, sharpen decision-making, and help organizations of all sizes run the way they always should have.',
    education: 'Software Engineering & Business Strategy',
    experience: [
      'AI platform architecture & product vision',
      'Operational efficiency strategy for enterprise clients',
      'Building cross-functional teams across engineering, data, and creative',
    ],
    linkedIn: 'https://www.linkedin.com/in/joshua-saenz-266025380/',
  },
  {
    id: 'gio',
    name: 'Giovaughan De La Cruz',
    role: 'Co-Founder & Chief Commercial Officer',
    title: 'CCO',
    badgeColor: 'bg-[#00D4FF]/20 text-[#00D4FF] border-[#00D4FF]/30',
    bio: 'Giovaughan leads ORIGIN\'s commercial strategy and enterprise partnerships. With a direct connection to Heritage Grocer Group (HGG) — including their e-commerce and international outsourcing departments — he bridges the gap between cutting-edge BI technology and real-world corporate needs.',
    education: 'Business & Commerce',
    experience: [
      'Enterprise partnerships with HGG & Instacart panel',
      'International e-commerce & outsourcing strategy',
      'Revenue growth and B2B sales leadership',
    ],
    linkedIn: 'https://www.linkedin.com/in/giovaughan-dlc/',
  },
  {
    id: 'hrithika',
    name: 'Hrithika Shukla',
    role: 'Co-Founder & Chief Data Officer',
    title: 'CDO',
    badgeColor: 'bg-[#7C3AED]/20 text-[#A855F7] border-[#7C3AED]/30',
    bio: 'Hrithika architects ORIGIN\'s data strategy and approves all core BI product decisions. She championed Claude AI as the backbone of ORIGIN\'s intelligence platform and ensures every data pipeline meets enterprise-grade quality standards.',
    education: 'Data Science & Analytics',
    experience: [
      'Enterprise data architecture & governance',
      'AI/ML pipeline design for BI applications',
      'Data quality and compliance frameworks',
    ],
    linkedIn: 'https://www.linkedin.com/in/hrithika-shukla/',
  },
  {
    id: 'kunal',
    name: 'Kunal Shinde',
    role: 'Co-Founder & Chief Product Officer',
    title: 'CPO',
    badgeColor: 'bg-[#2563EB]/20 text-[#60A5FA] border-[#2563EB]/30',
    bio: 'Kunal drives ORIGIN\'s product vision, ensuring every feature solves a real corporate pain point. He confirmed the Claude AI integration strategy and works closely with the team to shape solutions that are as user-friendly as they are powerful.',
    education: 'Product Management & Engineering',
    experience: [
      'SaaS product strategy & roadmap ownership',
      'Enterprise software UX and adoption',
      'Cross-functional team leadership',
    ],
    linkedIn: 'https://www.linkedin.com/in/kunal-shinde-417066293/',
  },
  {
    id: 'josh-w',
    name: 'Josh Wolf',
    role: 'Co-Founder & Chief Information Officer',
    title: 'CIO',
    badgeColor: 'bg-[#06B6D4]/20 text-[#06B6D4] border-[#06B6D4]/30',
    bio: 'Josh built ORIGIN\'s current technology infrastructure using Cursor and manages all engineering systems. He ensures ORIGIN\'s platforms are scalable, secure, and performant — keeping the tech stack ahead of enterprise demands.',
    education: 'Computer Science & Systems Engineering',
    experience: [
      'Full-stack web development (React, Next.js, Cursor)',
      'Cloud infrastructure & DevOps',
      'Systems architecture for SaaS platforms',
    ],
    linkedIn: 'https://www.linkedin.com/in/joshua-wolf12/',
  },
]
