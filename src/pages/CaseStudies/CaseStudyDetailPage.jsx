import { useParams, Navigate, Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, ArrowLeft, Cpu, AlertCircle, Zap, ShieldCheck } from 'lucide-react';
import { SEO } from '../../components/common/SEO';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { CASE_STUDIES } from '../../data/caseStudies';
import { CtaBanner } from '../../components/sections/CtaBanner';

export function CaseStudyDetailPage() {
  const { slug } = useParams();
  const caseStudy = CASE_STUDIES.find((cs) => cs.slug === slug);

  if (!caseStudy) {
    return <Navigate to="/work" replace />;
  }

  return (
    <>
      <SEO
        title={`${caseStudy.title} | Case Study`}
        description={caseStudy.summary}
        canonical={`/work/${caseStudy.slug}`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Breadcrumbs
          items={[
            { label: 'Work', href: '/work' },
            { label: caseStudy.title }
          ]}
        />
      </div>

      {/* Hero */}
      <section className="py-12 lg:py-20 border-b border-white/5 bg-tech-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="accent" size="sm">
                {caseStudy.badge}
              </Badge>
              <span className="text-xs font-mono text-slate-400">
                Industry: {caseStudy.industry}
              </span>
            </div>

            <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-4">
              {caseStudy.title}
            </h1>

            <div className="text-sm font-display font-semibold text-blue-400 mb-6">
              Client Prototype Context: {caseStudy.clientType}
            </div>

            <p className="font-body text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              {caseStudy.summary}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {caseStudy.technologies.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-[#151D2F] border border-white/10 text-slate-300 font-mono text-xs"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deep-Dive Challenge & Solution */}
      <section className="py-16 lg:py-24 bg-[#080C14] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            
            {/* The Challenge */}
            <div className="rounded-2xl bg-[#0E1422] border border-rose-900/30 p-6 sm:p-8">
              <div className="flex items-center gap-2 text-rose-400 font-display text-xs font-bold uppercase tracking-wider mb-4">
                <AlertCircle className="w-4 h-4" />
                The Operational Bottleneck
              </div>
              <p className="font-body text-sm sm:text-base text-slate-300 leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>

            {/* The Solution */}
            <div className="rounded-2xl bg-[#0E1422] border border-blue-500/30 p-6 sm:p-8 shadow-xl">
              <div className="flex items-center gap-2 text-blue-400 font-display text-xs font-bold uppercase tracking-wider mb-4">
                <Zap className="w-4 h-4" />
                The Engineered Solution
              </div>
              <p className="font-body text-sm sm:text-base text-slate-300 leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>

          </div>

          {/* Architectural Highlights */}
          <div className="rounded-2xl bg-[#0E1422] border border-white/10 p-6 sm:p-8 mb-12">
            <h3 className="font-heading text-xl font-bold text-white mb-4">
              Architecture & System Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {caseStudy.architectureHighlights.map((hl, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#151D2F] border border-white/5 flex items-start gap-3">
                  <Cpu className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                  <span className="font-body text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {hl}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Outcomes */}
          <div className="rounded-2xl bg-blue-950/20 border border-blue-500/30 p-6 sm:p-8">
            <div className="flex items-center gap-2 text-blue-400 font-display text-xs font-bold uppercase tracking-wider mb-4">
              <ShieldCheck className="w-4 h-4" />
              Realistic Documented Outcomes
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {caseStudy.outcomes.map((out, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white font-medium">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                  <span>{out}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 flex items-center justify-between pt-6 border-t border-white/5">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-xs font-display font-semibold text-slate-400 hover:text-white"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Case Studies
            </Link>

            <Button to="/contact" variant="primary" size="md" icon={ArrowRight}>
              Architect a Similar System
            </Button>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
