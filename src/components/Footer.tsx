import React from 'react';
import { PageId } from '../types';
import { COMPANY_INFO, SERVICES_DATA, BRAND_ASSETS } from '../data/companyData';
import { Phone, MapPin, Mail, ExternalLink, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
  logoUrl?: string;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenConsultation,
  logoUrl = BRAND_ASSETS.logoUrl,
}) => {
  return (
    <footer className="relative bg-[#0B0D11] border-t border-[#222731] pt-16 pb-12 overflow-hidden">
      <div className="absolute inset-0 bg-architectural-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Upper Brand & Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-[#222731]">
          {/* Brand Info (Cols 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="bg-white rounded-[4px] px-2.5 py-1.5 shadow-md border border-[#013281]/20 shrink-0">
                <img
                  src={logoUrl}
                  alt="Princeway Electrical Construction Company Limited Logo"
                  className="h-12 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg tracking-wider text-[#F5F5F3] font-display">
                  PRINCEWAY
                </span>
                <span className="text-[9px] tracking-widest text-[#B7B9BC] -mt-0.5">
                  ELECTRICAL CONSTRUCTION COMPANY LIMITED
                </span>
              </div>
            </div>

            <p className="text-xs font-mono tracking-wider text-[#FB8F02] uppercase font-semibold">
              {COMPANY_INFO.proposedTagline}
            </p>

            <p className="text-sm text-[#B7B9BC] max-w-md leading-relaxed">
              {COMPANY_INFO.supportingStatement} Serving residential, commercial and infrastructure needs in Owerri, Imo State, Nigeria.
            </p>

            {/* Discreet Google Business Profile Link */}
            <div className="pt-2">
              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#14171D] border border-[#252A34] rounded hover:border-[#FB8F02] transition-colors text-xs text-[#B7B9BC] hover:text-[#F5F5F3] group"
              >
                <span>Official Google Business Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#FB8F02]" />
              </a>
            </div>
          </div>

          {/* Quick Navigation (Cols 5-6) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-[#F5F5F3] font-bold">
              NAVIGATION
            </div>
            <ul className="space-y-2 text-sm text-[#B7B9BC]">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#FB8F02] transition-colors text-left cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#FB8F02] transition-colors text-left cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#FB8F02] transition-colors text-left cursor-pointer"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('projects')}
                  className="hover:text-[#FB8F02] transition-colors text-left cursor-pointer"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('process')}
                  className="hover:text-[#FB8F02] transition-colors text-left cursor-pointer"
                >
                  Our Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#FB8F02] transition-colors text-left cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Our Services in Mandatory Exact Order (Cols 7-9) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-[#F5F5F3] font-bold">
              OUR SERVICES
            </div>
            <ul className="space-y-2.5 text-sm text-[#B7B9BC]">
              {SERVICES_DATA.map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => onNavigate('services')}
                    className="hover:text-[#FB8F02] transition-colors text-left flex items-center gap-2 cursor-pointer"
                  >
                    <span className="text-xs font-mono text-[#FB8F02]">{service.number}.</span>
                    <span>{service.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Location (Cols 10-12) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-[#F5F5F3] font-bold">
              OFFICIAL OFFICE
            </div>
            <div className="space-y-3 text-sm text-[#B7B9BC]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#FB8F02] shrink-0 mt-1" />
                <span className="leading-snug">{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#FB8F02] shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="text-[#F5F5F3] font-semibold hover:text-[#FB8F02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FB8F02] rounded-xs transition-colors"
                >
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#FB8F02] shrink-0 mt-1" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-[#F5F5F3] font-semibold hover:text-[#FB8F02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FB8F02] rounded-xs transition-colors break-all"
                  aria-label={`Email Princeway Electrical Construction Company Limited at ${COMPANY_INFO.email}`}
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#FB8F02] hover:bg-[#E07E00] text-[#0B0F19] font-extrabold text-xs uppercase tracking-wider rounded-[2px] transition-colors cursor-pointer"
                >
                  <span>DISCUSS YOUR PROJECT</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Preserved Signature Metallic Slabs with Princeway Navy + Amber Rim Glow */}
        <div className="pt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            <div className="relative group">
              <div className="metallic-slab p-6 rounded-md flex flex-col justify-between min-h-[110px] relative z-10 transition-all duration-300 group-hover:border-[#FB8F02]/70">
                <div className="font-display font-extrabold text-sm tracking-widest text-[#F5F5F3] uppercase">
                  PRINCEWAY
                </div>
                <div className="text-[10px] font-mono tracking-widest text-[#B7B9BC] uppercase">
                  POWERING PROGRESS. BUILDING POSSIBILITIES.
                </div>
              </div>
              <div className="absolute -bottom-1 inset-x-4 h-2 bg-[#013281]/75 blur-md rounded-full pointer-events-none group-hover:bg-[#FB8F02]/60 transition-all duration-300" />
            </div>

            <div className="relative group">
              <div className="metallic-slab p-6 rounded-md flex flex-col justify-between min-h-[110px] relative z-10 transition-all duration-300 group-hover:border-[#FB8F02]/70">
                <div className="flex items-center justify-between text-xs font-semibold text-[#B7B9BC]">
                  <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors cursor-pointer">
                    Electrical
                  </button>
                  <span className="text-[#353A44]">|</span>
                  <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors cursor-pointer">
                    Building
                  </button>
                  <span className="text-[#353A44]">|</span>
                  <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors cursor-pointer">
                    Borehole
                  </button>
                </div>
                <div className="text-[10px] font-mono tracking-widest text-[#FB8F02] uppercase font-bold">
                  THREE CORE DIVISIONS
                </div>
              </div>
              <div className="absolute -bottom-1 inset-x-4 h-2 bg-[#013281]/75 blur-md rounded-full pointer-events-none group-hover:bg-[#FB8F02]/60 transition-all duration-300" />
            </div>

            <div className="relative group">
              <div className="metallic-slab p-6 rounded-md flex flex-col justify-between min-h-[110px] relative z-10 transition-all duration-300 group-hover:border-[#FB8F02]/70">
                <div className="font-display font-extrabold text-sm tracking-widest text-[#F5F5F3] uppercase">
                  62 WETHERAL ROAD
                </div>
                <div className="text-[10px] font-mono tracking-widest text-[#B7B9BC] uppercase">
                  OWERRI, IMO STATE, NIGERIA
                </div>
              </div>
              <div className="absolute -bottom-1 inset-x-4 h-2 bg-[#013281]/75 blur-md rounded-full pointer-events-none group-hover:bg-[#FB8F02]/60 transition-all duration-300" />
            </div>
          </div>
        </div>

        {/* Bottom Legal Line & Developer Credit */}
        <div className="mt-12 pt-6 border-t border-[#1b1f27] flex flex-col gap-4 text-xs text-[#76797E]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
            <div>
              Copyright © {new Date().getFullYear()} Princeway Electrical Construction Company Limited. All rights reserved.
            </div>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-4 gap-y-1">
              <span className="text-[11px] font-mono">62 Wetheral Road, Owerri, Imo State</span>
              <span aria-hidden="true">·</span>
              <span>Tel: {COMPANY_INFO.phoneDisplay}</span>
            </div>
          </div>

          <div className="pt-3 border-t border-[#161a21] flex items-center justify-center md:justify-end text-xs text-[#8A919E]">
            <span>
              Website developed by{' '}
              <a
                href={COMPANY_INFO.developerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#B7B9BC] hover:text-[#FB8F02] underline underline-offset-4 decoration-[#353C49] hover:decoration-[#FB8F02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FB8F02] focus-visible:text-[#FB8F02] rounded-xs transition-colors"
              >
                {COMPANY_INFO.developerName}
              </a>
              .
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
