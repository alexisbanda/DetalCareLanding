
import React from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => (
  <motion.header
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
    className="fixed top-0 left-0 z-50 w-full bg-white/80 backdrop-blur-sm shadow-md p-4"
  >
    <div className="container mx-auto flex justify-between items-center flex-wrap">
      <div className="text-2xl md:text-3xl font-bold">
        <a href="#" className="transition-colors">
          <span className="font-logo text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">
            DentalCare
          </span>
        </a>
      </div>
      <nav className="hidden md:flex items-center gap-6">
        <a href="#services" className="text-gray-600 hover:text-emerald-500 transition-colors font-medium">Servicios</a>
        <a href="#why-us" className="text-gray-600 hover:text-emerald-500 transition-colors font-medium">Nosotros</a>
        <a href="#contact" className="text-gray-600 hover:text-emerald-500 transition-colors font-medium">Contacto</a>
        <a href="#contact" className="px-6 py-2 bg-emerald-500 text-white font-semibold rounded-full shadow-lg hover:bg-emerald-600 transition-colors">
          Agenda tu cita
        </a>
      </nav>
      <a href="#contact" className="md:hidden px-4 py-2 bg-emerald-500 text-white font-semibold rounded-full shadow-lg hover:bg-emerald-600 transition-colors">
        Cita
      </a>
    </div>
  </motion.header>
);

export default Header;
