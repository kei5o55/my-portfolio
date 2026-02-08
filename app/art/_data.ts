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
    slug: "dia-portrait",
    title: "Dia / Portrait",
    date: "2026-02-09",
    tags: ["MISORIA", "キャラ", "立ち絵"],
    image: "/art/sample1.webp",
    description: "学院の天才。統計で人を見てしまうタイプ。",
  },
  {
    slug: "mina-sketch",
    title: "Mina / Sketch",
    date: "2026-02-01",
    tags: ["MISORIA", "ラフ", "治癒科"],
    image: "/art/sample2.webp",
    description: "やさしいけど、怖いと逃げちゃう。",
  },
  {
    slug: "void-concept",
    title: "Void / Concept",
    date: "2026-01-20",
    tags: ["MISORIA", "設定画"],
    image: "/art/sample3.webp",
    description: "災害のように現れる脅威。",
  },
  {
    slug: "annna-illustration",
    title: "annna / illustration",
    date: "2026-01-15",
    tags:["二次創作"],
    image: "/art/sample4.webp",
    description: "音楽ゲームCHUNITHM",
  }
];
