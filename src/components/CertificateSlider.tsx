import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Certificate {
  title: {
    en: string;
    bn: string;
  };
  image: string;
}

interface CertificateSliderProps {
  certificates: Certificate[];
  language: 'en' | 'bn';
}

const CertificateSlider = ({ certificates, language }: CertificateSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Changed to 3 seconds

    return () => clearInterval(timer);
  }, [certificates.length, isAutoPlaying]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? certificates.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden rounded-lg">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={certificates[currentIndex].image}
          alt={certificates[currentIndex].title[language]}
          className="w-full h-full object-contain"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.7 }} // Slowed down transition
        />
      </AnimatePresence>
      
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {certificates.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-green-600 w-4' : 'bg-gray-300'
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>

      <button
        onClick={handlePrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-colors"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-colors"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-8 left-0 right-0 text-center bg-black/50 text-white py-2">
        <h3 className="text-lg font-semibold">
          {certificates[currentIndex].title[language]}
        </h3>
      </div>
    </div>
  );
};

export default CertificateSlider;