import { useEffect } from 'react';
import { X } from 'lucide-react';
import { cn } from '../../utils/cn';

export function Modal({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  maxWidth = 'max-w-2xl',
  className = ''
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Dialog card */}
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
        className={cn(
          'relative w-full bg-[#0E1422] border border-white/10 rounded-xl shadow-2xl p-6 sm:p-8 z-10 my-8 max-h-[90vh] overflow-y-auto',
          maxWidth,
          className
        )}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-5 border-b border-white/10 mb-6">
          <div>
            {title && (
              <h3 id="modal-headline" className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="text-sm text-slate-400 mt-1 font-body">
                {subtitle}
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="modal-content text-slate-300">
          {children}
        </div>
      </div>
    </div>
  );
}
