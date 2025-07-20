
import { Element } from 'react-scroll';
import { Download, ScrollText, Search, PenTool } from './icons';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';

interface ProfileSectionProps {
  language: 'en' | 'bn';
  content: any;
  scrollToSection: (section: string) => void;
}

const ProfileSection = ({
  language,
  content,
  scrollToSection,
}: ProfileSectionProps) => {
  return (
    <Element name="profile">
      <header
        className={cn(
          'relative pt-20 pb-16 overflow-hidden',
          'bg-gradient-to-br from-white via-gray-50 to-gray-100 backdrop-blur-sm',
          'text-[#0a192f]'
        )}
      >
        {/* Subtle animated background elements */}
        <motion.div 
          className="absolute inset-0 opacity-5 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 2 }}
        >
          <motion.div 
            className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-[#64ffda] filter blur-xl"
            animate={{
              scale: [1, 1.1, 1],
              translateX: [-10, 10, -10],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-1/3 right-1/3 w-48 h-48 rounded-full bg-[#0a192f] filter blur-xl"
            animate={{
              scale: [1, 1.05, 1],
              translateY: [0, -10, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Profile Image with subtle animation */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 rounded-full bg-[#64ffda]/20 animate-pulse"></div>
              <img
                src="/profile.jpg"
                alt="Md Ridoan Mahmud Zisan"
                className="w-48 h-48 rounded-full border border-[#64ffda]/30 object-cover relative z-10"
              />
            </motion.div>

            {/* Profile Content */}
            <motion.div 
              className="flex-1 text-center lg:text-left"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-3">
                  {content[language].name}
                </h1>
                <p className="text-lg md:text-xl mb-4 text-[#0a192f]/90">
                  {content[language].role}
                </p>
                <p className="text-base max-w-2xl mx-auto lg:mx-0 mb-6 text-[#0a192f]/80 leading-relaxed">
                  {content[language].statement}
                </p>
              </div>

              {/* Action Buttons with subtle hover animations */}
              <motion.div 
                className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.a
                  href="/Resume.pdf"
                  download="Md Ridoan Mahmud Zisan.pdf"
                  className={cn(
                    'px-6 py-2 rounded-md font-medium flex items-center justify-center gap-2',
                    'bg-gradient-to-r from-[#64ffda] to-[#52e6c4] text-[#0a192f]',
                    'hover:shadow-md transition-all',
                    'relative overflow-hidden'
                  )}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download size={18} />
                  {content[language].downloadCV}
                </motion.a>
                <motion.button
                  onClick={() => scrollToSection('certificates')}
                  className={cn(
                    'px-6 py-2 rounded-md font-medium flex items-center justify-center gap-2',
                    'bg-white/90 border border-[#64ffda] text-[#0a192f]',
                    'hover:bg-[#64ffda]/10 transition-colors',
                    'backdrop-blur-sm'
                  )}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ScrollText size={18} />
                  {content[language].certifications}
                </motion.button>
                <motion.button
                  onClick={() => scrollToSection('research')}
                  className={cn(
                    'px-6 py-2 rounded-md font-medium flex items-center justify-center gap-2',
                    'bg-white/90 border border-blue-500 text-blue-600',
                    'hover:bg-blue-50 transition-colors',
                    'backdrop-blur-sm'
                  )}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Search size={18} />
                  {language === 'en' ? 'Research' : 'গবেষণা'}
                </motion.button>
                <motion.button
                  onClick={() => scrollToSection('blog')}
                  className={cn(
                    'px-6 py-2 rounded-md font-medium flex items-center justify-center gap-2',
                    'bg-white/90 border border-purple-500 text-purple-600',
                    'hover:bg-purple-50 transition-colors',
                    'backdrop-blur-sm'
                  )}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <PenTool size={18} />
                  {language === 'en' ? 'Blog' : 'ব্লগ'}
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </header>
    </Element>
  );
};

export default ProfileSection;
