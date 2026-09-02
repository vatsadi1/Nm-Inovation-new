import { SEO } from '../../components/common/SEO';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';

export function PrivacyPage() {
  return (
    <>
      <SEO
        title="Privacy Policy |nm inovation Digital Systems"
        description="Privacy policy and data governance practices atnm inovation Digital Systems."
        canonical="/privacy"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />
      </div>

      <section className="py-12 lg:py-16 bg-[#080C14] border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
            Privacy Policy & Data Isolation
          </h1>
          <p className="font-mono text-xs text-slate-400 mb-8">
            Last Updated: August 2026
          </p>

          <div className="space-y-6 text-sm text-slate-300 font-body leading-relaxed">
            <section>
              <h2 className="font-display text-base font-bold text-white mb-2">
                1. Data Custody and Model Isolation
              </h2>
              <p>
               nm inovation Digital Systems adheres to strict data isolation standards. In our client automation systems and Model Context Protocol (MCP) implementations, customer operational data, email transcripts, and CRM logs remain in your private tenant infrastructure. We never share, sell, or allow third-party AI models to train on proprietary business data.
              </p>
            </section>

            <section>
              <h2 className="font-display text-base font-bold text-white mb-2">
                2. Information Collected on This Website
              </h2>
              <p>
                When you submit an architectural inquiry or complete our AI Readiness Audit, we collect only the business contact information and project requirements you voluntarily provide. We do not track sensitive financial accounts or personal identifiers beyond standard business communication requirements.
              </p>
            </section>

            <section>
              <h2 className="font-display text-base font-bold text-white mb-2">
                3. Cookies and Telemetry
              </h2>
              <p>
                We use standard, privacy-respecting first-party analytics cookies to measure aggregated site velocity, Core Web Vitals, and route transitions. No invasive cross-site behavioral tracking is performed.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
