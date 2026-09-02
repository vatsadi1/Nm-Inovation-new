import { Mail, Phone, MapPin, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SEO } from '../../components/common/SEO';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { ContactForm } from '../../components/forms/ContactForm';
import { BRAND } from '../../constants/brand';

export function ContactPage() {
  return (
    <>
      <SEO
        title="Schedule an Architecture Consultation |nm inovation"
        description="Connect with senior systems engineers to design a custom digital operating system, CRM backbone, or WhatsApp AI automation pipeline."
        canonical="/contact"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Breadcrumbs items={[{ label: 'Contact Us' }]} />
      </div>

      <section className="py-12 lg:py-16 border-b border-white/5 bg-tech-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Architecture Consultation"
            title="Let's Build the System Behind Your Business"
            description="Discuss your current operational bottlenecks, siloed tools, and growth goals directly with our systems engineers."
          />
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[#080C14] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Contact Info & Standards */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h3 className="font-heading text-xl font-bold text-white mb-3">
                  Direct Architecture Inquiries
                </h3>
                <p className="font-body text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  Every submission is reviewed by senior software engineers—not commissioned sales representatives.
                </p>

                <div className="space-y-4 text-xs font-body text-slate-300">
                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0E1422] border border-white/5">
                    <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                    <div>
                      <div className="font-display font-semibold text-white">Direct Email</div>
                      <div className="text-slate-400 font-mono">{BRAND.contact.email}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0E1422] border border-white/5">
                    <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                    <div>
                      <div className="font-display font-semibold text-white">Telephone / WhatsApp</div>
                      <div className="text-slate-400 font-mono">{BRAND.contact.phone}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0E1422] border border-white/5">
                    <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                    <div>
                      <div className="font-display font-semibold text-white">Engineering Hours</div>
                      <div className="text-slate-400">{BRAND.contact.hours}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0E1422] border border-white/5">
                    <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                    <div>
                      <div className="font-display font-semibold text-white">Operations Center</div>
                      <div className="text-slate-400">{BRAND.contact.office}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Consultation Standards Box */}
              <div className="p-5 rounded-2xl bg-blue-950/20 border border-blue-500/30 text-xs text-slate-300 space-y-2.5">
                <div className="font-display font-bold text-white text-sm flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  What to Expect on Our Call:
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" />
                  <span>30-minute deep dive into your current tools and friction points.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" />
                  <span>Interactive review of target data schemas and webhook flows.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" />
                  <span>Transparent timeline and custom system scope breakdown.</span>
                </div>
              </div>
            </div>

            {/* Right: Validated Interactive Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
