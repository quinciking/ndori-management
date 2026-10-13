import React, { useState, useMemo } from 'react';
import { Creator, TabType } from '../types';
import { TalentCard } from './TalentCard';
import {
  Search,
  MousePointerClick,
  Plus,
  Filter,
  Film
} from 'lucide-react';

interface TalentPageProps {
  creators: Creator[];
  onOpenDossier: (creator: Creator) => void;
  onQuickBook: (creator: Creator) => void;
  onSelectTab: (tab: TabType) => void;
  onAddCreator?: (creator: Creator) => void;
}

export const TalentPage: React.FC<TalentPageProps> = ({
  creators,
  onOpenDossier,
  onQuickBook,
  onSelectTab,
  onAddCreator
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNiche, setSelectedNiche] = useState<string>('all');
  const [showAddCreatorModal, setShowAddCreatorModal] = useState(false);

  // New Creator Form State
  const [newCreator, setNewCreator] = useState<Partial<Creator>>({
    name: '',
    handle: '',
    role: '',
    location: 'Paris / New York',
    bio: '',
    editorialBio: '',
    headshot: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1200&auto=format&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=1600&auto=format&fit=crop',
    niche: ['High Fashion', 'Auteur Cinema'],
    recentBrands: ['Saint Laurent', 'Leica'],
    featuredQuote: '“Originality lives where discipline meets intuition.”',
    specialties: ['Directorial Cinema', 'Runway Lookbooks', 'Brand Ambassadorship']
  });

  // Extract all unique niches
  const allNiches = useMemo(() => {
    const set = new Set<string>();
    creators.forEach((c) => c.niche.forEach((n) => set.add(n)));
    return ['all', ...Array.from(set)];
  }, [creators]);

  // Filtered Creators
  const filteredCreators = useMemo(() => {
    return creators.filter((c) => {
      const matchesSearch =
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.handle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.recentBrands.some((b) => b.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesNiche = selectedNiche === 'all' || c.niche.includes(selectedNiche);

      return matchesSearch && matchesNiche;
    });
  }, [creators, searchQuery, selectedNiche]);

  const handleCreateCreatorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCreator.name || !newCreator.handle) return;

    const fullCreator: Creator = {
      id: `creator-${Date.now()}`,
      name: newCreator.name || 'New Creator',
      handle: newCreator.handle.startsWith('@') ? newCreator.handle : `@${newCreator.handle}`,
      tagline: newCreator.role || 'Digital Creator & Visual Artist',
      role: newCreator.role || 'Creative Director & Creator',
      niche: newCreator.niche || ['High Fashion', 'Cinema'],
      location: newCreator.location || 'Paris / New York',
      bio: newCreator.bio || 'Represented exclusively by Ndori Management.',
      editorialBio: newCreator.editorialBio || newCreator.bio || 'Curated digital artist and cultural tastemaker.',
      headshot: newCreator.headshot || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop',
      coverImage: newCreator.coverImage || 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop',
      galleryImages: [
        'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=900&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=900&auto=format&fit=crop'
      ],
      metrics: {
        instagramFollowers: '450K',
        tiktokFollowers: '680K',
        avgEngagementRate: '6.8%',
        monthlyImpressions: '3.5M',
        primaryAudienceAge: '18 - 34 (75%)',
        topGeos: ['United States', 'France', 'United Kingdom'],
        femaleAudiencePercent: 65
      },
      recentBrands: newCreator.recentBrands || ['Chanel', 'Leica'],
      campaigns: [
        {
          id: `c-new-${Date.now()}`,
          brand: 'Campaign Showcase',
          brandLogoText: 'BRAND COLLAB',
          title: 'Signature Digital Launch Series',
          year: '2026',
          category: 'Commercial Campaign',
          deliverableType: 'Dedicated Film & Social Lookbook',
          reach: '1.5M Impressions',
          image: newCreator.headshot || 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop',
          description: 'High-impact creative production delivered under Ndori Management guidance.'
        }
      ],
      rateGuide: {
        dedicatedReel: '$8,500 - $12,000',
        integratedVideo: '$5,500 - $7,500',
        storySet: '$3,000 - $4,500',
        campaignAmbassadorship: 'Custom on request'
      },
      specialties: newCreator.specialties || ['Editorial Photography', 'Cinematography', 'Styling'],
      pressMentions: ['Featured in Digital Creator Vanguard 2026'],
      featuredQuote: newCreator.featuredQuote || '“Elevating digital storytelling through craft.”'
    };

    if (onAddCreator) {
      onAddCreator(fullCreator);
    }
    setShowAddCreatorModal(false);
  };

  return (
    <div id="talent-page" className="pt-32 md:pt-44 pb-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 film-grain">
      {/* Header Banner (Editorial Masthead Index) */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-10">
        <div>
          <div className="inline-flex items-center gap-2 text-[10px] font-mono-film uppercase tracking-[0.3em] text-[#9A968D] mb-4">
            <Film className="w-3.5 h-3.5 text-[#E5E1D8]" />
            <span>ARCHIVE CATALOG // {creators.length} CREATORS IN DIRECT RESIDENCE</span>
          </div>

          <h1 className="font-vogue text-4xl sm:text-6xl font-normal text-[#F4F2EE] tracking-tight">
            The Talent Roster
          </h1>

          <p className="font-editorial italic text-base sm:text-xl text-[#B3AEA4] max-w-2xl font-light mt-3">
            Examine our curated roster of visionary directors and fashion auteurs. Double-click any creator card to launch their interactive 35mm media dossier, verified analytics, and campaign lookbooks.
          </p>
        </div>

        {/* Action button to add creator or jump to booking */}
        <div className="flex items-center gap-3">
          <button
            id="open-add-creator-btn"
            onClick={() => setShowAddCreatorModal(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-syne font-semibold uppercase tracking-wider bg-white/[0.03] hover:bg-white/[0.08] text-[#F4F2EE] border border-white/[0.12] transition-all cursor-pointer shadow-sm"
            title="Add a creator to the roster"
          >
            <Plus className="w-3.5 h-3.5 text-[#D5D1C7]" />
            <span>Add Creator</span>
          </button>

          <button
            onClick={() => onSelectTab('booking')}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-syne font-bold uppercase tracking-[0.2em] bg-[#F4F2EE] text-[#08090A] hover:bg-white transition-all cursor-pointer shadow-xl hover:shadow-2xl"
          >
            <span>Commission Brief</span>
          </button>
        </div>
      </div>

      {/* Double Click Callout Banner */}
      <div className="p-4 rounded-2xl border border-white/[0.08] bg-[#0A0C0E] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md shadow-black/30">
        <div className="flex items-center gap-3.5">
          <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center flex-shrink-0 shadow-inner">
            <MousePointerClick className="w-4 h-4 text-[#E5E1D8] animate-pulse" />
          </div>
          <div>
            <h4 className="text-xs font-syne font-bold uppercase tracking-wider text-[#F4F2EE] flex items-center gap-2">
              <span>Interactive Dossier Interface</span>
              <span className="text-[9px] font-mono-film text-[#A6A298]">[ 2X CLICK ACTIVE ]</span>
            </h4>
            <p className="text-xs text-[#8A8F99] font-light">
              Double-click any card or select &ldquo;Open Dossier&rdquo; to review complete verified analytics, rate cards, and stills.
            </p>
          </div>
        </div>

        <div className="text-[10px] font-mono-film text-[#8A8F99] uppercase tracking-widest flex items-center gap-2">
          <span>CURRENT ROSTER:</span>
          <span className="font-bold text-[#F4F2EE] px-2 py-0.5 rounded border border-white/[0.1] bg-white/[0.04]">
            [{creators.length} CREATORS]
          </span>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-2xl border border-white/[0.08] bg-[#0A0C0E] shadow-md shadow-black/30">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="w-3.5 h-3.5 text-[#8A8F99] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            id="talent-search-input"
            type="text"
            placeholder="Search by creator name, niche, brand partnership, or handle..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs text-[#F4F2EE] placeholder-[#6E737D] focus:outline-none focus:border-white/30 focus:bg-white/[0.06] transition-all font-mono-film shadow-xs"
          />
        </div>

        {/* Niche Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-1">
          <Filter className="w-3 h-3 text-[#8A8F99] flex-shrink-0 mr-1" />
          {allNiches.map((niche) => (
            <button
              key={niche}
              onClick={() => setSelectedNiche(niche)}
              className={`px-3 py-1.5 rounded-lg text-[10px] font-syne font-semibold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap shadow-xs ${
                selectedNiche === niche
                  ? 'bg-[#F4F2EE] text-[#08090A] font-bold shadow-sm'
                  : 'bg-white/[0.02] border border-white/[0.08] text-[#9A968D] hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              {niche}
            </button>
          ))}
        </div>
      </div>

      {/* Creators Cards Grid */}
      {filteredCreators.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {filteredCreators.map((creator, idx) => (
            <TalentCard
              key={creator.id}
              creator={creator}
              index={idx + 1}
              onOpenDossier={onOpenDossier}
              onQuickBook={onQuickBook}
            />
          ))}
        </div>
      ) : (
        <div className="p-16 text-center rounded-2xl border border-white/[0.08] bg-[#0A0C0E] space-y-4 shadow-md">
          <Search className="w-10 h-10 text-[#6E737D] mx-auto" />
          <h3 className="font-vogue text-2xl text-[#F4F2EE]">No creators match your query</h3>
          <p className="text-xs text-[#9A968D] font-mono-film">Adjust your keyword or reset filters to view all resident artists.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedNiche('all');
            }}
            className="px-5 py-2 rounded-xl text-xs font-syne font-semibold uppercase tracking-wider bg-white/[0.06] text-white hover:bg-white/[0.12] border border-white/[0.1] shadow-sm"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Add Creator Modal (Minimalist Architectural Dialog) */}
      {showAddCreatorModal && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setShowAddCreatorModal(false)}
        >
          <div
            className="relative w-full max-w-xl rounded-2xl bg-[#0C0E12] border border-white/[0.15] p-8 shadow-2xl shadow-black/80 space-y-6 text-[#F4F2EE] animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
              <div>
                <span className="text-[9px] font-mono-film text-[#8A8F99] uppercase tracking-widest block">
                  [ ROSTER INTAKE PROTOCOL ]
                </span>
                <h3 className="font-vogue text-2xl font-normal text-white">
                  Add Resident Talent
                </h3>
              </div>
              <button
                onClick={() => setShowAddCreatorModal(false)}
                className="p-1.5 rounded hover:bg-white/10 text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateCreatorSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#9A968D] font-mono-film uppercase text-[9px] mb-1 tracking-wider">
                    Creator Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Elena Rostova"
                    value={newCreator.name}
                    onChange={(e) => setNewCreator({ ...newCreator, name: e.target.value })}
                    className="w-full p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.1] text-white focus:outline-none focus:border-white/40 shadow-xs"
                  />
                </div>

                <div>
                  <label className="block text-[#9A968D] font-mono-film uppercase text-[9px] mb-1 tracking-wider">
                    Social Handle *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="@elenarostova"
                    value={newCreator.handle}
                    onChange={(e) => setNewCreator({ ...newCreator, handle: e.target.value })}
                    className="w-full p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.1] text-white focus:outline-none focus:border-white/40 shadow-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#9A968D] font-mono-film uppercase text-[9px] mb-1 tracking-wider">
                    Role / Direction
                  </label>
                  <input
                    type="text"
                    placeholder="Haute Couture & Film Directing"
                    value={newCreator.role}
                    onChange={(e) => setNewCreator({ ...newCreator, role: e.target.value })}
                    className="w-full p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.1] text-white focus:outline-none focus:border-white/40 shadow-xs"
                  />
                </div>

                <div>
                  <label className="block text-[#9A968D] font-mono-film uppercase text-[9px] mb-1 tracking-wider">
                    Primary Studio Location
                  </label>
                  <input
                    type="text"
                    placeholder="Paris / New York"
                    value={newCreator.location}
                    onChange={(e) => setNewCreator({ ...newCreator, location: e.target.value })}
                    className="w-full p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.1] text-white focus:outline-none focus:border-white/40 shadow-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#9A968D] font-mono-film uppercase text-[9px] mb-1 tracking-wider">
                  Editorial Summary / Statement
                </label>
                <textarea
                  rows={3}
                  placeholder="Define their visual signature, aesthetic lens, and cultural presence..."
                  value={newCreator.bio}
                  onChange={(e) => setNewCreator({ ...newCreator, bio: e.target.value })}
                  className="w-full p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.1] text-white focus:outline-none focus:border-white/40 shadow-xs"
                />
              </div>

              <div>
                <label className="block text-[#9A968D] font-mono-film uppercase text-[9px] mb-1 tracking-wider">
                  Portrait URL
                </label>
                <input
                  type="url"
                  placeholder="https://images.unsplash.com/..."
                  value={newCreator.headshot}
                  onChange={(e) => setNewCreator({ ...newCreator, headshot: e.target.value })}
                  className="w-full p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.1] text-white focus:outline-none focus:border-white/40 font-mono-film text-[10px] shadow-xs"
                />
              </div>

              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowAddCreatorModal(false)}
                  className="px-4 py-2 rounded-lg text-xs font-syne uppercase text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl text-xs font-syne font-bold uppercase tracking-widest bg-[#F4F2EE] text-[#08090A] hover:bg-white shadow-lg cursor-pointer"
                >
                  Induct Talent
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
