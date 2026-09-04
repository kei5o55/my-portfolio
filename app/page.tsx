import Link from "next/link";
import Image from "next/image";
import { MarqueeText } from './components/MarqueeText';

export default function Page() {
  return (
    // main に overflow-x-hidden を指定し、横揺れ・無駄な横スクロールを完全に防止
    <main className="font-custom relative min-h-screen w-full overflow-x-hidden bg-[#fafafa] text-zinc-800 selection:bg-blue-500 selection:text-white">
      {/* 1. マーキー */}
      <MarqueeText />

      {/* 2. 背景：方眼紙（グリッド）パターン */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,#e2e8f0_2px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:30px_30px]" />

{/* 3. 背景グラフィック（スマホとPCで配置・サイズを最適化） */}
<div className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden">
  {/* メインイラスト：スマホでは中央奥で薄く、PCでは大きく主張 */}
  <div className="absolute left-1/2 -top-[60px] -translate-x-1/2 md:top-18">
    <div className="relative h-[450px] w-[450px] opacity-40 sm:h-[600px] sm:w-[600px] md:h-[900px] md:w-[900px] md:opacity-90">
      <Image
        src="/image/e.png"
        alt="Main Illustration 1"
        fill
        className="object-contain"
        priority
      />
    </div>
  </div>

  {/* 左上のアスキーアート */}
  <pre className="hidden absolute left-4 top-20 font-dot text-lg leading-tight text-blue-900 opacity-40 md:block">
    {`koko ha kei5o55 no page. ''''''''''''''''''''''''''
          ／￣￣￣＼
          /       ＼  ＜ WELCOME!!
          | ー  ー   |
          ＼＿  ＿  ／
              ''seikintVevrryday
              Ar_tis sukisuki 888888
              #############//nn#####%%####%%%####*######%

###############***###%%%%%%######
########               ---::*##********####
***************************=.....::-:-***#*#**********#==-
==***************###*****#****##
*****************jjjjj....:-=-::.:+++:+*******##********==::
:+*****#***********#***********#+******
#*++*+*#+#++#**#+*
++***+**#****+***++++^^^+*++++*+**+++*+**++***:=*-==++=++*+**
`}
  </pre>
</div>


      {/* 4. メインコンテンツ領域 */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8">
        <header className="flex flex-col justify-between gap-4 border-b-2 border-dotted border-blue-300 pb-4 md:flex-row md:items-end">
  {/* 1. 左：ロゴ・タイトル */}
  <div>
    <h1 className="font-custom text-3xl font-black tracking-tight text-blue-900 sm:text-4xl md:text-5xl">
      kei5ot.com
    </h1>
    <h3 className="font-custom text-xs text-blue-800">
      ｯﾄﾄﾞｯﾄｺﾑｺﾞｰｺﾞｰ
    </h3>
    <p className="mt-1 text-sm text-blue-500 sm:text-base">
      [ Welcome to my creation hub ]
    </p>
  </div>

  {/* 2. 右：バナー ＆ アイコン＋SNSボタン（縦並び構造） */}
  <div className="flex flex-col items-center gap-3 md:items-end">
    {/* SNSの「上」に配置するバナー（サイズアップ版） */}
  <div className="inline-flex items-center gap-3 border-2 border-black bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 px-6 py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
    <span className="text-base text-yellow-300 sm:text-lg">❤</span>

    <span className="text-base font-black tracking-widest text-white drop-shadow-[1px_1px_0px_rgba(0,0,0,1)] sm:text-lg">
      We Love Beautiful Girl.
    </span>

    <span className="text-base text-yellow-300 sm:text-lg">❤</span>
  </div>

  {/* アイコン & SNSナビゲーション */}
  <div className="flex w-full items-center justify-between gap-4 md:w-auto md:justify-end">
    <div className="h-8 w-8 bg-red-500 text-center font-bold leading-8 text-white animate-[spin_1s_steps(8,end)_infinite]">
      ☺
    </div>

    <nav className="flex flex-wrap items-center gap-2 font-dot text-xs">
      <span className="mr-1 text-zinc-500 text-2xl">SNS ➔</span>

      {/* pixiv */}
      <a
        href="https://www.pixiv.net/users/16743124"
        target="_blank"
        rel="noreferrer"
        title="pixiv"
        className="flex items-center justify-center border-2 border-t-white border-l-white border-b-[#808080] border-r-[#808080] bg-[#e0e0e0] px-3 py-1 font-bold text-blue-800 active:border-t-[#808080] active:border-l-[#808080] active:border-b-white active:border-r-white"
      >
        <span className="text-xs font-black">pixiv</span>
      </a>

      {/* BOOTH */}
      <a
        href="https://x.com/kei5ot"
        target="_blank"
        rel="noreferrer"
        title="BOOTH"
        className="flex items-center justify-center border-2 border-t-blue-400 border-l-blue-400 border-b-blue-900 border-r-blue-900 bg-blue-600 px-3 py-1 font-bold text-white active:border-t-blue-900 active:border-l-blue-900 active:border-b-blue-400 active:border-r-blue-400"
      >
        <span className="text-xs font-custom">X</span>
      </a>
    </nav>
  </div>
</div>
</header>
      {/* ヒミツページへの隠しリンク（背景のどこかに配置） */}
      <div className="absolute top-[320px] left-[8%] z-20 select-none md:top-[180px] md:left-[15%]">
        <Link
          href="/secret" // 移動先のヒミツページURL
          title="???"
          className="group inline-block p-1 text-[10px] text-zinc-900 opacity-30 transition-all hover:scale-150 hover:text-yellow-400 hover:opacity-100 active:scale-125"
        >
          {/* マウスを乗せると輝くギミック */}
          <span className="inline-block transition-transform duration-300 group-hover:rotate-12 group-hover:drop-shadow-[0_0_6px_rgba(250,204,21,0.8)]">
            ★
          </span>
        </Link>
      </div>

        {/* 中央コラージュエリア */}
        <div className="relative mt-6 min-h-[auto] w-full md:mt-8 md:min-h-[500px]">
          {/* 左側：Portfolioボタン */}
          <div className="relative z-30 mb-8 flex flex-col items-center md:items-start gap-2 md:absolute md:left-4 md:top-8 md:mb-0">
            <div className="flex items-center gap-1 font-dot text-xs font-bold text-red-600">
              <span className="animate-ping text-yellow-500">★</span>
              <span className="bg-yellow-300 px-1 text-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                MUST SEE!!
              </span>
              <span className="animate-pulse">↓↓↓</span>
            </div>

            <Link
              href="/portfolio"
              className="group relative inline-flex items-center gap-2 sm:gap-3 border-4 border-t-white border-l-white border-b-black border-r-black bg-[#e6e6e6] px-6 py-4 sm:px-10 sm:py-5 font-dot text-2xl sm:text-3xl font-black text-blue-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:bg-yellow-200 hover:text-pink-600 hover:shadow-[8px_8px_0px_0px_rgba(255,0,127,1)] active:translate-x-1.5 active:translate-y-1.5 active:border-t-black active:border-l-black active:border-b-white active:border-r-white active:shadow-none"
            >
              <span className="animate-[pulse_0.6s_infinite] text-pink-600 group-hover:translate-x-1 transition-transform">
                ▶
              </span>
              <span>Portfolio</span>
              <div className="animate-[spin_1s_steps(8,end)_infinite] bg-red-500 w-6 h-6 sm:w-8 sm:h-8 text-center text-white leading-6 sm:leading-8 text-xs sm:text-base">☺</div>
              <span className="text-lg sm:text-xl font-bold text-blue-600 group-hover:text-pink-600">
                ➡
              </span>
            </Link>

            <div className="mt-2 animate-[bounce_0.4s_steps(4,end)_infinite]">
              <span className="inline-flex items-center gap-2 border-2 border-black bg-[#ff007f] px-4 py-1.5 font-dot text-base sm:text-lg font-black text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="animate-pulse text-yellow-300">▲</span> 
                <span>CLICK HERE!!</span>
                <span className="text-2xl sm:text-3xl leading-none text-yellow-300 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                  ☺☺
                </span>
              </span>
            </div>
            <Link
              href="/art"
              className="mt-5 relative inline-flex items-center gap-2 sm:gap-3 border-4 border-t-white border-l-white border-b-black border-r-black bg-[#e6e6e6] px-6 py-4 sm:px-10 sm:py-5 font-dot text-2xl sm:text-3xl font-black text-blue-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:bg-yellow-200 hover:text-pink-600 hover:shadow-[8px_8px_0px_0px_rgba(255,0,127,1)] active:translate-x-1.5 active:translate-y-1.5 active:border-t-black active:border-l-black active:border-b-white active:border-r-white active:shadow-none"
            >
              <span className="animate-[pulse_0.6s_infinite] text-pink-600 group-hover:translate-x-1 transition-transform">
                ▶
              </span>
              <span>ArtWorks</span>
              <div className="animate-[spin_1s_steps(8,end)_infinite] bg-red-500 w-6 h-6 sm:w-8 sm:h-8 text-center text-white leading-6 sm:leading-8 text-xs sm:text-base">☺</div>
              <span className="text-lg sm:text-xl font-bold text-blue-600 group-hover:text-pink-600">
                ➡
              </span>
            </Link>
            <Link
              href="/diary"
              className="mt-5 relative inline-flex items-center gap-2 sm:gap-3 border-4 border-t-white border-l-white border-b-black border-r-black bg-[#e6e6e6] px-6 py-4 sm:px-10 sm:py-5 font-dot text-2xl sm:text-3xl font-black text-blue-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:bg-yellow-200 hover:text-pink-600 hover:shadow-[8px_8px_0px_0px_rgba(255,0,127,1)] active:translate-x-1.5 active:translate-y-1.5 active:border-t-black active:border-l-black active:border-b-white active:border-r-white active:shadow-none"
            >
              <span className="animate-[pulse_0.6s_infinite] text-pink-600 group-hover:translate-x-1 transition-transform">
                ▶
              </span>
              <span>Diary</span>
              <div className="animate-[spin_1s_steps(8,end)_infinite] bg-red-500 w-6 h-6 sm:w-8 sm:h-8 text-center text-white leading-6 sm:leading-8 text-xs sm:text-base">☺</div>
              <span className="text-lg sm:text-xl font-bold text-blue-600 group-hover:text-pink-600">
                ➡
              </span>
            </Link>
          </div>
          
          
              {/* 背景ラフスケッチ（アスキーアートの下に配置） */}
            <div className="py-30">
              <div className="relative -rotate-3">
                <Image
                  src="/image/イラスト3.png"
                  alt="sketch"
                  width={380}
                  height={380}
                  className="object-contain opacity-25 mix-blend-multiply sm:opacity-30 md:opacity-100"
                />
              </div>
            </div>
          {/* 右側：告知カード & GIF（スマホでは中央寄せ） */}
          <div className="relative z-20 mx-auto flex max-w-xs flex-col items-center gap-4 md:absolute md:right-4 md:top-12 md:mx-0">
            <div className="relative w-full border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080] bg-[#f0f0f0] p-2.5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <span className="absolute -top-3 -left-3 z-10 border border-black bg-yellow-300 px-2 py-0.5 text-[10px] font-black text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                COMPLETED!!
              </span>

              <div className="mb-1.5 flex items-center justify-between bg-blue-900 px-1.5 py-0.5 font-dot text-[10px] font-bold text-white">
                <span className="flex items-center gap-1">
                  <span className="text-yellow-300">★</span> 1st Artbook
                </span>
                <span className="text-blue-200">[PUBLISH]</span>
              </div>
              <Link href="https://kei5ot.fanbox.cc/posts/11926764">

              <div className="relative h-36 w-full overflow-hidden border border-zinc-400 bg-zinc-100">
                <Image
                  src="/image/op0.png"
                  alt="op.0"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="mt-2 space-y-1 font-dot">
                <div className="flex items-baseline justify-between border-b border-dashed border-zinc-300 pb-1">
                  <p className="text-sm font-black text-blue-900">
                    op.0
                  </p>
                  <span className="text-[10px] font-bold text-zinc-500">
                    B5 / 12P
                  </span>
                </div>

                <p className="text-[11px] font-bold leading-tight text-zinc-700">
                  kei5otが憧れの即売会サークル参加のために初めて作ったアートブックである。（グレー歴史）
                  残念ながらオンライン頒布はしていない。
                </p>

                <div className="pt-1 flex items-center justify-between text-[10px]">
                  <span className="bg-pink-100 px-1.5 py-0.5 font-bold text-pink-700 border border-pink-300">
                    関西コミティア７６
                  </span>
                  <span className="font-bold text-zinc-500">
                    CHECK IT OUT ☺
                  </span>
                </div>
              </div></Link>
            </div>

            <Image
              src="/image/a.gif"
              alt="gif"
              width={200}
              height={400}
              className="object-contain"
            />
            <Image
              src="/image/back2.png"
              alt="imaima"
              width={200}
              height={400}
              className="object-contain"
            ></Image>
          </div>

          {/* 中央下部：UNDER CONSTRUCTION */}
          <div className="relative z-20 my-8 text-center pointer-events-none md:absolute md:bottom-4 md:left-1/2 md:my-0 md:-translate-x-1/2">
            <span className="border-b-2 whitespace-nowrap border-dashed border-red-500 font-custom text-xl sm:text-2xl font-bold tracking-wider text-red-600 md:text-4xl">
              ≪ UNDER CONSTRUCTION ≫
            </span>
                      <Image
            src="/image/d.gif"
            alt="gif"
            width={90}
            height={90}
            className="shrink-0 object-contain md:w-24"
          />
          </div>
        </div>

        {/* 埋め込みプレイヤー ＆ GIFエリア（スマホでは1カラム） */}
        <div className="mx-auto mt-6 flex max-w-2xl flex-col items-center gap-4 md:flex-row md:items-center md:gap-3">
          <div className="flex w-full flex-col sm:flex-row gap-3">
            <div className="relative aspect-video flex-1 border-2 border-t-[#808080] border-l-[#808080] border-r-white border-b-white bg-black">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/UyKNtTUGbMo"
                title="YouTube video player 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="relative aspect-video flex-1 border-2 border-t-[#808080] border-l-[#808080] border-r-white border-b-white bg-black">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/bG1eUFelNG4?si=EzuTJzBh0eMd5xCA"
                title="YouTube video player 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          <Image
            src="/image/b.gif"
            alt="gif"
            width={90}
            height={90}
            className="shrink-0 object-contain md:w-24"
          />
        </div>
                  <Image
            src="/image/c.gif"
            alt="gif"
            width={110}
            height={110}
            className="shrink-0 object-contain md:w-24"
          />

        {/* フッター */}
        <footer className="mt-10 border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080] bg-[#e6e6e6] p-4 shadow-lg">
          <div className="mb-3 flex items-center justify-between bg-blue-900 px-2 py-1">
            <div className="flex items-center gap-1.5 text-xs font-bold text-white">
              <span className="text-2xl sm:text-4xl text-yellow-300">★</span>
              <span>my favorite artists!!</span>
            </div>
            <span className="font-dot text-[10px] text-blue-200">[FAVORITE_LINKS]</span>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                name: "HIKAKIN",
                category: "MUSIC / Youtuber",
                icon: "▶",
                badgeColor: "text-pink-600",
                desc: "TopYoutuber",
                url: "https://www.youtube.com/hikakintv",
              },
              {
                name: "SEIKIN",
                category: "MUSIC / Youtuber",
                icon: "▶",
                badgeColor: "text-blue-600",
                desc: "TopYoutuber",
                url: "https://www.youtube.com/user/SeikinTV",
              },
              {
                name: "yaca",
                category: "MUSIC / RAP",
                icon: "♪",
                badgeColor: "text-blue-600",
                desc: "Music / Rap",
                url: "https://yacaindahouse.com/",
              },
              {
                name: "gaburyu",
                category: "MUSIC / PRODUCER",
                icon: "♪",
                badgeColor: "text-pink-600",
                desc: "Sound Producer",
                url: "https://gaburyu.com",
              },
              {
                name: "STARKIDS",
                category: "MUSIC / GROUP",
                icon: "♪",
                badgeColor: "text-purple-600",
                desc: "Music Collective",
                url: "https://linktr.ee/starkidsjp",
              },
              {
                name: "nyankobrq",
                category: "MUSIC / rap",
                icon: "♪",
                badgeColor: "text-yellow-600",
                desc: "Sound Producer / Rap",
                url: "https://x.com/nyankobrq",
              },{
                name:"zekk",
                category:"MUSIC / inst",
                icon: "♪",
                badgeColor:"text-blue-600",
                desc:"Sound Producer",
                url: "https://www.zekkwazetku.com/"
              },{
                name:"ろるあ/Rolua",
                category:"ILLUST / DESIGN",
                icon: "🎨",
                badgeColor:"text-blue-600",
                desc:"Illustrator / Character",
                url: "https://x.com/Rolua_N"
              },
              {
                name: "CHOCO",
                category: "ILLUST / DESIGN",
                icon: "🎨",
                badgeColor: "text-amber-600",
                desc: "Illustrator / Mecha & Character",
                url: "https://x.com/chocolateshop_i",
              },
              {
                name: "リウイチ",
                category: "ILLUST / DESIGN",
                icon: "🎨",
                badgeColor: "text-amber-600",
                desc: "Illustrator / Character",
                url: "https://x.com/riuichi35",
              },
            ].map((artist) => (
              <a
                key={artist.name}
                href={artist.url}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col justify-between border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080] bg-[#f5f5f5] p-2.5 font-dot shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-colors hover:bg-yellow-100 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
              >
                <div className="flex items-center justify-between border-b border-dashed border-zinc-300 pb-1.5">
                  <span className="text-[10px] font-bold text-zinc-500">
                    <span className={`mr-1 ${artist.badgeColor}`}>{artist.icon}</span>
                    {artist.category}
                  </span>
                  <span className="text-xs text-blue-600 group-hover:underline">➔</span>
                </div>

                <div className="my-2">
                  <div className="text-sm font-black text-blue-900 group-hover:text-blue-600">
                    {artist.name}
                  </div>
                  <div className="mt-0.5 text-[11px] text-zinc-600">
                    {artist.desc}
                  </div>
                </div>

                <div className="bg-zinc-200 px-1 py-0.5 text-[9px] text-zinc-500 truncate">
                  LINK: {artist.url.replace(/^https?:\/\//, '')}
                </div>
              </a>
            ))}
          </div>
        </footer>
      </div>
    </main>
  );
}