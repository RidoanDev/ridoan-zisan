import { useState, useEffect } from 'react';
import { Menu, X, Languages, Home } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
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

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const getIconColor = (id: string): string => {
    const colors: Record<string, string> = {
      profile: 'text-indigo-500',
      education: 'text-blue-500',
      courses: 'text-emerald-500',
      experience: 'text-amber-500',
      certificates: 'text-red-500',
      skills: 'text-purple-500',
      family: 'text-pink-500',
      contact: 'text-cyan-500',
      research: 'text-blue-600',
      blog: 'text-purple-600',
      'social-links': 'text-teal-500',
    };
    return colors[id] || 'text-gray-500';
  };

  const getDisplayName = (id: string) => {
    const names: Record<string, { en: string; bn: string }> = {
      profile: { en: 'Profile', bn: 'প্রোফাইল' },
      education: { en: 'Education', bn: 'শিক্ষা' },
      courses: { en: 'Courses', bn: 'কোর্স' },
      experience: { en: 'Experience', bn: 'অভিজ্ঞতা' },
      certificates: { en: 'Certificates', bn: 'সার্টিফিকেট' },
      skills: { en: 'Skills', bn: 'দক্ষতা' },
      family: { en: 'Family', bn: 'পরিবার' },
      contact: { en: 'Contact', bn: 'যোগাযোগ' },
      research: { en: 'Research', bn: 'গবেষণা' },
      blog: { en: 'Blog', bn: 'ব্লগ' },
      'social-links': { en: 'Social', bn: 'সামাজিক' },
      home: { en: 'Home', bn: 'হোম' },
    };
    return names[id]?.[language] || id.charAt(0).toUpperCase() + id.slice(1);
  };

  const isActive = (id: string) => {
    if (id === 'research' && currentPage === 'research') return true;
    if (id === 'blog' && currentPage === 'blog') return true;
    return activeSection === (id === 'social-links' ? 'footer' : id) && currentPage === 'home';
  };

  // Show Home button only for Research and Blog pages
  const showHomeButton = currentPage === 'research' || currentPage === 'blog';

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{
        y: 0,
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.85)',
        boxShadow: isScrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none',
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className={cn(
        'fixed w-full z-50 transition-all duration-300',
        'backdrop-blur-xl border-b border-gray-200/50'
      )}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Mobile Menu Button or Home Button */}
          {showHomeButton && onBackToHome ? (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={onBackToHome}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none flex items-center gap-2"
              aria-label={getDisplayName('home')}
            >
              <Home size={20} className="text-indigo-500" />
              <span className="font-medium text-sm">{getDisplayName('home')}</span>
            </motion.button>
          ) : (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMenuOpen ? 'close' : 'menu'}
                  initial={{ opacity: 0.5, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.15 }}
                >
                  {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          )}

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 overflow-x-auto">
            {/* Home Button - Only for Research and Blog pages */}
            {showHomeButton && onBackToHome && (
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'rgba(241, 245, 249, 0.7)'
                }}
                whileTap={{ scale: 0.98 }}
                onClick={onBackToHome}
                className="flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 min-w-fit text-gray-600 hover:text-gray-900"
                title={getDisplayName('home')}
              >
                <motion.div className="w-4 h-4 text-indigo-500">
                  <Home size={16} />
                </motion.div>
                <motion.span className="font-medium text-sm whitespace-nowrap">
                  {getDisplayName('home')}
                </motion.span>
              </motion.button>
            )}

            {/* Regular Navigation Items - Only show on home page */}
            {currentPage === 'home' && navigationItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'rgba(241, 245, 249, 0.7)'
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection(item.target || item.id)}
                className={cn(
                  'flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 min-w-fit',
                  isActive(item.id)
                    ? 'bg-gray-100/80 text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                )}
                title={getDisplayName(item.id)}
              >
                <motion.div
                  animate={{
                    rotate: isActive(item.id) ? [0, 360] : 0,
                  }}
                  transition={{ duration: 0.6, ease: "backOut" }}
                  className={cn('w-4 h-4', getIconColor(item.id))}
                >
                  {item.icon}
                </motion.div>
                <motion.span 
                  className="font-medium text-sm whitespace-nowrap"
                  animate={{
                    fontWeight: isActive(item.id) ? 600 : 500
                  }}
                >
                  {getDisplayName(item.id)}
                </motion.span>
              </motion.button>
            ))}
          </div>

          {/* Language Toggle Button */}
          <motion.button
            whileHover={{ 
              scale: 1.1,
              rotate: [0, 10, -10, 0],
              backgroundColor: 'rgba(124, 58, 237, 0.1)'
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}
            className={cn(
              'p-1.5 sm:p-2 rounded-full transition-all duration-300',
              'text-purple-700 hover:text-purple-800',
              'border border-purple-300 hover:border-purple-400',
              'focus:outline-none focus:ring-2 focus:ring-purple-400/30',
              'bg-purple-50/50 hover:bg-purple-50'
            )}
            aria-label="Toggle language"
          >
            <motion.div
              key={language}
              initial={{ rotate: 0 }}
              animate={{ rotate: language === 'en' ? 0 : 180 }}
              transition={{ type: 'spring', stiffness: 300, damping: 10 }}
            >
              <Languages size={16} className="sm:w-5 sm:h-5 text-current" />
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && !showHomeButton && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ 
                opacity: 1, 
                height: 'auto',
              }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/50"
            >
              <div className="px-2 pt-2 pb-3">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {/* Regular Navigation Items - Only show on home page */}
                  {currentPage === 'home' && navigationItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1,
                        transition: { 
                          delay: index * 0.03,
                          type: 'spring',
                          stiffness: 300,
                          damping: 20
                        }
                      }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        scrollToSection(item.target || item.id);
                        setIsMenuOpen(false);
                      }}
                      className={cn(
                        'flex flex-col items-center gap-2 p-3 rounded-lg transition-all duration-200',
                        isActive(item.id)
                          ? 'bg-gray-100/80 text-gray-900'
                          : 'text-gray-600 hover:bg-gray-100/50 hover:text-gray-900'
                      )}
                    >
                      <motion.div
                        animate={{
                          rotate: isActive(item.id) ? 360 : 0,
                        }}
                        transition={{ duration: 0.6 }}
                        className={cn('w-6 h-6', getIconColor(item.id))}
                      >
                        {item.icon}
                      </motion.div>
                      <span className="font-medium text-xs text-center leading-tight">
                        {getDisplayName(item.id)}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
