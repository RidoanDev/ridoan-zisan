import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white shadow-md fixed w-full z-50"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {navigationItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.target || item.id)}
                className={`p-2 rounded-md transition-colors ${
                  activeSection === (item.target || item.id)
                    ? 'bg-green-100 text-green-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {item.icon}
              </motion.button>
            ))}
          </div>

          {/* Language Toggle Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}
            className="bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-600"
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
              className="md:hidden overflow-hidden bg-white"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigationItems.map((item) => (
                  <motion.button
                    key={item.id}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      scrollToSection(item.target || item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`w-full flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
                      activeSection === (item.target || item.id)
                        ? 'bg-green-100 text-green-700'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {item.icon}
                    <span>
                      {item.id.charAt(0).toUpperCase() + item.id.slice(1)}
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;