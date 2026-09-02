import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Badge } from '../common/Badge';

export function MegaMenu({ items = [], onClose }) {
  return (
    <div 
      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[580px] bg-[#0E1422]/95 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-150"
      onMouseLeave={onClose}
    >
      <div className="grid grid-cols-2 gap-2">
        {items.map((item, idx) => (
          <Link
            key={idx}
            to={item.href}
            onClick={onClose}
            className="group flex flex-col p-3 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/10 transition-all text-left"
          >
            <div className="flex items-center justify-between gap-2 mb-1">
              <span className="font-display text-sm font-semibold text-slate-100 group-hover:text-blue-400 transition-colors">
                {item.title}
              </span>
              {item.badge && (
                <Badge variant="accent" size="sm">
                  {item.badge}
                </Badge>
              )}
            </div>
            <p className="font-body text-xs text-slate-400 line-clamp-2 leading-relaxed">
              {item.desc}
            </p>
          </Link>
        ))}
      </div>

      <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-xs px-2 text-slate-400">
        <span className="flex items-center gap-1.5 text-blue-400">
          <Sparkles className="w-3.5 h-3.5" />
          Enterprise-ready architecture
        </span>
        <Link 
          to="/solutions" 
          onClick={onClose}
          className="inline-flex items-center gap-1 text-slate-300 hover:text-white font-medium transition-colors"
        >
          View all capabilities <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
}
