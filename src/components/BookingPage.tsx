import React, { useState, useEffect } from 'react';
import { Creator, BookingInquiry, TabType } from '../types';
import {
  Sparkles,
  CheckCircle2,
  Send,
  Building,
  Mail,
  User,
  Clock,
  ShieldCheck,
  Check,
  Film
} from 'lucide-react';

interface BookingPageProps {
  creators: Creator[];
  preSelectedTalentId?: string;
  onSelectTab: (tab: TabType) => void;
}

export const BookingPage: React.FC<BookingPageProps> = ({
  creators,
  preSelectedTalentId,
  onSelectTab
}) => {
  const [selectedTalent, setSelectedTalent] = useState<string>(preSelectedTalentId || 'all');
  const [brandName, setBrandName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [companyWebsite, setCompanyWebsite] = useState('');
  const [campaignType, setCampaignType] = useState('Sponsored Video & Editorial');
  const [budgetRange, setBudgetRange] = useState('$15,000 - $35,000');
  const [targetDate, setTargetDate] = useState('');
  const [deliverables, setDeliverables] = useState<string[]>([
    'Dedicated 4K Reel / Short Form',
    '3x Instagram Story Sequence'
  ]);
  const [brief, setBrief] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedInquiry, setSubmittedInquiry] = useState<BookingInquiry | null>(null);

  useEffect(() => {
    if (preSelectedTalentId) {
      setSelectedTalent(preSelectedTalentId);
    }
  }, [preSelectedTalentId]);

  const campaignTypeOptions = [
    'Sponsored Video & Editorial',
    'Long-Term Brand Ambassadorship (3-12 Mos)',
    'Event Attendance & Runway VIP',
    'Full Creative Direction & Commercial Shoot',
    'Executive Consultation with Quinci King'
  ];

  const budgetOptions = [
    '$5,000 - $15,000',
    '$15,000 - $35,000',
    '$35,000 - $75,000',
    '$75,000 - $150,000+'
  ];

  const deliverableOptions = [
    'Dedicated 4K Reel / Short Form',
    'Integrated Product Spotlight',
    '3x Instagram Story Sequence',
    '30-Day Paid Spark / Whitelisting Ads',
    'High-Res Editorial Still Photography Assets',
    'Category Exclusivity (30 - 90 Days)',
    'Raw Footage & Global Digital License'
  ];

  const toggleDeliverable = (item: string) => {
    if (deliverables.includes(item)) {
      setDeliverables(deliverables.filter((d) => d !== item));
    } else {
      setDeliverables([...deliverables, item]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const inquiry: BookingInquiry = {
        id: `NDR-${Math.floor(100000 + Math.random() * 900000)}`,
        brandName,
        contactName,
        email,
        companyWebsite,
        selectedTalentId: selectedTalent,
        campaignType,
        budgetRange,
        targetLaunchDate: targetDate || 'Flexible / Q1-Q2 2026',
        deliverablesRequested: deliverables,
        projectBrief: brief,
        status: 'pending',
        submittedAt: new Date().toLocaleString()
      };

      setSubmittedInquiry(inquiry);
      setIsSubmitting(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 800);
  };

  const chosenCreatorObj = creators.find((c) => c.id === selectedTalent);

  return (
    <div id="booking-page" className="pt-32 md:pt-44 pb-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 film-grain">
      {/* Header Banner */}
      <div className="border-b border-white/[0.08] pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 text-[10px] font-mono-film uppercase tracking-[0.3em] text-[#9A968D]">
            <Film className="w-3.5 h-3.5 text-[#D5D1C7]" />
            <span>PARTNERSHIP PROTOCOL // CAMPAIGN INQUIRY</span>
          </div>

          <h1 className="font-vogue text-4xl sm:text-6xl font-normal text-[#F4F2EE] tracking-tight">
            Initiate a Campaign Brief
          </h1>
        </div>

        <p className="text-xs font-mono-film text-[#8A8F99] max-w-md leading-relaxed">
          Submit official specifications directly to <strong className="text-white font-normal">Quinci King</strong>. Confidential review and availability schedule dispatched within 24 business hours.
        </p>
      </div>

      {submittedInquiry ? (
        /* Confirmation State */
        <div className="max-w-2xl mx-auto p-8 sm:p-12 rounded-2xl border border-white/[0.15] bg-[#0A0C0E] text-center space-y-8 shadow-2xl shadow-black/60">
          <div className="w-14 h-14 rounded-2xl border border-white/[0.2] bg-white/[0.04] flex items-center justify-center mx-auto text-[#D5D1C7] shadow-md">
            <CheckCircle2 className="w-7 h-7" />
          </div>

          <div className="space-y-3">
            <span className="text-[10px] font-mono-film uppercase tracking-[0.3em] text-[#9A968D]">
              PROTOCOL STATUS: REGISTERED
            </span>
            <h2 className="font-vogue text-3xl sm:text-4xl text-white">
              Thank You, {submittedInquiry.contactName}
            </h2>
            <p className="text-xs text-[#9A968D] font-mono-film leading-relaxed max-w-md mx-auto">
              Your inquiry for <strong>{submittedInquiry.brandName}</strong> has been routed directly to Quinci King. An executive confirmation has been dispatched to <strong>{submittedInquiry.email}</strong>.
            </p>
          </div>

          {/* Receipt Box */}
          <div className="p-5 rounded-xl bg-black border border-white/[0.08] text-left text-xs font-mono-film space-y-2.5 shadow-inner">
            <div className="flex justify-between border-b border-white/[0.08] pb-2">
              <span className="text-[#8A8F99]">Tracking Reference:</span>
              <span className="text-white font-bold">{submittedInquiry.id}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#8A8F99]">Selected Talent:</span>
              <span className="text-[#D5D1C7]">
                {chosenCreatorObj ? chosenCreatorObj.name : 'Full Roster / Strategy Consultation'}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#8A8F99]">Campaign Scope:</span>
              <span className="text-[#D5D1C7]">{submittedInquiry.campaignType}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#8A8F99]">Budget Bracket:</span>
              <span className="text-white">{submittedInquiry.budgetRange}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#8A8F99]">Deliverables:</span>
              <span className="text-[#D5D1C7]">{submittedInquiry.deliverablesRequested.length} items requested</span>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                setSubmittedInquiry(null);
                setBrandName('');
                setBrief('');
              }}
              className="px-8 py-3.5 rounded-xl text-xs font-syne font-semibold uppercase tracking-wider bg-white/[0.04] hover:bg-white/[0.08] text-[#F4F2EE] border border-white/[0.15] transition-all cursor-pointer shadow-sm"
            >
              Submit Another Brief
            </button>

            <button
              onClick={() => onSelectTab('talent')}
              className="px-8 py-3.5 rounded-xl text-xs font-syne font-bold uppercase tracking-[0.2em] bg-[#F4F2EE] hover:bg-white text-[#08090A] transition-all cursor-pointer shadow-xl hover:shadow-2xl"
            >
              Return to Catalog
            </button>
          </div>
        </div>
      ) : (
        /* Booking Form Grid */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Form (8 Cols) */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-8 p-8 sm:p-10 rounded-2xl border border-white/[0.1] bg-[#0A0C0E] space-y-10 shadow-xl shadow-black/40"
          >
            {/* Step 1: Choose Talent */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 border-b border-white/[0.08] pb-3">
                <span className="text-[10px] font-mono-film text-[#8A8F99] border border-white/[0.15] px-2 py-0.5 rounded">01</span>
                <h3 className="font-vogue text-xl text-white">Select Resident Talent</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {creators.map((c) => {
                  const isSelected = selectedTalent === c.id;
                  return (
                    <div
                      key={c.id}
                      onClick={() => setSelectedTalent(c.id)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center gap-3 shadow-xs ${
                        isSelected
                          ? 'bg-white/[0.08] border-white text-white shadow-md'
                          : 'bg-black/40 border-white/[0.08] hover:border-white/[0.2] text-[#9A968D]'
                      }`}
                    >
                      <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-black border border-white/[0.15]">
                        <img
                          src={c.headshot}
                          alt={c.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover grayscale"
                        />
                      </div>
                      <div className="overflow-hidden">
                        <h4 className="font-vogue text-sm text-white truncate">
                          {c.name}
                        </h4>
                        <p className="text-[10px] text-[#8A8F99] font-mono-film truncate">{c.handle}</p>
                      </div>
                    </div>
                  );
                })}

                {/* All / Custom Option */}
                <div
                  onClick={() => setSelectedTalent('all')}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center gap-3 shadow-xs ${
                    selectedTalent === 'all'
                      ? 'bg-white/[0.08] border-white text-white shadow-md'
                      : 'bg-black/40 border-white/[0.08] hover:border-white/[0.2] text-[#9A968D]'
                  }`}
                >
                  <div className="w-10 h-10 rounded-lg bg-white/[0.05] flex items-center justify-center flex-shrink-0 border border-white/[0.15] text-[#D5D1C7] font-vogue text-sm">
                    ALL
                  </div>
                  <div>
                    <h4 className="font-vogue text-sm text-white">
                      Full Roster
                    </h4>
                    <p className="text-[10px] text-[#8A8F99] font-mono-film">Quinci King Advisory</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Brand & Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 border-b border-white/[0.08] pb-3">
                <span className="text-[10px] font-mono-film text-[#8A8F99] border border-white/[0.15] px-2 py-0.5 rounded">02</span>
                <h3 className="font-vogue text-xl text-white">House & Representative Information</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[#9A968D] font-mono-film uppercase text-[9px] tracking-wider mb-2">
                    Brand / Fashion House Name *
                  </label>
                  <div className="relative">
                    <Building className="w-3.5 h-3.5 text-[#8A8F99] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Saint Laurent, Loewe, Leica, Kering"
                      value={brandName}
                      onChange={(e) => setBrandName(e.target.value)}
                      className="w-full pl-9 pr-3 py-3 rounded-lg bg-black border border-white/[0.1] text-xs text-white placeholder-[#686D76] font-mono-film focus:outline-none focus:border-white shadow-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#9A968D] font-mono-film uppercase text-[9px] tracking-wider mb-2">
                    Representative Name & Title *
                  </label>
                  <div className="relative">
                    <User className="w-3.5 h-3.5 text-[#8A8F99] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Claire Laurent (Global Brand Director)"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full pl-9 pr-3 py-3 rounded-lg bg-black border border-white/[0.1] text-xs text-white placeholder-[#686D76] font-mono-film focus:outline-none focus:border-white shadow-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#9A968D] font-mono-film uppercase text-[9px] tracking-wider mb-2">
                    Official Corporate Email *
                  </label>
                  <div className="relative">
                    <Mail className="w-3.5 h-3.5 text-[#8A8F99] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="representative@brand.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-9 pr-3 py-3 rounded-lg bg-black border border-white/[0.1] text-xs text-white placeholder-[#686D76] font-mono-film focus:outline-none focus:border-white shadow-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#9A968D] font-mono-film uppercase text-[9px] tracking-wider mb-2">
                    Lookbook / Corporate URL
                  </label>
                  <input
                    type="url"
                    placeholder="https://house.com"
                    value={companyWebsite}
                    onChange={(e) => setCompanyWebsite(e.target.value)}
                    className="w-full px-3 py-3 rounded-lg bg-black border border-white/[0.1] text-xs text-white placeholder-[#686D76] font-mono-film focus:outline-none focus:border-white shadow-xs"
                  />
                </div>
              </div>
            </div>

            {/* Step 3: Campaign Parameters & Scope */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 border-b border-white/[0.08] pb-3">
                <span className="text-[10px] font-mono-film text-[#8A8F99] border border-white/[0.15] px-2 py-0.5 rounded">03</span>
                <h3 className="font-vogue text-xl text-white">Campaign Architecture & Terms</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[#9A968D] font-mono-film uppercase text-[9px] tracking-wider mb-2">
                    Partnership Format
                  </label>
                  <select
                    value={campaignType}
                    onChange={(e) => setCampaignType(e.target.value)}
                    className="w-full px-3 py-3 rounded-lg bg-black border border-white/[0.1] text-xs text-white focus:outline-none focus:border-white cursor-pointer font-mono-film shadow-xs"
                  >
                    {campaignTypeOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-black text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[#9A968D] font-mono-film uppercase text-[9px] tracking-wider mb-2">
                    Allocated Budget Tier
                  </label>
                  <select
                    value={budgetRange}
                    onChange={(e) => setBudgetRange(e.target.value)}
                    className="w-full px-3 py-3 rounded-lg bg-black border border-white/[0.1] text-xs text-white focus:outline-none focus:border-white cursor-pointer font-mono-film shadow-xs"
                  >
                    {budgetOptions.map((b) => (
                      <option key={b} value={b} className="bg-black text-white">
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Deliverable Checkboxes */}
              <div>
                <label className="block text-[#9A968D] font-mono-film uppercase text-[9px] tracking-wider mb-2">
                  Requested Deliverables & Usage Rights
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {deliverableOptions.map((item) => {
                    const isChecked = deliverables.includes(item);
                    return (
                      <div
                        key={item}
                        onClick={() => toggleDeliverable(item)}
                        className={`p-3 rounded-lg border text-xs cursor-pointer flex items-center justify-between transition-all font-mono-film shadow-xs ${
                          isChecked
                            ? 'bg-white/[0.08] border-white text-white shadow-sm'
                            : 'bg-black/30 border-white/[0.08] text-[#8A8F99] hover:text-[#D5D1C7]'
                        }`}
                      >
                        <span>{item}</span>
                        {isChecked && <Check className="w-3.5 h-3.5 text-white flex-shrink-0 ml-2" />}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Brief & Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-2">
                <div>
                  <label className="block text-[#9A968D] font-mono-film uppercase text-[9px] tracking-wider mb-2">
                    Target Live / Launch Date
                  </label>
                  <div className="relative">
                    <Clock className="w-3.5 h-3.5 text-[#8A8F99] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="date"
                      value={targetDate}
                      onChange={(e) => setTargetDate(e.target.value)}
                      className="w-full pl-9 pr-3 py-3 rounded-lg bg-black border border-white/[0.1] text-xs text-white focus:outline-none focus:border-white font-mono-film shadow-xs"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-[#9A968D] font-mono-film uppercase text-[9px] tracking-wider mb-2">
                    Project Brief & Creative Specifications
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Provide overview of campaign concept, aesthetic references, usage exclusivity requirements..."
                    value={brief}
                    onChange={(e) => setBrief(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg bg-black border border-white/[0.1] text-xs text-white placeholder-[#686D76] font-mono-film focus:outline-none focus:border-white shadow-xs"
                  />
                </div>
              </div>
            </div>

            {/* Submit CTA */}
            <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-[10px] text-[#8A8F99] font-mono-film flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D5D1C7]" />
                <span>Strict confidentiality guaranteed under Ndori NDA protocol.</span>
              </div>

              <button
                id="submit-booking-inquiry-btn"
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-xs font-syne font-bold uppercase tracking-[0.2em] bg-[#F4F2EE] hover:bg-white text-[#08090A] shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{isSubmitting ? 'Dispatching Protocol...' : 'Dispatch Official Brief'}</span>
              </button>
            </div>
          </form>

          {/* Sidebar Summary & Quinci King Guarantee (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Real-time proposal preview card */}
            <div className="p-6 rounded-2xl border border-white/[0.1] bg-[#0A0C0E] space-y-5 shadow-lg shadow-black/40">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                <span className="text-[9px] uppercase font-mono-film tracking-[0.2em] text-[#9A968D]">
                  SPECIFICATION SUMMARY
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              </div>

              {chosenCreatorObj ? (
                <div className="flex items-center gap-3">
                  <img
                    src={chosenCreatorObj.headshot}
                    alt={chosenCreatorObj.name}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-lg object-cover border border-white/[0.15] grayscale"
                  />
                  <div>
                    <h4 className="font-vogue text-base text-white">
                      {chosenCreatorObj.name}
                    </h4>
                    <p className="text-[10px] text-[#8A8F99] font-mono-film">{chosenCreatorObj.handle}</p>
                    <p className="text-[10px] text-[#D5D1C7] font-mono-film">
                      Engagement: {chosenCreatorObj.metrics.avgEngagementRate}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-xs font-mono-film text-[#C5C0B6]">
                  <strong>Full Roster Inquiry</strong> (All Resident Creators)
                </div>
              )}

              <div className="space-y-2.5 pt-2 border-t border-white/[0.06] text-xs font-mono-film">
                <div className="flex justify-between text-[#8A8F99]">
                  <span>Scope:</span>
                  <span className="text-[#D5D1C7] text-right truncate max-w-[150px]">{campaignType}</span>
                </div>
                <div className="flex justify-between text-[#8A8F99]">
                  <span>Budget Tier:</span>
                  <span className="text-white font-bold">{budgetRange}</span>
                </div>
                <div className="flex justify-between text-[#8A8F99]">
                  <span>Deliverables:</span>
                  <span className="text-[#D5D1C7]">{deliverables.length} selected</span>
                </div>
              </div>
            </div>

            {/* Direct Founder Access Guarantee */}
            <div className="p-6 rounded-2xl border border-white/[0.1] bg-black space-y-4 shadow-lg shadow-black/40">
              <h4 className="font-vogue text-base text-white flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#D5D1C7]" />
                <span>The Ndori Standard</span>
              </h4>

              <ul className="space-y-2.5 text-xs font-mono-film text-[#9A968D]">
                <li className="flex items-start gap-2">
                  <Check className="w-3 h-3 text-white flex-shrink-0 mt-0.5" />
                  <span>Direct negotiations personally led by <strong>Quinci King</strong>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3 h-3 text-white flex-shrink-0 mt-0.5" />
                  <span>Bespoke creative direction and auteur alignment.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3 h-3 text-white flex-shrink-0 mt-0.5" />
                  <span>Post-campaign metrics verification and impact auditing.</span>
                </li>
              </ul>

              <div className="pt-3 border-t border-white/[0.08] text-[10px] text-[#8A8F99] font-mono-film">
                Direct Inquiries: <strong className="text-white">quinciking@gmail.com</strong>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
