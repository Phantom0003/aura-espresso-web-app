/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PopularBrewsSection } from './components/PopularBrewsSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { QuizBannerSection } from './components/QuizBannerSection';
import { ReviewsSection } from './components/ReviewsSection';
import { OffersSection } from './components/OffersSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CustomizeModal } from './components/CustomizeModal';
import { MoodQuizModal } from './components/MoodQuizModal';
import { FullMenuModal } from './components/FullMenuModal';
import { ProfileModal } from './components/ProfileModal';
import { OrderSuccessModal } from './components/OrderSuccessModal';
import { CoffeeItem, CartItem, POPULAR_BREWS } from './data/coffeeData';
import { Check, ShoppingBag } from 'lucide-react';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([
    {
      id: 'initial-latte',
      itemId: 'latte',
      name: 'Artisan Silk Latte',
      price: 6.75,
      quantity: 1,
      image: '/src/assets/images/aura_latte_1791441768170.jpg',
      milk: 'Whole Milk',
      temp: 'Hot',
      sweetness: 'Unsweetened',
      extraShot: false
    }
  ]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isQuizOpen, setIsQuizOpen] = useState<boolean>(false);
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
  const [customizingItem, setCustomizingItem] = useState<CoffeeItem | null>(null);
  const [orderSuccessData, setOrderSuccessData] = useState<{
    orderNumber: string;
    total: number;
    prepTime: string;
  } | null>(null);
  const [appliedPromo, setAppliedPromo] = useState<string>('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((curr) => (curr === msg ? null : curr));
    }, 2800);
  };

  // Quick Add handler (adds default recipe)
  const handleQuickAdd = (item: CoffeeItem) => {
    const newItem: CartItem = {
      id: `${item.id}-${Date.now()}`,
      itemId: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
      image: item.image,
      milk: 'Whole Milk',
      temp: 'Hot',
      sweetness: 'Unsweetened',
      extraShot: false
    };

    setCart((prev) => {
      const existing = prev.find((i) => i.itemId === item.id && i.milk === 'Whole Milk' && i.temp === 'Hot' && !i.extraShot);
      if (existing) {
        return prev.map((i) => (i.id === existing.id ? { ...i, quantity: i.quantity + 1 } : i));
      }
      return [...prev, newItem];
    });

    showToast(`Added ${item.name} to order bag`);
  };

  // Customized Add handler
  const handleAddCustomized = (customized: CartItem) => {
    setCart((prev) => [...prev, customized]);
    showToast(`Added customized ${customized.name} to order bag`);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, quantity: item.quantity + delta } : item))
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveItem = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleCheckoutSuccess = (orderData: { orderNumber: string; total: number; prepTime: string }) => {
    setCart([]);
    setIsCartOpen(false);
    setOrderSuccessData(orderData);
  };

  const handleClaimOffer = (offerName: string) => {
    if (offerName.includes('AURAFIRST')) {
      setAppliedPromo('AURAFIRST');
      setIsCartOpen(true);
      showToast('Promo code AURAFIRST applied (15% off)!');
    } else {
      showToast(`Reserved: ${offerName}. Barista notified!`);
    }
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#141211] text-[#EFECE6] flex flex-col font-sans selection:bg-[#E6D5B8]/20 selection:text-[#F3ECE1]">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div 
          className="fixed top-24 right-6 z-50 glass-panel bg-[#221E1C]/95 border border-[#E6D5B8]/30 px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2.5 text-xs font-medium text-[#F5EFEB] animate-fade-in"
          role="status"
        >
          <div className="w-5 h-5 rounded-full bg-[#2DD4BF]/20 text-[#2DD4BF] flex items-center justify-center">
            <Check className="w-3.5 h-3.5" />
          </div>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Bar Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenProfile={() => setIsProfileOpen(true)}
        onOpenMenu={() => setIsMenuOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onExploreMenu={() => {
            const menuEl = document.getElementById('menu');
            if (menuEl) {
              menuEl.scrollIntoView({ behavior: 'smooth' });
            } else {
              setIsMenuOpen(true);
            }
          }}
          onOpenQuiz={() => setIsQuizOpen(true)}
        />

        {/* Popular Menu Items Grid */}
        <PopularBrewsSection
          onQuickAdd={handleQuickAdd}
          onSelectCustomize={(item) => setCustomizingItem(item)}
          onViewFullMenu={() => setIsMenuOpen(true)}
        />

        {/* 'Why Choose Us' Feature Section */}
        <WhyChooseUsSection
          onOrderFreshCoffee={() => setIsMenuOpen(true)}
        />

        {/* Interactive Quiz Banner */}
        <QuizBannerSection
          onTakeQuiz={() => setIsQuizOpen(true)}
        />

        {/* Connoisseur Reviews */}
        <ReviewsSection />

        {/* Aura Club Offers */}
        <OffersSection
          onClaimOffer={handleClaimOffer}
          onExploreMenu={() => setIsMenuOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Drawers */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckoutSuccess={handleCheckoutSuccess}
        appliedPromo={appliedPromo}
        onApplyPromo={(code) => {
          setAppliedPromo(code);
          showToast(`Applied code: ${code}`);
        }}
      />

      <CustomizeModal
        item={customizingItem}
        isOpen={customizingItem !== null}
        onClose={() => setCustomizingItem(null)}
        onAddToCart={handleAddCustomized}
      />

      <MoodQuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onSelectCoffee={(coffee) => {
          handleQuickAdd(coffee);
        }}
      />

      <FullMenuModal
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onSelectCustomize={(item) => setCustomizingItem(item)}
        onQuickAdd={handleQuickAdd}
      />

      <ProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        onQuickReorder={(item) => handleQuickAdd(item)}
      />

      <OrderSuccessModal
        orderData={orderSuccessData}
        onClose={() => setOrderSuccessData(null)}
      />

    </div>
  );
}
