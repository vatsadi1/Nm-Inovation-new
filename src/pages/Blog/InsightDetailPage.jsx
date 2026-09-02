import { useParams, Navigate, Link } from 'react-router-dom';
import { Clock, Calendar, ArrowLeft, ArrowRight, BookOpen, CheckCircle2, ShieldAlert } from 'lucide-react';
import { SEO } from '../../components/common/SEO';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { INSIGHTS } from '../../data/insights';
import { CtaBanner } from '../../components/sections/CtaBanner';

export function InsightDetailPage() {
  const { slug } = useParams();
  const insight = INSIGHTS.find((i) => i.slug === slug);

  if (!insight) {
    return <Navigate to="/insights" replace />;
  }

  const structuredData = {
    '@type': 'Article',
    'headline': insight.title,
    'description': insight.summary,
    'datePublished': '2026-08-24T08:00:00Z',
    'author': {
      '@type': 'Organization',
      'name': 'nminovation Digital Systems Engineering Team'
    }
  };

  const relatedArticles = INSIGHTS.filter((i) => i.id !== insight.id).slice(0, 2);

  return (
    <>
      <SEO
        title={insight.title}
        description={insight.summary}
        canonical={`/insights/${insight.slug}`}
        ogType="article"
        structuredData={structuredData}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Breadcrumbs
          items={[
            { label: 'Insights', href: '/insights' },
            { label: insight.title }
          ]}
        />
      </div>

      {/* Article Header */}
      <article className="py-12 lg:py-16 border-b border-white/5 bg-tech-grid">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Badge variant="accent" size="sm">
              {insight.category}
            </Badge>
            <span className="flex items-center gap-1 text-xs font-mono text-slate-400">
              <Calendar className="w-3.5 h-3.5" />
              {insight.publishedDate}
            </span>
            <span className="flex items-center gap-1 text-xs font-mono text-slate-400">
              <Clock className="w-3.5 h-3.5" />
              {insight.readTime}
            </span>
          </div>

          <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-6">
            {insight.title}
          </h1>

          <p className="font-body text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
            {insight.summary}
          </p>

          <div className="p-3 rounded-xl bg-blue-950/20 border border-blue-500/20 text-xs text-slate-400 font-mono flex items-center justify-between">
            <span>Author: {insight.author}</span>
            <span className="text-blue-400">[{insight.note}]</span>
          </div>

        </div>
      </article>

      {/* Article Body Content */}
      <section className="py-16 lg:py-24 bg-[#080C14] border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Key Takeaways Box */}
          <div className="p-6 rounded-2xl bg-[#0E1422] border border-blue-500/30 mb-10 shadow-lg">
            <div className="text-xs font-display font-bold uppercase tracking-wider text-blue-400 mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Architectural Takeaways
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-200 list-none p-0 m-0 font-body">
              {insight.takeaways.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Paragraphs */}
          <div className="space-y-6 text-slate-300 font-body text-sm sm:text-base leading-relaxed">
            {insight.content.map((paragraph, idx) => (
              <p key={idx}>
                {paragraph}
              </p>
            ))}
          </div>

          {/* Back Navigation */}
          <div className="mt-12 pt-6 border-t border-white/10 flex items-center justify-between">
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-xs font-display font-semibold text-slate-400 hover:text-white"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Insights
            </Link>

            <Button to="/contact" variant="primary" size="sm" icon={ArrowRight}>
              Discuss System Implementation
            </Button>
          </div>

        </div>
      </section>

      {/* Related Insights */}
      <section className="py-16 bg-[#090D17] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-heading text-xl font-bold text-white mb-6">
            Related Architectural Articles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.id}
                to={`/insights/${rel.slug}`}
                className="p-6 rounded-2xl bg-[#0E1422] border border-white/10 hover:border-blue-500/30 transition-colors block"
              >
                <Badge variant="accent" size="sm" className="mb-2">
                  {rel.category}
                </Badge>
                <h4 className="font-heading text-lg font-bold text-white mb-2">
                  {rel.title}
                </h4>
                <p className="font-body text-xs text-slate-400 line-clamp-2">
                  {rel.summary}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
