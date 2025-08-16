
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { servicesData } from '../constants';
import { Calendar, Clock, User, CheckCircle } from 'lucide-react';

const steps = [
  { id: 1, name: 'Servicio', icon: CheckCircle },
  { id: 2, name: 'Fecha y Hora', icon: Calendar },
  { id: 3, name: 'Tus Datos', icon: User },
  { id: 4, name: 'Confirmación', icon: CheckCircle },
];

const availableTimes = ['09:00 AM', '11:00 AM', '02:00 PM', '04:00 PM'];

const BookingSimulator: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [userInfo, setUserInfo] = useState({ name: '', email: '' });

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const handleDateSelect = (day: number) => {
    const date = new Date();
    date.setDate(date.getDate() + day);
    setSelectedDate(date);
  };

  const resetSimulator = () => {
    setCurrentStep(1);
    setSelectedService(null);
    setSelectedDate(null);
    setSelectedTime(null);
    setUserInfo({ name: '', email: '' });
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="grid grid-cols-2 gap-4">
            {servicesData.map(service => (
              <div key={service.id} onClick={() => { setSelectedService(service.title); nextStep(); }} className={`p-4 border rounded-lg cursor-pointer text-center transition-all ${selectedService === service.title ? 'bg-emerald-500 text-white scale-105' : 'bg-white hover:bg-gray-100'}`}>
                {service.icon}
                <h4 className="font-semibold mt-2">{service.title}</h4>
              </div>
            ))}
          </div>
        );
      case 2:
        return (
          <div>
            <h4 className="font-semibold mb-4 text-center">Elige una fecha (próximos 7 días)</h4>
            <div className="flex justify-center gap-2 mb-6">
              {[...Array(7)].map((_, i) => {
                const date = new Date();
                date.setDate(date.getDate() + i);
                const isSelected = selectedDate?.getDate() === date.getDate();
                return (
                  <div key={i} onClick={() => handleDateSelect(i)} className={`p-2 border rounded-lg cursor-pointer text-center transition-all ${isSelected ? 'bg-emerald-500 text-white scale-105' : 'bg-white hover:bg-gray-100'}`}>
                    <div className="text-xs">{date.toLocaleString('es-ES', { weekday: 'short' })}</div>
                    <div className="font-bold">{date.getDate()}</div>
                  </div>
                );
              })}
            </div>
            {selectedDate && (
              <div>
                <h4 className="font-semibold mb-4 text-center">Elige una hora</h4>
                <div className="grid grid-cols-2 gap-4">
                  {availableTimes.map(time => (
                    <div key={time} onClick={() => { setSelectedTime(time); nextStep(); }} className={`p-4 border rounded-lg cursor-pointer text-center transition-all ${selectedTime === time ? 'bg-emerald-500 text-white scale-105' : 'bg-white hover:bg-gray-100'}`}>
                      <Clock className="mx-auto mb-2" /> {time}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      case 3:
        return (
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); nextStep(); }}>
            <input type="text" placeholder="Tu Nombre" value={userInfo.name} onChange={e => setUserInfo({...userInfo, name: e.target.value})} className="w-full p-3 border rounded-lg" required />
            <input type="email" placeholder="Tu Correo Electrónico" value={userInfo.email} onChange={e => setUserInfo({...userInfo, email: e.target.value})} className="w-full p-3 border rounded-lg" required />
            <button type="submit" className="w-full p-3 bg-emerald-500 text-white font-bold rounded-lg hover:bg-emerald-600">Siguiente</button>
          </form>
        );
      case 4:
        return (
          <div className="text-center">
            <CheckCircle className="w-16 h-16 mx-auto text-emerald-500 mb-4" />
            <h3 className="text-2xl font-bold mb-2">¡Cita simulada con éxito!</h3>
            <p className="mb-4">Hemos reservado <strong>{selectedService}</strong> para el <strong>{selectedDate?.toLocaleDateString('es-ES')}</strong> a las <strong>{selectedTime}</strong>.</p>
            <p className="mb-6">Para confirmar tu cita real, completa el formulario de contacto a continuación.</p>
            <a href="#contact" className="w-full block p-3 bg-emerald-500 text-white font-bold rounded-lg hover:bg-emerald-600 mb-2">Confirmar mi Cita Real</a>
            <button onClick={resetSimulator} className="w-full p-3 bg-gray-200 text-gray-700 font-bold rounded-lg hover:bg-gray-300">Empezar de nuevo</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="booking-simulator" className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">Agenda tu Cita en Minutos</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">Usa nuestro simulador para ver lo fácil que es reservar. ¡Sin compromisos!</p>
        
        <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-2xl shadow-xl">
          <div className="flex justify-between items-center mb-8">
            {steps.map((step, index) => (
              <React.Fragment key={step.id}>
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep >= step.id ? 'bg-emerald-500 text-white' : 'bg-gray-300 text-gray-600'}`}>
                    <step.icon className="w-6 h-6" />
                  </div>
                  <p className={`mt-2 text-xs font-semibold ${currentStep >= step.id ? 'text-emerald-600' : 'text-gray-500'}`}>{step.name}</p>
                </div>
                {index < steps.length - 1 && <div className={`flex-1 h-1 mx-2 ${currentStep > index + 1 ? 'bg-emerald-500' : 'bg-gray-300'}`}></div>}
              </React.Fragment>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              {renderStepContent()}
            </motion.div>
          </AnimatePresence>

          {currentStep > 1 && currentStep < 4 && (
            <button onClick={prevStep} className="mt-6 text-sm text-gray-600 hover:text-emerald-600">← Volver</button>
          )}
        </div>
      </div>
    </section>
  );
};

export default BookingSimulator;
