import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import { Download, ScrollText } from './icons';
import { cn } from '../lib/utils';

interface ProfileSectionProps {
  language: 'en' | 'bn';
  content: any;
  scrollToSection: (section: string) => void;
}

const ProfileSection = ({ language, content, scrollToSection }: ProfileSectionProps) => {
  return (
    <Element name="profile">
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={cn(
          'relative pt-24 pb-16 overflow-hidden',
          'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900',
          'text-white'
        )}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.2, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-purple-500/30 to-transparent rounded-full filter blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
            className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-blue-500/20 to-transparent rounded-full filter blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Profile Image */}
            <motion.div
              initial={{ scale: 0, rotate: -15 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
                delay: 0.2,
              }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/75 to-blue-500/75 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="absolute inset-0 rounded-full border-4 border-white/10 group-hover:border-white/30 transition-all duration-500"></div>
              <img
                src="/profile.jpg"
                alt="Md Ridoan Mahmud Zisan"
                className="w-56 h-56 rounded-full border-4 border-white/20 shadow-2xl relative z-10 transition-all duration-300 group-hover:border-white/40"
              />
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-white/10"
                initial={{ scale: 1, opacity: 0 }}
                animate={{ scale: 1.2, opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeOut',
                }}
              />
            </motion.div>

            {/* Profile Content */}
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
                  {content[language].name}
                </h1>
                <motion.p
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-xl md:text-2xl mb-6 text-slate-200"
                >
                  {content[language].role.split(' | ').map((part: string, i: number) => (
                    <motion.span
                      key={i}
                      className="inline-block mr-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + i * 0.1 }}
                    >
                      {part}
                      {i < content[language].role.split(' | ').length - 1 && ' | '}
                    </motion.span>
                  ))}
                </motion.p>
                <motion.p
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-lg max-w-2xl mx-auto lg:mx-0 mb-8 text-slate-300 leading-relaxed"
                >
                  {content[language].statement}
                </motion.p>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
              >
                <motion.a
                  href="/Resume.pdf"
                  download="Md Ridoan Mahmud Zisan.pdf"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    'px-8 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl',
                    'bg-white text-slate-900 hover:bg-slate-100'
                  )}
                >
                  <Download size={20} />
                  {content[language].downloadCV}
                </motion.a>
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection('certificates')}
                  className={cn(
                    'px-8 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl',
                    'bg-transparent border-2 border-white/30 text-white',
                    'hover:bg-white/10 hover:border-white/50'
                  )}
                >
                  <ScrollText size={20} />
                  {content[language].certifications}
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.header>
    </Element>
  );
};

export default ProfileSection;
