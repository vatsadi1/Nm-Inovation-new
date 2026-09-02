import { useState } from 'react';
import { Cpu, Server, Bot, Zap, Cloud, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { TECHNOLOGIES_ECOSYSTEM } from '../../data/technologies';
import { Badge } from '../common/Badge';

export function TechEcosystem() {
  const [activeCatIndex, setActiveCatIndex] = useState(0);

  const categoryIcons = [
    Cpu,
    Server,
    Bot,
    Zap,
    Cloud
  ];

  const currentCat = TECHNOLOGIES_ECOSYSTEM.categories[activeCatIndex];

  return (
    <section className="py-20 lg:py-28 border-b border-white/5 bg-[#080C14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading
          eyebrow="Technical Foundation"
          title={TECHNOLOGIES_ECOSYSTEM.headline}
          description={TECHNOLOGIES_ECOSYSTEM.subheadline}
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {TECHNOLOGIES_ECOSYSTEM.categories.map((cat, idx) => {
            const Icon = categoryIcons[idx] || Cpu;
            const isActive = activeCatIndex === idx;

            return (
              <button
                key={cat.name}
                type="button"
                onClick={() => setActiveCatIndex(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-display text-xs font-semibold transition-all border ${
                  isActive
                    ? 'bg-blue-600 text-white border-blue-400 shadow-md'
                    : 'bg-[#0E1422] text-slate-400 border-white/10 hover:text-slate-200 hover:border-white/20'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Technology Stack Grid */}
        <div className="rounded-2xl bg-[#0E1422] border border-white/10 p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 mb-6 gap-2">
            <div>
              <h3 className="font-heading text-xl font-bold text-white tracking-tight">
                {currentCat.name}
              </h3>
              <p className="font-body text-xs text-slate-400 mt-0.5">
                {currentCat.tagline}
              </p>
            </div>
            <Badge variant="subtle" size="sm">
              Standardized Architecture
            </Badge>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentCat.items.map((tech, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#151D2F] border border-white/5 hover:border-blue-500/30 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-display font-bold text-sm text-white">
                      {tech.name}
                    </span>
                    <span className="text-[10px] font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">
                      {tech.type}
                    </span>
                  </div>
                  <p className="font-body text-xs text-slate-300 leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 font-body">
            <span>Engineering standard: Strict frontend/backend separation</span>
            <span className="font-mono text-blue-400">Node.js + Express + MongoDB Ready</span>
          </div>
        </div>

      </div>
    </section>
  );
}
