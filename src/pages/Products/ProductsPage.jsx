import { Link } from 'react-router-dom';
import { Cpu, CheckCircle2, ArrowRight, Sparkles, Layers } from 'lucide-react';
import { SEO } from '../../components/common/SEO';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { PRODUCTS } from '../../data/products';
import { CtaBanner } from '../../components/sections/CtaBanner';

export function ProductsPage() {
  return (
    <>
      <SEO
        title="Products & System Accelerators |nm inovation Digital Systems"
        description="Pre-engineered operational frameworks: Multi-Inbox MCP Workspace, WhatsApp Sales Router, Unified BI Cockpit, and Social Content Engine."
        canonical="/products"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Breadcrumbs items={[{ label: 'Products & Accelerators' }]} />
      </div>
      

      <section className="py-12 lg:py-16 border-b border-white/5 bg-tech-grid">
      
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Pre-Engineered Systems"
            title="Operational Accelerators & Architectures"
            description="Battle-tested foundational architectures we customize and deploy into your enterprise infrastructure."
          />
          
        </div>
        
      </section>
       <section className="relative w-full h-[350px] overflow-hidden">
  <video
    className="absolute inset-0 w-full h-full object-cover"
    autoPlay
    muted
    loop
    playsInline
  >
    <source src="\nmvideo.mp4" type="video/mp4" />
  </video>

  {/* Optional dark overlay */}
  <div className="absolute inset-0 bg-black/30" />
</section>

      

      <section className="py-16 lg:py-24 bg-[#080C14] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PRODUCTS.map((prod) => (
              <div
                key={prod.id}
                className="rounded-2xl bg-[#0E1422] border border-white/10 p-6 sm:p-8 hover:border-blue-500/30 transition-all flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <Badge variant="accent" size="sm">
                      {prod.badge}
                    </Badge>
                    <span className="text-xs font-mono text-slate-400">
                      {prod.category}
                    </span>
                  </div>

                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-white mb-3">
                    {prod.title}
                  </h2>

                  <p className="font-body text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {prod.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="text-[11px] font-display uppercase tracking-wider text-slate-400 font-bold">
                      Pre-Engineered Components:
                    </div>
                    <ul className="space-y-2 text-xs text-slate-200 list-none p-0 m-0 font-body">
                      {prod.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {prod.stack.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded bg-[#151D2F] border border-white/5 text-slate-400 font-mono text-[10px]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[11px] font-body text-slate-500">
                    Deployable into Private Cloud
                  </span>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-display font-semibold text-blue-400 hover:text-blue-300"
                  >
                    Request System Deployment <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
