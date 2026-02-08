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
          世界観重視のADVゲームとWeb UIを制作しています。
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
            オリジナルADV + 探索ゲーム。React + Viteで制作。
          </p>

          <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
            <a href="/play">▶ Play</a>
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
            同人即売会向けレジアプリ。React + Viteで制作。
          </p>

          <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
            <a href="/play">▶ Play</a>
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
          <h3>作品ページ</h3>

          <p style={{ opacity: 0.8 }}>
            イラストの紹介ページ。
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
    </main>
  );
}
