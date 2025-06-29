
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
      en: 'The Role of Science and Technology in Islamic Education',
      bn: 'ইসলামিক শিক্ষায় বিজ্ঞান ও প্রযুক্তির ভূমিকা'
    },
    content: {
      en: 'Islam considers the pursuit of knowledge as a religious obligation. From the light of the Quran and Hadith, it is evident that Islam has always encouraged the development of science and technology. This research explores how modern technology can be used to make Islamic education more effective.',
      bn: 'ইসলামে জ্ঞান অর্জনকে ফরজ বলা হয়েছে। কুরআন ও হাদিসের আলোকে দেখা যায় যে, ইসলাম বিজ্ঞান ও প্রযুক্তির উন্নয়নে সবসময় উৎসাহ দিয়েছে। আধুনিক প্রযুক্তি ব্যবহার করে কিভাবে ইসলামিক শিক্ষাকে আরও কার্যকর করা যায় তার উপর এই গবেষণায় আলোকপাত করা হয়েছে।'
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
