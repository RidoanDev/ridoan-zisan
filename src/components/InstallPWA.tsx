
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
};

interface InstallPWAProps {
  language: 'en' | 'bn';
}

const InstallPWA = ({ language }: InstallPWAProps) => {
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  const content = {
    en: {
      title: 'Install App',
      description: 'Install this app on your device for quick access.',
      buttonText: 'Install',
      dismissText: 'Later'
    },
    bn: {
      title: 'অ্যাপ ইন্সটল করুন',
      description: 'দ্রুত অ্যাক্সেসের জন্য আপনার ডিভাইসে এই অ্যাপটি ইন্সটল করুন।',
      buttonText: 'ইন্সটল করুন',
      dismissText: 'পরে'
    }
  };

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e as BeforeInstallPromptEvent);
      setShowBanner(true);
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setShowBanner(false);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    // Check if the app is already installed (display-mode: standalone)
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const installApp = async () => {
    if (!installPrompt) return;
    
    // Show the prompt
    await installPrompt.prompt();
    
    // Wait for user response
    const choiceResult = await installPrompt.userChoice;
    
    if (choiceResult.outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }
    
    // Reset the deferred prompt variable
    setInstallPrompt(null);
    setShowBanner(false);
  };

  const dismissBanner = () => {
    setShowBanner(false);
    // Set a flag in localStorage to not show again for a while
    localStorage.setItem('pwaInstallDismissed', Date.now().toString());
  };

  if (!showBanner || isInstalled) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80 bg-white rounded-lg shadow-xl p-4 z-50"
    >
      <div className="flex items-start">
        <div className="mr-4">
          <div className="bg-indigo-100 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-indigo-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
        <div className="flex-1">
          <h4 className="text-gray-900 font-medium">{content[language].title}</h4>
          <p className="text-sm text-gray-600 mt-1">{content[language].description}</p>
        </div>
      </div>
      <div className="flex justify-end gap-2 mt-4">
        <button 
          onClick={dismissBanner}
          className={cn(
            "px-3 py-1.5 text-sm rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
          )}
        >
          {content[language].dismissText}
        </button>
        <button 
          onClick={installApp}
          className={cn(
            "px-3 py-1.5 text-sm rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
          )}
        >
          {content[language].buttonText}
        </button>
      </div>
    </motion.div>
  );
};

export default InstallPWA;
