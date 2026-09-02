import { ShieldCheck, Cpu, Zap, TrendingUp, LineChart } from 'lucide-react';

export function TrustCredibility() {
  const pillars = [
    {
      icon: Cpu,
      title: 'Technology',
      desc: 'Production MERN architectures, custom APIs, and high-performance React frontends.'
    },
    {
      icon: Zap,
      title: 'Automation',
      desc: 'Sub-60s lead response engines, WhatsApp Cloud API, and self-hosted n8n pipelines.'
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      desc: 'High-intent search ads, Meta conversion tracking, and programmatic SEO foundations.'
    },
    {
      icon: LineChart,
      title: 'Intelligence',
      desc: 'Unified business intelligence cockpits measuring real-time CAC, ROAS, and unit margins.'
    }
  ];

  return (
    <section className="py-12 border-b border-white/5 bg-[#090D17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow statement */}
        <div className="text-center mb-10">
          <span className="font-display text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-300">
            BUILT FOR BUSINESSES THAT WANT MORE THAN A WEBSITE.
          </span>
          <p className="font-body text-xs sm:text-sm text-slate-400 mt-1 max-w-xl mx-auto">
            We engineer the connected operational infrastructure behind high-growth companies.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#0E1422] border border-white/10 hover:border-white/20 transition-colors flex flex-col items-start"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-base text-white mb-1.5">
                  {pillar.title}
                </h3>
                <p className="font-body text-xs text-slate-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Honest Architecture & Collaboration Placeholders */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-400" />
            <span className="font-display uppercase tracking-wider font-semibold">
              Ecosystem Standards:
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 font-mono text-[11px] text-slate-400">
            <span className="px-2.5 py-1 rounded bg-white/5 border border-white/5">[CLIENT / PARTNER ARCHITECTURE READY]</span>
            <span className="px-2.5 py-1 rounded bg-white/5 border border-white/5">[OPEN PROTOCOL / MCP COMPLIANT]</span>
            <span className="px-2.5 py-1 rounded bg-white/5 border border-white/5">[STRICT DATA ISOLATION]</span>
          </div>
        </div>

      </div>
    </section>
  );
}
