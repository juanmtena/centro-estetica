
import React from 'react';

interface SkinTestProps {
  onOpen: () => void;
}

const SkinTest: React.FC<SkinTestProps> = ({ onOpen }) => {
  return (
    <section id="skin-test" className="py-24 bg-white text-luxuryBlack relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <span className="text-gold uppercase tracking-[0.4em] text-xs mb-6 block font-bold">Diagnóstico de Precisión</span>
            <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">Conoce el <span className="italic">Lenguaje</span> de tu Piel.</h2>
            <p className="text-gray-500 text-lg mb-10 leading-relaxed font-light">
              No todos los tratamientos son aptos para todos los fototipos. Nuestro algoritmo inteligente analiza tu salud cutánea para sugerir rituales seguros y eficaces, incluyendo protocolos de depilación láser médica.
            </p>
            <button 
              onClick={onOpen}
              className="group flex items-center gap-6 px-10 py-5 bg-luxuryBlack text-white hover:bg-gold transition-all duration-500 shadow-2xl shadow-black/20 overflow-hidden relative"
            >
              <span className="relative z-10 uppercase tracking-[0.4em] text-xs font-bold group-hover:text-luxuryBlack">Iniciar Diagnóstico Digital</span>
              <svg className="w-5 h-5 relative z-10 group-hover:text-luxuryBlack transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          <div className="relative" data-aos="zoom-in">
             <div className="relative z-10 border border-gold/20 p-4 bg-white shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1200&auto=format&fit=crop" 
                  alt="Professional high-end aesthetic technology" 
                  className="w-full h-[550px] object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
             </div>
             {/* Float Elements */}
             <div className="absolute -top-10 -left-10 w-32 h-32 border border-gold/10 hidden md:block"></div>
             <div className="absolute -bottom-6 -right-6 bg-gold p-8 text-luxuryBlack shadow-xl hidden md:block" data-aos="fade-up" data-aos-delay="400">
               <p className="text-[10px] uppercase tracking-widest font-bold mb-2">Seguridad Láser</p>
               <p className="font-serif italic text-lg leading-tight">Análisis de <br />Fototipo Avanzado.</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkinTest;
