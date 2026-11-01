import React from 'react';

interface EmblemProps {
  size?: number;
  className?: string;
  showText?: boolean;
}

export const NextGenEmblem: React.FC<EmblemProps> = ({ size = 40, className = '', showText = false }) => {
  return (
    <div className={`inline-flex items-center gap-3 shrink-0 ${className}`}>
      <img
        src="/logo.png"
        alt="NextGen Navigators Logo"
        width={size}
        height={size}
        style={{ width: `${size}px`, height: `${size}px` }}
        className="shrink-0 rounded-xl object-contain transition-transform duration-300 hover:scale-105 select-none shadow-xs border border-black/5"
      />
      {showText && (
        <div className="flex flex-col text-left">
          <span className="font-extrabold text-base sm:text-lg tracking-tight text-white font-sans flex items-center gap-1.5 leading-none">
            NextGen <span className="text-[#D8D8DA] font-semibold">Navigators</span>
          </span>
          <span className="text-[10px] text-[#D8D8DA]/80 tracking-wider uppercase font-medium mt-1">
            Empowering Student Futures
          </span>
        </div>
      )}
    </div>
  );
};

