// app/art/[slug]/page.tsx
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
      <main className="min-h-screen bg-[#fafafa] text-zinc-800 px-6 py-20 max-w-4xl mx-auto font-sans flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-light tracking-widest text-zinc-900 mb-2">404 / Not Found</h1>
        <p className="text-xs font-mono text-zinc-400 mb-8">slug: {slug}</p>
        <Link
          href="/art"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-300/80 bg-white/60 text-zinc-700 text-xs tracking-wide transition-all duration-300 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 backdrop-blur-sm shadow-sm"
        >
          ← Back to list
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#fafafa] text-zinc-800 px-6 py-12 md:py-20 max-w-4xl mx-auto font-sans relative overflow-hidden">
      {/* 繊細な背景グラデーション */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-slate-200/40 via-purple-100/30 to-transparent rounded-full blur-3xl -z-10" />
      <div className="pointer-events-none absolute top-1/3 -right-40 w-96 h-96 bg-gradient-to-bl from-blue-100/40 via-sky-100/20 to-transparent rounded-full blur-3xl -z-10" />

      {/* 戻るボタン */}
      <div className="mb-8">
        <Link
          href="/art"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-300/80 bg-white/60 text-zinc-700 text-xs tracking-wide transition-all duration-300 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 backdrop-blur-sm shadow-sm"
        >
          ← Back to list
        </Link>
      </div>

      {/* 作品ヘッダー情報 */}
      <header className="mb-8 border-b border-zinc-200/80 pb-6">
        <h1 className="text-2xl md:text-3xl font-light tracking-wide text-zinc-900 mb-2">
          {art.title}
        </h1>
        <div className="text-xs font-mono text-zinc-400 mb-4">{art.date}</div>

        {/* タグ一覧 */}
        <div className="flex flex-wrap gap-2">
          {art.tags.map((t) => (
            <span
              key={t}
              className="text-xs font-mono px-3 py-1 rounded-full bg-white/80 text-zinc-600 border border-zinc-200/80 backdrop-blur-sm shadow-sm"
            >
              {t}
            </span>
          ))}
        </div>
      </header>

      {/* メイン作品画像（ArtLightbox） */}
      <div className="mb-8 rounded-2xl overflow-hidden border border-zinc-200/90 bg-white/50 backdrop-blur-md shadow-sm">
        <ArtLightbox src={art.image} alt={art.title} />
      </div>

      {/* 説明文 */}
      {art.description && (
        <section className="border border-zinc-200/90 rounded-2xl p-6 md:p-8 bg-white/70 backdrop-blur-md shadow-sm">
          <p className="text-sm md:text-base text-zinc-600 leading-relaxed font-light whitespace-pre-wrap">
            {art.description}
          </p>
        </section>
      )}
    </main>
  );
}