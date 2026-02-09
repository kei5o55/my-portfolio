import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: 32, maxWidth: 900, margin: "0 auto" }}>
      <h1 style={{ fontSize: 32, marginBottom: 8 }}>
        my-Portfolio
      </h1>

      <p style={{ opacity: 0.7, marginBottom: 24 }}>
        React / TypeScript / Next.js
      </p>

      {/* 自己紹介 */}
      <section style={{ marginBottom: 32 }}>
        <h2>About</h2>
        <p>
          創作世界観とイラスト・Webアプリケーションを制作しています。
          フロントエンド中心に、最近は自宅サーバ運用にも興味があります。
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
          <h3>MISORIA : Frontier</h3>

          <p style={{ opacity: 0.8 }}>
            オリジナルADV + 探索ゲーム。React + Viteで制作中。
          </p>

          <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
            <a href="https://original-game-hazel.vercel.app/">▶ DEMO Play</a>{/*今後indexにて実装予定*/}
            <a href="https://github.com/kei5o55/minesweeper">GitHub</a>
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
          <h3>Artwork</h3>

          <p style={{ opacity: 0.8 }}>
            イラスト置き場
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
            <Link href="/art">Illustrations →</Link>
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
