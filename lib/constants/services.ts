export interface Service {
  id: string
  icon: string
  iconColor: string
  title: string
  description: string
  features: string[]
}

export const SERVICES: Service[] = [
  {
    id: 'ingestion',
    icon: 'Database',
    iconColor: 'text-[#00D4FF]',
    title: 'Universal Data Ingestion',
    description: 'Connect any marketplace, platform, or data source. ORIGIN ingests raw, complex datasets from any format — no matter how messy.',
    features: [
      'Multi-marketplace connector (Amazon, Instacart, Walmart+)',
      'Supports CSV, JSON, XML, API feeds',
      'Real-time and batch ingestion modes',
    ],
  },
  {
    id: 'cleaning',
    icon: 'Sparkles',
    iconColor: 'text-[#A855F7]',
    title: 'AI-Powered Data Cleaning',
    description: 'Our intelligent pipeline normalizes, deduplicates, and structures your raw data in minutes — not days. Enterprise-grade accuracy at scale.',
    features: [
      'Automated deduplication and normalization',
      'Smart field mapping and schema inference',
      'Audit trail for data governance compliance',
    ],
  },
  {
    id: 'analytics',
    icon: 'BarChart3',
    iconColor: 'text-[#06B6D4]',
    title: 'BI Analytics & Reporting',
    description: 'Transform clean data into decision-ready dashboards. Track conversion rates, CTR, CPC, traffic patterns, and custom KPIs in real time.',
    features: [
      'Interactive dashboards with drill-down capability',
      'Key metrics: CTR, CPC, conversion rates, traffic',
      'Exportable professional reports',
    ],
  },
  {
    id: 'tolen',
    icon: 'BrainCircuit',
    iconColor: 'text-[#7C3AED]',
    title: 'Tolen AI Insights',
    description: 'Meet Tolen — your AI business advisor. It learns your business, surfaces hidden opportunities, and recommends the exact actions to drive growth.',
    features: [
      'Natural language data Q&A',
      'Proactive error and anomaly detection',
      'Personalized tool and strategy recommendations',
    ],
  },
]
