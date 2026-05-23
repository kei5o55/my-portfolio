import Link from "next/link";
import "./page.css";

export default function Home() {
  return (
    <main style={{ padding: 32, maxWidth: 900, margin: "0 auto" }}>
      <h1 style={{ fontSize: 32, marginBottom: 8 }}>
        Portfolio
      </h1>

      {/* 自己紹介 */}
      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 24 }}>About</h2>
        <p>
          kei5ot&nbsp;or&nbsp;kei5o55&nbsp;という名前で活動しています。創作世界観とイラスト・Webアプリケーションを制作しています。<br></br>
          &nbsp;このサイトはnext.jsを使用し制作しているのですが、めちゃくちゃ便利ですね。今まで自分の作品を公開する際は、Viteのみで制作していましたが、物によってはnext.jsなどフレームワークを使用する方が圧倒的に楽だなと感じました。
          特に、worksにある作業記録ツールもviteで制作しているのですが、ルーティングの管理がファイルベースで直感的なところが、設計上絶対next.jsのほうが良いなと思いました。
        </p>
      </section>

      {/* 作品 */}
      <section style={{ marginBottom: 32 }}>
        <h2>Works</h2>
        <div
          style={{
            border: "1px solid #333",
            borderRadius: 8,
            padding: 16,
            marginTop: 12,
          }}
        >
          <h3>Artwork</h3>

          <p style={{ opacity: 0.8 }}>
            イラスト置き場
          </p>
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
          <h3>レジアプリ</h3>

          <p style={{ opacity: 0.8 }}>
            同人即売会向けレジアプリ。React + Viteで制作中。
          </p>
          <p>最も力を入れているプロジェクトです。実運用を通して機能を改善していき、長期的に運用・育成したいと考えています。</p>

          <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
            <a href="https://register-3k2l.vercel.app/">▶ DEMO Play</a>{/*今後indexにて実装予定*/}
            <a href="https://github.com/kei5o55/register">GitHub</a>
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
          <h3>作業記録ツール</h3>

          <p style={{ opacity: 0.8 }}>
            作業記録用ツール（イラスト版Github風）。React + Viteで制作中。
          </p>

          <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
            <a href="https://github.com/kei5o55/worklog-app">GitHub</a>
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
          <h3>個人ブログ</h3>

          <p style={{ opacity: 0.8 }}>
            個人ブログ。日記や作業記録など。
          </p>

          <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
            <a href="https://kei5ot.fanbox.cc/">Fanbox →</a>
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
            <Link href="/about">About Me</Link>
            <Link href="/">Home</Link>
        </div>
      </div>
      
    </main>
  );
}
