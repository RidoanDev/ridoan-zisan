import {
  Download,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  ChevronDown,
  FileText,
  Award,
  Briefcase,
  GraduationCap,
  Languages,
  Computer,
  ScrollText,
  Users,
  Target,
  FileCheck,
  Star,
  Heart,
  Facebook,
  Instagram,
  Twitter,
  MessageCircle,
  Share2,
} from 'lucide-react';
import { useState } from 'react';
import { Link, Element, scroller } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [language, setLanguage] = useState<'en' | 'bn'>('en');
  const [activeSection, setActiveSection] = useState<string>('profile');
  const [showContactOptions, setShowContactOptions] = useState(false);

  const scrollToSection = (section: string) => {
    scroller.scrollTo(section, {
      duration: 800,
      smooth: true,
      offset: -64,
    });
    setActiveSection(section);
  };

  const documents = {
    cv: {
      en: 'https://drive.google.com/file/d/1WViawjcKAsO9sDyo4DIeN1ckSNFcRMeD/view?usp=drivesdk',
      bn: 'https://drive.google.com/file/d/1WViawjcKAsO9sDyo4DIeN1ckSNFcRMeD/view?usp=drivesdk',
    },
    certificates: [
      {
        title: {
          en: 'Web Development Certificate',
          bn: 'ওয়েব ডেভেলপমেন্ট সার্টিফিকেট',
        },
        issuer: {
          en: 'Programming Hero',
          bn: 'প্রোগ্রামিং হিরো',
        },
        date: '2025',
        url: 'https://drive.google.com/file/d/159YDeXfY7TSjxJlNyw-piESNPZXutiqR/view?usp=drivesdk',
      },
      {
        title: {
          en: 'UN Certificates',
          bn: 'জাতিসংঘ সার্টিফিকেট',
        },
        issuer: {
          en: 'United Nation Certificates on SDG',
          bn: 'টেকসই উন্নয়ন লক্ষ্যমাত্রা (SDG) সংক্রান্ত জাতিসংঘের সার্টিফিকেট',
        },
        date: '2025',
        url: 'https://drive.google.com/drive/folders/14CmnXmAOTXvDSdxFfIUUcHqdU-p7ETeH',
      },
      {
        title: {
          en: 'Other Certificates',
          bn: 'অন্যান্য সার্টিফিকেট',
        },
        issuer: {
          en: 'Basic of management, Money management, Corporate etiquette etc.',
          bn: 'ব্যবস্থাপনার মৌলিক বিষয়, অর্থ ব্যবস্থাপনা, কর্পোরেট শিষ্টাচার ইত্যাদি।',
        },
        date: '2025',
        url: 'https://drive.google.com/drive/folders/18XgWheMc8PvrxyGEQYbGUsbp9ga7ul4F',
      },
    ],
  };

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
      documents: 'Documents',
      contact: 'Contact',
      achievements: 'Achievements',
      certifications: 'Certifications',
      bcsPrep: 'BCS Preparation',
      volunteerWork: 'Volunteer Work',
      languages: 'Language Skills',
      computerSkills: 'Computer Skills',
      adminSkills: 'Administrative Skills',
      family: 'Family & Personal Info',
      sections: {
        profile: 'Profile',
        education: 'Education',
        experience: 'Experience',
        skills: 'Skills & Competencies',
        documents: 'Documents',
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
      documents: 'ডকুমেন্টস',
      contact: 'যোগাযোগ',
      achievements: 'অর্জন',
      certifications: 'সার্টিফিকেট',
      bcsPrep: 'বিসিএস প্রস্তুতি',
      volunteerWork: 'স্বেচ্ছাসেবী কাজ',
      languages: 'ভাষার দক্ষতা',
      computerSkills: 'কম্পিউটার দক্ষতা',
      adminSkills: 'প্রশাসনিক দক্ষতা',
      family: 'পারিবারিক ও ব্যক্তিগত তথ্য',
      sections: {
        profile: 'প্রোফাইল',
        education: 'শিক্ষা',
        experience: 'অভিজ্ঞতা',
        skills: 'দক্ষতা ও যোগ্যতা',
        documents: 'ডকুমেন্টস',
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
    { id: 'documents', icon: <FileText size={20} /> },
    { id: 'contact', icon: <Mail size={20} /> },
    { id: 'share', icon: <Share2 size={20} />, target: 'social-links' }, // Add target property
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-white shadow-md fixed w-full z-10"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
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
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}
                className="ml-4 bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-600"
              >
                {language === 'en' ? 'বাংলা' : 'English'}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>
      {/* Header */}
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
                    href={documents.cv[language]}
                    target="_blank"
                    rel="noopener noreferrer"
                    download={`Md_Ridoan_Mahmud_Zisan_CV_${language.toUpperCase()}.pdf`}
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
                    onClick={() => scrollToSection('documents')}
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

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Education Section */}
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
                      className="text-blue-600 hover:text-blue-800"
                    >
                      {language === 'en' ? 'View' : 'দেখুন'}
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
                      className="text-blue-600 hover:text-blue-800"
                    >
                      {language === 'en' ? 'View' : 'দেখুন'}
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

          {/* Experience Section */}
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
                      ? 'Bangladesh Red Crescent Society'
                      : 'বাংলাদেশ রেড ক্রিসেন্ট সোসাইটি'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'en'
                      ? 'Role: Volunteer | 2022-Present'
                      : 'ভূমিকা: স্বেচ্ছাসেবী | ২০২২-বর্তমান'}
                  </p>
                  <ul className="mt-2 space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <Users size={18} className="mt-1 flex-shrink-0" />
                      {language === 'en' ? 'Teamwork' : 'টিমওয়ার্ক'}
                    </li>
                    <li className="flex items-start gap-2">
                      <Target size={18} className="mt-1 flex-shrink-0" />
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
                      ? 'Bogura Online Blood Donation Organisation'
                      : 'বগুড়া অনলাইন রক্তদান সংস্থা'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'en'
                      ? 'Role: Volunteer | 2025-Present'
                      : 'ভূমিকা: স্বেচ্ছাসেবী | ২০২৫-বর্তমান'}
                  </p>
                  <ul className="mt-2 space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <Users size={18} className="mt-1 flex-shrink-0" />
                      {language === 'en' 
                        ? 'Blood Donor Management' 
                        : 'রক্তদাতা ব্যবস্থাপনা'}
                    </li>
                    <li className="flex items-start gap-2">
                      <Target size={18} className="mt-1 flex-shrink-0" />
                      {language === 'en'
                        ? 'Emergency Response'
                        : 'জরুরি প্রতিক্রিয়া'}
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
                      className="text-blue-600 hover:text-blue-800"
                    >
                      {language === 'en' ? 'View' : 'দেখুন'}
                    </a>
                  </h3>
                  <p className="text-gray-600">
                    {language === 'en'
                      ? 'Github | Netlify | 2024-Present'
                      : 'গিটহাব | নেটলিফাই | ২০২৪-বর্তমান'}
                  </p>
                  <ul className="mt-2 space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <Target size={18} className="mt-1 flex-shrink-0" />
                      {language === 'en' ? 'BloodMate App' : 'ব্লাডমেট অ্যাপ'}
                      <a
                        href="https://blood-mate.netlify.app"
                        target="_blank"
                        className="text-blue-600 hover:text-blue-800"
                      >
                        {language === 'en' ? 'View' : 'দেখুন'}
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
                        className="text-blue-600 hover:text-blue-800"
                      >
                        {language === 'en' ? 'View' : 'দেখুন'}
                      </a>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </motion.section>
          </Element>

          {/* Skills Section */}
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
                            className="text-blue-600 hover:text-blue-800"
                          >
                            {language === 'en' ? 'View' : 'দেখুন'}
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

          {/* Family Section */}
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
                        className="text-blue-600 hover:text-blue-800"
                      >
                        {language === 'en' ? 'View' : 'দেখুন'}
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
                        className="text-blue-600 hover:text-blue-800"
                      >
                        {language === 'en' ? 'View' : 'দেখুন'}
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
                        className="text-blue-600 hover:text-blue-800"
                      >
                        {language === 'en' ? 'View' : 'দেখুন'}
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
                        className="text-blue-600 hover:text-blue-800"
                      >
                        {language === 'en' ? 'View' : 'দেখুন'}
                      </a>
                    </li>
                    <li>
                      <span className="font-semibold">
                        {language === 'en' ? 'Blood Group:' : 'রক্তের গ্রুপ:'}
                      </span>{' '}
                      {language === 'en' ? 'B+' : 'বি+'}{' '}
                      <a
                        href="https://drive.google.com/file/d/1QXyH-GK_4FJoWeOZDGnZer4UDBfoK_0B/view?usp=drivesdk"
                        target="_blank"
                        className="text-blue-600 hover:text-blue-800"
                      >
                        {language === 'en' ? 'View' : 'দেখুন'}
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

          {/* Documents Section */}
          <Element name="documents">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-green-700">
                <FileText />
                {content[language].documents}
              </h2>
              <div className="space-y-4">
                {documents.certificates.map((cert, index) => (
                  <motion.a
                    key={index}
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-lg">
                          {cert.title[language]}
                        </h3>
                        <p className="text-gray-600">{cert.issuer[language]}</p>
                        <p className="text-sm text-gray-500">{cert.date}</p>
                      </div>
                      <FileCheck className="text-green-600" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.section>
          </Element>

          {/* Contact Section */}
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
                      className="text-blue-600 hover:text-blue-800"
                    >
                      {language === 'en' ? 'View' : 'দেখুন'}
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

      {/* Footer */}
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
                    href={documents.cv[language]}
                    download
                    className="hover:text-green-200"
                  >
                    {language === 'en' ? 'CV (PDF)' : 'সিভি (পিডিএফ)'}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <ScrollText size={16} />
                  <button
                    onClick={() => scrollToSection('documents')}
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

      {/* Floating Contact Button */}
      <motion.div className="fixed bottom-6 right-6 flex flex-col items-end gap-2">
        <AnimatePresence>
          {showContactOptions && (
            <>
              {/* Desktop Icon */}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ridoan.zisan@gmail.com"
                target="_blank"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
                title="Email on Desktop"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </motion.a>

              {/* Mobile Icon */}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                href="mailto:ridoan.zisan@gmail.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-colors"
                title="Email on Mobile"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                  <line x1="12" y1="18" x2="12" y2="18"></line>
                </svg>
              </motion.a>
            </>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setShowContactOptions(!showContactOptions)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-green-700 text-white p-4 rounded-full shadow-lg hover:bg-green-800 transition-colors"
        >
          {showContactOptions ? <ChevronDown size={24} /> : <Mail size={24} />}
        </motion.button>
      </motion.div>
    </div>
  );
}

export default App;
