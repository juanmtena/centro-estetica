
import React, { useState, useEffect } from 'react';
import { treatmentsData } from '../data/treatments';

interface NavbarProps {
  onOpenTreatments: () => void;
  onSelectTreatment: (treatment: any) => void;
  onOpenPhilosophy: () => void;
  onOpenSkinTest: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenTreatments, onSelectTreatment, onOpenPhilosophy, onOpenSkinTest }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
  const [activeMobileCategory, setActiveMobileCategory] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileCategory = (index: number) => {
    setActiveMobileCategory(activeMobileCategory === index ? null : index);
  };

  const whatsappUrl = "https://wa.me/34000000000?text=Hola,%20deseo%20agendar%20una%20cita%20VIP%20en%20PRUEBA.";

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${isScrolled ? 'bg-luxuryBlack/95 backdrop-blur-md py-4 shadow-2xl shadow-gold/5' : 'bg-transparent py-8'} pt-[max(1rem,env(safe-area-inset-top))]`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="/" className="font-serif text-2xl md:text-3xl tracking-[0.2em] text-white hover:text-gold transition-colors">
          PRUEBA
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-12 items-center">
          <div 
            className="relative h-full py-2"
            onMouseEnter={() => setIsDesktopDropdownOpen(true)}
            onMouseLeave={() => setIsDesktopDropdownOpen(false)}
          >
            <button 
              onClick={onOpenTreatments}
              className="text-xs uppercase tracking-[0.2em] font-medium hover:text-gold transition-colors flex items-center gap-2"
            >
              Tratamientos
              <svg className={`w-3 h-3 transition-transform duration-300 ${isDesktopDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Mega Dropdown Desktop */}
            <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[850px] bg-luxuryBlack border border-gold/20 p-10 grid grid-cols-3 gap-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.9)] transition-all duration-500 origin-top ${isDesktopDropdownOpen ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-95'}`}>
              {treatmentsData.map((cat, idx) => (
                <div key={idx}>
                  <p className="text-gold text-[10px] uppercase tracking-[0.3em] mb-6 font-bold border-b border-gold/20 pb-2">{cat.title}</p>
                  <ul className="space-y-4">
                    {cat.items.map((item, i) => (
                      <li key={i}>
                        <button 
                          onClick={() => { onSelectTreatment(item); setIsDesktopDropdownOpen(false); }}
                          className="group flex flex-col items-start transition-colors"
                        >
                          <span className="text-white/60 group-hover:text-gold text-[11px] uppercase tracking-widest transition-colors font-medium">{item.name}</span>
                          <span className="text-[9px] text-gray-500 uppercase tracking-tighter group-hover:text-white/40 transition-colors line-clamp-1">{item.desc}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="col-span-3 pt-6 mt-4 border-t border-gold/10 text-center">
                <button onClick={() => { onOpenTreatments(); setIsDesktopDropdownOpen(false); }} className="text-[10px] text-gold uppercase tracking-[0.4em] font-bold hover:underline">Ver catálogo completo</button>
              </div>
            </div>
          </div>

          <button onClick={onOpenPhilosophy} className="text-xs uppercase tracking-[0.2em] font-medium hover:text-gold transition-colors">Filosofía</button>
          <button onClick={onOpenSkinTest} className="text-xs uppercase tracking-[0.2em] font-medium hover:text-gold transition-colors">Test Piel</button>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="px-8 py-2.5 bg-gold/10 border border-gold text-gold text-xs uppercase tracking-[0.2em] hover:bg-gold hover:text-luxuryBlack transition-all duration-300 font-bold">
            Cita VIP
          </a>
        </div>

        {/* Mobile/Tablet Toggle */}
        <button className="lg:hidden text-white p-2" onClick={() => setIsMobileOpen(!isMobileOpen)}>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d={isMobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-luxuryBlack z-[60] transition-transform duration-700 ease-in-out ${isMobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full p-8 md:p-16 overflow-y-auto pt-[max(4rem,calc(2rem+env(safe-area-inset-top)))] pb-[env(safe-area-inset-bottom)]">
          <div className="flex justify-between items-center mb-16">
            <span className="font-serif text-3xl text-white tracking-[0.2em]">PRUEBA</span>
            <button className="text-gold p-2" onClick={() => setIsMobileOpen(false)}>
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12" />
              </svg> 
            </button>
          </div>
          
          <div className="flex flex-col gap-8 text-center md:text-left">
            <div>
              <button 
                onClick={() => toggleMobileCategory(-1)}
                className="w-full flex justify-between items-center text-left font-serif text-4xl text-white border-b border-white/10 pb-4"
              >
                <span>Tratamientos</span>
                <svg className={`w-6 h-6 text-gold transition-transform duration-300 ${activeMobileCategory === -1 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className={`overflow-hidden transition-all duration-500 ${activeMobileCategory === -1 ? 'max-h-[1000px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                {treatmentsData.map((cat, idx) => (
                  <div key={idx} className="mb-8 pl-4 border-l border-gold/30">
                    <p className="text-gold text-[10px] uppercase tracking-[0.3em] font-bold mb-4">{cat.title}</p>
                    <ul className="flex flex-col gap-4">
                      {cat.items.map((item, i) => (
                        <li key={i}>
                          <button 
                            onClick={() => { onSelectTreatment(item); setIsMobileOpen(false); }}
                            className="text-white/70 hover:text-white text-lg font-light uppercase tracking-widest text-left"
                          >
                            {item.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <button onClick={() => { onOpenPhilosophy(); setIsMobileOpen(false); }} className="w-full text-left font-serif text-4xl text-white border-b border-white/10 pb-4">Filosofía</button>
            <button onClick={() => { onOpenSkinTest(); setIsMobileOpen(false); }} className="w-full text-left font-serif text-4xl text-white border-b border-white/10 pb-4">Test Piel</button>
            
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-8 px-10 py-5 bg-gold text-luxuryBlack text-center text-xl font-serif uppercase tracking-widest shadow-xl shadow-gold/20" onClick={() => setIsMobileOpen(false)}>
              Reservar Cita VIP
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
