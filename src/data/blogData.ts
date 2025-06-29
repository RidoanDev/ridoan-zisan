
export interface BlogPost {
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
  tags: {
    en: string[];
    bn: string[];
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: {
      en: 'On the Wings of Dreams',
      bn: 'স্বপ্নের ডানায়'
    },
    content: {
      en: `Merging with the blue of the sky
Flying on the wings of dreams,
Crossing mountains of clouds
A new chapter of life.

Lost in the world of technology
New creations built in the language of code,
Building bridges of dreams
In every moment of life.`,
      bn: `আকাশের নীলিমায় মিশে যাওয়া
স্বপ্নের ডানায় ভর করে উড়াল,
মেঘের পাহাড় পার হয়ে যাওয়া
জীবনের নতুন এক অধ্যায়।

প্রযুক্তির জগতে হারিয়ে যাওয়া
কোডের ভাষায় গড়া নতুন সৃষ্টি,
স্বপ্নের সেতু তৈরি করে যাওয়া
জীবনের প্রতিটি মুহূর্তে।`
    },
    date: '2024-01-20',
    author: {
      en: 'Mohammad Ridwan Mahmud Jisan',
      bn: 'মোহাম্মদ রিদোয়ান মাহমুদ জিসান'
    },
    tags: {
      en: ['Poetry', 'Dreams', 'Technology'],
      bn: ['কবিতা', 'স্বপ্ন', 'প্রযুক্তি']
    }
  },
  {
    id: '2',
    title: {
      en: 'Mother\'s Love',
      bn: 'মায়ের ভালোবাসা'
    },
    content: {
      en: `Hidden in mother's tears
An ocean of infinite love,
Mixed in her smile
News of all the happiness in life.

Resting my head on her chest in sorrow
I got the touch of peace,
In mother's prayers there is that power
That can break all barriers.`,
      bn: `মায়ের চোখের পানিতে লুকিয়ে আছে
অসীম ভালোবাসার সমুদ্র,
তার হাসিতে মিশে আছে
জীবনের সব সুখের খবর।

দুঃখে তার বুকে মাথা রেখে
পেয়েছি শান্তির ছোঁয়া,
মায়ের দোয়ায় আছে সেই শক্তি
যা পারে সব বাধা ভেঙে দিতে।`
    },
    date: '2024-02-14',
    author: {
      en: 'Mohammad Ridwan Mahmud Jisan',
      bn: 'মোহাম্মদ রিদোয়ান মাহমুদ জিসান'
    },
    tags: {
      en: ['Poetry', 'Mother', 'Love'],
      bn: ['কবিতা', 'মা', 'ভালোবাসা']
    }
  },
  {
    id: '3',
    title: {
      en: 'Song of Friendship',
      bn: 'বন্ধুত্বের গান'
    },
    content: {
      en: `Bound in the sweet melody of friendship
Stories of life's joys and sorrows,
Together a fair of laughter and tears
All the vows of walking together.

Distance can never
Keep us apart,
Bound by the thread of friendship
All the sweet memories of life.`,
      bn: `বন্ধুত্বের মিষ্টি সুরে বাঁধা
জীবনের সুখ-দুঃখের গল্প,
একসাথে হাসি কান্নার মেলা
একসাথে চলার সব শপথ।

দূরত্ব কখনো পারে না আমাদের
আলাদা করে রাখতে,
বন্ধুত্বের সুতোয় বাঁধা থাকে
জীবনের সব মধুর স্মৃতি।`
    },
    date: '2024-03-10',
    author: {
      en: 'Mohammad Ridwan Mahmud Jisan',
      bn: 'মোহাম্মদ রিদোয়ান মাহমুদ জিসান'
    },
    tags: {
      en: ['Poetry', 'Friendship', 'Memory'],
      bn: ['কবিতা', 'বন্ধুত্ব', 'স্মৃতি']
    }
  }
];
