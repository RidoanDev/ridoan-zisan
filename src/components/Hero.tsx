import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import { Download } from 'lucide-react';

interface HeroProps {
  language: 'en' | 'bn';
}

const Hero = ({ language }: HeroProps) => {
  const heroData = {
    name: {
      en: 'Md Ridoan Mahmud Zisan',
      bn: 'মোঃ রিদোয়ান মাহমুদ জিসান',
    },
    title: {
      en: 'Student & Web Developer',
      bn: 'ছাত্র ও ওয়েব ডেভেলপার',
    },
    description: {
      en: 'Passionate about creating digital solutions and contributing to community development through technology.',
      bn: 'প্রযুক্তির মাধ্যমে ডিজিটাল সমাধান তৈরি এবং সমাজ সেবায় অবদান রাখতে আগ্রহী।',
    },
    resumeButton: {
      en: 'Download Resume',
      bn: 'রিজিউমি ডাউনলোড করুন',
    },
  };

  return (
    <Element name="profile">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-8"
          >
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-48 h-48 rounded-full mx-auto shadow-2xl border-8 border-white"
            />
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-gray-800 mb-4"
          >
            {heroData.name[language]}
          </motion.h1>

          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-indigo-600 font-medium mb-6"
          >
            {heroData.title[language]}
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            {heroData.description[language]}
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <a
              href="/Resume.pdf"
              download
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Download size={20} />
              {heroData.resumeButton[language]}
            </a>
          </motion.div>
        </div>
      </motion.section>
    </Element>
  );
};

export default Hero;
