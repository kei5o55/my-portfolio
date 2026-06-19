import Link from "next/link";
import "./page.css";
import Image from 'next/image';

export default function Home() {
  const tagStyle = (bgColor: string, color: string) => ({
    backgroundColor: bgColor,
    color: color,
    padding: "2px 8px",
    borderRadius: "4px",
    fontSize: "12px",
    fontWeight: "bold",
  });
  return (
    <main style={{ padding: 32, maxWidth: 900, margin: "0 auto" }}>
      <h1 style={{ fontSize: 32, marginBottom: 8 }}>
        Portfolio
      </h1>

      {/* 自己紹介 */}
      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 24 }}>About</h2>
        <p>
          kei5ot&nbsp;or&nbsp;kei5o55&nbsp;というHNで活動しています。創作世界観とイラスト・TypeScript / Reactを用いたWebアプリケーションを制作しています。<br />
          創作支援アプリケーションを制作しており、Worksセクションに制作物を掲載しています。<br />
          フロントエンド領域に興味があり、問題解決のために何を作るかといったアイデア出しや、ユーザ体験を意識した新機能の追加・改善などが好きですが、
          今後は低レイヤー領域やバックエンド技術についても意欲的に学びたいと考えています。
          <br /><br />
          最近はRejistellaとWorklog Appの二つのwebアプリに注力しています。どちらも実運用を通して機能改善を続けており、長期的な視点で育成を継続しています。
          <br />
          
        </p>
        <Link href="/about" 
              className="
                            inline-flex
                            items-center
                            gap-2
                            px-4
                            py-2
                            mb-4
                            border
                            border-black
                            rounded-lg
                            text-sm
                            transition
                            hover:bg-zinc-200
                        "
                        style={{ display: "inline-block", marginTop: 12 }}>
          More about me →
        </Link>
      </section>

      {/* 作品 */}
      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 24 }}>Works</h2>
        <p style={{fontSize: 16,marginBottom: 16,opacity: 0.7 }}>力を入れている制作物を掲載しています。<br />
          GithubのReadmeには機能詳細・工夫点などを、<br />
          「Detail Page →」には制作物に対する思いや開発背景を簡単に記載していますので、ぜひ両方ご覧ください。
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
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
            <span style={tagStyle("#FF69B4", "#fff")}>Illustrations</span>
          </div>
          <p>
              イラスト作品集。<br />
              感覚や手癖を大切にして描いています。オリジナルキャラクターや二次創作を中心に制作しています。<br />
              ※高解像度画像を掲載しているため、読み込みに時間がかかる場合があります。</p>
          <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
            <Link href="/art" className="
                            inline-flex
                            items-center
                            gap-2
                            px-4
                            py-2
                            mb-4
                            border
                            border-black
                            rounded-lg
                            text-sm
                            transition
                            hover:bg-zinc-200
                        "
                        >Illustrations →</Link>
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
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
            <span style={tagStyle("#3178C6", "#fff")}>TypeScript</span>
            <span style={tagStyle("#61DAFB", "#000")}>React</span>
            <span style={tagStyle("#646CFF", "#fff")}>Vite</span>
            <span style={tagStyle("#9e4e86", "#fff")}>Web App</span>
            <span style={tagStyle("rgb(25, 27, 87)", "#fff")}>PWA</span>
            <span style={tagStyle("#4CAF50", "#fff")}>実運用中</span>
            <span style={tagStyle("#FF9800", "#fff")}>個人開発</span>
          </div>
          <div style={{display: "flex",}}>
            
            <p>
              同人即売会向けのレジアプリケーション。<br />
              実運用を通して機能を改善し、
              長期的な視点での育成を継続しています。<br/><br />
            </p>
          </div>
          
          <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
            <a href="https://register-3k2l.vercel.app/"  className="
                            inline-flex
                            items-center
                            gap-1
                            px-4
                            py-2
                            mb-4
                            border
                            border-black
                            rounded-lg
                            text-sm
                            transition
                            hover:bg-zinc-200
                        ">▶ DEMO</a>
            <a href="https://github.com/kei5o55/register"  className="
                            inline-flex
                            items-center
                            gap-1
                            px-4
                            py-2
                            mb-4
                            border
                            border-black
                            rounded-lg
                            text-sm
                            transition
                            hover:bg-zinc-200
                        ">GitHubリポジトリ</a>
            <a href="/works/rejistella"  className="
                            inline-flex
                            items-center
                            gap-1
                            px-4
                            py-2
                            mb-4
                            border
                            border-black
                            rounded-lg
                            text-sm
                            transition
                            hover:bg-zinc-200
                        ">Detail Page →</a>
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

          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
            <span style={tagStyle("#3178C6", "#fff")}>TypeScript</span>
            <span style={tagStyle("#61DAFB", "#000")}>React</span>
            <span style={tagStyle("#0070f3", "#fff")}>Next.js </span>
            <span style={tagStyle("#8f2c2c", "#fff")}>Ruby</span>
            <span style={tagStyle("#9e4e86", "#fff")}>Web App</span>
            <span style={tagStyle("#4CAF50", "#fff")}>実運用中</span>
            <span style={tagStyle("#FF9800", "#fff")}>個人開発</span>
          </div>
          <p style={{ fontSize: 14, lineHeight: "1.6" }}>
            イラスト版GitHubを目指した作業記録ツール。
            現在はNext.jsへの移行とスケジュール管理機能を強化し、
            創作の継続を技術で支える、日常使いのアプリとして開発を進めています。
          </p>

          <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
            <a href="https://worklog-app-ruby.vercel.app/projects"  className="
                            inline-flex
                            items-center
                            gap-1
                            px-4
                            py-2
                            mb-4
                            border
                            border-black
                            rounded-lg
                            text-sm
                            transition
                            hover:bg-zinc-200
                        ">▶ DEMO</a>
            <a href="https://github.com/kei5o55/worklog-app"  className="
                            inline-flex
                            items-center
                            gap-1
                            px-4
                            py-2
                            mb-4
                            border
                            border-black
                            rounded-lg
                            text-sm
                            transition
                            hover:bg-zinc-200
                        ">GitHubリポジトリ</a>
            <a href="/works/worklog"  className="
                            inline-flex
                            items-center
                            gap-1
                            px-4
                            py-2
                            mb-4
                            border
                            border-black
                            rounded-lg
                            text-sm
                            transition
                            hover:bg-zinc-200
                        ">Detail Page →</a>
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

          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
            <span style={tagStyle("#555555", "#fff")}>C言語</span>
            <span style={tagStyle("#a3aa3f", "#fff")}>SDL2</span>
            <span style={tagStyle("#607D8B", "#fff")}>Desktop App</span>
            <span style={tagStyle("#FF9800", "#fff")}>個人開発</span>
          </div>
          <p>
            一番初めに開発したツールです。<br />
            デスクトップアプリとして制作したため、ブラウザ上でのデモは用意していませんが、GitHubにソースコードを公開しています。<br />
            <br />
          </p>

          <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
            <a href="https://github.com/kei5o55/DrawApp"  className="
                            inline-flex
                            items-center
                            gap-1
                            px-4
                            py-2
                            mb-4
                            border
                            border-black
                            rounded-lg
                            text-sm
                            transition
                            hover:bg-zinc-200
                        ">GitHubリポジトリ</a>
            <a href="/works/drawapp"  className="
                            inline-flex
                            items-center
                            gap-1
                            px-4
                            py-2
                            mb-4
                            border
                            border-black
                            rounded-lg
                            text-sm
                            transition
                            hover:bg-zinc-200
                        ">Detail Page →</a>
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
          <h3 style={{fontSize : 20}}>ポートフォリオサイト</h3>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
            <span style={tagStyle("#61DAFB", "#000")}>React</span>
            <span style={tagStyle("#0070f3", "#fff")}>Next.js</span>
            <span style={tagStyle("#3178C6", "#fff")}>TypeScript</span>
            <span style={tagStyle("#06B6D4", "#fff")}>Tailwind CSS</span>
          </div>
          <p>
            このサイトです。<br />
            Next.jsを用いた初めての開発を通じ、技術習得と創作世界観の構築を両立させています。単なるポートフォリオに留まらず、自身の作品の一つとしてアップデートを続けていきます。<br />
            <br />
          </p>

          <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
            <a href="https://github.com/kei5o55/my-portfolio"  className="
                            inline-flex
                            items-center
                            gap-1
                            px-4
                            py-2
                            mb-4
                            border
                            border-black
                            rounded-lg
                            text-sm
                            transition
                            hover:bg-zinc-200
                        ">GitHubリポジトリ</a>
            <a href="/works/portfolio"  className="
                            inline-flex
                            items-center
                            gap-1
                            px-4
                            py-2
                            mb-4
                            border
                            border-black
                            rounded-lg
                            text-sm
                            transition
                            hover:bg-zinc-200
                        ">Detail Page →</a>
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
      
    </main>
  );
}
