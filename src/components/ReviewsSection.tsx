import React from 'react';
import { Star, Quote } from 'lucide-react';
import { REVIEWS } from '../data/coffeeData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-[#141211] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-widest uppercase font-semibold text-[#D6A85B] mb-2">
            Praise From Connoisseurs
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F5EFEB] tracking-tight">
            Loved By Coffee Purists
          </h2>
          <p className="text-sm text-[#A8988B] mt-3 max-w-md mx-auto">
            Read what industry sensory judges, critics, and daily patrons say about the Aura standard.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((rev, index) => (
            <div
              key={index}
              className="glass-panel glass-panel-hover rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 relative group"
            >
              <div>
                {/* Star rating */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D6A85B] text-[#D6A85B]" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-[#E6D5B8]/20 group-hover:text-[#D6A85B]/40 transition-colors" />
                </div>

                {/* Quote */}
                <p className="text-sm text-[#E2D8CC] leading-relaxed italic mb-6 font-normal">
                  "{rev.quote}"
                </p>
              </div>

              {/* Attribution */}
              <div className="pt-4 border-t border-[#E6D5B8]/10">
                <p className="font-serif text-lg font-semibold text-[#F5EFEB]">
                  {rev.author}
                </p>
                <p className="text-xs text-[#A8988B] mt-0.5">
                  {rev.role}
                </p>
                <div className="mt-2 text-[11px] font-medium text-[#D6A85B]">
                  Favorite: {rev.drink}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
