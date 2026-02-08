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
    image: "/art/sample3.png",
    description: "somunia 楽曲モチーフ二次創作イラスト",
  },
  {
    slug: "white-illustration",
    title: "white / illustration",
    date: "2026-02-09",
    tags:["一次創作"],
    image: "/art/sample4.png",
    description: "一次創作イラスト",
  },
  {
    slug: "white2-illustration",
    title: "white2 / illustration",
    date: "2026-02-09",
    tags:["一次創作"],
    image: "/art/sample.jpg",
    description: "一次創作イラスト2",
  },
  {
    slug: "embark-illustration",
    title: "embark / illustration",
    date: "2026-02-09",
    tags:["二次創作"],
    image: "/art/sample5.png",
    description: "CHUNITHM二次創作イラスト",
  }
];
