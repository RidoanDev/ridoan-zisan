import React, { useState, useRef, useEffect } from 'react';
import {
  Send,
  Ghost,
  User,
  Loader2,
  X,
  Mail,
  Briefcase,
  GraduationCap,
  Award,
  Heart,
  Linkedin,
  Phone,
  MapPin,
  ExternalLink,
} from 'lucide-react';
import { format } from 'date-fns';
import { motion } from 'framer-motion';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

export const LiveChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGhostHovering, setIsGhostHovering] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Ghost floating animation variants
  const ghostVariants = {
    hover: {
      y: [0, -10, 0, -5, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  // Message animation variants
  const messageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  // Enhanced constant replies with more information
  const getConstantReply = (userInput: string): string | null => {
    const lowerInput = userInput.toLowerCase();

    // Developer/Creator information
    if (
      lowerInput.includes('developer') ||
      lowerInput.includes('creator') ||
      lowerInput.includes('who made you') ||
      lowerInput.includes('your creator') ||
      lowerInput.includes('zisan') ||
      lowerInput.includes('ridoan')
    ) {
      return `I was created by Md Ridoan Mahmud Zisan, a passionate web developer and student from Bogura, Bangladesh. 
      \n\nHere's some info about him:
      \n- 📫 Contact: ridoan.zisan@gmail.com
      \n- 📞 Phone: +8801712525910
      \n- 📍 Location: Bogura, Bangladesh
      \n- 🔗 LinkedIn: https://linkedin.com/in/ridoan2007
      \n- 🩸 Blood Group: B+
      \n- 🎂 Date of Birth: December 31, 2007
      \n- 🌐 Religion: Humanity`;
    }

    // Education information
    if (
      lowerInput.includes('education') ||
      lowerInput.includes('study') ||
      lowerInput.includes('school') ||
      lowerInput.includes('college')
    ) {
      return `Md Ridoan Mahmud Zisan's Education:
      \n🎓 Higher Secondary Certificate (HSC)
      \n- Institution: Karatoa Multimedia School and College
      \n- Year: 2023-2024
      \n- GPA: 5.00/5.00 (Science)
      \n- Major: Higher Mathematics
      \n\n🎓 Secondary School Certificate (SSC)
      \n- Institution: Dhunat Govt N.U. Pilot Model High School
      \n- Year: 2021-2022
      \n- GPA: 5.00/5.00 (Science)
      \n- Group: Science
      \n- Major: Higher Mathematics`;
    }

    // Skills information
    if (
      lowerInput.includes('skill') ||
      lowerInput.includes('expertise') ||
      lowerInput.includes('what can you do') ||
      lowerInput.includes('ability')
    ) {
      return `Md Ridoan Mahmud Zisan's Skills:
      \n💻 Technical Skills:
      \n- Web Development (HTML, CSS, JavaScript)
      \n- React.js, Firebase
      \n- AI & Machine Learning basics
      \n\n🗣️ Language Skills:
      \n- Bengali (Fluent)
      \n- English (Professional)
      \n\n🏆 Core Professional Skills:
      \n- MS Office Suite
      \n- Email Communication
      \n- Team Collaboration
      \n- Time Management
      \n- Problem Solving
      \n- Professional Ethics
      \n\n🎨 Additional Skills:
      \n- Canva/Photoshop
      \n- Social Media Management
      \n- Customer Service
      \n- Basic Troubleshooting`;
    }

    // Projects information
    if (
      lowerInput.includes('project') ||
      lowerInput.includes('work') ||
      lowerInput.includes('build') ||
      lowerInput.includes('developed')
    ) {
      return `Md Ridoan Mahmud Zisan's Notable Projects:
      \n🩸 BOBDO (Bogura Online Blood Donation Organization)
      \n- React + Firebase blood management system
      \n- Real-time donor database
      \n- Serves 68k+ community members
      \n- Reduced response time by 40%
      \n- Link: https://bobdo.netlify.app
      \n\n📐 UniConverter
      \n- Unit converter supporting 50+ measurement categories
      \n- Progressive Web App (PWA) functionality
      \n- Link: https://uniconverter.netlify.app
      \n\n💻 DevHub
      \n- Portfolio showcasing all projects
      \n- Link: https://devhub-i.netlify.app`;
    }

    // Certificates information
    if (
      lowerInput.includes('certificate') ||
      lowerInput.includes('certification') ||
      lowerInput.includes('achievement') ||
      lowerInput.includes('award') ||
      lowerInput.includes('olympiad')
    ) {
      return `Md Ridoan Mahmud Zisan's Certifications & Achievements:
      \n🏅 Academic Olympiads:
      \n- Zero Olympiad (UN SDGs & climate action) - Semi-Final
      \n- Bangladesh AI Olympiad - Semi-Final
      \n- ICT Olympiad Bangladesh - Semi-Final
      \n- Math Olympiad - Selective Round
      
      \n📜 Professional Certifications:
      \n- AI, Machine Learning & Cyber Security (Simplilearn)
      \n- Complete Web Development (Programming Hero)
      \n- Digital Marketing (HubSpot Academy)
      \n- Corporate Skills (10 Minute School)`;
    }

    // Contact information
    if (
      lowerInput.includes('contact') ||
      lowerInput.includes('email') ||
      lowerInput.includes('phone') ||
      lowerInput.includes('address') ||
      lowerInput.includes('reach') ||
      lowerInput.includes('connect')
    ) {
      return `You can contact Md Ridoan Mahmud Zisan through:
      \n📧 Email: ridoan.zisan@gmail.com
      \n📞 Phone: +8801712525910
      \n📍 Location: Bogura, Bangladesh
      \n🔗 LinkedIn: https://linkedin.com/in/ridoan2007
      \n\nYou can also use the email button in the bottom right corner to send him a message directly.`;
    }

    // Volunteer work
    if (
      lowerInput.includes('volunteer') ||
      lowerInput.includes('blood') ||
      lowerInput.includes('donation') ||
      lowerInput.includes('bobdo')
    ) {
      return `Md Ridoan Mahmud Zisan's Volunteer Work:
      \n🩸 Bogura Online Blood Donation Organization
      \n- Role: Volunteer & Developer (2023-Present)
      \n- Responsibilities:
      \n  • Developed blood donor platform serving 68k+ members
      \n  • Implemented digital system reducing response time by 40%
      \n  • First aid and CPR training
      \n  • Organizing donation campaigns
      \n\n🔗 Blood Management App: https://bobdo.netlify.app`;
    }

    // Family information
    if (
      lowerInput.includes('family') ||
      lowerInput.includes('father') ||
      lowerInput.includes('mother') ||
      lowerInput.includes('parent') ||
      lowerInput.includes('sibling')
    ) {
      return `Md Ridoan Mahmud Zisan's Family:
      \n👨‍👩‍👧‍👦 Family Members:
      \n- Father: Md Rokibul Hasan Shekh
      \n- Mother: Mst. Zosna Khatun
      \n- Siblings: 1 Younger Sister`;
    }

    // Basic greetings
    if (
      lowerInput.includes('hello') ||
      lowerInput.includes('hi') ||
      lowerInput.includes('hey')
    ) {
      return "Hello there! I'm Ghost AI, here to tell you about Md Ridoan Mahmud Zisan. How can I help you today?\n\nYou can ask about:\n- His education\n- Skills\n- Projects\n- Certifications\n- Volunteer work\n- Contact information\n- Or anything else!";
    }

    // Thank you responses
    if (lowerInput.includes('thank') || lowerInput.includes('thanks')) {
      return "You're welcome! Let me know if you need any more information about Md Ridoan Mahmud Zisan.";
    }

    // Age information
    if (
      lowerInput.includes('age') ||
      lowerInput.includes('old') ||
      lowerInput.includes('birth')
    ) {
      const birthDate = new Date('2007-12-31');
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();

      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
      ) {
        age--;
      }

      return `Md Ridoan Mahmud Zisan is ${age} years old (born December 31, 2007).`;
    }

    // Blood group
    if (lowerInput.includes('blood') && lowerInput.includes('group')) {
      return "Md Ridoan Mahmud Zisan's blood group is B+ (B positive).";
    }

    return null;
  };

  useEffect(() => {
    if (isChatOpen) {
      inputRef.current?.focus();
    }
  }, [isChatOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const callAPI = async (prompt: string) => {
    setIsLoading(true);

    // Check for constant replies first
    const constantReply = getConstantReply(prompt);
    if (constantReply) {
      return constantReply;
    }

    try {
      const apiUrl =
        'https://backend.buildpicoapps.com/aero/run/llm-api?pk=v1-Z0FBQUFBQm5HUEtMSjJkakVjcF9IQ0M0VFhRQ0FmSnNDSHNYTlJSblE0UXo1Q3RBcjFPcl9YYy1OZUhteDZWekxHdWRLM1M1alNZTkJMWEhNOWd4S1NPSDBTWC12M0U2UGc9PQ==';
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      return data.status === 'success'
        ? data.text
        : 'Sorry, I could not process your request.';
    } catch (error) {
      console.error('API Error:', error);
      return 'Sorry, there was an error processing your request.';
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input.trim(),
      role: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    try {
      const response = await callAPI(userMessage.content);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        role: 'assistant',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content:
          'Sorry, I could not connect to the server. Please try again later.',
        role: 'assistant',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  };

  const handleEmailClick = () => {
    const isMobile =
      /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    isMobile
      ? (window.location.href = 'mailto:ridoan.zisan@gmail.com')
      : window.open(
          'https://mail.google.com/mail/?view=cm&fs=1&to=ridoan.zisan@gmail.com',
          '_blank'
        );
    setIsMenuOpen(false);
  };

  return (
    <div
      className="fixed bottom-6 right-6 flex flex-col items-end gap-2 z-[9999]"
      ref={containerRef}
    >
      {/* Email Button - Animated */}
      {isMenuOpen && (
        <>
          <motion.a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleEmailClick();
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-green-500 text-white p-4 rounded-full shadow-md hover:bg-green-600 transition-colors"
            title="Send Email"
          >
            <Mail size={24} />
          </motion.a>
          <motion.button
            onClick={() => {
              setIsChatOpen(true);
              setIsMenuOpen(false);
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-blue-500 text-white p-4 rounded-full shadow-md hover:bg-blue-600 transition-colors"
            title="Open Chat"
          >
            <Ghost size={24} />
          </motion.button>
        </>
      )}

      {/* Main Floating Button - Smart Toggle */}
      <motion.button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={`p-4 rounded-full shadow-md ${
          isMenuOpen
            ? 'bg-red-500 hover:bg-red-600'
            : 'bg-blue-500 hover:bg-blue-600'
        } text-white transition-colors`}
        title={isMenuOpen ? 'Close menu' : 'Open menu'}
      >
        <motion.div
          animate={{ rotate: isMenuOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <Mail size={24} />
        </motion.div>
      </motion.button>

      {/* Chat Window */}
      {isChatOpen && (
        <motion.div
          className="fixed bottom-5 right-6 w-100 max-w-[calc(101vw-3rem)] bg-white rounded-lg shadow-xl z-[9999] flex flex-col max-h-[440px]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          {/* Chat Header */}
          <div className="bg-blue-500 text-white p-2 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center gap-2">
              <motion.div
                variants={ghostVariants}
                animate={isGhostHovering ? 'hover' : 'float'}
                onMouseEnter={() => setIsGhostHovering(true)}
                onMouseLeave={() => setIsGhostHovering(false)}
              >
                <Ghost className="w-5 h-5" />
              </motion.div>
              <h2 className="font-semibold">Ghost</h2>
            </div>
            <button
              onClick={() => setIsChatOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[300px] max-h-[400px]">
            {messages.length === 0 && (
              <motion.div
                className="text-center text-gray-500 mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <motion.div variants={ghostVariants} animate="float">
                  <Ghost className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                </motion.div>
                <p className="text-lg">Hello!</p>
                <p className="text-sm mt-2">
                  Ask me about Md Ridoan Mahmud Zisan - his education, skills,
                  projects, or anything else!
                </p>
                <div className="mt-4 text-xs text-gray-400">
                  <p>Try asking:</p>
                  <p>"What are his skills?"</p>
                  <p>"Tell me about his education"</p>
                  <p>"Show me his projects"</p>
                </div>
              </motion.div>
            )}

            {messages.map((message) => (
              <motion.div
                key={message.id}
                className={`flex items-start gap-3 ${
                  message.role === 'user' ? 'flex-row-reverse' : ''
                }`}
                variants={messageVariants}
                initial="hidden"
                animate="visible"
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    message.role === 'user' ? 'bg-blue-500' : 'bg-gray-600'
                  }`}
                >
                  {message.role === 'user' ? (
                    <User className="w-5 h-5 text-white" />
                  ) : (
                    <Ghost className="w-5 h-5 text-white" />
                  )}
                </div>
                <div
                  className={`rounded-2xl px-4 py-2 max-w-[80%] ${
                    message.role === 'user'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">
                    {message.content}
                  </p>
                  <p className="text-xs mt-1 opacity-70">
                    {format(message.timestamp, 'HH:mm')}
                  </p>
                </div>
              </motion.div>
            ))}

            {isLoading && (
              <motion.div
                className="flex items-start gap-3"
                variants={messageVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
                  <Ghost className="w-5 h-5 text-white" />
                </div>
                <div className="bg-gray-100 rounded-2xl px-4 py-2">
                  <motion.div
                    animate={{
                      rotate: 360,
                      transition: {
                        duration: 1,
                        repeat: Infinity,
                        ease: 'linear',
                      },
                    }}
                  >
                    <Loader2 className="w-5 h-5 text-gray-500" />
                  </motion.div>
                </div>
              </motion.div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <div className="border-t p-4">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Md Ridoan Mahmud Zisan..."
                disabled={isLoading}
                className="flex-1 rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <motion.button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="bg-blue-500 text-white rounded-lg px-3 py-2 hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                whileHover={!isLoading && input.trim() ? { scale: 1.05 } : {}}
                whileTap={!isLoading && input.trim() ? { scale: 0.95 } : {}}
              >
                <Send className="w-4 h-4" />
                <span className="sr-only">Send</span>
              </motion.button>
            </form>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default LiveChat;
