import { useState } from 'react';
import { 
  Terminal, 
  Mail, 
  HardDrive, 
  Calendar, 
  Database, 
  MessageSquare, 
  Share2, 
  Cpu, 
  Sparkles, 
  CornerDownLeft,
  CheckCircle,
  ShieldAlert
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Badge } from '../common/Badge';

export function McpWorkspaceSimulator() {
  const exampleCommands = [
    {
      id: 'leads',
      prompt: 'Find all unanswered leads across partner Gmails from the past 24 hours.',
      output: {
        sourcesChecked: ['Partner_Gmail_01', 'Partner_Gmail_02', 'CRM_Inbound_Webhook'],
        resultsFound: 3,
        summary: 'Identified 3 high-intent inquiries: (1) Apex Dynamics [Enterprise Portal RFQ], (2) Lumina Health [Clinic Intake], (3) Horizon Properties [MLS Tour Request].',
        actionTaken: 'Created 3 CRM deal cards; auto-drafted WhatsApp qualification messages for review.'
      }
    },
    {
      id: 'emails',
      prompt: 'Summarize today\'s important client emails and flag urgent contract milestones.',
      output: {
        sourcesChecked: ['5 Google Workspace Inboxes', 'Google Drive Shared Drives'],
        resultsFound: 14,
        summary: '2 priority action items: Meridian Realty signed lease agreement awaiting countersignature; Vanguard Logistics requested revised technical spec sheet by 4 PM EST.',
        actionTaken: 'Generated Slack alert to Director of Engineering with draft spec link.'
      }
    },
    {
      id: 'social',
      prompt: 'Prepare this week\'s technical social content from our latest engineering case study.',
      output: {
        sourcesChecked: ['CaseStudy_DB/Logistics_RFQ', 'Brand_Guidelines_Vector_Store'],
        resultsFound: 1,
        summary: 'Synthesized 3 LinkedIn technical breakdowns + 1 Twitter/X carousel outline on "Replacing 12 Disconnected Tools with a Unified Event Stream".',
        actionTaken: 'Formatted into Staging Queue for one-click executive review.'
      }
    },
    {
      id: 'report',
      prompt: 'Generate my weekly business intelligence report with CAC and pipeline velocity.',
      output: {
        sourcesChecked: ['Google Ads API', 'Meta Conversion API', 'CRM Revenue Ledger', 'Stripe Gateway'],
        resultsFound: 1,
        summary: 'Total Weekly Inbound: 142 leads. Blended CPA: $38.40. Qualified Deals: 28. Revenue Realized: $46,200. Pipeline Health Score: 94/100.',
        actionTaken: 'Delivered executive summary to WhatsApp and email.'
      }
    }
  ];

  const [activeCommandIndex, setActiveCommandIndex] = useState(0);
  const current = exampleCommands[activeCommandIndex];

  const sourcePills = [
    { name: 'Gmail 01 (Sales)', icon: Mail },
    { name: 'Gmail 02 (Ops)', icon: Mail },
    { name: 'Gmail 03 (Partners)', icon: Mail },
    { name: 'Google Drive', icon: HardDrive },
    { name: 'Calendar Sync', icon: Calendar },
    { name: 'Enterprise CRM', icon: Database },
    { name: 'WhatsApp Cloud', icon: MessageSquare },
    { name: 'Social Channels', icon: Share2 }
  ];

  return (
    <section className="py-20 lg:py-28 border-b border-white/5 bg-[#080C14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading
          eyebrow="Signature Capability"
          title="Connect Your Business Tools to Intelligent Workflows"
          description="Model Context Protocol (MCP) and multi-inbox automation allow reasoning engines to safely discover and execute tasks across your separated enterprise software."
        />

        {/* 3-Tier Architectural Pipeline Diagram */}
        <div className="mb-12 rounded-2xl bg-[#0E1422] border border-white/10 p-6 sm:p-8">
          
          {/* Tier 1: Ingestion Sources */}
          <div className="mb-6">
            <div className="text-[11px] font-display font-semibold uppercase tracking-wider text-slate-400 mb-3">
              Tier 01: Dispersed Enterprise Inboxes & Data Sources
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {sourcePills.map((src, idx) => {
                const Icon = src.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-2.5 rounded-lg bg-[#151D2F] border border-white/5 text-xs text-slate-300"
                  >
                    <Icon className="w-4 h-4 text-blue-400 shrink-0" />
                    <span className="truncate">{src.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Connection Bridge */}
          <div className="flex items-center justify-center my-3 text-xs font-mono text-blue-400 gap-2">
            <span>↓</span>
            <span className="px-3 py-1 rounded bg-blue-950/60 border border-blue-500/30">
              STANDARDIZED MODEL CONTEXT PROTOCOL (MCP) & EVENT LAYER
            </span>
            <span>↓</span>
          </div>

          {/* Tier 2: AI Reasoning Workspace Terminal */}
          <div className="mt-6">
            <div className="flex items-center justify-between text-[11px] font-display font-semibold uppercase tracking-wider text-slate-400 mb-3">
              <span>Tier 02: Unified Autonomous AI Workspace</span>
              <span className="text-blue-400 font-mono">Interactive Simulator</span>
            </div>

            <div className="rounded-xl bg-black/80 border border-white/15 overflow-hidden shadow-2xl">
              {/* Terminal Titlebar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#151D2F] border-b border-white/10 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-slate-200 ml-2 font-display text-xs">nminovation-mcp-workspace // console</span>
                </div>
                <div className="text-[10px] text-slate-500">
                  Concept Architecture Capability
                </div>
              </div>

              {/* Command Selector Buttons */}
              <div className="p-4 border-b border-white/10 bg-white/[0.02]">
                <div className="text-xs text-slate-400 font-display mb-2 font-semibold">
                  Select an Executive Natural Language Query:
                </div>
                <div className="flex flex-wrap gap-2">
                  {exampleCommands.map((cmd, idx) => (
                    <button
                      key={cmd.id}
                      type="button"
                      onClick={() => setActiveCommandIndex(idx)}
                      className={`text-xs px-3 py-1.5 rounded-lg border font-mono transition-all text-left ${
                        activeCommandIndex === idx
                          ? 'bg-blue-600 text-white border-blue-400 shadow-sm'
                          : 'bg-[#151D2F] text-slate-300 border-white/10 hover:border-white/20'
                      }`}
                    >
                      "{cmd.prompt.slice(0, 36)}..."
                    </button>
                  ))}
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-5 font-mono text-xs space-y-4">
                {/* Prompt Line */}
                <div className="flex items-start gap-2 text-slate-200">
                  <span className="text-blue-400 font-bold">$ mcp execute &gt;</span>
                  <span className="text-white font-semibold">"{current.prompt}"</span>
                </div>

                {/* Processing Log */}
                <div className="pl-4 border-l border-blue-500/30 space-y-2 text-slate-300 text-[11px]">
                  <div className="flex items-center gap-2 text-slate-400">
                    <span className="text-blue-400">▶</span>
                    <span>Sources Queried: {current.output.sourcesChecked.join(', ')}</span>
                  </div>

                  <div className="p-3 rounded-lg bg-[#151D2F]/60 border border-white/5">
                    <div className="text-slate-400 text-[10px] uppercase tracking-wider mb-1">
                      Context Synthesis Output:
                    </div>
                    <p className="text-slate-200 font-body text-xs leading-relaxed">
                      {current.output.summary}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-emerald-400 font-semibold pt-1">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Action Executed: {current.output.actionTaken}</span>
                  </div>
                </div>
              </div>

              {/* Disclaimer footer */}
              <div className="px-4 py-2 bg-[#0A0E18] border-t border-white/5 flex items-center justify-between text-[10px] text-slate-500 font-body">
                <span className="flex items-center gap-1">
                  <ShieldAlert className="w-3 h-3 text-slate-400" />
                  Product concept showcase demonstrating Model Context Protocol system patterns.
                </span>
                <span className="font-mono">Security: Local Token Sandboxing</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
