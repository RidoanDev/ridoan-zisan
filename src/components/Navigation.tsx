import { useState, useEffect } from 'react';
import { Menu, X, Languages, Home, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
  navigationItems: Array<{
    id: string;
    name: string;
    target: string;
  }>;
  activeSection: string;
  scrollToSection: (section: string) => void;
  language: 'en' | 'bn';
  setLanguage: (lang: 'en' | 'bn') => void;
  currentPage?: string;
  onBackToHome?: () => void;
}

const Navigation = ({
  navigationItems,
  activeSection,
  scrollToSection,
  language,
  setLanguage,
  currentPage = 'home',
  onBackToHome,
}: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (id: string) => {
    return activeSection === id && currentPage === 'home';
  };

  const showHomeButton = currentPage !== 'home';

  const handleNavClick = (target: string) => {
    scrollToSection(target);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white/90'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Mobile menu button */}
          <div className="flex items-center">
            {showHomeButton && onBackToHome ? (
              <button
                onClick={onBackToHome}
                className="flex items-center gap-2 p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none"
              >
                <Home size={20} className="text-blue-500" />
                <span className="hidden sm:inline text-sm font-medium">Home</span>
              </button>
            ) : (
              <button
                onClick={toggleMenu}
                className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            )}
          </div>

          {/* Page title for non-home pages */}
          {showHomeButton && (
            <div className="flex-1 text-center">
              <h1 className="text-lg font-semibold text-gray-800">
                {currentPage.charAt(0).toUpperCase() + currentPage.slice(1)}
              </h1>
            </div>
          )}

          {/* Desktop Navigation */}
          {currentPage === 'home' && (
            <div className="hidden lg:flex items-center space-x-6">
              {navigationItems.map((item) => (
                <div key={item.id} className="relative">
                  <button
                    onClick={() => handleNavClick(item.target)}
                    className={`font-medium text-sm transition-colors ${isActive(item.id) ? 'text-blue-600' : 'text-gray-600 hover:text-blue-500'}`}
                  >
                    {item.name}
                    {isActive(item.id) && (
                      <motion.div 
                        className="h-0.5 bg-blue-500 mt-1"
                        layoutId="navUnderline"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Language toggle */}
          <div className="flex items-center">
            <button
              onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}
              className="p-2 rounded-full text-gray-600 hover:bg-gray-100 focus:outline-none"
            >
              <Languages size={18} />
              <span className="ml-1 text-xs font-medium">
                {language === 'en' ? 'EN' : 'BN'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && !showHomeButton && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-white border-t border-gray-200"
            >
              <div className="px-2 pt-2 pb-4 space-y-1">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.target)}
                    className={`w-full text-left px-4 py-2 rounded-md ${isActive(item.id) ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}
                  >
                    {item.name}
                    {isActive(item.id) && (
                      <div className="h-0.5 bg-blue-500 mt-1 w-6" />
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
