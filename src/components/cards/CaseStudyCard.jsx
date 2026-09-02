import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Badge } from '../common/Badge';

export function CaseStudyCard({ caseStudy }) {
  return (
    <div className="group rounded-2xl bg-[#0E1422] border border-white/10 p-6 sm:p-8 hover:border-blue-500/40 hover:bg-[#151D2F] transition-all flex flex-col justify-between shadow-xl">
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <Badge variant="accent" size="sm">
            {caseStudy.badge}
          </Badge>
          <span className="text-xs font-mono text-slate-400">
            {caseStudy.industry}
          </span>
        </div>

        <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
          {caseStudy.title}
        </h3>
        <div className="text-xs font-display text-blue-400 font-semibold mb-4">
          {caseStudy.clientType}
        </div>

        <p className="font-body text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
          {caseStudy.summary}
        </p>

        {/* Outcome Highlights */}
        <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2 mb-6">
          <div className="text-[11px] font-display uppercase tracking-wider text-slate-400 font-bold">
            Documented Outcomes:
          </div>
          {caseStudy.outcomes.slice(0, 2).map((out, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" />
              <span>{out}</span>
            </div>
          ))}
        </div>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {caseStudy.technologies.map((t, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 rounded bg-[#151D2F] border border-white/5 text-slate-400 font-mono text-[10px]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-white/5 flex items-center justify-between">
        <span className="text-[11px] font-body text-slate-500">
          Architecture Blueprint
        </span>
        <Link
          to={`/work/${caseStudy.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-display font-semibold text-blue-400 hover:text-blue-300"
        >
          View Full Breakdown <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
