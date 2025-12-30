
import React from 'react';

interface PhilosophyDetailViewProps {
  onClose: () => void;
}

const PhilosophyDetailView: React.FC<PhilosophyDetailViewProps> = ({ onClose }) => {
  const whatsappUrl = "https://wa.me/34000000000?text=Hola,%20deseo%20agendar%20una%20experiencia%20VIP%20en%20PRUEBA.";

  return (
    <div className="fixed inset-0 z-[400] bg-luxuryBlack overflow-y-auto animate-[fadeIn_0.6s_ease-out] overscroll-none">
      {/* Adjusted Close Button Position */}
      <div className="fixed top-[calc(1rem+env(safe-area-inset-top))] right-[calc(1rem+env(safe-area-inset-right))] z-[410]">
        <button 
          onClick={onClose} 
          className="group flex items-center gap-4 text-gold p-3 md:p-4 bg-luxuryBlack/80 backdrop-blur-xl border border-gold/30 rounded-full hover:bg-gold hover:text-luxuryBlack transition-all duration-500 shadow-2xl"
        >
          <span className="uppercase text-[10px] tracking-[0.3em] font-bold hidden sm:inline">Cerrar</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative h-[80vh] md:h-[90vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=2000&auto=format&fit=crop" 
          className="absolute inset-0 w-full h-full object-cover scale-105 opacity-40 grayscale" 
          alt="Luxury spa philosophy" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-luxuryBlack"></div>
        <div className="relative z-10 text-center px-6 max-w-6xl" data-aos="zoom-out">
          <span className="text-gold tracking-[0.6em] text-[10px] md:text-xs uppercase mb-8 block font-bold">Nuestra Visión Holística</span>
          <h1 className="text-4xl md:text-[10rem] font-serif text-white mb-6 leading-none tracking-tighter">
            Ciencia <br /><span className="italic gold-text-gradient">& Alma.</span>
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-32 px-6 md:px-24 container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-start">
          <div data-aos="fade-right">
            <h2 className="text-gold text-[10px] uppercase tracking-[0.5em] mb-8 md:mb-12 border-b border-gold/20 pb-4 font-bold">La Misión PRUEBA</h2>
            <p className="text-white text-3xl md:text-6xl font-serif italic leading-[1.2] mb-12">
              "Redefinimos la estética como una forma de arte personal."
            </p>
            <div className="space-y-8 text-gray-400 text-base md:text-xl leading-relaxed font-light">
              <p>
                PRUEBA no es solo un centro; es un manifiesto sobre el respeto por el tiempo y la propia imagen. Entendemos que la verdadera sofisticación reside en la sutileza de los resultados.
              </p>
              <p>
                Cada protocolo en nuestro santuario madrileño es una coreografía de activos de grado médico y gestos manuales precisos. Nuestra especialización en tecnología láser y medicina estética avanzada nos sitúa a la vanguardia del sector.
              </p>
            </div>
          </div>

          <div className="relative" data-aos="fade-left">
            <div className="absolute -top-6 md:-top-10 -right-6 md:-right-10 w-full h-full border border-gold/20 -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1200&auto=format&fit=crop" 
              className="w-full h-[500px] md:h-[800px] object-cover border border-gold/10 shadow-2xl"
              alt="Luxury aesthetic clinic detail"
            />
            <div className="absolute -bottom-10 md:-bottom-12 -left-6 md:-left-12 bg-gold p-8 md:p-12 text-luxuryBlack max-w-sm md:max-w-md hidden sm:block shadow-2xl">
              <h3 className="font-serif text-2xl md:text-3xl mb-4 italic">Excelencia Médica</h3>
              <p className="text-xs md:text-sm font-medium uppercase tracking-[0.2em] leading-relaxed">
                Nuestros especialistas fusionan innovación constante con un trato humano impecable.
              </p>
            </div>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 mt-32 md:mt-48">
          {[
            { title: "Pureza", desc: "Formulaciones magistrales con activos de máxima pureza." },
            { title: "Precisión", desc: "Diagnóstico digital y ejecución técnica sin margen de error." },
            { title: "Bienestar", desc: "Entornos de silencio absoluto para una desconexión reparadora." }
          ].map((pillar, i) => (
            <div key={i} className="group p-10 border border-gold/10 hover:border-gold/40 transition-all duration-700 bg-white/[0.01] backdrop-blur-sm" data-aos="fade-up" data-aos-delay={i * 200}>
              <span className="text-gold text-4xl md:text-5xl font-serif mb-6 md:mb-8 block italic opacity-50">0{i+1}</span>
              <h4 className="text-white text-2xl md:text-3xl font-serif mb-4 group-hover:text-gold transition-colors">{pillar.title}</h4>
              <p className="text-gray-500 font-light leading-relaxed text-sm md:text-base">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Call to Action */}
      <section className="py-24 md:py-48 text-center bg-white/[0.03] mt-24">
        <h2 className="text-3xl md:text-7xl font-serif text-white mb-10 md:mb-12 italic tracking-tight" data-aos="zoom-in">Únete a PRUEBA Society.</h2>
        <a 
          href={whatsappUrl} 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-12 md:px-20 py-5 md:py-6 bg-gold text-luxuryBlack uppercase tracking-[0.5em] text-[10px] md:text-xs font-bold hover:bg-white hover:scale-105 transition-all duration-500 shadow-2xl shadow-gold/20"
        >
          Iniciar Mi Ritual
        </a>
      </section>
      
      <div className="h-[env(safe-area-inset-bottom)] bg-luxuryBlack"></div>
    </div>
  );
};

export default PhilosophyDetailView;
