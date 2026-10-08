import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Check, Tag } from 'lucide-react';
import { CartItem } from '../data/coffeeData';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckoutSuccess: (orderData: { orderNumber: string; total: number; prepTime: string }) => void;
  appliedPromo: string;
  onApplyPromo: (code: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckoutSuccess,
  appliedPromo,
  onApplyPromo
}) => {
  const [promoInput, setPromoInput] = useState('');
  const [tipPercent, setTipPercent] = useState<number>(15);
  const [pickupMethod, setPickupMethod] = useState<'counter' | 'dinein'>('counter');

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountRate = appliedPromo.toUpperCase() === 'AURAFIRST' ? 0.15 : 0;
  const discountAmount = subtotal * discountRate;
  const discountedSubtotal = subtotal - discountAmount;
  const tipAmount = (discountedSubtotal * tipPercent) / 100;
  const tax = discountedSubtotal * 0.0825;
  const finalTotal = discountedSubtotal + tipAmount + tax;

  const handleApplyCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoInput.trim()) {
      onApplyPromo(promoInput.trim().toUpperCase());
      setPromoInput('');
    }
  };

  const handleCheckout = () => {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const orderNumber = `AUR-${randomNum}`;
    onCheckoutSuccess({
      orderNumber,
      total: finalTotal,
      prepTime: '8 – 12 mins'
    });
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-hidden bg-black/70 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
    >
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#181514] border-l border-[#E6D5B8]/15 p-6 flex flex-col justify-between shadow-2xl relative">
          
          {/* Header */}
          <div className="flex items-center justify-between pb-5 border-b border-[#E6D5B8]/10">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-[#D6A85B]" />
              <h3 className="font-serif text-2xl font-normal text-[#F5EFEB]">
                Your Order Bag
              </h3>
              <span className="text-xs bg-[#2A2421] text-[#E6D5B8] px-2 py-0.5 rounded-full tabular-nums">
                {items.reduce((acc, cur) => acc + cur.quantity, 0)}
              </span>
            </div>

            <button
              onClick={onClose}
              aria-label="Close cart"
              className="p-1.5 rounded-full text-[#A8988B] hover:text-[#F5EFEB] hover:bg-[#2A2421] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto py-4 space-y-4 pr-1">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#221E1C] flex items-center justify-center text-[#8A7C70]">
                  <ShoppingBag className="w-8 h-8 stroke-[1.5]" />
                </div>
                <p className="font-serif text-xl text-[#F5EFEB]">Your bag is empty</p>
                <p className="text-xs text-[#8A7C70] max-w-xs">
                  Explore our popular brews and artisan signatures to add a freshly pulled coffee to your order.
                </p>
              </div>
            ) : (
              items.map((item) => (
                <div 
                  key={item.id}
                  className="p-3.5 rounded-2xl bg-[#201C1A] border border-[#E6D5B8]/10 flex gap-3.5 items-start"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-16 h-16 rounded-xl object-cover shrink-0 mt-0.5"
                  />

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-1">
                      <p className="font-serif text-base font-medium text-[#F5EFEB] truncate">
                        {item.name}
                      </p>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-[#8A7C70] hover:text-rose-400 p-1 transition-colors cursor-pointer"
                        title="Remove"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="text-[11px] text-[#A8988B] space-y-0.5 mt-0.5">
                      <p>{item.temp} · {item.milk}</p>
                      <p>{item.sweetness} {item.extraShot ? '· +Extra Ristretto' : ''}</p>
                    </div>

                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-[#E6D5B8]/5">
                      <span className="font-serif text-sm font-semibold text-[#F5EFEB] tabular-nums">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>

                      <div className="flex items-center gap-2 bg-[#2A2421] rounded-full px-2 py-0.5">
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="p-1 text-[#A8988B] hover:text-[#F5EFEB] cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-semibold text-[#F5EFEB] w-4 text-center tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="p-1 text-[#A8988B] hover:text-[#F5EFEB] cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Controls (Only if items exist) */}
          {items.length > 0 && (
            <div className="pt-4 border-t border-[#E6D5B8]/10 space-y-4">
              
              {/* Pickup Mode Toggle */}
              <div className="grid grid-cols-2 gap-2 bg-[#201C1A] p-1 rounded-xl">
                <button
                  type="button"
                  onClick={() => setPickupMethod('counter')}
                  className={`py-1.5 text-xs rounded-lg font-medium transition-colors cursor-pointer ${
                    pickupMethod === 'counter'
                      ? 'bg-[#E6D5B8] text-[#141211] font-semibold'
                      : 'text-[#A8988B] hover:text-[#F5EFEB]'
                  }`}
                >
                  Counter Pickup (8-12m)
                </button>
                <button
                  type="button"
                  onClick={() => setPickupMethod('dinein')}
                  className={`py-1.5 text-xs rounded-lg font-medium transition-colors cursor-pointer ${
                    pickupMethod === 'dinein'
                      ? 'bg-[#E6D5B8] text-[#141211] font-semibold'
                      : 'text-[#A8988B] hover:text-[#F5EFEB]'
                  }`}
                >
                  Dine-In Table
                </button>
              </div>

              {/* Promo code */}
              <form onSubmit={handleApplyCode} className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-3.5 h-3.5 text-[#8A7C70] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value)}
                    placeholder={appliedPromo ? `Applied: ${appliedPromo}` : "Promo code (e.g. AURAFIRST)"}
                    className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-[#201C1A] border border-[#E6D5B8]/15 text-xs text-[#F5EFEB] placeholder-[#6E6359] focus:outline-none focus:border-[#D6A85B]"
                  />
                </div>
                <button
                  type="submit"
                  className="px-3 py-1.5 rounded-xl bg-[#2A2421] hover:bg-[#342D29] border border-[#E6D5B8]/20 text-xs font-semibold text-[#E6D5B8] cursor-pointer"
                >
                  Apply
                </button>
              </form>

              {/* Tip Selection */}
              <div>
                <div className="flex justify-between items-center text-[11px] text-[#8A7C70] mb-1.5">
                  <span>Barista Craft Tip</span>
                  <span className="text-[#D6A85B] tabular-nums">${tipAmount.toFixed(2)}</span>
                </div>
                <div className="grid grid-cols-4 gap-1.5">
                  {[0, 10, 15, 20].map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTipPercent(t)}
                      className={`py-1 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                        tipPercent === t
                          ? 'bg-[#D6A85B] text-[#141211] font-semibold'
                          : 'bg-[#201C1A] text-[#A8988B] hover:text-[#F5EFEB]'
                      }`}
                    >
                      {t === 0 ? 'None' : `${t}%`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Cost Calculations */}
              <div className="space-y-1.5 text-xs text-[#A8988B] pt-2 border-t border-[#E6D5B8]/10">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="tabular-nums text-[#F5EFEB]">${subtotal.toFixed(2)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-[#2DD4BF]">
                    <span>Discount ({appliedPromo})</span>
                    <span className="tabular-nums">-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Local Tax (8.25%)</span>
                  <span className="tabular-nums">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-serif text-lg font-semibold text-[#F5EFEB] pt-1 border-t border-[#E6D5B8]/10">
                  <span>Total</span>
                  <span className="tabular-nums">${finalTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Place Order CTA */}
              <button
                onClick={handleCheckout}
                className="w-full py-3.5 px-6 rounded-full text-xs font-semibold tracking-wider uppercase text-[#141211] bg-[#E6D5B8] hover:bg-[#F5EFEB] transition-all cursor-pointer shadow-xl flex items-center justify-center gap-2 group"
              >
                <span>Complete Order (${finalTotal.toFixed(2)})</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
