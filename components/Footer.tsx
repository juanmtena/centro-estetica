
import React from 'react';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      url: '#',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      hoverColor: 'hover:text-[#E4405F]'
    },
    {
      name: 'Facebook',
      url: '#',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
        </svg>
      ),
      hoverColor: 'hover:text-[#1877F2]'
    },
    {
      name: 'LinkedIn',
      url: '#',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      hoverColor: 'hover:text-[#0A66C2]'
    }
  ];

  const address = "Paseo de la Castellana, 140, 28046 Madrid, España";
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;

  return (
    <footer id="contacto" className="bg-luxuryBlack border-t border-gold/20 pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          <div className="lg:col-span-1">
            <h2 className="font-serif text-4xl text-white tracking-[0.2em] mb-8">PRUEBA</h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Santuario de belleza y bienestar. Donde cada detalle es una oda a la sofisticación.
            </p>
          </div>

          <div>
            <h4 className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-8">Ubicación</h4>
            <div className="space-y-6">
              <p className="text-gray-400 text-sm leading-relaxed italic">
                {address.split(',').slice(0, 2).join(',')}<br />
                {address.split(',').slice(2).join(',')}
              </p>
              
              {/* Mapa embebido con filtro oscuro personalizado */}
              <div className="w-full h-48 border border-gold/20 overflow-hidden relative group rounded-sm shadow-2xl shadow-gold/5">
                <iframe 
                  title="Ubicación PRUEBA"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.7126131498184!2d-3.6908356!3d40.4594689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228ef3c8d9e9b%3A0xc3f8f906f200c978!2sP.%C2%BA%20de%20la%20Castellana%2C%20140%2C%20Chamart%C3%ADn%2C%2028046%20Madrid!5e0!3m2!1ses!2ses!4v1709123456789!5m2!1ses!2ses" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(110%) grayscale(0.5)' }} 
                  allowFullScreen={false} 
                  loading="lazy"
                ></iframe>
                <div className="absolute inset-0 bg-luxuryBlack/20 group-hover:bg-transparent transition-all pointer-events-none"></div>
                
                {/* Botón flotante GPS sobre el mapa para mayor impacto visual */}
                <a 
                  href={googleMapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 bg-gold text-luxuryBlack p-3 rounded-full shadow-xl hover:scale-110 transition-transform active:scale-95 z-20"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </a>
              </div>

              <a 
                href={googleMapsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-4 w-full py-4 border border-gold/30 bg-gold/5 text-gold uppercase tracking-[0.4em] text-[10px] font-bold hover:bg-gold hover:text-luxuryBlack transition-all"
              >
                Cómo Llegar (GPS) —
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-8">Contacto</h4>
            <div className="space-y-4">
              <p className="text-gray-400 text-sm leading-relaxed">
                concierge@prueba.com<br />
                +34 912 345 678
              </p>
              <div className="pt-4 border-t border-white/5">
                <span className="text-[9px] text-gray-600 uppercase tracking-widest block mb-2">Asistencia VIP</span>
                <p className="text-gray-500 text-[11px] italic leading-relaxed">Personal concierge disponible 24/7 para miembros de PRUEBA Society.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h4 className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-8">Horario</h4>
              <p className="text-gray-400 text-sm leading-relaxed uppercase tracking-tighter">
                Lunes - Viernes: 09:00 - 20:00<br />
                Sábados: 10:00 - 14:00
              </p>
            </div>
            
            <div className="flex gap-6 items-center justify-end mt-12 lg:mt-0">
              {socialLinks.map((social) => (
                <a 
                  key={social.name} 
                  href={social.url} 
                  aria-label={social.name}
                  className={`text-gold ${social.hoverColor} transition-all duration-500 transform hover:scale-110 active:scale-95`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6">
          <p className="text-[10px] text-gray-600 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} PRUEBA Estética. All Rights Reserved.
          </p>
          <div className="flex gap-4">
             <span className="text-[9px] text-gray-700 uppercase tracking-widest">Madrid • Paris • London</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
