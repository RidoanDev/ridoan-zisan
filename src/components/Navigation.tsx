import { useState, useEffect } from 'react';
import { Menu, X, Languages, Home } from 'lucide-react';
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

  const showHomeButton = currentPage === 'research' || currentPage === 'blog';

  return (
    <nav
      className={cn(
        'fixed w-full z-50 transition-all duration-300',
        'backdrop-blur-xl border-b border-gray-200/50',
        isScrolled ? 'bg-white/95 shadow' : 'bg-white/85'
      )}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Left side */}
          {showHomeButton && onBackToHome ? (
            <button
              onClick={onBackToHome}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
              aria-label={getDisplayName('home')}
            >
              <Home size={20} className="text-indigo-500" />
            </button>
          ) : (
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          )}

          {/* Center - Title */}
          {showHomeButton && (
            <div className="flex-1 text-center">
              <h1 className="text-lg font-semibold text-gray-800">
                {getDisplayName(currentPage)}
              </h1>
            </div>
          )}

          {/* Desktop Nav */}
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
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/70'
                  )}
                  title={getDisplayName(item.id)}
                >
                  <div className={cn('w-4 h-4', getIconColor(item.id))}>
                    {item.icon}
                  </div>
                  <span className="font-medium text-sm whitespace-nowrap">
                    {getDisplayName(item.id)}
                  </span>
                </button>
              ))}
            </div>
          )}

          {/* Language Toggle */}
          <button
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
            <Languages size={16} className="sm:w-5 sm:h-5 text-current" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && !showHomeButton && (
          <div className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/50">
            <div className="px-2 pt-2 pb-3">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {currentPage === 'home' && navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      scrollToSection(item.target || item.id);
                      setIsMenuOpen(false);
                    }}
                    className={cn(
                      'flex flex-col items-center gap-2 p-3 rounded-lg',
                      isActive(item.id)
                        ? 'bg-gray-100/80 text-gray-900'
                        : 'text-gray-600 hover:bg-gray-100/50 hover:text-gray-900'
                    )}
                  >
                    <div className={cn('w-6 h-6', getIconColor(item.id))}>
                      {item.icon}
                    </div>
                    <span className="font-medium text-xs text-center leading-tight">
                      {getDisplayName(item.id)}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
