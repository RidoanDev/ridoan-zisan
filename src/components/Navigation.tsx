import { useState, useEffect } from 'react';
import { Menu, X, Languages, Home, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';

interface NavigationProps {
  navigationItems: Array<{
    id: string;
    icon: JSX.Element;
    target?: string;
    subItems?: Array<{ id: string; icon: JSX.Element; target: string }>;
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
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setExpandedItem(null);
    }
  };

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

  const showHomeButton = currentPage === 'research' || currentPage === 'blog';

  const toggleExpand = (id: string) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{
        y: 0,
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.9)',
        boxShadow: isScrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(0, 0, 0, 0.05)' : '1px solid rgba(0, 0, 0, 0.03)',
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className={cn(
        'fixed w-full z-50 transition-all duration-300',
        'backdrop-blur-xl'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side */}
          <div className="flex items-center">
            {showHomeButton && onBackToHome ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onBackToHome}
                className="flex items-center gap-2 p-2 rounded-lg text-gray-700 hover:bg-gray-100/50 focus:outline-none transition-colors"
                aria-label={getDisplayName('home')}
              >
                <Home size={20} className="text-indigo-500" />
                <span className="hidden sm:inline text-sm font-medium">
                  {getDisplayName('home')}
                </span>
              </motion.button>
            ) : (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleMenu}
                className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100/50 focus:outline-none transition-colors"
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

            {/* Logo or brand could be added here */}
            {/* <div className="ml-4 flex items-center">
              <span className="text-lg font-semibold">YourLogo</span>
            </div> */}
          </div>

          {/* Center - Page Title */}
          {showHomeButton && (
            <div className="flex-1 text-center">
              <motion.h1 
                className="text-lg font-semibold text-gray-800"
                key={language + currentPage}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {getDisplayName(currentPage)}
              </motion.h1>
            </div>
          )}

          {/* Desktop Navigation */}
          {currentPage === 'home' && (
            <div className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <div key={item.id} className="relative">
                  <motion.button
                    onHoverStart={() => setHoveredItem(item.id)}
                    onHoverEnd={() => setHoveredItem(null)}
                    whileHover={{ 
                      backgroundColor: 'rgba(241, 245, 249, 0.7)'
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => item.subItems ? toggleExpand(item.id) : scrollToSection(item.target || item.id)}
                    className={cn(
                      'flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 min-w-fit',
                      isActive(item.id)
                        ? 'bg-gray-100/80 text-gray-900 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900',
                      item.subItems ? 'pr-3' : ''
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
                    {item.subItems && (
                      <motion.div
                        animate={{ rotate: expandedItem === item.id ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-1"
                      >
                        <ChevronDown size={16} />
                      </motion.div>
                    )}
                  </motion.button>

                  {/* Dropdown for items with subItems */}
                  {item.subItems && (
                    <AnimatePresence>
                      {(expandedItem === item.id || hoveredItem === item.id) && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-1 w-48 bg-white rounded-lg shadow-lg z-50 border border-gray-100"
                          onMouseEnter={() => setHoveredItem(item.id)}
                          onMouseLeave={() => setHoveredItem(null)}
                        >
                          {item.subItems.map((subItem) => (
                            <motion.button
                              key={subItem.id}
                              whileHover={{ backgroundColor: 'rgba(241, 245, 249, 0.7)' }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => {
                                scrollToSection(subItem.target);
                                setExpandedItem(null);
                              }}
                              className={cn(
                                'flex items-center gap-2 w-full px-4 py-2 text-left text-sm',
                                isActive(subItem.id)
                                  ? 'bg-gray-100/80 text-gray-900'
                                  : 'text-gray-600 hover:text-gray-900'
                              )}
                            >
                              <div className={cn('w-4 h-4', getIconColor(subItem.id))}>
                                {subItem.icon}
                              </div>
                              {getDisplayName(subItem.id)}
                            </motion.button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Right side - Language toggle */}
          <div className="flex items-center">
            <motion.button
              whileHover={{ 
                scale: 1.05,
                rotate: [0, 5, -5, 0],
                backgroundColor: 'rgba(124, 58, 237, 0.1)'
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}
              className={cn(
                'p-2 rounded-full transition-all duration-300 flex items-center gap-1',
                'text-purple-700 hover:text-purple-800',
                'border border-purple-200 hover:border-purple-300',
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
                <Languages size={18} className="text-current" />
              </motion.div>
              <span className="text-xs font-medium hidden sm:inline">
                {language === 'en' ? 'EN' : 'BN'}
              </span>
            </motion.button>
          </div>
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
              <div className="px-2 pt-2 pb-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {currentPage === 'home' && navigationItems.map((item, index) => (
                    <div key={item.id} className="relative">
                      <motion.button
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
                          if (item.subItems) {
                            toggleExpand(item.id);
                          } else {
                            scrollToSection(item.target || item.id);
                            setIsMenuOpen(false);
                          }
                        }}
                        className={cn(
                          'flex flex-col items-center gap-2 p-3 rounded-lg transition-all duration-200 w-full',
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
                        <div className="flex items-center gap-1">
                          <span className="font-medium text-xs text-center leading-tight">
                            {getDisplayName(item.id)}
                          </span>
                          {item.subItems && (
                            <motion.div
                              animate={{ rotate: expandedItem === item.id ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ChevronDown size={14} />
                            </motion.div>
                          )}
                        </div>
                      </motion.button>

                      {/* Mobile submenu */}
                      {item.subItems && expandedItem === item.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="ml-4 mt-1 space-y-1"
                        >
                          {item.subItems.map((subItem) => (
                            <motion.button
                              key={subItem.id}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => {
                                scrollToSection(subItem.target);
                                setIsMenuOpen(false);
                              }}
                              className={cn(
                                'flex items-center gap-2 w-full px-3 py-2 rounded-lg text-xs',
                                isActive(subItem.id)
                                  ? 'bg-gray-100/80 text-gray-900'
                                  : 'text-gray-600 hover:bg-gray-100/50'
                              )}
                            >
                              <div className={cn('w-4 h-4', getIconColor(subItem.id))}>
                                {subItem.icon}
                              </div>
                              {getDisplayName(subItem.id)}
                            </motion.button>
                          ))}
                        </motion.div>
                      )}
                    </div>
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
