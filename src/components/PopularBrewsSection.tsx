import React from 'react';
import { Star, Plus, ArrowRight } from 'lucide-react';
import { CoffeeItem, POPULAR_BREWS } from '../data/coffeeData';

interface PopularBrewsSectionProps {
  onQuickAdd: (item: CoffeeItem) => void;
  onSelectCustomize: (item: CoffeeItem) => void;
  onViewFullMenu: () => void;
}

export const PopularBrewsSection: React.FC<PopularBrewsSectionProps> = ({
  onQuickAdd,
  onSelectCustomize,
  onViewFullMenu
}) => {
  return (
    <section id="menu" className="py-20 bg-[#161312] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute bottom-0 right-10 w-96 h-96 rounded-full bg-[#D6A85B]/5 blur-[100px]" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs tracking-widest uppercase font-medium text-[#D6A85B] mb-2">
              <span>Curated Selection</span>
              <span aria-hidden="true">·</span>
              <span>Barista Favorites</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F5EFEB] tracking-tight">
              Popular Brews
            </h2>
          </div>
          <p className="text-sm text-[#A8988B] max-w-md">
            Meticulously balanced extractions using our seasonal house reserve roast. 
            Freshly pulled to order with silky, textured microfoam.
          </p>
        </div>

        {/* 3 Glassmorphic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {POPULAR_BREWS.map((item) => (
            <article
              key={item.id}
              className="group relative rounded-3xl p-5 glass-panel glass-panel-hover flex flex-col justify-between transition-all duration-300"
            >
              {/* Top Image Container */}
              <div 
                className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#201C1A] mb-5 cursor-pointer"
                onClick={() => onSelectCustomize(item)}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform transition-transform duration-500 ease-out group-hover:scale-105"
                />

                {/* Scrim overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Rating Badge */}
                <div className="absolute top-3 right-3 glass-panel px-2.5 py-1 rounded-full flex items-center gap-1.5 text-xs font-semibold text-[#F5EFEB] shadow-md">
                  <Star className="w-3.5 h-3.5 fill-[#D6A85B] text-[#D6A85B]" />
                  <span className="tabular-nums">{item.rating}</span>
                </div>

                {/* Roast Tag */}
                <div className="absolute bottom-3 left-3 text-[11px] font-medium tracking-wide text-[#E6D5B8] bg-[#141211]/80 px-2.5 py-0.5 rounded-md backdrop-blur-sm">
                  {item.roast}
                </div>
              </div>

              {/* Card Body */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 
                    onClick={() => onSelectCustomize(item)}
                    className="font-serif text-2xl font-normal text-[#F5EFEB] group-hover:text-[#E6D5B8] transition-colors cursor-pointer"
                  >
                    {item.name}
                  </h3>

                  {/* Composition breakdown */}
                  <div className="mt-2 text-xs font-medium text-[#D6A85B] tracking-wide">
                    {item.composition}
                  </div>

                  {/* Flavor Notes */}
                  <p className="mt-2.5 text-xs text-[#A8988B] line-clamp-2">
                    {item.flavorNotes.join(' · ')}
                  </p>
                </div>

                {/* Bottom Bar: Price and Round '+' Order Button */}
                <div className="mt-6 pt-4 border-t border-[#E6D5B8]/10 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#8A7C70] block">Price</span>
                    <span className="font-serif text-2xl font-semibold text-[#F5EFEB] tabular-nums">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectCustomize(item)}
                      className="px-3 py-2 text-xs text-[#C9B29B] hover:text-[#F5EFEB] hover:bg-[#2A2421] rounded-lg transition-colors cursor-pointer"
                      title="Customize milk & sweetness"
                    >
                      Customize
                    </button>

                    <button
                      onClick={() => onQuickAdd(item)}
                      aria-label={`Add ${item.name} to cart`}
                      className="w-11 h-11 rounded-full bg-[#E6D5B8] text-[#141211] hover:bg-[#F5EFEB] hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center shadow-lg shadow-[#E6D5B8]/10 cursor-pointer"
                      title="Quick Add to Order"
                    >
                      <Plus className="w-5 h-5 stroke-[2.5]" />
                    </button>
                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>

        {/* Text link underneath: 'View Full Menu →' */}
        <div className="mt-14 text-center">
          <button
            onClick={onViewFullMenu}
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-[#E6D5B8] hover:text-[#F5EFEB] group transition-colors py-2 cursor-pointer"
          >
            <span>View Full Menu</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
