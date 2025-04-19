import React, { useState, useRef, useEffect } from 'react';
import { Send, Ghost, User, Loader2, X, Mail } from 'lucide-react';
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
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
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

    try {
      const apiUrl = 'https://backend.buildpicoapps.com/aero/run/llm-api?pk=v1-Z0FBQUFBQm5HUEtMSjJkakVjcF9IQ0M0VFhRQ0FmSnNDSHNYTlJSblE0UXo1Q3RBcjFPcl9YYy1OZUhteDZWekxHdWRLM1M1alNZTkJMWEhNOWd4S1NPSDBTWC12M0U2UGc9PQ==';
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      return data.status === 'success' ? data.text : 'Sorry, I could not process your request.';
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
        content: 'Sorry, I could not connect to the server. Please try again later.',
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
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    isMobile
      ? (window.location.href = 'mailto:ridoan.zisan@gmail.com')
      : window.open('https://mail.google.com/mail/?view=cm&fs=1&to=ridoan.zisan@gmail.com', '_blank');
    setIsMenuOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-2" ref={containerRef}>
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
          isMenuOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'
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
        <div className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-lg shadow-xl z-50 flex flex-col max-h-[600px]">
          {/* Chat Header */}
          <div className="bg-blue-500 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Ghost className="w-6 h-6" />
              <h2 className="font-semibold">Chat with Me</h2>
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
              <div className="text-center text-gray-500 mt-8">
                <Ghost className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                <p className="text-lg">Hello! How can I help you today?</p>
              </div>
            )}

            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start gap-3 ${
                  message.role === 'user' ? 'flex-row-reverse' : ''
                }`}
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
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  <p className="text-xs mt-1 opacity-70">
                    {format(message.timestamp, 'HH:mm')}
                  </p>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
                  <Ghost className="w-5 h-5 text-white" />
                </div>
                <div className="bg-gray-100 rounded-2xl px-4 py-2">
                  <Loader2 className="w-5 h-5 animate-spin text-gray-500" />
                </div>
              </div>
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
                placeholder="Type your message..."
                disabled={isLoading}
                className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span className="sr-only">Send</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveChat;