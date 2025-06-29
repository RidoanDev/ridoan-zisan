
import { Element } from 'react-scroll';
import { PenTool, Heart, MessageCircle, Share } from 'lucide-react';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/blogData';

interface BlogProps {
  onBack?: () => void;
  language: 'en' | 'bn';
}

const Blog = ({ onBack, language = 'en' }: BlogProps) => {
  const pageTitle = {
    en: 'Poetry World',
    bn: 'কবিতার ভুবন'
  };

  const pageSubtitle = {
    en: 'Rhythmic expressions of feelings arising from the depths of the heart',
    bn: 'হৃদয়ের গভীর থেকে উঠে আসা অনুভূতির ছন্দময় প্রকাশ'
  };

  return (
    <Element name="blog">
      <div className="min-h-screen bg-gray-50 pt-16">
        <div className="container mx-auto px-4 py-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            {/* Header */}
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center justify-center w-12 h-12 bg-purple-50 rounded-full mb-4"
              >
                <PenTool className="w-6 h-6 text-purple-600" />
              </motion.div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{pageTitle[language]}</h1>
              <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base">
                {pageSubtitle[language]}
              </p>
            </div>

            {/* Blog Posts - Facebook Style */}
            <div className="space-y-4">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
                >
                  {/* Post Header */}
                  <div className="p-3 md:p-4 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-xs md:text-sm">
                          {post.author[language].split(' ')[0].charAt(0)}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 text-sm">
                          {post.author[language]}
                        </h3>
                        <p className="text-gray-500 text-xs">
                          {new Date(post.date).toLocaleDateString(language === 'bn' ? 'bn-BD' : 'en-US')}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Post Content */}
                  <div className="p-3 md:p-4">
                    <h2 className="text-base md:text-lg font-semibold text-gray-900 mb-2">{post.title[language]}</h2>
                    <div className="text-gray-700 leading-relaxed whitespace-pre-line font-bengali mb-3 text-sm md:text-base">
                      {post.content[language]}
                    </div>
                    
                    {/* Tags */}
                    <div className="flex gap-1 md:gap-2 flex-wrap mb-3">
                      {post.tags[language].map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-purple-50 text-purple-700 px-2 py-1 rounded-full text-xs font-medium"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Post Actions - Facebook Style */}
                  <div className="border-t border-gray-100 px-3 md:px-4 py-2 md:py-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 md:space-x-6">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center space-x-1 text-gray-600 hover:text-red-500 transition-colors"
                        >
                          <Heart size={16} />
                          <span className="text-xs md:text-sm font-medium">Like</span>
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center space-x-1 text-gray-600 hover:text-blue-500 transition-colors"
                        >
                          <MessageCircle size={16} />
                          <span className="text-xs md:text-sm font-medium">Comment</span>
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center space-x-1 text-gray-600 hover:text-green-500 transition-colors"
                        >
                          <Share size={16} />
                          <span className="text-xs md:text-sm font-medium">Share</span>
                        </motion.button>
                      </div>
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

export default Blog;
