import { useParams, Navigate, Link } from 'react-router-dom';
import { 
  Building, 
  Stethoscope, 
  GraduationCap, 
  ShoppingBag, 
  Factory, 
  Briefcase, 
  CheckCircle2, 
  ArrowRight,
  AlertCircle,
  Zap,
  ShieldCheck
} from 'lucide-react';
import { SEO } from '../../components/common/SEO';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { INDUSTRIES } from '../../data/industries';
import { CtaBanner } from '../../components/sections/CtaBanner';

export function IndustryDetailPage({ customSlug }) {
  const { slug } = useParams();
  const targetSlug = customSlug || slug;

  const industry = INDUSTRIES.find((i) => i.slug === targetSlug);

  if (!industry) {
    return <Navigate to="/industries" replace />;
  }

  const iconMap = {
    'real-estate': Building,
    'healthcare': Stethoscope,
    'education': GraduationCap,
    'ecommerce': ShoppingBag,
    'manufacturing': Factory,
    'professional-services': Briefcase
  };

  const Icon = iconMap[industry.id] || Building;

  return (
    <>
      <SEO
        title={`${industry.name} Digital Operating Systems |nm inovation`}
        description={industry.overview}
        canonical={`/industries/${industry.slug}`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Breadcrumbs
          items={[
            { label: 'Industries', href: '/industries' },
            { label: industry.name }
          ]}
        />
      </div>

      {/* Hero */}
      <section className="py-12 lg:py-20 border-b border-white/5 bg-tech-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-display font-semibold uppercase tracking-wider mb-6">
              <Icon className="w-3.5 h-3.5" />
              {industry.heroTag}
            </div>

            <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-6">
              {industry.name}: Digital Operating Systems & Automation
            </h1>

            <p className="font-body text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              {industry.overview}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button to="/contact" variant="primary" size="md" icon={ArrowRight}>
                Consult on {industry.name} System
              </Button>
              <Button to="/ai-audit" variant="secondary" size="md">
                Take Automation Readiness Audit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Breakdown */}
      <section className="py-16 lg:py-24 bg-[#090D17] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* The Industry Problem */}
            <div className="rounded-2xl bg-[#0E1422] border border-rose-900/30 p-6 sm:p-8">
              <div className="flex items-center gap-2 text-rose-400 font-display text-xs font-bold uppercase tracking-wider mb-4">
                <AlertCircle className="w-4 h-4" />
                The Core Operational Problem
              </div>
              <p className="font-body text-sm sm:text-base text-slate-300 leading-relaxed">
                {industry.problem}
              </p>
            </div>

            {/* Thenm inovation System Solution */}
            <div className="rounded-2xl bg-[#0E1422] border border-blue-500/30 p-6 sm:p-8 shadow-xl">
              <div className="flex items-center gap-2 text-blue-400 font-display text-xs font-bold uppercase tracking-wider mb-4">
                <Zap className="w-4 h-4" />
                The Digital Innovation System Solution
              </div>
              <p className="font-body text-sm sm:text-base text-slate-300 leading-relaxed">
                {industry.solution}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Automation Flows */}
      <section className="py-16 lg:py-24 bg-[#080C14] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Workflow Engineering"
            title="Automated Opportunities in This Sector"
            description="Specific event-driven workflows designed to eliminate manual administrative friction."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {industry.automation.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#0E1422] border border-white/10 flex items-start gap-3.5 hover:border-blue-500/30 transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-blue-600/10 text-blue-400 flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5">
                  0{idx + 1}
                </div>
                <p className="font-body text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* Expected Outcome */}
          <div className="mt-8 p-6 rounded-2xl bg-blue-950/20 border border-blue-500/30">
            <div className="flex items-center gap-2 text-blue-400 font-display text-xs font-bold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4" />
              Target Operational Outcome
            </div>
            <p className="font-body text-sm text-white font-medium">
              {industry.outcome}
            </p>
          </div>

        </div>
      </section>

      <CtaBanner />
    </>
  );
}
