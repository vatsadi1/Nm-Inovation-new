import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
  icon: Icon,
  iconPosition = 'right',
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-display font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080C14] disabled:opacity-50 disabled:cursor-not-allowed select-none';

  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow active:scale-[0.99] border border-blue-500/30',
    secondary: 'bg-[#151D2F] hover:bg-[#1C273E] text-slate-100 border border-white/10 hover:border-white/20 active:scale-[0.99]',
    outline: 'bg-transparent hover:bg-white/5 text-slate-200 border border-white/15 hover:border-white/30',
    ghost: 'bg-transparent hover:bg-white/5 text-slate-300 hover:text-white',
    white: 'bg-white hover:bg-slate-100 text-slate-900 border border-transparent font-bold'
  };

  const sizes = {
    sm: 'text-xs px-3.5 py-1.5 rounded-md gap-1.5',
    md: 'text-sm px-5 py-2.5 rounded-lg gap-2',
    lg: 'text-base px-6 py-3.5 rounded-lg gap-2.5'
  };

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
    </>
  );

  const mergedClasses = cn(baseStyles, variants[variant], sizes[size], className);

  if (to) {
    return (
      <Link to={to} className={mergedClasses} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={mergedClasses} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={mergedClasses} {...props}>
      {content}
    </button>
  );
}
