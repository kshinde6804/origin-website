'use client'

import { useState, useCallback } from 'react'

export interface TolenMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

const RESPONSES: { keywords: string[]; reply: string }[] = [
  {
    keywords: ['hello', 'hi', 'hey', 'greetings'],
    reply: "Hello! I'm Tolen, ORIGIN's AI business advisor. I help corporations turn messy data into clean, actionable intelligence. How can I help your business today?",
  },
  {
    keywords: ['data', 'clean', 'cleaning', 'raw', 'ingest', 'ingestion', 'normalize'],
    reply: "ORIGIN's data pipeline can ingest raw exports from any marketplace — Amazon, Instacart, Walmart+, and more. Our AI normalizes, deduplicates, and structures your data in minutes, not days. Want to see a demo of how this works with your specific data source?",
  },
  {
    keywords: ['demo', 'book', 'schedule', 'meeting', 'trial', 'try'],
    reply: "I'd love to set that up! You can book a personalized demo with our team at hello@origindata.ai — we'll walk you through the full platform with your actual data use case. Response time is typically within 24 hours.",
  },
  {
    keywords: ['price', 'pricing', 'cost', 'plan', 'enterprise', 'subscription'],
    reply: "ORIGIN is priced for enterprise needs with predictable, transparent costs. We customize every plan based on data volume, number of integrations, and team size. Reach out to hello@origindata.ai for a tailored quote — no hidden fees.",
  },
  {
    keywords: ['tolen', 'ai', 'assistant', 'agent', 'intelligence'],
    reply: "That's me! Tolen is ORIGIN's AI business advisor. I can analyze your data, surface anomalies, recommend tools, answer questions in plain English, and learn your specific business over time. Think of me as the data analyst you always needed but never had.",
  },
  {
    keywords: ['about', 'origin', 'company', 'team', 'who', 'founded'],
    reply: "ORIGIN was founded by Giovaughan, Hrithika, Kunal, and Josh — a team of data, product, and engineering experts. Our mission: make enterprise-grade BI accessible to every corporation. We're backed by deep connections in the grocery industry and building toward the future of data-driven commerce.",
  },
  {
    keywords: ['grocery', 'retail', 'hgg', 'instacart', 'marketplace'],
    reply: "Grocery and retail are ORIGIN's core focus. We solve the exact data ingestion challenges that major chains like Heritage Grocer Group face — raw SKU data, marketplace discrepancies, and cross-platform normalization. Our platform is purpose-built for the complexity of modern grocery e-commerce.",
  },
  {
    keywords: ['analytics', 'report', 'dashboard', 'metrics', 'kpi', 'ctr', 'cpc', 'conversion'],
    reply: "ORIGIN tracks the metrics that matter most — CTR, CPC, conversion rates, traffic movement, and custom KPIs defined by your business. Dashboards update in real time and every report is exportable to support executive presentations and board reviews.",
  },
  {
    keywords: ['event', 'ces', 'hackathon', 'zoom', 'community'],
    reply: "We host weekly Zoom community rooms every Thursday where you can see live demos and ask questions. We also participate in major industry events like CES. Check our Events page for upcoming sessions — we'd love to see you there!",
  },
]

const SUGGESTION_CHIPS = [
  'How does ORIGIN work?',
  'What is Tolen?',
  'Book a demo',
  'Tell me about pricing',
]

function getReply(input: string): string {
  const lower = input.toLowerCase()
  for (const { keywords, reply } of RESPONSES) {
    if (keywords.some((kw) => lower.includes(kw))) return reply
  }
  return "Great question! I'm still learning from every conversation. For a detailed answer, reach out to our team at hello@origindata.ai — or ask me about ORIGIN's services, data cleaning, pricing, or how to book a demo."
}

export function useTolenChat() {
  const [messages, setMessages] = useState<TolenMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: "Hi! I'm Tolen — ORIGIN's AI business advisor. Ask me anything about our data analytics platform, or pick one of the suggestions below to get started.",
      timestamp: new Date(),
    },
  ])
  const [isTyping, setIsTyping] = useState(false)

  const sendMessage = useCallback((content: string) => {
    const userMsg: TolenMessage = {
      id: Date.now().toString(),
      role: 'user',
      content,
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMsg])
    setIsTyping(true)

    setTimeout(() => {
      const reply = getReply(content)
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: reply,
          timestamp: new Date(),
        },
      ])
      setIsTyping(false)
    }, 800 + Math.random() * 600)
  }, [])

  return { messages, isTyping, sendMessage, suggestions: SUGGESTION_CHIPS }
}
