import React, { useState, useEffect } from 'react';

// In-memory flag ensures it plays once per browser page load (including refresh),
// and is instantly skipped when navigating between internal React routes.
let hasPreloaderPlayedInSession = false;

export const Preloader: React.FC = () => {
  const [shouldRender, setShouldRender] = useState<boolean>(() => !hasPreloaderPlayedInSession);
  const [progress, setProgress] = useState<number>(0);
  const [isExiting, setIsExiting] = useState<boolean>(false);
  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    if (!shouldRender || hasPreloaderPlayedInSession) {
      setShouldRender(false);
      return;
    }

    // Respect user's reduced-motion preference
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setProgress(100);
      hasPreloaderPlayedInSession = true;
      const t = setTimeout(() => setShouldRender(false), 120);
      return () => clearTimeout(t);
    }

    // Detect actual document and font loading readiness
    let isAppLoaded = typeof document !== 'undefined' && document.readyState === 'complete';

    const handleWindowLoad = () => {
      isAppLoaded = true;
    };

    if (typeof window !== 'undefined' && !isAppLoaded) {
      window.addEventListener('load', handleWindowLoad);
      if (document.fonts?.ready) {
        document.fonts.ready.then(() => {
          isAppLoaded = true;
        }).catch(() => {});
      }
    }

    // Progressive real-time pacing with minimum graceful display duration (~1.5s)
    const startTime = performance.now();
    const minDuration = 1450; // 1.45s minimum graceful duration
    let animationFrameId: number;

    const updateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const timeRatio = Math.min(elapsed / minDuration, 1);

      // Realistic progress pacing tied to actual application readiness
      let targetProgress: number;
      if (timeRatio < 0.4) {
        // Phase 1: Context & DOM initialization (0% - 45%)
        targetProgress = Math.round(timeRatio * 112);
      } else if (timeRatio < 0.85) {
        // Phase 2: Fonts, data stores & assets (45% - 88%)
        targetProgress = 45 + Math.round((timeRatio - 0.4) * 95);
      } else {
        // Phase 3: Route readiness & final hydration (88% - 100%)
        if (isAppLoaded || elapsed >= minDuration) {
          targetProgress = 88 + Math.round((timeRatio - 0.85) * 80);
        } else {
          targetProgress = 92; // Gently wait for assets
        }
      }

      const clamped = Math.min(100, Math.max(0, targetProgress));
      setProgress(clamped);

      if (clamped < 100) {
        animationFrameId = requestAnimationFrame(updateProgress);
      } else {
        setIsReady(true);
        // Complete state and trigger exit transition
        hasPreloaderPlayedInSession = true;
        const exitDelayTimer = setTimeout(() => {
          setIsExiting(true);
          const removeTimer = setTimeout(() => {
            setShouldRender(false);
          }, 380); // Duration of fade-and-scale exit
          return () => clearTimeout(removeTimer);
        }, 180); // Brief hold at 100% for visual satisfaction
        return () => clearTimeout(exitDelayTimer);
      }
    };

    animationFrameId = requestAnimationFrame(updateProgress);

    // Hard failsafe: Never delay website beyond 2.8s under any circumstance
    const hardTimeout = setTimeout(() => {
      hasPreloaderPlayedInSession = true;
      setIsExiting(true);
      setTimeout(() => setShouldRender(false), 200);
    }, 2800);

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('load', handleWindowLoad);
      }
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      clearTimeout(hardTimeout);
    };
  }, [shouldRender]);

  if (!shouldRender) return null;

  const brandLetters = 'NextGen Navigators'.split('');

  return (
    <div
      id="nextgen-preloader"
      role="status"
      aria-live="polite"
      aria-label="Loading NextGen Navigators"
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-b from-[#650D24] via-[#450817] to-[#330510] text-[#FFF8F0] select-none transition-all duration-400 ease-out overflow-hidden ${
        isExiting ? 'opacity-0 scale-102 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      style={{ willChange: 'transform, opacity' }}
    >
      {/* Deep Maroon Ambient Vignette & Radial Aura */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#450817]/40 to-[#22020A]/90 pointer-events-none" />

      {/* Subtle Floating Ambient Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <span className="absolute top-[20%] left-[18%] w-1.5 h-1.5 rounded-full bg-[#FFF8F0]/30 animate-particle-1" />
        <span className="absolute top-[35%] right-[22%] w-2 h-2 rounded-full bg-[#F2E8DC]/25 animate-particle-2" />
        <span className="absolute bottom-[30%] left-[25%] w-1.5 h-1.5 rounded-full bg-[#FFF8F0]/20 animate-particle-3" />
        <span className="absolute top-[65%] right-[18%] w-1 h-1 rounded-full bg-[#F2E8DC]/35 animate-particle-4" />
        <span className="absolute top-[15%] right-[32%] w-1.5 h-1.5 rounded-full bg-[#FFF8F0]/25 animate-particle-5" />
        <span className="absolute bottom-[20%] right-[35%] w-2 h-2 rounded-full bg-[#F2E8DC]/20 animate-particle-6" />
      </div>

      <div className="relative flex flex-col items-center max-w-md px-6 text-center z-10 space-y-7">
        {/* Official Logo with Sophisticated Concentric Animated Rings */}
        <div className="relative flex items-center justify-center">
          {/* Subtle Outer Pulsing Aura */}
          <div className="absolute -inset-8 rounded-full bg-[#7A1C33]/30 blur-xl animate-pulse-aura pointer-events-none" />

          {/* Outer Rotating Dashed Cream Ring */}
          <div className="absolute -inset-5 rounded-full border border-[#F2E8DC]/20 border-dashed animate-spin-slow pointer-events-none" />

          {/* Inner Counter-Rotating Accent Arc */}
          <div className="absolute -inset-2.5 rounded-full border-2 border-transparent border-t-[#FFF8F0]/60 border-r-[#F2E8DC]/30 animate-spin-counter pointer-events-none" />

          {/* Official Logo Container with Elegant Entrance */}
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-b from-[#FAF6F0] to-[#F2E8DC] shadow-[0_12px_32px_rgba(34,2,10,0.6)] p-2.5 flex items-center justify-center animate-preloader-zoom ring-2 ring-[#FFF8F0]/20">
            <img
              src="/logo-official.jpg"
              alt="NextGen Navigators Official Logo"
              className="w-full h-full object-contain rounded-full select-none"
              loading="eager"
            />
          </div>
        </div>

        {/* Typography & Branding (Reversed Maroon/Ivory Contrast) */}
        <div className="space-y-2">
          {/* Brand Name Revealed Letter by Letter */}
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#FFF8F0] font-sans flex justify-center flex-wrap drop-shadow-sm">
            {brandLetters.map((char, index) => (
              <span
                key={index}
                className="inline-block animate-letter-reveal"
                style={{
                  animationDelay: `${Math.min(index * 35, 600)}ms`,
                  marginRight: char === ' ' ? '0.4rem' : '0'
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h1>

          {/* Tagline in Soft Cream */}
          <p className="text-xs sm:text-sm text-[#F2E8DC]/90 font-medium tracking-wide animate-fade-in-delayed">
            Discover Your Strengths. Navigate Your Future.
          </p>
        </div>

        {/* Loading Progress Bar & Live Percentage */}
        <div className="w-52 sm:w-60 space-y-2.5 pt-1">
          {/* Darker Maroon Track */}
          <div className="w-full h-1.5 bg-[#450817] rounded-full overflow-hidden p-0 border border-[#7A1C33]/50 shadow-inner">
            {/* Off-White Progress Bar with Subtle Maroon Glow */}
            <div
              className={`h-full bg-gradient-to-r from-[#F2E8DC] via-[#FFF8F0] to-[#FFFFFF] rounded-full transition-all duration-100 ease-out ${
                isReady ? 'shadow-[0_0_14px_rgba(255,248,240,0.85)]' : 'shadow-[0_0_8px_rgba(255,248,240,0.45)]'
              }`}
              style={{
                width: `${progress}%`,
                willChange: 'width'
              }}
            />
          </div>

          {/* Meta Labels */}
          <div className="flex justify-between items-center text-[10px] font-mono font-semibold">
            <span className="uppercase tracking-widest text-[#F2E8DC]/80">
              Loading Portal
            </span>
            <span className="text-[#FFF8F0] font-bold">
              {progress}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
