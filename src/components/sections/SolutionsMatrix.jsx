import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Layers, 
  Database, 
  Bot, 
  TrendingUp, 
  Share2, 
  BarChart3,
  CheckCircle2,
  Cpu
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { SOLUTIONS } from '../../data/solutions';
import { Badge } from '../common/Badge';

export function SolutionsMatrix() {
  const [activeSolutionId, setActiveSolutionId] = useState(SOLUTIONS[0].id);

  const solutionIcons = {
    'digital-products': Layers,
    'business-systems': Database,
    'ai-automation': Bot,
    'marketing-systems': TrendingUp,
    'content-engine': Share2,
    'business-intelligence': BarChart3
  };

  const currentSolution = SOLUTIONS.find((s) => s.id === activeSolutionId) || SOLUTIONS[0];
  const CurrentIcon = solutionIcons[currentSolution.id] || Layers;

  return (
    <section className="py-20 lg:py-28 border-b border-white/5 bg-[#0A0E1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading
          eyebrow="Solutions Architecture"
          title="Six Core Pillars of Modern Digital Operations"
          description="We engineer bespoke systems designed to fit together seamlessly—from customer-facing web apps to autonomous WhatsApp agents and executive telemetry."
        />

        {/* Asymmetric Interactive Layout: Left Navigation / Right Editorial Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Solution Selector Tabs */}
          <div className="lg:col-span-4 space-y-2">
            {SOLUTIONS.map((sol) => {
              const Icon = solutionIcons[sol.id] || Layers;
              const isActive = sol.id === activeSolutionId;

              return (
                <button
                  key={sol.id}
                  type="button"
                  onClick={() => setActiveSolutionId(sol.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between group ${
                    isActive
                      ? 'bg-[#151D2F] border-blue-500/50 shadow-md text-white'
                      : 'bg-[#0E1422]/60 border-white/5 hover:border-white/15 hover:bg-[#0E1422] text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-blue-400 font-bold">
                      {sol.number}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-blue-400 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-sm tracking-tight">
                        {sol.title}
                      </h3>
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isActive ? 'text-blue-400 translate-x-1' : 'text-slate-600 group-hover:text-slate-400'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep-Dive Editorial Architectural Showcase */}
          <div className="lg:col-span-8">
            <div className="rounded-2xl bg-[#0E1422] border border-white/15 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
              
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/10 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
                    <CurrentIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-blue-400 font-semibold uppercase">
                      Pillar {currentSolution.number}
                    </span>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {currentSolution.headline}
                    </h3>
                  </div>
                </div>

                <Badge variant="accent" size="sm">
                  Full Stack Architecture
                </Badge>
              </div>

              {/* Description */}
              <p className="font-body text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                {currentSolution.description}
              </p>

              {/* Sub-Components Grid */}
              <div className="mb-8">
                <h4 className="font-display text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Sub-System Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentSolution.subItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#151D2F]/70 border border-white/5 text-xs text-slate-200"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architecture & Benefits Specs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 rounded-xl bg-black/40 border border-white/10 mb-8">
                <div>
                  <h4 className="font-display text-xs font-bold text-blue-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5" /> Technical Standards
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-300 font-mono">
                    {Object.entries(currentSolution.architecture).map(([key, val]) => (
                      <li key={key} className="flex items-baseline gap-2">
                        <span className="text-slate-400 capitalize">{key}:</span>
                        <span className="text-white truncate">{val}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-display text-xs font-bold text-blue-400 uppercase tracking-wider mb-2.5">
                    Business Outcomes
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-300 font-body">
                    {currentSolution.benefits.slice(0, 3).map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-blue-400 font-bold">•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA Link */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-xs text-slate-400 font-body">
                  Engineered with complete code ownership.
                </span>
                <Link
                  to={`/solutions/${currentSolution.slug}`}
                  className="inline-flex items-center gap-2 font-display text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Deep-dive {currentSolution.title} specs <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
