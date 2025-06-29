import { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Expand, Minimize, Loader2 } from 'lucide-react';

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
  const [isLoading, setIsLoading] = useState(true);
  const [showTitle, setShowTitle] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());
  const sliderRef = useRef<HTMLDivElement>(null);
  const fullscreenRef = useRef<HTMLDivElement>(null);

  // Preload images with offline fallback
  useEffect(() => {
    let loadedCount = 0;
    const totalImages = certificates.length;
    const failed = new Set<string>();

    const handleImageLoad = () => {
      loadedCount++;
      if (loadedCount === totalImages) {
        setIsLoading(false);
      }
    };

    const handleImageError = (src: string) => {
      failed.add(src);
      loadedCount++;
      if (loadedCount === totalImages) {
        setFailedImages(failed);
        setIsLoading(false);
      }
    };

    certificates.forEach((cert) => {
      const img = new Image();
      img.src = cert.image;
      img.onload = handleImageLoad;
      img.onerror = () => handleImageError(cert.image);
    });

    return () => {
      certificates.forEach(() => {
        const img = new Image();
        img.onload = null;
        img.onerror = null;
      });
    };
  }, [certificates]);

  // Navigation handlers
  const handleNavigation = useCallback((newIndex: number) => {
    setIsAutoPlaying(false);
    setShowTitle(true);
    setCurrentIndex(newIndex);

    const titleTimeout = setTimeout(() => {
      setShowTitle(false);
    }, 3000);

    return () => clearTimeout(titleTimeout);
  }, []);

  const handlePrevious = useCallback(() => {
    handleNavigation(currentIndex === 0 ? certificates.length - 1 : currentIndex - 1);
  }, [currentIndex, certificates.length, handleNavigation]);

  const handleNext = useCallback(() => {
    handleNavigation(currentIndex === certificates.length - 1 ? 0 : currentIndex + 1);
  }, [currentIndex, certificates.length, handleNavigation]);

  const handleDotClick = useCallback((index: number) => {
    handleNavigation(index);
  }, [handleNavigation]);

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) handleNext();
    if (touchStart - touchEnd < -50) handlePrevious();
  };

  // Fullscreen handlers
  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (fullscreenRef.current?.requestFullscreen) {
        fullscreenRef.current.requestFullscreen().catch(() => {
          console.error('Error attempting to enable fullscreen');
        });
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || isLoading) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, [certificates.length, isAutoPlaying, isLoading]);

  // Fullscreen change listener
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Loading state
  if (isLoading) {
    return (
      <div className="w-full h-[60vw] sm:h-[50vw] max-h-[400px] min-h-[250px] flex items-center justify-center bg-gray-100 rounded-lg">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="w-8 h-8 text-gray-500 animate-spin" />
          <span className="text-gray-600 text-sm sm:text-base">Loading certificates...</span>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`relative w-full max-w-6xl mx-auto ${
        isFullscreen ? 'h-screen w-screen bg-black p-0 m-0 fixed inset-0 z-50' : 'px-2 sm:px-4'
      }`}
      ref={fullscreenRef}
    >
      {/* Certificate Image Container */}
      <div 
        className={`relative group ${
          isFullscreen 
            ? 'w-full h-full bg-black' 
            : 'w-full h-[60vw] sm:h-[40vw] md:h-[35vw] lg:h-[30vw] max-h-[500px] min-h-[250px] bg-transparent'
        } overflow-hidden rounded-lg`}
        ref={sliderRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className={`w-full h-full flex items-center justify-center ${
              isFullscreen ? 'p-4 bg-black' : 'bg-transparent'
            }`}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            onClick={() => {
              setShowTitle(true);
              setTimeout(() => setShowTitle(false), 3000);
            }}
          >
            {failedImages.has(certificates[currentIndex].image) ? (
              <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-lg">
                <div className="text-center p-4">
                  <div className="text-gray-600 font-medium mb-2">
                    Certificate image unavailable offline
                  </div>
                  <div className="text-sm text-gray-500">
                    {certificates[currentIndex].title[language]}
                  </div>
                </div>
              </div>
            ) : (
              <img
                src={certificates[currentIndex].image}
                alt={certificates[currentIndex].title[language]}
                className="max-w-full max-h-full object-contain cursor-pointer"
                style={{
                  background: 'transparent',
                  filter: isFullscreen ? 'none' : 'drop-shadow(0 4px 12px rgba(0,0,0,0.15))'
                }}
                loading="lazy"
                onError={() => {
                  setFailedImages(prev => new Set([...prev, certificates[currentIndex].image]));
                }}
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Fullscreen Toggle Button */}
        <button
          onClick={toggleFullscreen}
          className={`absolute top-2 right-2 p-2 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm ${
            isFullscreen ? '!opacity-100' : ''
          }`}
          aria-label={isFullscreen ? 'Exit fullscreen' : 'View fullscreen'}
        >
          {isFullscreen ? (
            <Minimize className="w-4 h-4 sm:w-5 sm:h-5" />
          ) : (
            <Expand className="w-4 h-4 sm:w-5 sm:h-5" />
          )}
        </button>

        {/* Certificate Title */}
        <AnimatePresence>
          {showTitle && (
            <motion.div
              className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="inline-block px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 bg-black/70 text-white text-xs sm:text-sm md:text-base font-medium sm:font-semibold rounded-md sm:rounded-lg backdrop-blur-sm">
                {certificates[currentIndex].title[language]}
              </h3>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      {!isFullscreen && (
        <div className="mt-1 sm:mt-2 md:mt-3">
          {/* Navigation Dots */}
          {certificates.length > 1 && (
            <div className="flex flex-col items-center">
              <div className="flex justify-center space-x-1 sm:space-x-1.5 mx-0.5 sm:mx-1 md:mx-2">
                {certificates.map((_, index) => (
                  <button
                    key={index}
                    className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 hover:scale-125 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 ${
                      index === currentIndex ? 'bg-green-600' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    onClick={() => handleDotClick(index)}
                    aria-label={`Go to certificate ${index + 1}`}
                  />
                ))}
              </div>
              
              {/* Position Counter */}
              <div className="mt-1 px-2 py-0.5 bg-black/50 text-white text-xs rounded-md backdrop-blur-sm">
                {currentIndex + 1} / {certificates.length}
              </div>
            </div>
          )}

          {/* Navigation Arrows */}
          <div className="flex items-center justify-between w-full px-1 sm:px-2 md:px-4 mt-1 sm:mt-2">
            {certificates.length > 1 && (
              <>
                <button
                  onClick={handlePrevious}
                  className="p-0.5 sm:p-1 text-gray-600 hover:text-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-full"
                  aria-label="Previous certificate"
                >
                  <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-0.5 sm:p-1 text-gray-600 hover:text-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-full"
                  aria-label="Next certificate"
                >
                  <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificateSlider;
