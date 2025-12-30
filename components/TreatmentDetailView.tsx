
import React from 'react';

interface TreatmentDetailViewProps {
  treatment: any;
  onClose: () => void;
}

const TreatmentDetailView: React.FC<TreatmentDetailViewProps> = ({ treatment, onClose }) => {
  if (!treatment) return null;

  return (
    <div className="fixed inset-0 z-[300] bg-luxuryBlack overflow-y-auto animate-[fadeIn_0.5s_ease-out] overscroll-none">
      {/* Header Overlay - Adjusted for Dynamic Island and Pro Max corners */}
      <div className="fixed top-[calc(1rem+env(safe-area-inset-top))] right-[calc(1rem+env(safe-area-inset-right))] z-[310]">
        <button 
          onClick={onClose} 
          className="group flex items-center gap-4 text-gold p-3 md:p-4 bg-luxuryBlack/80 backdrop-blur-xl border border-gold/30 rounded-full hover:bg-gold hover:text-luxuryBlack transition-all duration-500 shadow-2xl"
        >
          <span className="uppercase text-[9px] md:text-[10px] tracking-widest font-bold hidden sm:inline">Cerrar</span>
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative h-[75vh] md:h-[85vh] overflow-hidden">
        <img 
          src={treatment.img} 
          className="w-full h-full object-cover scale-105" 
          alt={treatment.name} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luxuryBlack via-luxuryBlack/20 to-transparent"></div>
        <div className="absolute bottom-16 md:bottom-24 left-6 md:left-24 right-6 max-w-5xl">
          <span className="text-gold tracking-[0.5em] text-[10px] md:text-xs uppercase mb-4 md:mb-6 block font-bold" data-aos="fade-up">Experiencia Boutique</span>
          <h1 className="text-4xl md:text-9xl font-serif text-white mb-4 md:mb-6 leading-[1.1] tracking-tight" data-aos="fade-up" data-aos-delay="200">
            {treatment.name}
          </h1>
          <p className="text-gold font-serif italic text-xl md:text-2xl" data-aos="fade-up" data-aos-delay="400">Desde {treatment.price}</p>
        </div>
      </section>

      {/* Editorial Content */}
      <section className="py-16 md:py-32 px-6 md:px-24 container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          <div data-aos="fade-right">
            <h2 className="text-gold text-[10px] uppercase tracking-[0.5em] mb-8 md:mb-12 border-b border-gold/20 pb-4 font-bold">La Esencia del Ritual</h2>
            <p className="text-white text-2xl md:text-4xl font-serif italic leading-relaxed mb-12">
              "{treatment.fullDesc}"
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 mt-12">
              {treatment.benefits?.map((benefit: string, i: number) => (
                <div key={i} className="p-6 md:p-8 border border-gold/10 bg-gold/[0.03] backdrop-blur-sm">
                  <p className="text-gold uppercase tracking-tighter text-[9px] font-bold mb-2 opacity-60">Beneficio 0{i+1}</p>
                  <p className="text-white text-base md:text-lg font-serif italic leading-snug">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-8 md:gap-12" data-aos="fade-left">
             <div className="relative aspect-square overflow-hidden border border-gold/10 shadow-2xl">
                <img src={treatment.img} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" alt="" />
                <div className="absolute inset-0 border-[15px] md:border-[30px] border-luxuryBlack opacity-40"></div>
             </div>
             <div className="bg-gold p-8 md:p-12 text-luxuryBlack shadow-2xl shadow-gold/5">
               <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-6">Protocolo de Reserva VIP</h3>
               <p className="text-sm leading-relaxed mb-8 font-medium">Cada sesión se personaliza tras un diagnóstico previo de 15 minutos. Incluye acceso a nuestra sala de relajación sensorial y carta de tes orgánicos.</p>
               <a href="https://wa.me/34000000000" className="flex items-center justify-center gap-4 w-full md:w-auto border-2 border-luxuryBlack px-10 py-5 uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-luxuryBlack hover:text-gold transition-all duration-500">
                 Agendar Mi Sesión VIP —
               </a>
             </div>
          </div>
        </div>
      </section>
      
      {/* Safe Area Footer Spacer */}
      <div className="h-[env(safe-area-inset-bottom)] bg-luxuryBlack"></div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default TreatmentDetailView;
