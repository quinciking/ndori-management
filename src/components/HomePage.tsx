import React from 'react';
import { Creator, TabType } from '../types';
import { TalentCard } from './TalentCard';
import { NdoriLogo } from './NdoriLogo';
import { BrandLogo } from './BrandLogo';
import { BRAND_PARTNERS, FOUNDER_INFO } from '../data/mockData';
import {
  ArrowRight,
  ArrowUpRight,
  MousePointerClick,
  Sparkles,
  Film,
  Camera
} from 'lucide-react';

interface HomePageProps {
  creators: Creator[];
  onSelectTab: (tab: TabType) => void;
  onOpenDossier: (creator: Creator) => void;
  onQuickBook: (creator: Creator) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  creators,
  onSelectTab,
  onOpenDossier,
  onQuickBook
}) => {
  return (
    <div id="home-page" className="relative space-y-28 md:space-y-40 pb-32 overflow-hidden film-grain">
      {/* 1. HERO SECTION (VOGUE COVER MEETS A24 SCREENPLAY) */}
      <section className="relative pt-32 md:pt-48 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Monogram Seal */}
        <div className="mb-8 transform hover:scale-105 transition-transform duration-700">
          <NdoriLogo size="hero" showSubtext={true} />
        </div>

        {/* Editorial Masthead Stamp */}
        <div className="flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/[0.12] bg-[#0E1014] text-[10px] font-mono-film text-[#B5B0A4] uppercase tracking-[0.25em] mb-10 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E5E1D8] animate-pulse" />
          <span>EST. MMXXVI // DIRECTED BY QUINCI KING</span>
        </div>

        {/* Hero Title (Vogue Bodoni Moda Display) */}
        <h1 className="font-vogue text-4xl sm:text-6xl lg:text-8xl font-normal tracking-tight text-[#F4F2EE] max-w-5xl leading-[1.05] mb-8">
          The New Vanguard of Digital Cinema &amp; Haute Culture.
        </h1>

        {/* Subtitle */}
        <p className="font-editorial italic text-lg sm:text-2xl text-[#C5C0B4] max-w-2xl font-light leading-relaxed mb-12">
          Ndori is an uncompromising talent management house representing singular visionary creators at the intersection of high fashion, cinema, and modern aesthetic lore.
        </p>

        {/* Action Buttons (A24 / Minimalist) */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            id="hero-explore-talent-btn"
            onClick={() => onSelectTab('talent')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-xs font-syne font-bold uppercase tracking-[0.2em] bg-[#F4F2EE] text-[#08090A] hover:bg-white transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer group shadow-xl hover:shadow-2xl"
          >
            <span>Examine Roster [{creators.length} Resident Creators]</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            id="hero-book-inquiry-btn"
            onClick={() => onSelectTab('booking')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-xs font-syne font-semibold uppercase tracking-[0.2em] bg-white/[0.03] hover:bg-white/[0.08] text-[#F4F2EE] border border-white/[0.15] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            <span>Commission Agency Brief</span>
            <ArrowUpRight className="w-4 h-4 text-[#B5B0A4]" />
          </button>
        </div>

        {/* Double-Click Interactive Callout */}
        <div className="mt-10 inline-flex items-center gap-2.5 text-[10px] text-[#A6A092] bg-[#0E1014] border border-white/[0.08] px-5 py-2.5 rounded-xl font-mono-film tracking-wider uppercase shadow-md shadow-black/30">
          <MousePointerClick className="w-3.5 h-3.5 text-[#E5E1D8]" />
          <span>Interactive Dossier: <strong>Double-click</strong> any creator card below to unveil high-res stills, rates &amp; contracts</span>
        </div>

        {/* Agency Metrics Bar */}
        <div className="mt-20 w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-0 border border-white/[0.1] bg-[#0A0C0E] text-center rounded-2xl shadow-xl shadow-black/40 overflow-hidden">
          {FOUNDER_INFO.stats.map((stat, i) => (
            <div
              key={i}
              className={`p-6 flex flex-col items-center justify-center ${
                i !== 0 ? 'border-t sm:border-t-0 sm:border-l border-white/[0.08]' : ''
              }`}
            >
              <span className="font-vogue text-3xl md:text-4xl text-[#F4F2EE] tracking-tight">
                {stat.value}
              </span>
              <span className="text-[9px] font-mono-film text-[#8A8F99] uppercase tracking-[0.2em] mt-2">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 2. VERIFIED BRAND PARTNERS STRIP (AUTHENTIC BRAND LOGOS) */}
      <section className="border-y border-white/[0.08] bg-[#0A0B0E] py-12 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 mb-8 border-b border-white/[0.05] pb-4">
            <span className="text-[9px] font-mono-film uppercase tracking-[0.35em] text-[#7E8490]">
              [ HOUSES &amp; BRAND PARTNERSHIPS ]
            </span>
            <span className="text-[9px] font-mono-film uppercase tracking-widest text-[#7E8490] hidden sm:block">
              GLOBAL CAMPAIGNS &amp; DIRECT REPRESENTATION // 2024–2026
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 md:gap-8 items-center justify-items-center">
            {BRAND_PARTNERS.slice(0, 12).map((brand, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.2] hover:bg-white/[0.05] transition-all duration-300 w-full flex items-center justify-center h-14 group cursor-default shadow-xs"
                title={`${brand} Partner`}
              >
                <BrandLogo
                  brand={brand}
                  size="md"
                  className="text-[#9A968D] group-hover:text-white transition-colors duration-300 max-h-6"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED TALENT ROSTER SECTION */}
      <section id="featured-roster" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/[0.08] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-[10px] font-mono-film uppercase tracking-[0.3em] text-[#A6A298] mb-3">
              <Film className="w-3.5 h-3.5 text-[#E5E1D8]" />
              <span>EDITORIAL TALENT INDEX</span>
            </div>
            <h2 className="font-vogue text-3xl sm:text-5xl font-normal text-[#F4F2EE] tracking-tight">
              Curated Representation
            </h2>
            <p className="font-editorial italic text-base sm:text-xl text-[#B3AEA4] mt-2 max-w-xl">
              Selective roster of defining visionaries in hair artistry, global luxury, cinematography, and aesthetic lore.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onSelectTab('talent')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-syne font-semibold uppercase tracking-[0.18em] bg-white/[0.04] hover:bg-white/[0.1] text-[#F4F2EE] border border-white/[0.12] transition-all cursor-pointer shadow-sm"
            >
              <span>Full Portfolio View ({creators.length})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Minimalist Obsidian Talent Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {creators.map((creator, idx) => (
            <TalentCard
              key={creator.id}
              creator={creator}
              index={idx + 1}
              onOpenDossier={onOpenDossier}
              onQuickBook={onQuickBook}
            />
          ))}
        </div>
      </section>

      {/* 4. FOUNDER SPOTLIGHT: QUINCI KING (EDITORIAL MONOGRAPH) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl border border-white/[0.1] bg-[#0A0C0E] p-8 md:p-16 shadow-2xl shadow-black/50 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Founder Visual Framed as an Art Exhibit Still */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-xl border border-white/[0.12] bg-[#060708] overflow-hidden aspect-[4/5] shadow-lg shadow-black/50">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop"
                  alt="Quinci King Director"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter grayscale contrast-115 hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090A] via-transparent to-transparent opacity-75" />

                {/* Film frame stamp */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-black/80 backdrop-blur-md border border-white/[0.1] flex justify-between items-center shadow-md">
                  <div>
                    <span className="font-vogue text-sm font-normal text-[#F4F2EE] block">
                      Quinci King
                    </span>
                    <span className="text-[9px] text-[#9A968D] font-mono-film tracking-widest uppercase">
                      Founder &amp; Director
                    </span>
                  </div>
                  <span className="text-[9px] font-mono-film text-white/40">REF 001</span>
                </div>
              </div>
            </div>

            {/* Editorial Essay */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.1] text-[9px] font-mono-film uppercase tracking-[0.25em] text-[#B5B0A4] bg-white/[0.02]">
                <span>EXECUTIVE MONOGRAPH</span>
              </div>

              <h2 className="font-vogue text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F4F2EE] tracking-tight leading-tight">
                “Representation must be as nuanced, architectural, and deliberate as the cinema our creators craft.”
              </h2>

              <p className="font-editorial italic text-base sm:text-lg text-[#C8C3B8] leading-relaxed font-light">
                {FOUNDER_INFO.bio}
              </p>

              {/* Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/[0.08]">
                <div className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.01] shadow-xs">
                  <h4 className="font-syne text-xs font-bold uppercase tracking-wider text-[#F4F2EE]">
                    [ 01 ] Curated Scarcity
                  </h4>
                  <p className="text-xs text-[#9A968D] mt-1 font-light leading-relaxed">
                    Strict roster limit ensuring bespoke, full-immersion directorship for each creator.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.01] shadow-xs">
                  <h4 className="font-syne text-xs font-bold uppercase tracking-wider text-[#F4F2EE]">
                    [ 02 ] Heritage &amp; IP
                  </h4>
                  <p className="text-xs text-[#9A968D] mt-1 font-light leading-relaxed">
                    Forging equity stakes, brand ownership, and cinema placements beyond sponsored posts.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  id="home-about-quinci-btn"
                  onClick={() => onSelectTab('about')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-syne font-semibold uppercase tracking-[0.2em] bg-white/[0.05] hover:bg-[#F4F2EE] hover:text-[#08090A] text-[#F4F2EE] border border-white/[0.15] transition-all cursor-pointer shadow-sm"
                >
                  <span>Explore Quinci King&apos;s Methodology</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRESS & CRITIQUE (EDITORIAL QUOTES) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-10">
          <span className="text-[10px] font-mono-film uppercase tracking-[0.3em] text-[#7E8490]">
            [ CRITICAL ACCLAIM &amp; PRESS ]
          </span>
          <span className="text-[10px] font-mono-film uppercase tracking-widest text-[#7E8490]">
            INDUSTRY NOTEBOOK
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FOUNDER_INFO.pressQuotes.map((item, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl border border-white/[0.08] bg-[#0A0C0E] flex flex-col justify-between shadow-lg shadow-black/40 hover:shadow-xl hover:shadow-black/60 transition-all"
            >
              <p className="font-editorial italic text-xl sm:text-2xl text-[#E5E1D8] leading-relaxed mb-6 font-light">
                “{item.quote}”
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-white/[0.06] text-xs font-mono-film text-[#8A8F99] uppercase tracking-wider">
                <span>{item.source}</span>
                <span>VOL. 2025/2026</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. BOTTOM CALL TO ACTION FOR HIGH HOUSES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl border border-white/[0.15] bg-[#0D0F13] p-10 md:p-16 text-center shadow-2xl shadow-black/50 overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="text-[10px] font-mono-film uppercase tracking-[0.35em] text-[#A6A298] block">
              [ INITIATE PARTNERSHIP ]
            </span>
            <h2 className="font-vogue text-3xl sm:text-5xl font-normal text-[#F4F2EE] tracking-tight">
              Commission the Next Chapter in Cultural History.
            </h2>
            <p className="font-editorial italic text-base sm:text-xl text-[#B5B0A4] max-w-xl mx-auto leading-relaxed">
              Accepting brand partnership briefs, fashion week appointments, and cinematic directorial commissions for the upcoming season.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                id="cta-booking-btn"
                onClick={() => onSelectTab('booking')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-xs font-syne font-bold uppercase tracking-[0.2em] bg-[#F4F2EE] text-[#08090A] hover:bg-white transition-all cursor-pointer shadow-xl hover:shadow-2xl"
              >
                Submit Campaign Brief
              </button>

              <button
                id="cta-talent-btn"
                onClick={() => onSelectTab('talent')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-xs font-syne font-semibold uppercase tracking-[0.2em] bg-white/[0.04] hover:bg-white/[0.1] text-[#F4F2EE] border border-white/[0.15] transition-all cursor-pointer shadow-md"
              >
                Inspect Talent Stills
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
