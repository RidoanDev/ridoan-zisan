
import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  FileText,
  Download,
  Award,
  MessageCircle,
  Facebook,
  Instagram,
  Twitter,
  UserCircle,
  School,
  BookOpen,
  Briefcase,
  FileBadge,
  Code,
  HeartHandshake,
  Share2,
} from 'lucide-react';

interface FooterProps {
  language: 'en' | 'bn';
  scrollToSection: (section: string) => void;
  content: {
    [key: string]: any;
    sections: {
      [key: string]: string;
    };
    contact: string;
    name: string;
  };
}

const Footer = ({ language, scrollToSection, content }: FooterProps) => {
  const footerData = {
    quickLinks: {
      title: {
        en: 'Quick Links',
        bn: 'দ্রুত লিঙ্ক',
      },
      items: [
        {
          icon: <UserCircle size={16} className="text-indigo-400" />,
          text: {
            en: 'Profile',
            bn: 'প্রোফাইল',
          },
          action: () => scrollToSection('profile'),
        },
        {
          icon: <School size={16} className="text-blue-400" />,
          text: {
            en: 'Education',
            bn: 'শিক্ষা',
          },
          action: () => scrollToSection('education'),
        },
        {
          icon: <BookOpen size={16} className="text-emerald-400" />,
          text: {
            en: 'Courses',
            bn: 'কোর্সসমূহ',
          },
          action: () => scrollToSection('courses'),
        },
        {
          icon: <Briefcase size={16} className="text-amber-400" />,
          text: {
            en: 'Experience',
            bn: 'অভিজ্ঞতা',
          },
          action: () => scrollToSection('experience'),
        },
        {
          icon: <FileBadge size={16} className="text-red-400" />,
          text: {
            en: 'Certificates',
            bn: 'সার্টিফিকেট',
          },
          action: () => scrollToSection('certificates'),
        },
        {
          icon: <Code size={16} className="text-purple-400" />,
          text: {
            en: 'Skills',
            bn: 'দক্ষতা',
          },
          action: () => scrollToSection('skills'),
        },
        {
          icon: <HeartHandshake size={16} className="text-pink-400" />,
          text: {
            en: 'Family',
            bn: 'পরিবার',
          },
          action: () => scrollToSection('family'),
        },
        {
          icon: <Mail size={16} className="text-cyan-400" />,
          text: {
            en: 'Contact',
            bn: 'যোগাযোগ',
          },
          action: () => scrollToSection('contact'),
        },
        {
          icon: <Share2 size={16} className="text-teal-400" />,
          text: {
            en: 'Share',
            bn: 'শেয়ার',
          },
          action: () => scrollToSection('social-links'),
        },
      ],
    },
    documents: {
      title: {
        en: 'Important Documents',
        bn: 'গুরুত্বপূর্ণ ডকুমেন্টস',
      },
      items: [
        {
          icon: <Download size={16} className="text-emerald-400" />,
          text: {
            en: 'Resume (PDF)',
            bn: 'জীবনবৃত্তান্ত (পিডিএফ)',
          },
          action: () => {
            const link = document.createElement('a');
            link.href = '/Resume.pdf';
            link.download = 'Md Ridoan Mahmud Zisan.pdf';
            link.click();
          },
        },
        {
          icon: <Award size={16} className="text-amber-400" />,
          text: {
            en: 'Certificates',
            bn: 'সার্টিফিকেট',
          },
          action: () => scrollToSection('certificates'),
        },
      ],
    },
    contact: {
      title: {
        en: 'Contact',
        bn: 'যোগাযোগ',
      },
      items: [
        {
          icon: <MapPin size={16} className="text-red-400" />,
          text: {
            en: 'Bogura, Bangladesh',
            bn: 'বগুড়া, বাংলাদেশ',
          },
        },
        {
          icon: <Mail size={16} className="text-blue-400" />,
          text: 'ridoan.zisan@gmail.com',
          link: 'mailto:ridoan.zisan@gmail.com',
        },
        {
          icon: <Phone size={16} className="text-green-400" />,
          text: {
            en: '+8801712525910',
            bn: '+৮৮০১৭১২৫২৫৯১০',
          },
          link: 'tel:+8801712525910',
        },
      ],
    },
    social: {
      title: {
        en: 'Connect with me',
        bn: 'আমার সাথে যুক্ত হোন',
      },
      links: [
        {
          icon: <Linkedin size={24} />,
          href: 'https://www.linkedin.com/in/ridoan2007',
          color: 'hover:text-blue-400',
        },
        {
          icon: <MessageCircle size={24} />,
          href: 'https://wa.me/8801712525910',
          color: 'hover:text-green-400',
        },
        {
          icon: <Facebook size={24} />,
          href: 'https://www.facebook.com/ridoan2007',
          color: 'hover:text-blue-500',
        },
        {
          icon: <Instagram size={24} />,
          href: 'https://www.instagram.com/ridoan2007',
          color: 'hover:text-pink-400',
        },
        {
          icon: <Twitter size={24} />,
          href: 'https://x.com/ridoan2007',
          color: 'hover:text-sky-400',
        },
      ],
    },
  };

  const renderQuickLinks = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
        {footerData.quickLinks.title[language]}
      </h3>
      <ul className="space-y-3">
        {footerData.quickLinks.items.map((item, index) => (
          <li key={index}>
            <motion.button
              whileHover={{ x: 5 }}
              onClick={item.action}
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors w-full text-left"
            >
              {item.icon}
              {item.text[language]}
            </motion.button>
          </li>
        ))}
      </ul>
    </motion.div>
  );

  const renderDocuments = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
    >
      <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
        <FileText size={20} />
        {footerData.documents.title[language]}
      </h3>
      <ul className="space-y-3">
        {footerData.documents.items.map((item, index) => (
          <li key={index}>
            <motion.button
              whileHover={{ x: 5 }}
              onClick={item.action}
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors w-full text-left"
            >
              {item.icon}
              {item.text[language]}
            </motion.button>
          </li>
        ))}
      </ul>
    </motion.div>
  );

  const renderContactInfo = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
        <Mail size={20} />
        {footerData.contact.title[language]}
      </h3>
      <address className="not-italic space-y-3">
        {footerData.contact.items.map((item, index) =>
          item.link ? (
            <motion.a
              key={index}
              whileHover={{ x: 5 }}
              href={item.link}
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              {item.icon}
              {typeof item.text === 'string'
                ? item.text
                : item.text[language]}
            </motion.a>
          ) : (
            <motion.p
              key={index}
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 text-gray-300"
            >
              {item.icon}
              {typeof item.text === 'string'
                ? item.text
                : item.text[language]}
            </motion.p>
          )
        )}
      </address>
    </motion.div>
  );

  const renderSocialLinks = () => (
    <Element name="social-links">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-12 pt-8 border-t border-gray-700"
      >
        <div className="flex flex-col items-center">
          <h4 className="text-lg font-medium mb-6">
            {footerData.social.title[language]}
          </h4>
          <div className="flex justify-center space-x-6">
            {footerData.social.links.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`text-gray-300 ${social.color} transition-colors duration-300`}
                aria-label={`Social link ${index}`}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </Element>
  );

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full filter blur-[90px] opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {renderQuickLinks()}
          {renderDocuments()}
          {renderContactInfo()}
        </div>

        {renderSocialLinks()}

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 text-center text-gray-400 text-sm"
        >
          <p>
            &copy; {new Date().getFullYear()} {content?.name || ''}.{' '}
            {language === 'en'
              ? 'All rights reserved'
              : 'সমস্ত অধিকার সংরক্ষিত'}
            .
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
