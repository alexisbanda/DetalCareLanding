
import React from 'react';
import { Smile, Star, ShieldCheck, Heart } from 'lucide-react';
import type { Service, Testimonial } from './types';

export const servicesData: Service[] = [
  {
    id: 1,
    icon: <Smile className="h-10 w-10 text-emerald-500" />,
    title: 'Odontología General',
    description: 'Chequeos regulares, limpiezas y empastes. Cuidado integral para toda la familia.',
    details: 'Nuestro servicio de odontología general es la base para una salud bucal duradera. Incluye exámenes completos, radiografías digitales de baja dosis, limpiezas profesionales para eliminar placa y sarro, y restauraciones como empastes del color del diente. Nuestro objetivo es prevenir problemas antes de que comiencen y mantener tu sonrisa sana y fuerte a lo largo de los años.'
  },
  {
    id: 2,
    icon: <Star className="h-10 w-10 text-emerald-500" />,
    title: 'Estética Dental',
    description: 'Blanqueamiento, carillas y diseño de sonrisa para que te sientas seguro y feliz.',
    details: 'Transforma tu sonrisa con nuestros tratamientos de estética dental. Ofrecemos blanqueamiento dental profesional para una sonrisa más brillante, carillas de porcelana para corregir imperfecciones, y un completo diseño de sonrisa que armoniza tus dientes con tus rasgos faciales. Utilizamos materiales de la más alta calidad para resultados naturales y espectaculares.'
  },
  {
    id: 3,
    icon: <ShieldCheck className="h-10 w-10 text-emerald-500" />,
    title: 'Ortodoncia Invisible',
    description: 'Alinea tu sonrisa de forma discreta con tecnología de punta y tratamientos personalizados.',
    details: 'Consigue la sonrisa recta que siempre has deseado sin los brackets metálicos tradicionales. Nuestra ortodoncia invisible utiliza alineadores transparentes, removibles y cómodos para mover gradualmente tus dientes a la posición ideal. El tratamiento es planificado digitalmente para una máxima precisión y es perfecto para adultos y adolescentes que buscan una solución estética y eficaz.'
  },
  {
    id: 4,
    icon: <Heart className="h-10 w-10 text-emerald-500" />,
    title: 'Odontopediatría',
    description: 'Un espacio diseñado para los más pequeños, con un enfoque divertido y sin miedo.',
    details: 'Cuidamos la salud dental de tus hijos en un ambiente cálido, divertido y seguro. Nuestro equipo de odontopediatras está especializado en el trato con niños, aplicando técnicas de manejo de la conducta para que la visita al dentista sea una experiencia positiva. Ofrecemos desde selladores y fluorización hasta tratamientos de ortodoncia interceptiva.'
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
