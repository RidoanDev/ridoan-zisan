import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { cn } from '../lib/utils';

interface NavigationProps {
  navigationItems: Array<{
    id: string;
    icon: JSX.Element;
    target?: string;
  }>;
  activeSection: string;
  scrollToSection: (section: string) => void;
  language: 'en' | 'bn';
  setLanguage: (lang: 'en' | 'bn') => void;
}

const Navigation = ({
  navigationItems,
  activeSection,
  scrollToSection,
  language,
  setLanguage,
}: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0,
    initialInView: true,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.nav
      ref={ref}
      initial={{ y: -100 }}
      animate={{
        y: 0,
        backgroundColor: isScrolled
          ? 'rgba(255, 255, 255, 0.9)'
          : 'rgba(255, 255, 255, 1)',
      }}
      className={cn(
        'fixed w-full z-50 transition-all duration-300',
        isScrolled ? 'backdrop-blur-md shadow-lg' : 'shadow-md'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isMenuOpen ? 'close' : 'menu'}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </AnimatePresence>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {navigationItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.target || item.id)}
                className={cn(
                  'flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-300',
                  activeSection === (item.target || item.id)
                    ? 'bg-green-100 text-green-700 shadow-sm'
                    : 'text-gray-600 hover:bg-gray-100'
                )}
              >
                <motion.div
                  animate={{
                    rotate:
                      activeSection === (item.target || item.id) ? 360 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {item.icon}
                </motion.div>
                <span className="text-sm font-medium">
                  {item.id.charAt(0).toUpperCase() + item.id.slice(1)}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Language Toggle Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}
            className={cn(
              'px-4 py-2 rounded-md text-sm font-medium transition-all duration-300',
              'bg-gradient-to-r from-green-600 to-green-700 text-white',
              'hover:from-green-500 hover:to-green-600',
              'focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2'
            )}
          >
            {language === 'en' ? 'বাংলা' : 'English'}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden bg-white"
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="px-2 pt-2 pb-3 space-y-1"
              >
                {navigationItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      scrollToSection(item.target || item.id);
                      setIsMenuOpen(false);
                    }}
                    className={cn(
                      'w-full flex items-center gap-2 px-4 py-3 rounded-md transition-all duration-300',
                      activeSection === (item.target || item.id)
                        ? 'bg-green-100 text-green-700 shadow-sm'
                        : 'text-gray-600 hover:bg-gray-100'
                    )}
                  >
                    <motion.div
                      animate={{
                        rotate:
                          activeSection === (item.target || item.id) ? 360 : 0,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {item.icon}
                    </motion.div>
                    <span className="font-medium">
                      {item.id.charAt(0).toUpperCase() + item.id.slice(1)}
                    </span>
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;