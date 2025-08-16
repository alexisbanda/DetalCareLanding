
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, X } from 'lucide-react';

const Footer: React.FC = () => (
  <footer className="bg-gray-800 text-white py-12">
    <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      <div>
        <h4 className="text-xl font-bold mb-4 text-emerald-300 font-logo">DentalCare</h4>
        <p className="text-gray-400">
          Odontología de vanguardia con un trato humano y amigable para toda la familia.
        </p>
      </div>
      <div>
        <h4 className="font-bold mb-4">Servicios</h4>
        <ul className="space-y-2 text-gray-400">
          <li><a href="#services" className="hover:text-white transition-colors">Odontología General</a></li>
          <li><a href="#services" className="hover:text-white transition-colors">Estética Dental</a></li>
          <li><a href="#services" className="hover:text-white transition-colors">Ortodoncia Invisible</a></li>
          <li><a href="#services" className="hover:text-white transition-colors">Odontopediatría</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-4">Contacto</h4>
        <ul className="space-y-2 text-gray-400">
          <li className="flex items-center"><Phone size={16} className="inline-block mr-2 flex-shrink-0" /> (593) 987-654-321</li>
          <li className="flex items-center"><Mail size={16} className="inline-block mr-2 flex-shrink-0" /> hola@dentalcare.com</li>
          <li className="flex items-center"><MapPin size={16} className="inline-block mr-2 flex-shrink-0" /> Quito, Ecuador</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-4">Redes Sociales</h4>
        <div className="flex gap-4">
          <a href="#" aria-label="Facebook" className="hover:text-emerald-300 transition-colors"><Facebook size={24} /></a>
          <a href="#" aria-label="Instagram" className="hover:text-emerald-300 transition-colors"><Instagram size={24} /></a>
          <a href="#" aria-label="Twitter" className="hover:text-emerald-300 transition-colors"><X size={24} /></a>
        </div>
      </div>
    </div>
    <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
      <p>&copy; {new Date().getFullYear()} DentalCare. Todos los derechos reservados.</p>
    </div>
  </footer>
);

export default Footer;
