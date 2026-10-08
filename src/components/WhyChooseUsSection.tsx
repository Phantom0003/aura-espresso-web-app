import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, HeartHandshake, Compass, Users } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/coffeeData';

interface WhyChooseUsSectionProps {
  onOrderFreshCoffee: () => void;
}

export const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({
  onOrderFreshCoffee
}) => {
  const icons = [ShieldCheck, HeartHandshake, Compass, Users];

  return (
    <section id="about" className="py-24 bg-[#141211] relative overflow-hidden">
      {/* Ambient background glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full bg-[#D6A85B]/8 blur-[140px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-widest uppercase font-semibold text-[#D6A85B] mb-3">
            Our Artisanal Philosophy
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F5EFEB] tracking-wide uppercase">
            AURA IS ALL ABOUT...
          </h2>
          <p className="text-sm text-[#A8988B] mt-4 max-w-xl mx-auto">
            We don’t just serve caffeine. We curate a mindful pause, uncompromising standards, and an atmosphere designed to awaken clarity.
          </p>
        </div>

        {/* Central Display surrounded by 4 feature blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left 2 Feature Blocks (01 & 02) */}
          <div className="lg:col-span-4 space-y-6 order-2 lg:order-1">
            {WHY_CHOOSE_US.slice(0, 2).map((item, idx) => {
              const IconComponent = icons[idx];
              return (
                <div 
                  key={item.number}
                  className="glass-panel glass-panel-hover rounded-2xl p-6 relative group transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-serif text-3xl font-semibold text-[#D6A85B]/60 group-hover:text-[#D6A85B] transition-colors tabular-nums">
                      {item.number}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[#221E1C] flex items-center justify-center text-[#E6D5B8]">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-normal text-[#F5EFEB] mb-2 group-hover:text-[#E6D5B8] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A8988B] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Center Centerpiece Image of luxury coffee cup surrounded by floating beans */}
          <div className="lg:col-span-4 flex justify-center order-1 lg:order-2 my-4 lg:my-0">
            <div className="relative w-full max-w-xs sm:max-w-sm aspect-square rounded-full p-2 bg-gradient-to-b from-[#D6A85B]/30 via-transparent to-[#E6D5B8]/20 shadow-2xl">
              
              {/* Outer decorative ring */}
              <div className="absolute inset-0 rounded-full border border-[#E6D5B8]/15 animate-spin duration-[35000ms] pointer-events-none" />

              {/* Main Centerpiece Image */}
              <div className="relative w-full h-full rounded-full overflow-hidden bg-[#1A1716] group">
                <img
                  src="/src/assets/images/aura_centerpiece_cup_1791441729473.jpg"
                  alt="Aura centerpiece obsidian cup surrounded by floating roasted coffee beans"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Ambient glow scrim */}
                <div className="absolute inset-0 bg-radial from-transparent via-[#141211]/20 to-[#141211]/70 pointer-events-none" />
              </div>

              {/* Floating Orbiting Coffee Beans (Visual badges) */}
              <div 
                aria-hidden="true"
                className="absolute -top-3 left-1/4 glass-panel px-3 py-1 rounded-full text-[11px] font-medium text-[#E6D5B8] shadow-lg animate-float-slow"
              >
                ✦ Single Estate
              </div>

              <div 
                aria-hidden="true"
                className="absolute -bottom-2 right-1/4 glass-panel px-3 py-1 rounded-full text-[11px] font-medium text-[#E6D5B8] shadow-lg animate-float-reverse"
              >
                ✦ Zero Compromise
              </div>

            </div>
          </div>

          {/* Right 2 Feature Blocks (03 & 04) */}
          <div className="lg:col-span-4 space-y-6 order-3">
            {WHY_CHOOSE_US.slice(2, 4).map((item, idx) => {
              const IconComponent = icons[idx + 2];
              return (
                <div 
                  key={item.number}
                  className="glass-panel glass-panel-hover rounded-2xl p-6 relative group transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-serif text-3xl font-semibold text-[#D6A85B]/60 group-hover:text-[#D6A85B] transition-colors tabular-nums">
                      {item.number}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[#221E1C] flex items-center justify-center text-[#E6D5B8]">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-normal text-[#F5EFEB] mb-2 group-hover:text-[#E6D5B8] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A8988B] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

        {/* Primary CTA button under features: 'Order Fresh Coffee' */}
        <div className="mt-16 text-center">
          <button
            onClick={onOrderFreshCoffee}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold tracking-wider uppercase text-[#141211] bg-[#E6D5B8] hover:bg-[#F5EFEB] shadow-xl shadow-[#E6D5B8]/15 hover:shadow-[#E6D5B8]/30 transition-all duration-200 cursor-pointer group"
          >
            <span>Order Fresh Coffee</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </section>
  );
};
