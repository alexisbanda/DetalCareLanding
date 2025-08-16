
import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { generateEnhancedMessage } from '../services/geminiService';

const ContactForm: React.FC = () => {
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateMessage = async () => {
    if (!message.trim()) return;
    setIsLoading(true);
    const generatedText = await generateEnhancedMessage(message);
    setMessage(generatedText);
    setIsLoading(false);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-12">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">
            ¡Estamos Listos para Atenderte!
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Agenda tu cita de forma rápida y sencilla. Nos pondremos en contacto contigo lo antes posible.
          </p>
          <div className="space-y-4 inline-block text-left">
            <div className="flex items-center gap-4">
              <Phone size={24} className="text-emerald-500" />
              <span className="text-gray-700 font-semibold">(593) 987-654-321</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail size={24} className="text-emerald-500" />
              <span className="text-gray-700 font-semibold">hola@dentalcare.com</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin size={24} className="text-emerald-500" />
              <span className="text-gray-700 font-semibold">Av. Eloy Alfaro y Amazonas, Quito, Ecuador</span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-8 bg-white rounded-3xl shadow-xl">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nombre Completo</label>
              <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Tu nombre" />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Correo Electrónico</label>
              <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="tu@email.com" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Teléfono</label>
              <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Teléfono" />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Mensaje</label>
              <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Ej: Necesito una revisión de rutina." value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            </div>
            <button type="button" onClick={handleGenerateMessage} disabled={isLoading || !message} className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-purple-500 text-white font-bold rounded-lg shadow-lg hover:bg-purple-600 transition-colors transform hover:scale-105 disabled:bg-purple-300 disabled:cursor-not-allowed">
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                  <span>Generando...</span>
                </>
              ) : (
                <span>Generar Mensaje con IA ✨</span>
              )}
            </button>
            <button type="submit" className="w-full px-6 py-4 bg-emerald-500 text-white font-bold rounded-lg shadow-lg hover:bg-emerald-600 transition-colors transform hover:scale-105">
              Enviar Solicitud
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
