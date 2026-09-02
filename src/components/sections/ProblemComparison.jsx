import { useState } from 'react';
import { 
  Unlink, 
  Link2, 
  AlertCircle, 
  CheckCircle, 
  Clock, 
  Database, 
  Layers, 
  BarChart3, 
  MessageSquare, 
  ArrowRight 
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';

export function ProblemComparison() {
  const [viewMode, setViewMode] = useState('after'); // 'before' or 'after'

  const disconnectedSilos = [
    { tool: 'Website / Landing Page', issue: 'Sits in CMS; doesn\'t automatically alert sales reps.', icon: Layers },
    { tool: 'Inbound Leads', issue: 'Unread emails sit in shared inbox; average 6h response lag.', icon: Clock },
    { tool: 'Customer WhatsApp', issue: 'Trapped on personal staff phone with no CRM logging.', icon: MessageSquare },
    { tool: 'Marketing Ad Accounts', issue: 'Metrics in Google/Meta dashboards disconnected from cash sales.', icon: BarChart3 },
    { tool: 'Client Data & Deals', issue: 'Fragmented across 4 spreadsheets; out-of-date records.', icon: Database },
    { tool: 'Executive Reporting', issue: 'Compiled manually at month-end by copying numbers for 8 hours.', icon: AlertCircle }
  ];

  const connectedEcosystem = [
    { system: 'High-Performance Portal', benefit: 'Direct webhook triggers CRM and WhatsApp sequence on click.', icon: Layers },
    { system: 'Autonomous Lead Ingestion', benefit: 'Sub-30-second AI conversational reply and instant qualification.', icon: Clock },
    { system: 'WhatsApp Cloud API Router', benefit: '24/7 AI agent handles FAQs and books meetings to calendar.', icon: MessageSquare },
    { system: 'Unified Marketing Attribution', benefit: 'Server-side CAPI links ad spend to actual closed CRM deals.', icon: BarChart3 },
    { system: 'Centralized CRM / ERP Core', benefit: 'Single source of truth with automated deal stage transitions.', icon: Database },
    { system: 'Real-time Executive Cockpit', benefit: 'Live unit economics, CAC, and automated weekly AI briefing.', icon: CheckCircle }
  ];

  return (
    <section className="py-20 lg:py-28 border-b border-white/5 bg-[#080C14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <SectionHeading
            eyebrow="The Disconnection Problem"
            title="Your business shouldn't run across 12 disconnected tools."
            description="When leads, customer communications, marketing campaigns, and everyday operations live in separate silos, your team wastes dozens of hours weekly on manual copy-pasting."
            className="mb-0"
          />

          {/* Interactive Switcher */}
          <div className="flex items-center gap-2 p-1.5 rounded-xl bg-[#0E1422] border border-white/10 shrink-0 self-start lg:self-auto">
            <button
              type="button"
              onClick={() => setViewMode('before')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-display text-xs font-bold transition-all ${
                viewMode === 'before'
                  ? 'bg-rose-950/60 text-rose-300 border border-rose-800/60 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Unlink className="w-3.5 h-3.5" />
              <span>Disconnected Silos (Before)</span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode('after')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-display text-xs font-bold transition-all ${
                viewMode === 'after'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Link2 className="w-3.5 h-3.5" />
              <span>Connected Ecosystem (After)</span>
            </button>
          </div>
        </div>

        {/* Dynamic Display Panel */}
        {viewMode === 'before' ? (
          <div className="rounded-2xl bg-[#0D111D] border border-rose-900/30 p-6 sm:p-8 relative overflow-hidden animate-in fade-in duration-200">
            <div className="flex items-center gap-2 mb-6 text-rose-400 font-display text-xs font-bold uppercase tracking-wider">
              <AlertCircle className="w-4 h-4" />
              <span>Fragmented Architecture: High Human Friction & Lost Revenue</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {disconnectedSilos.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-black/40 border border-rose-900/20 flex flex-col justify-between"
                  >
                    <div className="flex items-start gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-rose-950/50 text-rose-400 shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-sm text-slate-200">
                          {item.tool}
                        </h4>
                        <p className="font-body text-xs text-rose-300/80 mt-1 leading-relaxed">
                          {item.issue}
                        </p>
                      </div>
                    </div>
                    <div className="text-[10px] font-mono text-rose-400/60 uppercase tracking-wider pt-2 border-t border-rose-950/40">
                      Status: Manual / Siloed
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-400 font-body">
                Result: Cold lead decay, double data entry, and zero real-time operational visibility.
              </span>
              <button
                type="button"
                onClick={() => setViewMode('after')}
                className="text-xs font-display font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1.5"
              >
                See how we connect the pieces <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ) : (
          <div className="rounded-2xl bg-[#0E1422] border border-blue-500/30 p-6 sm:p-8 relative overflow-hidden shadow-2xl animate-in fade-in duration-200">
            <div className="flex items-center gap-2 mb-6 text-blue-400 font-display text-xs font-bold uppercase tracking-wider">
              <CheckCircle className="w-4 h-4 text-blue-400" />
              <span>nminovation Unified Standard: One Connected Digital Ecosystem</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {connectedEcosystem.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#151D2F] border border-white/10 flex flex-col justify-between hover:border-blue-500/30 transition-colors"
                  >
                    <div className="flex items-start gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-blue-600/20 text-blue-400 shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-sm text-white">
                          {item.system}
                        </h4>
                        <p className="font-body text-xs text-slate-300 mt-1 leading-relaxed">
                          {item.benefit}
                        </p>
                      </div>
                    </div>
                    <div className="text-[10px] font-mono text-blue-400 uppercase tracking-wider pt-2 border-t border-white/5">
                      Status: Synchronized via Webhooks
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-300 font-body">
                Result: Sub-30s lead qualification, zero manual copy-pasting, and executive clarity.
              </span>
              <Button to="/solutions" variant="primary" size="sm" icon={ArrowRight}>
                Explore Solution Architectures
              </Button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
