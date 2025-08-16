
import type { ReactNode } from 'react';

export interface Service {
  id: number;
  icon: ReactNode;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  quote: string;
  stars: number;
  avatar: string;
}

export interface ChatMessage {
  role: 'user' | 'bot';
  text: string;
}
