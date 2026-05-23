import Link from "next/link";

export default function AboutPage(){
    return (
        <main style={{ padding: 32, maxWidth: 900, margin: "0 auto" }}>
            <h1 style={{ fontSize: 32, marginBottom: 8 }}>
                About Me
            </h1>
            <Link href="/" style={{ display: "inline-block", marginBottom: 14 }}>
                ← Back to home
            </Link>
            {/*プロフィール基本情報*/}
            <section style={{ marginBottom: 32 }}>
                <h2 style={{ fontSize: 24 }}>Profile</h2>
                <div style={{border: "1px solid #000000",borderRadius: 8,padding: 24,lineHeight : 1.8,}}>
                    <p> kei5ot / kei5o55</p>
                    <p style={{ opacity: 0.6, fontSize: 12, marginBottom: 16, letterSpacing: "0.05em" }}>
                        絵描き / Webエンジニア
                    </p>
                    <p>
                        高知大学 理工学部 情報科学科 4年<br />
                        TypeScript / Reactを用いたWebアプリケーションの個人開発を行っています。<br />
                        自身が使用する創作支援アプリケーションを制作しており、HomeのWorksセクションにGithubを掲載しています。<br />
                        フロントエンド領域に興味があり、何を作るかといったアイデア出しやユーザ体験を意識した新機能の追加・改善などが好きです。<br />
                        絵描きとしての創作活動を行っています。
                    </p>
                </div>
            </section>

            {/* スキル・活動 */}
            <section style={{ marginBottom: 32 }}>
                <h2 style={{ fontSize: 24,marginBottom: 12 }}>Skills & Tools</h2>
                <div style={{display: "grid",gridTemplateColumns: "1fr 1fr",gap: 24,}}>
                    <div  style={{ border: "1px solid #000000", borderRadius: 8, padding: 16 }}>
                        <h3 style={{ fontSize: 18, marginBottom: 8 }}>Developement</h3>
                        <p style={{ fontSize: 14, opacity: 0.7, lineHeight: 1.6 }}>
                            main : TypeScript / React / Next.js<br />
                            sub : C / html /css<br />
                            tools : VSCode / GitHub
                        </p>
                    </div>
                    <div  style={{ border: "1px solid #000000", borderRadius: 8, padding: 16 }}>
                        <h3 style={{ fontSize: 18, marginBottom: 8 }}>Creative</h3>
                        <p style={{ fontSize: 14, opacity: 0.7, lineHeight: 1.6 }}>
                            illust : CLIP STUDIO PAINT<br />
                            event : 関西コミティア / Comitia /コミックマーケット
                        </p>
                    </div>
                </div>
            </section>

            {/*趣味・その他*/}
            <section style={{ marginBottom: 32 }}>
                <h2 style={{ fontSize: 24,marginBottom: 12 }}>Hobbies & Others</h2>
                <div style={{border: "1px solid #000000",borderRadius: 8,padding: 24,lineHeight : 1.8,}}>
                    <h3 style={{ fontSize: 24,marginBottom: 12 }}>
                        音楽ゲーム(CHUNITHM)
                    </h3>
                    <p>
                        音ゲーは中学の頃からやっていて、特にCHUNITHMを10年以上続けています。<br />
                        最近は作品制作の方に時間を割いているため、プレイ頻度は下がっていますが、今でも音ゲーは大好きです。
                    </p>
                    <p style={{ fontSize:20,marginTop: 12, marginBottom: 12 }}>
                        主な実績
                    </p>
                    <p>
                        ・Rating 17.50↑ ( CHUNITHM X-VERSE-X )<br />
                        ・Legend of CRYSTAL 取得<br />
                        ・15＋ AJ3 ( 蠍火・ToBe Continued・Danann )<br />
                        ・15↑ 全SSS<br />
                    </p>
                    <h3 style={{ fontSize: 24,marginBottom: 12 }}>
                        絵
                    </h3>
                    <p>
                        test
                    </p>
                </div>
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