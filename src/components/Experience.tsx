
import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import { Briefcase, Target, HeartHandshake, ExternalLink, Facebook } from 'lucide-react';

interface ExperienceProps {
  language: 'en' | 'bn';
}

const Experience = ({ language }: ExperienceProps) => {
  const experiences = [
    {
      id: 'bobdo',
      type: 'volunteer',
      title: {
        en: 'Bogura Online Blood Donation Organisation',
        bn: 'বগুড়া অনলাইন রক্তদান সংগঠন',
      },
      role: {
        en: 'Volunteer & Developer | 2023-Present',
        bn: 'স্বেচ্ছাসেবী ও ডেভেলপার | ২০২৩-বর্তমান',
      },
      links: [
        {
          label: {
            en: 'Facebook Page',
            bn: 'ফেসবুক পেজ',
          },
          url: 'https://www.facebook.com/groups/BOBO.BD',
          icon: <Facebook size={16} />,
        },
        {
          label: {
            en: 'Web Application',
            bn: 'ওয়েব অ্যাপ্লিকেশন',
          },
          url: 'https://bobdo.netlify.app',
          icon: <ExternalLink size={16} />,
        },
      ],
      achievements: [
        {
          description: {
            en: 'Built blood donor platform serving 68k+ community members',
            bn: '৬৮ হাজার+ সদস্যের জন্য রক্তদাতা প্ল্যাটফর্ম তৈরি করা হয়েছে',
          },
          icon: <Target size={18} className="text-red-500" />,
        },
        {
          description: {
            en: 'Implemented digital system reducing response time by 40%',
            bn: 'ডিজিটাল সিস্টেম চালু করে সাড়া দেওয়ার সময় ৪০% কমানো হয়েছে',
          },
          icon: <HeartHandshake size={18} className="text-red-500" />,
        },
      ],
      borderColor: 'border-red-500',
      bgColor: 'bg-red-100',
      hoverBgColor: 'hover:bg-red-50',
      iconColor: 'text-red-500',
    },
    {
      id: 'projects',
      type: 'development',
      title: {
        en: 'Web Development Projects',
        bn: 'ওয়েব ডেভেলপমেন্ট প্রকল্পসমূহ',
      },
      role: {
        en: 'Independent Developer | 2024-Present',
        bn: 'স্বাধীন ডেভেলপার | ২০২৪-বর্তমান',
      },
      projects: [
        {
          name: {
            en: 'BOBDO',
            bn: 'বিওবিডিও',
          },
          description: {
            en: 'React + Firebase blood management system with real-time donor database',
            bn: 'রিয়েল-টাইম ডোনার ডাটাবেস সহ React ও Firebase দিয়ে তৈরি রক্ত ব্যবস্থাপনা সিস্টেম',
          },
          url: 'https://bobdo.netlify.app',
        },
        {
          name: {
            en: 'UniConverter',
            bn: 'ইউনিকনভার্টার',
          },
          description: {
            en: 'Unit converter supporting 50+ measurement categories with PWA functionality',
            bn: '৫০+ পরিমাপ বিভাগ সমর্থনকারী একক রূপান্তরকারী (PWA সক্ষম)',
          },
          url: 'https://uniconverter.netlify.app',
        },
        {
          name: {
            en: 'DevHub',
            bn: 'ডেভহাব',
          },
          description: {
            en: 'My all projects',
            bn: 'আমার সকল প্রজেক্ট গুলো',
          },
          url: 'https://devhub-i.netlify.app',
        },
      ],
      borderColor: 'border-blue-500',
      bgColor: 'bg-blue-100',
      hoverBgColor: 'hover:bg-blue-50',
      iconColor: 'text-blue-500',
    },
  ];

  const renderProjectItem = (project: any, iconColor: string) => (
    <div className="flex flex-wrap items-center gap-2">
      <Target size={18} className={`flex-shrink-0 ${iconColor}`} />
      <h4 className="font-medium">{project.name[language]}</h4>
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm"
      >
        <ExternalLink size={16} />
        {language === 'en' ? 'View' : 'দেখুন'}
      </a>
    </div>
  );

  return (
    <Element name="experience">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        className="bg-white p-6 rounded-lg shadow-md"
        aria-labelledby="experience-heading"
      >
        <h2
          id="experience-heading"
          className="text-2xl font-bold mb-8 flex items-center gap-2 text-green-700"
        >
          <Briefcase className="text-emerald-500" />
          {language === 'en' ? 'Experience' : 'অভিজ্ঞতা'}
        </h2>

        <div className="space-y-8">
          {experiences.map((experience) => (
            <motion.div
              key={experience.id}
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100 }}
              className={`border-l-4 ${experience.borderColor} pl-4 py-4 ${experience.hoverBgColor} rounded-r-lg transition-colors duration-200 group`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`p-2 ${
                    experience.bgColor
                  } rounded-full group-hover:${experience.bgColor.replace(
                    '100',
                    '200'
                  )} transition-colors flex-shrink-0`}
                >
                  <Briefcase size={20} className={experience.iconColor} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <h3 className="font-bold text-lg">
                      {experience.title[language]}
                    </h3>
                    {experience.links && (
                      <div className="flex flex-wrap gap-2">
                        {experience.links.map((link, index) => (
                          <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm"
                          >
                            {link.icon}
                            {link.label[language]}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>

                  <p className="text-gray-600 mt-1">{experience.role[language]}</p>

                  {experience.achievements && (
                    <ul className="mt-3 space-y-2 text-gray-700">
                      {experience.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="mt-1 flex-shrink-0">{achievement.icon}</span>
                          <span>{achievement.description[language]}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {experience.projects && (
                    <div className="mt-3 space-y-4">
                      {experience.projects.map((project, index) => (
                        <div key={index}>
                          {renderProjectItem(project, experience.iconColor)}
                          <p className="text-gray-700 ml-7 mt-1">
                            {project.description[language]}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </Element>
  );
};

export default Experience;
