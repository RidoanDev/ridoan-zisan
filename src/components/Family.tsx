
import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import { Heart, Users } from 'lucide-react';

interface FamilyProps {
  language: 'en' | 'bn';
}

const Family = ({ language }: FamilyProps) => {
  const familyData = {
    title: {
      en: 'Family',
      bn: 'পরিবার',
    },
    members: [
      {
        relation: {
          en: 'Father',
          bn: 'পিতা',
        },
        name: {
          en: 'Md Rokibul Hasan Shekh',
          bn: 'মোঃ রকিবুল হাসান শেখ',
        },
      },
      {
        relation: {
          en: 'Mother',
          bn: 'মাতা',
        },
        name: {
          en: 'Mst. Zosna Khatun',
          bn: 'মোসাঃ জোসনা খাতুন',
        },
      },
      {
        relation: {
          en: 'Sister',
          bn: 'বোন',
        },
        name: {
          en: '1 Younger Sister',
          bn: '১ জন ছোট বোন',
        },
      },
    ],
  };

  return (
    <Element name="family">
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white p-6 rounded-lg shadow-lg border border-gray-100"
        aria-labelledby="family-heading"
      >
        <h2
          id="family-heading"
          className="text-2xl font-bold mb-8 flex items-center gap-3 text-gray-800"
        >
          <div className="p-2 bg-pink-100 rounded-lg">
            <Heart className="text-pink-600" size={24} />
          </div>
          {familyData.title[language]}
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {familyData.members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-lg border border-pink-200 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <Users className="text-pink-500" size={20} />
                <h3 className="font-semibold text-gray-800">
                  {member.relation[language]}
                </h3>
              </div>
              <p className="text-gray-700 font-medium">
                {member.name[language]}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </Element>
  );
};

export default Family;
