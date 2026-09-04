"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { artworks } from "./_data";
import Image from "next/image";

export default function ArtIndexPage() {
  const allTags = useMemo(() => {
    const set = new Set<string>();

    for (const a of artworks) {
      for (const t of a.tags) {
        set.add(t);
      }
    }

    return ["ALL", ...Array.from(set).sort()];
  }, []);

  const [activeTag, setActiveTag] = useState<string>("ALL");

  const filtered = useMemo(() => {
    if (activeTag === "ALL") return artworks;

    return artworks.filter((a) => a.tags.includes(activeTag));
  }, [activeTag]);

  const sortedArtworks = filtered
    .slice()
    .sort(
      (a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );

  return (
    <main className="min-h-screen bg-[#f7f7f7] text-[#333] font-sans">
      <div className="mx-auto max-w-4xl px-4 py-8">

        {/* ========================================
            HEADER
        ======================================== */}
        <header className="border-y-4 border-double border-[#555] bg-white">

          <div className="px-5 py-4">
            <div className="flex items-end justify-between">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-[#222]">
                  ILLUST
                </h1>

                <p className="mt-1 text-xs text-[#777]">
                  illustration gallery
                </p>
              </div>

              <div className="text-right text-[10px] leading-4 text-[#888]">
                <div>LAST UPDATE</div>
                <div>2026.09.04</div>
              </div>
            </div>
          </div>

          {/* メニューバー */}
          <nav className="border-t border-[#ccc] bg-[#eeeeee] px-4 py-2">
            <div className="flex flex-wrap gap-x-5 gap-y-1 text-xs">
              <Link
                href="/"
                className="text-[#0645ad] hover:underline"
              >
                [ HOME ]
              </Link>

              <Link
                href="/art"
                className="font-bold text-[#333]"
              >
                [ ILLUST ]
              </Link>

              <Link
                href="/diary"
                className="text-[#0645ad] hover:underline"
              >
                [ DIARY ]
              </Link>

              <Link
                href="/profile"
                className="text-[#0645ad] hover:underline"
              >
                [ PROFILE ]
              </Link>

              <Link
                href="/link"
                className="text-[#0645ad] hover:underline"
              >
                [ LINK ]
              </Link>
            </div>
          </nav>
        </header>

        {/* ========================================
            INTRO
        ======================================== */}
        <section className="mt-5 border border-[#ccc] bg-white p-4">

          <div className="mb-3 border-b border-[#ddd] pb-2">
            <h2 className="text-sm font-bold">
              ◆ ILLUSTRATION
            </h2>
          </div>

          <p className="text-xs leading-6 text-[#555]">
            オリジナルイラストを中心に掲載しています。
            <br />
            ※画像の無断転載・使用はご遠慮ください。
          </p>

          <p className="mt-3 text-[11px] text-[#888]">
            現在 {sortedArtworks.length} 枚展示中
          </p>
        </section>

        {/* ========================================
            TAG
        ======================================== */}
        <section className="mt-5 border border-[#ccc] bg-white p-4">

          <div className="mb-3 border-b border-[#ddd] pb-2">
            <h2 className="text-sm font-bold">
              ◆ CATEGORY
            </h2>
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs">

            {allTags.map((tag) => {
              const active = tag === activeTag;

              return (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`
                    cursor-pointer
                    bg-transparent
                    p-0
                    text-xs
                    ${
                      active
                        ? "font-bold text-[#cc0000]"
                        : "text-[#0645ad] hover:underline"
                    }
                  `}
                >
                  {active ? `【${tag}】` : tag}
                </button>
              );
            })}

          </div>
        </section>

        {/* ========================================
            NEW
        ======================================== */}
        <div className="mt-5 border-b border-[#999] pb-2">

          <div className="flex items-center gap-2">
            <span className="font-bold text-sm">
              ◆ GALLERY
            </span>

            <span className="text-[10px] font-bold text-[#ff0000]">
              NEW!
            </span>
          </div>

          <p className="mt-1 text-[10px] text-[#888]">
            ※画像をクリックすると詳細ページへ移動します
          </p>
        </div>

        {/* ========================================
            GALLERY
        ======================================== */}
        <section className="mt-4">

          {sortedArtworks.length === 0 ? (
            <div className="border border-[#ccc] bg-white p-8 text-center text-xs text-[#888]">
              該当する作品がありません。
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">

              {sortedArtworks.map((a, index) => (
                <Link
                  key={a.slug}
                  href={`/art/${a.slug}`}
                  className="
                    group
                    border
                    border-[#ccc]
                    bg-white
                    p-2
                    hover:border-[#777]
                  "
                >

                  {/* NEW表示 */}
                  {index === 0 && (
                    <div className="mb-1 text-[9px] font-bold text-[#ff0000]">
                      ★ NEW
                    </div>
                  )}

                  {/* IMAGE */}
                  <div className="relative aspect-square overflow-hidden bg-[#eee]">

                    <Image
                      src={a.image}
                      alt={a.title}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                      style={{ objectFit: "cover" }}
                      loading="lazy"
                      className="transition-none"
                    />

                  </div>

                  {/* INFO */}
                  <div className="pt-2">

                    <h3 className="truncate text-xs font-bold text-[#333] group-hover:text-[#0645ad]">
                      {a.title}
                    </h3>

                    <p className="mt-1 text-[10px] text-[#888]">
                      {a.date}
                    </p>

                    <div className="mt-1 flex flex-wrap gap-x-2 gap-y-1">
                      {a.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] text-[#0645ad]"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                  </div>

                </Link>
              ))}

            </div>
          )}

        </section>

        {/* ========================================
            FOOTER
        ======================================== */}
        <footer className="mt-10 border-t-4 border-double border-[#555] bg-white px-4 py-5">

          <div className="text-center text-[10px] leading-5 text-[#777]">

            <p>
              <Link
                href="/portfolio"
                className="text-[#0645ad] hover:underline"
              >
                ← HOMEへ戻る
              </Link>
            </p>

            <p className="mt-3">
              LINK FREE / NO BANNER REQUIRED
            </p>

            <p>
              © 2026 KEIGO
            </p>

            <p className="mt-2 text-[#aaa]">
              This site is best viewed with a modern browser.
            </p>

          </div>

        </footer>

      </div>
    </main>
  );
}