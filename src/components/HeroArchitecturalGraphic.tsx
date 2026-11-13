import React from 'react';

interface HeroArchitecturalGraphicProps {
  heroImageUrl?: string;
}

export const HeroArchitecturalGraphic: React.FC<HeroArchitecturalGraphicProps> = ({ heroImageUrl }) => {
  if (heroImageUrl) {
    return (
      <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[580px] overflow-hidden rounded-xl bg-[#12151B] border border-[#252A34] shadow-2xl group">
        <img
          src={heroImageUrl}
          alt="Princeway Electrical Construction Company Limited project showcase"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1115]/90 via-[#0F1115]/25 to-transparent pointer-events-none" />
        <div className="absolute bottom-5 left-5 bg-[#12151B]/90 backdrop-blur border border-[#2A303D] px-3 py-2 rounded text-left">
          <div className="text-[10px] tracking-wider text-[#60A5FA] uppercase font-mono">VERIFIED COMPANY MEDIA</div>
          <div className="text-xs font-semibold text-[#F5F5F3]">PRINCEWAY FIELD EXECUTION</div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[580px] flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-[#161A22] via-[#11141A] to-[#0D0F14] border border-[#252A34] shadow-2xl group">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-[#2563EB]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#1D4ED8]/10 rounded-full blur-2xl pointer-events-none" />

      {/* Grid coordinate overlay */}
      <div className="absolute inset-0 bg-architectural-grid opacity-30 pointer-events-none" />

      {/* Subtle CAD markings grounded in verified Owerri coordinates */}
      <div className="absolute top-4 left-4 text-[10px] font-mono tracking-widest text-[#B7B9BC]/45 select-none">
        OWERRI OFFICE · 62 WETHERAL RD · 5.4840°N 7.0344°E
      </div>
      <div className="absolute bottom-4 right-4 text-[10px] font-mono tracking-widest text-[#B7B9BC]/45 select-none">
        ELECTRICAL · BUILDING · BOREHOLE INFRASTRUCTURE
      </div>

      {/* Multidisciplinary Engineering Isometric SVG Composition */}
      <svg
        viewBox="0 0 600 600"
        className="w-full h-full max-w-[540px] max-h-[540px] object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.8)] transform transition-transform duration-700 group-hover:scale-[1.02]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="pw-slab-top" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#282E3A" />
            <stop offset="50%" stopColor="#1E232D" />
            <stop offset="100%" stopColor="#161920" />
          </linearGradient>
          <linearGradient id="pw-slab-side-light" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#353D4C" />
            <stop offset="100%" stopColor="#252B36" />
          </linearGradient>
          <linearGradient id="pw-slab-side-dark" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1B2028" />
            <stop offset="100%" stopColor="#11141A" />
          </linearGradient>

          <filter id="pw-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="7" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Subsurface Borehole Aquifer & Casing Column Representation */}
        <ellipse cx="300" cy="495" rx="220" ry="42" fill="#000000" opacity="0.6" />
        <line x1="300" y1="380" x2="300" y2="540" stroke="#60A5FA" strokeWidth="4" strokeDasharray="6 4" opacity="0.7" />
        <ellipse cx="300" cy="520" rx="95" ry="18" stroke="#2563EB" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.65" />

        {/* Structural Sub-Base Podium */}
        <polygon points="120,430 300,480 480,430 300,380" fill="url(#pw-slab-top)" stroke="#384050" strokeWidth="1" />
        <polygon points="120,430 300,480 300,505 120,455" fill="url(#pw-slab-side-dark)" stroke="#2A303C" strokeWidth="1" />
        <polygon points="300,480 480,430 480,455 300,505" fill="url(#pw-slab-side-light)" stroke="#2A303C" strokeWidth="1" />

        {/* Foundation Blue Light Line */}
        <line x1="300" y1="480" x2="480" y2="430" stroke="#3B82F6" strokeWidth="2.5" opacity="0.85" filter="url(#pw-glow)" />
        <line x1="120" y1="430" x2="300" y2="480" stroke="#3B82F6" strokeWidth="2.5" opacity="0.85" filter="url(#pw-glow)" />

        {/* Reinforced Structural Columns */}
        <polygon points="180,360 215,370 215,440 180,430" fill="#181C24" stroke="#323946" strokeWidth="1" />
        <polygon points="215,370 250,360 250,430 215,440" fill="#2A313E" stroke="#323946" strokeWidth="1" />
        <polygon points="180,360 215,350 250,360 215,370" fill="#3B4354" />

        <polygon points="360,360 395,370 395,440 360,430" fill="#1D222C" stroke="#323946" strokeWidth="1" />
        <polygon points="395,370 430,360 430,430 395,440" fill="#323A49" stroke="#323946" strokeWidth="1" />
        <polygon points="360,360 395,350 430,360 395,370" fill="#434D5F" />

        {/* Mid Level Structural Slab */}
        <polygon points="90,320 300,380 510,320 300,260" fill="url(#pw-slab-top)" stroke="#434D5F" strokeWidth="1.5" />
        <polygon points="90,320 300,380 300,345 90,285" fill="url(#pw-slab-side-dark)" stroke="#2F3744" strokeWidth="1" />
        <polygon points="300,380 510,320 510,285 300,345" fill="url(#pw-slab-side-light)" stroke="#2F3744" strokeWidth="1" />

        {/* Perimeter Electrical Conduit Glow */}
        <polyline points="90,320 300,380 510,320" stroke="#3B82F6" strokeWidth="3" opacity="0.9" filter="url(#pw-glow)" />

        {/* Main Building Volume */}
        <polygon points="170,220 330,265 330,135 170,90" fill="url(#pw-slab-side-dark)" stroke="#3D4656" strokeWidth="1.5" />
        <polygon points="330,265 470,225 470,95 330,135" fill="url(#pw-slab-side-light)" stroke="#4A5467" strokeWidth="1.5" />
        <polygon points="170,90 330,135 470,95 310,50" fill="url(#pw-slab-top)" stroke="#556176" strokeWidth="1.5" />

        {/* Electrical Engineering Power Busbar Accent */}
        <polygon points="210,170 370,215 370,185 210,140" fill="#2563EB" opacity="0.9" />
        <polygon points="370,215 450,192 450,162 370,185" fill="#1D4ED8" />
        <polygon points="210,140 370,185 450,162 290,117" fill="#60A5FA" />

        {/* Upper Power Distribution Aperture */}
        <polygon points="280,75 350,95 330,105 260,85" fill="#60A5FA" opacity="0.8" />

        {/* Engineering Tension & Power Grid Lines */}
        <line x1="310" y1="50" x2="510" y2="320" stroke="#60A5FA" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.55" />
        <line x1="170" y1="90" x2="90" y2="320" stroke="#60A5FA" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.55" />

        {/* Datum Node */}
        <g opacity="0.9">
          <circle cx="300" cy="380" r="4" fill="#60A5FA" />
          <circle cx="300" cy="380" r="9" stroke="#3B82F6" strokeWidth="1" strokeDasharray="2 2" />
          <circle cx="310" cy="50" r="3" fill="#FFFFFF" />
        </g>
      </svg>

      {/* Corner Discipline Callouts */}
      <div className="absolute bottom-5 left-5 bg-[#12151B]/90 backdrop-blur border border-[#2A303D] px-3 py-2 rounded text-left">
        <div className="text-[10px] tracking-wider text-[#B7B9BC] uppercase font-mono">MULTIDISCIPLINARY</div>
        <div className="text-xs font-semibold text-[#F5F5F3]">POWER · STRUCTURES · WATER</div>
      </div>

      <div className="absolute top-5 right-5 bg-[#12151B]/90 backdrop-blur border border-[#2A303D] px-3 py-2 rounded text-right">
        <div className="text-[10px] tracking-wider text-[#60A5FA] font-semibold uppercase font-mono">SITE MEDIA READY</div>
        <div className="text-xs font-semibold text-[#F5F5F3]">OWERRI, IMO STATE</div>
      </div>
    </div>
  );
};
