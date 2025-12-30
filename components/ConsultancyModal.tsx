
import React, { useState } from 'react';

interface ConsultancyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConsultancyModal: React.FC<ConsultancyModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'facial',
    comments: ''
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const FORMSPREE_ID = "mqakpnvb"; 

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          _subject: `NUEVA CONSULTORÍA VIP: ${formData.name}`,
          to: "juanmtena1985@gmail.com",
          ...formData,
          _message: `Interés: ${formData.interest}\nComentarios: ${formData.comments}`
        })
      });

      if (response.ok) {
        setIsSent(true);
      } else {
        throw new Error("Error en el envío");
      }
    } catch (err) {
      setError("Lo sentimos, hubo un problema al procesar su solicitud. Inténtelo de nuevo o contacte vía WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[700] flex items-center justify-center p-4 md:p-8 animate-[fadeIn_0.5s_ease-out]">
      <div className="absolute inset-0 bg-black/98 backdrop-blur-3xl" onClick={onClose}></div>
      
      <div className="relative w-full max-w-4xl bg-luxuryBlack border border-gold/30 shadow-[0_0_80px_rgba(212,175,55,0.1)] overflow-hidden flex flex-col md:flex-row max-h-[90vh]">
        <div className="hidden md:block w-1/3 relative overflow-hidden border-r border-gold/10">
          <img 
            src="https://images.unsplash.com/photo-1544161515-4af6b1d462c2?q=80&w=1000&auto=format&fit=crop" 
            className="h-full object-cover grayscale opacity-50" 
            alt="Private consultancy luxury" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-luxuryBlack via-transparent to-transparent"></div>
          <div className="absolute bottom-10 left-8 right-4 text-white">
            <span className="text-gold text-[10px] uppercase tracking-[0.4em] mb-4 block">Exclusividad</span>
            <p className="font-serif italic text-xl leading-snug">"Su belleza merece un plan maestro."</p>
          </div>
        </div>

        <div className="flex-1 p-8 md:p-16 overflow-y-auto no-scrollbar">
          {!isSent ? (
            <>
              <div className="flex justify-between items-start mb-12">
                <div>
                  <h2 className="text-3xl md:text-5xl font-serif text-white mb-2 italic">Consultoría Privada</h2>
                  <p className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold">Reserva de Asesoramiento VIP</p>
                </div>
                <button onClick={onClose} className="text-white/40 hover:text-gold transition-colors">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>

              {error && <p className="mb-6 text-red-400 text-xs uppercase tracking-widest">{error}</p>}

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] text-gold uppercase tracking-widest font-bold">Su Nombre</label>
                    <input required type="text" className="w-full bg-white/[0.02] border-b border-gold/20 p-4 text-white focus:border-gold outline-none transition-all" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] text-gold uppercase tracking-widest font-bold">Teléfono</label>
                    <input required type="tel" className="w-full bg-white/[0.02] border-b border-gold/20 p-4 text-white focus:border-gold outline-none transition-all" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] text-gold uppercase tracking-widest font-bold">Email</label>
                  <input required type="email" className="w-full bg-white/[0.02] border-b border-gold/20 p-4 text-white focus:border-gold outline-none transition-all" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] text-gold uppercase tracking-widest font-bold">Interés</label>
                  <select className="w-full bg-white/[0.02] border-b border-gold/20 p-4 text-white focus:border-gold outline-none transition-all" value={formData.interest} onChange={(e) => setFormData({...formData, interest: e.target.value})}>
                    <option value="facial" className="bg-luxuryBlack">Facial de Autor</option>
                    <option value="laser" className="bg-luxuryBlack">Láser de Alta Gama</option>
                    <option value="corporal" className="bg-luxuryBlack">Remodelación Corporal</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] text-gold uppercase tracking-widest font-bold">Comentarios</label>
                  <textarea className="w-full bg-white/[0.02] border border-gold/10 p-4 text-white focus:border-gold outline-none h-24 resize-none" value={formData.comments} onChange={(e) => setFormData({...formData, comments: e.target.value})}></textarea>
                </div>

                <button disabled={isSubmitting} className="w-full py-6 bg-gold text-luxuryBlack uppercase text-[10px] font-bold tracking-[0.5em] hover:bg-white transition-all disabled:opacity-50">
                  {isSubmitting ? 'Procesando...' : 'Solicitar Encuentro Privado'}
                </button>
              </form>
            </>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-20 h-20 border border-gold rounded-full flex items-center justify-center mb-10">
                <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="text-3xl font-serif text-white mb-6">Solicitud Enviada.</h3>
              <div className="text-gray-400 text-sm italic leading-relaxed space-y-4 text-left border-l border-gold/30 pl-6 max-w-lg mx-auto">
                <p><strong>Confirmación enviada a su correo:</strong></p>
                <p>"Estimada/o {formData.name.split(' ')[0]}, es un placer saludarle desde PRUEBA. Agradecemos su interés en nuestra Consultoría Privada. Nuestro equipo de Concierge revisará su mensaje y le contactará en menos de 24h para coordinar su cita exclusiva. Gracias por elegir nuestra visión de la belleza."</p>
              </div>
              <button onClick={onClose} className="mt-12 px-12 py-4 border border-gold/30 text-gold uppercase text-[10px] font-bold tracking-[0.4em] hover:bg-gold hover:text-luxuryBlack transition-all">Cerrar</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConsultancyModal;
