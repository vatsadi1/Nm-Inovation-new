import { cn } from '../../utils/cn';

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tag: Tag = 'h2',
  className = '',
  maxWidth = 'max-w-3xl'
}) {
  const alignments = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto'
  };

  return (
    <div className={cn('flex flex-col mb-12 lg:mb-16', alignments[align], className)}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
          <span className="font-display text-xs sm:text-sm font-semibold tracking-wider text-blue-400 uppercase">
            {eyebrow}
          </span>
        </div>
      )}
      
      <Tag className="font-heading text-2xl sm:text-3xl lg:text-4xl xl:text-[2.65rem] font-bold text-[#F8F9FA] tracking-tight leading-[1.2] mb-4">
        {title}
      </Tag>

      {description && (
        <p className={cn('font-body text-slate-400 text-base sm:text-lg leading-relaxed', maxWidth)}>
          {description}
        </p>
      )}
    </div>
  );
}
