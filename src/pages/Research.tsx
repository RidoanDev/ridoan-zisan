import { motion } from 'framer-motion';
import { researchData, ResearchItem } from '../data/researchData';

interface ResearchProps {
  language: 'en' | 'bn';
}

const Research = ({ language }: ResearchProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-16">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="space-y-8">
          {researchData.map((item: ResearchItem, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Research Paper Header */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
                <h1 className="text-2xl font-bold mb-2">
                  {item.title[language]}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-sm opacity-90">
                  <span>{language === 'en' ? 'Author:' : 'লেখক:'} {item.author[language]}</span>
                  <span>{language === 'en' ? 'Date:' : 'তারিখ:'} {new Date(item.date).toLocaleDateString()}</span>
                </div>
              </div>

              {/* Abstract Section */}
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-800 mb-3">
                  {language === 'en' ? 'Abstract' : 'সার-সংক্ষেপ'}
                </h2>
                <p className="text-gray-700 leading-relaxed italic">
                  {item.abstract[language]}
                </p>
              </div>

              {/* Keywords */}
              <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                <h3 className="text-sm font-semibold text-gray-800 mb-2">
                  {language === 'en' ? 'Keywords:' : 'মূল শব্দসমূহ:'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {item.keywords[language].map((keyword, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              {/* Main Content */}
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  {language === 'en' ? 'Research Content' : 'গবেষণার বিষয়বস্তু'}
                </h2>
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {item.content[language]}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Research;