import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import { TrustedBy, MarketingProblem, Integrations, Security, FAQ, Footer } from "@/components/StandardSections";
import BentoAccordion from "@/components/BentoAccordion";
import AgentGrid from "@/components/AgentGrid";
import AutomationsTabs from "@/components/AutomationsTabs";
import WorkflowCanvas from "@/components/WorkflowCanvas";
import PricingSection from "@/components/PricingSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TrustedBy />
        <MarketingProblem />
        <BentoAccordion />
        <WorkflowCanvas />
        <AgentGrid />
        <AutomationsTabs />
        <Integrations />
        <Security />
        <PricingSection />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
