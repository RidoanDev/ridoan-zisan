import { useState, useEffect } from 'react';
import { Download, X } from 'lucide-react';

interface InstallPWAProps {
  language: 'en' | 'bn';
}

const InstallPWA = ({ language }: InstallPWAProps) => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallBanner, setShowInstallBanner] = useState(false);

  const installText = {
    en: {
      title: 'Install App',
      description: 'Install this app on your device for a better experience',
      install: 'Install',
      dismiss: 'Dismiss'
    },
    bn: {
      title: 'অ্যাপ ইনস্টল করুন',
      description: 'ভাল অভিজ্ঞতার জন্য আপনার ডিভাইসে এই অ্যাপটি ইনস্টল করুন',
      install: 'ইনস্টল করুন',
      dismiss: 'বন্ধ করুন'
    }
  };

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallBanner(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setDeferredPrompt(null);
      setShowInstallBanner(false);
    }
  };

  const handleDismiss = () => {
    setShowInstallBanner(false);
  };

  if (!showInstallBanner || !deferredPrompt) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-50 max-w-sm mx-auto">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 mb-1">
            {installText[language].title}
          </h3>
          <p className="text-sm text-gray-600 mb-3">
            {installText[language].description}
          </p>
          <div className="flex gap-2">
            <button
              onClick={handleInstallClick}
              className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors"
            >
              <Download size={16} />
              {installText[language].install}
            </button>
            <button
              onClick={handleDismiss}
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors"
            >
              {installText[language].dismiss}
            </button>
          </div>
        </div>
        <button
          onClick={handleDismiss}
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
};

export default InstallPWA;
