import React from 'react';

interface NdoriLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showSubtext?: boolean;
}

export const NdoriLogo: React.FC<NdoriLogoProps> = ({
  className = '',
  size = 'md',
  showSubtext = true,
}) => {
  const isHero = size === 'hero';
  const isLg = size === 'lg';
  const isSm = size === 'sm';

  return (
    <div className={`flex flex-col items-center justify-center select-none ${className}`}>
      {/* High-Fashion Calligraphic Monogram */}
      <div className="relative flex items-center justify-center">
        <svg
          viewBox="0 0 260 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all duration-500 ${
            isHero
              ? 'w-60 sm:w-72 md:w-84 h-auto'
              : isLg
              ? 'w-44 md:w-52 h-auto'
              : isSm
              ? 'w-20 h-auto'
              : 'w-32 md:w-36 h-auto'
          }`}
        >
          <defs>
            <linearGradient id="nmSilverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="45%" stopColor="#E5E1D8" />
              <stop offset="100%" stopColor="#B3AEA4" />
            </linearGradient>
          </defs>

          {/* Flourishes & Curls */}
          <path
            d="M25 80 C 15 50, 45 25, 75 35 C 95 42, 105 68, 90 95 C 75 120, 40 120, 30 100 C 20 80, 45 60, 65 65"
            stroke="url(#nmSilverGrad)"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            opacity="0.9"
          />

          {/* Letter N Main Stem and Swash */}
          <path
            d="M60 115 C 65 95, 80 40, 95 25 C 105 15, 120 20, 115 40 L 90 115"
            stroke="url(#nmSilverGrad)"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M92 35 C 105 60, 130 95, 145 115"
            stroke="url(#nmSilverGrad)"
            strokeWidth="2.8"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M142 115 C 145 90, 158 50, 172 32 C 180 22, 192 25, 190 45 L 168 115"
            stroke="url(#nmSilverGrad)"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />

          {/* Intertwined M Swashes */}
          <path
            d="M130 38 C 145 22, 175 18, 195 30 C 215 42, 235 75, 210 105 C 190 128, 160 125, 155 105 C 150 85, 175 60, 205 62 C 235 65, 245 95, 230 112"
            stroke="url(#nmSilverGrad)"
            strokeWidth="2.2"
            strokeLinecap="round"
            fill="none"
            opacity="0.95"
          />

          {/* Subtle Hairline loops */}
          <path
            d="M45 42 C 55 25, 85 20, 110 32"
            stroke="url(#nmSilverGrad)"
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
            opacity="0.6"
          />
          <path
            d="M165 115 C 185 130, 220 125, 240 100"
            stroke="url(#nmSilverGrad)"
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
            opacity="0.6"
          />
        </svg>
      </div>

      {/* Spaced Elegant Brand Name */}
      {showSubtext && (
        <div className="text-center mt-1.5 flex flex-col items-center">
          <span
            className={`font-syne font-semibold uppercase text-[#E5E1D8] transition-all duration-300 ${
              isHero
                ? 'text-xs md:text-sm tracking-[0.55em]'
                : isLg
                ? 'text-[11px] tracking-[0.45em]'
                : isSm
                ? 'text-[7px] tracking-[0.3em]'
                : 'text-[9px] md:text-[10px] tracking-[0.42em]'
            }`}
          >
            NDORI MANAGEMENT
          </span>
          {isHero && (
            <span className="text-[9px] font-mono-film text-[#8A8F99] tracking-[0.3em] uppercase mt-1">
              [ EDITION MMXXVI // ARCHIVE 01 ]
            </span>
          )}
        </div>
      )}
    </div>
  );
};
