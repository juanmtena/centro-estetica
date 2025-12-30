
import React from 'react';

interface HeroProps {
  onOpenTreatments: () => void;
  onOpenConsultancy: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenTreatments, onOpenConsultancy }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Dark Luxury Filter */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/90 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=2000&auto=format&fit=crop" 
          alt="Luxury beauty spa interior black gold" 
          className="w-full h-full object-cover scale-110 animate-[zoom_20s_infinite_alternate]"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl" data-aos="zoom-in">
        <span className="text-gold uppercase tracking-[0.5em] text-xs md:text-sm mb-6 block font-medium animate-pulse">Bienvenidos a la exclusividad</span>
        <h1 className="text-6xl md:text-9xl font-serif text-white mb-8 leading-none">
          La Excelencia <br /> <span className="italic gold-text-gradient">de tu Piel.</span>
        </h1>
        <p className="text-luxuryCream/70 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
          Descubre el santuario donde la estética de vanguardia se encuentra con el lujo más absoluto en el corazón de la ciudad.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={onOpenTreatments}
            className="group relative px-10 py-4 overflow-hidden border border-gold transition-all duration-500"
          >
            <span className="relative z-10 text-gold group-hover:text-luxuryBlack uppercase tracking-[0.3em] text-xs font-bold">Explorar Experiencias</span>
            <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          </button>
          <button 
            onClick={onOpenConsultancy}
            className="text-white/60 hover:text-white uppercase tracking-[0.3em] text-xs border-b border-white/20 hover:border-white transition-all duration-300 pb-1"
          >
            Consultoría Privada
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50">
        <div className="w-[1px] h-16 bg-gradient-to-b from-gold to-transparent"></div>
      </div>

      <style>{`
        @keyframes zoom {
          from { transform: scale(1); }
          to { transform: scale(1.15); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
