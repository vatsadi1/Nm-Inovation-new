import { Link } from 'react-router-dom';
import { TrendingUp, CheckCircle2, ArrowRight, Share2, BarChart2, Zap } from 'lucide-react';
import { SEO } from '../../components/common/SEO';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { Button } from '../../components/common/Button';
import { SocialMediaEngine } from '../../components/sections/SocialMediaEngine';
import { CtaBanner } from '../../components/sections/CtaBanner';

export function MarketingSystemsPage() {
  const mktFeatures = [
    { title: 'Google High-Intent Search Ads', desc: 'Capture active demand with structured campaigns, negative keyword algorithms, and high-converting landing page variants.' },
    { title: 'Meta Conversion API (CAPI)', desc: 'Server-side conversion tracking resilient against browser ad-blockers, feeding true closed revenue back into ad algorithms.' },
    { title: 'Technical & Programmatic SEO', desc: 'Engineered HTML semantics, schema markup, and dynamic location/service landing page architecture for organic search dominance.' },
    { title: 'Social Content Automation Engine', desc: 'Semi-automated workflows that turn customer wins and case studies into scheduled multi-platform posts.' },
    { title: 'Automated Lead Nurturing Loops', desc: 'Multi-touchpoint SMS, WhatsApp, and email sequences that re-engage cold prospects automatically.' },
    { title: 'Lead Cost & Acquisition Attribution', desc: 'Real-time calculation of true cost-per-lead and cost-per-acquisition linked directly to CRM revenue.' }
  ];

  return (
    <>
      <SEO
        title="Marketing Systems & Growth Engineering |nm inovation"
        description="Systematized customer acquisition: Google Search Ads, Meta Conversion API, Technical SEO, and automated Social Content generation."
        canonical="/solutions/marketing"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Breadcrumbs
          items={[
            { label: 'Solutions', href: '/solutions' },
            { label: 'Marketing Systems & Content' }
          ]}
        />
      </div>

      <section className="py-12 lg:py-20 border-b border-white/5 bg-tech-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-display font-semibold uppercase tracking-wider mb-6">
              <TrendingUp className="w-3.5 h-3.5" />
              Solution Pillars 04 & 05
            </div>

            <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-6">
              Marketing Systems & Content Automation Engines
            </h1>

            <p className="font-body text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              Acquisition is not guesswork—it is a repeatable engineering problem. We build synchronized acquisition engines combining paid search, Meta performance ads, server-side tracking, and automated content scheduling.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button to="/contact" variant="primary" size="md" icon={ArrowRight}>
                Scale Your Marketing System
              </Button>
              <Button to="/ai-audit" variant="secondary" size="md">
                System Readiness Audit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Social Media Pipeline */}
      <SocialMediaEngine />

      {/* Capabilities */}
      <section className="py-16 lg:py-24 bg-[#080C14] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Capabilities"
            title="Systematic Acquisition Infrastructure"
            description="Our marketing systems link directly into your CRM deal stages so every marketing dollar is accountable."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mktFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0E1422] border border-white/10 hover:border-blue-500/30 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-600/10 text-blue-400 flex items-center justify-center font-mono font-bold text-xs mb-4">
                  0{idx + 1}
                </div>
                <h3 className="font-display font-bold text-base text-white mb-2">
                  {feat.title}
                </h3>
                <p className="font-body text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
