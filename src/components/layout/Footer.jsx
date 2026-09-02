import { Link } from 'react-router-dom';
import { Cpu, ArrowUpRight, Shield, CheckCircle2 } from 'lucide-react';
import { BRAND } from '../../constants/brand';
import { FOOTER_LINKS } from '../../data/navigation';

export function Footer() {
  return (
    <footer className="bg-[#05080E] border-t border-white/10 text-slate-400 text-sm">
      {/* Upper Editorial Philosophy Block */}
      <div className="border-b border-white/5 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="font-display text-xs font-semibold uppercase tracking-wider text-blue-400">
                  Digital Operating Standard
                </span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                {BRAND.tagline}
              </h2>
              <p className="font-body text-slate-400 text-base mt-2 max-w-2xl">
                {BRAND.subTagline}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-display font-semibold text-sm rounded-lg transition-colors shadow-sm w-full sm:w-auto"
              >
                Schedule Architecture Call
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                to="/ai-audit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#151D2F] hover:bg-[#1C273E] text-slate-200 font-display font-semibold text-sm rounded-lg border border-white/10 transition-colors w-full sm:w-auto"
              >
                Take 2-Min System Audit
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Link Columns */}
      <div className="py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6">
          {/* Brand Info */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 text-white mb-4">
             <div className="col-span-2 md:col-span-3 lg:col-span-2">
  <Link to="/" className="inline-flex items-center mb-4">
    <img
      src="ChatGPT Image Sep 1, 2026, 09_55_22 PM.png"
      alt="NM Innovation"
      className="h-11 w-auto object-contain"
    />
  </Link>
          </div>
              <span className="font-display font-extrabold text-lg tracking-tight text-white">
                NM INOVATION
              </span>
            </Link>
            <p className="font-body text-xs text-slate-400 leading-relaxed mb-6 pr-4">
              {BRAND.description}
            </p>
            
            <div className="space-y-1.5 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                <span>Production MERN & Node Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                <span>MCP & n8n Enterprise Orchestration</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-blue-400" />
                <span>Zero Third-Party Model Training</span>
              </div>
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h3 className="font-display text-xs font-bold text-white uppercase tracking-wider mb-4">
              Solutions
            </h3>
            <ul className="space-y-2.5 text-xs list-none p-0 m-0">
              {FOOTER_LINKS.solutions.map((item, idx) => (
                <li key={idx}>
                  <Link to={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Column */}
          <div>
            <h3 className="font-display text-xs font-bold text-white uppercase tracking-wider mb-4">
              Industries
            </h3>
            <ul className="space-y-2.5 text-xs list-none p-0 m-0">
              {FOOTER_LINKS.industries.map((item, idx) => (
                <li key={idx}>
                  <Link to={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-display text-xs font-bold text-white uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 text-xs list-none p-0 m-0">
              {FOOTER_LINKS.company.map((item, idx) => (
                <li key={idx}>
                  <Link to={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Legal Column */}
          <div>
            <h3 className="font-display text-xs font-bold text-white uppercase tracking-wider mb-4">
              Resources & Legal
            </h3>
            <ul className="space-y-2.5 text-xs list-none p-0 m-0">
              {FOOTER_LINKS.resources.map((item, idx) => (
                <li key={idx}>
                  <Link to={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-white/5">
                <Link to="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Disclaimer */}
      <div className="border-t border-white/5 py-6 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            ©2025 NM INOVATION. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <a href= "https://www.instagram.com/nminnovation2024?igsi=MXcxcmc1bzVsYTY2Yw==" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
              <span>•</span>
              {/* <a href={BRAND.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Facebook</a>
              <span>•</span> */}
              <a href={BRAND.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
              <span>•</span>
              <a href={BRAND.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
              <span>•</span>
              <a href={BRAND.social.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">X</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
