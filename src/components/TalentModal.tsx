import React, { useState } from 'react';
import { Creator, CampaignHighlight } from '../types';
import { BrandLogo } from './BrandLogo';
import {
  X,
  MapPin,
  Instagram,
  TrendingUp,
  Users,
  Eye,
  Globe,
  DollarSign,
  Download,
  Share2,
  Layers,
  Award,
  ChevronRight,
  Video,
  Film,
  FileText,
  CheckCircle2,
  Clock,
  Sparkles
} from 'lucide-react';

interface TalentModalProps {
  creator: Creator | null;
  onClose: () => void;
  onBookCreator: (creator: Creator) => void;
}

export const TalentModal: React.FC<TalentModalProps> = ({
  creator,
  onClose,
  onBookCreator
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'campaigns' | 'demographics' | 'rates'>('overview');
  const [selectedCampaign, setSelectedCampaign] = useState<CampaignHighlight | null>(null);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<string | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [downloadingKit, setDownloadingKit] = useState(false);

  if (!creator) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleDownloadKit = () => {
    setDownloadingKit(true);
    setTimeout(() => {
      setDownloadingKit(false);
      alert(`Archive Media Kit for ${creator.name} generated successfully.`);
    }, 1000);
  };

  return (
    <div
      id="talent-dossier-modal"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl rounded-2xl bg-[#08090C] border border-white/[0.12] overflow-hidden shadow-2xl shadow-black/80 my-auto text-[#F4F2EE] animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Film Slate Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-white/[0.08] bg-[#050608] text-[10px] font-mono-film text-[#8A8F99]">
          <div className="flex items-center gap-3">
            <span className="text-[#F4F2EE] font-bold tracking-widest uppercase">NDORI DOSSIER // ARCHIVE</span>
            <span>•</span>
            <span>SPEC: 35MM / MASTER EDITORIAL</span>
            <span>•</span>
            <span className="hidden sm:inline">REF: {creator.id.toUpperCase()}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="share-creator-btn"
              onClick={handleShare}
              className="p-1.5 rounded hover:bg-white/[0.08] text-[#B3AEA4] hover:text-white transition-all cursor-pointer"
              title="Share Dossier Link"
            >
              {copiedLink ? <span className="text-[9px] font-mono-film text-[#E5E1D8]">LINK COPIED</span> : <Share2 className="w-3.5 h-3.5" />}
            </button>

            <button
              id="close-talent-modal-btn"
              onClick={onClose}
              className="p-1.5 rounded hover:bg-white/[0.1] text-[#B3AEA4] hover:text-white transition-all cursor-pointer"
              aria-label="Close Dossier"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Hero Banner */}
        <div className="relative h-64 md:h-80 w-full overflow-hidden bg-[#0A0C0E]">
          <img
            src={creator.coverImage}
            alt={creator.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center brightness-75 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08090C] via-[#08090C]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#08090C]/90 via-transparent to-transparent" />

          {/* Identity Info inside Banner */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex items-end gap-5">
              {/* Circular/Square Portrait */}
              <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-xl overflow-hidden border border-white/[0.2] shadow-2xl flex-shrink-0 bg-black">
                <img
                  src={creator.headshot}
                  alt={creator.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="px-2 py-0.5 rounded text-[9px] font-mono-film uppercase tracking-widest bg-white/[0.08] border border-white/[0.15] text-[#D5D1C7]">
                    DIRECT REPRESENTATION
                  </span>
                  <span className="text-xs text-[#9A968D] font-mono-film flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#D5D1C7]" />
                    {creator.location}
                  </span>
                </div>

                <h1 className="font-vogue text-3xl md:text-5xl font-normal tracking-tight text-white flex items-center gap-3">
                  {creator.name}
                </h1>

                <p className="text-xs text-[#A6A298] font-mono-film tracking-wide mt-1">
                  {creator.role} • <span className="text-[#F4F2EE]">{creator.handle}</span>
                </p>
              </div>
            </div>

            {/* Direct CTA */}
            <div className="flex items-center gap-2.5">
              <button
                id="modal-download-kit-btn"
                onClick={handleDownloadKit}
                disabled={downloadingKit}
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-syne font-semibold uppercase tracking-wider bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.15] text-[#F4F2EE] transition-all cursor-pointer shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{downloadingKit ? 'Compiling PDF...' : 'Archive PDF'}</span>
              </button>

              <button
                id="modal-book-now-btn"
                onClick={() => {
                  onBookCreator(creator);
                  onClose();
                }}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-syne font-bold uppercase tracking-[0.2em] bg-[#F4F2EE] hover:bg-white text-[#08090A] transition-all cursor-pointer shadow-xl hover:shadow-2xl"
              >
                <Film className="w-3.5 h-3.5 text-[#08090A]" />
                <span>Commission Talent</span>
              </button>
            </div>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="border-b border-white/[0.08] px-6 bg-[#060709] flex items-center gap-2 overflow-x-auto scrollbar-none">
          {[
            { id: 'overview', label: '01 // Overview & Lookbook', icon: Layers },
            { id: 'campaigns', label: '02 // Verified Campaigns', icon: Award },
            { id: 'demographics', label: '03 // Audience Analytics', icon: Users },
            { id: 'rates', label: '04 // Rates & Deliverables', icon: DollarSign }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`modal-tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex items-center gap-2 px-4 py-3 text-xs font-syne font-semibold uppercase tracking-wider border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'border-[#F4F2EE] text-white bg-white/[0.04]'
                    : 'border-transparent text-[#7F848E] hover:text-[#D5D1C7] hover:bg-white/[0.01]'
                }`}
              >
                <Icon className="w-3 h-3" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Modal Content Body */}
        <div className="p-6 md:p-8 max-h-[55vh] overflow-y-auto space-y-8">
          {/* TAB 1: OVERVIEW & LOOKBOOK */}
          {activeTab === 'overview' && (
            <div className="space-y-8 animate-fadeIn">
              {/* Editorial Quote Banner */}
              <div className="p-6 rounded-2xl border border-white/[0.08] bg-[#0A0C0E] relative overflow-hidden shadow-md shadow-black/40">
                <div className="font-editorial text-xl md:text-2xl italic text-[#F4F2EE] leading-relaxed font-light">
                  {creator.featuredQuote}
                </div>
                <div className="mt-3 text-[10px] font-mono-film tracking-[0.2em] text-[#9A968D] uppercase">
                  — {creator.name} (Resident Monograph Statement)
                </div>
              </div>

              {/* Bio & Specialities Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-6">
                  <div>
                    <h4 className="text-[10px] uppercase font-mono-film tracking-[0.2em] text-[#9A968D] mb-2">
                      Editorial Monograph
                    </h4>
                    <p className="text-sm text-[#D5D1C7] leading-relaxed font-light">
                      {creator.editorialBio}
                    </p>
                  </div>

                  {/* Curated Brand Partners Strip */}
                  <div>
                    <h4 className="text-[10px] uppercase font-mono-film tracking-[0.2em] text-[#9A968D] mb-3 flex items-center justify-between">
                      <span>Verified House &amp; Brand Collaborations</span>
                      <span className="text-[9px] font-mono-film text-[#8A8F99]">DIRECT DEALS</span>
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {creator.recentBrands.map((brand, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-center p-3 rounded-xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.25] hover:bg-white/[0.05] transition-all shadow-xs"
                        >
                          <BrandLogo brand={brand} size="sm" className="text-[#D5D1C7] hover:text-white" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-[10px] uppercase font-mono-film tracking-[0.2em] text-[#9A968D] mb-3">
                      Discipline &amp; Directorial Mediums
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {creator.specialties.map((spec, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/[0.08] text-xs text-[#E5E1D8] font-light shadow-xs"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#F4F2EE]" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quick Snapshot Metrics Sidebar */}
                <div className="space-y-4 p-5 rounded-2xl bg-[#0A0C0E] border border-white/[0.08] shadow-md shadow-black/30">
                  <h4 className="text-[10px] uppercase font-mono-film tracking-[0.2em] text-[#9A968D]">
                    Platform Overview
                  </h4>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2 border-b border-white/[0.06]">
                      <span className="text-xs text-[#8A8F99] flex items-center gap-1.5 font-mono-film">
                        <Instagram className="w-3.5 h-3.5 text-[#B3AEA4]" />
                        Instagram
                      </span>
                      <span className="text-xs font-mono-film font-bold text-white">
                        {creator.metrics.instagramFollowers}
                      </span>
                    </div>

                    <div className="flex items-center justify-between py-2 border-b border-white/[0.06]">
                      <span className="text-xs text-[#8A8F99] flex items-center gap-1.5 font-mono-film">
                        <Video className="w-3.5 h-3.5 text-[#B3AEA4]" />
                        TikTok
                      </span>
                      <span className="text-xs font-mono-film font-bold text-white">
                        {creator.metrics.tiktokFollowers}
                      </span>
                    </div>

                    {creator.metrics.youtubeSubscribers && (
                      <div className="flex items-center justify-between py-2 border-b border-white/[0.06]">
                        <span className="text-xs text-[#8A8F99] flex items-center gap-1.5 font-mono-film">
                          <Globe className="w-3.5 h-3.5 text-[#B3AEA4]" />
                          YouTube
                        </span>
                        <span className="text-xs font-mono-film font-bold text-white">
                          {creator.metrics.youtubeSubscribers}
                        </span>
                      </div>
                    )}

                    <div className="flex items-center justify-between py-2 border-b border-white/[0.06]">
                      <span className="text-xs text-[#8A8F99] flex items-center gap-1.5 font-mono-film">
                        <TrendingUp className="w-3.5 h-3.5 text-[#B3AEA4]" />
                        Engagement
                      </span>
                      <span className="text-xs font-mono-film font-bold text-[#F4F2EE]">
                        {creator.metrics.avgEngagementRate}
                      </span>
                    </div>

                    <div className="flex items-center justify-between py-2">
                      <span className="text-xs text-[#8A8F99] flex items-center gap-1.5 font-mono-film">
                        <Eye className="w-3.5 h-3.5 text-[#B3AEA4]" />
                        Impressions
                      </span>
                      <span className="text-xs font-mono-film font-bold text-[#F4F2EE]">
                        {creator.metrics.monthlyImpressions}
                      </span>
                    </div>
                  </div>

                  {/* Press Mentions */}
                  <div className="pt-4 border-t border-white/[0.08]">
                    <span className="text-[9px] uppercase font-mono-film tracking-[0.2em] text-[#9A968D] block mb-2">
                      Press Citations:
                    </span>
                    <ul className="space-y-1.5">
                      {creator.pressMentions.map((press, i) => (
                        <li key={i} className="text-xs text-[#B3AEA4] font-editorial italic">
                          • {press}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Lookbook Gallery */}
              <div>
                <h4 className="text-[10px] uppercase font-mono-film tracking-[0.2em] text-[#9A968D] mb-3 flex items-center justify-between">
                  <span>Selected Lookbook & Stills Archive</span>
                  <span className="text-[10px] text-[#6E737D] font-mono-film">Click frame to examine</span>
                </h4>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {creator.galleryImages.map((img, i) => (
                    <div
                      key={i}
                      onClick={() => setSelectedGalleryImage(img)}
                      className="group relative h-52 rounded-xl overflow-hidden bg-black border border-white/[0.08] cursor-pointer shadow-sm hover:shadow-lg transition-all"
                    >
                      <img
                        src={img}
                        alt={`${creator.name} lookbook ${i + 1}`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Eye className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: CAMPAIGNS */}
          {activeTab === 'campaigns' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                <h4 className="text-[10px] uppercase font-mono-film tracking-[0.2em] text-[#9A968D]">
                  Brand Partnerships &amp; Directorial Case Studies
                </h4>
                <span className="text-xs text-[#D5D1C7] font-mono-film">
                  [{creator.campaigns.length} PRODUCED CAMPAIGNS]
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {creator.campaigns.map((camp) => (
                  <div
                    key={camp.id}
                    onClick={() => setSelectedCampaign(camp)}
                    className="p-4 rounded-2xl bg-[#0A0C0E] border border-white/[0.08] hover:border-white/[0.2] shadow-md shadow-black/30 hover:shadow-xl hover:shadow-black/50 transition-all flex flex-col justify-between group cursor-pointer"
                  >
                    <div>
                      <div className="relative h-48 rounded-xl overflow-hidden mb-3 bg-black">
                        <img
                          src={camp.image}
                          alt={camp.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 grayscale group-hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute top-2 left-2 px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-white/[0.2] flex items-center justify-center">
                          <BrandLogo brand={camp.brand} size="xs" />
                        </div>
                        <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded text-[9px] font-mono-film bg-black/80 text-[#B3AEA4]">
                          {camp.year}
                        </div>
                      </div>

                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h5 className="font-vogue text-base font-normal text-white group-hover:text-[#D5D1C7] transition-colors truncate">
                          {camp.title}
                        </h5>
                        {camp.rate && (
                          <span className="text-[10px] font-mono-film text-[#E5E1D8] font-bold px-1.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.08]">
                            {camp.rate}
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-[#8A8F99] font-mono-film mb-2">
                        {camp.category}
                      </p>
                      <p className="text-xs text-[#B3AEA4] line-clamp-2 leading-relaxed mb-3 font-light">
                        {camp.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between">
                      <span className="text-[10px] font-mono-film text-[#E5E1D8]">
                        {camp.reach}
                      </span>
                      <span className="text-xs text-white flex items-center gap-1 group-hover:translate-x-1 transition-transform font-syne uppercase text-[10px] tracking-wider">
                        Inspect Dossier <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: DEMOGRAPHICS */}
          {activeTab === 'demographics' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Age & Gender Distribution */}
                <div className="p-6 rounded-2xl bg-[#0A0C0E] border border-white/[0.08] space-y-5 shadow-md shadow-black/30">
                  <h4 className="text-[10px] uppercase font-mono-film tracking-[0.2em] text-[#9A968D] flex items-center justify-between">
                    <span>Audience Composition</span>
                    <span className="text-[#D5D1C7] text-[10px]">[AUDIT: VERIFIED]</span>
                  </h4>

                  {/* Gender Split Bar */}
                  <div>
                    <div className="flex justify-between text-xs font-mono-film mb-2">
                      <span className="text-[#F4F2EE]">Female: {creator.metrics.femaleAudiencePercent}%</span>
                      <span className="text-[#8A8F99]">Male: {100 - creator.metrics.femaleAudiencePercent}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-white/[0.05] overflow-hidden flex">
                      <div
                        className="h-full bg-[#F4F2EE]"
                        style={{ width: `${creator.metrics.femaleAudiencePercent}%` }}
                      />
                      <div
                        className="h-full bg-white/[0.2]"
                        style={{ width: `${100 - creator.metrics.femaleAudiencePercent}%` }}
                      />
                    </div>
                  </div>

                  {/* Age breakdown */}
                  <div className="space-y-3 pt-2">
                    <span className="text-xs text-[#D5D1C7] font-syne uppercase tracking-wider block">Age Distribution:</span>
                    <div className="space-y-2.5">
                      {[
                        { age: '18 - 24', percent: 32 },
                        { age: '25 - 34', percent: 46 },
                        { age: '35 - 44', percent: 16 },
                        { age: '45+', percent: 6 }
                      ].map((item, i) => (
                        <div key={i} className="space-y-1">
                          <div className="flex justify-between text-[10px] font-mono-film text-[#8A8F99]">
                            <span>{item.age}</span>
                            <span className="text-white font-bold">{item.percent}%</span>
                          </div>
                          <div className="h-1.5 w-full rounded-full bg-white/[0.05] overflow-hidden">
                            <div
                              className="h-full bg-[#D5D1C7]"
                              style={{ width: `${item.percent}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Top Geographic Markets */}
                <div className="p-6 rounded-2xl bg-[#0A0C0E] border border-white/[0.08] space-y-5 shadow-md shadow-black/30">
                  <h4 className="text-[10px] uppercase font-mono-film tracking-[0.2em] text-[#9A968D] flex items-center gap-2">
                    <Globe className="w-3.5 h-3.5 text-[#D5D1C7]" />
                    <span>Key Global Metros</span>
                  </h4>

                  <div className="space-y-2.5">
                    {creator.metrics.topGeos.map((geo, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-[10px] font-mono-film text-[#8A8F99]">
                            0{i + 1}
                          </span>
                          <span className="text-xs text-[#F4F2EE] font-light">{geo}</span>
                        </div>
                        <span className="text-[10px] font-mono-film text-[#9A968D] uppercase tracking-wider">Tier 1 Editorial Reach</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] text-xs text-[#B3AEA4] leading-relaxed font-light">
                    Audience index demonstrates exceptionally high purchasing concentration across luxury apparel, architectural design, auteur cinematography, and boutique hospitality.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: DELIVERABLES & RATES */}
          {activeTab === 'rates' && (
            <div className="space-y-8 animate-fadeIn">
              {/* Rate Standard Guide */}
              <div className="p-6 rounded-2xl bg-[#0A0C0E] border border-white/[0.08] shadow-md shadow-black/30">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-[10px] uppercase font-mono-film tracking-[0.2em] text-[#9A968D]">
                    Commission Architecture &amp; Deliverable Baseline
                  </h4>
                  <span className="text-[9px] font-mono-film text-[#D5D1C7] uppercase px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08]">
                    EXCLUSIVELY VIA NDORI
                  </span>
                </div>
                <p className="text-xs text-[#8A8F99] mb-6 font-light">
                  Rates incorporate full production direction, auteur editing, and 30-day worldwide digital usage. All engagements contractually arbitrated via Quinci King at Ndori Management.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.08] shadow-xs">
                    <span className="text-[10px] font-mono-film text-[#8A8F99] uppercase block mb-1">
                      Directorial Film / Cinema Reel
                    </span>
                    <div className="text-xl font-normal text-white font-vogue mb-2">
                      {creator.rateGuide.dedicatedReel}
                    </div>
                    <p className="text-xs text-[#9A968D] font-light leading-relaxed">
                      Complete auteur treatment, 4K digital master, 2 revision rounds, paid distribution rights.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.08] shadow-xs">
                    <span className="text-[10px] font-mono-film text-[#8A8F99] uppercase block mb-1">
                      Integrated Narrative Feature
                    </span>
                    <div className="text-xl font-normal text-white font-vogue mb-2">
                      {creator.rateGuide.integratedVideo}
                    </div>
                    <p className="text-xs text-[#9A968D] font-light leading-relaxed">
                      Organic placement within studio vlog, travelogue, or cinematic series.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.08] shadow-xs">
                    <span className="text-[10px] font-mono-film text-[#8A8F99] uppercase block mb-1">
                      Editorial Story Suite (3-5 Frames)
                    </span>
                    <div className="text-xl font-normal text-white font-vogue mb-2">
                      {creator.rateGuide.storySet}
                    </div>
                    <p className="text-xs text-[#9A968D] font-light leading-relaxed">
                      Swipe links, curated lookbook frames, trackable campaign URLs.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.08] shadow-xs">
                    <span className="text-[10px] font-mono-film text-[#8A8F99] uppercase block mb-1">
                      Year-Long Ambassadorship
                    </span>
                    <div className="text-xl font-normal text-white font-vogue mb-2">
                      {creator.rateGuide.campaignAmbassadorship}
                    </div>
                    <p className="text-xs text-[#9A968D] font-light leading-relaxed">
                      Global category exclusivity, runway representation, front-row appearances.
                    </p>
                  </div>
                </div>
              </div>

              {/* Verified Historical Deals / Contracts Ledger */}
              <div className="p-6 rounded-2xl bg-[#0A0C0E] border border-white/[0.08] shadow-md shadow-black/30">
                <div className="flex items-center justify-between mb-4 border-b border-white/[0.08] pb-3">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#D5D1C7]" />
                    <h4 className="text-[10px] uppercase font-mono-film tracking-[0.2em] text-[#9A968D]">
                      Verified Agency Deal Ledger &amp; Deliverables History
                    </h4>
                  </div>
                  <span className="text-[9px] font-mono-film text-[#8A8F99]">
                    AUDITED ARCHIVE // {creator.name.toUpperCase()}
                  </span>
                </div>

                <div className="space-y-3">
                  {creator.campaigns.map((camp) => (
                    <div
                      key={camp.id}
                      onClick={() => setSelectedCampaign(camp)}
                      className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.2] hover:bg-white/[0.04] transition-all cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-2 rounded-lg bg-black border border-white/[0.1] flex items-center justify-center min-w-[70px] h-10">
                          <BrandLogo brand={camp.brand} size="xs" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-vogue text-sm text-white group-hover:text-[#D5D1C7] transition-colors">
                              {camp.title}
                            </span>
                            {camp.relationshipStatus && (
                              <span className="text-[8px] font-mono-film px-1.5 py-0.5 rounded uppercase bg-white/[0.05] text-[#B3AEA4] border border-white/[0.1]">
                                {camp.relationshipStatus}
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-[#8A8F99] font-mono-film mt-0.5">
                            {camp.deliverableType} {camp.date ? `• ${camp.date}` : `• ${camp.year}`}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-6 self-end md:self-center">
                        {camp.rate && (
                          <div className="text-right">
                            <span className="text-[9px] font-mono-film text-[#8A8F99] uppercase block">Contract Value</span>
                            <span className="text-sm font-mono-film font-bold text-[#F4F2EE]">{camp.rate}</span>
                          </div>
                        )}
                        <ChevronRight className="w-4 h-4 text-[#8A8F99] group-hover:text-white group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between p-6 rounded-2xl bg-[#0A0C0E] border border-white/[0.1] gap-4 shadow-md">
                <div>
                  <h5 className="text-base font-vogue text-white">Commission {creator.name}</h5>
                  <p className="text-xs text-[#8A8F99] font-mono-film">Submit project scope to receive an immediate creative proposal.</p>
                </div>

                <button
                  id="rates-book-now-btn"
                  onClick={() => {
                    onBookCreator(creator);
                    onClose();
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-syne font-bold uppercase tracking-[0.2em] bg-[#F4F2EE] text-[#08090A] hover:bg-white transition-all cursor-pointer shadow-lg hover:shadow-xl"
                >
                  Initiate Commission
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="p-4 px-8 bg-[#050608] border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-[11px] text-[#8A8F99] font-mono-film">
            DIRECT REPRESENTATION: <strong className="text-white">QUINCI KING</strong> // NDORI MANAGEMENT
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-xs font-syne uppercase text-[#8A8F99] hover:text-white transition-colors cursor-pointer"
            >
              Dismiss
            </button>
            <button
              id="footer-book-creator-btn"
              onClick={() => {
                onBookCreator(creator);
                onClose();
              }}
              className="px-6 py-2.5 rounded-xl text-xs font-syne font-bold uppercase tracking-[0.2em] bg-[#F4F2EE] hover:bg-white text-[#08090A] transition-all cursor-pointer flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              <Film className="w-3 h-3" />
              <span>Inquire for {creator.name.split(' ')[0]}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Gallery Enlarged Lightbox */}
      {selectedGalleryImage && (
        <div
          className="fixed inset-0 z-60 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4"
          onClick={(e) => {
            e.stopPropagation();
            setSelectedGalleryImage(null);
          }}
        >
          <div className="relative max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden border border-white/[0.2] shadow-2xl shadow-black">
            <img
              src={selectedGalleryImage}
              alt="Enlarged visual"
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain max-h-[80vh]"
            />
            <button
              onClick={() => setSelectedGalleryImage(null)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-black text-white border border-white/[0.2] cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Campaign Details Sub-Modal */}
      {selectedCampaign && (
        <div
          className="fixed inset-0 z-60 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4"
          onClick={(e) => {
            e.stopPropagation();
            setSelectedCampaign(null);
          }}
        >
          <div
            className="relative w-full max-w-2xl rounded-2xl bg-[#0A0C0E] border border-white/[0.15] p-8 shadow-2xl shadow-black/80 text-[#F4F2EE] space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-black border border-white/[0.12] flex items-center justify-center">
                  <BrandLogo brand={selectedCampaign.brand} size="sm" />
                </div>
                <div>
                  <span className="text-[10px] font-mono-film text-[#8A8F99] uppercase tracking-widest block">
                    Direct Campaign Record
                  </span>
                  <h4 className="font-vogue text-xl text-white">
                    {selectedCampaign.brand} × {creator.name}
                  </h4>
                </div>
              </div>
              <button
                onClick={() => setSelectedCampaign(null)}
                className="p-1.5 rounded hover:bg-white/10 text-slate-400 hover:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="relative h-60 rounded-xl overflow-hidden border border-white/[0.1]">
              <img
                src={selectedCampaign.image}
                alt={selectedCampaign.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <div className="flex items-start justify-between gap-4 mb-2">
                <h4 className="font-vogue text-2xl text-white">
                  {selectedCampaign.title}
                </h4>
                {selectedCampaign.rate && (
                  <div className="text-right">
                    <span className="text-[9px] font-mono-film text-[#8A8F99] block uppercase">Contract Rate</span>
                    <span className="text-base font-mono-film font-bold text-[#F4F2EE]">{selectedCampaign.rate}</span>
                  </div>
                )}
              </div>

              <p className="text-xs text-[#9A968D] font-mono-film mb-3">
                {selectedCampaign.category} {selectedCampaign.date ? `(${selectedCampaign.date})` : `(${selectedCampaign.year})`}
              </p>
              <p className="text-xs text-[#D5D1C7] leading-relaxed mb-4 font-light">{selectedCampaign.description}</p>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-mono-film">
                <div>
                  <span className="text-[#8A8F99] block text-[9px] uppercase tracking-widest">Deliverables:</span>
                  <span className="text-white">{selectedCampaign.deliverableType}</span>
                </div>
                <div>
                  <span className="text-[#8A8F99] block text-[9px] uppercase tracking-widest">Impact / Reach:</span>
                  <span className="text-[#F4F2EE]">{selectedCampaign.reach}</span>
                </div>
                {selectedCampaign.clientPoc && (
                  <div>
                    <span className="text-[#8A8F99] block text-[9px] uppercase tracking-widest">Client POC:</span>
                    <span className="text-[#D5D1C7]">{selectedCampaign.clientPoc}</span>
                  </div>
                )}
                {selectedCampaign.payStructure && (
                  <div>
                    <span className="text-[#8A8F99] block text-[9px] uppercase tracking-widest">Pay Terms:</span>
                    <span className="text-[#D5D1C7]">{selectedCampaign.payStructure}</span>
                  </div>
                )}
                {selectedCampaign.relationshipStatus && (
                  <div>
                    <span className="text-[#8A8F99] block text-[9px] uppercase tracking-widest">Status:</span>
                    <span className="text-[#D5D1C7]">{selectedCampaign.relationshipStatus}</span>
                  </div>
                )}
              </div>

              {selectedCampaign.notes && (
                <div className="mt-3 p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] text-xs font-light text-[#B3AEA4]">
                  <strong className="text-white font-mono-film text-[10px] uppercase block mb-1">Archival Notes:</strong>
                  {selectedCampaign.notes}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
