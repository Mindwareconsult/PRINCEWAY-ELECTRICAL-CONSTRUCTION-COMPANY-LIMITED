import React, { useState } from 'react';
import { PageId, ProjectItem } from '../types';
import {
  COMPANY_INFO,
  BRAND_ASSETS,
  SERVICES_DATA,
  WHY_CHOOSE_PRINCEWAY,
  PROCESS_STAGES,
  SERVICE_COMMITMENTS,
  VERIFIED_TESTIMONIALS,
} from '../data/companyData';
import { HeroArchitecturalGraphic } from '../components/HeroArchitecturalGraphic';
import { ArchitecturalVisual } from '../components/ArchitecturalVisual';
import {
  ArrowUpRight,
  ArrowRight,
  Phone,
  MapPin,
  ExternalLink,
  CheckCircle2,
  MessageCircle,
  Navigation,
  Film,
  Images,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: (initialService?: string) => void;
  projects: ProjectItem[];
  onSelectProject: (project: ProjectItem) => void;
  heroImageUrl?: string;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenConsultation,
  projects,
  onSelectProject,
  heroImageUrl = BRAND_ASSETS.heroImageUrl,
}) => {
  const [projectFilter, setProjectFilter] = useState<string>('ALL PROJECTS');
  const [activeProcessStep, setActiveProcessStep] = useState<number>(0);

  // Quick Enquiry Form state
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formService, setFormService] = useState('Electrical Engineering');
  const [formLocation, setFormLocation] = useState('Owerri, Imo State');
  const [formDesc, setFormDesc] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const filterOptions = [
    'ALL PROJECTS',
    'ELECTRICAL ENGINEERING',
    'BUILDING CONSTRUCTION',
    'BOREHOLE DRILLING',
  ];

  const filteredProjects =
    projectFilter === 'ALL PROJECTS'
      ? projects
      : projects.filter((p) => p.category.toUpperCase() === projectFilter);

  const handleContactPreviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formPhone.trim() || !formDesc.trim()) {
      setFormError('Please fill in your full name, phone number, and project description.');
      return;
    }
    if (formEmail.trim() && !/\S+@\S+\.\S+/.test(formEmail)) {
      setFormError('Please enter a valid email address.');
      return;
    }
    setFormError('');
    setFormSubmitted(true);
  };

  const whatsappPreviewText = encodeURIComponent(
    `Hello Princeway Electrical Construction Company Limited,\n\nName: ${formName}\nPhone: ${formPhone}\nEmail: ${formEmail}\nService Required: ${formService}\nLocation: ${formLocation}\nDescription: ${formDesc}`
  );

  return (
    <div className="w-full">
      {/* =========================================================================
          SECTION 1: HERO
          ========================================================================= */}
      <section className="relative min-h-[92vh] flex items-center pt-28 pb-20 overflow-hidden bg-[#0F1115]">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#013281]/25 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[380px] h-[380px] bg-[#FB8F02]/10 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute inset-0 bg-architectural-grid opacity-25 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Editorial Headline & CTAs */}
            <div className="lg:col-span-7 space-y-8">
              <div className="flex items-center gap-4">
                <span className="text-[11px] font-mono tracking-[0.2em] text-[#FB8F02] uppercase font-semibold">
                  ENGINEERING / CONSTRUCTION / INFRASTRUCTURE
                </span>
                <div className="h-[1px] w-16 bg-[#353A44]" />
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F5F5F3] leading-[1.08] font-display text-balance">
                Powering Progress.{' '}
                <span className="text-[#FB8F02]">Building a Better Tomorrow.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#B7B9BC] max-w-2xl leading-relaxed font-sans">
                Princeway Electrical Construction Company Limited delivers multidisciplinary solutions across electrical engineering, building construction and borehole drilling. We approach every engagement with a commitment to professionalism, dependable service and quality-focused execution.
              </p>

              {/* Primary & Secondary CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('services')}
                  className="px-6 py-3.5 bg-[#FB8F02] hover:bg-[#E07E00] text-[#0B0F19] font-extrabold text-xs uppercase tracking-wider rounded-[2px] flex items-center gap-2 shadow-lg shadow-[#FB8F02]/20 hover:shadow-[#FB8F02]/35 hover:translate-x-0.5 transition-all cursor-pointer whitespace-nowrap"
                >
                  <span>EXPLORE OUR SERVICES</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onOpenConsultation('Electrical Engineering')}
                  className="px-6 py-3.5 border border-[#353A44] hover:border-[#FB8F02] text-[#F5F5F3] hover:text-[#FB8F02] bg-[#14171D]/70 backdrop-blur font-bold text-xs uppercase tracking-wider rounded-[2px] flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap"
                >
                  <span>DISCUSS YOUR PROJECT</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              {/* Three Compact Service Indicators in Mandatory Order */}
              <div className="pt-8 border-t border-[#222731] grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="space-y-1">
                  <div className="text-[11px] font-mono text-[#FB8F02] uppercase tracking-wide font-bold">
                    01 · DIVISION
                  </div>
                  <div className="text-xs font-mono font-bold tracking-wider text-[#F5F5F3] uppercase">
                    ELECTRICAL ENGINEERING
                  </div>
                  <p className="text-xs text-[#8A919E]">Power &amp; installation systems</p>
                </div>

                <div className="space-y-1 border-t sm:border-t-0 sm:border-l border-[#222731] pt-4 sm:pt-0 sm:pl-6">
                  <div className="text-[11px] font-mono text-[#FB8F02] uppercase tracking-wide font-bold">
                    02 · DIVISION
                  </div>
                  <div className="text-xs font-mono font-bold tracking-wider text-[#F5F5F3] uppercase">
                    BUILDING CONSTRUCTION
                  </div>
                  <p className="text-xs text-[#8A919E]">Residential &amp; commercial structures</p>
                </div>

                <div className="space-y-1 border-t sm:border-t-0 sm:border-l border-[#222731] pt-4 sm:pt-0 sm:pl-6">
                  <div className="text-[11px] font-mono text-[#FB8F02] uppercase tracking-wide font-bold">
                    03 · DIVISION
                  </div>
                  <div className="text-xs font-mono font-bold tracking-wider text-[#F5F5F3] uppercase">
                    BOREHOLE DRILLING
                  </div>
                  <p className="text-xs text-[#8A919E]">Water access infrastructure</p>
                </div>
              </div>
            </div>

            {/* Right Column: Authentic Hero Showcase Photo */}
            <div className="lg:col-span-5 w-full">
              <HeroArchitecturalGraphic heroImageUrl={heroImageUrl} />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: COMPANY INTRODUCTION
          ========================================================================= */}
      <section className="py-24 bg-[#14171D] border-y border-[#222731] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <ArchitecturalVisual
                category="building"
                title="Multidisciplinary Engineering & Construction"
                imageUrl={BRAND_ASSETS.introImageUrl}
                aspectRatio="4:3"
                showBadge={true}
              />
            </div>

            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#FB8F02] font-semibold">
                  WHO WE ARE
                </span>
                <div className="h-[1px] w-12 bg-[#353A44]" />
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F3] font-display text-balance leading-tight">
                Three Core Services.{' '}
                <span className="text-[#FB8F02]">One Commitment to Excellence.</span>
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#B7B9BC] leading-relaxed">
                <p>
                  Princeway Electrical Construction Company Limited is a multidisciplinary engineering and construction company based in Owerri, Imo State, Nigeria.
                </p>
                <p>
                  The company operates across three important areas of infrastructure and development: electrical engineering, building construction and borehole drilling.
                </p>
                <p>
                  We recognise the importance of dependable electrical systems, quality building development and access to reliable water infrastructure in supporting residential, commercial and industrial needs.
                </p>
                <p>
                  Our approach is centred on understanding project requirements, maintaining professional standards, paying attention to execution details and delivering services with responsibility.
                </p>
                <p className="text-[#F5F5F3] font-medium">
                  Whether the requirement involves electrical engineering, building construction or borehole drilling, Princeway is committed to providing a professional and dependable service experience.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FB8F02] hover:text-white transition-colors cursor-pointer"
                >
                  <span>DISCOVER PRINCEWAY</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: OUR CORE SERVICES (3 Cards in Mandatory Order: 01, 02, 03)
          ========================================================================= */}
      <section className="py-24 bg-[#0F1115] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-14 border-b border-[#222731]">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#FB8F02] font-semibold">
                  OUR CORE SERVICES
                </span>
                <div className="h-[1px] w-12 bg-[#353A44]" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F3] font-display">
                Integrated Solutions Across Three Essential Industries.
              </h2>
              <p className="text-sm sm:text-base text-[#B7B9BC]">
                From electrical engineering and building construction to borehole drilling, Princeway provides practical solutions for essential infrastructure and development needs.
              </p>
            </div>

            <button
              onClick={() => onNavigate('services')}
              className="text-xs font-mono uppercase tracking-widest text-[#B7B9BC] hover:text-[#FB8F02] flex items-center gap-1.5 transition-colors whitespace-nowrap self-start md:self-end cursor-pointer"
            >
              <span>EXPLORE SERVICE DIVISIONS</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* 3 Principal Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
            {SERVICES_DATA.map((service) => {
              const matchingProjectImage = projects.find(
                (p) => p.category === service.title && p.imageUrl
              )?.imageUrl;

              return (
                <div
                  key={service.id}
                  className="group relative bg-[#161920] border border-[#252A34] hover:border-[#FB8F02] rounded-lg p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between pb-4 border-b border-[#222731] text-xs font-mono">
                      <div className="flex items-center gap-2">
                        <span className="text-[#FB8F02] font-bold">{service.number}</span>
                        <span className="text-[#353A44]">—</span>
                        <span className="text-[#F5F5F3] font-bold uppercase">{service.title}</span>
                      </div>
                    </div>

                    <div className="my-5 rounded overflow-hidden">
                      <ArchitecturalVisual
                        category={service.visualCategory}
                        title={service.title}
                        imageUrl={service.imageUrl || matchingProjectImage}
                        aspectRatio="16:9"
                        showBadge={false}
                      />
                    </div>

                    <h3 className="text-lg font-bold text-[#F5F5F3] group-hover:text-[#FB8F02] transition-colors">
                      {service.number}. {service.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-[#B7B9BC] leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#222731] flex items-center justify-between">
                    <button
                      onClick={() => onOpenConsultation(service.title)}
                      className="text-xs font-mono uppercase tracking-wider text-[#FB8F02] hover:text-white font-bold flex items-center gap-1 cursor-pointer"
                    >
                      <span>Learn More / Enquire</span>
                    </button>
                    <button
                      onClick={() => onNavigate('services')}
                      className="w-8 h-8 rounded-full bg-[#013281] group-hover:bg-[#FB8F02] group-hover:text-[#0B0F19] text-white flex items-center justify-center transition-colors cursor-pointer"
                      aria-label={`Learn more about ${service.title}`}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: OUR PROJECTS (Mandatory Filter Order)
          ========================================================================= */}
      <section className="py-24 bg-[#14171D] border-t border-[#222731]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#222731]">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#FB8F02] font-semibold">
                  OUR PORTFOLIO
                </span>
                <div className="h-[1px] w-12 bg-[#353A44]" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F3] font-display">
                Real Projects. Practical Solutions. Professional Execution.
              </h2>
              <p className="text-sm sm:text-base text-[#B7B9BC]">
                Explore authentic company photographs across our electrical engineering, building construction and borehole drilling activities.
              </p>
            </div>

            {/* Mandatory Filter Order */}
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              {filterOptions.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setProjectFilter(cat)}
                  className={`px-3 py-1.5 rounded-[2px] transition-colors cursor-pointer ${
                    projectFilter === cat
                      ? 'bg-[#FB8F02] text-[#0B0F19] font-extrabold'
                      : 'bg-[#1C2028] text-[#B7B9BC] hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
            {filteredProjects.map((project) => {
              const visualCat =
                project.category === 'Electrical Engineering'
                  ? 'electrical'
                  : project.category === 'Borehole Drilling'
                  ? 'borehole'
                  : 'building';

              return (
                <div
                  key={project.id}
                  onClick={() => onSelectProject(project)}
                  className="group cursor-pointer bg-[#161920] border border-[#252A34] hover:border-[#FB8F02] rounded-lg overflow-hidden transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative overflow-hidden aspect-[16/10]">
                      <ArchitecturalVisual
                        category={visualCat}
                        title={project.title}
                        imageUrl={project.imageUrl}
                        aspectRatio="auto"
                        showBadge={false}
                      />
                      <div className="absolute top-3 left-3 bg-[#013281]/95 backdrop-blur px-2.5 py-1 rounded text-[10px] font-mono tracking-wider text-white uppercase border border-[#FB8F02]/40">
                        {project.category}
                      </div>
                      {project.galleryImages && project.galleryImages.length > 1 && (
                        <div className="absolute top-3 right-3 bg-[#0F1115]/90 px-2 py-0.5 rounded text-[10px] font-mono text-[#FB8F02] border border-[#2D3340] flex items-center gap-1">
                          <Images className="w-3 h-3" />
                          <span>{project.galleryImages.length} PHOTOS</span>
                        </div>
                      )}
                      {project.videoUrl && (
                        <div className="absolute bottom-3 right-3 bg-[#FB8F02] px-2 py-0.5 rounded text-[10px] font-mono font-bold text-[#0B0F19] flex items-center gap-1">
                          <Film className="w-3 h-3" />
                          <span>VIDEO</span>
                        </div>
                      )}
                    </div>

                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-2 text-xs font-mono text-[#B7B9BC]">
                        <MapPin className="w-3.5 h-3.5 text-[#FB8F02]" />
                        <span>{project.location}</span>
                      </div>
                      <h3 className="text-lg font-bold text-[#F5F5F3] group-hover:text-[#FB8F02] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#B7B9BC] line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-3 border-t border-[#222731] flex items-center justify-between text-xs font-mono text-[#FB8F02]">
                    <span className="font-bold">VIEW PROJECT DETAILS</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-[#171B22] border border-[#252A34] rounded">
            <p className="text-xs font-mono text-[#B7B9BC]">
              Browse all authentic site photographs or attach MP4 field videos inside the Projects &amp; Video Gallery page.
            </p>
            <button
              onClick={() => onNavigate('projects')}
              className="text-xs font-bold uppercase tracking-wider text-[#FB8F02] hover:text-white flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
            >
              <span>OPEN PORTFOLIO &amp; VIDEO GALLERY</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: WHY CHOOSE PRINCEWAY
          ========================================================================= */}
      <section className="py-24 bg-[#0F1115] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-3">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#FB8F02] font-semibold">
                THE PRINCEWAY DIFFERENCE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F3] font-display text-balance">
              Professional Standards Across Every Project.
            </h2>
            <p className="text-sm sm:text-base text-[#B7B9BC]">
              Our multidisciplinary approach brings together electrical engineering, building construction and borehole drilling under one company, with a focus on responsible execution and quality workmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_PRINCEWAY.map((item) => (
              <div
                key={item.number}
                className="bg-[#161920] border border-[#252A34] hover:border-[#FB8F02]/70 p-6 rounded-lg space-y-4 transition-colors"
              >
                <div className="flex items-center justify-between pb-3 border-b border-[#222731]">
                  <span className="text-xs font-mono text-[#FB8F02] font-bold">{item.number}</span>
                  <span className="text-[10px] font-mono text-[#76797E] uppercase">CORE STANDARD</span>
                </div>
                <h3 className="text-base font-bold text-[#F5F5F3] tracking-wider uppercase font-display">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#B7B9BC] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: OUR PROCESS ("HOW WE WORK")
          ========================================================================= */}
      <section className="py-24 bg-[#14171D] border-y border-[#222731]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3 max-w-2xl mb-12">
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#FB8F02] font-semibold">
                HOW WE WORK
              </span>
              <div className="h-[1px] w-12 bg-[#353A44]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F3] font-display">
              A Responsible Approach to Every Project.
            </h2>
            <p className="text-sm sm:text-base text-[#B7B9BC]">
              From initial understanding and technical assessment through execution and final review, our six-stage process keeps projects organised and clients informed.
            </p>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {PROCESS_STAGES.map((stage, idx) => (
                <button
                  key={stage.step}
                  onClick={() => setActiveProcessStep(idx)}
                  className={`p-3 text-left border rounded transition-all cursor-pointer ${
                    activeProcessStep === idx
                      ? 'bg-[#1C212C] border-[#FB8F02] shadow-md'
                      : 'bg-[#101318] border-[#252A34] hover:border-[#384050]'
                  }`}
                >
                  <div className="text-[11px] font-mono text-[#FB8F02] font-bold">
                    STAGE {stage.step}
                  </div>
                  <div className="text-xs font-bold text-[#F5F5F3] mt-1 truncate">
                    {stage.title}
                  </div>
                </button>
              ))}
            </div>

            {PROCESS_STAGES[activeProcessStep] && (
              <div className="bg-[#101318] border border-[#252A34] rounded-lg p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-0.5 bg-[#013281] border border-[#FB8F02]/40 text-white text-[11px] font-mono font-bold rounded-[2px]">
                      STAGE {PROCESS_STAGES[activeProcessStep].step}
                    </span>
                    <span className="text-xs font-mono text-[#B7B9BC]">
                      {PROCESS_STAGES[activeProcessStep].subtitle}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#F5F5F3]">
                    {PROCESS_STAGES[activeProcessStep].title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#B7B9BC] leading-relaxed">
                    {PROCESS_STAGES[activeProcessStep].description}
                  </p>

                  <div className="pt-2 space-y-2">
                    <div className="text-xs font-mono uppercase text-[#FB8F02]">Stage Focus Areas:</div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-[#F5F5F3]">
                      {PROCESS_STAGES[activeProcessStep].deliverables.map((d, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#FB8F02] shrink-0" />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-[#161920] border border-[#252A34] p-6 rounded space-y-4">
                  <div className="text-[10px] font-mono text-[#76797E] uppercase tracking-wider">
                    PRIMARY STAGE OBJECTIVE
                  </div>
                  <div className="text-sm font-semibold text-[#F5F5F3]">
                    {PROCESS_STAGES[activeProcessStep].keyFocus}
                  </div>
                  <div className="h-[1px] bg-[#252A34]" />
                  <p className="text-xs text-[#B7B9BC] leading-relaxed">
                    Every engagement across electrical engineering, building construction and borehole drilling follows a clear, accountable sequence.
                  </p>
                  <button
                    onClick={() => onNavigate('process')}
                    className="text-xs font-mono text-[#FB8F02] hover:text-white font-bold flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>EXPLORE FULL PROCESS</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: CUSTOMER CONFIDENCE & SERVICE COMMITMENTS
          ========================================================================= */}
      <section className="py-24 bg-[#0F1115] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-14 border-b border-[#222731]">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#FB8F02] font-semibold">
                  CLIENT CONFIDENCE
                </span>
                <div className="h-[1px] w-12 bg-[#353A44]" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F3] font-display">
                Committed to Dependable Service Delivery.
              </h2>
              <p className="text-sm sm:text-base text-[#B7B9BC]">
                Client trust is earned through straightforward communication, responsible execution on site, and standing behind the quality of our work.
              </p>
            </div>

            <a
              href={COMPANY_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-[#161920] border border-[#252A34] hover:border-[#FB8F02] rounded text-xs font-mono text-[#B7B9BC] hover:text-[#F5F5F3] transition-colors shrink-0"
            >
              <span>View Official Google Business Profile</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#FB8F02]" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
            {SERVICE_COMMITMENTS.map((item) => (
              <div
                key={item.number}
                className="bg-[#161920] border border-[#252A34] p-6 rounded-lg flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="text-xs font-mono text-[#FB8F02] font-bold">{item.number}</div>
                  <h3 className="text-lg font-bold text-[#F5F5F3]">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-[#B7B9BC] leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#222731] text-[11px] font-mono text-[#76797E] uppercase">
                  Princeway Service Commitment
                </div>
              </div>
            ))}
          </div>

          {VERIFIED_TESTIMONIALS.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              {VERIFIED_TESTIMONIALS.map((t) => (
                <div
                  key={t.id}
                  className="bg-[#161920] border border-[#252A34] p-6 rounded-lg space-y-4"
                >
                  <blockquote className="text-sm text-[#F5F5F3] italic leading-relaxed">
                    &ldquo;{t.reviewText}&rdquo;
                  </blockquote>
                  <div className="pt-3 border-t border-[#222731] text-xs font-bold text-[#FB8F02]">
                    {t.clientName}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: FULL-WIDTH CALL TO ACTION (Official Princeway Navy + Gold)
          ========================================================================= */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-br from-[#013281] to-[#012054] text-white overflow-hidden">
        <div className="absolute inset-0 bg-dot-matrix opacity-25 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#FB8F02] font-bold">
                  LET&apos;S BUILD SOMETHING THAT MATTERS
                </span>
                <div className="h-[1px] w-12 bg-[#FB8F02]/50" />
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display text-balance leading-[1.08]">
                One Partner. Three Essential Service Areas.
              </h2>

              <p className="text-base sm:text-lg text-white/90 max-w-2xl leading-relaxed">
                Whether you require electrical engineering, building construction or borehole drilling, Princeway Electrical Construction Company Limited is ready to discuss your project requirements.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenConsultation('Electrical Engineering')}
                  className="px-8 py-4 bg-[#FB8F02] hover:bg-[#E07E00] text-[#0B0F19] font-extrabold text-xs uppercase tracking-wider rounded-[2px] flex items-center gap-2 shadow-2xl transition-all cursor-pointer whitespace-nowrap"
                >
                  <span>DISCUSS YOUR PROJECT</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('services')}
                  className="px-7 py-4 border border-white/40 hover:border-[#FB8F02] hover:text-[#FB8F02] text-white font-bold text-xs uppercase tracking-wider rounded-[2px] flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap"
                >
                  <span>EXPLORE OUR SERVICES</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="bg-white rounded-xl p-6 shadow-2xl border-2 border-[#FB8F02]/60 max-w-[240px]">
                <img
                  src={BRAND_ASSETS.logoUrl}
                  alt="Princeway Electrical Construction Company Limited Official Logo"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: CONTACT PREVIEW
          ========================================================================= */}
      <section className="py-24 bg-[#0F1115] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#FB8F02] font-semibold">
                  GET IN TOUCH
                </span>
                <div className="h-[1px] w-12 bg-[#353A44]" />
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F3] font-display">
                Let&apos;s Discuss Your Next Project.
              </h2>

              <p className="text-sm sm:text-base text-[#B7B9BC] leading-relaxed">
                Connect with Princeway Electrical Construction Company Limited to discuss your electrical engineering, building construction or borehole drilling requirements.
              </p>

              <div className="space-y-4 pt-4 border-t border-[#222731]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#FB8F02] shrink-0 mt-1" />
                  <div>
                    <div className="text-xs font-mono uppercase text-[#76797E]">Office Address</div>
                    <div className="text-sm font-semibold text-[#F5F5F3]">{COMPANY_INFO.address}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#FB8F02] shrink-0 mt-1" />
                  <div>
                    <div className="text-xs font-mono uppercase text-[#76797E]">Telephone</div>
                    <a
                      href={`tel:${COMPANY_INFO.phoneRaw}`}
                      className="text-lg font-bold text-[#F5F5F3] hover:text-[#FB8F02] transition-colors"
                    >
                      {COMPANY_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="px-5 py-3 bg-[#FB8F02] hover:bg-[#E07E00] text-[#0B0F19] font-extrabold text-xs uppercase tracking-wider rounded-[2px] transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>

                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 bg-[#013281] border border-[#0A46A6] hover:border-[#FB8F02] text-white font-bold text-xs uppercase tracking-wider rounded-[2px] transition-colors flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#FB8F02]" />
                  <span>WhatsApp Enquiry</span>
                </a>

                <a
                  href={COMPANY_INFO.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#B7B9BC] hover:text-[#FB8F02] flex items-center gap-1.5 ml-1"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Quick Enquiry Form */}
            <div className="lg:col-span-7 bg-[#161920] border border-[#252A34] rounded-lg p-6 sm:p-8">
              {formSubmitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-12 h-12 bg-[#FB8F02]/15 border border-[#FB8F02] rounded-full flex items-center justify-center mx-auto text-[#FB8F02]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#F5F5F3]">Enquiry Details Ready</h3>
                  <p className="text-xs sm:text-sm text-[#B7B9BC] max-w-md mx-auto">
                    Your details for <span className="text-white font-semibold">{formService}</span> are validated. Send directly via WhatsApp or call {COMPANY_INFO.phoneDisplay}.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <a
                      href={`${COMPANY_INFO.whatsappUrl}?text=${whatsappPreviewText}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-[#FB8F02] hover:bg-[#E07E00] text-[#0B0F19] text-xs font-extrabold uppercase tracking-wider rounded-[2px] flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send via WhatsApp</span>
                    </a>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs font-mono text-[#FB8F02] underline hover:text-white cursor-pointer"
                    >
                      Edit details
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleContactPreviewSubmit} className="space-y-4">
                  {formError && (
                    <div className="p-3 bg-red-900/30 border border-red-500/40 text-red-200 text-xs rounded">
                      {formError}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-[#B7B9BC] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        placeholder="Your full name"
                        className="w-full px-3.5 py-2.5 bg-[#0F1115] border border-[#2A303D] rounded-[2px] text-xs text-[#F5F5F3] focus:border-[#FB8F02] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-[#B7B9BC] mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={formPhone}
                        onChange={(e) => setFormPhone(e.target.value)}
                        placeholder="e.g. 0806 362 4432"
                        className="w-full px-3.5 py-2.5 bg-[#0F1115] border border-[#2A303D] rounded-[2px] text-xs text-[#F5F5F3] focus:border-[#FB8F02] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-[#B7B9BC] mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                        placeholder="name@company.com"
                        className="w-full px-3.5 py-2.5 bg-[#0F1115] border border-[#2A303D] rounded-[2px] text-xs text-[#F5F5F3] focus:border-[#FB8F02] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-[#B7B9BC] mb-1">
                        Service Required
                      </label>
                      <select
                        value={formService}
                        onChange={(e) => setFormService(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-[#0F1115] border border-[#2A303D] rounded-[2px] text-xs text-[#F5F5F3] focus:border-[#FB8F02] focus:outline-none"
                      >
                        <option value="Electrical Engineering">Electrical Engineering</option>
                        <option value="Building Construction">Building Construction</option>
                        <option value="Borehole Drilling">Borehole Drilling</option>
                        <option value="General Enquiry">General Enquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#B7B9BC] mb-1">
                      Project Location
                    </label>
                    <input
                      type="text"
                      value={formLocation}
                      onChange={(e) => setFormLocation(e.target.value)}
                      placeholder="e.g. Owerri, Imo State"
                      className="w-full px-3.5 py-2.5 bg-[#0F1115] border border-[#2A303D] rounded-[2px] text-xs text-[#F5F5F3] focus:border-[#FB8F02] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#B7B9BC] mb-1">
                      Project Description *
                    </label>
                    <textarea
                      rows={3}
                      value={formDesc}
                      onChange={(e) => setFormDesc(e.target.value)}
                      placeholder="Brief details regarding your electrical engineering, building construction, or borehole drilling requirements..."
                      className="w-full px-3.5 py-2.5 bg-[#0F1115] border border-[#2A303D] rounded-[2px] text-xs text-[#F5F5F3] focus:border-[#FB8F02] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#FB8F02] hover:bg-[#E07E00] text-[#0B0F19] font-extrabold text-xs uppercase tracking-wider rounded-[2px] transition-colors cursor-pointer"
                  >
                    Submit Enquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
