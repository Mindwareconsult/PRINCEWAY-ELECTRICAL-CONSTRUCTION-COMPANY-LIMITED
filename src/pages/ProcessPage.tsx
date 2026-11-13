import React from 'react';
import { PageId } from '../types';
import { PROCESS_STAGES } from '../data/companyData';
import { CheckCircle2, ShieldCheck, Clock, Users, FileCheck } from 'lucide-react';

interface ProcessPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export const ProcessPage: React.FC<ProcessPageProps> = ({ onOpenConsultation }) => {
  return (
    <div className="w-full pt-28 pb-20">
      {/* Hero Header */}
      <section className="relative py-16 lg:py-24 bg-[#0F1115] border-b border-[#252A34] overflow-hidden">
        <div className="absolute inset-0 bg-architectural-grid opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#FB8F02] font-semibold">
                HOW WE WORK
              </span>
              <div className="h-[1px] w-12 bg-[#353C49]" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F5F5F3] font-display leading-tight text-balance">
              A Responsible Approach to Every Project.
            </h1>

            <p className="text-base sm:text-lg text-[#B7B9BC] leading-relaxed">
              Whether undertaking electrical engineering works, building construction, or borehole drilling, Princeway Electrical Construction Company Limited follows a disciplined sequence built around clarity, technical assessment, and dependable execution.
            </p>
          </div>
        </div>
      </section>

      {/* Core Principles Strip */}
      <section className="py-12 bg-[#14171D] border-b border-[#252A34]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-4 p-4 bg-[#161920] border border-[#252A34] rounded">
              <Users className="w-7 h-7 text-[#FB8F02] shrink-0" />
              <div>
                <div className="text-xs font-bold text-[#F5F5F3]">Clear Communication</div>
                <div className="text-[11px] text-[#B7B9BC]">Direct client alignment</div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-[#161920] border border-[#252A34] rounded">
              <ShieldCheck className="w-7 h-7 text-[#FB8F02] shrink-0" />
              <div>
                <div className="text-xs font-bold text-[#F5F5F3]">Technical Responsibility</div>
                <div className="text-[11px] text-[#B7B9BC]">Safety-conscious site practice</div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-[#161920] border border-[#252A34] rounded">
              <Clock className="w-7 h-7 text-[#FB8F02] shrink-0" />
              <div>
                <div className="text-xs font-bold text-[#F5F5F3]">Organised Planning</div>
                <div className="text-[11px] text-[#B7B9BC]">Structured trade sequencing</div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-[#161920] border border-[#252A34] rounded">
              <FileCheck className="w-7 h-7 text-[#FB8F02] shrink-0" />
              <div>
                <div className="text-xs font-bold text-[#F5F5F3]">Workmanship Review</div>
                <div className="text-[11px] text-[#B7B9BC]">Ongoing quality inspection</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Process Stages (Vertical Expanded Timeline) */}
      <section className="py-20 bg-[#0F1115]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {PROCESS_STAGES.map((stage) => (
            <div
              key={stage.step}
              className="relative pl-8 sm:pl-16 border-l-2 border-[#252A34] group"
            >
              {/* Step indicator circle */}
              <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-[#161920] border-2 border-[#FB8F02] flex items-center justify-center font-mono text-xs font-bold text-[#F5F5F3] shadow-md group-hover:bg-[#FB8F02] group-hover:text-[#0B0F19] transition-colors">
                {stage.step}
              </div>

              {/* Stage Card */}
              <div className="bg-[#161920] border border-[#252A34] group-hover:border-[#FB8F02]/70 rounded-lg p-6 sm:p-8 space-y-5 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#252A34] pb-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono tracking-widest text-[#FB8F02] uppercase font-bold">
                      STAGE {stage.step} // {stage.subtitle}
                    </span>
                    <h3 className="text-2xl font-bold text-[#F5F5F3]">{stage.title}</h3>
                  </div>
                  <div className="px-3 py-1 bg-[#1B2029] border border-[#2D3340] text-[11px] font-mono text-[#B7B9BC] rounded">
                    Key Focus: {stage.keyFocus}
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#B7B9BC] leading-relaxed">
                  {stage.description}
                </p>

                <div className="space-y-2.5 pt-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#FB8F02] font-semibold">
                    Activities &amp; Key Outputs:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {stage.deliverables.map((del, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 p-2.5 bg-[#0F1115] border border-[#252A34] rounded text-xs text-[#F5F5F3]"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FB8F02] shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process CTA Section */}
      <section className="py-20 bg-[#14171D] border-t border-[#252A34]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-bold text-[#F5F5F3] font-display">
            Ready to Discuss Your Project Requirements?
          </h2>
          <p className="text-sm sm:text-base text-[#B7B9BC] max-w-2xl mx-auto leading-relaxed">
            Connect with our team for an initial consultation covering electrical engineering, building construction, or borehole drilling.
          </p>
          <button
            onClick={onOpenConsultation}
            className="px-8 py-4 bg-[#FB8F02] hover:bg-[#E07E00] text-[#0B0F19] font-extrabold text-xs uppercase tracking-wider rounded-[2px] transition-all cursor-pointer"
          >
            DISCUSS YOUR PROJECT →
          </button>
        </div>
      </section>
    </div>
  );
};
