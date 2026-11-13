import React from 'react';
import { PageId } from '../types';
import { COMPANY_INFO, SERVICES_DATA } from '../data/companyData';
import { ArchitecturalVisual } from '../components/ArchitecturalVisual';
import { ShieldCheck, HardHat, Award, Target, Compass } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenConsultation }) => {
  const corporateValues = [
    {
      title: 'Professionalism',
      desc: 'Disciplined coordination, clear client communications, and orderly execution across all site engagements.',
    },
    {
      title: 'Integrity',
      desc: 'Operating with honesty, transparency, and ethical business practices in every engagement.',
    },
    {
      title: 'Reliability',
      desc: 'Dependable project delivery across electrical engineering, building construction, and borehole drilling.',
    },
    {
      title: 'Quality',
      desc: 'Focused on durable workmanship, practical engineering standards, and attention to execution detail.',
    },
    {
      title: 'Responsibility',
      desc: 'Taking ownership of project outcomes, material stewardship, and technical accountability.',
    },
    {
      title: 'Safety Consciousness',
      desc: 'Prioritising safe electrical, structural, and drilling working practices on every site.',
    },
    {
      title: 'Client Satisfaction',
      desc: 'Understanding individual client requirements and delivering dependable infrastructure value.',
    },
  ];

  return (
    <div className="w-full pt-28 pb-20">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-[#0F1115] border-b border-[#222731] overflow-hidden">
        <div className="absolute inset-0 bg-architectural-grid opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#60A5FA] font-semibold">
                ABOUT PRINCEWAY
              </span>
              <div className="h-[1px] w-12 bg-[#353A44]" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F5F5F3] font-display leading-tight text-balance">
              Building Confidence Through Engineering and Construction.
            </h1>

            <p className="text-base sm:text-lg text-[#B7B9BC] leading-relaxed">
              Multidisciplinary delivery across electrical engineering, building construction and borehole drilling in Owerri, Imo State, Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-[#14171D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-mono uppercase tracking-widest text-[#60A5FA] font-bold">
                COMPANY OVERVIEW
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F5F3] font-display">
                Three Principal Service Divisions Under One Roof
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#B7B9BC] leading-relaxed">
                <p>
                  Princeway Electrical Construction Company Limited is a multidisciplinary engineering and construction company located at 62 Wetheral Road, Owerri, Imo State, Nigeria.
                </p>
                <p>
                  Our business focuses on three principal service areas: electrical engineering, building construction and borehole drilling.
                </p>
                <p>
                  These areas of operation reflect our commitment to supporting essential building and infrastructure requirements through professional service, technical responsibility and quality-focused execution.
                </p>
                <p>
                  We understand that clients need dependable partners who approach projects with care, professionalism and attention to detail.
                </p>
                <p className="text-[#F5F5F3] font-medium">
                  At Princeway, our objective is to provide practical engineering and construction solutions while building lasting relationships through responsible service delivery.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-mono text-[#60A5FA]">
                <span className="font-bold">OFFICE:</span>
                <span className="text-[#B7B9BC]">{COMPANY_INFO.address}</span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <ArchitecturalVisual
                category="electrical"
                title="Electrical & Construction Engineering"
                aspectRatio="4:3"
                showBadge={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#0F1115] border-t border-[#222731]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#161920] border border-[#252A34] p-8 rounded-lg space-y-4">
              <div className="w-12 h-12 bg-[#2563EB]/15 border border-[#2563EB]/40 rounded flex items-center justify-center text-[#60A5FA]">
                <Target className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#60A5FA] font-bold">
                OUR MISSION
              </div>
              <h3 className="text-2xl font-bold text-[#F5F5F3]">Dependable Multidisciplinary Delivery</h3>
              <p className="text-sm text-[#B7B9BC] leading-relaxed">
                &ldquo;To provide dependable electrical engineering, building construction and borehole drilling services through professionalism, responsible execution and a commitment to quality.&rdquo;
              </p>
            </div>

            <div className="bg-[#161920] border border-[#252A34] p-8 rounded-lg space-y-4">
              <div className="w-12 h-12 bg-[#2563EB]/15 border border-[#2563EB]/40 rounded flex items-center justify-center text-[#60A5FA]">
                <Compass className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#60A5FA] font-bold">
                OUR VISION
              </div>
              <h3 className="text-2xl font-bold text-[#F5F5F3]">Trusted Engineering Partner</h3>
              <p className="text-sm text-[#B7B9BC] leading-relaxed">
                &ldquo;To become a respected and trusted multidisciplinary engineering and construction company recognised for dependable service, professional execution and quality-focused project delivery.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-20 bg-[#14171D] border-t border-[#222731]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-3 mb-12">
            <div className="text-xs font-mono uppercase tracking-widest text-[#60A5FA] font-bold">
              CORE VALUES
            </div>
            <h2 className="text-3xl font-bold text-[#F5F5F3] font-display">
              Principles That Guide Our Work
            </h2>
            <p className="text-sm text-[#B7B9BC]">
              The standards that shape how Princeway Electrical Construction Company Limited plans, coordinates, and executes every project.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {corporateValues.map((val, idx) => (
              <div
                key={idx}
                className="bg-[#161920] border border-[#252A34] p-5 rounded-lg space-y-2 hover:border-[#2563EB]/50 transition-colors"
              >
                <div className="text-xs font-mono text-[#60A5FA] font-bold">0{idx + 1}</div>
                <h4 className="text-base font-bold text-[#F5F5F3]">{val.title}</h4>
                <p className="text-xs text-[#B7B9BC] leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principal Divisions Summary */}
      <section className="py-20 bg-[#0F1115] border-t border-[#222731]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-[#161920] border border-[#252A34] p-6 rounded-lg space-y-3">
              <ShieldCheck className="w-8 h-8 text-[#60A5FA]" />
              <h3 className="text-lg font-bold text-[#F5F5F3]">01. {SERVICES_DATA[0].title}</h3>
              <p className="text-xs sm:text-sm text-[#B7B9BC] leading-relaxed">
                {SERVICES_DATA[0].shortDesc}
              </p>
            </div>

            <div className="bg-[#161920] border border-[#252A34] p-6 rounded-lg space-y-3">
              <HardHat className="w-8 h-8 text-[#60A5FA]" />
              <h3 className="text-lg font-bold text-[#F5F5F3]">02. {SERVICES_DATA[1].title}</h3>
              <p className="text-xs sm:text-sm text-[#B7B9BC] leading-relaxed">
                {SERVICES_DATA[1].shortDesc}
              </p>
            </div>

            <div className="bg-[#161920] border border-[#252A34] p-6 rounded-lg space-y-3">
              <Award className="w-8 h-8 text-[#60A5FA]" />
              <h3 className="text-lg font-bold text-[#F5F5F3]">03. {SERVICES_DATA[2].title}</h3>
              <p className="text-xs sm:text-sm text-[#B7B9BC] leading-relaxed">
                {SERVICES_DATA[2].shortDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Editable Management & Leadership Area */}
      <section className="py-16 bg-[#14171D] border-t border-[#222731]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 bg-[#171B22] border border-[#252A34] rounded-lg flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="text-xs font-mono uppercase tracking-wider text-[#60A5FA] font-semibold">
                MANAGEMENT &amp; LEADERSHIP
              </div>
              <h3 className="text-xl font-bold text-[#F5F5F3]">
                Dedicated Engineering &amp; Project Supervision
              </h3>
              <p className="text-xs sm:text-sm text-[#B7B9BC] leading-relaxed">
                Princeway Electrical Construction Company Limited is structured to support electrical engineering, building construction, and borehole drilling engagements in Owerri and Imo State. Verified leadership profiles and corporate credentials can be published in this section as provided.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 shrink-0">
              <button
                onClick={() => onNavigate('services')}
                className="px-5 py-3 bg-[#1E232D] hover:bg-[#272E3B] text-[#F5F5F3] font-bold text-xs uppercase tracking-wider rounded-[2px] cursor-pointer"
              >
                Explore Services
              </button>
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-xs uppercase tracking-wider rounded-[2px] cursor-pointer"
              >
                Discuss Your Project
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
