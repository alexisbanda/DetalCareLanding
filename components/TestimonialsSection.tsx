
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonialsData } from '../constants';

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialsCount = testimonialsData.length;

  const handleNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % testimonialsCount);
  }, [testimonialsCount]);

  const handlePrev = () => {
    setActiveIndex((current) => (current - 1 + testimonialsCount) % testimonialsCount);
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <section id="testimonials" className="py-20 bg-white relative">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">
          Lo Que Dicen Nuestros Clientes
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Testimonios reales de familias que han transformado su sonrisa con nosotros.
        </p>
        <div className="relative w-full max-w-2xl mx-auto overflow-hidden h-96">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className="w-full h-full absolute flex flex-col items-center justify-center p-4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-emerald-50 p-8 rounded-3xl shadow-lg border border-gray-200 h-full flex flex-col items-center justify-center">
                <img
                  src={testimonialsData[activeIndex].avatar}
                  alt={testimonialsData[activeIndex].name}
                  className="rounded-full w-24 h-24 mb-4 object-cover border-4 border-white shadow-md"
                />
                <div className="flex mb-2">
                  {[...Array(testimonialsData[activeIndex].stars)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current w-5 h-5" />
                  ))}
                </div>
                <p className="text-lg italic text-gray-700 mb-4">"{testimonialsData[activeIndex].quote}"</p>
                <p className="font-bold text-gray-800">- {testimonialsData[activeIndex].name}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center items-center gap-8 mt-6">
            <button
                onClick={handlePrev}
                className="p-2 bg-white rounded-full shadow-lg transition-all hover:bg-emerald-100"
                aria-label="Previous testimonial"
            >
                <ChevronLeft size={24} className="text-emerald-500" />
            </button>
            <div className="flex justify-center gap-2">
                {testimonialsData.map((_, index) => (
                <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                    activeIndex === index ? 'bg-emerald-500 scale-125' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                />
                ))}
            </div>
            <button
                onClick={handleNext}
                className="p-2 bg-white rounded-full shadow-lg transition-all hover:bg-emerald-100"
                aria-label="Next testimonial"
            >
                <ChevronRight size={24} className="text-emerald-500" />
            </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
