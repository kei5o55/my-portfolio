import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <main className="font-custom relative min-h-screen w-full overflow-x-hidden bg-[#fafafa] text-zinc-800 selection:bg-blue-500 selection:text-white">
      {/* 1. 背景：方眼紙（グリッド）パターン */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,#e2e8f0_2px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:30px_30px]" />

      {/* 2. 背景：散りばめるスケッチ・落書き・AA（絶対配置） */}
      <div className="pointer-events-none absolute inset-0 z-0 select-none opacity-40">
        {/* 左上のアスキーアート */}
        <pre className="absolute left-4 top-20 font-dot text-lg leading-tight text-blue-900">
          {`koko ha kei5o55 no page. ''''''''''''''''''''''''''
                ／￣￣￣＼
                /       ＼  ＜ WELCOME!!
                | ー  ー   |
                ＼＿  ＿  ／
                    ''seikintVevrryday
                    Ar_tis sukisuki 888888`}
        </pre>

        {/* 背景ラフスケッチ */}
        <div className="absolute -left-10 top-1/3 w-64 opacity-60 md:w-96">
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
      <div className="relative z-10 mx-auto min-h-screen max-w-6xl px-6 py-8">
        {/* ヘッダー・ロゴ */}
        <header className="flex flex-col justify-between gap-4 border-b-2 border-dotted border-blue-300 pb-4 md:flex-row md:items-baseline">
          <div>
            <h1 className="font-custom text-4xl font-black tracking-tight text-blue-900 md:text-6xl">
              kei5ot.com
            </h1>
            <h3 className="font-custom text-xs text-blue-700">
              ｯﾄﾄﾞｯﾄｺﾑｺﾞｰｺﾞｰ
            </h3>
            <p className="mt-1 font-dot text-xs text-blue-500">
              [ Welcome to my creation hub ]
            </p>
          </div>

          {/* 右上：SNS & ショップリンク */}
          <nav className="flex flex-wrap items-center gap-2 font-dot text-xs">
            <span className="mr-1 text-zinc-500">SNS ➔</span>

            {/* pixiv */}
            <a
              href="https://www.pixiv.net/users/16743124"
              target="_blank"
              rel="noreferrer"
              title="pixiv"
              className="flex items-center justify-center border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080] bg-[#e0e0e0] px-3 py-1 font-bold text-blue-800 active:border-t-[#808080] active:border-l-[#808080] active:border-r-white active:border-b-white"
            >
              <span className="text-xs font-black">pixiv</span>
            </a>

            {/* BOOTH */}
            <a
              href="https://shop11.booth.pm/"
              target="_blank"
              rel="noreferrer"
              title="BOOTH"
              className="flex items-center justify-center border-2 border-t-blue-400 border-l-blue-400 border-r-blue-900 border-b-blue-900 bg-blue-600 px-3 py-1 font-bold text-white active:border-t-blue-900 active:border-l-blue-900 active:border-r-blue-400 active:border-b-blue-400"
            >
              <span className="text-xs font-bold">BOOTH</span>
            </a>
          </nav>
        </header>

        {/* 中央コラージュエリア */}
        <div className="relative mt-8 min-h-[500px] w-full">
          {/* 左側：Portfolioボタン */}
          <div className="top-8 z-20 mb-8 md:absolute md:left-4 md:mb-0">
            <Link
              href="/portfolio"
              className="inline-block border-2 border-t-white border-l-white border-r-[#555] border-b-[#555] bg-[#e6e6e6] px-6 py-3 font-dot text-xl font-bold text-blue-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:border-t-[#555] active:border-l-[#555] active:border-r-white active:border-b-white active:shadow-none"
            >
              Portfolio ➔
            </Link>
          </div>

          {/* 中央：メインイラスト（2枚並び） */}
          <div className="top-4 z-10 my-6 flex justify-center gap-4 md:absolute md:left-1/2 md:my-0 md:-translate-x-1/2">
            <div className="relative aspect-[3/4] w-48 border border-zinc-400 bg-white p-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.15)] md:w-60">
              <Image
                src="/image/イラスト3.png"
                alt="Main Illustration 1"
                fill
                className="object-contain p-1"
                priority
              />
            </div>
            <div className="relative aspect-[3/4] w-48 border border-zinc-400 bg-white p-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.15)] md:w-60">
              <Image
                src="/image/イラスト3.png"
                alt="Main Illustration 2"
                fill
                className="object-contain p-1"
                priority
              />
            </div>
          </div>

          {/* 右側：告知カード & GIF */}
          <div className="top-12 z-20 flex max-w-xs flex-col gap-4 md:absolute md:right-4">
            <div className="border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080] bg-[#f0f0f0] p-2 shadow-md">
              <div className="mb-1 flex items-center justify-between bg-blue-900 px-1 py-0.5">
                <span className="font-dot text-[10px] font-bold text-white">
                  ★ NEW ARTBOOK
                </span>
              </div>
              <div className="relative h-32 w-full border border-zinc-400 bg-zinc-100">
                <Image
                  src="/image/op0_cover.png"
                  alt="op.0"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-1 font-dot text-xs font-bold text-zinc-800">
                1st Artbook "op.0"
              </p>
            </div>
            <Image
              src="/image/a.gif"
              alt="gif"
              width={200}
              height={400}
              className="object-contain"
            />
          </div>

          {/* 中央下部：UNDER CONSTRUCTION */}
          <div className="bottom-4 left-1/2 z-20 mt-8 pointer-events-none text-center md:absolute md:mt-0 md:-translate-x-1/2">
            <span className="border-b-2 whitespace-nowrap border-dashed border-red-500 font-custom text-2xl font-bold tracking-wider text-red-600 md:text-4xl">
              ≪ UNDER CONSTRUCTION ≫
            </span>
          </div>
        </div>

        {/* 埋め込みプレイヤー ＆ GIFエリア */}
        <div className="mt-8 flex flex-col items-center gap-4 md:flex-row md:items-start">
          <div className="flex w-full flex-1 flex-col gap-4 sm:flex-row">
            <div className="relative aspect-video w-full flex-1 border-2 border-t-[#808080] border-l-[#808080] border-r-white border-b-white bg-black">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/UyKNtTUGbMo"
                title="YouTube video player 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="relative aspect-video w-full flex-1 border-2 border-t-[#808080] border-l-[#808080] border-r-white border-b-white bg-black">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/VZn-NXRJT1g?si=lxeWkus-a4agZh4B&controls=0"
                title="YouTube video player 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          <Image
            src="/image/b.gif"
            alt="gif"
            width={150}
            height={150}
            className="shrink-0 object-contain"
          />
        </div>

        <div className="px-2 pb-1 pt-3">
          <p className="mt-1 font-dot text-xs text-blue-600 underline">
            ♪ currently listening...
          </p>
        </div>
      </div>
    </main>
  );
}