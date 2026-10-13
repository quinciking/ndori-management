import React, { useState, useEffect } from 'react';
import { TabType } from '../types';
import { NdoriLogo } from './NdoriLogo';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentTab: TabType;
  onSelectTab: (tab: TabType) => void;
  onOpenBookingForTalent?: (talentId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  onOpenBookingForTalent
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: TabType; label: string; index: string }[] = [
    { id: 'home', label: 'Index', index: '01' },
    { id: 'talent', label: 'Roster', index: '02' },
    { id: 'about', label: 'Director', index: '03' },
    { id: 'booking', label: 'Inquiries', index: '04' }
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#070809]/90 backdrop-blur-xl border-b border-white/[0.08] py-3.5'
          : 'bg-gradient-to-b from-[#070809]/95 via-[#070809]/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Monogram + Editorial Wordmark */}
        <button
          id="nav-logo-btn"
          onClick={() => {
            onSelectTab('home');
            setMobileMenuOpen(false);
          }}
          className="flex items-center gap-3.5 group text-left cursor-pointer focus:outline-none"
        >
          <div className="transform group-hover:scale-105 transition-transform duration-300">
            <NdoriLogo size="sm" showSubtext={false} />
          </div>
          <div className="flex flex-col">
            <span className="font-vogue tracking-[0.25em] text-sm font-normal text-[#F4F2EE] group-hover:text-white uppercase transition-colors">
              NDORI
            </span>
            <span className="text-[8px] tracking-[0.4em] text-[#9A968D] uppercase font-mono-film">
              MANAGEMENT
            </span>
          </div>
        </button>

        {/* Studio Location & Time Stamp (A24 / Editorial style) */}
        <div className="hidden lg:flex items-center gap-4 text-[10px] font-mono-film text-[#8A8F99] uppercase tracking-widest border-x border-white/[0.08] px-6">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5E1D8] animate-pulse" />
            PARIS // NEW YORK // TOKYO
          </span>
          <span className="text-white/20">•</span>
          <span>CURATED ROSTER [02]</span>
        </div>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-1 bg-[#121418]/60 border border-white/[0.08] rounded-full p-1 backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => onSelectTab(item.id)}
                className={`relative px-4 py-1.5 rounded-full text-[11px] font-syne font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'text-[#08090A] bg-[#F4F2EE] shadow-sm font-bold'
                    : 'text-[#B5B0A4] hover:text-[#F4F2EE] hover:bg-white/[0.04]'
                }`}
              >
                <span>{item.label}</span>
                <span className={`text-[9px] font-mono-film ${isActive ? 'text-[#08090A]/60' : 'text-white/30'}`}>
                  {item.index}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Action Button: Book Talent */}
        <div className="hidden md:flex items-center gap-4">
          <button
            id="nav-quick-book-btn"
            onClick={() => {
              if (onOpenBookingForTalent) {
                onOpenBookingForTalent();
              } else {
                onSelectTab('booking');
              }
            }}
            className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-syne font-semibold tracking-[0.15em] uppercase text-[#F4F2EE] bg-white/[0.05] hover:bg-[#F4F2EE] hover:text-[#08090A] border border-white/15 transition-all duration-300 cursor-pointer"
          >
            <span>Commission</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-200 hover:text-white hover:bg-white/10 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="md:hidden px-6 pt-6 pb-8 mt-3 bg-[#08090A]/98 border-b border-white/10 backdrop-blur-2xl animate-fadeIn"
        >
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                onClick={() => {
                  onSelectTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-xs font-syne font-semibold tracking-widest uppercase transition-all ${
                  currentTab === item.id
                    ? 'bg-[#F4F2EE] text-[#08090A]'
                    : 'text-[#B5B0A4] hover:bg-white/5 hover:text-white'
                }`}
              >
                <span>{item.label}</span>
                <span className="font-mono-film text-[10px] opacity-60">[{item.index}]</span>
              </button>
            ))}

            <button
              id="mobile-nav-book-btn"
              onClick={() => {
                onSelectTab('booking');
                setMobileMenuOpen(false);
              }}
              className="mt-4 w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#F4F2EE] text-[#08090A] font-syne font-bold text-xs uppercase tracking-widest"
            >
              <span>Initiate Campaign Brief</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
