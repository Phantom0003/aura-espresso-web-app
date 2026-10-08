import React from 'react';
import { Gift, Coffee, Sparkles, Check, ArrowRight } from 'lucide-react';

interface OffersSectionProps {
  onClaimOffer: (offerName: string) => void;
  onExploreMenu: () => void;
}

export const OffersSection: React.FC<OffersSectionProps> = ({
  onClaimOffer,
  onExploreMenu
}) => {
  return (
    <section id="offers" className="py-20 bg-[#161312] relative overflow-hidden">
      {/* Background radial aura */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -bottom-20 left-1/3 w-80 h-80 rounded-full bg-[#E28C40]/10 blur-[120px]" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs tracking-widest uppercase font-semibold text-[#D6A85B] mb-2">
              <Gift className="w-4 h-4 text-[#D6A85B]" />
              <span>Privilege & Reserve</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F5EFEB] tracking-tight">
              Aura Club Exclusive Offers
            </h2>
          </div>
          <p className="text-sm text-[#A8988B] max-w-md">
            Join our private roastery circle for complimentary cupping flights, 
            exclusive bean drops, and instant seasonal discounts.
          </p>
        </div>

        {/* 2 Offer Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Tasting Flight */}
          <div className="glass-panel glass-panel-hover rounded-3xl p-8 relative flex flex-col justify-between border border-[#E6D5B8]/20 group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#D6A85B] bg-[#2A2421] px-3 py-1 rounded-full border border-[#D6A85B]/20">
                  Limited Experience
                </span>
                <span className="text-xs text-[#A8988B]">In-Bar Only</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#F5EFEB] mb-3 group-hover:text-[#E6D5B8] transition-colors">
                The Origin Flight: 3 Micro-Lots
              </h3>
              
              <p className="text-sm text-[#A8988B] leading-relaxed mb-6">
                Sample three contrasting terroir profiles (Ethiopian Natural, Colombian Washed, and Panamanian Geisha) side-by-side with tasting notes guided by our Head Barista.
              </p>

              <ul className="space-y-2.5 text-xs sm:text-sm text-[#E2D8CC] mb-8">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#D6A85B] shrink-0" />
                  <span>3 distinct 60ml pour-over extractions served in crystal snifters</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#D6A85B] shrink-0" />
                  <span>Curated dark chocolate pairing palette from Valrhona</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#D6A85B] shrink-0" />
                  <span>Complimentary 100g whole-bean tin of your favorite sample</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-[#E6D5B8]/10 flex items-center justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#8A7C70] block">Special Price</span>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-3xl font-semibold text-[#F5EFEB] tabular-nums">$24</span>
                  <span className="text-xs text-[#8A7C70] line-through tabular-nums">$36</span>
                </div>
              </div>

              <button
                onClick={() => onClaimOffer('The Origin Flight: 3 Micro-Lots')}
                className="px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase text-[#141211] bg-[#E6D5B8] hover:bg-[#F5EFEB] transition-all cursor-pointer shadow-md"
              >
                Book Tasting Flight
              </button>
            </div>
          </div>

          {/* Card 2: First Order 15% Off Promo */}
          <div className="glass-panel glass-panel-hover rounded-3xl p-8 relative flex flex-col justify-between border border-[#E6D5B8]/20 group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#2DD4BF] bg-[#1A2624] px-3 py-1 rounded-full border border-[#2DD4BF]/20">
                  Welcome Privilege
                </span>
                <span className="text-xs text-[#A8988B]">Online Pickup & Dine-In</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#F5EFEB] mb-3 group-hover:text-[#E6D5B8] transition-colors">
                15% Off Your First Artisan Brew
              </h3>
              
              <p className="text-sm text-[#A8988B] leading-relaxed mb-6">
                Experience your first Aura brew with our compliment. Use code <span className="font-mono text-[#D6A85B] font-semibold">AURAFIRST</span> in your cart or click below to automatically apply the discount.
              </p>

              <div className="p-4 rounded-2xl bg-[#1D1917] border border-[#E6D5B8]/15 mb-8">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-[#E6D5B8]">PROMO CODE</p>
                    <p className="font-mono text-xl font-bold text-[#F5EFEB] tracking-widest mt-0.5">AURAFIRST</p>
                  </div>
                  <button
                    onClick={() => onClaimOffer('AURAFIRST (15% Off)')}
                    className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#E6D5B8] bg-[#2A2421] hover:bg-[#342D29] rounded-lg transition-colors cursor-pointer border border-[#E6D5B8]/20"
                  >
                    Apply Promo
                  </button>
                </div>
              </div>

              <p className="text-xs text-[#8A7C70]">
                *Valid on all signature brews and whole bean roasts. One use per patron.
              </p>
            </div>

            <div className="pt-6 border-t border-[#E6D5B8]/10 flex items-center justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#8A7C70] block">Member Benefit</span>
                <span className="font-serif text-xl font-semibold text-[#F5EFEB]">Digital Coffee Vault</span>
              </div>

              <button
                onClick={onExploreMenu}
                className="px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase text-[#E6D5B8] bg-[#221E1C] hover:bg-[#2C2724] border border-[#E6D5B8]/25 transition-all cursor-pointer flex items-center gap-1.5"
              >
                <span>Order With Code</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
