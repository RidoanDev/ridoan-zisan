export interface ResearchItem {
  id: string;
  title: {
    en: string;
    bn: string;
  };
  abstract: {
    en: string;
    bn: string;
  };
  content: {
    en: string;
    bn: string;
  };
  date: string;
  author: {
    en: string;
    bn: string;
  };
  keywords: {
    en: string[];
    bn: string[];
  };
}

export const researchData: ResearchItem[] = [
  {
    id: "1",
    title: {
      en: "The Role of Prayer in Islamic Spirituality",
      bn: "ইসলামী আধ্যাত্মিকতায় নামাজের ভূমিকা"
    },
    abstract: {
      en: "This research explores the fundamental role of prayer (Salah) in Islamic spirituality and its impact on the spiritual development of Muslims.",
      bn: "এই গবেষণায় ইসলামী আধ্যাত্মিকতায় নামাজের মৌলিক ভূমিকা এবং মুসলমানদের আধ্যাত্মিক উন্নতিতে এর প্রভাব নিয়ে আলোচনা করা হয়েছে।"
    },
    content: {
      en: "Prayer (Salah) is one of the five pillars of Islam and serves as a direct connection between the believer and Allah. This research examines how regular prayer practice contributes to spiritual growth, mental peace, and moral development in the Islamic faith...",
      bn: "নামাজ ইসলামের পাঁচটি স্তম্ভের একটি এবং এটি বিশ্বাসী ও আল্লাহর মধ্যে সরাসরি সংযোগ হিসেবে কাজ করে। এই গবেষণায় দেখানো হয়েছে যে, নিয়মিত নামাজ কীভাবে আধ্যাত্মিক বৃদ্ধি, মানসিক শান্তি এবং নৈতিক উন্নয়নে অবদান রাখে..."
    },
    date: "2024-01-15",
    author: {
      en: "Your Name",
      bn: "আপনার নাম"
    },
    keywords: {
      en: ["Prayer", "Islam", "Spirituality", "Faith", "Worship"],
      bn: ["নামাজ", "ইসলাম", "আধ্যাত্মিকতা", "বিশ্বাস", "ইবাদত"]
    }
  },
  {
    id: "2",
    title: {
      en: "The Concept of Tawhid in Islamic Theology",
      bn: "ইসলামী ধর্মতত্ত্বে তাওহীদের ধারণা"
    },
    abstract: {
      en: "An in-depth analysis of the concept of Tawhid (monotheism) and its central importance in Islamic belief system.",
      bn: "তাওহীদ (একেশ্বরবাদ) এর ধারণা এবং ইসলামী বিশ্বাস ব্যবস্থায় এর কেন্দ্রীয় গুরুত্বের গভীর বিশ্লেষণ।"
    },
    content: {
      en: "Tawhid, the belief in the oneness of Allah, forms the cornerstone of Islamic faith. This research delves into the various dimensions of Tawhid and its implications for Muslim understanding of God, creation, and human purpose...",
      bn: "তাওহীদ, আল্লাহর একত্বে বিশ্বাস, ইসলামী বিশ্বাসের ভিত্তিপ্রস্তর। এই গবেষণায় তাওহীদের বিভিন্ন মাত্রা এবং ঈশ্বর, সৃষ্টি ও মানবিক উদ্দেশ্য সম্পর্কে মুসলিম বোঝাপড়ার উপর এর প্রভাব নিয়ে আলোচনা করা হয়েছে..."
    },
    date: "2024-02-20",
    author: {
      en: "Your Name",
      bn: "আপনার নাম"
    },
    keywords: {
      en: ["Tawhid", "Monotheism", "Islamic Theology", "Faith", "Unity"],
      bn: ["তাওহীদ", "একেশ্বরবাদ", "ইসলামী ধর্মতত্ত্ব", "বিশ্বাস", "একত্ব"]
    }
  }
];