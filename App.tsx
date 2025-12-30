
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SignatureService from './components/SignatureService';
import SkinTest from './components/SkinTest';
import SocialTestimonials from './components/SocialTestimonials';
import WhatsAppConcierge from './components/WhatsAppConcierge';
import Footer from './components/Footer';
import TreatmentsModal from './components/TreatmentsModal';
import TreatmentDetailView from './components/TreatmentDetailView';
import PhilosophyDetailView from './components/PhilosophyDetailView';
import SkinTestModal from './components/SkinTestModal';
import ConsultancyModal from './components/ConsultancyModal';

// @ts-ignore
import AOS from 'aos';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isTreatmentsOpen, setIsTreatmentsOpen] = useState(false);
  const [isPhilosophyOpen, setIsPhilosophyOpen] = useState(false);
  const [isSkinTestOpen, setIsSkinTestOpen] = useState(false);
  const [isConsultancyOpen, setIsConsultancyOpen] = useState(false);
  const [activeTreatment, setActiveTreatment] = useState<any>(null);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      mirror: true,
    });
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const openTreatments = () => {
    setIsTreatmentsOpen(true);
    setIsPhilosophyOpen(false);
    setIsSkinTestOpen(false);
    setIsConsultancyOpen(false);
    setActiveTreatment(null);
  };
  
  const closeTreatments = () => setIsTreatmentsOpen(false);

  const openPhilosophy = () => {
    setIsPhilosophyOpen(true);
    setIsTreatmentsOpen(false);
    setIsSkinTestOpen(false);
    setIsConsultancyOpen(false);
    setActiveTreatment(null);
  };

  const openSkinTest = () => {
    setIsSkinTestOpen(true);
    setIsTreatmentsOpen(false);
    setIsPhilosophyOpen(false);
    setIsConsultancyOpen(false);
    setActiveTreatment(null);
  };

  const openConsultancy = () => {
    setIsConsultancyOpen(true);
    setIsSkinTestOpen(false);
    setIsTreatmentsOpen(false);
    setIsPhilosophyOpen(false);
    setActiveTreatment(null);
  };

  const selectTreatment = (treatment: any) => {
    setActiveTreatment(treatment);
    setIsTreatmentsOpen(false);
    setIsPhilosophyOpen(false);
    setIsSkinTestOpen(false);
    setIsConsultancyOpen(false);
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-luxuryBlack flex flex-col items-center justify-center z-[9999]">
        <h1 className="font-serif text-gold text-5xl mb-4 tracking-widest animate-pulse">PRUEBA</h1>
        <div className="w-48 h-[1px] bg-gold/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-gold w-1/3 animate-[loading_1.5s_infinite_linear]"></div>
        </div>
        <style>{`
          @keyframes loading {
            0% { left: -33%; }
            100% { left: 100%; }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="relative overflow-x-hidden font-sans bg-luxuryBlack text-luxuryCream">
      <Navbar 
        onOpenTreatments={openTreatments} 
        onSelectTreatment={selectTreatment} 
        onOpenPhilosophy={openPhilosophy}
        onOpenSkinTest={openSkinTest}
      />
      <Hero 
        onOpenTreatments={openTreatments} 
        onOpenConsultancy={openConsultancy}
      />
      
      <main>
        <SignatureService />
        <section id="filosofia" className="py-24 px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative cursor-pointer group" data-aos="fade-right" onClick={openPhilosophy}>
            <div className="absolute -top-10 -left-10 w-40 h-40 border border-gold/20 hidden md:block transition-transform duration-700 group-hover:scale-110"></div>
            <img 
              src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1200&auto=format&fit=crop" 
              alt="Professional aesthetician luxury clinic" 
              className="w-full h-[600px] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out"
            />
            <div className="absolute inset-0 bg-luxuryBlack/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
               <span className="px-8 py-3 bg-gold text-luxuryBlack uppercase text-[10px] tracking-[0.4em] font-bold">Ver Nuestra Esencia</span>
            </div>
            <div className="absolute bottom-10 -right-10 bg-luxuryBlack p-8 border border-gold max-w-sm hidden md:block" data-aos="zoom-in" data-aos-delay="400">
              <p className="font-serif italic text-gold text-lg">"La belleza no es un destino, es un ritual de autocuidado que eleva el alma."</p>
            </div>
          </div>
          <div data-aos="fade-left">
            <span className="text-gold uppercase tracking-[0.3em] text-xs mb-4 block font-bold">Nuestra Filosofía</span>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">Ciencia <br /><span className="italic">con Alma.</span></h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl">
              En PRUEBA, fusionamos la tecnología dermatológica más avanzada con rituales sensoriales que transportan. Cada tratamiento es una obra maestra diseñada para resaltar la perfección natural que ya reside en ti.
            </p>
            <button 
              onClick={openPhilosophy}
              className="mb-12 text-gold uppercase tracking-[0.4em] text-[10px] border-b border-gold/40 pb-2 hover:border-gold transition-all font-bold"
            >
              Descubrir Nuestra Historia —
            </button>
            <div className="flex gap-12">
              <div>
                <p className="text-3xl font-serif text-gold">15+</p>
                <p className="text-xs uppercase tracking-widest text-gray-500 font-medium">Años de Expertiz</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-gold">5k+</p>
                <p className="text-xs uppercase tracking-widest text-gray-500 font-medium">Pieles Transformadas</p>
              </div>
            </div>
          </div>
        </section>
        
        <SkinTest onOpen={openSkinTest} />
        <SocialTestimonials />
      </main>

      <Footer />
      <WhatsAppConcierge />

      <TreatmentsModal 
        isOpen={isTreatmentsOpen} 
        onClose={closeTreatments} 
        onSelectTreatment={selectTreatment}
      />
      
      {activeTreatment && (
        <TreatmentDetailView 
          treatment={activeTreatment} 
          onClose={() => setActiveTreatment(null)} 
        />
      )}

      {isPhilosophyOpen && (
        <PhilosophyDetailView 
          onClose={() => setIsPhilosophyOpen(false)} 
        />
      )}

      <SkinTestModal 
        isOpen={isSkinTestOpen} 
        onClose={() => setIsSkinTestOpen(false)} 
      />

      <ConsultancyModal 
        isOpen={isConsultancyOpen}
        onClose={() => setIsConsultancyOpen(false)}
      />
    </div>
  );
};

export default App;
