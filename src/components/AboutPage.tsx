import React from 'react';
import { TabType } from '../types';
import { FOUNDER_INFO } from '../data/mockData';
import { NdoriLogo } from './NdoriLogo';
import {
  Mail,
  Calendar,
  ArrowRight,
  Film,
  Sparkles,
  Crown,
  TrendingUp,
  Globe
} from 'lucide-react';

interface AboutPageProps {
  onSelectTab: (tab: TabType) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onSelectTab }) => {
  return (
    <div id="about-page" className="pt-32 md:pt-44 pb-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28 film-grain">
      {/* 1. HERO / FOUNDER LEAD */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Portrait & Film Stamp Frame */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-2xl border border-white/[0.12] bg-[#0A0C0E] p-3.5 shadow-2xl shadow-black/50 overflow-hidden">
            {/* Film registration header */}
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/[0.08] text-[9px] font-mono-film text-[#8A8F99]">
              <span>KODAK SAFETY FILM 5063</span>
              <span>FRAME 01A</span>
            </div>

            <div className="relative overflow-hidden rounded-xl h-[500px] bg-black">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop"
                alt="Quinci King"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center grayscale contrast-115 brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C0E] via-transparent to-transparent" />

              {/* Founder Plate */}
              <div className="absolute bottom-4 left-4 right-4 p-5 rounded-xl bg-[#050608]/90 backdrop-blur-md border border-white/[0.15] space-y-1.5 shadow-lg">
                <div className="flex items-center justify-between">
                  <h3 className="font-vogue text-xl text-white">
                    Quinci King
                  </h3>
                  <span className="text-[9px] font-mono-film uppercase px-2 py-0.5 rounded border border-white/[0.2] bg-white/[0.05] text-[#D5D1C7]">
                    FOUNDER // MANAGING DIRECTOR
                  </span>
                </div>
                <p className="text-xs text-[#9A968D] font-mono-film">
                  NDORI TALENT MANAGEMENT
                </p>
                <div className="text-[11px] text-[#D5D1C7] pt-2 border-t border-white/[0.08] flex items-center gap-2 font-mono-film">
                  <Mail className="w-3 h-3 text-[#B3AEA4]" />
                  <span>quinciking@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Founder Manifesto */}
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2 text-[10px] font-mono-film uppercase tracking-[0.3em] text-[#9A968D]">
            <Film className="w-3.5 h-3.5 text-[#D5D1C7]" />
            <span>FOUNDER MONOGRAPH // QUINCI KING</span>
          </div>

          <h1 className="font-vogue text-4xl sm:text-6xl font-normal text-[#F4F2EE] tracking-tight leading-tight">
            Advancing the Frontier of Modern Talent Representation.
          </h1>

          <div className="p-6 rounded-xl border-l-2 border-white/30 bg-white/[0.02] shadow-sm">
            <p className="font-editorial text-xl sm:text-2xl italic text-[#F4F2EE] leading-relaxed font-light">
              &ldquo;{FOUNDER_INFO.quote}&rdquo;
            </p>
          </div>

          <div className="space-y-4 text-[#C5C0B6] font-light text-sm sm:text-base leading-relaxed">
            <p>
              As the founder of Ndori Management, <strong className="text-white font-normal">Quinci King</strong> established the agency upon a single unwavering premise: digital creators are not ephemeral promotional channels, but the modern creative directors, brand builders, and auteur tastemakers of our century.
            </p>

            <p>
              With a discipline rooted in high-fashion editorial curation, auteur cinema strategy, and multi-tier rights negotiations, Quinci provides meticulous, high-touch management to an intentionally small roster. Under Quinci&apos;s direct stewardship, Ndori creators collaborate with iconic global fashion houses, establish milestone ambassadorships, and architect enduring intellectual property.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => onSelectTab('booking')}
              className="px-8 py-3.5 rounded-xl text-xs font-syne font-bold uppercase tracking-[0.2em] bg-[#F4F2EE] hover:bg-white text-[#08090A] transition-all cursor-pointer flex items-center gap-2 shadow-xl hover:shadow-2xl"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Strategy Brief</span>
            </button>

            <button
              onClick={() => onSelectTab('talent')}
              className="px-8 py-3.5 rounded-xl text-xs font-syne font-semibold uppercase tracking-wider bg-white/[0.03] hover:bg-white/[0.08] text-[#F4F2EE] border border-white/[0.15] transition-all cursor-pointer flex items-center gap-2 shadow-sm"
            >
              <span>Examine Roster</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* 2. THE 4 PILLARS OF NDORI MANAGEMENT */}
      <div className="space-y-12">
        <div className="border-b border-white/[0.08] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-[10px] font-mono-film uppercase tracking-[0.3em] text-[#9A968D]">
              THE AGENCY DOCTRINE
            </span>
            <h2 className="font-vogue text-3xl sm:text-5xl font-normal text-white mt-2">
              Four Pillars of Representation
            </h2>
          </div>
          <p className="text-xs font-mono-film text-[#8A8F99] max-w-sm">
            How Ndori Management engineers cultural and financial leverage for resident artists.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FOUNDER_INFO.pillars.map((pillar, i) => {
            const icons = [Crown, Sparkles, TrendingUp, Globe];
            const Icon = icons[i] || Crown;
            return (
              <div
                key={i}
                className="p-8 rounded-2xl border border-white/[0.08] bg-[#0A0C0E] flex flex-col justify-between space-y-6 hover:border-white/[0.2] shadow-md shadow-black/30 hover:shadow-xl hover:shadow-black/50 transition-all group"
              >
                <div className="space-y-4">
                  <div className="text-[10px] font-mono-film text-[#8A8F99] uppercase tracking-widest pb-3 border-b border-white/[0.06] flex items-center justify-between">
                    <span>PILLAR // 0{i + 1}</span>
                    <Icon className="w-3.5 h-3.5 text-[#B3AEA4]" />
                  </div>
                  <h3 className="font-vogue text-xl text-white group-hover:text-[#D5D1C7] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#9A968D] leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. ROSTER PHILOSOPHY: WHY ONLY TWO CREATORS? */}
      <div className="p-8 md:p-14 rounded-2xl border border-white/[0.12] bg-[#0A0C0E] relative overflow-hidden shadow-2xl shadow-black/40">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-8 space-y-6">
            <span className="text-[10px] font-mono-film uppercase tracking-[0.3em] text-[#9A968D]">
              ARCHITECTURAL CURATION // CURATED ROSTER
            </span>
            <h2 className="font-vogue text-3xl sm:text-4xl font-normal text-white">
              Why We Represent Only Two Resident Creators
            </h2>
            <p className="text-sm text-[#C5C0B6] leading-relaxed font-light">
              Conventional agencies assemble hundreds of creator profiles, diluting founder attention and degrading creators into interchangeable line items on a spreadsheet. Ndori Management fundamentally rejects this model.
            </p>
            <p className="text-sm text-[#C5C0B6] leading-relaxed font-light">
              By strictly capping representation to two world-class visionaries, every single brand partnership receives direct executive consultation, bespoke auteur treatment, and uncompromising negotiation from <strong className="text-white font-normal">Quinci King</strong>.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/[0.08]">
              <div>
                <span className="text-2xl font-normal text-white font-vogue block">100%</span>
                <span className="text-[9px] text-[#8A8F99] font-mono-film uppercase tracking-wider">Direct Founder Attention</span>
              </div>
              <div>
                <span className="text-2xl font-normal text-white font-vogue block">24 HR</span>
                <span className="text-[9px] text-[#8A8F99] font-mono-film uppercase tracking-wider">Brand SLA Response</span>
              </div>
              <div>
                <span className="text-2xl font-normal text-white font-vogue block">ZERO</span>
                <span className="text-[9px] text-[#8A8F99] font-mono-film uppercase tracking-wider">Conflict Representation</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col items-center justify-center p-8 rounded-xl bg-black border border-white/[0.1] text-center space-y-5 shadow-lg">
            <NdoriLogo size="md" showSubtext={true} />
            <p className="text-xs text-[#B3AEA4] font-editorial italic">
              “True craftsmanship requires undivided focus. Quality will forever triumph over volume.”
            </p>
            <span className="text-[9px] font-mono-film text-[#8A8F99] tracking-widest uppercase">— Quinci King</span>
          </div>
        </div>
      </div>

      {/* 4. CONTACT & DIRECT ADVISORY */}
      <div className="text-center max-w-xl mx-auto space-y-6 pt-4">
        <h3 className="font-vogue text-3xl sm:text-4xl text-white">
          Direct Advisory & Inquiries
        </h3>
        <p className="text-xs text-[#9A968D] font-mono-film leading-relaxed">
          For luxury house partnerships, talent representation inquiries, or executive brand consultations, connect directly with Quinci King.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:quinciking@gmail.com"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-xs font-syne font-bold uppercase tracking-[0.2em] bg-[#F4F2EE] text-[#08090A] hover:bg-white flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transition-all"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>quinciking@gmail.com</span>
          </a>

          <button
            onClick={() => onSelectTab('booking')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-xs font-syne font-semibold uppercase tracking-wider bg-white/[0.04] hover:bg-white/[0.08] text-[#F4F2EE] border border-white/[0.15] flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Open Booking Portal</span>
          </button>
        </div>
      </div>
    </div>
  );
};
