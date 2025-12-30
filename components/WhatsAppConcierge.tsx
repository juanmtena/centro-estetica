
import React from 'react';

const WhatsAppConcierge: React.FC = () => {
  return (
    <div className="fixed bottom-10 right-10 z-[100]" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
      <a 
        href="https://wa.me/34000000000" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group flex items-center gap-4 bg-luxuryBlack border border-gold p-2 pr-6 rounded-full hover:bg-gold transition-all duration-500 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
      >
        <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-luxuryBlack group-hover:bg-luxuryBlack group-hover:text-gold transition-colors duration-500">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.025 3.284l-.548 2.003 2.046-.536c.947.517 2.012.854 3.245.854 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.586-5.766-5.768-5.766zm3.424 8.216c-.145.41-.72.76-1.144.808-.384.045-.88.063-1.425-.112-1.464-.472-2.522-1.785-3.167-2.693-.11-.15-.41-.55-.41-.95 0-.4.208-.596.284-.68.1-.112.224-.132.3-.132.076 0 .152.002.216.006.104.004.204-.044.272.116.112.264.384.936.416 1.004.032.068.056.148.012.236-.044.088-.068.144-.136.224-.068.08-.148.176-.212.24-.072.072-.148.152-.064.296.084.144.372.612.8 1 1.054.96 1.944 1.256 2.216 1.368.272.112.428.092.588-.092.16-.184.68-.792.86-.968.18-.176.36-.148.608-.056.248.092 1.572.74 1.844.876.272.136.452.204.52.32.064.116.064.672-.08.108z"/>
          </svg>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-[0.2em] text-gold group-hover:text-luxuryBlack font-bold">Concierge VIP</span>
          <span className="text-xs text-white group-hover:text-luxuryBlack font-medium">Reserva tu cita</span>
        </div>
      </a>
    </div>
  );
};

export default WhatsAppConcierge;
