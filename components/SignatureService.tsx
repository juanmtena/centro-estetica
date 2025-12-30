
import React from 'react';

const SignatureService: React.FC = () => {
  return (
    <section id="servicios" className="py-24 bg-luxuryBlack relative overflow-hidden">
      {/* Editorial Decorative Text */}
      <div className="absolute top-0 left-0 text-[15vw] font-serif text-white/[0.03] select-none leading-none -translate-x-10 translate-y-10">
        SIGNATURE
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="w-full" data-aos="fade-right">
            <div className="relative p-2 border border-gold/40 group overflow-hidden shadow-2xl shadow-gold/5">
              <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <img 
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1200&auto=format&fit=crop" 
                alt="Luxury gold skin treatment face" 
                className="w-full h-[700px] object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Highlight Overlay */}
              <div className="absolute inset-0 border-[20px] border-luxuryBlack opacity-40"></div>
            </div>
          </div>

          <div className="w-full" data-aos="fade-left">
            <span className="text-gold tracking-[0.5em] text-xs uppercase mb-6 block font-bold">Ritual de Culto</span>
            <h2 className="text-5xl md:text-8xl font-serif text-white mb-8 leading-[1.05]">
              The Gold <br /><span className="italic gold-text-gradient">Nectar</span>
            </h2>
            <div className="w-32 h-[1px] bg-gold/50 mb-10"></div>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 font-light italic">
              "Inspirado en los secretos de la realeza antigua y perfeccionado con biotecnología celular. Este tratamiento insignia utiliza partículas de oro de 24k para regenerar y esculpir la dermis."
            </p>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-12">
              {[
                "Biotecnología celular",
                "Lifting inmediato",
                "Luminosidad 24k",
                "Drenaje sensorial",
                "Seda pura",
                "Protocolo médico"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold/30 group-hover:bg-gold transition-colors duration-500"></div>
                  <span className="text-luxuryCream/70 text-[10px] uppercase tracking-[0.2em] group-hover:text-white transition-colors">{item}</span>
                </li>
              ))}
            </ul>

            <a 
              href="https://wa.me/34000000000?text=Hola,%20deseo%20agendar%20una%20cita%20VIP%20para%20el%20ritual%20The%20Gold%20Nectar." 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block w-full md:w-auto px-16 py-5 bg-transparent border border-gold text-gold hover:bg-gold hover:text-luxuryBlack transition-all duration-700 font-bold uppercase tracking-[0.4em] text-[10px] shadow-lg shadow-gold/5 text-center"
            >
              Agendar Ritual — 450€
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignatureService;
