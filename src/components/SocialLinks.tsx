
import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import { ExternalLink, Share2 } from 'lucide-react';

interface SocialLinksProps {
  language: 'en' | 'bn';
}

const SocialLinks = ({ language }: SocialLinksProps) => {
  const socialData = {
    title: {
      en: 'Social Links',
      bn: 'সামাজিক লিংক',
    },
    links: [
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/ridoan2007',
        color: 'bg-blue-600 hover:bg-blue-700',
        description: {
          en: 'Professional networking',
          bn: 'পেশাগত নেটওয়ার্কিং',
        },
      },
      {
        name: 'GitHub',
        url: 'https://github.com/ridoan2007',
        color: 'bg-gray-800 hover:bg-gray-900',
        description: {
          en: 'Code repositories',
          bn: 'কোড রিপোজিটরি',
        },
      },
      {
        name: 'Facebook',
        url: 'https://www.facebook.com/ridoan2007',
        color: 'bg-blue-500 hover:bg-blue-600',
        description: {
          en: 'Social networking',
          bn: 'সামাজিক নেটওয়ার্কিং',
        },
      },
      {
        name: 'WhatsApp',
        url: 'https://wa.me/8801712525910',
        color: 'bg-green-500 hover:bg-green-600',
        description: {
          en: 'Direct messaging',
          bn: 'সরাসরি বার্তা',
        },
      },
    ],
  };

  return (
    <Element name="social-links">
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white p-6 rounded-lg shadow-lg border border-gray-100"
        aria-labelledby="social-heading"
      >
        <h2
          id="social-heading"
          className="text-2xl font-bold mb-8 flex items-center gap-3 text-gray-800"
        >
          <div className="p-2 bg-teal-100 rounded-lg">
            <Share2 className="text-teal-600" size={24} />
          </div>
          {socialData.title[language]}
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          {socialData.links.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`${link.color} text-white p-4 rounded-lg transition-all duration-300 flex items-center justify-between group shadow-md hover:shadow-lg`}
            >
              <div>
                <h3 className="font-semibold text-lg">{link.name}</h3>
                <p className="text-sm opacity-90">
                  {link.description[language]}
                </p>
              </div>
              <ExternalLink 
                size={20} 
                className="opacity-70 group-hover:opacity-100 transition-opacity" 
              />
            </motion.a>
          ))}
        </div>
      </motion.section>
    </Element>
  );
};

export default SocialLinks;
