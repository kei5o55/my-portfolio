// app/about/page.tsx
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-zinc-800 px-6 py-12 md:py-20 max-w-4xl mx-auto font-sans relative overflow-hidden">
      {/* 背景の静かなオーロラグラデーション */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-slate-200/40 via-purple-100/30 to-transparent rounded-full blur-3xl -z-10" />
      <div className="pointer-events-none absolute top-1/2 -right-40 w-96 h-96 bg-gradient-to-bl from-blue-100/40 via-sky-100/20 to-transparent rounded-full blur-3xl -z-10" />

      {/* トップへ戻るリンク */}
      <div className="mb-8">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-300/80 bg-white/60 text-zinc-700 text-xs tracking-wide transition-all duration-300 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 backdrop-blur-sm shadow-sm"
        >
          ← Back to home
        </Link>
      </div>

      {/* ヘッダー */}
      <header className="mb-12">
        <h1 className="text-3xl md:text-4xl font-light tracking-wider text-zinc-900 mb-2">
          About Me
        </h1>
        <p className="text-xs font-mono text-zinc-400">PROFILE & SKILLS</p>
      </header>

      {/* プロフィール基本情報 */}
      <section className="mb-12">
        <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-4">
          Profile
        </h2>
        <div className="p-6 md:p-8 rounded-2xl border border-zinc-200/90 bg-white/70 backdrop-blur-md shadow-sm">
          <h3 className="text-2xl font-light text-zinc-900 mb-1">
            kei5ot <span className="text-sm text-zinc-400 font-normal">/ kei5o55</span>
          </h3>
          <p className="text-xs font-mono text-zinc-500 mb-6 tracking-wider">
            絵描き / 個人開発
          </p>
          <p className="text-sm md:text-base text-zinc-600 leading-relaxed font-light mb-6">
            普段は絵を描いたり個人開発アプリを作成したりしています。<br />
            創作やゲームが好きです。創作に関しては、最近は小説や世界観設定などの文章に興味があります。
          </p>

          {/* SNSリンク */}
          <div className="flex flex-wrap gap-3">
            <a
              href="https://x.com/kei5ot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-full border border-zinc-200/90 bg-white/80 text-zinc-700 text-xs font-mono transition-all duration-300 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 shadow-sm"
            >
              X (一次創作)
            </a>
            <a
              href="https://x.com/mochiki_02"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-full border border-zinc-200/90 bg-white/80 text-zinc-700 text-xs font-mono transition-all duration-300 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 shadow-sm"
            >
              X (二次創作)
            </a>
            <a
              href="https://www.pixiv.net/users/16743124"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-full border border-zinc-200/90 bg-white/80 text-zinc-700 text-xs font-mono transition-all duration-300 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 shadow-sm"
            >
              pixiv
            </a>
          </div>
        </div>
      </section>

      {/* スキル・活動 */}
      <section className="mb-12">
        <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-4">
          Skills & Tools
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Development */}
          <div className="p-6 rounded-2xl border border-zinc-200/90 bg-white/70 backdrop-blur-md shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-medium text-zinc-800 mb-3 tracking-wide">
                Development
              </h3>
              <ul className="text-xs md:text-sm font-mono text-zinc-600 leading-relaxed space-y-1">
                <li><span className="text-zinc-400">main :</span> TypeScript / React</li>
                <li><span className="text-zinc-400">sub  :</span> Next.js / HTML / CSS / C</li>
                <li><span className="text-zinc-400">tools:</span> VSCode / GitHub</li>
              </ul>
            </div>
            <div className="text-right mt-6">
              <Link
                href="/practice"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-zinc-200/90 bg-white/80 text-zinc-700 text-xs font-mono transition-all duration-300 hover:bg-zinc-900 hover:text-white shadow-sm"
              >
                practice →
              </Link>
            </div>
          </div>

          {/* Creative */}
          <div className="p-6 rounded-2xl border border-zinc-200/90 bg-white/70 backdrop-blur-md shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-medium text-zinc-800 mb-3 tracking-wide">
                Creative
              </h3>
              <ul className="text-xs md:text-sm font-mono text-zinc-600 leading-relaxed space-y-1">
                <li><span className="text-zinc-400">illust :</span> original character & worldbuilding / fan art</li>
                <li><span className="text-zinc-400">circle :</span> Emotone / 人間</li>
                <li><span className="text-zinc-400">tools  :</span> CLIP STUDIO PAINT</li>
              </ul>
            </div>
            <div className="text-right mt-6">
              <Link
                href="/misoria"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-zinc-200/90 bg-white/80 text-zinc-700 text-xs font-mono transition-all duration-300 hover:bg-zinc-900 hover:text-white shadow-sm"
              >
                worldbuilding →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Fanbox / Diary */}
      <section className="mb-12">
        <div className="p-6 md:p-8 rounded-2xl border border-zinc-200/90 bg-white/70 backdrop-blur-md shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 className="text-base md:text-lg font-light text-zinc-800">
              日記や作業記録、イベント参加レポートなどをまとめています
            </h3>
          </div>
          <div>
            <a
              href="https://kei5ot.fanbox.cc/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-300/80 bg-white/90 text-zinc-800 text-xs font-mono transition-all duration-300 hover:bg-zinc-900 hover:text-white shadow-sm whitespace-nowrap"
            >
              FANBOX →
            </a>
          </div>
        </div>
      </section>

      {/* 趣味・その他 */}
      <section className="mb-12">
        <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-4">
          Hobbies & Others
        </h2>
        <div className="p-6 md:p-8 rounded-2xl border border-zinc-200/90 bg-white/70 backdrop-blur-md shadow-sm space-y-10">
          
          {/* CHUNITHM */}
          <div>
            <h3 className="text-xl font-light text-zinc-900 mb-3 tracking-wide">
              CHUNITHM <span className="text-xs text-zinc-400 font-mono">（音ゲー）</span>
            </h3>
            <p className="text-sm text-zinc-600 leading-relaxed mb-4 font-light">
              音ゲーは中学の頃からやっていて、特にCHUNITHMを10年近く続けています。
            </p>
            <div className="p-4 rounded-xl bg-zinc-50/80 border border-zinc-200/60 font-mono text-xs text-zinc-600 space-y-1 mb-6">
              <p>・Rating 17.50↑ ( CHUNITHM X-VERSE-X )</p>
              <p>・Legend of CRYSTAL</p>
              <p>・15＋ AJ3</p>
            </div>

            <p className="text-xs font-mono text-zinc-500 mb-4 uppercase tracking-wider">
              好きなオリジナル楽曲
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="aspect-video w-full rounded-xl overflow-hidden border border-zinc-200/80 shadow-sm bg-black">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/QOZ0RYUGINw"
                  title="YouTube video player"
                  allowFullScreen
                />
              </div>
              <div className="aspect-video w-full rounded-xl overflow-hidden border border-zinc-200/80 shadow-sm bg-black">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/SL2EQT_-LgI"
                  title="YouTube video player"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          <hr className="border-zinc-200/80" />

          {/* 絵 */}
          <div>
            <h3 className="text-xl font-light text-zinc-900 mb-3 tracking-wide">
              絵
            </h3>
            <p className="text-sm text-zinc-600 leading-relaxed font-light mb-4">
              見るのも描くのも好きで、ファンアート、オリジナル問わず描いています。主にpixivやXに投稿しています。<br />
              絵を見るだけで誰が描いたのか分かるような、作者ごとの癖や個性のようなものを大切にしていて、写実的ではなく、感情や雰囲気を重視した傾向の作品が多いと思います。
            </p>
            <div className="inline-flex items-center gap-2">
              <Link
                href="/art"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-zinc-300/80 bg-white/90 text-zinc-700 text-xs font-mono transition-all duration-300 hover:bg-zinc-900 hover:text-white shadow-sm"
              >
                My Artworks →
              </Link>
              <span className="text-xs text-zinc-500">には自分のイラストを掲載していますので、ぜひご覧ください。</span>
            </div>
          </div>

          <hr className="border-zinc-200/80" />

          {/* 剣道 */}
          <div>
            <h3 className="text-xl font-light text-zinc-900 mb-3 tracking-wide">
              剣道
            </h3>
            <p className="text-sm text-zinc-600 leading-relaxed font-light mb-4">
              最近は学業や作品制作に力を入れたいと考えているため、剣道からは少し距離を置いていますが、進路や生活が安定すれば再開したいと考えています。特に、卒業後社会人になってからは場所を見つけて絶対に再開したいと考えています。
            </p>
            <div className="p-4 rounded-xl bg-zinc-50/80 border border-zinc-200/60 text-xs text-zinc-600 space-y-1">
              <p className="font-mono text-zinc-400 mb-1">【主な実績】</p>
              <p>・三段取得</p>
              <p>・中学 : 郡市大会 個人３位入賞</p>
              <p>・高校 : 県大会団体 ３位入賞</p>
              <p>・大学 : 中四国新人大会 団体準優勝（二年時）</p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}