import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import {
  Award,
  Languages,
  Target,
  MessageSquare,
  PlusCircle,
  Star,
} from 'lucide-react';

interface SkillsProps {
  language: 'en' | 'bn';
}

const Skills = ({ language }: SkillsProps) => {
  const skillsData = {
    languages: {
      title: {
        en: 'Languages',
        bn: 'ভাষা',
      },
      skills: [
        {
          name: {
            en: 'Bengali (Fluent)',
            bn: 'বাংলা (সাবলীল)',
          },
          level: 5,
        },
        {
          name: {
            en: 'English (Professional)',
            bn: 'ইংরেজি (পেশাদার)',
          },
          level: 4,
        },
      ],
    },
    professional: {
      title: {
        en: 'Core Professional Skills',
        bn: 'মূল পেশাদার দক্ষতা',
      },
      skills: [
        { en: 'MS Office Suite', bn: 'এমএস অফিস' },
        { en: 'Email Communication', bn: 'ইমেইল যোগাযোগ' },
        { en: 'Team Collaboration', bn: 'দলগত সমন্বয়' },
        { en: 'Time Management', bn: 'সময় ব্যবস্থাপনা' },
        { en: 'Problem Solving', bn: 'সমস্যা সমাধান' },
        { en: 'Professional Ethics', bn: 'পেশাদার নীতি' },
      ],
      color: 'bg-green-50',
    },
    communication: {
      title: {
        en: 'Communication Skills',
        bn: 'যোগাযোগ দক্ষতা',
      },
      skills: [
        { en: 'Report Writing', bn: 'রিপোর্ট লেখা' },
        { en: 'Active Listening', bn: 'সক্রিয় শোনা' },
        { en: 'Presentation', bn: 'প্রেজেন্টেশন' },
        { en: 'Professional Email', bn: 'পেশাদার ইমেইল' },
      ],
      color: 'bg-blue-50',
    },
    additional: {
      title: {
        en: 'Additional Skills',
        bn: 'অতিরিক্ত দক্ষতা',
      },
      skills: [
        { en: 'Canva/Photoshop', bn: 'ক্যানভা/ফটোশপ' },
        { en: 'Social Media', bn: 'সোশ্যাল মিডিয়া' },
        { en: 'Customer Service', bn: 'গ্রাহক সেবা' },
        { en: 'Basic Troubleshooting', bn: 'বেসিক সমস্যা সমাধান' },
      ],
      color: 'bg-purple-50',
    },
  };

  return (
    <Element name="skills">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        className="bg-white p-6 rounded-lg shadow-md"
        aria-labelledby="skills-heading"
      >
        <h2
          id="skills-heading"
          className="text-2xl font-bold mb-8 flex items-center gap-2 text-green-700"
        >
          <Award className="text-emerald-500" aria-hidden="true" />
          {language === 'en' ? 'Skills' : 'দক্ষতা'}
        </h2>

        <div className="space-y-8">
          {/* Language Skills */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            <h3 className="font-bold text-lg flex items-center gap-2 mb-4">
              <Languages
                size={20}
                className="text-blue-500"
                aria-hidden="true"
              />
              {skillsData.languages.title[language]}
            </h3>
            <div className="space-y-4">
              {skillsData.languages.skills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                      {skill.name[language]}
                    </span>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star
                          key={i}
                          size={16}
                          className={`${
                            i <= skill.level
                              ? 'text-yellow-500 fill-current'
                              : 'text-gray-300'
                          }`}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div
                      className="bg-yellow-500 h-1.5 rounded-full"
                      style={{ width: `${(skill.level / 5) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Other Skills Sections */}
          {[
            skillsData.professional,
            skillsData.communication,
            skillsData.additional,
          ].map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                type: 'spring',
                stiffness: 100,
                delay: sectionIndex * 0.1,
              }}
            >
              <h3 className="font-bold text-lg flex items-center gap-2 mb-4">
                {sectionIndex === 0 ? (
                  <Target
                    size={20}
                    className="text-green-500"
                    aria-hidden="true"
                  />
                ) : sectionIndex === 1 ? (
                  <MessageSquare
                    size={20}
                    className="text-blue-500"
                    aria-hidden="true"
                  />
                ) : (
                  <PlusCircle
                    size={20}
                    className="text-purple-500"
                    aria-hidden="true"
                  />
                )}
                {section.title[language]}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {section.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={`${section.color} p-3 rounded-lg hover:shadow-sm transition-all duration-200`}
                  >
                    {skill[language]}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </Element>
  );
};

export default Skills;
