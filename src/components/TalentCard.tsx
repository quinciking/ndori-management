import React, { useState } from 'react';
import { Creator } from '../types';
import { BrandLogo } from './BrandLogo';
import { Eye, ArrowUpRight, MousePointerClick, Check } from 'lucide-react';

interface TalentCardProps {
  creator: Creator;
  onOpenDossier: (creator: Creator) => void;
  onQuickBook: (creator: Creator) => void;
  index?: number;
}

export const TalentCard: React.FC<TalentCardProps> = ({
  creator,
  onOpenDossier,
  onQuickBook,
  index = 1
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [doubleClickAlert, setDoubleClickAlert] = useState(false);

  // All preview photos
  const previewImages = [creator.headshot, ...creator.galleryImages.slice(0, 2)];

  const handleDoubleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setDoubleClickAlert(true);
    setTimeout(() => setDoubleClickAlert(false), 1200);
    onOpenDossier(creator);
  };

  const formattedIndex = index < 10 ? `0${index}` : index;

  return (
    <div
      id={`talent-card-${creator.id}`}
      onDoubleClick={handleDoubleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setActiveImageIndex(0);
      }}
      className="group relative rounded-2xl border border-white/[0.1] bg-[#0B0D10] cursor-pointer select-none transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-lg shadow-black/40 hover:shadow-2xl hover:shadow-black/65 hover:border-white/30"
      style={{ minHeight: '620px' }}
      title="Double-click to expand director dossier & media kit"
    >
      {/* Film Slate Index Header */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.08] bg-[#0E1014] text-[10px] font-mono-film text-[#8A8F99] tracking-widest uppercase">
        <div className="flex items-center gap-2">
          <span className="text-[#F4F2EE] font-bold">ROSTER [{formattedIndex}]</span>
          <span className="text-white/20">/</span>
          <span>{creator.location}</span>
        </div>
        <div className="flex items-center gap-1.5 text-[#D5D1C7]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>REPRESENTATION: EXCLUSIVE</span>
        </div>
      </div>

      {/* Double Click Toast / Indicator Animation */}
      {doubleClickAlert && (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#14171D] border border-white/30 text-[#F4F2EE] text-xs font-mono-film tracking-widest uppercase shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-white animate-ping" />
            <span>ACCESSING DOSSIER // {creator.name}</span>
          </div>
        </div>
      )}

      {/* Top Editorial Photography Container (3:4 Ratio Framing) */}
      <div className="relative w-full h-[360px] overflow-hidden bg-[#060708]">
        <img
          src={previewImages[activeImageIndex] || creator.headshot}
          alt={creator.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter grayscale contrast-110 brightness-95 group-hover:grayscale-0 group-hover:contrast-100 group-hover:scale-105 transition-all duration-700 ease-out"
        />

        {/* Film Frame Vignette Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10] via-transparent to-transparent opacity-90" />
        <div className="absolute inset-0 border border-white/[0.05] pointer-events-none" />

        {/* Corner Film Registration Marks (A24 Aesthetic) */}
        <div className="absolute top-3 left-3 text-[9px] font-mono-film text-white/50 tracking-tighter">
          + 35MM FRAME
        </div>
        <div className="absolute top-3 right-3 text-[9px] font-mono-film text-white/50 tracking-tighter">
          1.85:1 // 24FPS
        </div>

        {/* Interactive Image Switcher on Hover */}
        {isHovered && previewImages.length > 1 && (
          <div className="absolute bottom-4 left-5 flex items-center gap-1.5 z-10 animate-fadeIn">
            {previewImages.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImageIndex(idx);
                }}
                className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                  activeImageIndex === idx ? 'w-6 bg-[#F4F2EE]' : 'w-2 bg-white/30 hover:bg-white/60'
                }`}
                aria-label={`View still ${idx + 1}`}
              />
            ))}
          </div>
        )}

        {/* Double Click Hint Overlay */}
        <div className="absolute bottom-4 right-5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-white/20 text-[9px] text-[#E5E1D8] tracking-widest uppercase font-mono-film shadow-md">
            <MousePointerClick className="w-3 h-3 text-[#E5E1D8]" />
            <span>2X CLICK // EXPAND</span>
          </div>
        </div>
      </div>

      {/* Card Content Information */}
      <div className="p-6 flex-1 flex flex-col justify-between bg-gradient-to-b from-transparent to-[#0A0C0E]">
        <div>
          {/* Niche Badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            {creator.niche.slice(0, 3).map((tag, i) => (
              <span
                key={i}
                className="px-2.5 py-0.5 rounded-md text-[9px] font-mono-film uppercase tracking-widest text-[#B3AEA4] bg-white/[0.03] border border-white/[0.08] shadow-xs"
              >
                [{tag}]
              </span>
            ))}
          </div>

          {/* Name & Handle (Vogue Bodoni Typography) */}
          <div className="mb-3">
            <h3 className="font-vogue text-2xl sm:text-3xl font-normal tracking-tight text-[#F4F2EE] group-hover:text-white transition-colors">
              {creator.name}
            </h3>
            <p className="text-xs text-[#9A968D] font-mono-film tracking-wider mt-1">
              {creator.handle} • <span className="text-[#C8C4B9]">{creator.role}</span>
            </p>
          </div>

          {/* Bio Snippet */}
          <p className="text-xs text-[#BCB7AB] leading-relaxed mb-5 line-clamp-2 font-light">
            {creator.bio}
          </p>

          {/* Minimalist Metrics Line */}
          <div className="grid grid-cols-3 gap-2 py-3 border-y border-white/[0.08] mb-5 text-center">
            <div>
              <div className="text-[9px] font-mono-film text-[#787D87] uppercase tracking-wider">
                Audience
              </div>
              <div className="text-sm font-syne font-bold text-[#F4F2EE] mt-0.5">
                {creator.metrics.tiktokFollowers || creator.metrics.instagramFollowers}
              </div>
            </div>

            <div className="border-x border-white/[0.08]">
              <div className="text-[9px] font-mono-film text-[#787D87] uppercase tracking-wider">
                Engagement
              </div>
              <div className="text-sm font-syne font-bold text-[#F4F2EE] mt-0.5">
                {creator.metrics.avgEngagementRate}
              </div>
            </div>

            <div>
              <div className="text-[9px] font-mono-film text-[#787D87] uppercase tracking-wider">
                Impressions
              </div>
              <div className="text-sm font-syne font-bold text-[#F4F2EE] mt-0.5">
                {creator.metrics.monthlyImpressions}
              </div>
            </div>
          </div>

          {/* Verified Collaborations Bar */}
          <div className="mb-4">
            <div className="text-[9px] font-mono-film uppercase tracking-widest text-[#787D87] mb-2 flex items-center justify-between">
              <span>Verified Brand Deals:</span>
              <span className="text-[#A6A298] text-[8px]">ACTIVE PARTNERS</span>
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              {creator.recentBrands.slice(0, 4).map((brand, i) => (
                <div
                  key={i}
                  className="px-2.5 py-1 rounded-lg text-[10px] border border-white/[0.1] bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/[0.25] text-[#D5D1C7] transition-all flex items-center shadow-xs"
                >
                  <BrandLogo brand={brand} size="xs" />
                </div>
              ))}
              {creator.recentBrands.length > 4 && (
                <span className="text-[9px] font-mono-film text-[#787D87] px-1">
                  +{creator.recentBrands.length - 4} more
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Minimalist Action Trigger Buttons */}
        <div className="pt-4 border-t border-white/[0.08] flex items-center gap-3">
          <button
            id={`view-dossier-btn-${creator.id}`}
            onClick={(e) => {
              e.stopPropagation();
              onOpenDossier(creator);
            }}
            className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-[11px] font-syne font-semibold uppercase tracking-[0.15em] bg-white/[0.04] hover:bg-white/[0.1] text-[#F4F2EE] border border-white/[0.12] hover:border-white/30 transition-all cursor-pointer shadow-xs"
          >
            <Eye className="w-3.5 h-3.5 text-[#D5D1C7]" />
            <span>Open Dossier</span>
          </button>

          <button
            id={`book-creator-btn-${creator.id}`}
            onClick={(e) => {
              e.stopPropagation();
              onQuickBook(creator);
            }}
            className="inline-flex items-center justify-center gap-1.5 py-2.5 px-5 rounded-lg text-[11px] font-syne font-semibold uppercase tracking-[0.15em] bg-[#F4F2EE] hover:bg-white text-[#08090A] transition-all cursor-pointer group/btn font-bold shadow-md hover:shadow-lg"
          >
            <span>Commission</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
