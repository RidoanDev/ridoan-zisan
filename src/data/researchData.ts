
export interface ResearchPost {
  id: string;
  title: {
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
  category: {
    en: string;
    bn: string;
  };
}

export const researchPosts: ResearchPost[] = [
  {
    id: '1',
    title: {
      en: 'Changes in the behavior of carnivorous humans',
      bn: 'মাংসাশী মানুষের আচরণের পরিবর্তন'
    },
    content: {
      en: '🧪 Personal Observation and Primary Research (Field Based Research)

In my own observations and research conducted on a limited number of people, I noticed an important difference in mental tendencies. The research was conducted on 10 people — among whom were:

5 Hindus, who never ate beef.

5 Muslims, who eat beef regularly, but to different degrees:
1st person eats a little,
2nd person a little more,
3rd person more,
4th person in excess,
5th person eats the most beef.

📅 Research period: 1 month

📍Observation area: Daily life, conversation, anger expression, and behavioral stability

🧠 Observation results:

The behavior of 5 Hindu people was very calm, calm and tolerant. There was no expression of anger or excitement among them for no reason.

 The higher the level of beef consumption among Muslim participants, the more anger, irritability, lack of patience and intense emotional outbursts were observed.

In particular, the fifth person, who ate the most beef, was the angriest, most intolerant, and most easily provoked.

🔍 Review:

The initial idea that can be drawn from this observation is:

There may be a possible relationship between the amount of beef consumed and anger/behavioral instability.

Hindu participants, who are accustomed to eating sattvic food, had a sense of peace, moderation and compassion in their behavior.

⚠️ Note:

This study was conducted on a small scale and is an individual observational study, so it cannot be considered a statistically or scientifically conclusive conclusion, but rather as a basis for more extensive research. However, it clearly raises the question:

> ❝ Does food affect not only the body, but also the structure and behavior of the mind? ❞',
      bn: '🧪 ব্যক্তিগত পর্যবেক্ষণ ও প্রাথমিক গবেষণা (ফিল্ড বেসড রিসার্চ)

আমার নিজস্ব পর্যবেক্ষণ এবং একটি সীমিত সংখ্যক মানুষের উপর পরিচালিত গবেষণায় আমি একটি গুরুত্বপূর্ণ মানসিক প্রবণতার পার্থক্য লক্ষ্য করি। গবেষণাটি করা হয় ১০ জন ব্যক্তিকে ঘিরে — যাদের মধ্যে ছিলেন:

৫ জন হিন্দু, যারা কোনো দিন গরুর মাংস খাননি।

৫ জন মুসলিম, যারা গরুর মাংস নিয়মিত খান, তবে ভিন্নমাত্রায়:
১ম ব্যক্তি অল্প খান,
২য় ব্যক্তি তার চেয়ে একটু বেশি,
৩য় ব্যক্তি আরও বেশি,
৪র্থ ব্যক্তি অতিরিক্ত পরিমাণে,
৫ম ব্যক্তি সবচেয়ে বেশি গরুর মাংস খান।


📅 গবেষণার সময়কাল: ১ মাস

📍পর্যবেক্ষণ ক্ষেত্র: দৈনন্দিন জীবনযাপন, কথাবার্তা, রাগের প্রকাশ, এবং আচরণগত স্থিতিশীলতা



🧠 পর্যবেক্ষণের ফলাফল:

৫ জন হিন্দু ব্যক্তির আচরণ ছিল খুবই শান্ত, ধীরস্থির ও সহনশীল। তাদের মধ্যে অকারণে রাগ বা উত্তেজনার প্রকাশ পাওয়া যায়নি।

মুসলিম অংশগ্রহণকারীদের মধ্যে গরুর মাংস খাওয়ার মাত্রা যত বেশি ছিল, তাদের মধ্যে রাগ, খিটখিটে মেজাজ, ধৈর্যের অভাব এবং তীব্র আবেগের বহিঃপ্রকাশ তত বেশি লক্ষ্য করা গেছে।

বিশেষ করে পঞ্চম ব্যক্তি, যিনি সবচেয়ে বেশি পরিমাণে গরুর মাংস খেতেন, ছিলেন সবচেয়ে রাগি, অসহিষ্ণু, এবং সামান্য কারণেই উত্তেজিত হয়ে পড়তেন।




🔍 পর্যালোচনা:

এই পর্যবেক্ষণ থেকে প্রাথমিকভাবে যে ধারণা পাওয়া যায় তা হলো:

গরুর মাংস খাওয়ার পরিমাণ ও রাগ/আচরণগত অস্থিরতার মধ্যে একটি সম্ভাব্য সম্পর্ক থাকতে পারে।

হিন্দু অংশগ্রহণকারীরা, যারা সাত্ত্বিক খাদ্যগ্রহণে অভ্যস্ত, তাদের আচরণে ছিল শান্তি, সংযম এবং সহনুভূতির ছাপ।




⚠️ দ্রষ্টব্য:

এই গবেষণাটি ছোট পরিসরে করা হয়েছে এবং এটি একটি ব্যক্তিগত পর্যবেক্ষণমূলক গবেষণা, তাই একে পরিসংখ্যানগত বা বৈজ্ঞানিকভাবে চূড়ান্ত সিদ্ধান্ত নয়, বরং আরও বিস্তৃত গবেষণার ভিত্তি হিসেবে বিবেচনা করা যেতে পারে। তবে এটি স্পষ্টতই প্রশ্ন তোলে:

> ❝ খাদ্য কি কেবল শরীরকে নয়, মনের গঠন ও আচরণকেও প্রভাবিত করে? ❞'
    },
    date: '2024-01-15',
    author: {
      en: 'Mohammad Ridwan Mahmud Jisan',
      bn: 'মোহাম্মদ রিদোয়ান মাহমুদ জিসান'
    },
    category: {
      en: 'Religion & Technology',
      bn: 'ধর্ম ও প্রযুক্তি'
    }
  },
  {
    id: '2',
    title: {
      en: 'Scientific Facts Mentioned in the Quran',
      bn: 'কুরআনে বর্ণিত বৈজ্ঞানিক সত্যসমূহ'
    },
    content: {
      en: 'The Holy Quran contains numerous scientific facts that have been proven by modern science. This research discusses in detail the similarities between the Quranic descriptions of embryology, astronomy, geology, and modern scientific discoveries.',
      bn: 'পবিত্র কুরআনে বহু বৈজ্ঞানিক তথ্য রয়েছে যা আধুনিক বিজ্ঞান দ্বারা প্রমাণিত। ভ্রূণতত্ত্ব, জ্যোতির্বিদ্যা, ভূতত্ত্ব ইত্যাদি বিষয়ে কুরআনের বর্ণনা এবং আধুনিক বিজ্ঞানের আবিষ্কারের মধ্যে সাদৃশ্য নিয়ে এই গবেষণায় বিস্তারিত আলোচনা করা হয়েছে।'
    },
    date: '2024-02-10',
    author: {
      en: 'Mohammad Ridwan Mahmud Jisan',
      bn: 'মোহাম্মদ রিদোয়ান মাহমুদ জিসান'
    },
    category: {
      en: 'Islamic Science',
      bn: 'ইসলামিক সায়েন্স'
    }
  },
  {
    id: '3',
    title: {
      en: 'The Importance of Environmental Conservation in Islam',
      bn: 'ইসলামে পরিবেশ সংরক্ষণের গুরুত্ব'
    },
    content: {
      en: 'Islam is a comprehensive way of life that places special emphasis on environmental conservation. This research discusses the environmental protection guidelines in the light of the Quran and Sunnah and the Islamic perspective on dealing with modern environmental challenges.',
      bn: 'ইসলাম একটি পূর্ণাঙ্গ জীবনব্যবস্থা যা পরিবেশ সংরক্ষণের উপর বিশেষ গুরুত্ব আরোপ করে। কুরআন ও সুন্নাহর আলোকে পরিবেশ রক্ষার নির্দেশনা এবং আধুনিক পরিবেশগত চ্যালেঞ্জ মোকাবেলায় ইসলামিক দৃষ্টিভঙ্গি নিয়ে এই গবেষণায় আলোচনা করা হয়েছে।'
    },
    date: '2024-03-05',
    author: {
      en: 'Mohammad Ridwan Mahmud Jisan',
      bn: 'মোহাম্মদ রিদোয়ান মাহমুদ জিসান'
    },
    category: {
      en: 'Islam & Environment',
      bn: 'ইসলাম ও পরিবেশ'
    }
  }
];
