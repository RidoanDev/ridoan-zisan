import { motion } from 'framer-motion';
import { blogData, BlogPost } from '../data/blogData';
import { Heart, MessageCircle, Share2, Calendar, User } from 'lucide-react';

interface BlogProps {
  language: 'en' | 'bn';
}

const Blog = ({ language }: BlogProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 pt-16">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="space-y-6">
          {blogData.map((post: BlogPost, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Post Header - Facebook style */}
              <div className="p-4 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <User size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-sm">
                      {post.author[language]}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Calendar size={12} />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                      {post.type === 'poem' && (
                        <span className="px-2 py-0.5 bg-purple-100 text-purple-700 rounded-full text-xs">
                          {language === 'en' ? 'Poetry' : 'কবিতা'}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-3">
                  {post.title[language]}
                </h2>
                <div className="text-gray-700 leading-relaxed whitespace-pre-line text-sm">
                  {post.content[language]}
                </div>
              </div>

              {/* Post Actions - Facebook style */}
              <div className="border-t border-gray-100">
                <div className="flex items-center justify-between px-4 py-2 text-gray-500">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Heart size={16} />
                    <span className="text-sm">
                      {language === 'en' ? 'Like' : 'পছন্দ'}
                    </span>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <MessageCircle size={16} />
                    <span className="text-sm">
                      {language === 'en' ? 'Comment' : 'মন্তব্য'}
                    </span>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Share2 size={16} />
                    <span className="text-sm">
                      {language === 'en' ? 'Share' : 'শেয়ার'}
                    </span>
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;