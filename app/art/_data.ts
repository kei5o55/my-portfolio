export type ArtWork = {
  slug: string;          // URL用（例: "dia-portrait"）
  title: string;
  date: string;          // "2026-02-09"
  tags: string[];        // 例: ["MISORIA", "キャラ", "立ち絵"]
  image: string;         // public配下のパス（例: "/art/dia.png"）
  description?: string;
};

export const artworks: ArtWork[] = [
  {
    slug: "annna-portrait",
    title: "annna / Portrait",
    date: "2026-02-09",
    tags: ["二次創作"],
    image: "/art/sample1.webp",
    description: "CHUNITHM二次創作",
  },
  {
    slug: "somunia-illustration",
    title: "somunia / illustration",
    date: "2026-02-09",
    tags:["二次創作"],
    image: "/art/sample3.webp",
    description: "somunia 楽曲モチーフ二次創作イラスト\n liberateという楽曲をイメージしています。オススメの楽曲なのでぜひ聴いてみてください。",
  },
  {
    slug: "white-illustration",
    title: "white / illustration",
    date: "2026-02-09",
    tags:["一次創作","眼鏡"],
    image: "/art/sample4.webp",
    description: "一次創作イラスト",
  },
  {
    slug: "white2-illustration",
    title: "white2 / illustration",
    date: "2026-02-09",
    tags:["一次創作","眼鏡"],
    image: "/art/sample.webp",
    description: "一次創作イラスト2",
  },
  {
    slug: "embark-illustration",
    title: "embark / illustration",
    date: "2026-02-09",
    tags:["二次創作"],
    image: "/art/sample5.webp",
    description: "CHUNITHM二次創作イラスト",
  },
  {
    slug: "amor_fati",
    title: "amor_fati / artwork",
    date: "2026-02-10",
    tags:["二次創作","造形"],
    image: "/art/amor_fati.webp",
    description: "CHUNITHM二次創作造形作品\n シーリングスタンプと便箋をデザインして、実際にスタンプを作成しました。即売会でポストカードを入れたりしたいなと思っています。",
  },
  {
    slug: "mire",
    title: "mire / illustration",
    date: "2026-05-17",
    tags:["一次創作"],
    image: "/art/mire.webp",
    description: "一次創作・関西コミティアでポストカードとして頒布したイラスト作品",
  },
  {
    slug: "ethos",
    title: "ethos / illustration",
    date: "2026-05-17",
    tags:["一次創作","眼鏡"],
    image: "/art/ethos.webp",
    description: "一次創作・関西コミティアでポストカード・画集表紙として頒布したイラスト作品\n Annnaと構図が一緒で恥ずかしい",
  },
  {
    slug: "megane",
    title: "megane / illustration",
    date: "2026-05-17",
    tags:["一次創作","眼鏡"],
    image: "/art/megane.webp",
    description: "一次創作・デカいめがねは可愛い",
  },
  {
    slug: "mekakure",
    title: "mekakure / illustration",
    date: "2026-05-17",
    tags:["一次創作"],
    image: "/art/mekakure.webp",
    description: "一次創作・メカクレは可愛いすぎる。",
  },
  {
    slug: "anna2",
    title: "anna2 / illustration",
    date: "2026-05-11",
    tags:["二次創作","anna"],
    image: "/art/anna2.webp",
    description: "CHUNITHM二次創作",
  },
  {
    slug: "renas",
    title: "renas / rough",
    date: "2026-05-17",
    tags:["二次創作","ラフ"],
    image: "/art/renas.webp",
    description: "CHUNITHM二次創作",
  },
  {
    slug: "funny_anna",
    title: "funny anna",
    date: "2026-05-09",
    tags:["二次創作","anna"],
    image: "/art/funny_anna.webp",
    description: "かわいい",
  },
  {
    slug: "setup_wizard",
    title: "setup_wizard / rough",
    date: "2026-05-19",
    tags:["一次創作","ラフ"],
    image: "/art/setup_wizard.webp",
    description: "アルケイア中央学院 戦術科３年 ネア連星。\n 優れたエーテル操作技術と実績・使用術式から「虹の魔法使い」と他学生から呼ばれている。\n７色のエーテルを扱える数少ない人間",
  },
  {
    slug: "o_anna",
    title: "o_anna / illustration",
    date: "2026-04-09",
    tags:["二次創作","anna"],
    image: "/art/o_anna.webp",
    description: "CHUNITHM二次創作",
  },
  {
    slug: "wing",
    title: "wing / illustration",
    date: "2026-04-12",
    tags:["一次創作"],
    image: "/art/wing.webp",
    description: "黒いドレスを描きたかった。",
  },
  {
    slug: "anna3",
    title: "anna3 / illustration",
    date: "2026-05-04",
    tags:["二次創作","anna"],
    image: "/art/anna3.webp",
    description: "アンナ（コメントないかも）",
  },
  {
    slug: "anna_summer",
    title: "anna_summer / illustration",
    date: "2026-05-29",
    tags:["二次創作","anna"],
    image: "/art/summer.jpg",
    description: "チュウニズム１０周年で描いた二次創作",
  },
  {
    slug: "anna_megane",
    title: "annna_でかメガネ部",
    date: "2026-06-19",
    tags:["二次創作","anna","眼鏡"],
    image: "/art/5.png",
    description:"アンナ・マルグレーテでかメガネ部"
  },
  {
    slug: "tsunoko",
    title: "漢ゴスロリアーツ",
    date: "2026-06-19",
    tags:["一次創作","眼鏡"],
    image: "/art/tuno.png",
    description:"つのっこ漢ゴスロリアーツのつもり"
  }
];
