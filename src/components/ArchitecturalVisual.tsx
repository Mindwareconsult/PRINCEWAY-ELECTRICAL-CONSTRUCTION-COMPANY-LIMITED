import React from 'react';

interface ArchitecturalVisualProps {
  category: 'electrical' | 'building' | 'borehole';
  title?: string;
  imageUrl?: string;
  className?: string;
  aspectRatio?: '16:9' | '4:3' | '1:1' | 'auto';
  showBadge?: boolean;
  eager?: boolean;
}

export const ArchitecturalVisual: React.FC<ArchitecturalVisualProps> = ({
  category,
  title,
  imageUrl,
  className = '',
  aspectRatio = '16:9',
  showBadge = true,
  eager = false,
}) => {
  const aspectClass = {
    '16:9': 'aspect-[16/9]',
    '4:3': 'aspect-[4/3]',
    '1:1': 'aspect-square',
    'auto': 'h-full w-full',
  }[aspectRatio];

  if (imageUrl) {
    return (
      <div className={`relative overflow-hidden bg-[#14171D] border border-[#252A34] rounded-lg group ${aspectClass} ${className}`}>
        <img
          src={imageUrl}
          alt={title || `Princeway ${category} project`}
          referrerPolicy="no-referrer"
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1115]/90 via-[#0F1115]/20 to-transparent opacity-80" />
        {showBadge && (
          <div className="absolute bottom-3 left-3 text-[11px] font-mono tracking-wider text-[#F5F5F3] bg-[#0F1115]/85 backdrop-blur px-2.5 py-1 border border-[#FB8F02]/40">
            PRINCEWAY PROJECT PHOTO
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#13161C] border border-[#252A34] rounded-lg group ${aspectClass} ${className}`}>
      <div className="absolute inset-0 bg-architectural-grid opacity-25" />

      {category === 'electrical' && (
        <svg viewBox="0 0 400 240" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" fill="none">
          <rect width="400" height="240" fill="#101318" />
          <rect x="55" y="45" width="90" height="150" fill="#181D26" stroke="#2F3746" strokeWidth="1.5" />
          <rect x="155" y="45" width="90" height="150" fill="#1C222D" stroke="#3B4558" strokeWidth="1.5" />
          <rect x="255" y="45" width="90" height="150" fill="#181D26" stroke="#2F3746" strokeWidth="1.5" />
          <line x1="40" y1="30" x2="360" y2="30" stroke="#FB8F02" strokeWidth="2.5" />
          <line x1="100" y1="30" x2="100" y2="45" stroke="#FB8F02" strokeWidth="2" />
          <line x1="200" y1="30" x2="200" y2="45" stroke="#FB8F02" strokeWidth="2" />
          <line x1="300" y1="30" x2="300" y2="45" stroke="#FB8F02" strokeWidth="2" />
          <rect x="70" y="65" width="60" height="26" fill="#11141A" stroke="#013281" strokeWidth="1.5" />
          <rect x="170" y="65" width="60" height="26" fill="#11141A" stroke="#FB8F02" strokeWidth="1.5" />
          <rect x="270" y="65" width="60" height="26" fill="#11141A" stroke="#013281" strokeWidth="1.5" />
          {[110, 130, 150, 170].map((y, idx) => (
            <g key={idx}>
              <line x1="72" y1={y} x2="128" y2={y} stroke="#2E3645" strokeWidth="3" />
              <line x1="172" y1={y} x2="228" y2={y} stroke="#FB8F02" strokeWidth="3" strokeOpacity="0.85" />
              <line x1="272" y1={y} x2="328" y2={y} stroke="#2E3645" strokeWidth="3" />
            </g>
          ))}
          <polyline points="200,195 200,215 360,215" stroke="#FB8F02" strokeWidth="1.5" strokeDasharray="4 3" />
        </svg>
      )}

      {category === 'building' && (
        <svg viewBox="0 0 400 240" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" fill="none">
          <rect width="400" height="240" fill="#101318" />
          <line x1="20" y1="205" x2="380" y2="205" stroke="#2E3645" strokeWidth="2" />
          <polygon points="70,205 70,65 230,65 230,205" fill="#181D26" stroke="#364052" strokeWidth="1.5" />
          <polygon points="150,125 150,45 335,45 335,125" fill="#202734" stroke="#455167" strokeWidth="1.5" />
          <line x1="70" y1="115" x2="230" y2="115" stroke="#FB8F02" strokeWidth="2" />
          <line x1="70" y1="160" x2="230" y2="160" stroke="#2F3847" strokeWidth="1.5" />
          <line x1="150" y1="125" x2="335" y2="125" stroke="#FB8F02" strokeWidth="2" />
          <rect x="170" y="62" width="65" height="42" fill="#013281" fillOpacity="0.45" stroke="#FB8F02" strokeWidth="1" />
          <rect x="250" y="62" width="65" height="42" fill="#151921" stroke="#3B4558" strokeWidth="1" />
          <rect x="90" y="135" width="48" height="70" fill="#13171F" stroke="#3B4558" strokeWidth="1" />
          <rect x="155" y="135" width="55" height="45" fill="#013281" fillOpacity="0.35" stroke="#FB8F02" strokeWidth="1" />
        </svg>
      )}

      {category === 'borehole' && (
        <svg viewBox="0 0 400 240" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" fill="none">
          <rect width="400" height="240" fill="#101318" />
          <line x1="20" y1="115" x2="380" y2="115" stroke="#364052" strokeWidth="2" />
          <line x1="20" y1="150" x2="380" y2="150" stroke="#252C38" strokeWidth="1" strokeDasharray="5 4" />
          <line x1="20" y1="185" x2="380" y2="185" stroke="#013281" strokeWidth="1.5" />
          <rect x="20" y="185" width="360" height="45" fill="#013281" fillOpacity="0.28" />
          <polygon points="182,115 196,25 204,25 218,115" fill="#1B2029" stroke="#475569" strokeWidth="1.5" />
          <line x1="192" y1="55" x2="208" y2="55" stroke="#FB8F02" strokeWidth="1.5" />
          <line x1="188" y1="85" x2="212" y2="85" stroke="#FB8F02" strokeWidth="1.5" />
          <rect x="195" y="30" width="10" height="190" fill="#013281" fillOpacity="0.85" stroke="#FB8F02" strokeWidth="1" />
          <rect x="145" y="102" width="110" height="13" fill="#252B36" stroke="#3E4756" strokeWidth="1" />
          <path d="M 140 205 Q 170 198 195 205" stroke="#FB8F02" strokeWidth="1.5" strokeDasharray="3 2" />
          <path d="M 260 205 Q 230 198 205 205" stroke="#FB8F02" strokeWidth="1.5" strokeDasharray="3 2" />
        </svg>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-[#0F1115]/90 via-[#0F1115]/25 to-transparent pointer-events-none" />

      {showBadge && (
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-[#B7B9BC] z-10">
          <span className="uppercase tracking-wider text-[#F5F5F3] font-sans text-xs font-semibold">
            {title || `${category} Engineering Visual`}
          </span>
          <span className="text-[10px] text-[#FB8F02] font-mono">BOREHOLE DIVISION</span>
        </div>
      )}
    </div>
  );
};
