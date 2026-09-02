import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '../../utils/cn';

export function Breadcrumbs({ items = [], className = '' }) {
  return (
    <nav aria-label="Breadcrumb" className={cn('flex items-center text-xs text-slate-400 py-3', className)}>
      <ol className="flex items-center flex-wrap gap-1.5 list-none p-0 m-0">
        <li className="inline-flex items-center">
          <Link to="/" className="inline-flex items-center gap-1 hover:text-white transition-colors">
            <Home className="w-3.5 h-3.5 text-slate-500" />
            <span>Home</span>
          </Link>
        </li>

        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={idx} className="inline-flex items-center gap-1.5">
              <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />
              {isLast || !item.href ? (
                <span className="text-slate-200 font-medium truncate max-w-[200px] sm:max-w-none" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link to={item.href} className="hover:text-white transition-colors">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
