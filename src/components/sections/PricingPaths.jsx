import { Link } from 'react-router-dom';
import { Layers, Zap, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';

export function PricingPaths() {
  const paths = [
    {
      id: 'build',
      name: 'BUILD',
      tagline: 'For businesses starting or modernizing their foundation.',
      icon: Layers,
      idealFor: 'Companies with outdated websites, fragmented spreadsheets, or launching new digital services.',
      includes: [
        'Custom high-performance React web platform',
        'Direct CRM & lead ingestion webhooks',
        'Client / Customer Portal architecture',
        'Technical SEO & Core Web Vitals setup',
        'Full source code ownership'
      ],
      ctaText: 'Start with BUILD',
      isPopular: false
    },
    {
      id: 'automate',
      name: 'AUTOMATE',
      tagline: 'For businesses ready to eliminate repetitive manual work.',
      icon: Zap,
      idealFor: 'Teams spending 15+ hours weekly answering FAQs, manually updating CRMs, or chasing follow-ups.',
      includes: [
        '24/7 AI WhatsApp conversational agent',
        'Model Context Protocol (MCP) Multi-Gmail triage',
        'Self-hosted n8n event workflow pipelines',
        'Automated calendar scheduling & reminder sequences',
        'Supervised human-in-the-loop escalation'
      ],
      ctaText: 'Automate Operations',
      isPopular: true
    },
    {
      id: 'grow',
      name: 'GROW',
      tagline: 'For businesses ready to scale marketing and customer sales.',
      icon: TrendingUp,
      idealFor: 'Established businesses needing predictable acquisition and executive visibility over unit economics.',
      includes: [
        'High-intent Google Search & Meta Performance Ads',
        'Server-Side Conversion API (CAPI) Tracking',
        'Semi-automated Social Content Creation & Scheduling',
        'Executive Real-Time BI Dashboard with CAC & LTV',
        'Bi-weekly strategic attribution reviews'
      ],
      ctaText: 'Scale with GROW',
      isPopular: false
    }
  ];

  return (
    <section className="py-20 lg:py-28 border-b border-white/5 bg-[#080C14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading
          eyebrow="Engagement Models"
          title="Every Business Needs a Different System"
          description="We do not force arbitrary tier packages. We structure our engineering engagements around your exact stage of business maturity."
          align="center"
        />

        {/* 3 Service Paths */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {paths.map((path) => {
            const Icon = path.icon;

            return (
              <div
                key={path.id}
                className={`rounded-2xl p-7 flex flex-col justify-between transition-all relative ${
                  path.isPopular
                    ? 'bg-[#0E1422] border-2 border-blue-500/80 shadow-2xl scale-[1.02] z-10'
                    : 'bg-[#0E1422]/60 border border-white/10 hover:border-white/20'
                }`}
              >
                {path.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <Badge variant="accent" size="sm">
                      Highest Operational Leverage
                    </Badge>
                  </div>
                )}

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      path.isPopular ? 'bg-blue-600 text-white' : 'bg-white/5 text-blue-400'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-black text-2xl text-white tracking-tight">
                        {path.name}
                      </h3>
                    </div>
                  </div>

                  <p className="font-body text-xs text-slate-300 font-medium mb-4">
                    {path.tagline}
                  </p>

                  <div className="p-3 rounded-lg bg-black/40 border border-white/5 mb-6 text-xs text-slate-400 font-body">
                    <span className="text-slate-300 font-semibold">Ideal For:</span> {path.idealFor}
                  </div>

                  <div className="space-y-3 mb-8">
                    <div className="text-[11px] font-display uppercase tracking-wider text-slate-400 font-bold">
                      What We Engineer:
                    </div>
                    <ul className="space-y-2.5 text-xs text-slate-200 list-none p-0 m-0 font-body">
                      {path.includes.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <Button
                    to="/contact"
                    variant={path.isPopular ? 'primary' : 'secondary'}
                    size="md"
                    className="w-full"
                    icon={ArrowRight}
                  >
                    {path.ctaText}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center text-xs text-slate-400 font-body">
          Need a hybrid architecture combining elements of all three?{' '}
          <Link to="/contact" className="text-blue-400 hover:text-blue-300 font-semibold">
            Talk to an Expert Engineer →
          </Link>
        </div>

      </div>
    </section>
  );
}
