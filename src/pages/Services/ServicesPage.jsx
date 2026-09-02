import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layers, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SEO } from '../../components/common/SEO';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { SERVICES } from '../../data/services';
import { ServiceCard } from '../../components/cards/ServiceCard';
import { CtaBanner } from '../../components/sections/CtaBanner';

export function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Digital Products',
    'Business Systems',
    'AI & Automation',
    'Marketing Systems',
    'Content Engine',
    'Business Intelligence'
  ];

  const filteredServices = selectedCategory === 'All'
    ? SERVICES
    : SERVICES.filter((s) => s.category === selectedCategory);

  return (
    <>
      <SEO
        title="Services & Capabilities |nm inovation Digital Systems"
        description="Explore our full engineering capabilities: Business Websites, Custom Web Apps, CRM/ERP backbones, WhatsApp AI Agents, MCP Integrations, and BI Cockpits."
        canonical="/services"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Breadcrumbs items={[{ label: 'Services' }]} />
      </div>

      {/* Header */}
      <section className="py-12 lg:py-16 border-b border-white/5 bg-tech-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Capabilities Catalog"
            title="End-to-End Digital Solutions for Modern Businesses"
            description="From high-converting web applications to autonomous WhatsApp agents and executive telemetry, we build the complete digital infrastructure behind your growth."
          />

          {/* Category Filter Pills */}
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

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-[#080C14] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((srv) => (
              <ServiceCard key={srv.id} service={srv} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
