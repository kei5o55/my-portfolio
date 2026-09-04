import Link from 'next/link';
// app/diary/page.tsx

export default function DiaryPage() {
    return (
        <main className=" font-custom min-h-screen bg-white text-black">
        <div className="mx-auto w-full max-w-3xl px-4 py-8">

            {/* タイトル */}
            <header className="mb-8 border-b-2 border-black pb-3">
                <Link href="/" className="border cursor-pointer">Back to home</Link>
            <h1 className="text-2xl font-bold">
                DIARY
            </h1>

            <p className="mt-1 text-xs">
                testdiarypage。
            </p>
            </header>

            {/* Diary一覧 */}
            <section className="space-y-8">

            {/* 記事1 */}
            <article className="border border-black p-4">
                {/*<div className="mb-3 border-b border-gray-400 pb-2">
                <time className="text-xs">
                    2026.09.04
                </time>

                <h2 className="mt-1 text-lg font-bold">
                    本物の絵描きについて
                </h2>
                </div>

                <div className="text-sm leading-7">
                <p>
                    最近、昔の絵描きについて色々考えている。
                </p>

                <p className="mt-3">
                    2000年代の個人サイトとか、同人誌とか。
                    今とは全然違う環境で絵を描いていた人たちのことを考えると、
                    なかなか面白い。
                </p>

                <p className="mt-3">
                    そんなことを考えながら、自分も絵を描いている。
                </p>
                </div>

                <div className="mt-4 text-right">
                <a
                    href="/diary/20260904"
                    className="text-xs underline hover:no-underline"
                >
                    → 続きを読む
                </a>
                </div>*/}
            </article>

            {/* 記事2 */}
            <article className="border border-black p-4">
                <div className="mb-3 border-b border-gray-400 pb-2">
                <time className="text-xs">
                    2026.08.30
                </time>

                <h2 className="mt-1 text-lg font-bold">
                    サイトを更新しました
                </h2>
                </div>

                <div className="text-sm leading-7">
                <p>
                    久しぶりにサイトを更新しました。diaryページのtestデータ
                </p>

                <p className="mt-3">
                    まだまだ工事中ですが、少しずつ色々追加していきます。
                </p>
                </div>

                <div className="mt-4 text-right">
                <a
                    href={`/diary/${1}`}
                    className="text-xs underline hover:no-underline"
                >
                    → 続きを読む
                </a>
                </div>
            </article>

            </section>

            {/* ページング */}
            <nav className="mt-10 flex justify-center gap-4 text-xs">
            <a
                href="#"
                className="underline hover:no-underline"
            >
                ← PREV
            </a>

            <a
                href="#"
                className="underline hover:no-underline"
            >
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