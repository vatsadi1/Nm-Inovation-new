import { Link } from 'react-router-dom';
import { Bot, CheckCircle2, ArrowRight, MessageSquare, Zap, Cpu } from 'lucide-react';
import { SEO } from '../../components/common/SEO';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { Button } from '../../components/common/Button';
import { McpWorkspaceSimulator } from '../../components/sections/McpWorkspaceSimulator';
import { WorkflowAutomation } from '../../components/sections/WorkflowAutomation';
import { CtaBanner } from '../../components/sections/CtaBanner';

export function AiAutomationPage() {
  const automationFeatures = [
    { title: 'WhatsApp Cloud API AI Agents', desc: 'Autonomous 24/7 agents that answer customer questions from your private knowledge base and book appointments.' },
    { title: 'Model Context Protocol (MCP) Workflows', desc: 'Standardized open protocol connecting reasoning engines to multi-inbox Gmail, files, and CRMs.' },
    { title: 'Self-Hosted n8n Orchestration', desc: 'Cost-effective, highly secure event pipelines executing multi-step business logic across disparate SaaS APIs.' },
    { title: 'Automated Document & Invoice Parsing', desc: 'Extract structured data from customer PDFs, vendor receipts, and contracts directly into database fields.' },
    { title: 'Voice AI Receptionists & Triage', desc: 'Intelligent conversational phone bots that capture caller intent and route urgent cases to on-call staff.' },
    { title: 'Human-in-the-Loop Fallbacks', desc: 'Fail-safe supervisor queues alerting team members whenever customer sentiment requires human negotiation.' }
  ];

  return (
    <>
      <SEO
        title="AI Automation, WhatsApp Agents & MCP Systems |nm inovation"
        description="Deploy autonomous AI agents on WhatsApp, connect multi-inbox Gmail with Model Context Protocol (MCP), and automate business workflows with n8n."
        canonical="/solutions/ai-automation"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Breadcrumbs
          items={[
            { label: 'Solutions', href: '/solutions' },
            { label: 'AI & Automation' }
          ]}
        />
      </div>

      <section className="py-12 lg:py-20 border-b border-white/5 bg-tech-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-display font-semibold uppercase tracking-wider mb-6">
              <Bot className="w-3.5 h-3.5" />
              Solution Pillar 03
            </div>

            <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-6">
              AI Agents, WhatsApp Automation & MCP Orchestration
            </h1>

            <p className="font-body text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              Turn repetitive human tasks into 24/7 autonomous workflows. We deploy intelligent AI agents that qualify leads, handle multi-channel communications, and connect to internal tools via Model Context Protocol (MCP).
            </p>

            <div className="flex flex-wrap gap-4">
              <Button to="/contact" variant="primary" size="md" icon={ArrowRight}>
                Automate Your Operations
              </Button>
              <Button to="/ai-audit" variant="secondary" size="md">
                Take AI Readiness Audit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Live Workflow Visualizer */}
      <WorkflowAutomation />

      {/* Embedded MCP Terminal Simulator */}
      <McpWorkspaceSimulator />

      {/* Features Grid */}
      <section className="py-16 lg:py-24 bg-[#080C14] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Capabilities"
            title="Enterprise Automation Protocols"
            description="Our workflows run on private, secure infrastructure with strict data isolation."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {automationFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0E1422] border border-white/10 hover:border-blue-500/30 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-600/10 text-blue-400 flex items-center justify-center font-mono font-bold text-xs mb-4">
                  0{idx + 1}
                </div>
                <h3 className="font-display font-bold text-base text-white mb-2">
                  {feat.title}
                </h3>
                <p className="font-body text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
