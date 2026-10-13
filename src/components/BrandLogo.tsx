import React from 'react';

export type BrandName =
  | 'Meta'
  | 'Instagram'
  | 'Cécred'
  | 'Cecred'
  | 'Sephora'
  | 'Aveda'
  | 'Aussie Hair'
  | 'Aussie'
  | 'Shea Moisture'
  | 'Method'
  | 'Coachella'
  | 'Crocs'
  | 'LEGO'
  | 'Lego'
  | 'Warby Parker'
  | 'Mielle'
  | 'Mielle Hair'
  | 'Mielle Organics'
  | 'Saint Laurent'
  | 'SAINT LAURENT'
  | 'YSL'
  | 'Leica'
  | 'Leica Camera'
  | 'Porsche'
  | 'PORSCHE'
  | 'RIMOWA'
  | 'Byredo'
  | 'BYREDO'
  | 'Jacquemus'
  | 'JACQUEMUS'
  | 'Dior Beauty'
  | 'Dior'
  | 'Bang & Olufsen'
  | 'Sony Alpha'
  | 'Sony'
  | 'Apple'
  | 'Khaite'
  | 'Loewe'
  | 'Ulta'
  | string;

interface BrandLogoProps {
  brand: BrandName;
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'logo' | 'badge' | 'full';
  monochrome?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  brand,
  className = '',
  size = 'md',
  variant = 'logo',
  monochrome = false,
}) => {
  const norm = (brand || '').toLowerCase().trim();

  // Size mappings
  const heightClasses = {
    xs: 'h-3.5 text-[10px]',
    sm: 'h-4.5 text-xs',
    md: 'h-6 text-sm',
    lg: 'h-8 text-base',
    xl: 'h-10 text-lg',
  };

  const currentHeight = heightClasses[size] || heightClasses.md;

  const renderSvg = () => {
    // 1. META
    if (norm.includes('meta')) {
      return (
        <div className={`inline-flex items-center gap-1.5 font-sans font-semibold tracking-tight ${currentHeight} ${className}`}>
          <svg viewBox="0 0 100 68" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto aspect-[100/68]">
            <path
              d="M72.3 0C61.4 0 54.3 6.9 50 14.5 45.7 6.9 38.6 0 27.7 0 11.2 0 0 14.3 0 34s11.2 34 27.7 34c11.3 0 18.9-7.2 22.3-15.1 3.4 7.9 11 15.1 22.3 15.1C88.8 68 100 53.7 100 34S88.8 0 72.3 0zm0 54.4c-9.1 0-14.8-6.9-18.4-15.3l-3.9-9.1 3.9-9.1C57.5 12.5 63.2 5.6 72.3 5.6 81.4 5.6 88 16.8 88 34s-6.6 28.4-15.7 28.4zm-44.6 0C18.6 54.4 12 43.2 12 34S18.6 5.6 27.7 5.6c9.1 0 14.8 6.9 18.4 15.3l3.9 9.1-3.9 9.1c-3.6 8.4-9.3 15.3-18.4 15.3z"
              fill={monochrome ? 'currentColor' : '#0081FB'}
            />
          </svg>
          <span className="font-semibold tracking-normal text-current font-sans">Meta</span>
        </div>
      );
    }

    // 2. INSTAGRAM
    if (norm.includes('instagram') || norm.includes('ig')) {
      return (
        <div className={`inline-flex items-center gap-1.5 font-sans font-medium tracking-tight ${currentHeight} ${className}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-full w-auto aspect-square text-current">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
          <span className="font-editorial italic font-normal tracking-wide text-current">Instagram</span>
        </div>
      );
    }

    // 3. CÉCRED (Beyoncé)
    if (norm.includes('céc') || norm.includes('cec')) {
      return (
        <div className={`inline-flex items-center gap-2 font-mono tracking-[0.28em] uppercase ${currentHeight} ${className}`}>
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-[75%] w-auto aspect-square text-current">
            <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l-8-4v6l8 4 8-4v-6l-8 4zm0 8l-6-3v4l6 3 6-3v-4l-6 3z" />
          </svg>
          <span className="font-bold text-current tracking-[0.3em]">CÉCRED</span>
        </div>
      );
    }

    // 4. SEPHORA
    if (norm.includes('sephora')) {
      return (
        <div className={`inline-flex items-center gap-2 font-serif ${currentHeight} ${className}`}>
          <svg viewBox="0 0 100 100" fill="currentColor" className="h-full w-auto aspect-square text-current">
            <path d="M50 5C35 25 20 40 20 60c0 16.5 13.5 30 30 30s30-13.5 30-30c0-20-15-35-30-55zm0 18c8 12 18 24 18 37 0 9.9-8.1 18-18 18s-18-8.1-18-18c0-13 10-25 18-37z" />
          </svg>
          <span className="font-vogue font-normal tracking-[0.35em] text-current uppercase">SEPHORA</span>
        </div>
      );
    }

    // 5. AVEDA
    if (norm.includes('aveda')) {
      return (
        <div className={`inline-flex items-center gap-1.5 font-serif ${currentHeight} ${className}`}>
          <span className="font-editorial uppercase tracking-[0.35em] font-normal text-current border-b border-current pb-0.5">
            AVEDA
          </span>
        </div>
      );
    }

    // 6. AUSSIE HAIR CARE
    if (norm.includes('aussie')) {
      return (
        <div className={`inline-flex items-center gap-1.5 font-sans ${currentHeight} ${className}`}>
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-[80%] w-auto aspect-square text-amber-500">
            <path d="M19 8c-1.1 0-2 .9-2 2 0 .5.2.9.5 1.2L14 15l-3-3-4.5 4.5 1.5 1.5 3-3 3 3 4.5-4.5c.3.3.7.5 1.2.5 1.1 0 2-.9 2-2s-.9-2-2-2z" />
          </svg>
          <span className="font-syne font-extrabold tracking-wider uppercase text-current">AUSSIE</span>
        </div>
      );
    }

    // 7. SHEA MOISTURE
    if (norm.includes('shea')) {
      return (
        <div className={`inline-flex items-center gap-1 font-serif ${currentHeight} ${className}`}>
          <span className="font-editorial italic font-normal tracking-wide text-current">Shea</span>
          <span className="font-vogue font-light tracking-[0.2em] uppercase text-current">MOISTURE</span>
        </div>
      );
    }

    // 8. METHOD
    if (norm.includes('method')) {
      return (
        <div className={`inline-flex items-center gap-1 font-sans ${currentHeight} ${className}`}>
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          <span className="font-syne font-bold lowercase tracking-wider text-current text-sm">method.</span>
        </div>
      );
    }

    // 9. COACHELLA
    if (norm.includes('coachella')) {
      return (
        <div className={`inline-flex items-center gap-1.5 font-mono ${currentHeight} ${className}`}>
          <span className="font-editorial uppercase tracking-[0.4em] font-light text-current">COACHELLA</span>
        </div>
      );
    }

    // 10. CROCS
    if (norm.includes('crocs')) {
      return (
        <div className={`inline-flex items-center gap-1.5 font-sans ${currentHeight} ${className}`}>
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-[80%] w-auto aspect-square text-emerald-400">
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12a4 4 0 0 1 8 0" stroke="#000" strokeWidth="2" fill="none" />
            <circle cx="9" cy="10" r="1.5" fill="#000" />
            <circle cx="15" cy="10" r="1.5" fill="#000" />
          </svg>
          <span className="font-syne font-black tracking-widest uppercase text-current">crocs™</span>
        </div>
      );
    }

    // 11. LEGO
    if (norm.includes('lego')) {
      return (
        <div className={`inline-flex items-center gap-1.5 ${currentHeight} ${className}`}>
          <div className="bg-red-600 text-yellow-300 px-1.5 py-0.5 rounded font-black font-sans text-[11px] tracking-tighter uppercase border border-black shadow-xs">
            LEGO
          </div>
        </div>
      );
    }

    // 12. WARBY PARKER
    if (norm.includes('warby')) {
      return (
        <div className={`inline-flex items-center gap-1.5 font-sans ${currentHeight} ${className}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-[75%] w-auto aspect-[24/12] text-current">
            <circle cx="6" cy="12" r="4" />
            <circle cx="18" cy="12" r="4" />
            <path d="M10 12h4" />
          </svg>
          <span className="font-syne font-semibold tracking-[0.2em] uppercase text-current text-xs">WARBY PARKER</span>
        </div>
      );
    }

    // 13. MIELLE (Mielle Organics)
    if (norm.includes('mielle')) {
      return (
        <div className={`inline-flex items-center gap-1.5 font-serif ${currentHeight} ${className}`}>
          <span className="font-editorial italic font-semibold text-rose-300 text-sm tracking-wide">Mielle</span>
          <span className="text-[9px] font-mono tracking-widest uppercase text-current opacity-80">ORGANICS</span>
        </div>
      );
    }

    // 14. SAINT LAURENT / YSL
    if (norm.includes('laurent') || norm.includes('ysl')) {
      return (
        <div className={`inline-flex items-center gap-2 font-sans ${currentHeight} ${className}`}>
          <span className="font-syne font-bold tracking-[0.35em] uppercase text-current">SAINT LAURENT</span>
          <span className="text-[9px] font-mono-film text-[#8A8F99] border-l border-white/20 pl-1.5">PARIS</span>
        </div>
      );
    }

    // 15. LEICA
    if (norm.includes('leica')) {
      return (
        <div className={`inline-flex items-center gap-1.5 font-sans ${currentHeight} ${className}`}>
          <div className="w-4 h-4 rounded-full bg-red-600 flex items-center justify-center text-white text-[9px] font-serif font-black italic">
            L
          </div>
          <span className="font-editorial italic font-bold tracking-wider text-current text-sm">Leica</span>
        </div>
      );
    }

    // 16. PORSCHE
    if (norm.includes('porsche')) {
      return (
        <div className={`inline-flex items-center gap-2 font-sans ${currentHeight} ${className}`}>
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-[75%] w-auto aspect-square text-amber-400">
            <path d="M12 2L4 6v6c0 5.5 3.5 10 8 10s8-4.5 8-10V6l-8-4z" />
          </svg>
          <span className="font-syne font-bold tracking-[0.4em] uppercase text-current text-xs">PORSCHE</span>
        </div>
      );
    }

    // 17. RIMOWA
    if (norm.includes('rimowa')) {
      return (
        <div className={`inline-flex items-center gap-1.5 font-mono ${currentHeight} ${className}`}>
          <span className="font-syne font-extrabold tracking-[0.35em] uppercase text-current border border-current px-1.5 py-0.5 text-xs">
            RIMOWA
          </span>
        </div>
      );
    }

    // 18. BYREDO
    if (norm.includes('byredo')) {
      return (
        <div className={`inline-flex items-center gap-1 font-serif ${currentHeight} ${className}`}>
          <span className="font-vogue font-normal tracking-[0.4em] uppercase text-current">BYREDO</span>
        </div>
      );
    }

    // 19. JACQUEMUS
    if (norm.includes('jacquemus')) {
      return (
        <div className={`inline-flex items-center gap-1 font-sans ${currentHeight} ${className}`}>
          <span className="font-syne font-black tracking-[0.3em] uppercase text-current text-xs">JACQUEMUS</span>
        </div>
      );
    }

    // 20. DIOR BEAUTY
    if (norm.includes('dior')) {
      return (
        <div className={`inline-flex items-center gap-1.5 font-serif ${currentHeight} ${className}`}>
          <span className="font-editorial uppercase tracking-[0.35em] text-current text-sm">DIOR</span>
          <span className="text-[9px] font-mono-film text-[#8A8F99] tracking-widest uppercase">BEAUTY</span>
        </div>
      );
    }

    // 21. BANG & OLUFSEN
    if (norm.includes('bang') || norm.includes('olufsen')) {
      return (
        <div className={`inline-flex items-center gap-1 font-sans ${currentHeight} ${className}`}>
          <span className="font-syne font-medium tracking-[0.25em] uppercase text-current text-xs">BANG &amp; OLUFSEN</span>
        </div>
      );
    }

    // 22. SONY / SONY ALPHA
    if (norm.includes('sony')) {
      return (
        <div className={`inline-flex items-center gap-1.5 font-sans ${currentHeight} ${className}`}>
          <span className="font-serif font-black tracking-[0.3em] uppercase text-current text-xs">SONY</span>
          <span className="text-orange-500 font-serif font-bold italic text-sm">α</span>
        </div>
      );
    }

    // 23. APPLE
    if (norm.includes('apple')) {
      return (
        <div className={`inline-flex items-center gap-1.5 ${currentHeight} ${className}`}>
          <svg viewBox="0 0 170 170" fill="currentColor" className="h-[80%] w-auto aspect-square text-current">
            <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.74 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.08-7.6-7.85-11.73-14.3-5.26-8.27-9.5-17.72-12.74-28.36-3.23-10.63-4.85-20.98-4.85-31.04 0-14.1 3.69-25.68 11.08-34.73 7.39-9.06 16.59-13.67 27.59-13.84 5.36 0 11.2 1.34 17.51 4.02 6.31 2.68 10.42 4.08 12.33 4.2 1.68-.12 5.76-1.52 12.24-4.2 6.48-2.68 12.02-3.9 16.63-3.66 12.52.78 22.42 5.69 29.7 14.73-10.95 6.64-16.32 15.65-16.1 27.02.22 9.07 3.69 16.6 10.42 22.58 6.72 5.99 14.7 9.4 23.95 10.23-1.91 5.8-4.14 11.26-6.69 16.37zm-32.99-106.87c0-5.7.89-11.22 2.68-16.56 1.79-5.34 4.35-10.15 7.69-14.43-6.03.34-11.66 2.45-16.9 6.34-5.24 3.89-9.12 8.78-11.63 14.67-.78 1.9-1.29 3.83-1.53 5.79-.24 1.96-.28 3.8-.12 5.52.45.12 1.15.19 2.1.22.95.03 2.04.05 3.27.05 6.47 0 11.96-2.15 16.48-6.45 4.52-4.3 6.94-9.35 7.26-15.15z" />
          </svg>
          <span className="font-sans font-semibold tracking-tight text-current">Apple</span>
        </div>
      );
    }

    // 24. KHAITE
    if (norm.includes('khaite')) {
      return (
        <div className={`inline-flex items-center gap-1 font-serif ${currentHeight} ${className}`}>
          <span className="font-vogue font-normal tracking-[0.4em] uppercase text-current">KHAITE</span>
        </div>
      );
    }

    // 25. LOEWE
    if (norm.includes('loewe')) {
      return (
        <div className={`inline-flex items-center gap-1 font-serif ${currentHeight} ${className}`}>
          <span className="font-editorial uppercase tracking-[0.4em] text-current font-normal">LOEWE</span>
        </div>
      );
    }

    // 26. ULTA
    if (norm.includes('ulta')) {
      return (
        <div className={`inline-flex items-center gap-1 font-sans ${currentHeight} ${className}`}>
          <span className="font-syne font-black text-orange-400 tracking-wider uppercase text-sm">ULTA</span>
          <span className="text-[9px] font-mono-film text-[#8A8F99] tracking-widest uppercase">BEAUTY</span>
        </div>
      );
    }

    // Fallback: Elegant Serif/Geometric Typographic Mark
    return (
      <div className={`inline-flex items-center gap-1.5 font-syne uppercase tracking-[0.25em] font-bold ${currentHeight} ${className}`}>
        <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
        <span>{brand}</span>
      </div>
    );
  };

  if (variant === 'badge') {
    return (
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.1] hover:border-white/[0.25] transition-all shadow-xs">
        {renderSvg()}
      </div>
    );
  }

  return renderSvg();
};
