import { Link } from 'react-router-dom';
import { Database, CheckCircle2, ArrowRight, Layers, Lock, Cpu } from 'lucide-react';
import { SEO } from '../../components/common/SEO';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { Button } from '../../components/common/Button';
import { CtaBanner } from '../../components/sections/CtaBanner';

export function CrmErpPage() {
  const crmFeatures = [
    { title: 'Custom CRM Pipeline Engines', desc: 'Stages, custom fields, and automated deal movement tailored to the exact terminology of your sales operations.' },
    { title: 'Agile ERP & Inventory Hubs', desc: 'Track stock, supplier purchases, fulfillment milestones, and warehouse dispatches without bloated enterprise complexity.' },
    { title: 'Automated Invoicing & Stripe Reconciliation', desc: 'Generate PDF invoices automatically upon deal closing and sync payment statuses in real-time.' },
    { title: 'Role-Based Access Control (RBAC)', desc: 'Granular data security ensuring sales reps, managers, and accountants see only their authorized data.' },
    { title: 'Multi-Channel Contact Timelines', desc: 'Unified customer records displaying email threads, WhatsApp chats, ad clicks, and order history in one stream.' },
    { title: 'Instant Webhook Mesh', desc: 'Connects your CRM directly to your website forms, WhatsApp AI agents, and ad platform conversion APIs.' }
  ];

  return (
    <>
      <SEO
        title="Custom CRM & ERP Business Systems |nm inovation"
        description="Replace fragmented spreadsheets with a unified CRM and ERP operational backbone. Centralized customer records, inventory tracking, and billing pipelines."
        canonical="/solutions/crm-erp"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Breadcrumbs
          items={[
            { label: 'Solutions', href: '/solutions' },
            { label: 'CRM & ERP Systems' }
          ]}
        />
      </div>

      <section className="py-12 lg:py-20 border-b border-white/5 bg-tech-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-display font-semibold uppercase tracking-wider mb-6">
              <Database className="w-3.5 h-3.5" />
              Solution Pillar 02
            </div>

            <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-6">
              Custom CRM & ERP Operational Backbones
            </h1>

            <p className="font-body text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              Replace disjointed spreadsheets and fragmented SaaS subscriptions with a central operating nervous system. Track leads from first click through invoice settlement in one clear view.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button to="/contact" variant="primary" size="md" icon={ArrowRight}>
                Consult on CRM / ERP
              </Button>
              <Button to="/ai-audit" variant="secondary" size="md">
                System Readiness Audit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 lg:py-24 bg-[#080C14] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="System Modules"
            title="Operational Architecture for Scaling Teams"
            description="Our CRM and ERP systems eliminate double data entry and give leaders full visibility into operational bottlenecks."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {crmFeatures.map((feat, idx) => (
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
