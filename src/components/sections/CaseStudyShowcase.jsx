import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Cpu } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { CASE_STUDIES } from '../../data/caseStudies';
import { Badge } from '../common/Badge';

export function CaseStudyShowcase() {
  return (
    <section className="py-20 lg:py-28 border-b border-white/5 bg-[#090D17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <SectionHeading
            eyebrow="Architectural Blueprints"
            title="System Implementations & Concept Case Studies"
            description="Explore how custom web applications, WhatsApp AI agents, and Model Context Protocol pipelines solve deep operational friction."
            className="mb-0"
          />

          <Link
            to="/work"
            className="inline-flex items-center gap-2 font-display text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors shrink-0"
          >
            Browse all case studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Case Studies 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {CASE_STUDIES.slice(0, 2).map((cs) => (
            <div
              key={cs.id}
              className="rounded-2xl bg-[#0E1422] border border-white/10 p-6 sm:p-8 hover:border-blue-500/30 transition-all flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <Badge variant="accent" size="sm">
                    {cs.badge}
                  </Badge>
                  <span className="text-xs font-mono text-slate-400">
                    {cs.industry}
                  </span>
                </div>

                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
                  {cs.title}
                </h3>
                <div className="text-xs font-display text-blue-400 font-semibold mb-4">
                  {cs.clientType}
                </div>

                <p className="font-body text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {cs.summary}
                </p>

                {/* Outcome Highlights */}
                <div className="p-4 rounded-xl bg-[#151D2F] border border-white/5 space-y-2 mb-6">
                  <div className="text-[11px] font-display uppercase tracking-wider text-slate-400 font-bold">
                    Key Outcomes:
                  </div>
                  {cs.outcomes.slice(0, 2).map((out, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" />
                      <span>{out}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cs.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-black/40 border border-white/5 text-slate-400 font-mono text-[10px]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] font-body text-slate-500">
                  Concept Architecture
                </span>
                <Link
                  to={`/work/${cs.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-display font-semibold text-blue-400 hover:text-blue-300"
                >
                  View Case Study <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
