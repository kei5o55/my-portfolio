import Link from "next/link";
import Image from "next/image";

export default function Page() {
    return (
        <main className="relative min-h-screen w-full overflow-x-hidden bg-[#fafafa] text-zinc-800 font-sans selection:bg-blue-500 selection:text-white">
        {/* 1. 背景：方眼紙（グリッド）パターン */}
        <div 
            className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px]" 
        />

        {/* 2. 背景：散りばめるスケッチ・落書き・AA（絶対配置） */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-40 select-none">
            {/* 左上のアスキーアートやメモ */}
            <pre className="text-xl absolute left-4 top-20 text-[10px] leading-tight text-blue-900 font-mono">
            {`koko ha kei5ot no page. watta!?!?!?!?!?!mazikayo`}
            </pre>

            {/* 背景に敷くラフスケッチ（手持ちのイラスト素材画像に差し替え可能） */}
            <div className="absolute -left-10 top-1/3 w-64 md:w-96 opacity-60">
            <Image
                src="/image/sketch_sample.png" 
                alt="sketch"
                width={400}
                height={400}
                className="object-contain"
            />
            </div>
        </div>

        {/* 3. メインコンテンツ領域 */}
        <div className="relative z-10 mx-auto max-w-6xl min-h-screen px-6 py-8">
            
            {/* ヘッダー・ロゴ */}
            <header className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 border-b border-blue-200 pb-4">
            <div>
                <h1 className="text-4xl md:text-6xl font-black tracking-tight text-blue-600 font-mono">
                kei5ot.com
                </h1>
                <p className="text-xs text-blue-400 font-mono mt-1">
                [ Welcome to my criation hub ]
                </p>
            </div>

            {/* 右上：SNS & ショップリンク */}
            <nav className="flex flex-wrap items-center gap-2 text-xs font-mono scale-200">
                <span className="text-zinc-400 mr-1">SNS ➔</span>

                {/* X (Twitter) */}
                <a
                    href="https://x.com/kei5ot"
                    target="_blank"
                    rel="noreferrer"
                    title="X (Twitter)"
                    className="p-2 bg-white border border-blue-300 rounded-md shadow-sm hover:bg-blue-50 text-blue-600 transition flex items-center justify-center"
                >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                </a>

                {/* pixiv */}
                <a
                    href="https://www.pixiv.net/users/16743124"
                    target="_blank"
                    rel="noreferrer"
                    title="pixiv"
                    className="p-2 bg-white border border-blue-300 rounded-md shadow-sm hover:bg-blue-50 text-blue-600 transition flex items-center justify-center font-bold"
                >
                    {/* pixivの「p」風の簡易デザインアイコン */}
                    <span className="text-sm font-black leading-none">p</span>
                </a>
                
                {/* BOOTH */}
                <a
                    href="https://booth.pm"
                    target="_blank"
                    rel="noreferrer"
                    title="BOOTH"
                    className="p-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 transition flex items-center justify-center"
                >
                    <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                    </svg>
                </a>
                </nav>
            </header>

            {/* 中央コラージュエリア */}
            <div className="relative mt-8 min-h-[500px] w-full">
            
            {/* 左側：Linktree風のデカボタン */}
            <div className="md:absolute left-4 top-8 z-20 mb-8 md:mb-0">
                <Link 
                href="/portfolio" 
                className="inline-block bg-blue-100/80 backdrop-blur border-2 border-blue-400 text-blue-700 text-2xl font-bold px-8 py-4 rounded-2xl shadow-[4px_4px_0px_0px_rgba(96,165,250,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all font-mono"
                >
                Portfolio!! ➔
                </Link>
            </div>

            {/* 中央：メインOCイラスト（画面の中心に配置） */}
            <div className="relative md:absolute md:left-1/2 md:top-4 md:-translate-x-1/2 z-10 flex justify-center">
                <div className="relative w-72 md:w-96 aspect-[3/4] drop-shadow-xl">
                <Image
                    src="/image/イラスト3.png" // ここに白髪の女の子のイラスト
                    alt="Main Illustration"
                    fill
                    className="object-contain"
                    priority
                />
                </div>
            </div>

            {/* 右側：告知カードや作品サムネイル */}
            <div className="md:absolute right-4 top-12 z-20 flex flex-col gap-4 max-w-xs">
                <div className="bg-white/90 p-3 rounded-lg border border-zinc-300 shadow-md transform md:rotate-2 hover:rotate-0 transition">
                <span className="text-[10px] font-mono text-blue-500 font-bold block mb-1">NEW ARTBOOK</span>
                <div className="relative w-full h-32 bg-zinc-100 rounded overflow-hidden">
                    <Image 
                    src="/image/op0_cover.png" 
                    alt="op.0" 
                    fill 
                    className="object-cover" 
                    />
                </div>
                <p className="text-xs font-bold mt-2">1st Artbook "op.0"</p>
                </div>
            </div>

            {/* 中央下部：手書き風テキストのアクセント */}
            <div className="md:absolute bottom-4 left-1/2 md:-translate-x-1/2 z-20 text-center pointer-events-none mt-8 md:mt-0">
                <span className="text-3xl md:text-5xl font-extrabold text-blue-500/80 tracking-widest uppercase italic border-b-2 border-dashed border-blue-400">
                UNDER CONSTRUCTION
                </span>
            </div>

            </div>
        </div>
        </main>
    );
}