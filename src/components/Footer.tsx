import React from 'react';
import { TabType } from '../types';
import { NdoriLogo } from './NdoriLogo';
import { Mail, Instagram, Linkedin, ArrowUpRight, Film } from 'lucide-react';

interface FooterProps {
  onSelectTab: (tab: TabType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  return (
    <footer id="main-footer" className="border-t border-white/[0.08] bg-[#050608] text-[#8A8F99] py-20 relative overflow-hidden film-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-start">
              <NdoriLogo size="md" showSubtext={true} />
            </div>
            <p className="text-xs font-light text-[#9A968D] max-w-sm leading-relaxed">
              Boutique digital talent representation bridging visionary auteur creators with global luxury houses, cinema culture, and contemporary editorial fashion.
            </p>
            <div className="text-xs font-mono-film text-[#D5D1C7]">
              FOUNDED & DIRECTED BY <strong className="text-white font-normal">QUINCI KING</strong>
            </div>
          </div>

          {/* Nav Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-mono-film text-[10px] uppercase tracking-[0.25em] text-[#D5D1C7]">
              NAVIGATION INDEX
            </h4>
            <ul className="space-y-2.5 text-xs font-syne uppercase tracking-wider">
              <li>
                <button
                  onClick={() => onSelectTab('home')}
                  className="text-[#9A968D] hover:text-white transition-colors cursor-pointer"
                >
                  01. Cover & Index
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('talent')}
                  className="text-[#9A968D] hover:text-white transition-colors cursor-pointer flex items-center gap-2"
                >
                  <span>02. Talent Catalog</span>
                  <span className="px-1.5 py-0.5 text-[9px] rounded bg-white/[0.05] border border-white/[0.1] text-[#D5D1C7] font-mono-film">2 ROSTER</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('about')}
                  className="text-[#9A968D] hover:text-white transition-colors cursor-pointer"
                >
                  03. Quinci King Monograph
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('booking')}
                  className="text-white hover:text-[#D5D1C7] transition-colors cursor-pointer font-semibold"
                >
                  04. Commission Brief
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Contact & Locations */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-mono-film text-[10px] uppercase tracking-[0.25em] text-[#D5D1C7]">
              DIRECT CONTACT
            </h4>
            <div className="space-y-3 text-xs font-mono-film">
              <a
                href="mailto:quinciking@gmail.com"
                className="flex items-center gap-2 text-[#D5D1C7] hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#B3AEA4]" />
                <span>quinciking@gmail.com</span>
              </a>
              <div className="text-[11px] text-[#8A8F99]">
                PARIS // NEW YORK // TOKYO // LOS ANGELES
              </div>
              <div className="pt-2 flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-[#D5D1C7] hover:text-white transition-all border border-white/[0.1] shadow-xs"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-[#D5D1C7] hover:text-white transition-all border border-white/[0.1] shadow-xs"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-[#8A8F99] font-mono-film">
          <div>
            © {new Date().getFullYear()} NDORI MANAGEMENT. ALL RIGHTS RESERVED. DIRECTED BY QUINCI KING.
          </div>
          <div className="flex items-center gap-2 text-[#9A968D]">
            <Film className="w-3 h-3 text-[#D5D1C7]" />
            <span>EDITORIAL AUTEUR DIVISION</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
