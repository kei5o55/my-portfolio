// app/works/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { worksData } from "../data";

type Props = {
    params: Promise<{ slug: string }>;
};

export default async function WorkDetailPage({ params }: Props) {
    const { slug } = await params; // URLの末尾（slug）を取得する
    // URLの末尾（slug）を使って、Step 1のデータから探し出す
    const work = worksData.find((w) => w.slug === slug);
    // もしデータが見つからなければ404ページを表示
    if (!work) {
        notFound();
    }
    return (
        <main style={{ padding: 32, maxWidth: 800, margin: "0 auto", color: "#000", backgroundColor: "#fff", minHeight: "100vh" }}>
        {/* 戻るボタン */}
        <Link href="/" style={{ color: "#666", textDecoration: "none", fontSize: 14 }}>
            ← Back to home
        </Link>

        <article style={{ marginTop: 40 }}>
            <h1 style={{ fontSize: 32, fontWeight: "bold", marginBottom: 8 }}>{work.title}</h1>
            <p style={{ opacity: 0.6, marginBottom: 24 }}>{work.subtitle}</p>

            {/* リンクボタン */}
            <div style={{ display: "flex", gap: 16, marginBottom: 40 }}>
            <a href={work.demoUrl} style={{ color: "#0066cc", fontWeight: "bold" }}>▶ DEMO</a>
            <a href={work.githubUrl} style={{ color: "#0066cc", fontWeight: "bold" }}>GitHub</a>
            </div>

            {/* 本文エリア */}
            <div style={{ marginTop: 32 }}>
                {work.content}
            </div>
        </article>

        {/* フッター */}
        <div style={{ marginTop: 80, textAlign: "center", paddingBottom: 100 }}>
            <p style={{ opacity: 0.5, fontSize: 14 }}>Created by [kei5o55]</p>
            <div style={{ display: "flex", justifyContent: "center", gap: 20, marginTop: 10 }}>
                <Link href="/">Home</Link>
            </div>
        </div>
        </main>
    );
}