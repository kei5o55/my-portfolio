// app/art/[slug]/page.tsx
// 作品詳細ページ
// slugに対応する作品データを表示する(画像、タイトル、日付、タグ、説明文など)

import Link from "next/link";
import { artworks } from "../_data";
import ArtLightbox from "./ArtLightbox";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ArtDetailPage({ params }: Props) {
  const { slug } = await params; 

  const art = artworks.find((a) => a.slug === slug);

  if (!art) {
    return (
      <main style={{ padding: 32 }}>
        <h1>Not Found</h1>
        <p style={{ opacity: 0.7 }}>slug: {slug}</p>
        <Link href="/art">← Back</Link>
      </main>
    );
  }

  return (
    <main style={{ padding: 32, maxWidth: 1000, margin: "0 auto" }}>
      <Link href="/art" className="
                            inline-flex
                            items-center
                            gap-2
                            px-4
                            py-2
                            mb-4
                            border
                            border-black
                            rounded-lg
                            text-sm
                            transition
                            hover:bg-zinc-200
                        "
                        style={{ display: "inline-block", marginBottom: 14 }}>
        ← Back to list
      </Link>

      <h1 style={{ fontSize: 28, marginBottom: 6 }}>{art.title}</h1>
      <div style={{ opacity: 0.7, marginBottom: 12 }}>{art.date}</div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
        {art.tags.map((t) => (
          <span
            key={t}
            style={{
              fontSize: 12,
              padding: "4px 10px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.10)",
            }}
          >
            {t}
          </span>
        ))}
      </div>

      <ArtLightbox src={art.image} alt={art.title} />

      {art.description && (/* descriptionがあれば表示する */
        <p style={{ marginTop: 14, lineHeight: 1.8, opacity: 0.85 ,whiteSpace: "pre-wrap" /* 改行を反映させる */}}>
          {art.description}
        </p>
      )}
    </main>
  );
}
