import React, { useState, useEffect } from 'react';
import { CheckCircle2, Clock, MapPin, Coffee, Sparkles, X } from 'lucide-react';

interface OrderSuccessModalProps {
  orderData: {
    orderNumber: string;
    total: number;
    prepTime: string;
  } | null;
  onClose: () => void;
}

export const OrderSuccessModal: React.FC<OrderSuccessModalProps> = ({
  orderData,
  onClose
}) => {
  const [currentStep, setCurrentStep] = useState<number>(2);

  useEffect(() => {
    if (!orderData) return;
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev < 4 ? prev + 1 : prev));
    }, 4500);
    return () => clearInterval(timer);
  }, [orderData]);

  if (!orderData) return null;

  const steps = [
    { title: 'Order Received & Verified', desc: 'Bean lot selected from roastery bins' },
    { title: 'Grinding & Micron Calibration', desc: 'Precision dose ground for 9-bar extraction' },
    { title: 'Pulling Ristretto & Microfoam', desc: 'Textured at 62°C with silky rosetta art' },
    { title: 'Ready at Barista Pickup Counter', desc: 'Present your order code at bar counter' }
  ];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-lg rounded-3xl glass-panel bg-[#1A1716] border border-[#E6D5B8]/25 p-6 sm:p-8 shadow-2xl text-center">
        
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-5 right-5 p-1.5 rounded-full text-[#A8988B] hover:text-[#F5EFEB] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Icon & Confirmation */}
        <div className="w-16 h-16 rounded-full bg-[#D6A85B]/15 border border-[#D6A85B]/30 flex items-center justify-center mx-auto mb-4 text-[#D6A85B]">
          <Coffee className="w-8 h-8" />
        </div>

        <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#2DD4BF] font-semibold mb-1">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>Order Confirmed</span>
        </div>

        <h3 className="font-serif text-3xl font-normal text-[#F5EFEB]">
          Brewing in Progress
        </h3>

        {/* Order Details Banner */}
        <div className="mt-4 p-4 rounded-2xl bg-[#221E1C] border border-[#E6D5B8]/15 flex items-center justify-between text-left">
          <div>
            <p className="text-[11px] uppercase tracking-wider text-[#8A7C70]">Pickup Code</p>
            <p className="font-mono text-2xl font-bold text-[#E6D5B8] tracking-wider">
              {orderData.orderNumber}
            </p>
          </div>
          <div className="text-right">
            <p className="text-[11px] uppercase tracking-wider text-[#8A7C70]">Estimated Ready</p>
            <div className="flex items-center gap-1 text-sm font-semibold text-[#F5EFEB]">
              <Clock className="w-3.5 h-3.5 text-[#D6A85B]" />
              <span>{orderData.prepTime}</span>
            </div>
          </div>
        </div>

        {/* Live Barista Brew Tracker */}
        <div className="mt-6 text-left space-y-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#A8988B]">
            Barista Craft Tracker
          </p>
          
          <div className="space-y-3 relative before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-[1.5px] before:bg-[#2A2421]">
            {steps.map((st, i) => {
              const stepIndex = i + 1;
              const isCompleted = stepIndex < currentStep;
              const isCurrent = stepIndex === currentStep;

              return (
                <div key={i} className="flex items-start gap-3.5 relative z-10">
                  <div 
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all shrink-0 tabular-nums ${
                      isCompleted 
                        ? 'bg-[#2DD4BF] text-[#141211]' 
                        : isCurrent 
                        ? 'bg-[#D6A85B] text-[#141211] ring-4 ring-[#D6A85B]/20 animate-pulse' 
                        : 'bg-[#221E1C] text-[#6E6359] border border-[#E6D5B8]/10'
                    }`}
                  >
                    {isCompleted ? '✓' : stepIndex}
                  </div>

                  <div>
                    <p className={`text-xs font-semibold ${isCurrent ? 'text-[#F5EFEB]' : isCompleted ? 'text-[#C9B29B]' : 'text-[#6E6359]'}`}>
                      {st.title}
                    </p>
                    <p className="text-[11px] text-[#8A7C70]">
                      {st.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-8 pt-4 border-t border-[#E6D5B8]/10">
          <button
            onClick={onClose}
            className="w-full py-3 rounded-full text-xs font-semibold tracking-wider uppercase text-[#141211] bg-[#E6D5B8] hover:bg-[#F5EFEB] transition-all cursor-pointer shadow-lg"
          >
            Done & Return to Bar
          </button>
        </div>

      </div>
    </div>
  );
};
