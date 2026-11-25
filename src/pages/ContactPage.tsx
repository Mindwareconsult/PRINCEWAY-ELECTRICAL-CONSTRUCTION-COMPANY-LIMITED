import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/companyData';
import {
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  ArrowRight,
  CheckCircle2,
  Navigation,
  MessageCircle,
  AlertCircle,
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const [state, handleSubmit, reset] = useForm('maeoareb');

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceRequired, setServiceRequired] = useState('Electrical Engineering');
  const [location, setLocation] = useState('Owerri, Imo State');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const whatsappBriefUrl = `${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent(
    `Hello Princeway Electrical Construction Company Limited,\n\nName: ${fullName}\nPhone: ${phone}${
      email ? `\nEmail: ${email}` : ''
    }\nService Required: ${serviceRequired}\nLocation: ${location}${
      subject ? `\nSubject: ${subject}` : ''
    }\nProject Details: ${message}`
  )}`;

  const handleReset = () => {
    reset();
    setFullName('');
    setEmail('');
    setPhone('');
    setServiceRequired('Electrical Engineering');
    setLocation('Owerri, Imo State');
    setSubject('');
    setMessage('');
  };

  return (
    <div className="w-full pt-28 pb-20">
      {/* Hero Header */}
      <section className="relative py-16 lg:py-24 bg-[#0F1115] border-b border-[#252A34] overflow-hidden">
        <div className="absolute inset-0 bg-architectural-grid opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#FB8F02] font-semibold">
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
                  <div className="flex items-center justify-between text-xs font-mono text-[#FB8F02]">
                    <span className="uppercase font-bold">TELEPHONE &amp; WHATSAPP</span>
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <a
                      href={`tel:${COMPANY_INFO.phoneRaw}`}
                      className="text-xl font-extrabold text-[#F5F5F3] hover:text-[#FB8F02] transition-colors"
                    >
                      {COMPANY_INFO.phoneDisplay}
                    </a>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <a
                      href={`tel:${COMPANY_INFO.phoneRaw}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FB8F02] hover:bg-[#E07E00] text-[#0B0F19] text-xs font-extrabold font-mono rounded transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>CALL NOW</span>
                    </a>
                    <a
                      href={COMPANY_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#013281] hover:bg-[#012664] text-white border border-[#0A46A6] text-xs font-bold font-mono rounded transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#FB8F02]" />
                      <span>WHATSAPP ENQUIRY</span>
                    </a>
                  </div>
                </div>

                {/* Official Email */}
                <div className="p-5 bg-[#161920] border border-[#252A34] rounded-lg space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-[#FB8F02]">
                    <span className="uppercase font-bold">OFFICIAL EMAIL</span>
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-base sm:text-lg font-extrabold text-[#F5F5F3] hover:text-[#FB8F02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FB8F02] rounded-xs transition-colors break-all"
                      aria-label={`Send an email to ${COMPANY_INFO.email}`}
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                  <div className="pt-1">
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#013281] hover:bg-[#FB8F02] text-white hover:text-[#0B0F19] border border-[#0A46A6] text-xs font-bold font-mono rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FB8F02]"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>SEND EMAIL</span>
                    </a>
                  </div>
                </div>

                {/* Physical Address */}
                <div className="p-5 bg-[#161920] border border-[#252A34] rounded-lg space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-[#FB8F02]">
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
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#013281] hover:bg-[#FB8F02] text-white hover:text-[#0B0F19] border border-[#0A46A6] text-xs font-bold font-mono rounded transition-colors"
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
                  <div className="text-xs font-mono text-[#FB8F02] font-bold uppercase">
                    GOOGLE BUSINESS PROFILE
                  </div>
                  <a
                    href={COMPANY_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#B7B9BC] hover:text-[#FB8F02] flex items-center gap-1"
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
                <span className="text-xs font-mono text-[#FB8F02] uppercase font-bold">
                  PROJECT ENQUIRY BRIEF
                </span>
                <h3 className="text-2xl font-bold text-[#F5F5F3]">Request a Project Discussion</h3>
                <p className="text-xs sm:text-sm text-[#B7B9BC]">
                  Complete the enquiry form below to send your project requirements directly to Princeway Electrical Construction Company Limited.
                </p>
              </div>

              {state.succeeded ? (
                <div role="status" aria-live="polite" className="py-12 text-center space-y-5">
                  <div className="w-16 h-16 bg-[#FB8F02]/15 border border-[#FB8F02] rounded-full flex items-center justify-center mx-auto text-[#FB8F02]">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-[#F5F5F3]">
                    Thank You for Contacting Princeway!
                  </h4>
                  <p className="text-sm text-[#B7B9BC] max-w-md mx-auto leading-relaxed">
                    Your inquiry regarding{' '}
                    <span className="text-[#FB8F02] font-semibold">{serviceRequired}</span> has been
                    received by{' '}
                    <span className="text-white font-medium">{COMPANY_INFO.name}</span>. Our team
                    will review your message and respond promptly.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <a
                      href={whatsappBriefUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-[#FB8F02] hover:bg-[#E07E00] text-[#0B0F19] text-xs font-extrabold uppercase tracking-wider rounded-[2px] flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Also Send via WhatsApp</span>
                    </a>
                    <a
                      href={`tel:${COMPANY_INFO.phoneRaw}`}
                      className="px-6 py-3 bg-[#013281] hover:bg-[#012664] border border-[#0A46A6] text-white text-xs font-bold uppercase tracking-wider rounded-[2px] flex items-center gap-2"
                    >
                      <Phone className="w-4 h-4 text-[#FB8F02]" />
                      <span>Call {COMPANY_INFO.phoneDisplay}</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-4 py-3 text-xs font-mono text-[#9CA3AF] hover:text-white cursor-pointer"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="hidden"
                    name="_subject"
                    value={
                      subject.trim()
                        ? `${subject.trim()} - Princeway Electrical`
                        : `New Contact Page Inquiry (${serviceRequired}) - Princeway Electrical`
                    }
                  />
                  <input type="hidden" name="form_source" value="Contact Page" />

                  {state.errors && (
                    <div
                      role="alert"
                      className="p-3 bg-red-900/30 border border-red-500/40 text-red-200 text-xs rounded flex items-start gap-2"
                    >
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <p className="font-semibold">
                          Unable to submit your message. Please verify your entries and try again.
                        </p>
                        <ValidationError errors={state.errors} />
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-mono uppercase text-[#B7B9BC] mb-1.5"
                      >
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Your full name"
                        className="w-full px-3.5 py-2.5 bg-[#161920] border border-[#2D3340] rounded-[2px] text-sm text-[#F5F5F3] focus:border-[#FB8F02] focus:outline-none"
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
                        htmlFor="contact-phone"
                        className="block text-xs font-mono uppercase text-[#B7B9BC] mb-1.5"
                      >
                        Phone Number *
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 0806 362 4432"
                        className="w-full px-3.5 py-2.5 bg-[#161920] border border-[#2D3340] rounded-[2px] text-sm text-[#F5F5F3] focus:border-[#FB8F02] focus:outline-none"
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
                        htmlFor="contact-email"
                        className="block text-xs font-mono uppercase text-[#B7B9BC] mb-1.5"
                      >
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.com"
                        className="w-full px-3.5 py-2.5 bg-[#161920] border border-[#2D3340] rounded-[2px] text-sm text-[#F5F5F3] focus:border-[#FB8F02] focus:outline-none"
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
                        htmlFor="contact-service"
                        className="block text-xs font-mono uppercase text-[#B7B9BC] mb-1.5"
                      >
                        Service of Interest *
                      </label>
                      <select
                        id="contact-service"
                        name="service"
                        required
                        value={serviceRequired}
                        onChange={(e) => setServiceRequired(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-[#161920] border border-[#2D3340] rounded-[2px] text-sm text-[#F5F5F3] focus:border-[#FB8F02] focus:outline-none"
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-location"
                        className="block text-xs font-mono uppercase text-[#B7B9BC] mb-1.5"
                      >
                        Project Location
                      </label>
                      <input
                        id="contact-location"
                        name="location"
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="e.g. Owerri, Imo State"
                        className="w-full px-3.5 py-2.5 bg-[#161920] border border-[#2D3340] rounded-[2px] text-sm text-[#F5F5F3] focus:border-[#FB8F02] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-subject"
                        className="block text-xs font-mono uppercase text-[#B7B9BC] mb-1.5"
                      >
                        Subject
                      </label>
                      <input
                        id="contact-subject"
                        name="subject"
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="e.g. Electrical Panel Installation Quote"
                        className="w-full px-3.5 py-2.5 bg-[#161920] border border-[#2D3340] rounded-[2px] text-sm text-[#F5F5F3] focus:border-[#FB8F02] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-mono uppercase text-[#B7B9BC] mb-1.5"
                    >
                      Message / Project Description *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share details of your electrical, building construction, or borehole drilling project..."
                      className="w-full px-3.5 py-2.5 bg-[#161920] border border-[#2D3340] rounded-[2px] text-sm text-[#F5F5F3] focus:border-[#FB8F02] focus:outline-none"
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                      className="text-[11px] text-red-400 mt-1"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="w-full py-4 bg-[#FB8F02] hover:bg-[#E07E00] disabled:opacity-60 disabled:cursor-not-allowed text-[#0B0F19] font-extrabold text-xs uppercase tracking-wider rounded-[2px] flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-[#FB8F02]/20"
                    >
                      <span>{state.submitting ? 'Submitting Inquiry...' : 'Send Inquiry'}</span>
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
