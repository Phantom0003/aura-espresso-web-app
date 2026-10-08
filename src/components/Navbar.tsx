import React from 'react';
import { ShoppingBag, User, Sparkles } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenProfile: () => void;
  onOpenMenu: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenProfile,
  onOpenMenu
}) => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#141211]/80 border-b border-[#E6D5B8]/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Zone 1: Brand Wordmark (Single text element in luxury display typography) */}
        <a 
          href="#home" 
          className="font-serif text-2xl sm:text-3xl font-semibold tracking-wider text-[#F5EFEB] hover:text-[#E6D5B8] transition-colors"
        >
          AURA ESPRESSO BAR
        </a>

        {/* Zone 2: 4-6 Clean text navigation links with subtle underline */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-[#C9B29B]">
          <a href="#home" className="hover:text-[#F5EFEB] transition-colors relative group py-1">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#E6D5B8] transition-all duration-300 group-hover:w-full" />
          </a>
          <button 
            onClick={onOpenMenu} 
            className="hover:text-[#F5EFEB] transition-colors relative group py-1 cursor-pointer"
          >
            Menu
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#E6D5B8] transition-all duration-300 group-hover:w-full" />
          </button>
          <a href="#about" className="hover:text-[#F5EFEB] transition-colors relative group py-1">
            About Us
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#E6D5B8] transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#reviews" className="hover:text-[#F5EFEB] transition-colors relative group py-1">
            Reviews
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#E6D5B8] transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#offers" className="hover:text-[#F5EFEB] transition-colors relative group py-1">
            Offers
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#E6D5B8] transition-all duration-300 group-hover:w-full" />
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions (Profile, Cart with dynamic badge, Pill CTA) */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={onOpenProfile}
            aria-label="User profile & coffee vault"
            className="p-2.5 rounded-full text-[#C9B29B] hover:text-[#F5EFEB] hover:bg-[#221E1C] border border-[#E6D5B8]/15 transition-all duration-200 cursor-pointer"
            title="Member Profile & Loyalty Vault"
          >
            <User className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <button
            onClick={onOpenCart}
            aria-label="View shopping bag"
            className="relative p-2.5 rounded-full text-[#C9B29B] hover:text-[#F5EFEB] hover:bg-[#221E1C] border border-[#E6D5B8]/15 transition-all duration-200 cursor-pointer"
            title="Shopping Cart"
          >
            <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#D6A85B] text-[#141211] font-semibold text-xs w-5 h-5 rounded-full flex items-center justify-center tabular-nums shadow-sm">
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={onOpenMenu}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold tracking-wider uppercase rounded-full text-[#141211] bg-[#E6D5B8] hover:bg-[#F3ECE1] shadow-lg shadow-[#E6D5B8]/10 hover:shadow-[#E6D5B8]/20 transition-all duration-200 cursor-pointer whitespace-nowrap"
          >
            Order Now
          </button>
        </div>

      </div>
    </header>
  );
};
