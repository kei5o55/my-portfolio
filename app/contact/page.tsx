"use client";

import { useState } from "react";
import Link from "next/link";

export default function Page() {
    const email = "inf@kei5ot.com"; // 任意のアドレスに変更してください
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
        await navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        } catch (err) {
        console.error("Failed to copy: ", err);
        }
    };

    return (
        <main className="min-h-screen bg-[#fafafa] text-zinc-800 selection:bg-zinc-800 selection:text-white px-6 py-12 md:py-20 max-w-4xl mx-auto font-sans relative overflow-hidden">
        {/* 繊細な背景グラデーション / ノイズ感のある光 */}
        <div className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-slate-200/40 via-purple-100/30 to-transparent rounded-full blur-3xl -z-10" />
        <div className="pointer-events-none absolute top-1/3 -right-40 w-96 h-96 bg-gradient-to-bl from-blue-100/40 via-sky-100/20 to-transparent rounded-full blur-3xl -z-10" />

        {/* ヘッダー */}
        <header className="mb-8 border-b border-zinc-200 pb-8 flex flex-col gap-2">
            <h1 className="text-4xl md:text-5xl font-light tracking-widest text-zinc-900 flex items-center gap-3">
            contact
            <span className="w-2 h-2 rounded-full bg-sky-400/80 animate-pulse" />
            </h1>
            <p className="text-xs text-zinc-400 tracking-wider font-mono uppercase">
            Request & Contact Information
            </p>
        </header>

        {/* 戻るボタン */}
        <div className="mb-8">
            <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-300/80 bg-white/60 text-zinc-700 text-sm tracking-wide transition-all duration-300 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 backdrop-blur-sm shadow-sm hover:shadow-md"
            >
            ← Back to home
            </Link>
        </div>

        {/* メインコンテンツカード群 */}
        <div className="space-y-6">
            {/* セクション1: 外部サイトでのリクエスト */}
            <div className="group relative border border-zinc-200/90 rounded-2xl p-6 md:p-8 bg-white/70 backdrop-blur-md transition-all duration-300 hover:border-zinc-400/80 hover:shadow-xl hover:shadow-zinc-200/50">
            <h2 className="text-xl font-medium tracking-wide text-zinc-900 mb-3">
                外部サイトでのリクエスト
            </h2>
            <p className="text-sm text-zinc-600 leading-relaxed font-light mb-6">
                Skebやpixiv リクエストを常時受け付けています。
                <br />
                リクエストの際は「この絵の感じに描いて」など、自身の過去作を例に挙げていただけるとスムーズです。
            </p>

            <div className="flex flex-wrap gap-3">
                <a
                href="https://skeb.jp/@kei5ot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-zinc-300 bg-white text-zinc-800 text-sm transition-all duration-200 hover:bg-zinc-900 hover:text-white hover:border-zinc-900"
                >
                Skeb →
                </a>
                <a
                href="https://www.pixiv.net/users/16743124/request"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-zinc-300 bg-white text-zinc-800 text-sm transition-all duration-200 hover:bg-zinc-900 hover:text-white hover:border-zinc-900"
                >
                pixiv リクエスト →
                </a>
            </div>
            </div>

            {/* セクション2: 参考作品 */}
            <div className="group relative border border-zinc-200/90 rounded-2xl p-6 md:p-8 bg-white/70 backdrop-blur-md transition-all duration-300 hover:border-zinc-400/80 hover:shadow-xl hover:shadow-zinc-200/50">
            <h2 className="text-xl font-medium tracking-wide text-zinc-900 mb-3">
                参考作品
            </h2>
            <p className="text-sm text-zinc-600 leading-relaxed font-light mb-6">
                過去の作品の一部をArtworkページ、pixivに置いています。依頼の参考にしてください。
            </p>

            <div className="flex flex-wrap gap-3">
                <Link
                href="/art"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-zinc-300 bg-white text-zinc-800 text-sm transition-all duration-200 hover:bg-zinc-900 hover:text-white hover:border-zinc-900"
                >
                Artwork →
                </Link>
                <a
                href="https://www.pixiv.net/users/16743124"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-zinc-300 bg-white text-zinc-800 text-sm transition-all duration-200 hover:bg-zinc-900 hover:text-white hover:border-zinc-900"
                >
                pixiv →
                </a>
            </div>
            </div>

            {/* セクション3: メールでのご依頼 ＆ ダイレクトコンタクト */}
            <div className="group relative border border-zinc-200/90 rounded-2xl p-6 md:p-8 bg-white/70 backdrop-blur-md transition-all duration-300 hover:border-zinc-400/80 hover:shadow-xl hover:shadow-zinc-200/50">
            <h2 className="text-xl font-medium tracking-wide text-zinc-900 mb-3">
                メールでのご依頼
            </h2>
            <p className="text-sm text-zinc-600 leading-relaxed font-light mb-4">
                Skeb等の各種規約に収まらない個別のご依頼はメールにて受付中です。
                <br />
                以下の内容を添えて、下記アドレス宛にお送りください。
            </p>

            <div className="p-4 rounded-xl bg-zinc-50/80 border border-zinc-200/60 mb-6">
                <ul className="list-disc list-inside space-y-1.5 text-xs md:text-sm text-zinc-700 font-light">
                <li>ご依頼内容（用途、イラストのイメージなど）</li>
                <li>ご予算 / ご希望の納期</li>
                <li>（可能であれば）実績公開の可否</li>
                </ul>
            </div>

            {/* メールアドレス ＋ 簡易アクションカード */}
            <div className="border border-zinc-200/90 rounded-xl p-5 bg-white/80 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                <p className="text-xs uppercase font-mono tracking-wider text-zinc-400 mb-1">
                    Direct Email
                </p>
                <p className="text-base md:text-lg font-mono text-zinc-800 break-all">
                    {email}
                </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                <a
                    href={`mailto:${email}`}
                    className="inline-flex items-center gap-1 px-4 py-2 rounded-lg border border-zinc-300 bg-white text-zinc-800 text-xs transition-all duration-200 hover:bg-zinc-900 hover:text-white hover:border-zinc-900"
                >
                    メールを送る
                </a>
                <button
                    onClick={handleCopy}
                    className={`inline-flex items-center gap-1 px-4 py-2 rounded-lg border text-xs transition-all duration-200 cursor-pointer ${
                    copied
                        ? "bg-zinc-800 text-white border-zinc-800"
                        : "bg-white text-zinc-800 border-zinc-300 hover:bg-zinc-900 hover:text-white hover:border-zinc-900"
                    }`}
                >
                    {copied ? "Copied!" : "Copy"}
                </button>
                </div>
            </div>
            </div>

            {/* セクション4: お便り（マシュマロ） */}
            <div className="group relative border border-zinc-200/90 rounded-2xl p-6 md:p-8 bg-white/70 backdrop-blur-md transition-all duration-300 hover:border-zinc-400/80 hover:shadow-xl hover:shadow-zinc-200/50 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
                <h2 className="text-xl font-medium tracking-wide text-zinc-900 mb-2">
                お便り・メッセージ
                </h2>
                <p className="text-sm text-zinc-600 leading-relaxed font-light">
                感想や質問など、気軽なメッセージはマシュマロで届けていただけると嬉しいです。
                <br className="hidden md:inline" />
                主にお返事はX（旧Twitter）上で行います。
                </p>
            </div>
            <div className="shrink-0">
                <a
                href="https://marshmallow-qa.com/fti1k8ni3gu5g8t?t=C2uolO&utm_medium=url_text&utm_source=promotion"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg border border-zinc-300 bg-white text-zinc-800 text-sm transition-all duration-200 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 shadow-sm"
                >
                マシュマロを送る →
                </a>
            </div>
            </div>
        </div>
        </main>
    );
}