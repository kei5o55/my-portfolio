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
    tags: ["キャラ", "二次創作"],
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
    tags:["一次創作"],
    image: "/art/sample4.webp",
    description: "一次創作イラスト",
  },
  {
    slug: "white2-illustration",
    title: "white2 / illustration",
    date: "2026-02-09",
    tags:["一次創作"],
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
    tags:["一次創作"],
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
  }
];
