import { Link } from 'react-router-dom';
import { ArrowRight, Clock, BookOpen } from 'lucide-react';
import { Badge } from '../common/Badge';

export function InsightCard({ insight }) {
  return (
    <article className="group rounded-2xl bg-[#0E1422] border border-white/10 p-6 sm:p-7 hover:border-blue-500/40 hover:bg-[#151D2F] transition-all flex flex-col justify-between shadow-lg">
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <Badge variant="accent" size="sm">
            {insight.category}
          </Badge>
          <span className="flex items-center gap-1 text-[11px] font-mono text-slate-500">
            <Clock className="w-3 h-3" />
            {insight.readTime}
          </span>
        </div>

        <h3 className="font-heading text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors leading-snug">
          <Link to={`/insights/${insight.slug}`}>
            {insight.title}
          </Link>
        </h3>

        <p className="font-body text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
          {insight.summary}
        </p>
      </div>

      <div className="pt-4 border-t border-white/5 flex items-center justify-between">
        <span className="text-[11px] font-mono text-slate-500">
          {insight.publishedDate}
        </span>
        <Link
          to={`/insights/${insight.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-display font-semibold text-blue-400 hover:text-blue-300 transition-colors"
        >
          Read Article <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
}
