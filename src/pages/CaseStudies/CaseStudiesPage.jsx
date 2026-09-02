import { useState } from 'react';
import { SEO } from '../../components/common/SEO';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { CASE_STUDIES } from '../../data/caseStudies';
import { CaseStudyCard } from '../../components/cards/CaseStudyCard';
import { CtaBanner } from '../../components/sections/CtaBanner';

export function CaseStudiesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState('All');

  const industries = ['All', 'Real Estate', 'Manufacturing', 'Healthcare', 'Professional Services'];

  const filteredCaseStudies = selectedIndustry === 'All'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((cs) => cs.industry === selectedIndustry);

  return (
    <>
      <SEO
        title="Case Studies & Concept System Blueprints |nm inovation"
        description="Explore detailed architectural blueprints, challenges, solutions, and realistic operational outcomes from our concept case studies."
        canonical="/work"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Breadcrumbs items={[{ label: 'Work & Case Studies' }]} />
      </div>

      <section className="py-12 lg:py-16 border-b border-white/5 bg-tech-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Architectural Blueprints"
            title="System Implementations & Concept Projects"
            description="Explore how custom web applications, WhatsApp AI agents, and Model Context Protocol pipelines solve deep operational friction."
          />

          <div className="flex flex-wrap gap-2 pt-2">
            {industries.map((ind) => (
              <button
                key={ind}
                type="button"
                onClick={() => setSelectedIndustry(ind)}
                className={`px-4 py-2 rounded-xl text-xs font-display font-semibold transition-all border ${
                  selectedIndustry === ind
                    ? 'bg-blue-600 text-white border-blue-400 shadow-md'
                    : 'bg-[#0E1422] text-slate-400 border-white/10 hover:text-white hover:border-white/20'
                }`}
              >
                {ind}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[#080C14] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCaseStudies.map((cs) => (
              <CaseStudyCard key={cs.id} caseStudy={cs} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
