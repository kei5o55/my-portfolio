"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { artworks } from "./_data";
import Image from "next/image";

export default function ArtIndexPage() {
  const allTags = useMemo(() => {
    const set = new Set<string>();
    for (const a of artworks) for (const t of a.tags) set.add(t);
    return ["ALL", ...Array.from(set).sort()];
  }, []);

  const [activeTag, setActiveTag] = useState<string>("ALL");

  const filtered = useMemo(() => {
    if (activeTag === "ALL") return artworks;
    return artworks.filter((a) => a.tags.includes(activeTag));
  }, [activeTag]);

  return (
    <main className="min-h-screen bg-[#fafafa] text-zinc-800 px-6 py-12 md:py-20 max-w-5xl mx-auto font-sans relative overflow-hidden">
      {/* 繊細な背景グラデーション */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-slate-200/40 via-purple-100/30 to-transparent rounded-full blur-3xl -z-10" />
      <div className="pointer-events-none absolute top-1/3 -right-40 w-96 h-96 bg-gradient-to-bl from-blue-100/40 via-sky-100/20 to-transparent rounded-full blur-3xl -z-10" />

      {/* ヘッダー */}
      <header className="mb-8 border-b border-zinc-200 pb-6">
        <h1 className="text-3xl md:text-4xl font-light tracking-widest text-zinc-900 mb-2 flex items-center gap-3">
          Illustrations
          <span className="w-2 h-2 rounded-full bg-sky-400/80 animate-pulse" />
        </h1>
        <p className="text-xs text-zinc-400 font-mono">
          掲載日の降順にソートしています
        </p>
      </header>

      {/* ホームへ戻るボタン */}
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-300/80 bg-white/60 text-zinc-700 text-xs tracking-wide transition-all duration-300 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 backdrop-blur-sm shadow-sm"
        >
          ← Back to home
        </Link>
      </div>

      <p className="text-xs text-zinc-500 font-light mb-4">
        タグで絞り込み / クリックで詳細へ
      </p>

      {/* タグUI */}
      <div className="flex flex-wrap gap-2 mb-10">
        {allTags.map((tag) => {
          const active = tag === activeTag;
          return (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer border ${
                active
                  ? "bg-zinc-900 text-white border-zinc-900 shadow-sm"
                  : "bg-white/60 text-zinc-600 border-zinc-200/80 hover:border-zinc-400 hover:bg-white"
              }`}
            >
              {tag}
            </button>
          );
        })}
      </div>

      {/* 一覧ギャラリー */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered
          .slice()
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .map((a) => (
            <Link
              key={a.slug}
              href={`/art/${a.slug}`}
              className="group relative border border-zinc-200/90 rounded-2xl overflow-hidden bg-white/70 backdrop-blur-md transition-all duration-300 hover:border-zinc-400/80 hover:shadow-xl hover:shadow-zinc-200/50 hover:-translate-y-0.5 flex flex-col"
            >
              {/* 画像コンテナ */}
              <div className="aspect-[4/3] bg-zinc-100 relative overflow-hidden">
                <Image
                  src={a.image}
                  alt={a.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                  loading="lazy"
                  className="transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              {/* カード下部情報 */}
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <h2 className="font-medium text-zinc-900 tracking-wide text-sm mb-1 group-hover:text-zinc-600 transition-colors">
                    {a.title}
                  </h2>
                  <div className="text-[11px] font-mono text-zinc-400">{a.date}</div>
                </div>

                {/* タグリスト */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {a.tags.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-zinc-100/80 text-zinc-500 border border-zinc-200/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
      </div>
    </main>
  );
}