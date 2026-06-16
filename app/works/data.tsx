// app/works/data.ts
import React from 'react';
import Image from "next/image";
import Link from "next/link"

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
      <div style={{border: "1px solid #000000",borderRadius: 8,padding: 24,lineHeight : 1.8,}}>
        <h2 style={{ fontSize: '20px', borderBottom: '1px solid #ddd', paddingBottom: '8px' }}>概要</h2>
        <div
              style={{
                width: 500,
                height: 400,
                overflow: "hidden",
                position: "relative",
                margin: "auto"
              }}
            >
              <Image
                src="/image/image.jpg"
                alt="実運用風景"
                fill
                style={{ objectFit: "cover" }}
              />
        </div>
        同人即売会向けのレジアプリケーションです。初めてTypescriptを使用して制作しました。
          開発当初、web技術について知識が無かったため、書籍やLLMを用いて学びながら開発を進めました。<br />
          インターネットを通じて気軽に作品を展示できる現代において、同人即売会（コミケとか）のようなフィジカル現場の価値は今までよりも高まっているのではないかと考えています。
          データではなく画集・ポストカード・グッズのような作品として実際に創作を共有できる、そういった体験を本アプリを通して高めることができたらいいなと思っています。<br /><br />

          将来的には人に使ってもらえるようなところまで成長させられると良いなと考えています。<br/><br/>

          <h2 style={{ fontSize: '20px', borderBottom: '1px solid #ddd', paddingBottom: '8px' }}>実運用を通して</h2>
          一度関西コミティアで実際に運用しました。自分の制作物だというコトもありとても楽しく、またユーザビリティの面で改善すべき点や新たな機能のアイデアが多く見つかりましたが、改善に向けてワクワクしながら取り組めています。<br />
          <div
            style={{
              marginTop: 32,
              display: "flex",
              gap: 16,
            }}
          >
            <div
              style={{
                width: 300,
                height: 200,
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Image
                src="/image/1.jpg"
                alt="実運用風景"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

            <div
              style={{
                width: 300,
                height: 200,
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Image
                src="/image/2.jpg"
                alt="実運用風景"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          欲しいと思った機能を上手く実現でき、現在でも運用においての機能面では十分な完成度があると考えています。<br />
        <br/><br/><p style={{fontSize:20 }}><a href="https://github.com/kei5o55/register" style={{color: "#2563eb",textDecoration: "underline",}}>GitHub</a>にさらに詳しく記載してます。ぜひご覧ください！</p>
      </div>
    ),

    demoUrl: "https://register-3k2l.vercel.app/",
    githubUrl: "https://github.com/kei5o55/register"
  },
  {
        slug: "worklog",
        title: "作業記録ツール",
        subtitle: "イラスト版Github風 / 現在はViteでミニマルに制作していますが、今後Next.jsに移行予定",

        content: (
      <div style={{border: "1px solid #000000",borderRadius: 8,padding: 24,lineHeight : 1.8,}}>
        <h2 style={{ fontSize: '20px', borderBottom: '1px solid #ddd', paddingBottom: '8px' }}>概要</h2>
        <p>個人的に欲しかったイラスト制作作業を記録していくためのツールです</p>
        １プロジェクトに対して、複数コミットを保存可能、進捗画像も一緒に保存できます。<br/>
        作業時間の可視化がしたいなぁって思っただけでなく、近年の生成AIブームの中、人が積み重ねて作成した部分に価値が発生してきているのじゃないかなと感じており、そういった部分を視覚的に出来るような仕組み
        を作っています。
        <br/>創作に関する記録を付けるだけでなく、スケジュールカレンダーなどを実装しており、今後は日常でも使える創作支援OSとして開発していきたいです。例えば、この日はバイトが○○時まであるから○○から作業　とか。出来たら嬉しい（自分が）
        <br/>現在は、Railsを用いたバックエンドの開発を行っており、ログイン機能＋DBでの永続化を目標にしています。
        <div
              style={{
                width: 500,
                height: 400,
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Image
                src="/image/4.jpg"
                alt="実運用風景"
                fill
                style={{ objectFit: "cover" }}
              />
        </div>
        こちらも実際に自分で使いながら改善点を見つけ、継続的に成長させています。Rejistellaに比べ、細かいところは作りこめていないので今後力を入れて行きたい。<br/>
        <br/><br/><p style={{fontSize:20 }}><a href="https://github.com/kei5o55/worklog-app" style={{color: "#2563eb",textDecoration: "underline",}}>GitHub</a>にさらに詳しく記載してます。ぜひご覧ください！</p>

      </div>
    ),

        demoUrl: "https://worklog-app-ruby.vercel.app/projects",
        githubUrl: "https://github.com/kei5o55/worklog-app"
    },
    {
        slug: "drawapp",
        title: "簡易ペイントツール",
        subtitle: "超簡易的なペイントツール / C言語を使用したデスクトップアプリ",

        content: (
      <div style={{border: "1px solid #000000",borderRadius: 8,padding: 24,lineHeight : 1.8,}}>
        <h2 style={{ fontSize: '20px', borderBottom: '1px solid #ddd', paddingBottom: '8px' }}>概要</h2>
        全体を通して初めて作った個人開発アプリです。<br/>
        Gitを用いて実際に開発の過程を学ぶために制作始めたという背景が大きいですが、自分用に最適化したペイントツールとして今後は育成していきたいと考えています。<br/>
        サイズを設定できる消しゴム・ブラシのみのシンプルな構成ですが、逆に機能を制限することで簡単なラフや気軽に絵を描く際に使えるのかなとか考えています。<br/>
        <div
              style={{
                width: 500,
                height: 400,
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Image
                src="/image/5.jpg"
                alt="実運用風景"
                fill
                style={{ objectFit: "cover" }}
              />
        </div>
        <br/>最近はRejistella,worklogappに力を入れているため長らくアップデート出来ていませんが、今後も手を加えて実際に使えるぐらいまで成長させたいです。
        
      </div>
    ),

        demoUrl: undefined,
        githubUrl: "https://github.com/kei5o55/DrawApp"
    },{
        slug: "portfolio",
        title: "ポートフォリオサイト",
        subtitle: "制作物置き場用サイト",

        content: (
      <div style={{border: "1px solid #000000",borderRadius: 8,padding: 24,lineHeight : 1.8,}}>
        <h2 style={{ fontSize: '20px', borderBottom: '1px solid #ddd', paddingBottom: '8px' }}>概要</h2>
        このサイトです。<br/>
        next.jsやtailwind cssなどのモダンな技術を初めて使って作成しています。めちゃくちゃ便利ですね。<br/>
        自創作発表の場や、制作物を乗せる場所など、自身の活動のハブとして今後は活用していきたいです。
        <br/>現在はGithubを用いたvercelでデプロイしていますが、今後ラズベリーパイなどを用いた自宅サーバ上で稼働できるようにしたい。
        <br/>webサイト開発の知識がまだ少なく、高度なことはできていないのですが、なるべく見やすく制作することを意識しています。
        <br/><br/>
        <Link href="/misoria" style={{color: "#2563eb",textDecoration: "underline",}}>自創作の魔法学校の世界観</Link>があるのですが、今後はその世界感に沿ったデザインに移行していけたらいいなと考えています。
        
        
      </div>
    ),

        demoUrl: undefined,
        githubUrl: "https://github.com/kei5o55/my-portfolio"
    },
];