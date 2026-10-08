import React, { useState, useEffect } from 'react';
import { Instagram, Send, MapPin, Clock, Phone, Volume2, VolumeX, Play, Pause, Coffee, Sparkles } from 'lucide-react';
import { coffeeSoundscape } from '../utils/ambientCoffeeAudio';

export const Footer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.6);

  useEffect(() => {
    return () => {
      // Clean up sound on unmount
      if (coffeeSoundscape.getIsPlaying()) {
        coffeeSoundscape.stop();
      }
    };
  }, []);

  const toggleSoundscape = () => {
    if (isPlaying) {
      coffeeSoundscape.stop();
      setIsPlaying(false);
    } else {
      coffeeSoundscape.start(volume);
      setIsPlaying(true);
    }
  };

  const handleVolumeChange = (newVol: number) => {
    setVolume(newVol);
    if (isPlaying) {
      coffeeSoundscape.setVolume(newVol);
    }
  };

  return (
    <footer className="bg-[#100E0D] border-t border-[#E6D5B8]/10 text-[#A8988B] py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Ambient Cafe Soundscape Player Banner inside Footer */}
        <div className="mb-14 rounded-2xl glass-panel bg-[#191514]/90 border border-[#E6D5B8]/20 p-5 sm:p-6 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-5 relative overflow-hidden group">
          
          {/* Subtle background glow */}
          <div 
            aria-hidden="true" 
            className={`pointer-events-none absolute -right-10 -bottom-10 w-60 h-60 rounded-full transition-opacity duration-700 blur-[80px] ${
              isPlaying ? 'bg-[#D6A85B]/20 opacity-100' : 'bg-transparent opacity-0'
            }`} 
          />

          {/* Left: Info & Description */}
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 shrink-0 ${
              isPlaying 
                ? 'bg-[#E6D5B8] text-[#141211] shadow-lg shadow-[#E6D5B8]/20 ring-2 ring-[#D6A85B]/50' 
                : 'bg-[#221E1C] text-[#C9B29B] border border-[#E6D5B8]/15'
            }`}>
              <Coffee className="w-6 h-6 stroke-[1.75]" />
            </div>

            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="font-serif text-lg font-semibold text-[#F5EFEB]">
                  Aura Ambient Soundscape
                </span>
                
                {/* Dancing Equalizer Bars */}
                {isPlaying && (
                  <div className="flex items-end gap-1 h-3.5 px-1.5" aria-hidden="true">
                    <span className="w-1 bg-[#D6A85B] rounded-full animate-[bounce_1s_infinite_100ms] h-full" />
                    <span className="w-1 bg-[#D6A85B] rounded-full animate-[bounce_1s_infinite_300ms] h-2/3" />
                    <span className="w-1 bg-[#D6A85B] rounded-full animate-[bounce_1s_infinite_200ms] h-5/6" />
                    <span className="w-1 bg-[#D6A85B] rounded-full animate-[bounce_1s_infinite_400ms] h-1/2" />
                  </div>
                )}
              </div>

              <p className="text-xs text-[#A8988B] mt-0.5">
                {isPlaying 
                  ? 'Playing: Frothing milk wand steam, ceramic cup clinks & warm acoustics' 
                  : 'Immerse your space with gentle espresso steam & porcelain cup clinks'}
              </p>
            </div>
          </div>

          {/* Right: Audio Controls */}
          <div className="flex items-center gap-4 w-full sm:w-auto justify-center sm:justify-end">
            
            {/* Volume slider (active when playing) */}
            {isPlaying && (
              <div className="flex items-center gap-2 bg-[#221E1C] px-3 py-1.5 rounded-full border border-[#E6D5B8]/15">
                <button
                  onClick={() => handleVolumeChange(volume > 0 ? 0 : 0.6)}
                  className="text-[#C9B29B] hover:text-[#F5EFEB] transition-colors cursor-pointer"
                  title={volume === 0 ? "Unmute" : "Mute"}
                  aria-label="Toggle mute"
                >
                  {volume === 0 ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={volume}
                  onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                  aria-label="Soundscape Volume"
                  className="w-16 sm:w-20 accent-[#D6A85B] h-1 bg-[#3A332F] rounded-lg appearance-none cursor-pointer"
                />
              </div>
            )}

            {/* Main Toggle Button */}
            <button
              onClick={toggleSoundscape}
              aria-label={isPlaying ? "Mute cafe soundscape" : "Play ambient cafe soundscape"}
              className={`inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer shadow-lg whitespace-nowrap ${
                isPlaying
                  ? 'bg-[#221E1C] text-[#E6D5B8] border border-[#E6D5B8]/40 hover:bg-[#2A2421]'
                  : 'bg-[#E6D5B8] text-[#141211] hover:bg-[#F5EFEB] shadow-[#E6D5B8]/15 hover:scale-105'
              }`}
            >
              {isPlaying ? (
                <>
                  <Pause className="w-4 h-4 fill-current" />
                  <span>Pause Soundscape</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-current" />
                  <span>Play Cafe Soundscape</span>
                </>
              )}
            </button>

          </div>

        </div>

        {/* Top footer row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#E6D5B8]/10">
          
          {/* Brand info */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-serif text-2xl font-semibold tracking-wider text-[#F5EFEB] block">
              AURA ESPRESSO BAR
            </span>
            <p className="text-xs sm:text-sm text-[#8A7C70] leading-relaxed max-w-sm">
              An architectural sanctuary dedicated to high-altitude single origin coffees, 
              slow mornings, and intentional sensory extraction.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-[#1E1B19] hover:bg-[#2A2522] border border-[#E6D5B8]/15 text-[#E6D5B8] hover:text-[#F5EFEB] flex items-center justify-center transition-all cursor-pointer"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://t.me"
                target="_blank"
                rel="noreferrer"
                aria-label="Telegram"
                className="w-10 h-10 rounded-full bg-[#1E1B19] hover:bg-[#2A2522] border border-[#E6D5B8]/15 text-[#E6D5B8] hover:text-[#F5EFEB] flex items-center justify-center transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Location & Hours */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#E6D5B8]">
              Roastery & Flagship
            </p>
            <div className="space-y-2 text-xs sm:text-sm text-[#A8988B]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D6A85B] shrink-0 mt-0.5" />
                <span>742 Obsidian Avenue, Cultural District, Suite 100</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#D6A85B] shrink-0 mt-0.5" />
                <span>Mon – Fri: 06:30 – 19:00 <br />Sat – Sun: 07:30 – 20:00</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D6A85B] shrink-0" />
                <span>+1 (555) 839-AURA</span>
              </div>
            </div>
          </div>

          {/* Sensory Newsletter */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#E6D5B8]">
              Reserve Drops
            </p>
            <p className="text-xs text-[#8A7C70] leading-relaxed">
              Receive notification 24 hours before limited Geisha and natural process micro-lots drop.
            </p>
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for subscribing to Aura Reserve Drops.');
              }}
              className="space-y-2"
            >
              <input
                type="email"
                placeholder="your.email@domain.com"
                required
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#1A1716] border border-[#E6D5B8]/15 text-xs text-[#F5EFEB] placeholder-[#6E6359] focus:outline-none focus:border-[#D6A85B]"
              />
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-[#221E1C] hover:bg-[#2A2522] border border-[#E6D5B8]/25 text-xs font-medium text-[#E6D5B8] transition-colors cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6E6359]">
          <p>© {new Date().getFullYear()} Aura Espresso Bar. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-[#A8988B] transition-colors">Artisanal Sourcing</a>
            <a href="#privacy" onClick={(e) => e.preventDefault()} className="hover:text-[#A8988B] transition-colors">Privacy Policy</a>
            <a href="#terms" onClick={(e) => e.preventDefault()} className="hover:text-[#A8988B] transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
