import Link from "next/link";
import { artworks } from "../_data";

type Props = {
  params: { slug: string };
};

export default function ArtDetailPage({ params }: Props) {
  const art = artworks.find((a) => a.slug === params.slug);

  if (!art) {
    return (
      <main style={{ padding: 32 }}>
        <h1>Not Found</h1>
        <Link href="/art">← Back</Link>
      </main>
    );
  }

  return (
    <main style={{ padding: 32, maxWidth: 1000, margin: "0 auto" }}>
      <Link href="/art" style={{ display: "inline-block", marginBottom: 14 }}>
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

      <div
        style={{
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: 12,
          overflow: "hidden",
          background: "rgba(255,255,255,0.06)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={art.image}
          alt={art.title}
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </div>

      {art.description && (
        <p style={{ marginTop: 14, lineHeight: 1.8, opacity: 0.85 }}>
          {art.description}
        </p>
      )}
    </main>
  );
}
