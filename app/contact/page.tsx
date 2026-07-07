"use client";
import Link from "next/link";

export default function Page() {
    return (
        <main style={{ padding: 32, maxWidth: 900, margin: "0 auto" }}>
        {/* メインタイトル */}
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-2">
            Commission
        </h1>

        {/* 戻るボタン */}
        <Link
            href="/"
            className="
            inline-flex
            items-center
            gap-2
            px-4
            py-2
            mb-6
            border
            border-black
            rounded-lg
            text-sm
            transition
            hover:bg-zinc-200
            "
        >
            ← Back to home
        </Link>

        {/* メインコンテンツカード */}
        <div className="border border-zinc-800 rounded-lg p-6 mt-3 space-y-6">
            {/* セクション1: 外部サイト */}
            <div>
            <h2 className="text-xl font-bold tracking-tight text-gray-900 mb-3">
                外部サイトでのリクエスト
            </h2>
            <p className="text-gray-700 mb-4">
                Skebやpixiv リクエストを常時受け付けています。
            </p>

            <div className="flex flex-wrap gap-3 mb-4">
                <Link
                className="
                    inline-flex
                    items-center
                    gap-1
                    px-4
                    py-2
                    border
                    border-black
                    rounded-lg
                    text-sm
                    transition
                    hover:bg-zinc-200
                "
                href="https://skeb.jp/@kei5ot"
                >
                Skeb →
                </Link>
                <Link
                className="
                    inline-flex
                    items-center
                    gap-1
                    px-4
                    py-2
                    border
                    border-black
                    rounded-lg
                    text-sm
                    transition
                    hover:bg-zinc-200
                "
                href="https://www.pixiv.net/users/16743124/request"
                >
                pixiv リクエスト →
                </Link>
            </div>

            <p className="text-gray-700 leading-relaxed">
                リクエストの際は「この絵の感じに描いて」とか、自分の過去の絵を例に挙げてくれるとやりやすいです。
            </p>
            </div>

            <hr className="border-zinc-200" />

            {/* セクション2: 参考作品 */}
            <div>
            <p className="text-gray-700 mb-4">
                過去の作品の一部をArtworkページ、pixivに置いています。依頼の参考にしてください。
            </p>
            <div className="flex flex-wrap gap-3">
                <Link
                className="
                    inline-flex
                    items-center
                    gap-1
                    px-4
                    py-2
                    border
                    border-black
                    rounded-lg
                    text-sm
                    transition
                    hover:bg-zinc-200
                "
                href="/art"
                >
                Artwork →
                </Link>
                <Link
                className="
                    inline-flex
                    items-center
                    gap-1
                    px-4
                    py-2
                    border
                    border-black
                    rounded-lg
                    text-sm
                    transition
                    hover:bg-zinc-200
                "
                href="https://www.pixiv.net/users/16743124"
                >
                pixiv →
                </Link>
            </div>
            </div>

            <hr className="border-zinc-200" />

            {/* セクション3: メールでのご依頼 */}
            <div>
            <h2 className="text-xl font-bold tracking-tight text-gray-900 mb-3">
                メールでのご依頼
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
                Skeb等の各種規約に収まらない個別のご依頼（パーツ分けイラスト、グッズ用イラスト等）はメールでも受付中です。
                <br />
                ホーム画面下部の
                <Link
                href="/#contact"
                className="underline mx-1 font-medium hover:text-zinc-600"
                >
                Contact セクション
                </Link>
                にあるメールアドレス宛に、以下の内容を添えてお送りください。
            </p>

            <ul className="pl-5 list-disc space-y-2 text-zinc-800 font-medium">
                <li>ご依頼内容（用途、イラストのイメージなど）</li>
                <li>ご予算 / ご希望の納期</li>
                <li>（可能であれば）実績公開の可否</li>
            </ul>
            </div>
        </div>
        </main>
    );
}
