import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Cpu, ArrowRight } from 'lucide-react';
import { NAVIGATION } from '../../data/navigation';
import { MegaMenu } from './MegaMenu';
import { Button } from '../common/Button';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { cn } from '../../utils/cn';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState({});
  const { isScrolled } = useScrollPosition();
  const location = useLocation();
  const navRef = useRef(null);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveMegaMenu(null);
  }, [location.pathname]);

  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveMegaMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMobileSubmenu = (name) => {
    setMobileExpanded((prev) => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  return (
    <header
      ref={navRef}
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-250',
        isScrolled
          ? 'bg-[#080C14]/90 backdrop-blur-md border-b border-white/10 shadow-lg py-3'
          : 'bg-transparent border-b border-white/5 py-4'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="group flex items-center gap-2.5 text-white focus:outline-none"
            aria-label="Nm Energy And Innovation Pvt Ltd Homepage"
          >
            <div >
              <img src="/ChatGPT Image Sep 1, 2026, 09_55_22 PM.png" alt="Nm Energy And Innovation Logo" className="w-13 h-12" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-white flex items-center gap-1">
                {/* Nm Energy And Innovation Pvt Ltd */}
              </span>
              
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {NAVIGATION.map((item) => {
              const hasMega = Boolean(item.megaMenu);
              const isActive = location.pathname.startsWith(item.href);
              const isMegaOpen = activeMegaMenu === item.name;

              return (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => hasMega && setActiveMegaMenu(item.name)}
                >
                  {hasMega ? (
                    <button
                      type="button"
                      onClick={() => setActiveMegaMenu(isMegaOpen ? null : item.name)}
                      aria-expanded={isMegaOpen}
                      className={cn(
                        'flex items-center gap-1 px-3.5 py-2 text-xs font-display font-semibold uppercase tracking-wider transition-colors rounded-md',
                        isActive || isMegaOpen
                          ? 'text-blue-400 bg-white/5'
                          : 'text-slate-300 hover:text-white hover:bg-white/5'
                      )}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={cn(
                          'w-3.5 h-3.5 transition-transform duration-200 opacity-70',
                          isMegaOpen && 'rotate-180 text-blue-400'
                        )}
                      />
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className={cn(
                        'block px-3.5 py-2 text-xs font-display font-semibold uppercase tracking-wider transition-colors rounded-md',
                        isActive
                          ? 'text-blue-400 bg-white/5'
                          : 'text-slate-300 hover:text-white hover:bg-white/5'
                      )}
                    >
                      {item.name}
                    </Link>
                  )}

                  {/* Mega Menu Dropdown */}
                  {hasMega && isMegaOpen && (
                    <MegaMenu
                      items={item.megaMenu}
                      onClose={() => setActiveMegaMenu(null)}
                    />
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/ai-audit"
              className="text-xs font-display font-medium text-slate-300 hover:text-white px-3 py-2 transition-colors"
            >
              System Audit
            </Link>

            <Button
              to="/contact"
              variant="primary"
              size="sm"
              icon={ArrowRight}
              iconPosition="right"
            >
              Build My System
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#080C14] border-b border-white/10 px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            {NAVIGATION.map((item) => {
              const hasMega = Boolean(item.megaMenu);
              const isExpanded = mobileExpanded[item.name];

              return (
                <div key={item.name} className="border-b border-white/5 pb-1">
                  {hasMega ? (
                    <div>
                      <button
                        type="button"
                        onClick={() => toggleMobileSubmenu(item.name)}
                        className="flex items-center justify-between w-full py-2.5 text-left text-sm font-display font-semibold text-slate-200"
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={cn(
                            'w-4 h-4 transition-transform text-slate-400',
                            isExpanded && 'rotate-180'
                          )}
                        />
                      </button>

                      {isExpanded && (
                        <div className="pl-3 pb-2 space-y-1 bg-white/[0.02] rounded-lg my-1">
                          {item.megaMenu.map((sub, idx) => (
                            <Link
                              key={idx}
                              to={sub.href}
                              className="block py-2 text-xs text-slate-300 hover:text-blue-400 font-body"
                            >
                              <div className="font-medium text-slate-200">{sub.title}</div>
                              <div className="text-[11px] text-slate-400">{sub.desc}</div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="block py-2.5 text-sm font-display font-semibold text-slate-200 hover:text-blue-400"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              );
            })}

            <div className="pt-4 flex flex-col gap-2">
              <Button to="/ai-audit" variant="secondary" size="md" className="w-full">
                Take AI Readiness Audit
              </Button>
              <Button to="/contact" variant="primary" size="md" className="w-full">
                Build My Business System
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
