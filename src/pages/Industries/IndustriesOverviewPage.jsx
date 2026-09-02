import { Link } from 'react-router-dom';
import { ArrowRight, Building, Stethoscope, GraduationCap, ShoppingBag, Factory, Briefcase, CheckCircle2 } from 'lucide-react';
import { SEO } from '../../components/common/SEO';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { INDUSTRIES } from '../../data/industries';
import { Badge } from '../../components/common/Badge';
import { CtaBanner } from '../../components/sections/CtaBanner';

export function IndustriesOverviewPage() {
  const iconMap = {
    'real-estate': Building,
    'healthcare': Stethoscope,
    'education': GraduationCap,
    'ecommerce': ShoppingBag,
    'manufacturing': Factory,
    'professional-services': Briefcase
  };

  return (
    <>
      <SEO
        title="Industry-Specific Digital Operating Systems |nm inovation"
        description="Tailored digital architectures for Real Estate, Healthcare, Education, E-commerce, Manufacturing, and Professional Services."
        canonical="/industries"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Breadcrumbs items={[{ label: 'Industries' }]} />
      </div>

      <section className="py-12 lg:py-16 border-b border-white/5 bg-tech-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Vertical Frameworks"
            title="Systems Built for Specific Operational Models"
            description="Every industry faces unique customer qualification and workflow bottlenecks. We engineer custom architectures tailored to your sector."
          />
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[#080C14] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {INDUSTRIES.map((ind) => {
            const Icon = iconMap[ind.id] || Building;

            return (
              <div
                key={ind.id}
                className="rounded-2xl bg-[#0E1422] border border-white/10 p-6 sm:p-8 lg:p-10 hover:border-blue-500/30 transition-all shadow-xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  <div className="lg:col-span-7">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <Badge variant="accent" size="sm">
                          {ind.heroTag}
                        </Badge>
                        <h2 className="font-heading text-xl sm:text-2xl font-bold text-white mt-1">
                          {ind.name}
                        </h2>
                      </div>
                    </div>

                    <p className="font-body text-sm text-slate-300 leading-relaxed mb-6">
                      {ind.overview}
                    </p>

                    <div className="space-y-3 p-4 rounded-xl bg-black/40 border border-white/5 mb-6">
                      <div className="text-xs font-body text-rose-300">
                        <span className="font-bold font-display uppercase tracking-wider text-rose-400">The Problem: </span>
                        {ind.problem}
                      </div>
                      <div className="text-xs font-body text-slate-200">
                        <span className="font-bold font-display uppercase tracking-wider text-blue-400">Our Solution: </span>
                        {ind.solution}
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
                    <div className="p-5 rounded-xl bg-[#151D2F] border border-white/5 space-y-2">
                      <div className="text-xs font-display font-bold uppercase tracking-wider text-blue-400 mb-2">
                        Key Automation Opportunities:
                      </div>
                      <ul className="space-y-1.5 text-xs text-slate-300 list-none p-0 m-0">
                        {ind.automation.slice(0, 3).map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      to={`/industries/${ind.slug}`}
                      className="inline-flex items-center justify-center gap-2 w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-display font-semibold text-xs rounded-xl transition-colors shadow-sm"
                    >
                      View {ind.name} System Framework <ArrowRight className="w-4 h-4" />
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
