import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Database, Bot, TrendingUp, Share2, BarChart3, CheckCircle2 } from 'lucide-react';
import { SEO } from '../../components/common/SEO';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { SOLUTIONS } from '../../data/solutions';
import { Badge } from '../../components/common/Badge';
import { CtaBanner } from '../../components/sections/CtaBanner';

export function SolutionsOverviewPage() {
  const iconMap = {
    'digital-products': Layers,
    'crm-erp': Database,
    'ai-automation': Bot,
    'marketing': TrendingUp,
    'business-intelligence': BarChart3
  };

  return (
    <>
      <SEO
        title="Solutions Architecture |nm inovation Digital Systems"
        description="Explore the six integrated pillars of modern digital operations: Digital Products, AI Automation, CRM/ERP Systems, Marketing Systems, and Business Intelligence."
        canonical="/solutions"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Breadcrumbs items={[{ label: 'Solutions' }]} />
      </div>

      <section className="py-12 lg:py-16 border-b border-white/5 bg-tech-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Integrated Architecture"
            title="Six Pillars of Modern Digital Operations"
            description="We architect connected digital ecosystems that link customer acquisition to autonomous operations and executive telemetry."
          />
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[#080C14] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {SOLUTIONS.map((sol) => {
            const Icon = iconMap[sol.slug] || Layers;

            return (
              <div
                key={sol.id}
                className="rounded-2xl bg-[#0E1422] border border-white/10 p-6 sm:p-8 lg:p-10 hover:border-blue-500/30 transition-all shadow-xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-7">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-mono text-xs font-bold text-blue-400">
                        PILLAR {sol.number}
                      </span>
                      <Badge variant="accent" size="sm">
                        {sol.title}
                      </Badge>
                    </div>

                    <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4">
                      {sol.headline}
                    </h2>

                    <p className="font-body text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                      {sol.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                      {sol.subItems.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
                    <div className="p-5 rounded-xl bg-[#151D2F] border border-white/5 space-y-2 text-xs">
                      <div className="font-display font-bold uppercase tracking-wider text-blue-400 mb-2">
                        Architectural Standard:
                      </div>
                      {Object.entries(sol.architecture).map(([k, v]) => (
                        <div key={k} className="flex justify-between font-mono text-[11px]">
                          <span className="text-slate-400 capitalize">{k}:</span>
                          <span className="text-slate-200 truncate ml-2">{v}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      to={`/solutions/${sol.slug}`}
                      className="inline-flex items-center justify-center gap-2 w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-display font-semibold text-xs rounded-xl transition-colors shadow-sm"
                    >
                      Deep-Dive {sol.title} Architecture <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
