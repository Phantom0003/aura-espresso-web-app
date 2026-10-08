import React from 'react';
import { ArrowRight, Flame, Award, Coffee, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onExploreMenu: () => void;
  onOpenQuiz: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreMenu,
  onOpenQuiz
}) => {
  return (
    <section id="home" className="relative pt-8 pb-20 md:py-24 overflow-hidden">
      {/* Ambient background aura glows */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 right-1/4 w-96 h-96 rounded-full bg-[#D6A85B]/10 blur-[120px] animate-pulse-glow"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-[#E28C40]/8 blur-[130px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8 z-10">
            
            {/* Ambient Kicker (Unboxed metadata) */}
            <div className="flex items-center gap-3 text-xs tracking-widest uppercase font-medium text-[#C9B29B]">
              <span className="flex items-center gap-1.5 text-[#D6A85B]">
                <Flame className="w-3.5 h-3.5 fill-[#D6A85B]" />
                Small-Batch Micro Roastery
              </span>
              <span aria-hidden="true">·</span>
              <span>Obsidian Reserve 2026</span>
            </div>

            {/* Big Bold Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal leading-[1.08] tracking-tight text-[#F5EFEB] text-balance">
              Experience Perfection in Every Sip
            </h1>

            {/* Intro paragraph about artisanal specialty coffee */}
            <p className="text-base sm:text-lg text-[#C9B29B] leading-relaxed max-w-xl font-normal">
              Aura Espresso Bar elevates the daily ritual into an artisanal art form. 
              Single-origin heirloom Arabica beans, precision roasted in-house, 
              and extracted to exact thermodynamic standards by dedicated master baristas.
            </p>

            {/* Interactive CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreMenu}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold tracking-wider text-[#141211] bg-[#E6D5B8] hover:bg-[#F3ECE1] shadow-xl shadow-[#E6D5B8]/15 hover:shadow-[#E6D5B8]/25 transition-all duration-200 cursor-pointer group whitespace-nowrap"
              >
                Explore Menu
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onOpenQuiz}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium tracking-wide text-[#E6D5B8] bg-[#221E1C]/80 hover:bg-[#2A2522] border border-[#E6D5B8]/25 hover:border-[#E6D5B8]/50 transition-all duration-200 cursor-pointer whitespace-nowrap"
              >
                <Sparkles className="w-4 h-4 text-[#D6A85B]" />
                Find My Brew Quiz
              </button>
            </div>

            {/* Quiet Trust Bar */}
            <div className="pt-6 border-t border-[#E6D5B8]/10 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <p className="font-serif text-2xl font-semibold text-[#F5EFEB] tabular-nums">100%</p>
                <p className="text-xs text-[#9B8C7E] mt-0.5">Direct Trade Beans</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-semibold text-[#F5EFEB] tabular-nums">4.98★</p>
                <p className="text-xs text-[#9B8C7E] mt-0.5">Specialty Rating</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-semibold text-[#F5EFEB] tabular-nums">9 Bar</p>
                <p className="text-xs text-[#9B8C7E] mt-0.5">Precision Extraction</p>
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic hero visual featuring branded coffee cups with splash & floating beans */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Soft Ambient Halo behind the image */}
            <div className="absolute inset-0 m-auto w-72 h-72 rounded-full bg-gradient-to-tr from-[#D6A85B]/20 via-[#E28C40]/15 to-transparent blur-3xl pointer-events-none" />

            {/* Hero Card Container */}
            <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden glass-panel p-2.5 shadow-2xl shadow-black/80 group">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#1A1716]">
                <img
                  src="/src/assets/images/aura_hero_splash_1791441708921.jpg"
                  alt="Aura Espresso Bar signature cup with dynamic golden espresso splash and floating beans"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle dark gradient scrim at base */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#141211]/80 via-transparent to-black/20 pointer-events-none" />

                {/* Floating Glassmorphic Pill 1: Roast Note */}
                <div className="absolute top-4 left-4 glass-panel px-3 py-1.5 rounded-full flex items-center gap-2 text-xs font-medium text-[#F5EFEB] animate-float-slow shadow-lg">
                  <Coffee className="w-3.5 h-3.5 text-[#D6A85B]" />
                  <span>Ethiopian Guji Heirloom</span>
                </div>

                {/* Floating Glassmorphic Pill 2: Temp Control */}
                <div className="absolute bottom-4 right-4 glass-panel px-3 py-1.5 rounded-full flex items-center gap-2 text-xs font-medium text-[#F5EFEB] animate-float-reverse shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-[#2DD4BF] animate-pulse" />
                  <span>Silky Microfoam 62°C</span>
                </div>

                {/* Floating Bean Decorative Graphic Accents */}
                <div 
                  aria-hidden="true"
                  className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-[#282320]/90 border border-[#E6D5B8]/20 flex items-center justify-center text-xs shadow-md animate-float-reverse"
                >
                  ☕
                </div>
              </div>
            </div>

            {/* Orbiting Subtle Coffee Bean Pill */}
            <div className="hidden sm:flex absolute -bottom-6 -left-6 glass-panel px-4 py-3 rounded-2xl items-center gap-3 shadow-xl border border-[#E6D5B8]/20 z-20">
              <div className="w-10 h-10 rounded-xl bg-[#2D2622] flex items-center justify-center text-[#D6A85B]">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#F5EFEB]">Artisan Certified</p>
                <p className="text-[11px] text-[#A8988B]">Roasted within 7 days</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
