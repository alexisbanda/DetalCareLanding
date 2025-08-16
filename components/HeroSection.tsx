
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => (
  <section className="relative w-full h-screen flex items-center justify-center bg-emerald-50 overflow-hidden pt-20">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-8 z-10">
      <div className="md:w-1/2">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight mb-4"
        >
          Tu Sonrisa, Nuestra Pasión.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg sm:text-xl text-gray-600 mb-8"
        >
          Odontología de vanguardia con un trato humano y amigable para toda la familia.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          href="#contact"
          className="inline-block px-8 py-4 bg-emerald-500 text-white font-bold text-lg rounded-full shadow-lg hover:bg-emerald-600 transition-colors transform hover:scale-105"
        >
          Agenda tu cita ahora
        </motion.a>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center items-center">
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 50, delay: 1 }}
          src="https://picsum.photos/seed/dental/600/600"
          alt="Familia sonriendo en el dentista"
          className="rounded-3xl shadow-2xl w-full max-w-md h-auto"
        />
      </div>
    </div>
  </section>
);

export default HeroSection;
