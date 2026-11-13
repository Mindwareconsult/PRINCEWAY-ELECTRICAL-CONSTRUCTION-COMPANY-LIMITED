import React from 'react';
import { BRAND_ASSETS } from '../data/companyData';

interface HeroArchitecturalGraphicProps {
  heroImageUrl?: string;
}

export const HeroArchitecturalGraphic: React.FC<HeroArchitecturalGraphicProps> = ({
  heroImageUrl = BRAND_ASSETS.heroImageUrl,
}) => {
  if (heroImageUrl) {
    return (
      <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[580px] overflow-hidden rounded-xl bg-[#12151B] border border-[#252A34] shadow-2xl group">
        <img
          src={heroImageUrl}
          alt="Princeway Electrical Construction Company Limited project showcase"
          referrerPolicy="no-referrer"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1115]/90 via-[#0F1115]/25 to-transparent pointer-events-none" />
        <div className="absolute top-4 left-4 text-[10px] font-mono tracking-widest text-[#F5F5F3]/80 bg-[#0F1115]/75 backdrop-blur px-2.5 py-1 rounded border border-[#2D3340] select-none">
          62 WETHERAL RD · OWERRI, IMO STATE
        </div>
        <div className="absolute bottom-5 left-5 bg-[#0F1115]/90 backdrop-blur border border-[#013281]/60 px-3.5 py-2 rounded text-left">
          <div className="text-[10px] tracking-wider text-[#FB8F02] uppercase font-mono font-bold">
            AUTHENTIC PROJECT SHOWCASE
          </div>
          <div className="text-xs font-semibold text-[#F5F5F3]">
            PRINCEWAY ELECTRICAL &amp; BUILDING WORKS
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[580px] flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-[#161A22] via-[#11141A] to-[#0D0F14] border border-[#252A34] shadow-2xl group">
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-[#013281]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#FB8F02]/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute inset-0 bg-architectural-grid opacity-30 pointer-events-none" />
      <div className="absolute bottom-5 left-5 bg-[#12151B]/90 backdrop-blur border border-[#2A303D] px-3 py-2 rounded text-left">
        <div className="text-[10px] tracking-wider text-[#FB8F02] uppercase font-mono">MULTIDISCIPLINARY</div>
        <div className="text-xs font-semibold text-[#F5F5F3]">POWER · STRUCTURES · WATER</div>
      </div>
    </div>
  );
};
