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
  type: 'poem' | 'article';
}

export const blogData: BlogPost[] = [
  {
    id: "1",
    title: {
      en: "The Morning Prayer",
      bn: "ফজরের নামাজ"
    },
    content: {
      en: `In the silence of dawn's first light,
When shadows dance with morning bright,
I turn my face towards the east,
And seek the One who gives me peace.

O Allah, in this sacred hour,
Grant me strength, grant me power,
To walk the path You've set for me,
In faith and hope eternally.

The world still sleeps, but I awake,
This precious time for Your sweet sake,
In prayer I find my soul's true home,
No longer lost, no longer prone.`,
      bn: `ভোরের প্রথম আলোর নীরবতায়,
যখন ছায়া নাচে সকালের উজ্জ্বলতায়,
আমি মুখ ফিরাই পূর্ব দিকে,
এবং খুঁজি তাঁকে যিনি দেন শান্তি।

হে আল্লাহ, এই পবিত্র ক্ষণে,
দাও আমায় শক্তি, দাও ক্ষমতা,
হাঁটার জন্য সেই পথে যা তুমি নির্ধারণ করেছ,
বিশ্বাস ও আশায় চিরকাল।

পৃথিবী এখনো ঘুমিয়ে, কিন্তু আমি জেগে উঠি,
তোমার মধুর সাথে এই মূল্যবান সময়,
নামাজে আমি খুঁজে পাই আমার আত্মার সত্যিকারের ঘর,
আর হারিয়ে নই, আর প্রবণ নই।`
    },
    date: "2024-01-10",
    author: {
      en: "Your Name",
      bn: "আপনার নাম"
    },
    type: "poem"
  },
  {
    id: "2", 
    title: {
      en: "Divine Love",
      bn: "ঐশী প্রেম"
    },
    content: {
      en: `In every breath, I feel Your grace,
In every heartbeat, Your embrace,
O Lord of all that is and was,
You are my light, You are my cause.

Through valleys dark and mountains high,
Beneath the vast and starry sky,
Your love remains my guiding star,
No matter where, no matter far.

In silence deep, in prayer profound,
In Your mercy, I am found,
Forever bound by love divine,
Forever Yours, forever mine.`,
      bn: `প্রতিটি শ্বাসে, অনুভব করি তোমার করুণা,
প্রতিটি হৃদস্পন্দনে, তোমার আলিঙ্গন,
হে সকল কিছুর মালিক যা আছে এবং ছিল,
তুমি আমার আলো, তুমি আমার উদ্দেশ্য।

অন্ধকার উপত্যকা আর উঁচু পাহাড়ের মধ্য দিয়ে,
বিস্তৃত ও তারকাখচিত আকাশের নিচে,
তোমার ভালোবাসা থেকে যায় আমার পথপ্রদর্শক তারা,
যেখানেই থাকি, যত দূরেই থাকি।

গভীর নীরবতায়, গভীর প্রার্থনায়,
তোমার দয়ায়, আমি খুঁজে পাই নিজেকে,
চিরকাল বাঁধা ঐশী প্রেমে,
চিরকাল তোমার, চিরকাল আমার।`
    },
    date: "2024-02-14",
    author: {
      en: "Your Name",
      bn: "আপনার নাম"
    },
    type: "poem"
  },
  {
    id: "3",
    title: {
      en: "Ramadan Nights",
      bn: "রমজানের রাত"
    },
    content: {
      en: `The crescent moon adorns the sky,
A blessed month has drawing nigh,
The gates of mercy open wide,
With fasting souls by His side.

In Tarawih prayers we stand as one,
Until the blessed month is done,
Each verse recited, each breath a prayer,
In Allah's presence, beyond compare.

The nights of power, Laylatul Qadr,
When angels descend from realms afar,
O seeker, purify your heart,
From worldly chains, now depart.`,
      bn: `অর্ধচন্দ্র সাজায় আকাশ,
এক বরকতময় মাস এসেছে কাছে,
দয়ার দরজা খুলে গেছে প্রশস্ত,
রোজাদার আত্মারা তাঁর পাশে।

তারাবীহ নামাজে আমরা দাঁড়াই এক হয়ে,
যতক্ষণ না শেষ হয় বরকতময় মাস,
প্রতিটি আয়াত তেলাওয়াত, প্রতিটি শ্বাস একটি প্রার্থনা,
আল্লাহর উপস্থিতিতে, তুলনাহীন।

শক্তির রাত, লাইলাতুল কদর,
যখন ফেরেশতারা নেমে আসেন দূর রাজ্য থেকে,
হে সাধক, পবিত্র করো তোমার হৃদয়,
পার্থিব শৃঙ্খল থেকে, এখনই বিদায়।`
    },
    date: "2024-03-15",
    author: {
      en: "Your Name",
      bn: "আপনার নাম"
    },
    type: "poem"
  }
];