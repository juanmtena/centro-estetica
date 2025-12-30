
import React, { useState } from 'react';

interface SkinTestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const questions = [
  {
    id: 1,
    category: "Prioridad",
    question: "¿Cuál es el objetivo principal de su visita a PRUEBA?",
    options: [
      { label: "Rejuvenecimiento y Lifting", value: "facial" },
      { label: "Depilación Láser Definitiva", value: "laser" },
      { label: "Remodelación y Contorno Corporal", value: "corporal" },
      { label: "Tratamiento de Manchas / Acné", value: "facial_med" }
    ]
  },
  {
    id: 2,
    category: "Fototipo ( Fitzpatrick )",
    question: "¿Cómo reacciona su piel habitualmente ante el sol?",
    options: [
      { label: "Siempre se quema (Piel muy clara)", value: "f1" },
      { label: "Se quema fácilmente", value: "f2" },
      { label: "Bronceado gradual", value: "f3" },
      { label: "Rara vez se quema (Piel morena)", value: "f4" }
    ]
  },
  {
    id: 3,
    category: "Análisis de Vello",
    question: "¿Cómo describiría el vello en la zona a tratar?",
    options: [
      { label: "Oscuro y grueso", value: "l_ideal" },
      { label: "Medio / Castaño", value: "l_medio" },
      { label: "Fino / Claro", value: "l_diff" },
      { label: "No busco láser ahora", value: "no_laser" }
    ]
  },
  {
    id: 4,
    category: "Estado de la Dermis",
    question: "¿Qué sensación describe mejor su piel hoy?",
    options: [
      { label: "Tirantez y sequedad", value: "seca" },
      { label: "Mixta (Brillos en zona T)", value: "mixta" },
      { label: "Oleosidad y poros", value: "grasa" },
      { label: "Reactividad / Rojez", value: "sensible" }
    ]
  },
  {
    id: 5,
    category: "Signos de Edad",
    question: "¿Qué aspecto desea mejorar con prioridad?",
    options: [
      { label: "Arrugas y líneas", value: "arrugas" },
      { label: "Firmeza y óvalo facial", value: "flacidez" },
      { label: "Luminosidad y vitalidad", value: "opacidad" },
      { label: "Prevención", value: "prevencion" }
    ]
  }
];

const SkinTestModal: React.FC<SkinTestModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<any>({});
  const [isFinished, setIsFinished] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    time: 'mañana'
  });

  if (!isOpen) return null;

  const handleOption = (category: string, value: string) => {
    setAnswers({ ...answers, [category]: value });
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const FORMSPREE_ID = "mqakpnvb"; // Usa tu propio ID gratuito de Formspree

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          _subject: `TEST PIEL COMPLETADO: ${formData.name}`,
          to: "juanmtena1985@gmail.com",
          ...formData,
          ...answers
        })
      });

      if (response.ok) {
        setIsSent(true);
      } else {
        throw new Error("Envío fallido");
      }
    } catch (err) {
      setError("Error al conectar con el servidor. Por favor, contacte vía WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[600] flex items-center justify-center p-0 md:p-10 animate-[fadeIn_0.4s_ease-out]">
      <div className="absolute inset-0 bg-black/95 backdrop-blur-2xl" onClick={onClose}></div>
      
      <div className="relative w-full max-w-5xl h-full md:h-auto max-h-[90vh] bg-luxuryBlack border-y md:border border-gold/30 shadow-2xl overflow-y-auto no-scrollbar flex flex-col">
        <div className="p-8 border-b border-gold/10 flex justify-between items-center sticky top-0 bg-luxuryBlack z-20">
          <div>
            <span className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold block mb-1">Diagnostic Suite</span>
            <h2 className="text-2xl font-serif text-white italic">Analizador de Dermis</h2>
          </div>
          <button onClick={onClose} className="text-white/40 hover:text-gold transition-colors">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <div className="p-8 md:p-16 flex-grow">
          {!isFinished ? (
            <div className="animate-[slideIn_0.5s_ease-out]">
              <div className="flex items-center gap-6 mb-12">
                <span className="text-gold font-serif text-5xl italic opacity-50">0{step + 1}</span>
                <span className="h-[1px] w-20 bg-gold/20"></span>
                <span className="text-xs uppercase tracking-[0.4em] text-gold font-bold">{questions[step].category}</span>
              </div>
              <h3 className="text-3xl md:text-5xl font-serif text-white mb-16 leading-tight">{questions[step].question}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {questions[step].options.map((opt, i) => (
                  <button key={i} onClick={() => handleOption(questions[step].category, opt.value)} className="group relative p-8 border border-gold/10 hover:border-gold/60 bg-white/[0.02] transition-all text-left">
                    <span className="text-white/60 group-hover:text-white text-sm uppercase tracking-widest font-medium">{opt.label}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : !isSent ? (
            <div className="max-w-2xl mx-auto text-center animate-[fadeIn_0.8s]">
              <span className="text-gold uppercase tracking-[0.6em] text-xs font-bold mb-6 block">Análisis Completado</span>
              <h3 className="text-4xl md:text-6xl font-serif text-white mb-8 italic">Protocolo Listo.</h3>
              <p className="text-gray-400 text-lg mb-12 italic">Introduzca sus datos para recibir el diagnóstico técnico y coordinar su cita VIP.</p>
              
              {error && <p className="mb-6 text-red-400 text-xs tracking-widest">{error}</p>}

              <form onSubmit={handleSubmit} className="text-left space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] text-gold uppercase tracking-widest font-bold">Nombre</label>
                    <input required className="w-full bg-white/[0.03] border border-gold/20 p-4 text-white focus:border-gold outline-none" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] text-gold uppercase tracking-widest font-bold">Teléfono</label>
                    <input required className="w-full bg-white/[0.03] border border-gold/20 p-4 text-white focus:border-gold outline-none" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] text-gold uppercase tracking-widest font-bold">Email</label>
                  <input required type="email" className="w-full bg-white/[0.03] border border-gold/20 p-4 text-white focus:border-gold outline-none" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                </div>
                <button disabled={isSubmitting} className="w-full py-6 bg-gold text-luxuryBlack uppercase text-xs font-bold tracking-[0.4em] hover:bg-white transition-all shadow-xl shadow-gold/20">
                  {isSubmitting ? 'Enviando Análisis...' : 'Enviar a PRUEBA Concierge'}
                </button>
              </form>
            </div>
          ) : (
            <div className="text-center py-20 animate-[zoomIn_0.6s_ease-out]">
              <div className="w-20 h-20 border border-gold rounded-full flex items-center justify-center mx-auto mb-10">
                <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M5 13l4 4L19 7" /></svg>
              </div>
              <h4 className="text-4xl md:text-6xl font-serif text-white mb-10 italic">Gracias, {formData.name.split(' ')[0]}.</h4>
              <div className="bg-white/[0.03] p-8 border-l-2 border-gold max-w-xl mx-auto text-left italic">
                <p className="text-gold text-[10px] uppercase tracking-widest mb-2 font-bold">Auto-confirmación enviada:</p>
                <p className="text-gray-400 text-sm">"Hemos recibido su test de piel. Un especialista de PRUEBA analizará sus respuestas para proponerle el tratamiento óptimo. Le contactaremos en menos de 24h para agendar su cita. Bienvenido a la excelencia."</p>
              </div>
              <button onClick={onClose} className="mt-16 px-16 py-5 border border-gold/30 text-gold uppercase text-[10px] font-bold tracking-[0.4em] hover:bg-gold hover:text-luxuryBlack transition-all">Cerrar</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkinTestModal;
