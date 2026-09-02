import { SEO } from '../../components/common/SEO';
import { HeroBusinessOS } from '../../components/sections/HeroBusinessOS';
import { TrustCredibility } from '../../components/sections/TrustCredibility';
import { ProblemComparison } from '../../components/sections/ProblemComparison';
import { SolutionsMatrix } from '../../components/sections/SolutionsMatrix';
import { SystemBuilder } from '../../components/sections/SystemBuilder';
import { WorkflowAutomation } from '../../components/sections/WorkflowAutomation';
import { McpWorkspaceSimulator } from '../../components/sections/McpWorkspaceSimulator';
import { SocialMediaEngine } from '../../components/sections/SocialMediaEngine';
import { IndustryGrid } from '../../components/sections/IndustryGrid';
import { ProcessTimeline } from '../../components/sections/ProcessTimeline';
import { TechEcosystem } from '../../components/sections/TechEcosystem';
import { CaseStudyShowcase } from '../../components/sections/CaseStudyShowcase';
import { PricingPaths } from '../../components/sections/PricingPaths';
import { CtaBanner } from '../../components/sections/CtaBanner';

export function HomePage() {
  return (
    <>
      <SEO
        title="We Build, Automate and Grow Modern Businesses"
        description="We build the digital systems that help modern businesses attract customers, automate operations and scale. Unified web platforms, CRM/ERP cores, and autonomous AI workflows."
        canonical="/"
      />

      <HeroBusinessOS />
      <TrustCredibility />
      <ProblemComparison />
      <SolutionsMatrix />
      <SystemBuilder />
      <WorkflowAutomation />
      <McpWorkspaceSimulator />
      <SocialMediaEngine />
      <IndustryGrid />
      <ProcessTimeline />
      <TechEcosystem />
      <CaseStudyShowcase />
      <PricingPaths />
      <CtaBanner />
    </>
  );
}
