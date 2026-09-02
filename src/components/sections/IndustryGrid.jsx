import { Link } from 'react-router-dom';
import { ArrowRight, Building, Stethoscope, GraduationCap, ShoppingBag, Factory, Briefcase } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { INDUSTRIES } from '../../data/industries';

export function IndustryGrid() {
  const iconMap = {
    'real-estate': Building,
    'healthcare': Stethoscope,
    'education': GraduationCap,
    'ecommerce': ShoppingBag,
    'manufacturing': Factory,
    'professional-services': Briefcase
  };

  return (
    <section className="py-20 lg:py-28 border-b border-white/5 bg-[#080C14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <SectionHeading
            eyebrow="Industry Specialization"
            title="Tailored Operating Systems for Specific Business Models"
            description="We understand that a real estate brokerage, a medical group, and an industrial distributor have fundamentally different operational bottlenecks."
            className="mb-0"
          />

          <Link
            to="/industries"
            className="inline-flex items-center gap-2 font-display text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors shrink-0"
          >
            Explore all industry frameworks <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 6 Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((ind) => {
            const Icon = iconMap[ind.id] || Building;

            return (
              <div
                key={ind.id}
                className="group rounded-2xl bg-[#0E1422] border border-white/10 p-6 hover:border-blue-500/40 hover:bg-[#151D2F] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center border border-blue-500/30 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 bg-white/5 px-2.5 py-1 rounded">
                      {ind.heroTag}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {ind.name}
                  </h3>

                  <p className="font-body text-xs text-slate-400 leading-relaxed mb-4">
                    {ind.overview}
                  </p>

                  <div className="p-3 rounded-lg bg-black/30 border border-white/5 mb-4 text-xs font-body text-slate-300">
                    <div className="font-display font-semibold text-[11px] text-blue-400 mb-1">
                      Target Outcome:
                    </div>
                    {ind.outcome}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-500">
                    {ind.automation.length} Automated Flows
                  </span>
                  <Link
                    to={`/industries/${ind.slug}`}
                    className="text-xs font-display font-semibold text-blue-400 hover:text-blue-300 inline-flex items-center gap-1"
                  >
                    View System <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
