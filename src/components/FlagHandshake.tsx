import { Handshake } from 'lucide-react';

export default function FlagHandshake({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`} style={{ width: '40px', height: '40px' }} title="Ecuador & Italia">
      <div className="absolute inset-0 rounded-full overflow-hidden flex shadow-md border border-white/20">
        {/* Ecuador Flag */}
        <div className="w-1/2 h-full flex flex-col">
          <div className="h-1/2 bg-[#FFD100]"></div>
          <div className="h-1/4 bg-[#0072CE]"></div>
          <div className="h-1/4 bg-[#EF3340]"></div>
        </div>
        {/* Italy Flag */}
        <div className="w-1/2 h-full flex">
          <div className="w-1/3 h-full bg-[#009246]"></div>
          <div className="w-1/3 h-full bg-[#FFFFFF]"></div>
          <div className="w-1/3 h-full bg-[#CE2B37]"></div>
        </div>
      </div>
      {/* Subtle overlay to improve icon contrast */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-full"></div>
      <Handshake className="w-5 h-5 text-white relative z-10" strokeWidth={2.5} />
    </div>
  );
}
