import React from 'react';
import { X, Award, Coffee, Sparkles, Check, ArrowRight, Heart } from 'lucide-react';
import { CoffeeItem, ALL_MENU_ITEMS } from '../data/coffeeData';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onQuickReorder: (item: CoffeeItem) => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({
  isOpen,
  onClose,
  onQuickReorder
}) => {
  if (!isOpen) return null;

  const favoriteDrink = ALL_MENU_ITEMS[0]; // Aura Velvet Cappuccino

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-lg rounded-3xl glass-panel bg-[#1A1716] border border-[#E6D5B8]/25 p-6 sm:p-8 shadow-2xl">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#E6D5B8]/10 mb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#D6A85B]/20 border border-[#D6A85B]/40 flex items-center justify-center text-[#D6A85B] font-serif font-bold text-lg">
              A
            </div>
            <div>
              <h3 className="font-serif text-xl font-medium text-[#F5EFEB]">
                Connoisseur Member
              </h3>
              <p className="text-[11px] text-[#A8988B]">Member ID: AUR-89210-VIP</p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close"
            className="p-1.5 rounded-full text-[#A8988B] hover:text-[#F5EFEB] hover:bg-[#2A2421] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Loyalty Stamp Card */}
        <div className="p-5 rounded-2xl bg-gradient-to-br from-[#241F1C] to-[#1A1716] border border-[#E6D5B8]/20 mb-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#D6A85B]" />
              <span className="text-xs uppercase tracking-wider font-semibold text-[#E6D5B8]">
                Aura Loyalty Stamp Pass
              </span>
            </div>
            <span className="text-xs font-semibold text-[#D6A85B] tabular-nums">
              6 / 8 Stamps
            </span>
          </div>

          {/* 8 Stamp circles */}
          <div className="grid grid-cols-4 gap-3 py-2">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((stamp) => {
              const isStamped = stamp <= 6;
              const isReward = stamp === 8;

              return (
                <div
                  key={stamp}
                  className={`aspect-square rounded-2xl flex flex-col items-center justify-center text-center p-2 border transition-all ${
                    isStamped
                      ? 'bg-[#E6D5B8]/15 border-[#D6A85B]/50 text-[#D6A85B]'
                      : isReward
                      ? 'bg-[#2A221D] border-[#D6A85B]/30 border-dashed text-[#D6A85B]'
                      : 'bg-[#181514] border-[#E6D5B8]/10 text-[#6E6359]'
                  }`}
                >
                  {isStamped ? (
                    <Coffee className="w-5 h-5" />
                  ) : isReward ? (
                    <Award className="w-5 h-5 animate-pulse" />
                  ) : (
                    <span className="text-xs font-mono">{stamp}</span>
                  )}
                  <span className="text-[10px] mt-1 font-medium">
                    {isReward ? 'Free Cup' : isStamped ? 'Stamped' : `Cup #${stamp}`}
                  </span>
                </div>
              );
            })}
          </div>

          <p className="text-[11px] text-[#A8988B] text-center mt-3">
            Enjoy 2 more artisanal brews to unlock a complimentary Reserve Geisha brew!
          </p>
        </div>

        {/* Saved Ritual / Favorite Order */}
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#E6D5B8]">
            Your Saved Morning Ritual
          </p>

          <div className="p-3.5 rounded-2xl bg-[#221E1C] border border-[#E6D5B8]/15 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={favoriteDrink.image}
                alt={favoriteDrink.name}
                referrerPolicy="no-referrer"
                className="w-12 h-12 rounded-xl object-cover shrink-0"
              />
              <div>
                <p className="font-serif text-base font-medium text-[#F5EFEB]">{favoriteDrink.name}</p>
                <p className="text-[11px] text-[#A8988B]">Hot · Oatly Barista Oat · Unsweetened</p>
              </div>
            </div>

            <button
              onClick={() => {
                onQuickReorder(favoriteDrink);
                onClose();
              }}
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#141211] bg-[#E6D5B8] hover:bg-[#F5EFEB] transition-all cursor-pointer whitespace-nowrap"
            >
              Reorder
            </button>
          </div>
        </div>

        {/* Member Perks */}
        <div className="mt-6 pt-4 border-t border-[#E6D5B8]/10 flex items-center justify-between text-xs text-[#8A7C70]">
          <span>Tier: Gold Connoisseur</span>
          <span className="text-[#D6A85B]">Tasting Flight Privilege Active</span>
        </div>

      </div>
    </div>
  );
};
