import { Link } from 'react-router-dom';
import { 
  Cpu, 
  Layers, 
  Zap, 
  TrendingUp, 
  ShieldCheck, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  Code2
} from 'lucide-react';
import { SEO } from '../../components/common/SEO';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { CtaBanner } from '../../components/sections/CtaBanner';

export function AboutPage() {
  const teamPlaceholders = [
    {
      role: 'Principal Systems Architect',
      specialty: 'Distributed Systems & MERN Architecture',
      experience: 'Focus on event-driven backends, webhook orchestration & low-latency frontends.'
    },
    {
      role: 'Head of Automation & AI Engineering',
      specialty: 'LLM Orchestration, RAG & MCP Protocols',
      experience: 'Focus on WhatsApp Cloud API, model context tooling & autonomous multi-agent pipelines.'
    },
    {
      role: 'Senior Product & UX Engineer',
      specialty: 'Editorial Design Systems & Information Architecture',
      experience: 'Focus on high-converting client interfaces, responsive accessibility & user journeys.'
    },
    {
      role: 'Growth & Business Intelligence Lead',
      specialty: 'Server-Side Attribution & Unit Economics',
      experience: 'Focus on CAPI tracking pipelines, real-time KPI data lakes & acquisition models.'
    }
  ];

  const operatingPrinciples = [
    {
      title: 'Zero App Sprawl',
      desc: 'We never suggest adding another SaaS tool when a unified API layer or lightweight internal database can solve the problem permanently.'
    },
    {
      title: 'Clean Source Code Ownership',
      desc: 'You own every line of code, database schema, and automation workflow. No proprietary lock-in or recurring builder subscription fees.'
    },
    {
      title: 'Event-Driven Velocity',
      desc: 'Every business event—from an ad click to an invoice payment—should automatically trigger the appropriate operational response in real-time.'
    },
    {
      title: 'Measurable Unit Economics',
      desc: 'Technology is an investment with a required operational return. We measure success by hours saved and revenue throughput.'
    }
  ];

  return (
    <>
      <SEO
        title="Aboutnm inovation Digital Systems | Our Engineering Philosophy"
        description="We believe businesses shouldn't have to stitch together disconnected tools to operate. Discover our philosophy: Build, Automate, Grow."
        canonical="/about"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Breadcrumbs items={[{ label: 'About Us' }]} />
      </div>

      {/* Hero Editorial Story */}
      <section className="py-12 lg:py-20 border-b border-white/5 bg-tech-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-display font-semibold uppercase tracking-wider mb-6">
              <Cpu className="w-3.5 h-3.5" />
              Company Philosophy & Mission
            </div>

            <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-6">
              We believe businesses shouldn't have to stitch together disconnected tools to operate.
            </h1>

            <p className="font-body text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
              Most companies today are suffering from digital fragmentation. Their marketing agency builds landing pages that don't alert their sales reps. Their customer inquiries get lost in personal WhatsApp inboxes. Their team spends 20+ hours each week copying data between spreadsheets.
            </p>

            <p className="font-body text-slate-400 text-base leading-relaxed">
              We were founded to replace this chaotic patchwork with unified digital business systems: clean web architectures, automated customer qualification workflows, and central data operating hubs.
            </p>
          </div>
        </div>
      </section>

      {/* The 3 Core Pillars: Build, Automate, Grow */}
      <section className="py-20 border-b border-white/5 bg-[#090D17]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Triad Framework"
            title="Build. Automate. Grow."
            description="Our three-phase approach guarantees that technology serves your actual commercial objectives."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[#0E1422] border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center border border-blue-500/30 mb-6">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-3">
                  01. BUILD
                </h3>
                <p className="font-body text-sm text-slate-300 leading-relaxed mb-4">
                  We engineer high-performance web applications, client portals, and CRM/ERP data backbones with clean MERN stack architecture.
                </p>
              </div>
              <div className="text-xs font-mono text-blue-400 pt-4 border-t border-white/5">
                Foundation: Speed, Reliability & Code Ownership
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-[#0E1422] border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center border border-blue-500/30 mb-6">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-3">
                  02. AUTOMATE
                </h3>
                <p className="font-body text-sm text-slate-300 leading-relaxed mb-4">
                  We connect customer touchpoints to autonomous WhatsApp AI agents, n8n pipelines, and Multi-Gmail Model Context Protocol (MCP) servers.
                </p>
              </div>
              <div className="text-xs font-mono text-blue-400 pt-4 border-t border-white/5">
                Leverage: 24/7 Sub-30s Customer Qualification
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-[#0E1422] border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center border border-blue-500/30 mb-6">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-3">
                  03. GROW
                </h3>
                <p className="font-body text-sm text-slate-300 leading-relaxed mb-4">
                  We activate high-intent Google & Meta acquisition campaigns backed by server-side tracking and real-time business intelligence cockpits.
                </p>
              </div>
              <div className="text-xs font-mono text-blue-400 pt-4 border-t border-white/5">
                Telemetry: Predictable Customer Acquisition Cost
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Principles */}
      <section className="py-20 border-b border-white/5 bg-[#080C14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Standards of Practice"
            title="How We Operate"
            description="Our non-negotiable engineering principles ensure every system we deploy is secure, scalable, and commercially effective."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {operatingPrinciples.map((prin, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0E1422] border border-white/10 hover:border-blue-500/30 transition-colors"
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="font-mono text-xs text-blue-400 font-bold">0{idx + 1}.</span>
                  <h3 className="font-display font-bold text-base text-white">
                    {prin.title}
                  </h3>
                </div>
                <p className="font-body text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {prin.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Team Neutral Placeholders */}
      <section className="py-20 border-b border-white/5 bg-[#090D17]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Collective"
            title="Engineering & Architecture Guild"
            description="Cross-disciplinary engineers dedicated to eliminating operational friction."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamPlaceholders.map((member, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0E1422] border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 mb-4 font-mono font-bold text-sm">
                    ENG-0{idx + 1}
                  </div>
                  <h3 className="font-display font-bold text-sm text-white mb-1">
                    {member.role}
                  </h3>
                  <div className="text-xs font-mono text-blue-400 mb-3">
                    {member.specialty}
                  </div>
                  <p className="font-body text-xs text-slate-400 leading-relaxed">
                    {member.experience}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 mt-4 text-[10px] font-mono text-slate-500">
                  [CORE ARCHITECTURE TEAM]
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
