import React from 'react';
import { Sparkles, ArrowRight, HelpCircle } from 'lucide-react';

interface QuizBannerSectionProps {
  onTakeQuiz: () => void;
}

export const QuizBannerSection: React.FC<QuizBannerSectionProps> = ({
  onTakeQuiz
}) => {
  return (
    <section className="py-16 bg-[#161312] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dark rounded container block */}
        <div className="relative rounded-3xl overflow-hidden glass-panel border border-[#E6D5B8]/20 bg-[#1D1917]/80 p-8 sm:p-12 shadow-2xl">
          
          {/* Ambient subtle glow inside card */}
          <div 
            aria-hidden="true" 
            className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 rounded-full bg-[#D6A85B]/10 blur-[90px]" 
          />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Content */}
            <div className="md:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#D6A85B]">
                <Sparkles className="w-4 h-4 text-[#D6A85B]" />
                <span>Sensory Pairing Engine</span>
              </div>

              {/* Headline */}
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F5EFEB] leading-tight text-balance">
                Find out which coffee suits your mood best
              </h2>

              <p className="text-sm sm:text-base text-[#A8988B] leading-relaxed max-w-lg">
                Not sure what your palate craves today? In less than 30 seconds, 
                our taste quiz matches your current focus, energy, and flavor preferences 
                to our master barista creations.
              </p>

              <div className="pt-2">
                {/* Pill Button: 'Take the Quiz' */}
                <button
                  onClick={onTakeQuiz}
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-semibold tracking-wider uppercase text-[#141211] bg-[#E6D5B8] hover:bg-[#F5EFEB] shadow-xl shadow-[#E6D5B8]/15 hover:shadow-[#E6D5B8]/30 transition-all duration-200 cursor-pointer group"
                >
                  <span>Take the Quiz</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Right: Wooden coffee scoop visual */}
            <div className="md:col-span-5 flex justify-center md:justify-end">
              <div className="relative w-full max-w-sm aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-[#E6D5B8]/15 bg-[#141211] group">
                <img
                  src="/src/assets/images/aura_coffee_scoop_1791441791549.jpg"
                  alt="Artisanal dark walnut wooden coffee scoop filled with roasted specialty coffee beans"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-[#E6D5B8] glass-panel px-3 py-1.5 rounded-lg">
                  <span className="font-medium">Obsidian Estate Blend</span>
                  <span className="tabular-nums text-[#D6A85B]">Roasted Fresh</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
