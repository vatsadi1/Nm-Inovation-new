import { Link } from 'react-router-dom';
import { Cpu, Server, Bot, Zap, Cloud, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { SEO } from '../../components/common/SEO';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { TECHNOLOGIES_ECOSYSTEM } from '../../data/technologies';
import { CtaBanner } from '../../components/sections/CtaBanner';

export function TechnologyPage() {
  const categoryIcons = [Cpu, Server, Bot, Zap, Cloud];

  return (
    <>
      <SEO
        title="Technology Stack & Ecosystem |nm inovation Digital Systems"
        description="Explore the technologies we work with: MERN stack, React, Node.js, Express, MongoDB, PostgreSQL, Anthropic Claude, OpenAI, n8n, and Model Context Protocol (MCP)."
        canonical="/technology"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Breadcrumbs items={[{ label: 'Technology Stack' }]} />
      </div>

      <section className="py-12 lg:py-20 border-b border-white/5 bg-tech-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-display font-semibold uppercase tracking-wider mb-6">
              <Cpu className="w-3.5 h-3.5" />
              Engineering Standard
            </div>

            <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-6">
              {TECHNOLOGIES_ECOSYSTEM.headline}
            </h1>

            <p className="font-body text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              {TECHNOLOGIES_ECOSYSTEM.subheadline} We structure all projects with clean frontend/backend separation so systems can scale without re-architecture.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button to="/contact" variant="primary" size="md" icon={ArrowRight}>
                Discuss Your Technical Architecture
              </Button>
              <Button to="/ai-audit" variant="secondary" size="md">
                System Readiness Audit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Deep-Dive Categories */}
      <section className="py-16 lg:py-24 bg-[#080C14] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {TECHNOLOGIES_ECOSYSTEM.categories.map((cat, idx) => {
            const Icon = categoryIcons[idx] || Cpu;

            return (
              <div
                key={cat.name}
                className="rounded-2xl bg-[#0E1422] border border-white/10 p-6 sm:p-8 lg:p-10 shadow-xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-heading text-xl sm:text-2xl font-bold text-white">
                      {cat.name}
                    </h2>
                    <p className="font-body text-xs text-slate-400">
                      {cat.tagline}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                  {cat.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="p-4 rounded-xl bg-[#151D2F] border border-white/5"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-display font-bold text-sm text-white">
                          {item.name}
                        </span>
                        <span className="text-[10px] font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">
                          {item.type}
                        </span>
                      </div>
                      <p className="font-body text-xs text-slate-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
