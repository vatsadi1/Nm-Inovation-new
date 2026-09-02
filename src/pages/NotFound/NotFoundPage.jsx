import { Link } from 'react-router-dom';
import { Cpu, ArrowLeft, Home } from 'lucide-react';
import { SEO } from '../../components/common/SEO';
import { Button } from '../../components/common/Button';

export function NotFoundPage() {
  return (
    <>
      <SEO
        title="404: System Route Not Found"
        description="The requested route does not exist in thenm inovation Digital Systems network."
      />

      <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 bg-tech-grid text-center">
        <div className="max-w-md mx-auto rounded-2xl bg-[#0E1422] border border-white/15 p-8 sm:p-10 shadow-2xl">
          
          <div className="w-14 h-14 rounded-2xl bg-blue-600/20 text-blue-400 flex items-center justify-center border border-blue-500/30 mx-auto mb-6">
            <Cpu className="w-7 h-7" />
          </div>

          <div className="font-mono text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">
            ERR_404_ROUTE_NULL
          </div>

          <h1 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-3">
            System Route Not Found
          </h1>

          <p className="font-body text-xs sm:text-sm text-slate-400 leading-relaxed mb-8">
            The endpoint or resource you requested has been moved, re-indexed, or does not exist in our system registry.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button to="/" variant="primary" size="md" icon={Home} iconPosition="left">
              Return to Core BOS
            </Button>
            <Button to="/solutions" variant="secondary" size="md">
              Explore Solutions
            </Button>
          </div>

        </div>
      </div>
    </>
  );
}
