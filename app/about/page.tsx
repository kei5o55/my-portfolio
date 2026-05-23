import Link from "next/link";

export default function AboutPage() {
  return (
    <main style={{ padding: 32, maxWidth: 900, margin: "0 auto", color: "#000", backgroundColor: "#fff", minHeight: "100vh" }}>
    
      <h1 style={{ fontSize: 32, marginBottom: 24 }}>
        About Me
      </h1>
    <Link href="/" style={{ display: "inline-block", marginBottom: 14 }}>
        ← Back to home
    </Link>
      {/* プロフィール基本情報 */}
      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 24, marginBottom: 12 }}>Profile</h2>
        <div
          style={{
            border: "1px solid #ddd", // 白背景に合わせて少し明るいグレーに
            borderRadius: 8,
            padding: 24,
            lineHeight: 1.8,
            background: "#f9f9f9" // ほんのり薄いグレーでブロック感を出す
          }}
        >
          <p style={{ fontWeight: "bold", fontSize: 18, marginBottom: 4 }}>
            kei5ot / kei5o55
          </p>
          <p style={{ opacity: 0.6, fontSize: 12, marginBottom: 16, letterSpacing: "0.05em" }}>
            ALKEIA ACADEMY / IDENTIFICATION: STUDENT_ID_UNSTABLE
          </p>
          
          <p>
            高知大学 情報科学科 4年。<br />
            個人ソフトウェア開発者としてアプリ制作を行いながら、イラストレーターとしても活動しています。
          </p>
          
          <p style={{ marginTop: 16 }}>
            自身の創作世界観「MISORIA: Academia」の設定構築と、それを表現するための技術探求を並行しています。
          </p>

          <p style={{ marginTop: 16, opacity: 0.7, fontSize: 14, borderTop: "1px solid #eee", paddingTop: 16 }}>
            留年という経験を通じて感じた「既存の評価軸から外れること」の焦燥や絶望、
            そしてその先で見つけた自分だけの価値観を、創作と開発の燃料に変えて活動しています。
          </p>
        </div>
      </section>

      {/* スキル・活動 */}
      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 24, marginBottom: 12 }}>Skills & Tools</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div style={{ border: "1px solid #eee", borderRadius: 8, padding: 16 }}>
            <h3 style={{ fontSize: 18, marginBottom: 8 }}>Development</h3>
            <p style={{ fontSize: 14, opacity: 0.7, lineHeight: 1.6 }}>
              TypeScript / React / Next.js<br />
              Ruby on Rails / Vite
            </p>
          </div>
          <div style={{ border: "1px solid #eee", borderRadius: 8, padding: 16 }}>
            <h3 style={{ fontSize: 18, marginBottom: 8 }}>Creative</h3>
            <p style={{ fontSize: 14, opacity: 0.7, lineHeight: 1.6 }}>
              Digital Illustration<br />
              World Building / Clip Studio
            </p>
          </div>
        </div>
      </section>

      {/* 連絡先リンク */}
      <section>
        <h2 style={{ fontSize: 24, marginBottom: 12 }}>Links</h2>
        <ul style={{ lineHeight: 2, listStyle: "none", padding: 0 }}>
          <li><a href="https://github.com/kei5o55" style={{ color: "#0066cc", textDecoration: "none" }}>GitHub →</a></li>
          <li><a href="https://www.pixiv.net/users/16743124" style={{ color: "#0066cc", textDecoration: "none" }}>pixiv →</a></li>
          <li><a href="https://X.com/kei5ot" style={{ color: "#0066cc", textDecoration: "none" }}>X (Twitter) →</a></li>
        </ul>
      </section>

      {/* フッター */}
      <div style={{ marginTop: 80, textAlign: "center", paddingBottom: 100 }}>
        <p style={{ opacity: 0.4, fontSize: 14 }}>Created by [kei5o55]</p>
        <div style={{ display: "flex", justifyContent: "center", gap: 20, marginTop: 10 }}>
          <Link href="/" style={{ color: "#666", textDecoration: "none", fontSize: 14 }}>Home</Link>
        </div>
      </div>
    </main>
  );
}