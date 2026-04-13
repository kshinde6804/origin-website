import { HeroSection } from '@/components/home/HeroSection'
import { ClientLogosSection } from '@/components/home/ClientLogosSection'
import { ServicesSection } from '@/components/home/ServicesSection'
import { ProblemSolutionSection } from '@/components/home/ProblemSolutionSection'
import { HowItWorksSection } from '@/components/home/HowItWorksSection'
import { HomeCTA } from '@/components/home/HomeCTA'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ClientLogosSection />
      <ServicesSection />
      <ProblemSolutionSection />
      <HowItWorksSection />
      <HomeCTA />
    </>
  )
}
