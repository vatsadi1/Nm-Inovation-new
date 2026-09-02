import { Link } from 'react-router-dom';
import { Layers, CheckCircle2, ArrowRight, Code2, ShieldCheck, Zap } from 'lucide-react';
import { SEO } from '../../components/common/SEO';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { CtaBanner } from '../../components/sections/CtaBanner';

export function DigitalProductsPage() {
  const capabilities = [
    { title: 'High-Converting Business Websites', desc: 'Bespoke, lightning-fast digital storefronts with sub-second page loads and integrated lead qualification.' },
    { title: 'Full-Stack Web Applications', desc: 'Custom SaaS platforms, client portals, and administrative software built on React & Node.js.' },
    { title: 'Mobile Applications (iOS & Android)', desc: 'Responsive cross-platform apps with offline caching, push notifications, and hardware sensor integration.' },
    { title: 'E-Commerce & Subscription Portals', desc: 'Headless commerce engines with customized checkout flows, automated invoice generation, and CRM sync.' },
    { title: 'Internal Tooling & Dashboards', desc: 'Role-based operational interfaces that eliminate manual spreadsheet tracking across your team.' },
    { title: 'API Gateway & Microservices', desc: 'Clean REST & WebSocket architectures ready for seamless database scaling.' }
  ];

  return (
    <>
      <SEO
        title="Digital Products & Custom Web Engineering |nm inovation"
        description="High-performance business websites, full-stack web applications, custom software platforms, and mobile apps built on modern React and Node.js architectures."
        canonical="/solutions/digital-products"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Breadcrumbs
          items={[
            { label: 'Solutions', href: '/solutions' },
            { label: 'Digital Products' }
          ]}
        />
      </div>

      <section className="py-12 lg:py-20 border-b border-white/5 bg-tech-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-display font-semibold uppercase tracking-wider mb-6">
              <Layers className="w-3.5 h-3.5" />
              Solution Pillar 01
            </div>

            <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-6">
              Digital Products: Web, Mobile & Custom Software Platforms
            </h1>

            <p className="font-body text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              We engineer digital platforms that serve as the commercial engine of your business. Every web app, client portal, and mobile build is architected for sub-second performance, strict security, and instant webhook connectivity.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button to="/contact" variant="primary" size="md" icon={ArrowRight}>
                Consult on a Web Platform
              </Button>
              <Button to="/ai-audit" variant="secondary" size="md">
                System Readiness Audit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-16 lg:py-24 bg-[#080C14] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Core Capabilities"
            title="Engineering Standards for Modern Software"
            description="Our software architecture ensures rapid iteration, exceptional UX, and zero proprietary lock-in."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0E1422] border border-white/10 hover:border-blue-500/30 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-600/10 text-blue-400 flex items-center justify-center font-mono font-bold text-xs mb-4">
                  0{idx + 1}
                </div>
                <h3 className="font-display font-bold text-base text-white mb-2">
                  {cap.title}
                </h3>
                <p className="font-body text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {cap.desc}
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
