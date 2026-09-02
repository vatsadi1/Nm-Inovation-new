import { SEO } from '../../components/common/SEO';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';

export function TermsPage() {
  return (
    <>
      <SEO
        title="Terms of Service |nm inovation Digital Systems"
        description="Terms of service and engineering engagement agreements atnm inovation Digital Systems."
        canonical="/terms"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Breadcrumbs items={[{ label: 'Terms of Service' }]} />
      </div>

      <section className="py-12 lg:py-16 bg-[#080C14] border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
            Terms of Service & Engagement Standards
          </h1>
          <p className="font-mono text-xs text-slate-400 mb-8">
            Last Updated: August 2026
          </p>

          <div className="space-y-6 text-sm text-slate-300 font-body leading-relaxed">
            <section>
              <h2 className="font-display text-base font-bold text-white mb-2">
                1. System Engagement Scope
              </h2>
              <p>
                All software engineering, custom workflow automation, and infrastructure deployments conducted bynm inovation Digital Systems are governed by individual Statement of Work (SOW) documents detailing deliverables, milestones, and acceptance criteria.
              </p>
            </section>

            <section>
              <h2 className="font-display text-base font-bold text-white mb-2">
                2. Intellectual Property & Code Ownership
              </h2>
              <p>
                Upon final settlement of project milestones, all custom application source code, bespoke database models, and workflow configurations developed specifically for the client become 100% client property.
              </p>
            </section>

            <section>
              <h2 className="font-display text-base font-bold text-white mb-2">
                3. Demonstration Content Disclaimer
              </h2>
              <p>
                Certain case studies, architecture visualizers, and interactive simulators on this website represent concept projects and engineering prototypes designed to illustrate system patterns.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
