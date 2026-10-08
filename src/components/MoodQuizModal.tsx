import React, { useState } from 'react';
import { X, Sparkles, Check, ArrowRight, RotateCcw, Coffee } from 'lucide-react';
import { CoffeeItem, ALL_MENU_ITEMS } from '../data/coffeeData';

interface MoodQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCoffee: (coffee: CoffeeItem) => void;
}

export const MoodQuizModal: React.FC<MoodQuizModalProps> = ({
  isOpen,
  onClose,
  onSelectCoffee
}) => {
  const [step, setStep] = useState<number>(1);
  const [answers, setAnswers] = useState<{
    mood?: string;
    flavor?: string;
    temp?: string;
  }>({});

  if (!isOpen) return null;

  const resetQuiz = () => {
    setStep(1);
    setAnswers({});
  };

  const handleSelectMood = (mood: string) => {
    setAnswers((prev) => ({ ...prev, mood }));
    setStep(2);
  };

  const handleSelectFlavor = (flavor: string) => {
    setAnswers((prev) => ({ ...prev, flavor }));
    setStep(3);
  };

  const handleSelectTemp = (temp: string) => {
    setAnswers((prev) => ({ ...prev, temp }));
    setStep(4);
  };

  // Determine recommended coffee based on answers
  const getRecommendation = (): { coffee: CoffeeItem; explanation: string } => {
    if (answers.flavor === 'chocolate' || answers.mood === 'indulgent') {
      const mocha = ALL_MENU_ITEMS.find((c) => c.id === 'mocha') || ALL_MENU_ITEMS[2];
      return {
        coffee: mocha,
        explanation: 'Your mood calls for decadent comfort. Our Valrhona Noir Mocha combines rich 72% French dark chocolate with velvety single-origin espresso.'
      };
    }
    if (answers.mood === 'focus' || answers.flavor === 'bold') {
      if (answers.temp === 'iced') {
        const coldBrew = ALL_MENU_ITEMS.find((c) => c.id === 'cold-brew-reserve') || ALL_MENU_ITEMS[0];
        return {
          coffee: coldBrew,
          explanation: 'Sharp clarity without bitter acidity. The Nitro Obsidian Cold Brew delivers clean, high-potency caffeine with silky micro-bubbles.'
        };
      }
      const espresso = ALL_MENU_ITEMS.find((c) => c.id === 'espresso-doppio') || ALL_MENU_ITEMS[0];
      return {
        coffee: espresso,
        explanation: 'Pure, uncompromising single-origin clarity. The Obsidian Double Ristretto provides focused enzymatic complexity and a golden crema crown.'
      };
    }
    if (answers.flavor === 'floral' || answers.mood === 'creative') {
      const cortado = ALL_MENU_ITEMS.find((c) => c.id === 'golden-cortado') || ALL_MENU_ITEMS[1];
      return {
        coffee: cortado,
        explanation: 'Nuanced and inspiring. The Golden Amber Cortado highlights caramelized floral notes balanced equally with warm, velvety milk.'
      };
    }
    // Default to Latte or Cappuccino
    const latte = ALL_MENU_ITEMS.find((c) => c.id === 'latte') || ALL_MENU_ITEMS[1];
    return {
      coffee: latte,
      explanation: 'Gentle warmth and grounding harmony. The Artisan Silk Latte is poured with 62°C sweet microfoam over our honey-processed Ethiopian roast.'
    };
  };

  const recommendation = step === 4 ? getRecommendation() : null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-xl rounded-3xl glass-panel bg-[#1A1716] border border-[#E6D5B8]/20 p-6 sm:p-8 shadow-2xl overflow-hidden">
        
        {/* Glow behind modal */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#D6A85B]/15 blur-[90px]" 
        />

        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#E6D5B8]/10 mb-6 relative z-10">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#D6A85B]" />
            <span className="text-xs uppercase tracking-widest font-semibold text-[#E6D5B8]">
              Coffee Mood Selector
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close quiz"
            className="p-1.5 rounded-full text-[#A8988B] hover:text-[#F5EFEB] hover:bg-[#2A2421] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator */}
        {step < 4 && (
          <div className="flex items-center gap-2 mb-6">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                  s === step ? 'bg-[#D6A85B]' : s < step ? 'bg-[#E6D5B8]/40' : 'bg-[#2A2421]'
                }`}
              />
            ))}
            <span className="text-xs text-[#8A7C70] ml-2 tabular-nums">Step {step}/3</span>
          </div>
        )}

        {/* Step 1: Current Mood */}
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#F5EFEB]">
              What headspace are you seeking right now?
            </h3>
            <p className="text-xs text-[#A8988B]">
              Tell us how you want this cup to make you feel.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <button
                onClick={() => handleSelectMood('focus')}
                className="p-4 rounded-2xl bg-[#221E1C] hover:bg-[#2C2623] border border-[#E6D5B8]/15 hover:border-[#D6A85B]/40 text-left transition-all cursor-pointer group"
              >
                <p className="text-sm font-semibold text-[#F5EFEB] group-hover:text-[#E6D5B8]">Laser Focus & Clarity</p>
                <p className="text-xs text-[#8A7C70] mt-1">Sharp, clean caffeine energy to power through deep work.</p>
              </button>

              <button
                onClick={() => handleSelectMood('comfort')}
                className="p-4 rounded-2xl bg-[#221E1C] hover:bg-[#2C2623] border border-[#E6D5B8]/15 hover:border-[#D6A85B]/40 text-left transition-all cursor-pointer group"
              >
                <p className="text-sm font-semibold text-[#F5EFEB] group-hover:text-[#E6D5B8]">Gentle Comfort</p>
                <p className="text-xs text-[#8A7C70] mt-1">Warm, creamy, grounding hug in a ceramic mug.</p>
              </button>

              <button
                onClick={() => handleSelectMood('creative')}
                className="p-4 rounded-2xl bg-[#221E1C] hover:bg-[#2C2623] border border-[#E6D5B8]/15 hover:border-[#D6A85B]/40 text-left transition-all cursor-pointer group"
              >
                <p className="text-sm font-semibold text-[#F5EFEB] group-hover:text-[#E6D5B8]">Creative & Adventurous</p>
                <p className="text-xs text-[#8A7C70] mt-1">Nuanced terroir, bright floral notes, complex acidity.</p>
              </button>

              <button
                onClick={() => handleSelectMood('indulgent')}
                className="p-4 rounded-2xl bg-[#221E1C] hover:bg-[#2C2623] border border-[#E6D5B8]/15 hover:border-[#D6A85B]/40 text-left transition-all cursor-pointer group"
              >
                <p className="text-sm font-semibold text-[#F5EFEB] group-hover:text-[#E6D5B8]">Decadent Indulgence</p>
                <p className="text-xs text-[#8A7C70] mt-1">Velvety sweetness, melted cacao, and dessert richness.</p>
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Flavor Profile */}
        {step === 2 && (
          <div className="space-y-4">
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#F5EFEB]">
              What flavor note tempts your palate today?
            </h3>
            <p className="text-xs text-[#A8988B]">
              Every origin delivers a signature sensory palette.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <button
                onClick={() => handleSelectFlavor('chocolate')}
                className="p-4 rounded-2xl bg-[#221E1C] hover:bg-[#2C2623] border border-[#E6D5B8]/15 hover:border-[#D6A85B]/40 text-left transition-all cursor-pointer group"
              >
                <p className="text-sm font-semibold text-[#F5EFEB] group-hover:text-[#E6D5B8]">Dark Chocolate & Ganache</p>
                <p className="text-xs text-[#8A7C70] mt-1">Rich 72% Valrhona cacao with toasted hazelnut notes.</p>
              </button>

              <button
                onClick={() => handleSelectFlavor('smooth')}
                className="p-4 rounded-2xl bg-[#221E1C] hover:bg-[#2C2623] border border-[#E6D5B8]/15 hover:border-[#D6A85B]/40 text-left transition-all cursor-pointer group"
              >
                <p className="text-sm font-semibold text-[#F5EFEB] group-hover:text-[#E6D5B8]">Silky Caramel & Honey</p>
                <p className="text-xs text-[#8A7C70] mt-1">Smooth steamed milk harmonized with cane sweetness.</p>
              </button>

              <button
                onClick={() => handleSelectFlavor('bold')}
                className="p-4 rounded-2xl bg-[#221E1C] hover:bg-[#2C2623] border border-[#E6D5B8]/15 hover:border-[#D6A85B]/40 text-left transition-all cursor-pointer group"
              >
                <p className="text-sm font-semibold text-[#F5EFEB] group-hover:text-[#E6D5B8]">Bold & Unfiltered Roast</p>
                <p className="text-xs text-[#8A7C70] mt-1">Deep espresso crema, dark molasses, earthy intensity.</p>
              </button>

              <button
                onClick={() => handleSelectFlavor('floral')}
                className="p-4 rounded-2xl bg-[#221E1C] hover:bg-[#2C2623] border border-[#E6D5B8]/15 hover:border-[#D6A85B]/40 text-left transition-all cursor-pointer group"
              >
                <p className="text-sm font-semibold text-[#F5EFEB] group-hover:text-[#E6D5B8]">Jasmine & Citrus Blossom</p>
                <p className="text-xs text-[#8A7C70] mt-1">High-altitude Ethiopian berry, bergamot, tea-like lightness.</p>
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Temperature */}
        {step === 3 && (
          <div className="space-y-4">
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#F5EFEB]">
              What temperature matches your moment?
            </h3>
            <p className="text-xs text-[#A8988B]">
              Optimal serving temperatures crafted to extract full aromatics.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <button
                onClick={() => handleSelectTemp('hot')}
                className="p-5 rounded-2xl bg-[#221E1C] hover:bg-[#2C2623] border border-[#E6D5B8]/15 hover:border-[#D6A85B]/40 text-left transition-all cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#2E2825] flex items-center justify-center text-[#D6A85B] mb-3">
                  ♨️
                </div>
                <p className="text-sm font-semibold text-[#F5EFEB] group-hover:text-[#E6D5B8]">Piping Hot Ceramic</p>
                <p className="text-xs text-[#8A7C70] mt-1">Steamed to 62°C or pulled fresh from the espresso group head.</p>
              </button>

              <button
                onClick={() => handleSelectTemp('iced')}
                className="p-5 rounded-2xl bg-[#221E1C] hover:bg-[#2C2623] border border-[#E6D5B8]/15 hover:border-[#D6A85B]/40 text-left transition-all cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#2E2825] flex items-center justify-center text-[#2DD4BF] mb-3">
                  🧊
                </div>
                <p className="text-sm font-semibold text-[#F5EFEB] group-hover:text-[#E6D5B8]">Chilled Over Crystal Ice</p>
                <p className="text-xs text-[#8A7C70] mt-1">Crisp, refreshing, served over slow-melting clear cubes.</p>
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Outcome & Coffee Recommendation */}
        {step === 4 && recommendation && (
          <div className="space-y-6">
            <div className="text-center">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#D6A85B]">
                Your Perfect Aura Match
              </span>
              <h3 className="font-serif text-3xl font-semibold text-[#F5EFEB] mt-1">
                {recommendation.coffee.name}
              </h3>
            </div>

            <div className="p-4 rounded-2xl glass-panel bg-[#221E1C] border border-[#E6D5B8]/15 flex flex-col sm:flex-row items-center gap-4">
              <img
                src={recommendation.coffee.image}
                alt={recommendation.coffee.name}
                referrerPolicy="no-referrer"
                className="w-24 h-24 rounded-xl object-cover shrink-0"
              />
              <div className="space-y-1.5 text-center sm:text-left">
                <p className="text-xs font-medium text-[#D6A85B]">
                  {recommendation.coffee.composition}
                </p>
                <p className="text-xs text-[#A8988B] leading-relaxed">
                  {recommendation.explanation}
                </p>
                <div className="text-xs text-[#E6D5B8] pt-1">
                  Notes: {recommendation.coffee.flavorNotes.join(', ')}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <button
                onClick={resetQuiz}
                className="flex items-center gap-1.5 text-xs text-[#8A7C70] hover:text-[#E6D5B8] py-2 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retake Quiz</span>
              </button>

              <button
                onClick={() => {
                  onSelectCoffee(recommendation.coffee);
                  onClose();
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase text-[#141211] bg-[#E6D5B8] hover:bg-[#F5EFEB] transition-all cursor-pointer shadow-lg"
              >
                <span>Order This Brew (${recommendation.coffee.price.toFixed(2)})</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
