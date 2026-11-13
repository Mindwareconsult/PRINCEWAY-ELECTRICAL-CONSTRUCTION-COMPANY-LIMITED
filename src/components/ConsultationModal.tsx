import React, { useState, useEffect } from 'react';
import { X, Phone, CheckCircle, ArrowRight, MapPin, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { EnquiryFormData } from '../types';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Electrical Engineering',
}) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    email: '',
    phone: '',
    serviceRequired: initialService,
    projectLocation: 'Owerri, Imo State',
    description: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      serviceRequired: initialService || 'Electrical Engineering',
    }));
  }, [initialService, isOpen]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name.';
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide a valid phone number.';
    } else if (formData.phone.trim().length < 8) {
      errs.phone = 'Phone number is too short.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide an email address.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email format.';
    }
    if (!formData.description.trim()) {
      errs.description = 'Please describe your project or requirements.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

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
            onClick={onClose}
            className="p-1.5 text-[#B7B9BC] hover:text-white rounded hover:bg-[#232833] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {submitted ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-14 h-14 bg-[#FB8F02]/15 border border-[#FB8F02] rounded-full flex items-center justify-center mx-auto text-[#FB8F02]">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-[#F5F5F3]">Project Brief Prepared</h4>
              <p className="text-sm text-[#B7B9BC] max-w-md mx-auto leading-relaxed">
                Thank you, <span className="text-[#F5F5F3] font-semibold">{formData.fullName}</span>. Your brief for{' '}
                <span className="text-[#FB8F02] font-semibold">{formData.serviceRequired}</span> is ready. Send it directly via WhatsApp or call us immediately:
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`${COMPANY_INFO.whatsappUrl}?text=${whatsappText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-[#FB8F02] hover:bg-[#E07E00] text-[#0B0F19] font-extrabold text-xs uppercase tracking-wider rounded-[2px] flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </a>
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="px-5 py-2.5 bg-[#013281] hover:bg-[#012664] text-white font-bold text-xs uppercase tracking-wider rounded-[2px] flex items-center gap-2 border border-[#0A46A6]"
                >
                  <Phone className="w-4 h-4 text-[#FB8F02]" />
                  <span>Call {COMPANY_INFO.phoneDisplay}</span>
                </a>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-4 py-2.5 text-[#B7B9BC] hover:text-white font-bold text-xs uppercase tracking-wider cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#B7B9BC] mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Your full name"
                    className="w-full px-3.5 py-2.5 bg-[#0F1115] border border-[#2A303D] rounded-[2px] text-sm text-[#F5F5F3] focus:border-[#FB8F02] focus:outline-none transition-colors"
                  />
                  {errors.fullName && <p className="text-[11px] text-red-400 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#B7B9BC] mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 0806 362 4432"
                    className="w-full px-3.5 py-2.5 bg-[#0F1115] border border-[#2A303D] rounded-[2px] text-sm text-[#F5F5F3] focus:border-[#FB8F02] focus:outline-none transition-colors"
                  />
                  {errors.phone && <p className="text-[11px] text-red-400 mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#B7B9BC] mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-3.5 py-2.5 bg-[#0F1115] border border-[#2A303D] rounded-[2px] text-sm text-[#F5F5F3] focus:border-[#FB8F02] focus:outline-none transition-colors"
                  />
                  {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#B7B9BC] mb-1.5">
                    Service Required
                  </label>
                  <select
                    value={formData.serviceRequired}
                    onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#0F1115] border border-[#2A303D] rounded-[2px] text-sm text-[#F5F5F3] focus:border-[#FB8F02] focus:outline-none transition-colors"
                  >
                    <option value="Electrical Engineering">Electrical Engineering</option>
                    <option value="Building Construction">Building Construction</option>
                    <option value="Borehole Drilling">Borehole Drilling</option>
                    <option value="General Enquiry">General Enquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#B7B9BC] mb-1.5">
                  Project Location
                </label>
                <input
                  type="text"
                  value={formData.projectLocation}
                  onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                  placeholder="e.g. Owerri, Imo State"
                  className="w-full px-3.5 py-2.5 bg-[#0F1115] border border-[#2A303D] rounded-[2px] text-sm text-[#F5F5F3] focus:border-[#FB8F02] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#B7B9BC] mb-1.5">
                  Project Description *
                </label>
                <textarea
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Tell us about your electrical engineering, building construction, or borehole drilling requirements..."
                  className="w-full px-3.5 py-2.5 bg-[#0F1115] border border-[#2A303D] rounded-[2px] text-sm text-[#F5F5F3] focus:border-[#FB8F02] focus:outline-none transition-colors"
                />
                {errors.description && <p className="text-[11px] text-red-400 mt-1">{errors.description}</p>}
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-[#B7B9BC] flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#FB8F02]" />
                  <span>62 Wetheral Road, Owerri</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 bg-[#FB8F02] hover:bg-[#E07E00] text-[#0B0F19] font-extrabold text-xs uppercase tracking-wider rounded-[2px] flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>Prepare Project Enquiry</span>
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
