import Link from "next/link";

export default function AboutPage(){
    return (
        <main style={{ padding: 32, maxWidth: 900, margin: "0 auto" }}>
            <h1 style={{ fontSize: 32, marginBottom: 8 }}>
                About Me
            </h1>
            <Link
                href="/"
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
            >
            ← Back to home
            </Link>
            {/*プロフィール基本情報*/}
            <section style={{ marginBottom: 32 }}>
                <h2 style={{ fontSize: 24, marginBottom: 32 }}>Profile</h2>
                <div style={{border: "1px solid #000000",borderRadius: 8,padding: 24,lineHeight : 1.8,}}>
                    <p style={{fontSize: 20}}> kei5ot or kei5o55</p>
                        <p style={{ opacity: 0.6, fontSize: 12, marginBottom: 16, letterSpacing: "0.05em" }}>
                            絵描き / 個人開発者
                        </p>
                    <p>
                        高知大学 理工学部 情報科学科<br /><br />
                        &nbsp;このサイトはnext.jsを初めて使用し制作しているのですが、めちゃくちゃ便利ですね。今まで自分の作品を公開する際は、Viteのみで制作していましたが、
                            物によってはnext.jsなどフレームワークを使用する方が圧倒的に楽だなと感じました。
                        <br />worksに載せてある作業記録ツールは現在viteのみで制作しているのですが、next.jsのルーティングの管理がファイルベースで直感的なところが設計にマッチしており、絶対導入したほうが良いなと思いました。
                        絵描きとしての創作活動を行っています。
                        <br />
                        下部の趣味欄にも記載していますが、創作やゲームが好きです。創作に関しては、最近は小説や世界観設定などの文章に興味があります。<br />
                        イラストで同人即売会に参加もしており、一次創作では「Emotone」二次創作では「人間」というサークル名で活動しています。<br />
                        長所は、食べ物の好き嫌いが無いところ。剣道の得意なところは出所の掴みづらい小手と攻勢時の技の繋ぎです。
                    </p>
                    
                </div>
                    
            </section>

            {/* スキル・活動 */}
            <section style={{ marginBottom: 32 }}>
                <h2 style={{ fontSize: 24,marginBottom: 12 }}>Skills & Tools</h2>
                <div style={{display: "grid",gridTemplateColumns: "1fr 1fr",gap: 24,}}>
                    <div  style={{ border: "1px solid #000000", borderRadius: 8, padding: 16 }}>
                        <h3 style={{ fontSize: 18, marginBottom: 8 }}>Developement</h3>
                        <p style={{ fontSize: 14,lineHeight: 1.6 }}>
                            main : TypeScript / React<br />
                            sub : Next.js / html /css / C<br />
                            tools : VSCode / GitHub
                        </p>
                    </div>
                    <div  style={{ border: "1px solid #000000", borderRadius: 8, padding: 16 }}>
                        <h3 style={{ fontSize: 18, marginBottom: 8 }}>Creative</h3>
                        <p style={{ fontSize: 14, lineHeight: 1.6 }}>
                            illust : original character & worldbuilding / fan art<br />
                            circle : Emotone / 人間<br />
                            tools : CLIP STUDIO PAINT
                        </p>
                        <p style={{ textAlign: "right" }}>
                <Link
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
                    href="/misoria"
                    style={{
                        display: "inline-block",
                        marginTop: 12,
                        marginLeft: "auto",
                    }}
                    >
                    More →
                </Link>
                </p>
                    </div>
                </div>
                
            </section>
            
            <section style={{border: "1px solid #000000",borderRadius: 8,padding: 24,lineHeight : 1.8,}}>
                <h3 style={{fontSize : 20}}>個人ブログ</h3>
                    <p style={{ opacity: 0.7 ,fontSize: 14}}>
                        日記や作業記録やイベント参加レポートなどをたまにまとめています。
                    </p>
                    <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
                        <a href="https://kei5ot.fanbox.cc/" className="
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
                        ">Fanbox →</a>
                    </div>
            </section>
            
            {/*趣味・その他*/}
            <section style={{ marginBottom: 32 }}>
                <h2 style={{ fontSize: 24,marginBottom: 12 }}>Hobbies & Others</h2>
                <div style={{border: "1px solid #000000",borderRadius: 8,padding: 24,lineHeight : 1.8,}}>
                    <h3 style={{ fontSize: 24,marginBottom: 12 }}>
                        CHUNITHM（音ゲー）
                    </h3>
                    <p>
                        音ゲーは中学の頃からやっていて、特にCHUNITHMを10年近く続けています。<br />
                    </p>
                    <p style={{ fontSize:20,marginTop: 12, marginBottom: 12 }}>
                        主な実績
                    </p>
                    <p >
                        ・Rating 17.50↑ ( CHUNITHM X-VERSE-X )<br />
                        ・Legend of CRYSTAL 取得<br />
                        ・15＋ AJ3 ( 蠍火・ToBe Continued・Danann )<br />
                        ・15↑ 全SSS<br />
                        <br />
                    </p>
                    <p style={{ fontSize:20,marginTop: 12, marginBottom: 12 }}>
                        オリジナルの好きな曲(ほかにも沢山あります)
                    </p>
                    <div style={{borderBottom: "1px solid #000"}}>
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/QOZ0RYUGINw"
                            title="YouTube video player"
                            allowFullScreen
                        />
                        <br/>
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/SL2EQT_-LgI"
                            title="YouTube video player"
                            allowFullScreen
                        />
                        <br/>
                    </div>
                    <h3 style={{ fontSize: 24,marginBottom: 12 }}>
                        GUILTY GEAR -STRIVE-（格ゲー）
                    </h3>
                    <p>
                        最近始めました。５，６階を行ったり来たりしています。<br />
                        今まで対戦ゲームはあまりやってこなかったですが、ギルティギアはキャラクターが魅力的で音楽やストーリーにも惹かれました。<br />
                    </p>
                    <p style={{ fontSize:20,marginTop: 12, marginBottom: 12 }}>
                        好きなキャラクター
                    </p>
                    <p style={{borderBottom: "1px solid #000"}}>
                        ・ラムレザル<br />
                        ・ディライラ<br />
                        <br />
                    </p>

                    <h3 style={{ fontSize: 24,marginBottom: 12 }}>
                        絵
                    </h3>
                    <p style={{borderBottom: "1px solid #000"}}>
                        見るのも描くのも好きで、ファンアート、オリジナル問わず描いています。<br />
                        主にpixivやXに投稿しています。<br />
                        絵を見るだけで誰が描いたのか分かるような、作者ごとの癖や個性のようなものを大切にしていて、写実的ではなく、感情や雰囲気を重視した傾向の作品が多いと思います。<br />
                        <Link href="/art"
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
                        style={{ display: "inline-block", marginBottom: 8, marginTop: 8 }}>
                            My Artworks →
                        </Link>
                        <br />
                        には自分のイラストを掲載していますので、ぜひご覧ください。
                    </p>
                    <h3 style={{ fontSize: 24,marginBottom: 12 }}>
                        剣道
                    </h3>
                    <p>
                        {/*小学高学年から大学まで続けていました。<br />*/}
                        最近は学業や作品制作に力を入れたいと考えているため、剣道からは少し距離を置いていますが、進路や生活が安定すれば再開したいと考えています。特に、卒業後社会人になってからは場所を見つけて絶対に再開したいと考えています。
                    </p>
                    <p style={{ fontSize:20,marginTop: 12, marginBottom: 12 }}>
                        主な実績
                    </p>
                    <p>
                        ・三段取得<br />
                        ・中学 : 郡市大会 個人３位入賞<br />
                        ・高校 : 県大会団体 ３位入賞<br />
                        ・大学 : 中四国新人大会 団体準優勝（二年時）<br />
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