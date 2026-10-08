import React, { useState } from 'react';
import { X, Plus, Minus, Check, Coffee, Flame } from 'lucide-react';
import { CoffeeItem, CartItem } from '../data/coffeeData';

interface CustomizeModalProps {
  item: CoffeeItem | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (customizedItem: CartItem) => void;
}

export const CustomizeModal: React.FC<CustomizeModalProps> = ({
  item,
  isOpen,
  onClose,
  onAddToCart
}) => {
  if (!isOpen || !item) return null;

  const [quantity, setQuantity] = useState<number>(1);
  const [milk, setMilk] = useState<string>('Whole Milk');
  const [temp, setTemp] = useState<'Hot' | 'Iced'>('Hot');
  const [sweetness, setSweetness] = useState<string>('Unsweetened');
  const [extraShot, setExtraShot] = useState<boolean>(false);

  // Price calculation
  let unitPrice = item.price;
  if (milk === 'Oatly Barista Oat' || milk === 'Organic Almond') unitPrice += 0.75;
  if (sweetness === 'Madagascar Vanilla' || sweetness === 'Wildflower Honey') unitPrice += 0.50;
  if (extraShot) unitPrice += 1.25;

  const totalPrice = unitPrice * quantity;

  const handleAdd = () => {
    const customized: CartItem = {
      id: `${item.id}-${Date.now()}`,
      itemId: item.id,
      name: item.name,
      price: unitPrice,
      quantity,
      image: item.image,
      milk,
      temp,
      sweetness,
      extraShot
    };
    onAddToCart(customized);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-lg rounded-3xl glass-panel bg-[#1A1716] border border-[#E6D5B8]/20 p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#E6D5B8]/10 mb-5">
          <div>
            <h3 className="font-serif text-2xl font-normal text-[#F5EFEB]">
              Customize {item.name}
            </h3>
            <p className="text-xs text-[#D6A85B] mt-0.5">{item.composition}</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-full text-[#A8988B] hover:text-[#F5EFEB] hover:bg-[#2A2421] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drink preview banner */}
        <div className="flex items-center gap-4 p-3 rounded-2xl bg-[#221E1C] border border-[#E6D5B8]/10 mb-6">
          <img
            src={item.image}
            alt={item.name}
            referrerPolicy="no-referrer"
            className="w-16 h-16 rounded-xl object-cover shrink-0"
          />
          <div>
            <p className="text-xs text-[#A8988B]">{item.description}</p>
            <p className="text-xs font-medium text-[#E6D5B8] mt-1">
              Base: ${item.price.toFixed(2)}
            </p>
          </div>
        </div>

        <div className="space-y-6">
          
          {/* Temperature */}
          <div>
            <label className="text-xs uppercase tracking-wider font-semibold text-[#E6D5B8] block mb-2.5">
              Temperature
            </label>
            <div className="grid grid-cols-2 gap-2.5">
              {(['Hot', 'Iced'] as const).map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTemp(t)}
                  className={`py-2.5 px-4 rounded-xl text-xs font-medium transition-all cursor-pointer border ${
                    temp === t
                      ? 'bg-[#E6D5B8] text-[#141211] border-[#E6D5B8] font-semibold shadow-md'
                      : 'bg-[#221E1C] text-[#C9B29B] border-[#E6D5B8]/10 hover:border-[#E6D5B8]/30'
                  }`}
                >
                  {t === 'Hot' ? '♨️ Hot (Steamed 62°C)' : '🧊 Iced (Over Crystal Cubes)'}
                </button>
              ))}
            </div>
          </div>

          {/* Milk Options (if not pure espresso) */}
          <div>
            <label className="text-xs uppercase tracking-wider font-semibold text-[#E6D5B8] block mb-2.5">
              Milk Craft
            </label>
            <div className="grid grid-cols-2 gap-2.5">
              {[
                { name: 'Whole Milk', extra: 0 },
                { name: 'Oatly Barista Oat', extra: 0.75 },
                { name: 'Organic Almond', extra: 0.75 },
                { name: 'No Milk / Black', extra: 0 }
              ].map((m) => (
                <button
                  key={m.name}
                  type="button"
                  onClick={() => setMilk(m.name)}
                  className={`py-2.5 px-3 rounded-xl text-xs font-medium text-left transition-all cursor-pointer border flex justify-between items-center ${
                    milk === m.name
                      ? 'bg-[#E6D5B8] text-[#141211] border-[#E6D5B8] font-semibold'
                      : 'bg-[#221E1C] text-[#C9B29B] border-[#E6D5B8]/10 hover:border-[#E6D5B8]/30'
                  }`}
                >
                  <span className="truncate">{m.name}</span>
                  {m.extra > 0 && <span className="text-[11px] opacity-80 shrink-0">+$0.75</span>}
                </button>
              ))}
            </div>
          </div>

          {/* Sweetness */}
          <div>
            <label className="text-xs uppercase tracking-wider font-semibold text-[#E6D5B8] block mb-2.5">
              Sweetness & Natural Syrups
            </label>
            <div className="grid grid-cols-2 gap-2.5">
              {[
                { name: 'Unsweetened', extra: 0 },
                { name: 'Light Cane (50%)', extra: 0 },
                { name: 'Madagascar Vanilla', extra: 0.50 },
                { name: 'Wildflower Honey', extra: 0.50 }
              ].map((s) => (
                <button
                  key={s.name}
                  type="button"
                  onClick={() => setSweetness(s.name)}
                  className={`py-2.5 px-3 rounded-xl text-xs font-medium text-left transition-all cursor-pointer border flex justify-between items-center ${
                    sweetness === s.name
                      ? 'bg-[#E6D5B8] text-[#141211] border-[#E6D5B8] font-semibold'
                      : 'bg-[#221E1C] text-[#C9B29B] border-[#E6D5B8]/10 hover:border-[#E6D5B8]/30'
                  }`}
                >
                  <span className="truncate">{s.name}</span>
                  {s.extra > 0 && <span className="text-[11px] opacity-80 shrink-0">+$0.50</span>}
                </button>
              ))}
            </div>
          </div>

          {/* Extra Shot Add-on */}
          <div className="p-3.5 rounded-xl bg-[#221E1C] border border-[#E6D5B8]/15 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Flame className="w-4 h-4 text-[#D6A85B]" />
              <div>
                <p className="text-xs font-semibold text-[#F5EFEB]">Extra Single Origin Ristretto Shot</p>
                <p className="text-[11px] text-[#8A7C70]">+18g extraction (+ $1.25)</p>
              </div>
            </div>
            <input
              type="checkbox"
              checked={extraShot}
              onChange={(e) => setExtraShot(e.target.checked)}
              className="w-4 h-4 accent-[#D6A85B] cursor-pointer"
            />
          </div>

        </div>

        {/* Quantity & Add to Cart Action */}
        <div className="mt-8 pt-5 border-t border-[#E6D5B8]/10 flex items-center justify-between gap-4">
          
          {/* Quantity Stepper */}
          <div className="flex items-center gap-2 bg-[#221E1C] border border-[#E6D5B8]/20 rounded-full px-3 py-1.5">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="p-1 text-[#A8988B] hover:text-[#F5EFEB] transition-colors cursor-pointer"
              aria-label="Decrease quantity"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="text-xs font-semibold text-[#F5EFEB] w-6 text-center tabular-nums">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="p-1 text-[#A8988B] hover:text-[#F5EFEB] transition-colors cursor-pointer"
              aria-label="Increase quantity"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleAdd}
            className="flex-1 py-3 px-6 rounded-full text-xs font-semibold tracking-wider uppercase text-[#141211] bg-[#E6D5B8] hover:bg-[#F5EFEB] transition-all cursor-pointer shadow-lg flex items-center justify-between"
          >
            <span>Add to Order</span>
            <span className="font-serif text-sm font-bold tabular-nums">
              ${totalPrice.toFixed(2)}
            </span>
          </button>

        </div>

      </div>
    </div>
  );
};
