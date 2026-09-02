import { Link } from 'react-router-dom';
import { BarChart3, CheckCircle2, ArrowRight, LineChart, PieChart, ShieldAlert } from 'lucide-react';
import { SEO } from '../../components/common/SEO';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { Button } from '../../components/common/Button';
import { CtaBanner } from '../../components/sections/CtaBanner';

export function BusinessIntelligencePage() {
  const biFeatures = [
    { title: 'Executive KPI Telemetry', desc: 'Real-time dashboards displaying gross revenue, margin contribution, and operational throughput.' },
    { title: 'Blended CAC & ROAS Calculation', desc: 'Cross-platform attribution pulling spend from Google, Meta, and organic channels against actual closed cash.' },
    { title: 'Automated Weekly Executive Briefings', desc: 'Synthesized AI briefings delivered to CEO / leadership via WhatsApp and Email every Monday morning.' },
    { title: 'Operational Anomaly Alerts', desc: 'Instant Slack/SMS alerts when lead volume drops or customer support resolution time exceeds thresholds.' },
    { title: 'Customer Lifetime Value (LTV) Visualizers', desc: 'Cohort retention charts tracking repeat purchase velocity and churn patterns across customer segments.' },
    { title: 'Data Lake & SQL Pipelines', desc: 'Self-hosted ClickHouse or PostgreSQL ETL extraction pipelines keeping all your data in your own custody.' }
  ];

  return (
    <>
      <SEO
        title="Business Intelligence & Executive Analytics |nm inovation"
        description="Unified executive telemetry: Cross-platform CAC tracking, automated weekly AI briefings, customer lifetime value models, and real-time BI cockpits."
        canonical="/solutions/business-intelligence"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Breadcrumbs
          items={[
            { label: 'Solutions', href: '/solutions' },
            { label: 'Business Intelligence' }
          ]}
        />
      </div>

      <section className="py-12 lg:py-20 border-b border-white/5 bg-tech-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-display font-semibold uppercase tracking-wider mb-6">
              <BarChart3 className="w-3.5 h-3.5" />
              Solution Pillar 06
            </div>

            <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-6">
              Executive Telemetry & Business Intelligence Cockpits
            </h1>

            <p className="font-body text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              Move from lagging monthly accounting reports to live operational telemetry. Monitor real-time revenue, gross margin, lead velocity, and team efficiency in unified dashboards.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button to="/contact" variant="primary" size="md" icon={ArrowRight}>
                Consult on BI Systems
              </Button>
              <Button to="/ai-audit" variant="secondary" size="md">
                System Readiness Audit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Simulated Executive Telemetry Cockpit UI */}
      <section className="py-16 bg-[#090D17] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-[#0E1422] border border-blue-500/30 p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-display text-xs font-bold text-white uppercase tracking-wider">
                 nm inovation Executive Telemetry // Live Feed
                </span>
              </div>
              <span className="font-mono text-[11px] text-blue-400">
                Aggregated from 4 Core Sources
              </span>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-[#151D2F] border border-white/5">
                <div className="text-[11px] text-slate-400 font-body">Inbound Lead Velocity</div>
                <div className="font-display font-bold text-xl sm:text-2xl text-white mt-1">142 leads / wk</div>
                <div className="text-[10px] text-emerald-400 font-mono mt-1">▲ Sub-30s qualification active</div>
              </div>
              <div className="p-4 rounded-xl bg-[#151D2F] border border-white/5">
                <div className="text-[11px] text-slate-400 font-body">Blended CAC</div>
                <div className="font-display font-bold text-xl sm:text-2xl text-blue-400 mt-1">$38.40</div>
                <div className="text-[10px] text-slate-400 font-mono mt-1">Synced via CAPI</div>
              </div>
              <div className="p-4 rounded-xl bg-[#151D2F] border border-white/5">
                <div className="text-[11px] text-slate-400 font-body">Closed Pipeline Revenue</div>
                <div className="font-display font-bold text-xl sm:text-2xl text-white mt-1">$46,200</div>
                <div className="text-[10px] text-emerald-400 font-mono mt-1">Real-time Stripe sync</div>
              </div>
              <div className="p-4 rounded-xl bg-[#151D2F] border border-white/5">
                <div className="text-[11px] text-slate-400 font-body">Operational Leverage Score</div>
                <div className="font-display font-bold text-xl sm:text-2xl text-white mt-1">94 / 100</div>
                <div className="text-[10px] text-blue-400 font-mono mt-1">72h weekly time saved</div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-white/5 text-xs text-slate-300 font-mono flex items-center justify-between">
              <span>Weekly AI Briefing Status: Dispatched Monday 08:00 EST to Executive WhatsApp</span>
              <span className="text-emerald-400">STATUS: NOMINAL</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 lg:py-24 bg-[#080C14] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Capabilities"
            title="Data Architecture Standards"
            description="Our telemetry pipelines keep your data in your own infrastructure with zero third-party leakage."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {biFeatures.map((feat, idx) => (
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
