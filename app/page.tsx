import Link from "next/link";
import "./page.css";

export default function Home() {
  return (
    <main style={{ padding: 32, maxWidth: 900, margin: "0 auto" }}>
      <h1 style={{ fontSize: 32, marginBottom: 8 }}>
        Portfolio
        <span style={{fontSize: 16,opacity: 0.5,marginLeft: 12,}}>
          React + Next.js
        </span>
      </h1>

      {/* 自己紹介 */}
      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 24 }}>About</h2>
        <p>
          kei5ot&nbsp;or&nbsp;kei5o55&nbsp;というHNで活動しています。創作世界観とイラスト・TypeScript / Reactを用いたWebアプリケーションを制作しています。<br />
          創作支援アプリケーションを制作しており、Worksセクションに制作物を掲載しています。<br />
          フロントエンド領域に興味があり、問題解決のために何を作るかといったアイデア出しや、ユーザ体験を意識した新機能の追加・改善などが好きですが、
          今後は低レイヤー領域やバックエンド技術についても学び、フルスタックな開発ができるようになりたいと考えています。
          <br />
          
        </p>
        <Link href="/about" style={{ display: "inline-block", marginTop: 12 }}>
          More about me →
        </Link>
      </section>

      {/* 作品 */}
      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 24 }}>Works</h2>
        <p style={{fontSize: 16,marginBottom: 16,opacity: 0.7 }}>力を入れている制作物を掲載しています。ぜひご覧ください。<br />
          GithubのReadmeには詳細な情報や、制作の背景・工夫点などを、<br />
          「Detail Page →」には各制作物に対する思いや紹介をカジュアルに記載していますので、両方ご覧いただけると嬉しいです。
        </p>
        <div
          style={{
            border: "1px solid #333",
            borderRadius: 8,
            padding: 16,
            marginTop: 12,
          }}
        >
          <h3 style={{fontSize : 20}}>Artwork</h3>
          <p style={{ opacity: 0.7 ,fontSize: 14}}>
            イラスト置き場
          </p>
          <p>画像を直置きしているので、読み込みに少し時間がかかるかもしれません</p>
          <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
            <Link href="/art">Illustrations →</Link>
          </div>
        </div>
        
        <div
          style={{
            border: "1px solid #333",
            borderRadius: 8,
            padding: 16,
            marginTop: 12,
          }}
        >
          <h3 style={{fontSize : 20}}>Rejistella ( 仮称 ) / レジアプリ</h3>

          <p style={{ opacity: 0.7 ,fontSize: 14}}>
            同人即売会向けレジアプリ / React + Viteで制作中
          </p>
          <p>
            最も力を入れているプロジェクトです。実運用を通して機能を改善していき、長期的に運用・育成したいと考えています。<br/>
            詳細はリポジトリのREADMEに記載していますので、ぜひご覧ください。<br />
          </p>

          <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
            <a href="https://register-3k2l.vercel.app/">▶ DEMO</a>
            <p>/</p>
            <a href="https://github.com/kei5o55/register">GitHubリポジトリ</a>
            <p>/</p>
            <a href="/works/rejistella">Detail Page →</a>
          </div>

        </div>
        <div
          style={{
            border: "1px solid #333",
            borderRadius: 8,
            padding: 16,
            marginTop: 12,
          }}
        >
          <h3 style={{fontSize : 20}}>作業記録ツール</h3>

          <p style={{ opacity: 0.7 ,fontSize: 14}}>
            イラスト版Github風 / 現在はViteでミニマルに制作していますが、現在Next.jsに移行作業中
          </p>
          <p>
            イラスト制作の作業記録をつけるためのツール。タスク管理や進捗管理などの追加・バックエンドの開発等を進め、スケジュールアプリとして日常的に使用できるようにしたいと考えています。<br />
            <span >詳細はリポジトリのREADMEに記載していますので、ぜひご覧ください。<br /></span>
          </p>

          <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
            <a href="https://worklog-app-ruby.vercel.app/projects">▶ DEMO</a>
            <p>/</p>
            <a href="https://github.com/kei5o55/worklog-app">GitHubリポジトリ</a>
            <p>/</p>
            <a href="/works/worklog">Detail Page →</a>
          </div>
        </div>
        <div
          style={{
            border: "1px solid #333",
            borderRadius: 8,
            padding: 16,
            marginTop: 12,
          }}
        >
          <h3 style={{fontSize : 20}}>簡易ペイントツール</h3>

          <p style={{ opacity: 0.7 ,fontSize: 14}}>
            超簡易的なペイントツール / C言語を使用したデスクトップアプリ
          </p>
          <p>
            一番初めに開発したツールです。<br />
            デスクトップアプリとして制作したため、ブラウザ上でのデモは用意していませんが、GitHubにソースコードを公開しています。<br />
            詳細はリポジトリのREADMEに記載していますので、ぜひご覧ください。<br />
          </p>

          <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
            <a href="https://github.com/kei5o55/DrawApp">GitHubリポジトリ</a>
            <p>/</p>
            <a href="/works/drawapp">Detail Page →</a>
          </div>
        </div>

      
      </section>

      {/* 連絡 */}
      <section>
        <h2>Links</h2>
        <ul>
          <li>
            <a href="https://github.com/kei5o55">GitHub</a>
          </li>
          <li>
            <a href="https://www.pixiv.net/users/16743124">pixiv</a>
          </li>
          <li>
            <a href="https://X.com/kei5ot">X(旧Twitter)</a>
          </li>
        </ul>
      </section>

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
