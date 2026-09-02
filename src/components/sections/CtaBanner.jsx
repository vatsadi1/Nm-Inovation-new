import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { Button } from '../common/Button';

export function CtaBanner() {
  return (
    <section className="py-16 lg:py-24 bg-[#05080E] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-r from-[#0E1422] via-[#151D2F] to-[#0E1422] border border-blue-500/30 p-8 sm:p-12 lg:p-16 text-center shadow-2xl relative overflow-hidden">
          
          {/* Subtle background glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-display font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Engineering Next-Generation Operations
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight max-w-3xl mx-auto mb-6">
            Stop stitching together disconnected tools. Build your system.
          </h2>

          <p className="font-body text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Schedule an architectural blueprint session with our engineering team to design a unified digital operating system for your business.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-8">
            <Button
              to="/contact"
              variant="primary"
              size="lg"
              icon={ArrowRight}
              className="w-full sm:w-auto"
            >
              Build My Business System
            </Button>
            <Button
              to="/ai-audit"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Take 2-Min System Audit
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-body">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              Direct access to senior systems engineers
            </span>
            <span>•</span>
            <span>Zero obligation architectural consultation</span>
            <span>•</span>
            <span>Full source code ownership</span>
          </div>

        </div>
      </div>
    </section>
  );
}
