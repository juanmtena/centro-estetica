
import React, { useState } from 'react';

const testimonials = [
  { id: 1, name: "Valeria M.", role: "Modelo", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&h=300&auto=format&fit=crop", review: "El ritual de oro me dejó la piel lista para la Fashion Week. Increíble la luminosidad inmediata que logran. Un must en mi rutina." },
  { id: 2, name: "Julián R.", role: "Empresario", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&h=300&auto=format&fit=crop", review: "Buscaba discreción y resultados reales. PRUEBA es el único centro en Madrid que entiende el verdadero lujo silencioso." },
  { id: 3, name: "Elena S.", role: "Editora de Moda", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&h=300&auto=format&fit=crop", review: "Un oasis de paz absoluto. La atención personalizada y el nivel de detalle en cada protocolo es simplemente sublime." },
  { id: 4, name: "Marta P.", role: "Influencer", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300&h=300&auto=format&fit=crop", review: "Mi piel nunca brilló tanto. Los protocolos avanzados son de otro planeta. Mi lugar de confianza para cada evento." },
  { id: 5, name: "Carlos L.", role: "Arquitecto", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&h=300&auto=format&fit=crop", review: "Diseño, arte y belleza unidos. No es solo estética, es una experiencia arquitectónica para la piel que redefine el bienestar." },
];

const SocialTestimonials: React.FC = () => {
  const [activeStory, setActiveStory] = useState<typeof testimonials[0] | null>(null);

  return (
    <section id="testimonios" className="py-24 bg-luxuryBlack overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div data-aos="fade-right">
            <span className="text-gold tracking-[0.4em] text-xs uppercase mb-4 block">Experiencias Reales</span>
            <h2 className="text-4xl md:text-6xl font-serif text-white italic">PRUEBA Society.</h2>
          </div>
          <div className="text-right hidden md:block" data-aos="fade-left">
            <p className="text-gray-500 uppercase tracking-widest text-[10px]">Pasa el ratón o pulsa para leer el testimonio</p>
          </div>
        </div>

        {/* Stories Slider container */}
        <div className="flex gap-10 overflow-x-auto pb-10 scrollbar-hide no-scrollbar snap-x cursor-grab active:cursor-grabbing">
          {testimonials.map((t) => (
            <div 
              key={t.id} 
              className="flex-none snap-center group cursor-pointer relative" 
              onClick={() => setActiveStory(t)}
              data-aos="fade-up" 
              data-aos-delay={t.id * 100}
            >
              <div className="flex flex-col items-center">
                <div className="relative w-32 h-32 md:w-44 md:h-44 p-1.5 rounded-full gold-story-border mb-6 transition-all duration-500 group-hover:scale-105 shadow-xl shadow-gold/10">
                  <div className="w-full h-full rounded-full border-[6px] border-luxuryBlack overflow-hidden relative">
                    <img 
                      src={t.img} 
                      alt={t.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                    />
                    {/* Hover Overlay Message (Muestra el mensaje al pasar el ratón o pulsar) */}
                    <div className="absolute inset-0 bg-gold/95 flex flex-col items-center justify-center p-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <p className="text-luxuryBlack text-[10px] md:text-xs font-bold leading-tight uppercase tracking-tighter line-clamp-4 px-2">
                        "{t.review}"
                      </p>
                      <span className="mt-2 text-[8px] md:text-[10px] border-t border-luxuryBlack/20 pt-1 font-bold">Ver historia</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-white font-serif text-lg tracking-wide group-hover:text-gold transition-colors">{t.name}</p>
                  <p className="text-gold text-[10px] uppercase tracking-[0.2em] opacity-60 group-hover:opacity-100 transition-opacity">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial Modal (Pantalla completa al pulsar) */}
      {activeStory && (
        <div className="fixed inset-0 z-[100] bg-black/98 backdrop-blur-2xl flex items-center justify-center p-4" onClick={() => setActiveStory(null)}>
          <button 
            className="absolute top-6 right-6 md:top-10 md:right-10 text-white hover:text-gold transition-colors z-[110]"
            onClick={(e) => { e.stopPropagation(); setActiveStory(null); }}
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="max-w-md w-full animate-[fadeInStory_0.5s_ease-out]" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-[9/16] bg-luxuryBlack border border-gold/40 rounded-3xl overflow-hidden shadow-2xl shadow-gold/20">
              <img src={activeStory.img} className="w-full h-full object-cover opacity-60" alt="" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20"></div>
              
              <div className="absolute top-10 left-8 flex items-center gap-4">
                <div className="w-14 h-14 p-0.5 gold-story-border rounded-full">
                  <img src={activeStory.img} className="w-full h-full rounded-full object-cover border-2 border-black" alt="" />
                </div>
                <div>
                  <p className="text-white font-serif text-2xl tracking-wide">{activeStory.name}</p>
                  <p className="text-gold text-[11px] uppercase tracking-[0.3em] font-bold">{activeStory.role}</p>
                </div>
              </div>

              <div className="absolute bottom-20 left-10 right-10 text-center">
                 <div className="flex gap-1.5 justify-center mb-10">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-gold fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                    ))}
                  </div>
                <p className="text-white text-3xl font-serif italic leading-relaxed mb-8">
                  "{activeStory.review}"
                </p>
                <button 
                  onClick={() => setActiveStory(null)}
                  className="px-8 py-3 border border-gold/30 text-gold text-[10px] uppercase tracking-[0.4em] hover:bg-gold hover:text-luxuryBlack transition-all"
                >
                  Cerrar Historia
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeInStory {
          from { opacity: 0; transform: scale(0.9) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default SocialTestimonials;
