import React, { useState } from 'react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/companyData';
import {
  MapPin,
  Phone,
  ExternalLink,
  ArrowRight,
  CheckCircle2,
  Navigation,
  MessageCircle,
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceRequired, setServiceRequired] = useState('Electrical Engineering');
  const [location, setLocation] = useState('Owerri, Imo State');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = 'Full name is required.';
    if (!phone.trim()) {
      errs.phone = 'Phone number is required.';
    } else if (phone.trim().length < 8) {
      errs.phone = 'Please provide a valid telephone number.';
    }
    if (email.trim() && !/\S+@\S+\.\S+/.test(email)) {
      errs.email = 'Please provide a valid email format.';
    }
    if (!message.trim()) {
      errs.message = 'Please describe your project requirements.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const whatsappBriefUrl = `${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent(
    `Hello Princeway Electrical Construction Company Limited,\n\nName: ${fullName}\nPhone: ${phone}${
      email ? `\nEmail: ${email}` : ''
    }\nService Required: ${serviceRequired}\nLocation: ${location}\nProject Details: ${message}`
  )}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  return (
    <div className="w-full pt-28 pb-20">
      {/* Hero Header */}
      <section className="relative py-16 lg:py-24 bg-[#0F1115] border-b border-[#252A34] overflow-hidden">
        <div className="absolute inset-0 bg-architectural-grid opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#60A5FA] font-semibold">
                GET IN TOUCH
              </span>
              <div className="h-[1px] w-12 bg-[#353C49]" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F5F5F3] font-display leading-tight text-balance">
              Let&apos;s Discuss Your Next Project.
            </h1>

            <p className="text-base sm:text-lg text-[#B7B9BC] leading-relaxed">
              Reach Princeway Electrical Construction Company Limited directly for Electrical Engineering, Building Construction, and Borehole Drilling enquiries across Owerri, Imo State, and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-20 bg-[#14171D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Official Contact Details & Map */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <h2 className="text-2xl font-bold text-[#F5F5F3] font-display">
                  Official Business Information
                </h2>
                <p className="text-sm text-[#B7B9BC] leading-relaxed">
                  Visit our office on Wetheral Road, Owerri, or connect immediately by telephone or WhatsApp.
                </p>
              </div>

              {/* Verified Contact Cards */}
              <div className="space-y-4">
                {/* Telephone & WhatsApp */}
                <div className="p-5 bg-[#161920] border border-[#252A34] rounded-lg space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-[#60A5FA]">
                    <span className="uppercase font-bold">TELEPHONE &amp; WHATSAPP</span>
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <a
                      href={`tel:${COMPANY_INFO.phoneRaw}`}
                      className="text-xl font-extrabold text-[#F5F5F3] hover:text-[#60A5FA] transition-colors"
                    >
                      {COMPANY_INFO.phoneDisplay}
                    </a>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <a
                      href={`tel:${COMPANY_INFO.phoneRaw}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold font-mono rounded transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>CALL NOW</span>
                    </a>
                    <a
                      href={COMPANY_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1D2430] hover:bg-[#2563EB] text-[#F5F5F3] hover:text-white border border-[#2D3340] text-xs font-bold font-mono rounded transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WHATSAPP ENQUIRY</span>
                    </a>
                  </div>
                </div>

                {/* Physical Address */}
                <div className="p-5 bg-[#161920] border border-[#252A34] rounded-lg space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-[#60A5FA]">
                    <span className="uppercase font-bold">OFFICE ADDRESS</span>
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="text-sm font-semibold text-[#F5F5F3] leading-relaxed">
                    {COMPANY_INFO.address}
                  </div>
                  <div className="pt-2">
                    <a
                      href={COMPANY_INFO.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1D2430] hover:bg-[#2563EB] text-[#F5F5F3] hover:text-white border border-[#2D3340] text-xs font-bold font-mono rounded transition-colors"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>GET DIRECTIONS</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="p-5 bg-[#161920] border border-[#252A34] rounded-lg space-y-3">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-mono text-[#60A5FA] font-bold uppercase">
                    GOOGLE BUSINESS PROFILE
                  </div>
                  <a
                    href={COMPANY_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#B7B9BC] hover:text-[#60A5FA] flex items-center gap-1"
                  >
                    <span>Open in Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="w-full h-52 rounded overflow-hidden border border-[#2D3340] relative">
                  <iframe
                    title="Princeway Electrical Construction Company Limited Location"
                    src="https://maps.google.com/maps?q=5.4839812,7.0343905&hl=en&z=16&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(90%)' }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="absolute bottom-2 left-2 bg-[#0F1115]/90 backdrop-blur px-2.5 py-1 rounded text-[10px] font-mono text-white">
                    62 Wetheral Road, Owerri 460281
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Complete Enquiry Form */}
            <div className="lg:col-span-7 bg-[#0F1115] border border-[#252A34] rounded-xl p-6 sm:p-10 shadow-2xl">
              <div className="mb-6 space-y-2">
                <span className="text-xs font-mono text-[#60A5FA] uppercase font-bold">
                  PROJECT ENQUIRY BRIEF
                </span>
                <h3 className="text-2xl font-bold text-[#F5F5F3]">Request a Project Discussion</h3>
                <p className="text-xs sm:text-sm text-[#B7B9BC]">
                  Complete the enquiry brief below to prepare your project details for direct WhatsApp dispatch or telephone follow-up.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-5">
                  <div className="w-16 h-16 bg-[#2563EB]/20 border border-[#2563EB] rounded-full flex items-center justify-center mx-auto text-[#60A5FA]">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-[#F5F5F3]">Enquiry Brief Ready</h4>
                  <p className="text-sm text-[#B7B9BC] max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-white font-semibold">{fullName}</span>. Your{' '}
                    <span className="text-[#60A5FA]">{serviceRequired}</span> project brief is formatted for{' '}
                    <span className="text-white font-medium">{COMPANY_INFO.name}</span>. Send it directly via WhatsApp or call us immediately on{' '}
                    <span className="text-[#60A5FA]">{COMPANY_INFO.phoneDisplay}</span>.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <a
                      href={whatsappBriefUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold uppercase tracking-wider rounded-[2px] flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send Brief via WhatsApp</span>
                    </a>
                    <a
                      href={`tel:${COMPANY_INFO.phoneRaw}`}
                      className="px-6 py-3 bg-[#181C24] hover:bg-[#222834] border border-[#2D3340] text-white text-xs font-bold uppercase tracking-wider rounded-[2px] flex items-center gap-2"
                    >
                      <Phone className="w-4 h-4 text-[#60A5FA]" />
                      <span>Call {COMPANY_INFO.phoneDisplay}</span>
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-3 text-xs font-mono text-[#9CA3AF] hover:text-white cursor-pointer"
                    >
                      Edit Brief
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-[#B7B9BC] mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Your full name"
                        className="w-full px-3.5 py-2.5 bg-[#161920] border border-[#2D3340] rounded-[2px] text-sm text-[#F5F5F3] focus:border-[#2563EB] focus:outline-none"
                      />
                      {errors.fullName && <p className="text-[11px] text-red-400 mt-1">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-[#B7B9BC] mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 0806 362 4432"
                        className="w-full px-3.5 py-2.5 bg-[#161920] border border-[#2D3340] rounded-[2px] text-sm text-[#F5F5F3] focus:border-[#2563EB] focus:outline-none"
                      />
                      {errors.phone && <p className="text-[11px] text-red-400 mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-[#B7B9BC] mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.com"
                        className="w-full px-3.5 py-2.5 bg-[#161920] border border-[#2D3340] rounded-[2px] text-sm text-[#F5F5F3] focus:border-[#2563EB] focus:outline-none"
                      />
                      {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-[#B7B9BC] mb-1.5">
                        Service Required
                      </label>
                      <select
                        value={serviceRequired}
                        onChange={(e) => setServiceRequired(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-[#161920] border border-[#2D3340] rounded-[2px] text-sm text-[#F5F5F3] focus:border-[#2563EB] focus:outline-none"
                      >
                        <option value="Electrical Engineering">Electrical Engineering</option>
                        <option value="Building Construction">Building Construction</option>
                        <option value="Borehole Drilling">Borehole Drilling</option>
                        <option value="General Enquiry">General Enquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#B7B9BC] mb-1.5">
                      Project Location
                    </label>
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="e.g. Owerri, Imo State"
                      className="w-full px-3.5 py-2.5 bg-[#161920] border border-[#2D3340] rounded-[2px] text-sm text-[#F5F5F3] focus:border-[#2563EB] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#B7B9BC] mb-1.5">
                      Project Message / Requirements *
                    </label>
                    <textarea
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share details of your electrical, building construction, or borehole drilling project..."
                      className="w-full px-3.5 py-2.5 bg-[#161920] border border-[#2D3340] rounded-[2px] text-sm text-[#F5F5F3] focus:border-[#2563EB] focus:outline-none"
                    />
                    {errors.message && <p className="text-[11px] text-red-400 mt-1">{errors.message}</p>}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-xs uppercase tracking-wider rounded-[2px] flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-[#2563EB]/20"
                    >
                      <span>Submit Enquiry</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
