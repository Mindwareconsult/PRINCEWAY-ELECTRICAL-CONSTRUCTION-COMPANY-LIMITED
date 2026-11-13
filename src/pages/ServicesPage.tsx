import React, { useState } from 'react';
import { PageId } from '../types';
import { SERVICES_DATA } from '../data/companyData';
import { ArchitecturalVisual } from '../components/ArchitecturalVisual';
import { CheckCircle2, ArrowRight, ArrowUpRight } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: (initialService?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenConsultation }) => {
  const [activeTab, setActiveTab] = useState<string>(SERVICES_DATA[0].id);

  const selectedService = SERVICES_DATA.find((s) => s.id === activeTab) || SERVICES_DATA[0];

  return (
    <div className="w-full pt-28 pb-20">
      {/* Hero Header */}
      <section className="relative py-16 lg:py-24 bg-[#0F1115] border-b border-[#252A34] overflow-hidden">
        <div className="absolute inset-0 bg-architectural-grid opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#FB8F02] font-semibold">
                THREE PRINCIPAL DIVISIONS
              </span>
              <div className="h-[1px] w-12 bg-[#353C49]" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F5F5F3] font-display leading-tight text-balance">
              Integrated Engineering, Construction &amp; Water Solutions.
            </h1>

            <p className="text-base sm:text-lg text-[#B7B9BC] leading-relaxed">
              Princeway Electrical Construction Company Limited brings together three essential technical disciplines—Electrical Engineering, Building Construction, and Borehole Drilling—delivering practical, responsible execution across Owerri, Imo State, and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Services Navigation & Detailed Breakdown */}
      <section className="py-20 bg-[#14171D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mandatory 3-Division Selector Tabs in Exact Order */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {SERVICES_DATA.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`p-5 text-left border rounded transition-all cursor-pointer ${
                  activeTab === service.id
                    ? 'bg-[#181D26] border-[#FB8F02] shadow-lg'
                    : 'bg-[#0F1115] border-[#252A34] text-[#B7B9BC] hover:border-[#363E4D] hover:text-[#F5F5F3]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#FB8F02] font-bold">
                    DIVISION {service.number}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#FB8F02]" />
                </div>
                <div className="text-lg font-bold text-[#F5F5F3] mt-1.5">
                  {service.title}
                </div>
                <p className="text-xs text-[#9CA3AF] mt-1.5 line-clamp-2">
                  {service.shortDesc}
                </p>
              </button>
            ))}
          </div>

          {/* Active Service Showcase */}
          <div className="bg-[#0F1115] border border-[#252A34] rounded-xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10">
              {/* Left Column: Visual & Technical Assurance */}
              <div className="lg:col-span-5 space-y-4">
                <div className="rounded-lg overflow-hidden border border-[#2D3340]">
                  <ArchitecturalVisual
                    category={selectedService.visualCategory}
                    title={selectedService.title}
                    imageUrl={selectedService.imageUrl}
                    aspectRatio="4:3"
                    showBadge={true}
                  />
                </div>

                <div className="p-4 bg-[#14171D] border border-[#252A34] rounded text-xs space-y-2">
                  <div className="text-[10px] font-mono text-[#FB8F02] uppercase font-bold">
                    EXECUTION FOCUS
                  </div>
                  <p className="text-[#B7B9BC] leading-relaxed">
                    Every engagement is guided by clear requirements, appropriate technical planning, quality workmanship, and safety-conscious site coordination.
                  </p>
                </div>
              </div>

              {/* Right Column: In-depth Service Details */}
              <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-mono text-[#FB8F02] font-bold">
                      {selectedService.number}. {selectedService.title.toUpperCase()}
                    </span>
                    <span className="text-[#353C49]">·</span>
                    <span className="text-xs font-mono text-[#8A919E] uppercase">
                      CORE SERVICE DIVISION
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F5F3] leading-snug">
                    {selectedService.headline}
                  </h2>

                  <div className="space-y-3 text-sm sm:text-base text-[#C7CBD1] leading-relaxed">
                    {selectedService.fullDesc.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>

                  {/* Scope of Work */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#FB8F02] font-semibold">
                      Scope of Services:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {selectedService.scope.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-[#B7B9BC]">
                          <CheckCircle2 className="w-4 h-4 text-[#FB8F02] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Technical Considerations */}
                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#B7B9BC] font-semibold">
                      Key Project Considerations:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.considerations.map((item, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-[#181C24] border border-[#2D3340] text-xs font-mono text-[#F5F5F3] rounded-[2px]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Service Bottom CTA */}
                <div className="pt-8 border-t border-[#252A34] flex flex-wrap items-center justify-between gap-4">
                  <button
                    onClick={() => onOpenConsultation(selectedService.title)}
                    className="px-6 py-3 bg-[#FB8F02] hover:bg-[#E07E00] text-[#0B0F19] font-extrabold text-xs uppercase tracking-wider rounded-[2px] flex items-center gap-2 shadow-lg transition-all cursor-pointer"
                  >
                    <span>{selectedService.ctaLabel}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onNavigate('contact')}
                    className="text-xs font-mono text-[#B7B9BC] hover:text-[#FB8F02] flex items-center gap-1 cursor-pointer"
                  >
                    <span>Contact Office in Owerri</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of All 3 Principal Services */}
      <section className="py-20 bg-[#0F1115] border-t border-[#252A34]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <div className="text-xs font-mono uppercase tracking-widest text-[#FB8F02] font-bold">
              INTEGRATED CAPABILITIES
            </div>
            <h2 className="text-3xl font-bold text-[#F5F5F3] font-display">
              Three Complementary Service Divisions
            </h2>
            <p className="text-sm text-[#B7B9BC]">
              Engage our team for an individual discipline or coordinate electrical, building, and water infrastructure under one accountable company.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES_DATA.map((srv) => (
              <div
                key={srv.id}
                className="bg-[#161920] border border-[#252A34] rounded-lg p-6 flex flex-col justify-between space-y-6 hover:border-[#FB8F02]/70 transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#252A34]">
                    <span className="text-xs font-mono text-[#FB8F02] font-bold">
                      {srv.number}. {srv.title.toUpperCase()}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#F5F5F3]">{srv.title}</h3>
                  <p className="text-xs sm:text-sm text-[#B7B9BC] leading-relaxed">
                    {srv.shortDesc}
                  </p>
                  <ul className="space-y-1.5 pt-2">
                    {srv.scope.slice(0, 4).map((sc, i) => (
                      <li key={i} className="text-xs text-[#9CA3AF] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FB8F02]" />
                        <span>{sc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#252A34] flex items-center justify-between">
                  <button
                    onClick={() => {
                      setActiveTab(srv.id);
                      window.scrollTo({ top: 360, behavior: 'smooth' });
                    }}
                    className="text-xs font-mono text-[#B7B9BC] hover:text-white cursor-pointer"
                  >
                    View Full Scope
                  </button>
                  <button
                    onClick={() => onOpenConsultation(srv.title)}
                    className="text-xs font-bold uppercase tracking-wider text-[#FB8F02] hover:text-white flex items-center gap-1 cursor-pointer"
                  >
                    <span>Enquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Banner */}
      <section className="py-16 bg-[#14171D] border-t border-[#252A34]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F5F3]">
            Planning Electrical, Building, or Borehole Works?
          </h2>
          <p className="text-sm text-[#B7B9BC] max-w-xl mx-auto">
            Speak directly with Princeway Electrical Construction Company Limited to review your site requirements and schedule an assessment.
          </p>
          <button
            onClick={() => onOpenConsultation()}
            className="px-8 py-3.5 bg-[#FB8F02] hover:bg-[#E07E00] text-[#0B0F19] font-extrabold text-xs uppercase tracking-wider rounded-[2px] transition-all cursor-pointer"
          >
            DISCUSS YOUR PROJECT →
          </button>
        </div>
      </section>
    </div>
  );
};
