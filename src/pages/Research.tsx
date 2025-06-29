
import { Element } from 'react-scroll';
import { BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { researchPosts } from '../data/researchData';

interface ResearchProps {
  onBack?: () => void;
  language: 'en' | 'bn';
}

const Research = ({ onBack, language = 'en' }: ResearchProps) => {
  const pageTitle = {
    en: 'Research',
    bn: 'গবেষণা'
  };

  const pageSubtitle = {
    en: 'My research work and academic contributions from an Islamic perspective on technology and development',
    bn: 'ইসলামিক দৃষ্টিভঙ্গি থেকে প্রযুক্তি এবং উন্নয়নে আমার গবেষণা কাজ এবং একাডেমিক অবদান'
  };

  return (
    <Element name="research">
      <div className="min-h-screen bg-gray-50 pt-16">
        <div className="container mx-auto px-4 py-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            {/* Header */}
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 rounded-full mb-4"
              >
                <BookOpen className="w-6 h-6 text-blue-600" />
              </motion.div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{pageTitle[language]}</h1>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
                {pageSubtitle[language]}
              </p>
            </div>

            {/* Research Posts */}
            <div className="space-y-4">
              {researchPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
                >
                  <div className="p-4 md:p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-block bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                        {post.category[language]}
                      </span>
                      <span className="text-xs text-gray-500">
                        {new Date(post.date).toLocaleDateString(language === 'bn' ? 'bn-BD' : 'en-US')}
                      </span>
                    </div>
                    <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">{post.title[language]}</h2>
                    <p className="text-gray-700 leading-relaxed mb-3 text-sm md:text-base">{post.content[language]}</p>
                    <div className="text-xs md:text-sm text-gray-600">
                      <span>{post.author[language]}</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Element>
  );
};

export default Research;
