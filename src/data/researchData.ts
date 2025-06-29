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
      en: `🧪 Personal Observation and Primary Research (Field Based Research)

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

The behavior of 5 Hindu people was very calm, composed and tolerant. There was no expression of anger or excitement among them for no reason.

The higher the level of beef consumption among Muslim participants, the more anger, irritability, lack of patience and intense emotional outbursts were observed.

In particular, the fifth person, who ate the most beef, was the angriest, most intolerant, and most easily provoked.

🔍 Review:

There may be a possible relationship between the amount of beef consumed and anger/behavioral instability.

Hindu participants, who are accustomed to eating sattvic food, had a sense of peace, moderation and compassion in their behavior.

⚠️ Note:

This study was conducted on a small scale and is an individual observational study, so it cannot be considered a statistically or scientifically conclusive conclusion, but rather as a basis for more extensive research.

> ❝ Does food affect not only the body, but also the structure and behavior of the mind? ❞`,
      bn: `🧪 ব্যক্তিগত পর্যবেক্ষণ ও প্রাথমিক গবেষণা (ফিল্ড বেসড রিসার্চ)

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

গরুর মাংস খাওয়ার পরিমাণ ও রাগ/আচরণগত অস্থিরতার মধ্যে একটি সম্ভাব্য সম্পর্ক থাকতে পারে।

হিন্দু অংশগ্রহণকারীরা, যারা সাত্ত্বিক খাদ্যগ্রহণে অভ্যস্ত, তাদের আচরণে ছিল শান্তি, সংযম এবং সহনুভূতির ছাপ।

⚠️ দ্রষ্টব্য:

এই গবেষণাটি ছোট পরিসরে করা হয়েছে এবং এটি একটি ব্যক্তিগত পর্যবেক্ষণমূলক গবেষণা, তাই একে পরিসংখ্যানগত বা বৈজ্ঞানিকভাবে চূড়ান্ত সিদ্ধান্ত নয়, বরং আরও বিস্তৃত গবেষণার ভিত্তি হিসেবে বিবেচনা করা যেতে পারে।

> ❝ খাদ্য কি কেবল শরীরকে নয়, মনের গঠন ও আচরণকেও প্রভাবিত করে? ❞`
    },
    date: '2024-01-15',
    author: {
      en: 'Md Ridoan Mahmud Zisan',
      bn: 'মো. রিদওয়ান মাহমুদ জিসান'
    },
    category: {
      en: 'Religion & Psychology',
      bn: 'ধর্ম ও মনোবিজ্ঞান'
    }
  },
  {
    id: '2',
    title: {
      en: 'Scientific Insights from the Quran',
      bn: 'কুরআনের বৈজ্ঞানিক অন্তর্দৃষ্টি'
    },
    content: {
      en: `📘 Overview:

The Quran, revealed over 1400 years ago, contains numerous references that align with modern scientific discoveries. While the Quran is not a science textbook, many of its verses provide remarkable insights into embryology, cosmology, oceanography, and geology.

🧪 Key Scientific Points:

1. **Embryology**: Surah Al-Mu’minun (23:13-14) describes the stages of human embryonic development in a manner similar to modern embryology.

2. **Expansion of the Universe**: Surah Adh-Dhariyat (51:47) mentions that the universe is expanding, which aligns with 20th-century astrophysics.

3. **Mountains as Pegs**: Surah An-Naba (78:6-7) refers to mountains as stabilizers, comparable to tectonic plate theory.

4. **Barrier Between Salt and Fresh Water**: Surah Al-Furqan (25:53) refers to a barrier between salt and fresh waters — now known as the halocline.

📌 Conclusion:

These verses suggest knowledge that aligns with scientific understanding, supporting the view that the Quran contains divine wisdom.`,
      bn: `📘 সারসংক্ষেপ:

১৪০০ বছর আগে নাজিল হওয়া কুরআনে এমন বহু আয়াত রয়েছে যা আধুনিক বৈজ্ঞানিক তথ্যের সঙ্গে চমৎকারভাবে মিলে যায়। যদিও কুরআন বিজ্ঞান বই নয়, কিন্তু অনেক আয়াতে জীববিজ্ঞান, মহাকাশবিজ্ঞান, ভূবিজ্ঞান এবং সমুদ্রবিজ্ঞানের গভীর ইঙ্গিত আছে।

🧪 মূল বৈজ্ঞানিক বিষয়সমূহ:

১. **ভ্রূণতত্ত্ব**: সূরা আল-মু’মিনুন (২৩:১৩-১৪)-তে ভ্রূণের যে ধাপ বর্ণনা করা হয়েছে তা আধুনিক ভ্রূণতত্ত্বের সঙ্গে মিলে যায়।

২. **বিশ্ব সম্প্রসারণ**: সূরা আয-যারিয়াত (৫১:৪৭) অনুসারে বিশ্ব সম্প্রসারিত হচ্ছে — যা ২০শ শতকের জ্যোতির্বিজ্ঞানে প্রমাণিত।

৩. **পর্বতের ভূমিকা**: সূরা আন-নাবা (৭৮:৬-৭)-তে পর্বতকে পৃথিবীর ভারসাম্য রক্ষাকারী বলা হয়েছে — যা টেকটোনিক প্লেট থিওরির সঙ্গে সামঞ্জস্যপূর্ণ।

৪. **লবণাক্ত ও মিঠা পানির প্রতিবন্ধকতা**: সূরা আল-ফুরকান (২৫:৫৩) অনুসারে, দুই ধরণের পানির মাঝে একটি অদৃশ্য প্রতিবন্ধকতা রয়েছে — যেটি আধুনিক হ্যালোক্লাইন ধারণার সঙ্গে মিলে যায়।

📌 উপসংহার:

এই আয়াতগুলো বৈজ্ঞানিক সত্যের সঙ্গে মিল রেখে কুরআনের জ্ঞানকে আরও প্রামাণ্য করে তোলে।`
    },
    date: '2024-02-10',
    author: {
      en: 'Md Ridoan Mahmud Zisan',
      bn: 'মো. রিদওয়ান মাহমুদ জিসান'
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
      en: `🌱 Introduction:

Islam promotes harmony between humans and nature. The Quran and Hadith contain numerous commands to protect the earth, prevent corruption, and be mindful of natural resources.

🔖 Quranic Guidance:

- "Do not cause corruption on the Earth after it has been set in order." (Surah Al-A’raf, 7:56)
- "He created everything in due proportion." (Surah Al-Qamar, 54:49)

🌿 Prophetic Teachings:

- Planting a tree is an act of charity.
- Wasting water is discouraged even while performing ablution by a river.
- Causing harm to animals or the environment is sinful.

📌 Conclusion:

Islamic environmental ethics call for sustainable living and stewardship, aligning with modern ecological principles.`,
      bn: `🌱 ভূমিকা:

ইসলাম প্রকৃতির সঙ্গে মানুষের ভারসাম্যপূর্ণ সহাবস্থানের শিক্ষা দেয়। কুরআন ও হাদীসে পরিবেশ রক্ষার ব্যাপারে বহু নির্দেশনা রয়েছে।

🔖 কুরআনের নির্দেশনা:

- "পৃথিবীতে শান্তি প্রতিষ্ঠার পর অনর্থ সৃষ্টি করো না।" (সূরা আ’রাফ, ৭:৫৬)
- "তিনিই সবকিছু নির্ধারিত পরিমাপে সৃষ্টি করেছেন।" (সূরা আল-কামার, ৫৪:৪৯)

🌿 নবীজির শিক্ষা:

- গাছ লাগানো সদকার সমান।
- নদীর পাশেও অযথা পানি অপচয় করা নিষেধ।
- পরিবেশ নষ্ট ও প্রাণীর প্রতি নিষ্ঠুরতা গোনাহ।

📌 উপসংহার:

ইসলামের পরিবেশনৈতিক শিক্ষা টেকসই ও নৈতিকভাবে দায়িত্বশীল জীবনযাপনের প্রতি আহ্বান জানায়। আধুনিক পরিবেশবাদী চেতনার সঙ্গে এর বিস্ময়কর মিল রয়েছে।`
    },
    date: '2024-03-05',
    author: {
      en: 'Md Ridoan Mahmud Zisan',
      bn: 'মো. রিদওয়ান মাহমুদ জিসান'
    },
    category: {
      en: 'Islam & Environment',
      bn: 'ইসলাম ও পরিবেশ'
    }
  }
];
