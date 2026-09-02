import { cn } from '../../utils/cn';

export function Badge({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  dot = false
}) {
  const baseStyles = 'inline-flex items-center font-display font-medium rounded-full tracking-wide uppercase select-none';

  const variants = {
    default: 'bg-white/5 text-slate-300 border border-white/10',
    accent: 'bg-blue-500/10 text-blue-400 border border-blue-500/20',
    highlight: 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20',
    subtle: 'bg-slate-800/80 text-slate-400 border border-slate-700/50',
    outline: 'bg-transparent text-slate-300 border border-white/15'
  };

  const sizes = {
    sm: 'text-[10px] px-2 py-0.5 gap-1',
    md: 'text-xs px-2.5 py-1 gap-1.5',
    lg: 'text-sm px-3 py-1.5 gap-2'
  };

  return (
    <span className={cn(baseStyles, variants[variant], sizes[size], className)}>
      {dot && (
        <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse opacity-75 shrink-0" />
      )}
      {children}
    </span>
  );
}
