"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { artworks } from "./_data";
import "./page.css";
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
    <main style={{ padding: 32, maxWidth: 1000, margin: "0 auto" }}>
      <h1 style={{ fontSize: 28, marginBottom: 8 }}>Illustrations</h1>
      <p style={{ opacity: 0.7, marginBottom: 16 }}>
        タグで絞り込み → クリックで詳細へ
      </p>

      {/* タグUI */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
        {allTags.map((tag) => {
          const active = tag === activeTag;
          return (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              style={{
                padding: "6px 10px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.18)",
                background: active ? "rgba(255,255,255,0.14)" : "transparent",
                cursor: "pointer",
              }}
            >
              {tag}
            </button>
          );
        })}
      </div>

      {/* 一覧 */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: 14,
        }}
      >
        {filtered.map((a) => (
          <Link
            key={a.slug}
            href={`/art/${a.slug}`}
            style={{
              textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 12,
              overflow: "hidden",
              display: "block",
            }}
          >
          <div style={{ aspectRatio: "4 / 3", background: "rgba(255,255,255,0.06)", position: "relative" }}>
            <Image
              src={a.image}
              alt={a.title}
              fill // 親要素いっぱいに広げる
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // 閲覧環境に応じた最適化
              style={{ objectFit: "cover" }}
              // ↓ これが重要！画面外の画像はスクロールするまで読み込まない（Lazy Load）
              loading="lazy" 
            />
          </div>

            <div className="title" style={{ padding: 12 }}>
              <div style={{ fontWeight: 700 }}>{a.title}</div>
              <div style={{ fontSize: 12, opacity: 0.7 }}>{a.date}</div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 8 }}>
                {a.tags.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: 12,
                      padding: "3px 8px",
                      borderRadius: 999,
                      background: "rgba(255,255,255,0.10)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      <Link href="/" style={{ display: "inline-block", marginBottom: 14 }}>
        ← Back to home
      </Link>
      </div>

            {/* フッター */}
      <div style={{ marginTop: 80, textAlign: "center", paddingBottom: 100 }}>
        <p style={{ opacity: 0.5, fontSize: 14 }}>Created by [kei5o55]</p>
        <div style={{ display: "flex", justifyContent: "center", gap: 20, marginTop: 10 }}>
            <Link href="/about">About Me</Link>
            <Link href="/">Home</Link>
        </div>
      </div>

    </main>
  );
}
