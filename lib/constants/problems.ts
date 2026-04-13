export interface ProblemSolutionPair {
  id: string
  problem: string
  problemDetail: string
  solution: string
  solutionDetail: string
}

export const PROBLEMS: ProblemSolutionPair[] = [
  {
    id: 'quality',
    problem: 'Data Quality & Governance',
    problemDetail: 'Inconsistent, inaccurate, or siloed data makes it impossible to generate trusted insights — leading to costly business decisions.',
    solution: 'Automated Data Governance',
    solutionDetail: 'ORIGIN validates, normalizes, and audits every record. Full lineage tracking ensures you always know where your data came from and how it was transformed.',
  },
  {
    id: 'adoption',
    problem: 'Low User Adoption',
    problemDetail: 'Only ~25% of employees actively use BI tools. Most are too complex, don\'t solve daily problems, and require data science expertise.',
    solution: 'Intuitive, Actionable UX',
    solutionDetail: 'ORIGIN is built for business users — not just data teams. Natural language queries, plain-English summaries, and one-click reports make insights accessible to everyone.',
  },
  {
    id: 'cultural',
    problem: 'Cultural Resistance',
    problemDetail: 'BI is often treated as a one-time IT project rather than an ongoing business strategy, leaving insights disconnected from daily operations.',
    solution: 'Continuous Intelligence Culture',
    solutionDetail: 'Tolen AI surfaces relevant insights proactively — in Slack, email, or dashboard — building a culture where data-driven decisions happen naturally, every day.',
  },
  {
    id: 'cost',
    problem: 'Technical & Cost Hurdles',
    problemDetail: 'High licensing costs, months-long implementations, and slow query performance on legacy BI platforms frustrate teams and drain budgets.',
    solution: 'Fast Deployment, Transparent Pricing',
    solutionDetail: 'ORIGIN runs on our servers — no expensive infrastructure. Go from raw data to clean insights in minutes. Enterprise pricing with predictable costs at every tier.',
  },
  {
    id: 'skills',
    problem: 'Skills Gap',
    problemDetail: 'Most organizations lack personnel who can translate complex raw data into clear, actionable business strategies without months of training.',
    solution: 'AI-Augmented Expertise',
    solutionDetail: 'Tolen AI acts as an on-demand data analyst. It explains findings in plain language, suggests next steps, and upskills your team over time through every interaction.',
  },
]
