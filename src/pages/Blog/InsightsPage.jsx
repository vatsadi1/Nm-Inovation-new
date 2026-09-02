import { useState } from 'react';
import { SEO } from '../../components/common/SEO';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { INSIGHTS } from '../../data/insights';
import { InsightCard } from '../../components/cards/InsightCard';
import { CtaBanner } from '../../components/sections/CtaBanner';

export function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'AI Automation',
    'MCP',
    'CRM',
    'WhatsApp Automation'
  ];

  const filteredInsights = selectedCategory === 'All'
    ? INSIGHTS
    : INSIGHTS.filter((ins) => ins.category === selectedCategory);

  return (
    <>
      <SEO
        title="Engineering Insights & Digital Operations Knowledge |nm inovation"
        description="Technical articles and architectural breakdowns on AI automation, Model Context Protocol (MCP), CRM architecture, and WhatsApp Cloud API lead generation."
        canonical="/insights"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Breadcrumbs items={[{ label: 'Insights' }]} />
      </div>

      <section className="py-12 lg:py-16 border-b border-white/5 bg-tech-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Knowledge & Architecture"
            title="Engineering Insights & Operational Systems"
            description="Deep-dive articles and practical guides on building event-driven businesses, autonomous workflows, and unified CRM systems."
          />

          <div className="flex flex-wrap gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-display font-semibold transition-all border ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white border-blue-400 shadow-md'
                    : 'bg-[#0E1422] text-slate-400 border-white/10 hover:text-white hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[#080C14] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredInsights.map((insight) => (
              <InsightCard key={insight.id} insight={insight} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
