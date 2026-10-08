import React, { useState } from 'react';
import { X, Search, Plus, Star, Sparkles } from 'lucide-react';
import { CoffeeItem, ALL_MENU_ITEMS } from '../data/coffeeData';

interface FullMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCustomize: (item: CoffeeItem) => void;
  onQuickAdd: (item: CoffeeItem) => void;
}

export const FullMenuModal: React.FC<FullMenuModalProps> = ({
  isOpen,
  onClose,
  onSelectCustomize,
  onQuickAdd
}) => {
  const [filter, setFilter] = useState<string>('All');
  const [search, setSearch] = useState<string>('');

  if (!isOpen) return null;

  const categories = ['All', 'Popular', 'Espresso', 'Milk', 'Cold', 'Signature'];

  const filteredItems = ALL_MENU_ITEMS.filter((item) => {
    const matchesCategory = filter === 'All' || item.category === filter;
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) ||
                          item.description.toLowerCase().includes(search.toLowerCase()) ||
                          item.flavorNotes.some(note => note.toLowerCase().includes(search.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md transition-opacity"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-4xl rounded-3xl glass-panel bg-[#181514] border border-[#E6D5B8]/20 p-6 sm:p-8 shadow-2xl flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-5 border-b border-[#E6D5B8]/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D6A85B]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full Artisanal Catalog</span>
            </div>
            <h2 className="font-serif text-3xl font-normal text-[#F5EFEB] mt-1">
              Aura Roastery Menu
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="p-2 rounded-full text-[#A8988B] hover:text-[#F5EFEB] hover:bg-[#2A2421] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter bar & Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 my-5">
          {/* Functional Category Filter Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  filter === cat
                    ? 'bg-[#E6D5B8] text-[#141211] font-semibold shadow-sm'
                    : 'bg-[#221E1C] text-[#A8988B] hover:text-[#F5EFEB] hover:bg-[#2A2421]'
                }`}
              >
                {cat === 'All' ? 'All Brews' : cat}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative min-w-[220px]">
            <Search className="w-4 h-4 text-[#8A7C70] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search brews or notes..."
              className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-[#221E1C] border border-[#E6D5B8]/15 text-xs text-[#F5EFEB] placeholder-[#6E6359] focus:outline-none focus:border-[#D6A85B]"
            />
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="flex-1 overflow-y-auto pr-1 space-y-4">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12 text-sm text-[#8A7C70]">
              No brews found matching "{search}".
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-2xl glass-panel bg-[#201C1A] border border-[#E6D5B8]/10 hover:border-[#E6D5B8]/30 transition-all flex gap-4 items-center group"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-20 h-20 rounded-xl object-cover shrink-0 cursor-pointer group-hover:scale-105 transition-transform"
                    onClick={() => onSelectCustomize(item)}
                  />

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <h4 
                        onClick={() => onSelectCustomize(item)}
                        className="font-serif text-lg font-medium text-[#F5EFEB] truncate cursor-pointer group-hover:text-[#E6D5B8] transition-colors"
                      >
                        {item.name}
                      </h4>
                      <div className="flex items-center gap-1 text-[11px] text-[#D6A85B] shrink-0 font-medium">
                        <Star className="w-3 h-3 fill-[#D6A85B]" />
                        <span className="tabular-nums">{item.rating}</span>
                      </div>
                    </div>

                    <p className="text-[11px] text-[#D6A85B] truncate mt-0.5">
                      {item.composition}
                    </p>

                    <p className="text-[11px] text-[#8A7C70] truncate mt-1">
                      {item.flavorNotes.join(' · ')}
                    </p>

                    <div className="flex items-center justify-between mt-2 pt-1 border-t border-[#E6D5B8]/10">
                      <span className="font-serif text-base font-semibold text-[#F5EFEB] tabular-nums">
                        ${item.price.toFixed(2)}
                      </span>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => onSelectCustomize(item)}
                          className="px-2.5 py-1 text-[11px] text-[#C9B29B] hover:text-[#F5EFEB] rounded-lg transition-colors cursor-pointer"
                        >
                          Customize
                        </button>
                        <button
                          onClick={() => onQuickAdd(item)}
                          className="w-7 h-7 rounded-full bg-[#E6D5B8] text-[#141211] hover:bg-[#F5EFEB] flex items-center justify-center transition-all cursor-pointer"
                          title="Quick Add"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
