import { Zap, ShieldCheck } from 'lucide-react';
import { SEO } from '../../components/common/SEO';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { AuditQuestionnaire } from '../../components/forms/AuditQuestionnaire';

export function AiAuditPage() {
  return (
    <>
      <SEO
        title="AI Automation Readiness Audit |nm inovation Digital Systems"
        description="Take the 2-minute business automation assessment. Calculate your readiness score across Lead Automation, CRM Maturity, Customer Communication, Content, and Reporting."
        canonical="/ai-audit"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Breadcrumbs items={[{ label: 'AI Readiness Audit' }]} />
      </div>

      <section className="py-12 lg:py-16 border-b border-white/5 bg-tech-grid">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-display font-semibold uppercase tracking-wider mb-6 mx-auto">
            <Zap className="w-3.5 h-3.5" />
            2-Minute Diagnostic Tool
          </div>

          <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-4">
            How Ready is Your Business for Automation?
          </h1>

          <p className="font-body text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-6">
            Evaluate your operational stack across 8 key dimensions. Receive an instant diagnostic score and prioritized system recommendations.
          </p>

          <div className="inline-flex items-center gap-2 text-xs text-slate-400 font-body">
            <ShieldCheck className="w-4 h-4 text-blue-400" />
            <span>100% Client-side evaluation • No sensitive financial data collected</span>
          </div>

        </div>
      </section>

      {/* Main Audit Tool Section */}
      <section className="py-16 lg:py-24 bg-[#080C14] border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AuditQuestionnaire />
        </div>
      </section>
    </>
  );
}
