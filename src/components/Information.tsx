
import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import { Heart, ExternalLink } from 'lucide-react';

interface InformationProps {
  language: 'en' | 'bn';
  age: number;
}

const Information = ({ language, age }: InformationProps) => {
  const familyData = {
    familyInfo: {
      title: {
        en: 'Family Information',
        bn: 'পারিবারিক তথ্য',
      },
      members: [
        {
          relation: { en: 'Father', bn: 'পিতা' },
          name: { en: 'Md Rokibul Hasan Shekh', bn: 'মো রকিবুল হাসান সেখ' },
          link: 'https://drive.google.com/file/d/1QoS1c0Wo39AtjBK4s-SS9sR7lxaMCEpr/view?usp=drivesdk',
        },
        {
          relation: { en: 'Mother', bn: 'মাতা' },
          name: { en: 'Mst. Zosna Khatun', bn: 'মোছা. জোসনা খাতুন' },
          link: 'https://drive.google.com/file/d/1Qj3JdVJu1mNzSkZ9l0ofPYKS-B3rOFG3/view?usp=drivesdk',
        },
        {
          relation: { en: 'Siblings', bn: 'ভাইবোন' },
          name: { en: '1 Younger Sister', bn: '১ বোন' },
          link: 'https://drive.google.com/file/d/1QkgYSEZqGRfOSTg3qSRuIL5mP6t5Gfqs/view?usp=drivesdk',
        },
      ],
    },
    personalInfo: {
      title: {
        en: 'Personal Information',
        bn: 'ব্যক্তিগত তথ্য',
      },
      details: [
        {
          label: { en: 'Date of Birth', bn: 'জন্ম তারিখ' },
          value: { en: '31 December, 2007', bn: '৩১ ডিসেম্বর ২০০৭' },
          link: 'https://drive.google.com/file/d/1Q_nVUU1-cJ8bXF-RwoI8kh8ojz3I7ITq/view?usp=drivesdk',
        },
        {
          label: { en: 'Age', bn: 'বয়স' },
          value: { en: `${age} years`, bn: `${age} বছর` },
          link: null,
        },
        {
          label: { en: 'Blood Group', bn: 'রক্তের গ্রুপ' },
          value: { en: 'B+', bn: 'বি+' },
          link: 'https://drive.google.com/file/d/1QXyH-GK_4FJoWeOZDGnZer4UDBfoK_0B/view?usp=drivesdk',
        },
        {
          label: { en: 'Nationality', bn: 'জাতীয়তা' },
          value: { en: 'Bangladeshi', bn: 'বাংলাদেশী' },
          link: null,
        },
        {
          label: { en: 'Religion', bn: 'ধর্ম' },
          value: { en: 'Humanity', bn: 'মানবধর্ম' },
          link: null,
        },
      ],
    },
  };

  return (
    <Element name="family">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        className="bg-white p-6 rounded-lg shadow-md"
        aria-labelledby="family-heading"
      >
        <h2
          id="family-heading"
          className="text-2xl font-bold mb-8 flex items-center gap-2 text-green-700"
        >
          <Heart className="text-red-500" aria-hidden="true" />
          {language === 'en' ? 'Family' : 'পরিবার'}
        </h2>

        <div className="space-y-8">
          {/* Family Information */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="border-l-4 border-red-500 pl-4 py-2 hover:bg-red-50 rounded-r-lg transition-colors duration-200"
          >
            <h3 className="font-bold text-lg mb-4">
              {familyData.familyInfo.title[language]}
            </h3>
            <ul className="space-y-3">
              {familyData.familyInfo.members.map((member, index) => (
                <li key={index} className="text-gray-700">
                  <span className="font-semibold">
                    {member.relation[language]}:
                  </span>{' '}
                  {member.name[language]}
                  {member.link && (
                    <a
                      href={member.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-1 ml-1"
                      aria-label={`View ${member.relation[language]} document`}
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Personal Information */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, delay: 0.1 }}
            className="border-l-4 border-green-500 pl-4 py-2 hover:bg-green-50 rounded-r-lg transition-colors duration-200"
          >
            <h3 className="font-bold text-lg mb-4">
              {familyData.personalInfo.title[language]}
            </h3>
            <ul className="space-y-3">
              {familyData.personalInfo.details.map((detail, index) => (
                <li key={index} className="text-gray-700">
                  <span className="font-semibold">
                    {detail.label[language]}:
                  </span>{' '}
                  {detail.value[language]}
                  {detail.link && (
                    <a
                      href={detail.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-1 ml-1"
                      aria-label={`View ${detail.label[language]} document`}
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.section>
    </Element>
  );
};

export default Information;
