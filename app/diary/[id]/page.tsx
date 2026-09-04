// app/works/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { diary } from "../data";

type Props = {
    params: Promise<{ id: string }>;
};

export default async function DiaryPage({ params }: Props) {
    const { id } = await params; // URLの末尾（slug）を取得する
    // URLの末尾（slug）を使って、Step 1のデータから探し出す
    const work =diary.find((w) => w.id === id);
    // もしデータが見つからなければ404ページを表示
    if (!work) {
        notFound();
    }
    return (
        <main className=" font-custom min-h-screen bg-white text-black">
            <div className="mx-auto w-full max-w-3xl px-4 py-8">
                {/* 戻るボタン */}
                <Link href="/diary" className="border cursor-pointer">← Back to home</Link>

                <article className="border border-black p-4">
                    <h1 style={{ fontSize: 32, fontWeight: "bold", marginBottom: 8 }}>{work.title}</h1>
                    {/* 本文エリア */}
                    <div style={{ marginTop: 32 }}>
                        {work.content}
                    </div>
                </article>
            </div>
        </main>
    );
}