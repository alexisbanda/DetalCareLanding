
import React from 'react';
import { motion } from 'framer-motion';
import { servicesData } from '../constants';

const ServicesSection: React.FC = () => (
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
            className="bg-white p-8 rounded-3xl shadow-lg border border-gray-200 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
            whileHover={{ scale: 1.05, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
