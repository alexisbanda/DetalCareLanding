
import React from 'react';
import { Smile, Star, ShieldCheck, Heart } from 'lucide-react';
import type { Service, Testimonial } from './types';

export const servicesData: Service[] = [
  {
    id: 1,
    icon: <Smile className="h-10 w-10 text-emerald-500" />,
    title: 'Odontología General',
    description: 'Chequeos regulares, limpiezas y empastes. Cuidado integral para toda la familia.'
  },
  {
    id: 2,
    icon: <Star className="h-10 w-10 text-emerald-500" />,
    title: 'Estética Dental',
    description: 'Blanqueamiento, carillas y diseño de sonrisa para que te sientas seguro y feliz.'
  },
  {
    id: 3,
    icon: <ShieldCheck className="h-10 w-10 text-emerald-500" />,
    title: 'Ortodoncia Invisible',
    description: 'Alinea tu sonrisa de forma discreta con tecnología de punta y tratamientos personalizados.'
  },
  {
    id: 4,
    icon: <Heart className="h-10 w-10 text-emerald-500" />,
    title: 'Odontopediatría',
    description: 'Un espacio diseñado para los más pequeños, con un enfoque divertido y sin miedo.'
  },
];

export const testimonialsData: Testimonial[] = [
  {
    name: 'María P.',
    quote: 'El trato fue increíble. Mi hijo ya no tiene miedo de ir al dentista. ¡Súper recomendados!',
    stars: 5,
    avatar: 'https://picsum.photos/seed/MP/100/100'
  },
  {
    name: 'Carlos T.',
    quote: 'La tecnología que usan es de otro nivel. El blanqueamiento fue rápido y sin dolor. ¡Resultados espectaculares!',
    stars: 5,
    avatar: 'https://picsum.photos/seed/CT/100/100'
  },
  {
    name: 'Ana L.',
    quote: 'El equipo es muy profesional y amable. Me explicaron cada paso del tratamiento. Confianza total.',
    stars: 5,
    avatar: 'https://picsum.photos/seed/AL/100/100'
  },
];
