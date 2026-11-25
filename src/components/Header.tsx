import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { Menu, X, ArrowUpRight, Phone, MapPin, Mail } from 'lucide-react';
import { COMPANY_INFO, BRAND_ASSETS } from '../data/companyData';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
  logoUrl?: string;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenConsultation,
  logoUrl = BRAND_ASSETS.logoUrl,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT US' },
    { id: 'services', label: 'OUR SERVICES' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'process', label: 'OUR PROCESS' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleLinkClick = (page: PageId) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0F1115]/95 backdrop-blur-md border-b border-[#252A34] py-3 shadow-xl'
            : 'bg-transparent py-4 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6">
            {/* Zone 1: Authentic Princeway Company Logo */}
            <button
              onClick={() => handleLinkClick('home')}
              className="flex items-center gap-3 text-left whitespace-nowrap shrink-0 group focus:outline-none cursor-pointer"
              aria-label="Princeway Electrical Construction Company Limited Homepage"
            >
              <div className="bg-white rounded-[3px] px-2 py-1 shadow-md border border-[#013281]/20 transition-transform duration-200 group-hover:scale-[1.02]">
                <img
                  src={logoUrl}
                  alt="Princeway Electrical Construction Company Limited Logo"
                  className="h-9 sm:h-10 w-auto object-contain"
                />
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="font-extrabold text-base tracking-wider text-[#F5F5F3] font-display">
                  PRINCEWAY
                </span>
                <span className="text-[9px] tracking-widest text-[#FB8F02] font-semibold -mt-0.5">
                  ELECTRICAL CONSTRUCTION CO. LTD
                </span>
              </div>
            </button>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold tracking-wider text-[#B7B9BC]">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleLinkClick(item.id)}
                    className={`relative py-1.5 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      isActive
                        ? 'text-[#F5F5F3] font-bold'
                        : 'text-[#B7B9BC] hover:text-[#F5F5F3]'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FB8F02] rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Zone 3: Primary CTA */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <button
                onClick={onOpenConsultation}
                className="px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-[#0B0F19] bg-[#FB8F02] hover:bg-[#E07E00] transition-all duration-200 rounded-[2px] flex items-center gap-1.5 shadow-lg shadow-[#FB8F02]/20 hover:shadow-[#FB8F02]/35 hover:translate-x-0.5 active:scale-95 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>DISCUSS YOUR PROJECT</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={onOpenConsultation}
                className="px-3 py-1.5 text-[11px] font-extrabold text-[#0B0F19] bg-[#FB8F02] rounded-[2px]"
              >
                DISCUSS
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-[#B7B9BC] hover:text-white rounded focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0F1115]/98 backdrop-blur-xl flex flex-col pt-24 px-6 pb-8 lg:hidden animate-in fade-in duration-200">
          <div className="flex flex-col space-y-4 flex-1">
            <div className="text-[10px] font-mono tracking-widest text-[#FB8F02] uppercase pb-2 border-b border-[#252A34]">
              NAVIGATION MENU
            </div>
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`text-left text-xl font-bold py-2 flex items-center justify-between border-b border-[#1c2028] ${
                    isActive ? 'text-[#FB8F02]' : 'text-[#F5F5F3] hover:text-[#FB8F02]'
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-60" />
                </button>
              );
            })}
          </div>

          <div className="pt-6 border-t border-[#252A34] space-y-4">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3.5 text-center text-sm font-extrabold uppercase tracking-wider text-[#0B0F19] bg-[#FB8F02] hover:bg-[#E07E00] rounded-[2px] shadow-lg flex items-center justify-center gap-2"
            >
              <span>DISCUSS YOUR PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <div className="pt-3 flex flex-col gap-2 text-xs text-[#B7B9BC]">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="flex items-center gap-2 text-[#F5F5F3] hover:text-[#FB8F02]"
              >
                <Phone className="w-4 h-4 text-[#FB8F02]" />
                <span>{COMPANY_INFO.phoneDisplay}</span>
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2 text-[#F5F5F3] hover:text-[#FB8F02] break-all"
              >
                <Mail className="w-4 h-4 text-[#FB8F02] shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FB8F02] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
