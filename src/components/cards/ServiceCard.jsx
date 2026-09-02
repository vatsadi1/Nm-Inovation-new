import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Badge } from '../common/Badge';

export function ServiceCard({ service }) {
  return (
    <div className="group rounded-2xl bg-[#0E1422] border border-white/10 p-6 sm:p-7 hover:border-blue-500/40 hover:bg-[#151D2F] transition-all flex flex-col justify-between shadow-lg">
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <Badge variant="accent" size="sm">
            {service.category}
          </Badge>
          <span className="text-[10px] font-mono text-slate-500">
            MERN / Node Ready
          </span>
        </div>

        <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
          {service.title}
        </h3>

        <p className="font-body text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
          {service.shortDesc}
        </p>

        <div className="space-y-2 mb-6">
          <div className="text-[11px] font-display font-semibold uppercase tracking-wider text-slate-300">
            Key Architecture Features:
          </div>
          <ul className="space-y-1.5 text-xs text-slate-300 list-none p-0 m-0 font-body">
            {service.features.slice(0, 3).map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pt-4 border-t border-white/5 flex items-center justify-between">
        <span className="text-[11px] font-mono text-slate-500">
          {service.deliverables.length} Key Deliverables
        </span>
        <Link
          to="/contact"
          className="inline-flex items-center gap-1.5 text-xs font-display font-semibold text-blue-400 hover:text-blue-300 transition-colors"
        >
          Consult on System <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
