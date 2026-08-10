// app/works/data.ts
import React from "react";
import Image from "next/image";
import Link from "next/link";

export type Work = {
  slug: string;
  title: string;
  subtitle: string;
  content: React.ReactNode;
  demoUrl?: string;
  githubUrl?: string;
};

export const worksData: Work[] = [
  {
    slug: "rejistella",
    title: "RejiStella / レジアプリ",
    subtitle: "同人即売会向けレジアプリ / React + Viteで制作中",

    content: (
      <div className="p-6 md:p-8 rounded-2xl border border-zinc-200/90 bg-white/70 backdrop-blur-md shadow-sm space-y-8 text-zinc-700 font-light leading-relaxed">
        {/* 概要 */}
        <section className="space-y-4">
          <h2 className="text-lg md:text-xl font-light tracking-wide text-zinc-900 border-b border-zinc-200/80 pb-2">
            概要
          </h2>
          
          <div className="relative w-full max-w-xl h-64 md:h-80 mx-auto rounded-xl overflow-hidden border border-zinc-200/80 shadow-sm bg-zinc-100 my-6">
            <Image
              src="/image/image.jpg"
              alt="実運用風景"
              fill
              className="object-cover"
            />
          </div>

          <p className="text-sm md:text-base">
            同人即売会向けのレジアプリケーションです。初めてTypeScriptを使用して制作しました。
            開発当初、Web技術についての知識が無かったため、書籍やLLMを用いて学びながら開発を進めました。
          </p>
          <p className="text-sm md:text-base">
            インターネットを通じて気軽に作品を展示できる現代において、同人即売会（コミケなど）のようなフィジカルな現場の価値は今までよりも高まっているのではないかと考えています。
            データではなく画集・ポストカード・グッズのような作品として実際に創作を共有できる、そういった体験を本アプリを通して高めることができたらいいなと思っています。
          </p>
          <p className="text-sm md:text-base text-zinc-500 font-mono text-xs">
            ※ 将来的には多くの方に使っていただけるクオリティまで成長させたいと考えています。
          </p>
        </section>

        {/* 実運用を通して */}
        <section className="space-y-4">
          <h2 className="text-lg md:text-xl font-light tracking-wide text-zinc-900 border-b border-zinc-200/80 pb-2">
            実運用を通して
          </h2>
          <p className="text-sm md:text-base">
            一度関西コミティアで実際に運用しました。自分の制作物ということもありとても楽しく、またユーザビリティの面で改善すべき点や新たな機能のアイデアが多く見つかりましたが、改善に向けてワクワクしながら取り組めています。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            <div className="relative w-full h-48 rounded-xl overflow-hidden border border-zinc-200/80 shadow-sm bg-zinc-100">
              <Image
                src="/image/1.jpg"
                alt="実運用風景 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-48 rounded-xl overflow-hidden border border-zinc-200/80 shadow-sm bg-zinc-100">
              <Image
                src="/image/2.jpg"
                alt="実運用風景 2"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <p className="text-sm md:text-base">
            欲しいと思った機能を上手く実現でき、現在でも運用においての機能面では十分な完成度があると考えています。
          </p>
        </section>

        <div className="pt-4 border-t border-zinc-200/60">
          <a
            href="https://github.com/kei5o55/register"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-800 underline underline-offset-4 hover:text-zinc-500 transition-colors"
          >
            GitHubにさらに詳しく記載しています →
          </a>
        </div>
      </div>
    ),

    demoUrl: "https://register-3k2l.vercel.app/",
    githubUrl: "https://github.com/kei5o55/register",
  },
  {
    slug: "worklog",
    title: "作業記録ツール",
    subtitle: "イラスト版GitHub風 / 現在はViteでミニマルに制作、今後Next.jsへ移行予定",

    content: (
      <div className="p-6 md:p-8 rounded-2xl border border-zinc-200/90 bg-white/70 backdrop-blur-md shadow-sm space-y-6 text-zinc-700 font-light leading-relaxed">
        <section className="space-y-4">
          <h2 className="text-lg md:text-xl font-light tracking-wide text-zinc-900 border-b border-zinc-200/80 pb-2">
            概要
          </h2>
          <p className="text-sm md:text-base">
            個人的に欲しかったイラスト制作作業を記録していくためのツールです。1プロジェクトに対して複数コミットを保存可能で、進捗画像も一緒に保存できます。
          </p>
          <p className="text-sm md:text-base">
            作業時間の可視化だけでなく、近年の生成AIブームの中で「人が時間を積み重ねて制作したプロセス」に価値が宿るのではないかと考え、そうした痕跡を視覚化できる仕組みを構築しています。
          </p>
          <p className="text-sm md:text-base">
            単に記録をつけるだけでなく、スケジュールカレンダーなども実装し、今後は「創作支援OS」として日常的に使えるツールを目指しています。現在はRailsを用いたバックエンド開発を進めており、ログイン機能とDBによる永続化を目標にしています。
          </p>

          <div className="relative w-full max-w-xl h-64 md:h-80 mx-auto rounded-xl overflow-hidden border border-zinc-200/80 shadow-sm bg-zinc-100 my-6">
            <Image
              src="/image/4.jpg"
              alt="作業記録ツールの画面"
              fill
              className="object-cover"
            />
          </div>

          <p className="text-sm md:text-base">
            こちらも実際に自分で使いながら改善点を見つけ、継続的に成長させています。RejiStellaに比べて細部の作り込みが未完成な部分が多いため、今後さらに注力したいプロジェクトです。
          </p>
        </section>

        <div className="pt-4 border-t border-zinc-200/60">
          <a
            href="https://github.com/kei5o55/worklog-app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-800 underline underline-offset-4 hover:text-zinc-500 transition-colors"
          >
            GitHubにさらに詳しく記載しています →
          </a>
        </div>
      </div>
    ),

    demoUrl: "https://worklog-app-ruby.vercel.app/projects",
    githubUrl: "https://github.com/kei5o55/worklog-app",
  },
  {
    slug: "drawapp",
    title: "簡易ペイントツール",
    subtitle: "超簡易的なペイントツール / C言語を使用したデスクトップアプリ",

    content: (
      <div className="p-6 md:p-8 rounded-2xl border border-zinc-200/90 bg-white/70 backdrop-blur-md shadow-sm space-y-6 text-zinc-700 font-light leading-relaxed">
        <section className="space-y-4">
          <h2 className="text-lg md:text-xl font-light tracking-wide text-zinc-900 border-b border-zinc-200/80 pb-2">
            概要
          </h2>
          <p className="text-sm md:text-base">
            全体を通して初めて作成した個人開発アプリです。Gitを用いた開発プロセスを学ぶ目的で制作を開始しましたが、自分用に最適化したシンプルなペイントツールとして今後は育てていきたいと考えています。
          </p>
          <p className="text-sm md:text-base">
            サイズ変更可能なブラシと消しゴムのみの最小限の構成ですが、あえて機能を制限することで、軽快なラフ作成や気軽にアイディアを描き留める用途に向いた仕上がりを目指しています。
          </p>

          <div className="relative w-full max-w-xl h-64 md:h-80 mx-auto rounded-xl overflow-hidden border border-zinc-200/80 shadow-sm bg-zinc-100 my-6">
            <Image
              src="/image/5.jpg"
              alt="簡易ペイントツールの画面"
              fill
              className="object-cover"
            />
          </div>

          <p className="text-sm md:text-base">
            最近はRejiStellaやWorklog等の開発に注力しているためアップデートをお休みしていますが、今後も手を加えて実用的なツールへアップデートしていく予定です。
          </p>
        </section>
      </div>
    ),

    demoUrl: undefined,
    githubUrl: "https://github.com/kei5o55/DrawApp",
  },
  {
    slug: "portfolio",
    title: "ポートフォリオサイト",
    subtitle: "制作物・活動実績のハブ",

    content: (
      <div className="p-6 md:p-8 rounded-2xl border border-zinc-200/90 bg-white/70 backdrop-blur-md shadow-sm space-y-6 text-zinc-700 font-light leading-relaxed">
        <section className="space-y-4">
          <h2 className="text-lg md:text-xl font-light tracking-wide text-zinc-900 border-b border-zinc-200/80 pb-2">
            概要
          </h2>
          <p className="text-sm md:text-base">
            現在ご覧いただいているこのWebサイトです。Next.jsやTailwind CSSをはじめとするモダンなWeb技術を取り入れて制作しました。
          </p>
          <p className="text-sm md:text-base">
            自創作の発表の場や個人の制作物置き場として、自身のあらゆる表現活動のハブとして活用していく予定です。現在はVercel上でデプロイしていますが、将来的には自宅サーバー（Raspberry Pi等）上での自作運用にも挑戦してみたいと考えています。
          </p>
        </section>
      </div>
    ),

    demoUrl: undefined,
    githubUrl: "https://github.com/kei5o55/my-portfolio",
  },
];