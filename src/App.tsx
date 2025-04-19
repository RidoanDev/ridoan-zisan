import {
  Download,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  FileText,
  Award,
  Briefcase,
  GraduationCap,
  Languages,
  Computer,
  ScrollText,
  Users,
  Target,
  Star,
  Heart,
  Facebook,
  Instagram,
  Twitter,
  MessageCircle,
  Share2,
  ExternalLink,
} from 'lucide-react';

import { Element, scroller } from 'react-scroll';
import { motion } from 'framer-motion';
import CertificateSlider from './components/CertificateSlider';
import Navigation from './components/Navigation';
import LiveChat from './components/LiveChat';

import { Ghost, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

function App() {
  const [language, setLanguage] = useState<'en' | 'bn'>('en');
  const [activeSection, setActiveSection] = useState<string>('profile');
  const [age, setAge] = useState<number>(0);

  useEffect(() => {
    const calculateAge = () => {
      const birthDate = new Date('2007-12-31');
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();

      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
      ) {
        age--;
      }

      setAge(age);
    };

    calculateAge();
    const interval = setInterval(calculateAge, 86400000);
    return () => clearInterval(interval);
  }, []);

  // কম্পোনেন্টের ভিতরে
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGhostOpen, setIsGhostOpen] = useState(false);
  const containerRef = useRef(null);

  // মোবাইল কিবোর্ড এবং ক্লিক হ্যান্ডলিং
  useEffect(() => {
    let touchStartY = 0;

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      const touchY = e.touches[0].clientY;
      const isScrollingUp = touchY < touchStartY - 10;

      if (isScrollingUp && document.activeElement?.tagName === 'INPUT') {
        // স্ক্রল করছেন কিন্তু ইনপুট ফোকাস আছে (কিবোর্ড ওপেন)
        return;
      }
      setIsMenuOpen(false);
      setIsGhostOpen(false);
    };

    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
        setIsGhostOpen(false);
      }
    };

    // মোবাইল টাচ ইভেন্ট
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const scrollToSection = (section: string) => {
    scroller.scrollTo(section, {
      duration: 800,
      smooth: true,
      offset: -64,
    });
    setActiveSection(section);
  };
  const [showOptions, setShowOptions] = useState(false);

  const content = {
    en: {
      name: 'Md Ridoan Mahmud Zisan',
      role: 'Student | Volunteer | Web Application Developer',
      statement:
        'As a dedicated student and volunteer, I aim to use my academic knowledge and interpersonal skills to contribute to educational and social initiatives. I seek opportunities for growth, collaboration, and positive impact while upholding integrity, empathy, and excellence.',
      downloadCV: 'Download Resume',
      education: 'Education',
      experience: 'Experience',
      skills: 'Skills',
      certificates: 'Certificates',
      contact: 'Contact',
      achievements: 'Achievements',
      certifications: 'Certifications',
      bcsPrep: 'BCS Preparation',
      volunteerWork: 'Volunteer Work',
      languages: 'Language Skills',
      computerSkills: 'Computer Skills',
      adminSkills: 'Administrative Skills',
      family: 'Family & Personal Info',
      age: 'Age',
      years: 'years',
      sections: {
        profile: 'Profile',
        education: 'Education',
        experience: 'Experience',
        skills: 'Skills & Competencies',
        certificates: 'Certificates',
        contact: 'Contact',
        family: 'Family & Personal',
        share: 'Share',
      },
    },
    bn: {
      name: 'মো: রিদওয়ান মাহমুদ জিসান',
      role: 'শিক্ষার্থী | স্বেচ্ছাসেবী | ওয়েব এপ্লিকেশন ডেভলপার',
      statement:
        'একজন নিবেদিতপ্রাণ ছাত্র এবং স্বেচ্ছাসেবক হিসেবে, আমি আমার একাডেমিক জ্ঞান এবং আন্তঃব্যক্তিক দক্ষতা ব্যবহার করে শিক্ষাগত এবং সামাজিক উদ্যোগে অবদান রাখার লক্ষ্য রাখি। আমি সততা, সহানুভূতি এবং শ্রেষ্ঠত্ব বজায় রেখে বৃদ্ধি, সহযোগিতা এবং ইতিবাচক প্রভাবের সুযোগ খুঁজি।',
      downloadCV: 'জীবনবৃত্তান্ত ডাউনলোড করুন',
      education: 'শিক্ষা',
      experience: 'অভিজ্ঞতা',
      skills: 'দক্ষতা',
      certificates: 'সার্টিফিকেট',
      contact: 'যোগাযোগ',
      achievements: 'অর্জন',
      certifications: 'সার্টিফিকেট',
      bcsPrep: 'বিসিএস প্রস্তুতি',
      volunteerWork: 'স্বেচ্ছাসেবী কাজ',
      languages: 'ভাষার দক্ষতা',
      computerSkills: 'কম্পিউটার দক্ষতা',
      adminSkills: 'প্রশাসনিক দক্ষতা',
      family: 'পারিবারিক ও ব্যক্তিগত তথ্য',
      age: 'বয়স',
      years: 'বছর',
      sections: {
        profile: 'প্রোফাইল',
        education: 'শিক্ষা',
        experience: 'অভিজ্ঞতা',
        skills: 'দক্ষতা ও যোগ্যতা',
        certificates: 'সার্টিফিকেট',
        contact: 'যোগাযোগ',
        family: 'পারিবারিক তথ্য',
        share: 'শেয়ার',
      },
    },
  };

  const navigationItems = [
    { id: 'profile', icon: <Users size={20} /> },
    { id: 'education', icon: <GraduationCap size={20} /> },
    { id: 'experience', icon: <Briefcase size={20} /> },
    { id: 'skills', icon: <Award size={20} /> },
    { id: 'family', icon: <Heart size={20} /> },
    { id: 'certificates', icon: <FileText size={20} /> },
    { id: 'contact', icon: <Mail size={20} /> },
    { id: 'share', icon: <Share2 size={20} />, target: 'social-links' },
  ];

  const certificates = [
    {
      title: {
        en: 'Introduction to Artificial Intelligence',
        bn: 'কৃত্রিম বুদ্ধিমত্তার ভূমিকা',
      },
      image: 'https://i.postimg.cc/ZqnGrBMZ/IMG-20250417-WA0001.jpg',
    },
    {
      title: {
        en: 'Introduction to Cyber Security',
        bn: 'সাইবার নিরাপত্তার ভূমিকা',
      },
      image: 'https://i.postimg.cc/wxLScd0t/IMG-20250417-WA0006.jpg',
    },
    {
      title: {
        en: 'Machine Learning',
        bn: 'মেশিন লার্নিং',
      },
      image: 'https://i.postimg.cc/D0kRkCyy/IMG-20250417-WA0002.jpg',
    },
    {
      title: {
        en: 'Digital Marketing',
        bn: 'ডিজিটাল মার্কেটিং',
      },
      image: 'https://i.postimg.cc/SRh1tJDn/IMG-20250417-WA0015.jpg',
    },
    {
      title: {
        en: 'Web Developer Certificate',
        bn: 'ওয়েব ডেভেলপার সার্টিফিকেট',
      },
      image: 'https://i.postimg.cc/LsWrv9cP/IMG-20250417-WA0005.jpg',
    },
    {
      title: {
        en: 'Gender Equality and Human Rights in Climate Action',
        bn: 'জলবায়ু কর্মে লিঙ্গ সমতা এবং মানবাধিকার',
      },
      image: 'https://i.postimg.cc/PqC7LGC5/IMG-20250417-WA0011.jpg',
    },
    {
      title: {
        en: 'Net Zero 101: What, Why and How',
        bn: 'নেট জিরো ১০১: কি, কেন এবং কিভাবে',
      },
      image: 'https://i.postimg.cc/G2s6f0R5/IMG-20250417-WA0003.jpg',
    },
    {
      title: {
        en: 'Introduction to Sustainable Development',
        bn: 'টেকসই উন্নয়নের ভূমিকা',
      },
      image: 'https://i.postimg.cc/C5GXFjzC/IMG-20250417-WA0004.jpg',
    },
    {
      title: {
        en: 'The UN Climate Change Process',
        bn: 'জাতিসংঘের জলবায়ু পরিবর্তন প্রক্রিয়া',
      },
      image: 'https://i.postimg.cc/5NJDskRs/IMG-20250417-WA0007.jpg',
    },
    {
      title: {
        en: 'Money Management',
        bn: 'অর্থ ব্যবস্থাপনা',
      },
      image: 'https://i.postimg.cc/G3F5TxmG/IMG-20250417-WA0016.jpg',
    },
    {
      title: {
        en: 'Certificate ID 001',
        bn: 'সার্টিফিকেট আইডি ০০১',
      },
      image: 'https://i.postimg.cc/Qt5nbpkL/IMG-20250417-WA0012.jpg',
    },
    {
      title: {
        en: 'Communication Hacks',
        bn: 'যোগাযোগ কৌশল',
      },
      image: 'https://i.postimg.cc/zf4cKdhS/IMG-20250417-WA0013.jpg',
    },
    {
      title: {
        en: 'Corporate Etiquette',
        bn: 'কর্পোরেট শিষ্টাচার',
      },
      image: 'https://i.postimg.cc/x83prn4t/IMG-20250417-WA0014.jpg',
    },
    {
      title: {
        en: 'Basic of Management',
        bn: 'ব্যবস্থাপনার মৌলিক বিষয়',
      },
      image: 'https://i.postimg.cc/sDJqq4Fs/IMG-20250417-WA0008.jpg',
    },
    {
      title: {
        en: 'Academic English Grammar',
        bn: 'একাডেমিক ইংরেজি গ্রামার',
      },
      image: 'https://i.postimg.cc/Z57gKYKQ/IMG-20250417-WA0010.jpg',
    },
    {
      title: {
        en: 'CV Writing and Interview',
        bn: 'সিভি লেখা এবং সাক্ষাৎকার',
      },
      image: 'https://i.postimg.cc/hPK3LQXw/IMG-20250417-WA0017.jpg',
    },
    {
      title: {
        en: 'IELTS Mock Test Solution',
        bn: 'আইইএলটিএস মক টেস্ট সমাধান',
      },
      image: 'https://i.postimg.cc/DwyHT4Fs/IMG-20250417-WA0009.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation
        navigationItems={navigationItems}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        language={language}
        setLanguage={setLanguage}
      />
      <Element name="profile">
        <motion.header
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-gradient-to-r from-green-600 to-red-600 text-white pt-20"
        >
          <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <motion.img
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                src="https://github.com/RidoanDev.png"
                alt="Professional headshot"
                className="w-48 h-48 rounded-full border-4 border-white shadow-lg"
              />
              <div>
                <motion.h1
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="text-4xl font-bold mb-2"
                >
                  {content[language].name}
                </motion.h1>
                <motion.p
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl mb-4"
                >
                  {content[language].role}
                </motion.p>
                <motion.p
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg max-w-2xl mb-6"
                >
                  {content[language].statement}
                </motion.p>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex gap-4"
                >
                  <motion.a
                    href="/Resume.pdf"
                    download="Md Ridoan Mahmud Zisan.pdf"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-green-700 px-6 py-2 rounded-md flex items-center gap-2 hover:bg-green-50 cursor-pointer"
                  >
                    <Download size={20} />
                    {content[language].downloadCV}
                  </motion.a>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection('certificates')}
                    className="bg-red-700 text-white px-6 py-2 rounded-md flex items-center gap-2 hover:bg-red-600"
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
      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <Element name="education">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-green-700">
                <GraduationCap />
                {content[language].education}
              </h2>
              <div className="space-y-6">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className="border-l-4 border-green-600 pl-4"
                >
                  <h3 className="font-bold text-lg">
                    {language === 'en'
                      ? 'Higher Secondary Certificate (HSC)'
                      : 'উচ্চ মাধ্যমিক সার্টিফিকেট (এইচএসসি)'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'en'
                      ? 'KARATOA MULTIMEDIA SCHOOL AND COLLEGE'
                      : 'করতোয়া মাল্টিমিডিয়া স্কুল অ্যান্ড কলেজ'}{' '}
                    <a
                      href="https://g.co/kgs/WZW688y"
                      target="_blank"
                      className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                    >
                      <ExternalLink size={16} />
                    </a>
                    <p>{language === 'en' ? '2023-2024' : '২০২৩-২০২৪'}</p>
                  </p>
                  <p className="font-medium">
                    {language === 'en' ? 'GPA: 5.00/5.00' : 'জিপিএ: ৫.০০/৫.০০'}
                  </p>
                  <ul className="mt-2 list-disc list-inside text-gray-700">
                    <li>
                      {language === 'en' ? 'Group: Science' : 'গ্রুপ: বিজ্ঞান'}
                    </li>
                    <li>
                      {language === 'en'
                        ? 'Major: Higher Math'
                        : 'মেজর: উচ্চতর গণিত'}
                    </li>
                  </ul>
                </motion.div>
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className="border-l-4 border-green-600 pl-4"
                >
                  <h3 className="font-bold text-lg">
                    {language === 'en'
                      ? 'Secondary School Certificate (SSC)'
                      : 'মাধ্যমিক স্কুল সার্টিফিকেট (এসএসসি)'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'en'
                      ? 'DHUNAT GOVT N.U. PILOT MODEL HIGH SCHOOL'
                      : 'ধুনট সরকারি এন. ইউ. পাইলট মডেল উচ্চ বিদ্যালয়'}{' '}
                    <a
                      href="https://g.co/kgs/W57Ts2o"
                      target="_blank"
                      className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                    >
                      <ExternalLink size={16} />
                    </a>
                    <p>{language === 'en' ? '2021-2022' : '২০২১-২০২২'}</p>
                  </p>
                  <p className="font-medium">
                    {language === 'en' ? 'GPA: 5.00/5.00' : 'জিপিএ: ৫.০০/৫.০০'}
                  </p>
                  <ul className="mt-2 list-disc list-inside text-gray-700">
                    <li>
                      {language === 'en' ? 'Group: Science' : 'গ্রুপ: বিজ্ঞান'}
                    </li>
                    <li>
                      {language === 'en'
                        ? 'Major: Higher Math'
                        : 'মেজর: উচ্চতর গণিত'}
                    </li>
                  </ul>
                </motion.div>
              </div>
            </motion.section>
          </Element>

          <Element name="experience">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-green-700">
                <Briefcase />
                {content[language].experience}
              </h2>
              <div className="space-y-6">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className="border-l-4 border-red-600 pl-4"
                >
                  <h3 className="font-bold text-lg">
                    {language === 'en'
                      ? 'Bogura Online Blood Donation Organisation'
                      : 'বগুড়া অনলাইন রক্তদান সংগঠন'}{' '}
                    <a
                      href="https://www.facebook.com/groups/BOBO.BD"
                      target="_blank"
                      className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </h3>
                  <p className="text-gray-600">
                    {language === 'en'
                      ? 'Role: Volunteer/'
                      : 'ভূমিকা: স্বেচ্ছাসেবী/'}
                    <a
                      href="https://bobdo.netlify.app"
                      target="_blank"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      {language === 'en' ? 'Developer' : 'ডেভেলপার'}
                    </a>
                  </p>
                  <ul className="mt-2 space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <Target size={18} className="mt-1 flex-shrink-0" />
                      {language === 'en' ? 'First AID' : 'প্রাথমিক চিকিৎসা'}
                    </li>
                    <li className="flex items-start gap-2">
                      <Target size={18} className="mt-1 flex-shrink-0" />
                      {language === 'en' ? 'CPR' : 'সিপিআর'}
                    </li>
                    <li className="flex items-start gap-2">
                      <Users size={18} className="mt-1 flex-shrink-0" />
                      {language === 'en'
                        ? 'Blood Management'
                        : 'রক্ত ব্যবস্থাপনা'}
                    </li>
                  </ul>
                </motion.div>
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className="border-l-4 border-red-600 pl-4"
                >
                  <h3 className="font-bold text-lg">
                    {language === 'en'
                      ? 'Web Application Development'
                      : 'ওয়েব অ্যাপ্লিকেশন ডেভেলপমেন্ট'}{' '}
                    <a
                      href="https://devhub-i.netlify.app"
                      target="_blank"
                      className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </h3>
                  <p className="text-gray-600">
                    {language === 'en'
                      ? 'Role: Developer  | 2024-Present'
                      : 'ভূমিকা: ডেভেলপার  | ২০২৪-বর্তমান'}
                  </p>
                  <ul className="mt-2 space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <Target size={18} className="mt-1 flex-shrink-0" />
                      {language === 'en'
                        ? 'Blood Management App'
                        : 'রক্ত ব্যবস্থাপনা অ্যাপ'}
                      <a
                        href="https://bobdo.netlify.app"
                        target="_blank"
                        className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </li>
                    <li className="flex items-start gap-2">
                      <Target size={18} className="mt-1 flex-shrink-0" />
                      {language === 'en'
                        ? 'UniConverter App'
                        : 'ইউনিকনভার্টার অ্যাপ'}{' '}
                      <a
                        href="https://uniconverter.netlify.app"
                        target="_blank"
                        className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </motion.section>
          </Element>

          <Element name="skills">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-green-700">
                <Award />
                {content[language].skills}
              </h2>
              <div className="grid gap-6">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-bold text-lg flex items-center gap-2 mb-3">
                    <Languages size={20} />
                    {content[language].languages}
                  </h3>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>
                          {language === 'en'
                            ? 'Bangla (Native)'
                            : 'বাংলা (মাতৃভাষা)'}
                        </span>
                        <span className="flex">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <Star
                              key={i}
                              size={16}
                              className="text-green-600 fill-current"
                            />
                          ))}
                        </span>
                      </div>
                      <div className="flex justify-between mb-1">
                        <span>
                          {language === 'en'
                            ? 'English (B2 Level)'
                            : 'ইংরেজি (বি২ লেভেল)'}{' '}
                          <a
                            href="https://drive.google.com/file/d/1S4sreH0dueKZOucHdtpSkrxUcRVpV790/view?usp=drivesdk"
                            target="_blank"
                            className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                          >
                            <ExternalLink size={16} />
                          </a>
                        </span>
                        <span className="flex">
                          {[1, 2, 3, 4].map((i) => (
                            <Star
                              key={i}
                              size={16}
                              className="text-green-600 fill-current"
                            />
                          ))}
                          <Star size={16} className="text-gray-300" />
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-bold text-lg flex items-center gap-2 mb-3">
                    <Computer size={20} />
                    {content[language].computerSkills}
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-green-50 p-2 rounded">
                      {language === 'en'
                        ? 'MS Office Suite'
                        : 'এমএস অফিস স্যুট'}
                    </div>
                    <div className="bg-green-50 p-2 rounded">
                      {language === 'en'
                        ? 'E-filing Systems'
                        : 'ই-ফাইলিং সিস্টেম'}
                    </div>
                    <div className="bg-green-50 p-2 rounded">
                      {language === 'en' ? 'Data Analysis' : 'ডেটা বিশ্লেষণ'}
                    </div>
                    <div className="bg-green-50 p-2 rounded">
                      {language === 'en'
                        ? 'Digital Documentation'
                        : 'ডিজিটাল ডকুমেন্টেশন'}
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-bold text-lg flex items-center gap-2 mb-3">
                    <Target size={20} />
                    {content[language].adminSkills}
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-red-50 p-2 rounded">
                      {language === 'en' ? 'Policy Analysis' : 'নীতি বিশ্লেষণ'}
                    </div>
                    <div className="bg-red-50 p-2 rounded">
                      {language === 'en'
                        ? 'Project Management'
                        : 'প্রকল্প ব্যবস্থাপনা'}
                    </div>
                    <div className="bg-red-50 p-2 rounded">
                      {language === 'en' ? 'Leadership' : 'নেতৃত্ব'}
                    </div>
                    <div className="bg-red-50 p-2 rounded">
                      {language === 'en' ? 'Communication' : 'যোগাযোগ'}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.section>
          </Element>

          <Element name="family">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-green-700">
                <Heart />
                {content[language].family}
              </h2>
              <div className="space-y-6">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className="border-l-4 border-red-600 pl-4"
                >
                  <h3 className="font-bold text-lg">
                    {language === 'en'
                      ? 'Family Information'
                      : 'পারিবারিক তথ্য'}
                  </h3>
                  <ul className="mt-2 space-y-2 text-gray-700">
                    <li>
                      <span className="font-semibold">
                        {language === 'en' ? 'Father' : 'পিতা:'}
                      </span>{' '}
                      {language === 'en'
                        ? 'Md Rokibul Hasan Shekh'
                        : 'মো রকিবুল হাসান সেখ'}{' '}
                      <a
                        href="https://drive.google.com/file/d/1QoS1c0Wo39AtjBK4s-SS9sR7lxaMCEpr/view?usp=drivesdk"
                        target="_blank"
                        className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </li>
                    <li>
                      <span className="font-semibold">
                        {language === 'en' ? 'Mother:' : 'মাতা:'}
                      </span>{' '}
                      {language === 'en'
                        ? 'Mst. Zosna Khatun'
                        : 'মোছা. জোসনা খাতুন'}{' '}
                      <a
                        href="https://drive.google.com/file/d/1Qj3JdVJu1mNzSkZ9l0ofPYKS-B3rOFG3/view?usp=drivesdk"
                        target="_blank"
                        className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </li>
                    <li>
                      <span className="font-semibold">
                        {language === 'en' ? 'Siblings:' : 'ভাইবোন:'}
                      </span>{' '}
                      {language === 'en' ? '1 Younger Sister' : '১ বোন'}{' '}
                      <a
                        href="https://drive.google.com/file/d/1QkgYSEZqGRfOSTg3qSRuIL5mP6t5Gfqs/view?usp=drivesdk"
                        target="_blank"
                        className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </li>
                  </ul>
                </motion.div>
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className="border-l-4 border-green-600 pl-4"
                >
                  <h3 className="font-bold text-lg">
                    {language === 'en'
                      ? 'Personal Information'
                      : 'ব্যক্তিগত তথ্য'}
                  </h3>
                  <ul className="mt-2 space-y-2 text-gray-700">
                    <li>
                      <span className="font-semibold">
                        {language === 'en' ? 'Date of Birth:' : 'জন্ম তারিখ:'}
                      </span>{' '}
                      {language === 'en'
                        ? '31 December, 2007'
                        : '৩১ ডিসেম্বর ২০০৭'}{' '}
                      <a
                        href="https://drive.google.com/file/d/1Q_nVUU1-cJ8bXF-RwoI8kh8ojz3I7ITq/view?usp=drivesdk"
                        target="_blank"
                        className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </li>
                    <li>
                      <span className="font-semibold">
                        {language === 'en' ? 'Age:' : 'বয়স:'}
                      </span>{' '}
                      {age} {language === 'en' ? 'years' : 'বছর'}
                    </li>
                    <li>
                      <span className="font-semibold">
                        {language === 'en' ? 'Blood Group:' : 'রক্তের গ্রুপ:'}
                      </span>{' '}
                      {language === 'en' ? 'B+' : 'বি+'}{' '}
                      <a
                        href="https://drive.google.com/file/d/1QXyH-GK_4FJoWeOZDGnZer4UDBfoK_0B/view?usp=drivesdk"
                        target="_blank"
                        className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </li>
                    <li>
                      <span className="font-semibold">
                        {language === 'en' ? 'Nationality:' : 'জাতীয়তা:'}
                      </span>{' '}
                      {language === 'en' ? 'Bangladeshi' : 'বাংলাদেশী'}
                    </li>
                    <li>
                      <span className="font-semibold">
                        {language === 'en' ? 'Religion:' : 'ধর্ম:'}
                      </span>{' '}
                      {language === 'en' ? 'Islam' : 'ইসলাম'}
                    </li>
                  </ul>
                </motion.div>
              </div>
            </motion.section>
          </Element>

          <Element name="certificates">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-green-700">
                <FileText />
                {content[language].certifications}
              </h2>
              <CertificateSlider
                certificates={certificates}
                language={language}
              />
            </motion.section>
          </Element>

          <Element name="contact">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-green-700">
                <Mail />
                {content[language].contact}
              </h2>
              <div className="space-y-4">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className="p-4 bg-gray-50 rounded-lg"
                >
                  <motion.p
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-2 mb-2"
                  >
                    <Mail size={20} className="text-green-700" />
                    <a
                      href="mailto:ridoan.zisan@gmail.com"
                      className="hover:text-green-700"
                    >
                      ridoan.zisan@gmail.com
                    </a>
                  </motion.p>
                  <motion.p
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-2 mb-2"
                  >
                    <Phone size={20} className="text-green-700" />
                    <a
                      href="tel:+8801712525910"
                      className="hover:text-green-700"
                    >
                      {language === 'en' ? '+8801712525910' : '+৮৮০১৭১২৫২৫৯১০'}
                    </a>
                  </motion.p>
                  <motion.p
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-2 mb-2"
                  >
                    <MapPin size={20} className="text-green-700" />
                    {language === 'en'
                      ? 'Bogura, Bangladesh'
                      : 'বগুড়া, বাংলাদেশ'}{' '}
                    <a
                      href="https://maps.app.goo.gl/EV2Yob73hVp2KKpQ8"
                      target="_blank"
                      className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </motion.p>
                  <motion.p
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-2"
                  >
                    <Linkedin size={20} className="text-green-700" />
                    <a
                      href="https://linkedin.com/in/ridoan2007"
                      className="hover:text-green-700"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {language === 'en' ? 'Linkdin' : 'লিঙ্কডইন'}
                    </a>
                  </motion.p>
                </motion.div>
              </div>
            </motion.section>
          </Element>
        </div>
      </main>
      <footer className="bg-green-700 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">
                {language === 'en' ? 'Quick Links' : 'দ্রুত লিঙ্ক'}
              </h3>
              <ul className="space-y-2">
                {Object.entries(content[language].sections).map(
                  ([key, value]) => (
                    <li key={key}>
                      <button
                        onClick={() => scrollToSection(key)}
                        className="hover:text-green-200"
                      >
                        {value}
                      </button>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">
                {language === 'en'
                  ? 'Important Documents'
                  : 'গুরুত্বপূর্ণ ডকুমেন্টস'}
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <FileText size={16} />
                  <a
                    href="/Resume.pdf"
                    download="Md Ridoan Mahmud Zisan.pdf"
                    className="hover:text-green-200"
                  >
                    {language === 'en'
                      ? 'Resume (PDF)'
                      : 'জীবনবৃত্তান্ত (পিডিএফ)'}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <ScrollText size={16} />
                  <button
                    onClick={() => scrollToSection('certificates')}
                    className="hover:text-green-200"
                  >
                    {language === 'en' ? 'Certificates' : 'সার্টিফিকেট'}
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">
                {content[language].contact}
              </h3>
              <address className="not-italic space-y-2">
                <p className="flex items-center gap-2">
                  <MapPin size={16} />
                  {language === 'en'
                    ? 'Bogura, Bangladesh'
                    : 'বগুড়া, বাংলাদেশ'}
                </p>
                <p className="flex items-center gap-2">
                  <Mail size={16} />
                  ridoan.zisan@gmail.com
                </p>
              </address>
            </div>
          </div>
          <Element name="social-links">
            <div className="mt-8 pt-8 border-t border-green-600">
              <div className="flex justify-center space-x-6">
                <motion.a
                  href="https://www.linkedin.com/in/ridoan2007"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="text-white hover:text-blue-300 transition-colors"
                >
                  <Linkedin size={24} />
                </motion.a>
                <motion.a
                  href="https://wa.me/8801712525910"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="text-white hover:text-green-300 transition-colors"
                >
                  <MessageCircle size={24} />
                </motion.a>
                <motion.a
                  href="https://www.facebook.com/ridoan2007"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="text-white hover:text-blue-300 transition-colors"
                >
                  <Facebook size={24} />
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/ridoan2007"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="text-white hover:text-pink-300 transition-colors"
                >
                  <Instagram size={24} />
                </motion.a>
                <motion.a
                  href="https://x.com/ridoan2007"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="text-white hover:text-blue-300 transition-colors"
                >
                  <Twitter size={24} />
                </motion.a>
              </div>
            </div>
          </Element>
        </div>
      </footer>

      <motion.div
        className="fixed bottom-6 right-6 flex flex-col items-end gap-2"
        ref={containerRef}
      >
        {/* Email Button - Animated */}
        {isMenuOpen && (
          <motion.a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              const isMobile =
                /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                  navigator.userAgent
                );
              isMobile
                ? (window.location.href = 'mailto:ridoan.zisan@gmail.com')
                : window.open(
                    'https://mail.google.com/mail/?view=cm&fs=1&to=ridoan.zisan@gmail.com',
                    '_blank'
                  );
              setIsMenuOpen(false);
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-green-500 text-white p-4 rounded-full shadow-md hover:bg-green-600 transition-colors"
            title="Send Email"
          >
            <Mail size={24} />
          </motion.a>
        )}

        {/* LiveChat Component */}
        <LiveChat />

        {/* Main Floating Button - Smart Toggle */}
        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`p-4 rounded-full shadow-md ${
            isMenuOpen
              ? 'bg-red-500 hover:bg-red-600'
              : 'bg-blue-500 hover:bg-blue-600'
          } text-white transition-colors`}
          title={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <motion.div
            animate={{ rotate: isMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <Mail size={24} />
          </motion.div>
        </motion.button>
      </motion.div>
    </div>
  );
}

export default App;