import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { X, Phone, CheckCircle, ArrowRight, MapPin, MessageCircle, AlertCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { EnquiryFormData } from '../types';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

const VALID_SERVICES = [
  'Electrical Engineering',
  'Building Construction',
  'Borehole Drilling',
] as const;

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Electrical Engineering',
}) => {
  const [state, handleSubmit, reset] = useForm('maeoareb');

  const normalizedInitialService = VALID_SERVICES.includes(
    initialService as (typeof VALID_SERVICES)[number]
  )
    ? initialService
    : 'Electrical Engineering';

  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    email: '',
    phone: '',
    serviceRequired: normalizedInitialService,
    projectLocation: 'Owerri, Imo State',
    description: '',
  });

  useEffect(() => {
    const nextService = VALID_SERVICES.includes(
      initialService as (typeof VALID_SERVICES)[number]
    )
      ? initialService
      : 'Electrical Engineering';

    setFormData((prev) => ({
      ...prev,
      serviceRequired: nextService,
    }));
  }, [initialService, isOpen]);

  if (!isOpen) return null;

  const handleClose = () => {
    if (state.succeeded) {
      reset();
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        serviceRequired: normalizedInitialService,
        projectLocation: 'Owerri, Imo State',
        description: '',
      });
    }
    onClose();
  };

  const formSource = `${formData.serviceRequired || 'Project Consultation'} Inquiry`;

  const whatsappText = encodeURIComponent(
    `Hello Princeway Electrical Construction Company Limited,\n\nName: ${formData.fullName}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService Required: ${formData.serviceRequired}\nLocation: ${formData.projectLocation}\nProject Details: ${formData.description}`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#12151B] border border-[#2A303D] rounded-lg shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        {/* Top Header */}
        <div className="px-6 py-5 bg-[#171B22] border-b border-[#252A34] flex items-center justify-between">
          <div>
            <div className="text-[10px] font-mono tracking-widest text-[#FB8F02] uppercase font-bold">
              START A CONVERSATION
            </div>
            <h3 className="text-lg font-bold text-[#F5F5F3]">Discuss Your Project with Princeway</h3>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="p-1.5 text-[#B7B9BC] hover:text-white rounded hover:bg-[#232833] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {state.succeeded ? (
            <div role="status" aria-live="polite" className="py-10 text-center space-y-4">
              <div className="w-14 h-14 bg-[#FB8F02]/15 border border-[#FB8F02] rounded-full flex items-center justify-center mx-auto text-[#FB8F02]">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-[#F5F5F3]">
                Thank You for Contacting Princeway!
              </h4>
              <p className="text-sm text-[#B7B9BC] max-w-md mx-auto leading-relaxed">
                Your inquiry for{' '}
                <span className="text-[#FB8F02] font-semibold">
                  {formData.serviceRequired}
                </span>{' '}
                has been received by{' '}
                <span className="text-[#F5F5F3] font-semibold">{COMPANY_INFO.name}</span>.
                Our team will review your message and get back to you.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`${COMPANY_INFO.whatsappUrl}?text=${whatsappText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-[#FB8F02] hover:bg-[#E07E00] text-[#0B0F19] font-extrabold text-xs uppercase tracking-wider rounded-[2px] flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Follow Up on WhatsApp</span>
                </a>
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="px-5 py-2.5 bg-[#013281] hover:bg-[#012664] text-white font-bold text-xs uppercase tracking-wider rounded-[2px] flex items-center gap-2 border border-[#0A46A6]"
                >
                  <Phone className="w-4 h-4 text-[#FB8F02]" />
                  <span>Call {COMPANY_INFO.phoneDisplay}</span>
                </a>
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-4 py-2.5 text-[#B7B9BC] hover:text-white font-bold text-xs uppercase tracking-wider cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="hidden"
                name="_subject"
                value={`New Project Enquiry (${formData.serviceRequired}) - Princeway Electrical`}
              />
              <input type="hidden" name="form_source" value={formSource} />

              {state.errors && (
                <div
                  role="alert"
                  className="p-3 bg-red-900/30 border border-red-500/40 text-red-200 text-xs rounded flex items-start gap-2"
                >
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-semibold">
                      There was a problem submitting your inquiry. Please check the highlighted fields and try again.
                    </p>
                    <ValidationError errors={state.errors} />
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="modal-name"
                    className="block text-xs font-mono uppercase tracking-wider text-[#B7B9BC] mb-1.5"
                  >
                    Full Name *
                  </label>
                  <input
                    id="modal-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Your full name"
                    className="w-full px-3.5 py-2.5 bg-[#0F1115] border border-[#2A303D] rounded-[2px] text-sm text-[#F5F5F3] focus:border-[#FB8F02] focus:outline-none transition-colors"
                  />
                  <ValidationError
                    prefix="Full Name"
                    field="name"
                    errors={state.errors}
                    className="text-[11px] text-red-400 mt-1"
                  />
                </div>

                <div>
                  <label
                    htmlFor="modal-phone"
                    className="block text-xs font-mono uppercase tracking-wider text-[#B7B9BC] mb-1.5"
                  >
                    Phone Number *
                  </label>
                  <input
                    id="modal-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 0806 362 4432"
                    className="w-full px-3.5 py-2.5 bg-[#0F1115] border border-[#2A303D] rounded-[2px] text-sm text-[#F5F5F3] focus:border-[#FB8F02] focus:outline-none transition-colors"
                  />
                  <ValidationError
                    prefix="Phone Number"
                    field="phone"
                    errors={state.errors}
                    className="text-[11px] text-red-400 mt-1"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="modal-email"
                    className="block text-xs font-mono uppercase tracking-wider text-[#B7B9BC] mb-1.5"
                  >
                    Email Address *
                  </label>
                  <input
                    id="modal-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-3.5 py-2.5 bg-[#0F1115] border border-[#2A303D] rounded-[2px] text-sm text-[#F5F5F3] focus:border-[#FB8F02] focus:outline-none transition-colors"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-[11px] text-red-400 mt-1"
                  />
                </div>

                <div>
                  <label
                    htmlFor="modal-service"
                    className="block text-xs font-mono uppercase tracking-wider text-[#B7B9BC] mb-1.5"
                  >
                    Service of Interest *
                  </label>
                  <select
                    id="modal-service"
                    name="service"
                    required
                    value={formData.serviceRequired}
                    onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#0F1115] border border-[#2A303D] rounded-[2px] text-sm text-[#F5F5F3] focus:border-[#FB8F02] focus:outline-none transition-colors"
                  >
                    <option value="Electrical Engineering">Electrical Engineering</option>
                    <option value="Building Construction">Building Construction</option>
                    <option value="Borehole Drilling">Borehole Drilling</option>
                  </select>
                  <ValidationError
                    prefix="Service"
                    field="service"
                    errors={state.errors}
                    className="text-[11px] text-red-400 mt-1"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="modal-location"
                  className="block text-xs font-mono uppercase tracking-wider text-[#B7B9BC] mb-1.5"
                >
                  Project Location
                </label>
                <input
                  id="modal-location"
                  name="location"
                  type="text"
                  value={formData.projectLocation}
                  onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                  placeholder="e.g. Owerri, Imo State"
                  className="w-full px-3.5 py-2.5 bg-[#0F1115] border border-[#2A303D] rounded-[2px] text-sm text-[#F5F5F3] focus:border-[#FB8F02] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="modal-message"
                  className="block text-xs font-mono uppercase tracking-wider text-[#B7B9BC] mb-1.5"
                >
                  Project Description *
                </label>
                <textarea
                  id="modal-message"
                  name="message"
                  rows={4}
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Tell us about your electrical engineering, building construction, or borehole drilling requirements..."
                  className="w-full px-3.5 py-2.5 bg-[#0F1115] border border-[#2A303D] rounded-[2px] text-sm text-[#F5F5F3] focus:border-[#FB8F02] focus:outline-none transition-colors"
                />
                <ValidationError
                  prefix="Project Description"
                  field="message"
                  errors={state.errors}
                  className="text-[11px] text-red-400 mt-1"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-[#B7B9BC] flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#FB8F02]" />
                  <span>62 Wetheral Road, Owerri</span>
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full sm:w-auto px-6 py-3 bg-[#FB8F02] hover:bg-[#E07E00] disabled:opacity-60 disabled:cursor-not-allowed text-[#0B0F19] font-extrabold text-xs uppercase tracking-wider rounded-[2px] flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>{state.submitting ? 'Submitting Inquiry...' : 'Submit Project Enquiry'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
