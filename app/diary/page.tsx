// app/diary/page.tsx
import Link from 'next/link';
import { diary } from './data';

export default function DiaryPage() {
    return (
        <main className="font-custom min-h-screen bg-white text-black">
        <div className="mx-auto w-full max-w-3xl px-4 py-8">

            {/* ヘッダー */}
            <header className="mb-8 border-b-2 border-black pb-3">
            <Link href="/" className="border cursor-pointer inline-block mb-2 px-2 py-1 text-xs">
                ← Back to home
            </Link>
            <h1 className="text-2xl font-bold">DIARY</h1>
            <p className="mt-1 text-xs">創作や日々の思考の記録。</p>
            </header>

            {/* Diary一覧 */}
            <section className="space-y-8">
            {diary.map((item) => (
                <article key={item.id} className="border border-black p-4">
                <div className="mb-3 border-b border-gray-400 pb-2">
                    <time className="text-xs text-gray-600 block">{item.date}</time>
                    <h2 className="mt-1 text-lg font-bold">{item.title}</h2>
                </div>

                {/* descriptionがあればそれを優先表示し、なければ簡易表示 */}
                <div className="text-sm leading-7">
                    {item.description ? (
                    <p>{item.description}</p>
                    ) : (
                    <div className="line-clamp-3">{item.content}</div>
                    )}
                </div>

                {/* タグ表示（存在する場合） */}
                {item.tags && item.tags.length > 0 && (
                    <div className="mt-3 flex gap-2">
                    {item.tags.map((tag) => (
                        <span key={tag} className="text-[10px] border border-black px-1.5 py-0.5">
                        #{tag}
                        </span>
                    ))}
                    </div>
                )}

                {/* 詳細ページへのリンク */}
                <div className="mt-4 text-right">
                    <Link
                    href={`/diary/${item.id}`} // 詳細ページのパス（/works/[slug] または /diary/[slug]）を指定
                    className="text-xs underline hover:no-underline"
                    >
                    → 続きを読む
                    </Link>
                </div>
                </article>
            ))}
            </section>

            {/* ページネーション（必要に応じて後からロジックを追加） */}
            <nav className="mt-10 flex justify-center gap-4 text-xs">
            <a href="#" className="underline hover:no-underline">
                ← PREV
            </a>
            <a href="#" className="underline hover:no-underline">
                NEXT →
            </a>
            </nav>

            {/* フッター */}
            <footer className="mt-12 border-t border-black pt-4 text-center text-xs">
            <p>Last Update: 2026.09.04</p>
            </footer>

        </div>
        </main>
    );
}