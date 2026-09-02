import { useState } from 'react';
import { 
  Search, 
  Palette, 
  Code2, 
  Zap, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Badge } from '../common/Badge';

export function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Discover',
      tagline: 'Operational Audit & Architecture Mapping',
      icon: Search,
      desc: 'We map every existing tool, lead source, customer communication channel, and manual bottleneck. We identify where your team is losing hours to repetitive copy-pasting.',
      deliverables: ['Systems Topology Map', 'Bottleneck & Friction Audit', 'API Feasibility Analysis', 'Target Architecture Blueprint']
    },
    {
      num: '02',
      title: 'Design',
      tagline: 'User Experience & Data Flow Schemas',
      icon: Palette,
      desc: 'We design high-converting user interfaces for your customers and intuitive internal dashboards for your staff, alongside strict JSON data schemas for integrations.',
      deliverables: ['High-Fidelity UI Prototypes', 'Data Schema Models', 'Conversational AI Prompt Specs', 'Component Design System']
    },
    {
      num: '03',
      title: 'Build',
      tagline: 'Clean Full-Stack Engineering',
      icon: Code2,
      desc: 'We build your digital platform using production-grade React frontends, robust Node.js APIs, and relational/document databases structured for high speed and scale.',
      deliverables: ['Production React Application', 'Secure API Endpoints', 'Database Migration Scripts', 'Core Web Vitals Optimization']
    },
    {
      num: '04',
      title: 'Automate',
      tagline: 'Event Webhooks, WhatsApp & MCP Integration',
      icon: Zap,
      desc: 'We connect your frontend touchpoints directly into your CRM, WhatsApp Cloud API, and internal tools via self-hosted n8n pipelines and Model Context Protocol servers.',
      deliverables: ['WhatsApp AI Agent Deployment', 'n8n Workflow Mesh', 'Multi-Gmail & Drive Triage', 'Automated Fallback Handlers']
    },
    {
      num: '05',
      title: 'Grow',
      tagline: 'Systematic Acquisition & Business Intelligence',
      icon: TrendingUp,
      desc: 'With your operational foundation in place, we activate performance search ads, Meta conversion engines, and executive BI dashboards to scale revenue predictably.',
      deliverables: ['Google / Meta Ads Tracking (CAPI)', 'Executive BI Cockpit', 'Content Calendar Pipeline', 'Bi-Weekly Attribution Reports']
    }
  ];

  const current = steps[activeStep];
  const CurrentIcon = current.icon;

  return (
    <section className="py-20 lg:py-28 border-b border-white/5 bg-[#090D17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading
          eyebrow="Proven Methodology"
          title="The 5-Step Engineering Process"
          description="How we take complex, fragmented operations and transform them into streamlined, autonomous digital systems."
        />

        {/* 5-Step Navigation Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;

            return (
              <button
                key={step.num}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-xl border text-left transition-all ${
                  isActive
                    ? 'bg-blue-600 border-blue-400 text-white shadow-lg'
                    : 'bg-[#0E1422] border-white/10 text-slate-400 hover:text-slate-200 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold opacity-80">{step.num}</span>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="font-display font-bold text-sm sm:text-base">
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Step Deep Dive Panel */}
        <div className="rounded-2xl bg-[#0E1422] border border-white/15 p-6 sm:p-8 lg:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Step Info */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="accent" size="sm">
                  Phase {current.num}
                </Badge>
                <span className="text-xs font-mono text-slate-400">
                  {current.tagline}
                </span>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
                  <CurrentIcon className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {current.title}: {current.tagline}
                </h3>
              </div>

              <p className="font-body text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {current.desc}
              </p>
            </div>

            {/* Right: Key Deliverables Checklist */}
            <div className="lg:col-span-5">
              <div className="p-5 rounded-xl bg-[#151D2F] border border-white/10 shadow-inner">
                <div className="font-display text-xs font-bold uppercase tracking-wider text-blue-400 mb-3">
                  Phase {current.num} Key Deliverables:
                </div>
                <ul className="space-y-2.5 text-xs text-slate-200 list-none p-0 m-0">
                  {current.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
