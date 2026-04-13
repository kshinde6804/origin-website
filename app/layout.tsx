import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { TolenWidget } from '@/components/tolen/TolenWidget'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'ORIGIN — Enterprise Data Analytics & Business Intelligence',
    template: '%s | ORIGIN',
  },
  description:
    'ORIGIN transforms raw marketplace data into clean, actionable business intelligence. Purpose-built for enterprise retail and grocery corporations.',
  keywords: ['business intelligence', 'data analytics', 'data cleaning', 'BI platform', 'ORIGIN', 'enterprise data'],
  openGraph: {
    title: 'ORIGIN — Enterprise Data Analytics & Business Intelligence',
    description: 'Transform raw data into revenue. ORIGIN\'s AI-powered platform ingests, cleans, and analyzes complex marketplace data in minutes.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-body bg-base text-[#F1F5F9] antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <TolenWidget />
      </body>
    </html>
  )
}
