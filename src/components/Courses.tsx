
import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import {
  BookOpen,
  Code,
  LineChart,
  BrainCircuit,
  Trophy,
  Calculator,
  Users,
  Target,
  Binary,
  Network,
} from 'lucide-react';

interface CoursesProps {
  language: 'en' | 'bn';
}

const Courses = ({ language }: CoursesProps) => {
  const professionalCourses = [
    {
      id: 'ai-course',
      title: {
        en: 'AI, Machine Learning & Cyber Security',
        bn: 'কৃত্রিম বুদ্ধিমত্তা, মেশিন লার্নিং ও সাইবার নিরাপত্তা',
      },
      description: {
        en: 'Gained foundational knowledge of AI concepts and applications',
        bn: 'এআই ধারণা এবং প্রয়োগ সম্পর্কে মৌলিক জ্ঞান অর্জন',
      },
      platform: 'Simplilearn | Skillup',
      duration: language === 'en' ? '2 weeks' : '২ সপ্তাহ',
      icon: <BrainCircuit size={20} className="text-purple-500" />,
    },
    {
      id: 'web-dev-course',
      title: {
        en: 'Complete Web Development',
        bn: 'সম্পূর্ণ ওয়েব ডেভেলপমেন্ট',
      },
      description: {
        en: 'Acquired hands-on skills in building modern web applications',
        bn: 'আধুনিক ওয়েব অ্যাপ্লিকেশন নির্মাণে ব্যবহারিক দক্ষতা অর্জন',
      },
      platform: 'Programming Hero',
      duration: language === 'en' ? '1 week' : '১ সপ্তাহ',
      icon: <Code size={20} className="text-orange-500" />,
    },
    {
      id: 'digital-marketing-course',
      title: {
        en: 'Digital Marketing',
        bn: 'ডিজিটাল মার্কেটিং',
      },
      description: {
        en: 'Learned strategic online promotion techniques',
        bn: 'কৌশলগত অনলাইন প্রচার কৌশল শিখেছি',
      },
      platform: 'HubSpot Academy',
      duration: language === 'en' ? '1 week' : '১ সপ্তাহ',
      icon: <LineChart size={20} className="text-green-500" />,
    },
    {
      id: 'corporate-skills-course',
      title: {
        en: 'Corporate Skills',
        bn: 'কর্পোরেট দক্ষতা',
      },
      description: {
        en: 'Mastered professional etiquette, management basics, and communication techniques',
        bn: 'পেশাদার শিষ্টাচার, ব্যবস্থাপনা বেসিক, এবং যোগাযোগ কৌশল আয়ত্ত',
      },
      platform: '10 Minute School',
      duration: language === 'en' ? '3 weeks' : '৩ সপ্তাহ',
      icon: <Users size={20} className="text-amber-500" />,
    },
  ];

  const olympiads = [
    {
      id: 'zero-olympiad',
      title: {
        en: 'Zero Olympiad',
        bn: 'জিরো অলিম্পিয়াড',
      },
      description: {
        en: 'UN SDGs and climate action strategies',
        bn: 'জাতিসংঘের এসডিজি এবং জলবায়ু কর্ম কৌশল',
      },
      level: {
        en: 'Semi-Final',
        bn: 'সেমি-ফাইনাল',
      },
      icon: <Target size={20} className="text-red-500" />,
    },
    {
      id: 'ai-olympiad',
      title: {
        en: 'Bangladesh Artificial Intelligence Olympiad',
        bn: 'বাংলাদেশ আর্টিফিশিয়াল ইন্টেলিজেন্স অলিম্পিয়াড',
      },
      description: {
        en: 'National AI competition testing knowledge in machine learning, neural networks, and AI ethics',
        bn: 'মেশিন লার্নিং, নিউরাল নেটওয়ার্ক এবং এআই নীতিশাস্ত্রের জ্ঞান পরীক্ষা করে জাতীয় এআই প্রতিযোগিতা',
      },
      level: {
        en: 'Semi-Final',
        bn: 'সেমি-ফাইনাল',
      },
      icon: <Binary size={20} className="text-indigo-500" />,
    },
    {
      id: 'ict-olympiad',
      title: {
        en: 'ICT Olympiad Bangladesh',
        bn: 'আইসিটি অলিম্পিয়াড বাংলাদেশ',
      },
      description: {
        en: 'National competition testing knowledge in information and communication technologies',
        bn: 'তথ্য ও যোগাযোগ প্রযুক্তি বিষয়ক জ্ঞান পরীক্ষা করে জাতীয় প্রতিযোগিতা',
      },
      level: {
        en: 'Semi-Final',
        bn: 'সেমি-ফাইনাল',
      },
      icon: <Network size={20} className="text-emerald-500" />,
    },
    {
      id: 'math-olympiad',
      title: {
        en: 'Math Olympiad',
        bn: 'গণিত অলিম্পিয়াড',
      },
      description: {
        en: 'Prestigious mathematics competition for exceptional problem-solving skills',
        bn: 'অসাধারণ সমস্যা সমাধানের দক্ষতার জন্য মর্যাদাপূর্ণ গণিত প্রতিযোগিতা',
      },
      level: {
        en: 'Selective Round',
        bn: 'নির্বাচনী রাউন্ড',
      },
      icon: <Calculator size={20} className="text-cyan-500" />,
    },
  ];

  const renderCourseItem = (course: any) => (
    <motion.div
      key={course.id}
      initial={{ x: -20, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 100 }}
      className="border-l-4 border-emerald-500 pl-4 py-4 hover:bg-emerald-50 rounded-r-lg transition-colors duration-200 group"
    >
      <div className="flex items-start gap-4">
        <div className="p-2 bg-emerald-100 rounded-full group-hover:bg-emerald-200 transition-colors flex-shrink-0">
          {course.icon}
        </div>
        <div>
          <h4 className="font-semibold text-gray-800">{course.title[language]}</h4>
          <p className="text-gray-600 mt-2">{course.description[language]}</p>
          <p className="text-sm mt-3 text-gray-500">
            <span className="font-medium">{course.platform}</span>
            <span className="mx-2">•</span>
            <span>{course.duration}</span>
          </p>
        </div>
      </div>
    </motion.div>
  );

  const renderOlympiadItem = (olympiad: any) => (
    <motion.div
      key={olympiad.id}
      initial={{ x: -20, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 100 }}
      className="border-l-4 border-amber-500 pl-4 py-4 hover:bg-amber-50 rounded-r-lg transition-colors duration-200 group"
    >
      <div className="flex items-start gap-4">
        <div className="p-2 bg-amber-100 rounded-full group-hover:bg-amber-200 transition-colors flex-shrink-0">
          {olympiad.icon}
        </div>
        <div>
          <h4 className="font-semibold text-gray-800">{olympiad.title[language]}</h4>
          <p className="text-gray-600 mt-2">{olympiad.description[language]}</p>
          <p className="text-sm mt-3 font-medium text-amber-700">{olympiad.level[language]}</p>
        </div>
      </div>
    </motion.div>
  );

  return (
    <Element name="courses">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        className="bg-white p-6 rounded-lg shadow-md"
        aria-labelledby="courses-heading"
      >
        <h2
          id="courses-heading"
          className="text-2xl font-bold mb-8 flex items-center gap-2 text-green-700"
        >
          <BookOpen className="text-emerald-500" />
          {language === 'en' ? 'Professional Development' : 'পেশাদার উন্নয়ন'}
        </h2>

        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6 text-gray-800 flex items-center gap-2">
            <Trophy className="text-amber-500" />
            {language === 'en' ? 'Academic Olympiads' : 'একাডেমিক অলিম্পিয়াড'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {olympiads.map(renderOlympiadItem)}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6 text-gray-800 flex items-center gap-2">
            <BookOpen className="text-emerald-500" />
            {language === 'en' ? 'Professional Courses' : 'পেশাদার কোর্স'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {professionalCourses.map(renderCourseItem)}
          </div>
        </div>
      </motion.section>
    </Element>
  );
};

export default Courses;
