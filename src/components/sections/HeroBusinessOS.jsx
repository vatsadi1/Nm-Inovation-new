import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Layers, 
  Database, 
  MessageSquare, 
  Bot, 
  DollarSign, 
  BarChart3, 
  Mail, 
  Share2, 
  Cpu, 
  Activity,
  Zap
} from 'lucide-react';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';

export function HeroBusinessOS() {
  const [activeNode, setActiveNode] = useState('crm');
  const [packetStep, setPacketStep] = useState(0);

  // Simulated live event flow through the business operating system
  const nodes = [
    { id: 'website', name: 'Website / Portals', type: 'Ingress', icon: Layers, metric: 'Real-time Inbound', status: 'Live' },
    { id: 'leads', name: 'Lead Ingestion', type: 'Webhook', icon: Activity, metric: 'Instant Capture', status: 'Active' },
    { id: 'crm', name: 'Central CRM', type: 'Core DB', icon: Database, metric: 'Unified Pipeline', status: 'Master' },
    { id: 'whatsapp', name: 'WhatsApp API', type: 'Messaging', icon: MessageSquare, metric: 'Sub-30s Response', status: 'Autonomous' },
    { id: 'ai_agent', name: 'AI Agent (RAG)', type: 'Reasoning', icon: Bot, metric: 'Qualification Engine', status: 'Active' },
    { id: 'sales', name: 'Sales & Invoicing', type: 'Settlement', icon: DollarSign, metric: 'Automated Booking', status: 'Ready' },
    { id: 'analytics', name: 'BI Cockpit', type: 'Telemetry', icon: BarChart3, metric: 'Live Unit Economics', status: 'Real-time' }
  ];

  const peripheralNodes = [
    { id: 'gmail', name: 'Multi-Gmail (MCP)', icon: Mail },
    { id: 'social', name: 'Social Engine', icon: Share2 },
    { id: 'erp', name: 'ERP Inventory', icon: Cpu },
    { id: 'automation', name: 'n8n Pipelines', icon: Zap }
  ];

  // Cycle animated data packets
  useEffect(() => {
    const timer = setInterval(() => {
      setPacketStep((prev) => (prev + 1) % nodes.length);
    }, 2400);
    return () => clearInterval(timer);
  }, [nodes.length]);

  return (
    <section className="relative overflow-hidden pt-6 pb-16 lg:pt-12 lg:pb-24 border-b border-white/5 bg-tech-grid">
      {/* Background Ambience (Muted, non-neon) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="font-display text-xs font-semibold tracking-wider text-slate-300 uppercase">
                Digital Business Systems
              </span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08] mb-6">
              Build. Automate. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-white">
                Grow.
              </span>
            </h1>

            <p className="font-heading text-lg sm:text-xl text-slate-300 leading-relaxed mb-8 max-w-xl font-normal">
              We build the digital systems that help modern businesses attract customers, automate operations and scale.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-10">
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
                to="/solutions"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Explore Solutions
              </Button>
            </div>

            {/* Credibility Micro-Bar */}
            <div className="pt-6 border-t border-white/10 w-full grid grid-cols-3 gap-4 text-left">
              <div>
                <div className="font-display text-lg font-bold text-white tracking-tight">MERN + Node</div>
                <div className="font-body text-xs text-slate-400">Enterprise Stack</div>
              </div>
              <div>
                <div className="font-display text-lg font-bold text-white tracking-tight">&lt; 30s</div>
                <div className="font-body text-xs text-slate-400">Lead Response Engine</div>
              </div>
              <div>
                <div className="font-display text-lg font-bold text-white tracking-tight">MCP & n8n</div>
                <div className="font-body text-xs text-slate-400">Autonomous Layers</div>
              </div>
            </div>
          </div>

          {/* Right Side: Interactive Business Operating System Visualizer */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl bg-[#0E1422] border border-white/15 p-5 sm:p-6 shadow-2xl overflow-hidden">
              {/* Header of the visualization panel */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-display text-xs font-bold text-slate-200 uppercase tracking-wider">
                    NM Inovation Operating System 
                  </span>
                </div>
                <Badge variant="subtle" size="sm">
                  Live Event Flow
                </Badge>
              </div>

              {/* Connected Core Pipeline Nodes */}
              <div className="space-y-2.5">
                {nodes.map((node, index) => {
                  const Icon = node.icon;
                  const isActive = activeNode === node.id;
                  const isPacketHere = packetStep === index;

                  return (
                    <div
                      key={node.id}
                      onClick={() => setActiveNode(node.id)}
                      className={`group relative p-3 rounded-lg border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                        isActive
                          ? 'bg-blue-950/40 border-blue-500/60 shadow-md'
                          : 'bg-[#151D2F]/60 border-white/5 hover:border-white/15 hover:bg-[#151D2F]'
                      }`}
                    >
                      {/* Left node info */}
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-md flex items-center justify-center transition-colors ${
                          isActive || isPacketHere ? 'bg-blue-600 text-white' : 'bg-white/5 text-slate-400'
                        }`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-display text-xs font-bold text-slate-100">
                              {node.name}
                            </span>
                            <span className="text-[10px] text-slate-400 font-mono">
                              [{node.type}]
                            </span>
                          </div>
                          <span className="text-[11px] text-slate-400 font-body">
                            {node.metric}
                          </span>
                        </div>
                      </div>

                      {/* Right node status / Packet indicator */}
                      <div className="flex items-center gap-2">
                        {isPacketHere && (
                          <span className="text-[10px] font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/30 animate-pulse">
                            EVENT TRIGGER
                          </span>
                        )}
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                          isActive ? 'bg-blue-500/20 text-blue-300' : 'bg-white/5 text-slate-400'
                        }`}>
                          {node.status}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Peripheral Connected Modules */}
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="text-[11px] font-display font-semibold uppercase text-slate-400 tracking-wider mb-2">
                  Connected Sync Channels & Protocols
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {peripheralNodes.map((p) => {
                    const Icon = p.icon;
                    return (
                      <div
                        key={p.id}
                        className="flex items-center gap-1.5 p-2 rounded-md bg-[#151D2F]/40 border border-white/5 text-slate-300 text-[11px]"
                      >
                        <Icon className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span className="truncate">{p.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Footer status notice */}
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                <span>Architecture: Event-driven webhooks</span>
                <Link to="/technology" className="text-blue-400 hover:text-blue-300 font-medium">
                  View Tech Specs →
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
