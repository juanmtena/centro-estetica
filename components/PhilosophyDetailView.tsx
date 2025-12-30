
import React from 'react';

interface PhilosophyDetailViewProps {
  onClose: () => void;
}

const PhilosophyDetailView: React.FC<PhilosophyDetailViewProps> = ({ onClose }) => {
  const whatsappUrl = "https://wa.me/34000000000?text=Hola,%20deseo%20agendar%20una%20experiencia%20VIP%20en%20PRUEBA.";

  return (
    <div className="fixed inset-0 z-[400] bg-luxuryBlack overflow-y-auto animate-[fadeIn_0.6s_ease-out]">
      {/* Header Overlay */}
      <div className="fixed top-6 right-6 md:top-10 md:right-10 z-[410]">
        <button onClick={onClose} className="group flex items-center gap-4 text-gold p-4 bg-luxuryBlack/50 backdrop-blur-md border border-gold/20 rounded-full hover:bg-gold hover:text-luxuryBlack transition-all duration-500">
          <span className="uppercase text-[10px] tracking-[0.3em] font-bold">Cerrar</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=2000&auto=format&fit=crop" 
          className="absolute inset-0 w-full h-full object-cover scale-105 opacity-60 grayscale" 
          alt="Luxury spa philosophy" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-luxuryBlack"></div>
        <div className="relative z-10 text-center px-6 max-w-5xl" data-aos="zoom-out">
          <span className="text-gold tracking-[0.6em] text-xs uppercase mb-8 block">Nuestros Cimientos</span>
          <h1 className="text-6xl md:text-[10rem] font-serif text-white mb-6 leading-none tracking-tighter">
            Ciencia <br /><span className="italic gold-text-gradient">& Alma.</span>
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-6 md:px-24 container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div data-aos="fade-right">
            <h2 className="text-gold text-xs uppercase tracking-[0.5em] mb-12 border-b border-gold/20 pb-4 font-bold">La Misión PRUEBA</h2>
            <p className="text-white text-3xl md:text-5xl font-serif italic leading-[1.3] mb-12">
              "Creemos que la belleza no es una meta, sino un estado de armonía entre el cuerpo y el espíritu."
            </p>
            <div className="space-y-8 text-gray-400 text-lg leading-relaxed font-light">
              <p>
                PRUEBA nació bajo la premisa de que el cuidado de la piel debe ser tratado como un arte. No buscamos solo resultados estéticos; buscamos una transformación que empiece en la salud celular y culmine en una confianza inquebrantable.
              </p>
              <p>
                Cada protocolo que desarrollamos en nuestro santuario de Madrid es el resultado de años de investigación dermatológica combinada con técnicas milenarias de relajación. Seleccionamos solo los activos más puros del mundo: desde oro de 24k hasta seda japonesa.
              </p>
            </div>
          </div>

          <div className="relative" data-aos="fade-left">
            <div className="absolute -top-10 -right-10 w-full h-full border border-gold/10 -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1200&auto=format&fit=crop" 
              className="w-full h-[800px] object-cover border border-gold/20"
              alt="Luxury aesthetic clinic detail"
            />
            <div className="absolute -bottom-12 -left-12 bg-gold p-12 text-luxuryBlack max-w-md hidden md:block">
              <h3 className="font-serif text-3xl mb-4 italic">Excelencia Médica</h3>
              <p className="text-sm font-medium uppercase tracking-widest leading-relaxed">
                Nuestros especialistas viajan por el mundo para traer las últimas innovaciones tecnológicas a PRUEBA.
              </p>
            </div>
          </div>
        </div>

        {/* Triple Pillar Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-48">
          {[
            { title: "Pureza", desc: "Ingredientes de grado médico sin compromisos." },
            { title: "Precisión", desc: "Tecnología de última generación para resultados medibles." },
            { title: "Paz", desc: "Un entorno diseñado para el silencio y la desconexión total." }
          ].map((pillar, i) => (
            <div key={i} className="group p-12 border border-gold/10 hover:border-gold transition-all duration-700 bg-gold/[0.02]" data-aos="fade-up" data-aos-delay={i * 200}>
              <span className="text-gold text-5xl font-serif mb-8 block italic">0{i+1}.</span>
              <h4 className="text-white text-3xl font-serif mb-6 group-hover:text-gold transition-colors">{pillar.title}</h4>
              <p className="text-gray-500 font-light leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-48 text-center bg-white/5 mt-24">
        <h2 className="text-4xl md:text-7xl font-serif text-white mb-12 italic" data-aos="zoom-in">Únete a la PRUEBA Society.</h2>
        <a 
          href={whatsappUrl} 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-16 py-6 bg-gold text-luxuryBlack uppercase tracking-[0.5em] text-xs font-bold hover:bg-white transition-all duration-500 shadow-2xl shadow-gold/20"
        >
          Reserva Tu Experiencia
        </a>
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

export default PhilosophyDetailView;
