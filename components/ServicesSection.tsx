
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { servicesData } from '../constants';
import type { Service } from '../types';
import Modal from './Modal';

const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">Nuestros Servicios</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Ofrecemos una amplia gama de tratamientos dentales para cuidar de tu sonrisa y la de tu familia.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-white p-8 rounded-3xl shadow-lg border border-gray-200 flex flex-col items-center text-center h-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
            >
              <div className="mb-4 flex-shrink-0">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 flex-grow">{service.description}</p>
              <button 
                onClick={() => setSelectedService(service)}
                className="mt-6 px-6 py-2 bg-emerald-100 text-emerald-700 font-semibold rounded-full hover:bg-emerald-200 transition-colors"
              >
                Ver más
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <Modal isOpen={selectedService !== null} onClose={() => setSelectedService(null)}>
        {selectedService && (
          <div className="text-left">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-shrink-0">{selectedService.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800">{selectedService.title}</h3>
            </div>
            <p className="text-gray-600">
              {selectedService.details || selectedService.description}
            </p>
            <a 
              href="#contact"
              onClick={() => setSelectedService(null)}
              className="mt-6 inline-block px-8 py-3 bg-emerald-500 text-white font-bold rounded-lg shadow-lg hover:bg-emerald-600 transition-colors"
            >
              Agendar una cita
            </a>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default ServicesSection;
