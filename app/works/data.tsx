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
    subtitle: "同人即売会向けレジアプリ / Reactで制作中",

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
            同人即売会向けに開発しているレジアプリケーションです。
            商品登録・会計・売上記録など、即売会での頒布に必要な機能を自分の運用に合わせて実装しています。
            本プロジェクトでは、初めてTypeScriptを本格的に使用しました。
          </p>

          <p className="text-sm md:text-base">
            開発当初はWeb技術についての知識が十分ではなかったため、
            書籍やLLMを活用しながら、実際に手を動かして必要な技術を学びつつ開発を進めました。
            まず動く形を作り、使いながら改善するという形で開発を続けています。
          </p>

          <p className="text-sm md:text-base">
            インターネットを通じて気軽に作品を展示できる現代において、
            同人即売会のように、作品を実際に手に取ってもらい、
            作り手と受け手が直接交流できるフィジカルな場の価値はさらに高まっていると考えています。
            本アプリを通して、そうした創作物を共有する体験を少しでも快適にできればと考えています。
          </p>

          <p className="text-sm md:text-base text-zinc-500 font-mono">
            ※ 将来的には、自分自身の利用にとどまらず、多くの方に利用していただけるクオリティまで成長させることを目指しています。
          </p>
        </section>

        {/* 実運用を通して */}
        <section className="space-y-4">
          <h2 className="text-lg md:text-xl font-light tracking-wide text-zinc-900 border-b border-zinc-200/80 pb-2">
            実運用を通して
          </h2>

          <p className="text-sm md:text-base">
            5月に開催された関西コミティア76で実際に自分のサークルの頒布に使用しました。
            実際の会計業務で使用することで、開発中には気づかなかった操作上の問題や、
            こういう機能が欲しいという新たなアイデアを見つけることができました。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            <Link href="https://kei5ot.fanbox.cc/posts/11926764">
              運用風景はFANBOXへ➡
            </Link>
          </div>

          <p className="text-sm md:text-base">
            実際の運用を通して得られたフィードバックをもとに改善を続けており、
            現在は自分の即売会運用に必要な機能を一通り備え、継続して利用できる状態になっています。
          </p>
          <p className="text-sm md:text-base text-zinc-500 font-mono">
            ※ 10/18 関西コミティア77参加します。きてね
          </p>

        </section>

        {/* 開発について */}
        <section className="space-y-4">
          <h2 className="text-lg md:text-xl font-light tracking-wide text-zinc-900 border-b border-zinc-200/80 pb-2">
            開発について
          </h2>

          <p className="text-sm md:text-base">
            フロントエンドにはReact・TypeScript・Viteを使用し、
            商品情報や売上データなどの管理にはIndexedDBを利用しています。
            オフライン環境でも動作できるようにすることで、
            即売会のように通信環境に左右される可能性がある場所でも利用できる構成を意識しています。
          </p>

          <p className="text-sm md:text-base">
            現在はフロントエンドを中心とした構成ですが、
            将来的にはRailsやPostgreSQLを用いたバックエンドと連携し、
            PCでの商品管理とタブレットでの会計処理を同期できる仕組みも面白いかなと考えています。（やるかは不明）
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
    slug: "memomy",
    title: "memomy",
    subtitle: "イラスト版GitHubをイメージした作業記録Webアプリ。",

    content: (
        <div className="space-y-6 rounded-2xl border border-zinc-200/90 bg-white/70 p-6 font-light leading-relaxed text-zinc-700 shadow-sm backdrop-blur-md md:p-8">

    <section className="space-y-5">

      {/* 概要 */}
      <div className="space-y-4">
        <h2 className="border-b border-zinc-200/80 pb-2 text-lg font-light tracking-wide text-zinc-900 md:text-xl">
          概要
        </h2>

        <p className="text-sm md:text-base">
          個人的に欲しかった「イラスト制作の作業記録」を残していくために開発しているツールです。
          1つのプロジェクトに対して複数のコミットを記録でき、作業時間だけでなく、
          制作途中の進捗画像やメモなども一緒に保存できます。
        </p>

        <div className="flex flex-wrap gap-x-4 gap-y-2 pt-1">
          <a
            href="https://github.com/kei5o55/memomy-frontend"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-zinc-800 underline underline-offset-4 transition-colors hover:text-zinc-500"
          >
            GitHub (Frontend) →
          </a>

          <a
            href="https://github.com/kei5o55/memomy-backend"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-zinc-800 underline underline-offset-4 transition-colors hover:text-zinc-500"
          >
            GitHub (Backend) →
          </a>
        </div>
      </div>


      {/* コンセプト */}
      <div className="space-y-4">
        <h2 className="border-b border-zinc-200/80 pb-2 text-lg font-light tracking-wide text-zinc-900 md:text-xl">
          コンセプト
        </h2>

        <p className="text-sm md:text-base">
          作業時間を可視化するだけでなく、近年の生成AIの普及を背景に、
          「人が時間を積み重ねて制作したプロセス」にも価値があるのではないかと考え、
          その制作過程を記録し、視覚化できる仕組みを構築しています。
        </p>

        <p className="text-sm md:text-base">
          単なる作業時間の記録にとどまらず、スケジュールカレンダーやメモなどの機能も実装しています。
          将来的には、創作活動を日常的に支援する「創作支援OS」のようなプロダクトへ発展させることを目指しています。
        </p>
      </div>


      {/* 現在の開発状況 */}
      <div className="space-y-4">
        <h2 className="border-b border-zinc-200/80 pb-2 text-lg font-light tracking-wide text-zinc-900 md:text-xl">
          現在の開発状況
        </h2>

        <p className="text-sm md:text-base">
          現在はRuby on Railsを用いたバックエンド開発も並行して進めています。
          REST APIによるデータの永続化に加え、認証・認可などの機能を実装し、
          最終的にはサービスとして公開することを目標としています。
        </p>

        <div className="relative mx-auto my-6 h-64 w-full max-w-xl overflow-hidden rounded-xl border border-zinc-200/80 bg-zinc-100 shadow-sm md:h-80">
          <Image
            src="/image/memoy_screen.png"
            alt="作業記録ツールの画面"
            fill
            className="object-cover"
          />
        </div>

        <p className="text-sm md:text-base">
          現在は開発環境上でREST APIを用いたバックエンド永続化まで実装しており、
          自身でも日常的に運用しています。
          実際に使用する中で見つかった不具合や改善点を修正しながら、
          長期的に使い続けられるプロダクトとして育てています。
        </p>
      </div>


      {/* 開発プロセス */}
      <div className="space-y-4">
        <h2 className="border-b border-zinc-200/80 pb-2 text-lg font-light tracking-wide text-zinc-900 md:text-xl">
          開発プロセス
        </h2>

        <p className="text-sm md:text-base">
          基本的には、まず「こういう機能が欲しい」というアイデアをもとに、
          UIとデータフローの骨組みをフロントエンドで試作します。
          その後、必要なデータ構造や処理を整理し、バックエンド側でロジックやAPIエンドポイントを実装、
          最後にフロントエンドと接続するという流れで開発しています。
        </p>

        <div className="border-l-2 border-zinc-300 pl-4 font-mono text-xs leading-relaxed text-zinc-600 md:text-sm">
          <p>アイデア / UI 設計</p>
          <p>↓</p>
          <p>Frontend prototype</p>
          <p>↓</p>
          <p>Backend logic / REST API</p>
          <p>↓</p>
          <p>Frontend × Backend テスト</p>
          <p>↓</p>
          <p>実際に使用 → 改善</p>
        </div>

        <p className="text-sm md:text-base">
          このプロセスを繰り返しながら、実際に自分で使用して得られたフィードバックをもとに
          機能やUIを改善しています。
        </p>
      </div>


      {/* 今後の展開 */}
      <div className="space-y-4">
        <h2 className="border-b border-zinc-200/80 pb-2 text-lg font-light tracking-wide text-zinc-900 md:text-xl">
          今後の展開
        </h2>

        <p className="text-sm md:text-base">
          GitHubのIssueにも記載しているように、実装したい機能や試してみたいアイデアがまだ多く残っています。
          今後も機能追加や改善を続けながら、創作活動を継続的に支援できるプロダクトへ発展させていきたいと考えています。
        </p>

        <a
          href="https://github.com/kei5o55/memomy-frontend"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-800 underline underline-offset-4 transition-colors hover:text-zinc-500"
        >
          GitHubで開発状況・Issueを見る →
        </a>
      </div>

    </section>

  </div>
    ),

    demoUrl: "https://memomy.net",
    githubUrl: "https://github.com/kei5o55/memomy-frontend",
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
    title: "kei5ot.com",
    subtitle: "制作物・活動実績のハブ",

    content: (
      <div className="space-y-6 rounded-2xl border border-zinc-200/90 bg-white/70 p-6 font-light leading-relaxed text-zinc-700 shadow-sm backdrop-blur-md md:p-8">
        <section className="space-y-4">
          <h2 className="border-b border-zinc-200/80 pb-2 text-lg font-light tracking-wide text-zinc-900 md:text-xl">
            概要
          </h2>

          <p className="text-sm md:text-base">
            現在ご覧いただいているこのWebサイトです。
            Next.jsやTailwind CSSをはじめとするモダンなWeb技術の習得を目的として制作しました。
          </p>

          <p className="text-sm md:text-base">
            ルートページは、カオスインターネットやY2Kなvideに強く影響を受けたデザインで、
            自分なりの世界観を表現しています（つもり）。
            一方、ポートフォリオページは作品を見やすく整理することを意識し、シンプルな構成にしています。
          </p>
          <div className="relative mx-auto my-6 h-64 w-full max-w-xl overflow-hidden rounded-xl border border-zinc-200/80 bg-zinc-100 shadow-sm md:h-80">
            <Image
              src="/image/kei5ot.jpg"
              alt="作業記録ツールの画面"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-sm md:text-base">
            現在、Art GalleryやDiaryなどのデータはリポジトリに直接記述しています。
            今後はHonoとPrismaを用いた軽量なバックエンドを構築し、データベースへの移行を進める予定です。
            将来的には、作品やDiaryの追加・管理もより柔軟に行えるようにしていきたいッ！
          </p>

          <p className="text-sm md:text-base">
            自創作の発表や個人制作物の公開など、
            自身のさまざまな表現活動をまとめる「ハブ」として活用していく予定です。
            現在はVercel上で公開していますが、将来的にはRaspberry Piなどを使った
            自宅サーバーでの運用にも挑戦してみたいと考えています。
          </p>
        </section>
      </div>
    ),

    demoUrl: undefined,
    githubUrl: "https://github.com/kei5o55/my-portfolio",
  },
  {
    slug: "ref-stash",
    title: "ref-stash",
    subtitle: "創作用素材やアイデア共有・管理ツール",

    content: (
      <div className="space-y-6 rounded-2xl border border-zinc-200/90 bg-white/70 p-6 font-light leading-relaxed text-zinc-700 shadow-sm backdrop-blur-md md:p-8">
        <section className="space-y-5">
          <h2 className="border-b border-zinc-200/80 pb-2 text-lg font-light tracking-wide text-zinc-900 md:text-xl">
            概要
          </h2>

          <p className="text-sm md:text-base">
            外出先などでスマートフォンから収集した創作アイデアや参考資料をPCで確認する際、
            これまではDiscordやGoogle Driveなどを経由して管理していました。
            しかし、PCでDiscordを起動して目的の資料を探すという手間があり、
            「もっと自分の創作活動に最適化されたリソース管理ツールが欲しい」と考え制作を始めました。
          </p>

          <p className="text-sm md:text-base">
            本アプリでは、創作資料の共有・保存だけでなく、
            保存した資料をクロッキーなどの練習にも活用できるよう、
            指定した画像を一定時間ごとに表示する機能を実装しています。
            資料を集めるだけで終わらせず、実際の創作活動につなげられることを意識しています。
          </p>

          <div className="relative mx-auto my-6 h-64 w-full max-w-xl overflow-hidden rounded-xl border border-zinc-200/80 bg-zinc-100 shadow-sm md:h-80">
            <Image
              src="/image/ref-stash.jpg"
              alt="Resource管理ツールの画面"
              fill
              className="object-cover"
            />
          </div>

          <p className="text-sm md:text-base">
            本アプリは、まず自分自身が日常的に使うことを前提として開発しています。
            そのため、既存のサービスに合わせるのではなく、
            自分の創作活動の中で感じた不便や、こういう機能が欲しいという要求をもとに、
            必要な機能やUIを試行錯誤しながら追加しています。
          </p>

          <p className="text-sm md:text-base">
            将来的にはクラウドサーバーではなく、
            物理サーバーを利用した自宅環境での運用にも挑戦したいと考えています。
          </p>

          <div className="border-l-2 border-zinc-300 pl-4 text-sm leading-relaxed text-zinc-600">
            <p className="font-medium text-zinc-800">
              自分が欲しいものを、自分で使いながら育てる
            </p>
            <p className="mt-1">
              という方針で、現在も継続して開発しています。
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="https://github.com/kei5o55/ref-stash-frontend"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-800 underline underline-offset-4 transition-colors hover:text-zinc-500"
            >
              GitHub (Frontend) →
            </a>

            <a
              href="https://github.com/kei5o55/core-api"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-800 underline underline-offset-4 transition-colors hover:text-zinc-500"
            >
              GitHub (Backend) →
            </a>
          </div>
        </section>
      </div>
    ),

    demoUrl: undefined,
    githubUrl: "https://github.com/kei5o55/ref-stash-frontend",
  },
];