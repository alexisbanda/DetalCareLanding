
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Heart } from 'lucide-react';

const WhyUsSection: React.FC = () => {
  return (
    <section id="why-us" className="py-20 bg-emerald-50 overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">
              ¿Por Qué Elegirnos?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Combinamos la tecnología más avanzada con el trato humano que mereces. Nuestra clínica en Quito, Ecuador, está diseñada para que te sientas cómodo, seguro y feliz.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <ShieldCheck className="text-emerald-500 flex-shrink-0 mt-1" size={32} />
                <div>
                  <h3 className="font-bold text-lg">Tecnología de Vanguardia</h3>
                  <p className="text-gray-600">Equipos de última generación para diagnósticos precisos y tratamientos eficientes.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Heart className="text-emerald-500 flex-shrink-0 mt-1" size={32} />
                <div>
                  <h3 className="font-bold text-lg">Trato Amigable y Cálido</h3>
                  <p className="text-gray-600">Nuestro equipo te hará sentir como en casa, con un enfoque que elimina el miedo al dentista.</p>
                </div>
              </li>
            </ul>
          </motion.div>
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, type: 'spring' }}
          >
            <img
              src="https://picsum.photos/seed/team/600/600"
              alt="Equipo médico sonriente"
              className="rounded-3xl shadow-2xl w-full max-w-lg h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
