
import React from 'react';
import { treatmentsData } from '../data/treatments';

interface TreatmentsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTreatment: (treatment: any) => void;
}

const TreatmentsModal: React.FC<TreatmentsModalProps> = ({ isOpen, onClose, onSelectTreatment }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center">
      <div className="absolute inset-0 bg-luxuryBlack/98 backdrop-blur-2xl" onClick={onClose}></div>
      
      <div className="relative w-full h-full bg-luxuryBlack border-x border-gold/20 shadow-2xl overflow-y-auto custom-scrollbar animate-[slideUp_0.6s_ease-out] flex flex-col">
        <div className="sticky top-0 bg-luxuryBlack/95 z-20 p-8 md:p-12 flex justify-between items-center border-b border-gold/10 pt-[max(2rem,calc(1.5rem+env(safe-area-inset-top)))]">
          <div className="flex flex-col">
            <span className="text-gold tracking-[0.5em] text-[10px] uppercase mb-2">Portfolio PRUEBA</span>
            <h2 className="text-2xl md:text-5xl font-serif text-white italic leading-none">Protocolos de Elite</h2>
          </div>
          <button onClick={onClose} className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-luxuryBlack transition-all">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <div className="p-8 md:p-16 flex-grow pb-[max(4rem,env(safe-area-inset-bottom))]">
          {treatmentsData.map((cat, idx) => (
            <div key={idx} className="mb-24 last:mb-0">
              <h3 className="text-gold text-xs uppercase tracking-[0.6em] font-bold mb-12 border-l-4 border-gold pl-6">{cat.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cat.items.map((item, i) => (
                  <div 
                    key={i} 
                    onClick={() => onSelectTreatment(item)}
                    className="group relative h-[400px] md:h-[450px] overflow-hidden cursor-pointer border border-white/5"
                  >
                    <img 
                      src={item.img} 
                      alt={item.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>
                    
                    <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-gold font-serif italic text-sm mb-2">{item.price}</p>
                      <h4 className="text-white text-2xl font-serif mb-2">{item.name}</h4>
                      <p className="text-gray-400 text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-700">Explorar Detalles</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(50px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #D4AF37; }
      `}</style>
    </div>
  );
};

export default TreatmentsModal;
