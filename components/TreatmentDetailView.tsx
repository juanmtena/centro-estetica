
import React from 'react';

interface TreatmentDetailViewProps {
  treatment: any;
  onClose: () => void;
}

const TreatmentDetailView: React.FC<TreatmentDetailViewProps> = ({ treatment, onClose }) => {
  if (!treatment) return null;

  return (
    <div className="fixed inset-0 z-[300] bg-luxuryBlack overflow-y-auto animate-[fadeIn_0.5s_ease-out]">
      {/* Header Overlay */}
      <div className="fixed top-10 right-10 z-[310]">
        <button onClick={onClose} className="group flex items-center gap-4 text-gold p-4 bg-luxuryBlack/50 backdrop-blur-md border border-gold/20 rounded-full hover:bg-gold hover:text-luxuryBlack transition-all duration-500">
          <span className="uppercase text-[10px] tracking-widest font-bold">Cerrar</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <img 
          src={treatment.img} 
          className="w-full h-full object-cover scale-105" 
          alt={treatment.name} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luxuryBlack via-transparent to-black/30"></div>
        <div className="absolute bottom-20 left-6 md:left-24 max-w-4xl">
          <span className="text-gold tracking-[0.5em] text-xs uppercase mb-6 block" data-aos="fade-up">Experiencia Boutique</span>
          <h1 className="text-5xl md:text-9xl font-serif text-white mb-6 leading-none" data-aos="fade-up" data-aos-delay="200">
            {treatment.name}
          </h1>
          <p className="text-gold font-serif italic text-2xl" data-aos="fade-up" data-aos-delay="400">Desde {treatment.price}</p>
        </div>
      </section>

      {/* Editorial Content */}
      <section className="py-24 px-6 md:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div data-aos="fade-right">
            <h2 className="text-gold text-xs uppercase tracking-[0.4em] mb-12 border-b border-gold/20 pb-4">La Esencia</h2>
            <p className="text-white text-3xl md:text-4xl font-serif italic leading-relaxed mb-12">
              "{treatment.fullDesc}"
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {treatment.benefits?.map((benefit: string, i: number) => (
                <div key={i} className="p-8 border border-gold/10 bg-gold/5">
                  <p className="text-gold uppercase tracking-tighter text-xs font-bold mb-2">Beneficio {i+1}</p>
                  <p className="text-white text-lg font-serif italic">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-12" data-aos="fade-left">
             <div className="relative aspect-square overflow-hidden">
                <img src={treatment.img} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" alt="" />
                <div className="absolute inset-0 border-[20px] border-luxuryBlack opacity-40"></div>
             </div>
             <div className="bg-gold p-12 text-luxuryBlack">
               <h3 className="text-xs uppercase tracking-[0.4em] font-bold mb-6">Protocolo de Reserva</h3>
               <p className="text-sm leading-relaxed mb-8 font-medium">Este ritual requiere una preparación previa. Le recomendamos llegar 15 minutos antes para disfrutar de nuestra carta de infusiones orgánicas.</p>
               <a href="https://wa.me/34000000000" className="inline-block border-2 border-luxuryBlack px-10 py-4 uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-luxuryBlack hover:text-gold transition-all duration-500">
                 Agendar Mi Sesión VIP
               </a>
             </div>
          </div>
        </div>
      </section>
      
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
