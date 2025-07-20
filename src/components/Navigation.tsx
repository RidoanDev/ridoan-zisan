// Updated Navigation Component with Sidebar-style Hamburger Menu for Mobile
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
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const getIconColor = (id: string) => {
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

  const showHomeButton = currentPage === 'research' || currentPage === 'blog';

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{
        y: 0,
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.6)',
        boxShadow: isScrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none',
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className={cn('fixed w-full z-50 backdrop-blur-xl border-b border-gray-200/50')}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {showHomeButton && onBackToHome ? (
            <button
              onClick={onBackToHome}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
              aria-label={getDisplayName('home')}
            >
              <Home size={20} className="text-indigo-500" />
            </button>
          ) : (
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          )}

          {showHomeButton && (
            <div className="flex-1 text-center">
              <h1 className="text-lg font-semibold text-gray-800">
                {getDisplayName(currentPage)}
              </h1>
            </div>
          )}

          {currentPage === 'home' && (
            <div className="hidden lg:flex items-center space-x-1 overflow-x-auto">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.target || item.id)}
                  className={cn(
                    'flex items-center gap-2 px-3 py-2 rounded-lg min-w-fit',
                    isActive(item.id)
                      ? 'bg-gray-100/80 text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  )}
                >
                  <div className={cn('w-4 h-4', getIconColor(item.id))}>{item.icon}</div>
                  <span className="font-medium text-sm whitespace-nowrap">
                    {getDisplayName(item.id)}
                  </span>
                </button>
              ))}
            </div>
          )}

          <button
            onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}
            className="p-2 rounded-full text-purple-700 border border-purple-300 bg-purple-50 hover:bg-purple-100"
            aria-label="Toggle language"
          >
            <Languages size={16} />
          </button>
        </div>
      </div>

      {/* Overlay and Sidebar for Mobile */}
      <AnimatePresence>
        {isMenuOpen && !showHomeButton && (
          <>
            {/* Background Blur */}
            <motion.div
              onClick={closeMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black backdrop-blur-sm z-40"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 w-1/2 h-full bg-white z-50 p-4 shadow-lg overflow-y-auto"
            >
              <div className="grid grid-cols-1 gap-4">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      scrollToSection(item.target || item.id);
                      closeMenu();
                    }}
                    className={cn(
                      'flex items-center gap-3 px-3 py-2 rounded-md',
                      isActive(item.id)
                        ? 'bg-gray-100 text-gray-900'
                        : 'text-gray-700 hover:bg-gray-100'
                    )}
                  >
                    <div className={cn('w-5 h-5', getIconColor(item.id))}>{item.icon}</div>
                    <span className="text-sm font-medium">
                      {getDisplayName(item.id)}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
