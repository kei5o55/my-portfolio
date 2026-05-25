import Link from "next/link";

export default function MisoRiaPage() {
    return(
    <div style={{ padding: "40px 20px", display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "#ffffff", color: "#333", fontFamily: "sans-serif" }}>
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
                    hover:bg-black
                    hover:text-white
                "
            >
            ← Back to home
    </Link>
    <div style={{ width: "100%", maxWidth: "800px", border: "1px solid #000000", borderRadius: 8, padding: "48px 32px", lineHeight: 1.8, textAlign: "center", boxSizing: "border-box" }}>
        
        {/* ヘッダー */}
        <header style={{ marginBottom: "56px" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", margin: "0 0 8px 0" }}>アルケイア中央学院</h1>
        <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "24px" }}>― 次代の魔術士を育てる場所 ―</p>
        <p style={{ fontSize: "1.1rem" }}>
            ようこそ、アルケイア中央学院へ<br />
            アルケイア中央学院は、<br />
            エーテル理論・魔術実践・戦術運用を総合的に学べる<br />
            本大陸最大級の魔術教育機関です。
        </p>
        </header>

        {/* 導入 */}
        <section style={{ marginBottom: "56px" }}>
        <p>
            ヴォイド災害——<br />
            人類は未知の敵の前に、多くの犠牲を払い、<br />
            時には、かけがえのない日常さえ失ってきました．<br />
            それでも私たちは歩みをやめることなく未来を切り拓いてきました。
        </p>
        <p style={{ margin: "24px 0" }}>
            「エーテル」。<br />
            皆さんの暮らしを彩り、新時代の礎となるこの力は、<br />
            先代の魔術師たちが受け継いできた、人類の叡智の結晶です。
        </p>
        <p>
            そして今、<br />
            その未来は皆さんの手に託されています。<br />
            次の時代を担う魔術士として、<br />
            学び、成長し、世界と向き合う——<br />
            その第一歩を踏み出す舞台が、ここにあります。
        </p>
        <p style={{ marginTop: "24px" }}>
            私たちは、<br />
            すべての学生がそれぞれの適性を伸ばし、<br />
            社会の中で自分らしく活躍できる未来を全力で支援します。
        </p>
        </section>

        {/* 学科紹介 */}
        <section style={{ marginBottom: "56px" }}>
        <h2 style={{ fontSize: "1.4rem", fontWeight: "bold", borderBottom: "1px solid #000", paddingBottom: "8px", marginBottom: "32px" }}>■ 学科紹介</h2>
        
        <div style={{ marginBottom: "32px" }}>
            <h3 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>戦術科</h3>
            <p>
            前線運用・魔具操作・班行動を中心に学びます。<br />
            実習を通して判断力と連携力を養い、ヴォイド対応の現場で活躍する魔術師としての能力を身に付けます．<br />
            卒業後は魔導軍や各種防衛組織への進路を主とし、<br />
            人類防衛の最前線を担う人材の育成を目的としています。
            </p>
        </div>

        <div style={{ marginBottom: "32px" }}>
            <h3 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>治癒学科</h3>
            <p>
            生命エーテルの扱いと医療魔術を専門とします。<br />
            治癒技術から災害時対応まで幅広い実践教育を基礎から行い，<br />
            地域医療、災害救護、前線支援など多様な分野で活躍できる治癒魔術師を育成します。<br />
            人の命に直接向き合う専門職として，高い倫理観と技術力を養います．
            </p>
        </div>

        <div style={{ marginBottom: "32px" }}>
            <h3 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>研究基礎科</h3>
            <p>
            エーテル理論・術式構造・魔具開発など、<br />
            魔術の基盤を支える学術分野を中心に学びます。<br />
            研究機関や学術分野への進学を目指す学生のための学科であり、<br />
            新たな術式や魔具の開発を通じて、魔術社会の発展に貢献する人材を育成します．
            </p>
        </div>
        </section>

        {/* 制度 */}
        <section style={{ marginBottom: "56px" }}>
        <h2 style={{ fontSize: "1.4rem", fontWeight: "bold", borderBottom: "1px solid #000", paddingBottom: "8px", marginBottom: "24px" }}>■ 連星制度について</h2>
        <p>
            本学院では、学生の適性や得意分野に応じて、<br />
            ネア・メディア・ディスタの三つの「連星」と呼ばれるグループに分けています。<br />
            本制度は優劣を示すものではなく、<br />
            現在の到達段階に合わせて実習班の編成や指導内容を最適化するための教育的区分です。<br />
            連星は固定されたものではなく、学期末の成績や実習での実績をもとに随時見直されます。<br />
            学院の目標は、すべての学生がネア連星に到達できる力を身に付けることです。<br />
            それぞれの歩幅を尊重しながら、一人ひとりが確実に前へ進めるよう、<br />
            段階的な成長を支援する体制が整えられています。
        </p>
        </section>

        <section style={{ marginBottom: "56px" }}>
        <h2 style={{ fontSize: "1.4rem", fontWeight: "bold", borderBottom: "1px solid #000", paddingBottom: "8px", marginBottom: "24px" }}>■ 魔具支給制度</h2>
        <p>
            入学時の適性検査をもとに、<br />
            各学生に最適化された魔具が一人ひとりに支給されます。<br />
            支給品はすべて新品かつ高品質で、<br />
            治癒用杖、戦術用魔具、基礎術式書など、<br />
            専攻分野に応じた基本装備が等しく整えられています。<br />
            装備内容によって学生間に優劣が生じることはなく、<br />
            すべての学生が同じスタートラインから学びを始められる環境が用意されています。<br />
            支給された魔具は、在学期間を通して研究基礎科の学生と教導スタッフによる<br />
            定期的な調整・メンテナンスが行われます。<br />
            使用者の成長に合わせて細かな調整が加えられるため、<br />
            魔具は学生一人ひとりと共に歩む“相棒”として、学びを支え続けます。<br />
            また、希望者には追加調整や補助魔具の申請も可能です。
        </p>
        </section>

        {/* 進路 */}
        <section style={{ marginBottom: "56px" }}>
        <h2 style={{ fontSize: "1.4rem", fontWeight: "bold", borderBottom: "1px solid #000", paddingBottom: "8px", marginBottom: "24px" }}>■ 卒業後の進路</h2>
        <p style={{ marginBottom: "16px" }}>
            卒業生は、それぞれの専攻や適性を活かし、以下の分野で活躍しています。<br />
            <strong>魔導軍 / 公的治癒機関 / 魔術研究施設 / 魔具製造企業 / 地方魔術士・地域支援職</strong>
        </p>
        <p>
            在学中の実習や現場研修を通じて実務経験を積むことで、<br />
            卒業後は即戦力として各分野に送り出されます。<br />
            前線での活動だけでなく、地域医療や研究開発、魔具調整など、<br />
            多様な形で魔術社会を支える進路が用意されています。<br />
            学院内には進路相談室を設けており、<br />
            専門スタッフが学生一人ひとりの希望や適性に寄り添いながら、<br />
            就職先の紹介や進学相談、履修計画の調整まで幅広くサポートしています。<br />
            学生が自分自身の将来像を描けるよう、<br />
            本学は在学期間を通して継続的なキャリア支援を行っています。
        </p>
        </section>

        {/* 学生生活 */}
        <section style={{ marginBottom: "56px" }}>
        <h2 style={{ fontSize: "1.4rem", fontWeight: "bold", borderBottom: "1px solid #000", paddingBottom: "8px", marginBottom: "24px" }}>■ 学生生活</h2>
        <p>
            敷地内には：<br />
            寮 / 図書棟 / 訓練場 / 医療棟 / 魔導交通設備<br />
            などが完備され、安全で充実した学習環境を提供しています。<br />
            クラブ活動や研究サークルも盛んで、<br />
            仲間との交流を通じて豊かな学生生活を送ることができます。
        </p>
        <h3 style={{ fontSize: "1.2rem", fontWeight: "bold", marginTop: "32px" }}>■ 学生寮について</h3>
        <p>
            本学では、すべての学生を対象とした全寮制を採用しています。<br />
            学生は学院敷地内の専用寮に居住し、<br />
            生活・学習・訓練が一体となった環境の中で専門的な魔術教育を受けます。<br />
            居室は二人部屋となっており、<br />
            同じ専攻や近い学年の学生同士が割り当てられます。<br />
            日常を共に過ごすことで自然と交流が生まれ、<br />
            互いに支え合いながら成長できる環境が整えられています。<br />
            また、学外への外出は所定の届け出を行うことで自由に行うことが可能です。<br />
            休日の外出や買い物、私的な用事などにも柔軟に対応しており、<br />
            学生が学院内外の社会とバランスよく関われるよう配慮されています。<br />
            寮には生活支援スタッフが常駐しており、<br />
            体調不良や生活上の相談などにも対応しています。<br />
            学生一人ひとりが安心して学業に集中できるよう、<br />
            学院は日常生活の面からも継続的なサポートを行っています。
        </p>
        </section>

        {/* 学生の声 */}
        <section style={{ marginBottom: "56px", textAlign: "left" }}>
        <h2 style={{ fontSize: "1.4rem", fontWeight: "bold", borderBottom: "1px solid #000", paddingBottom: "8px", marginBottom: "24px", textAlign: "center" }}>学生の声</h2>
        <div style={{ fontSize: "0.9rem", display: "flex", flexDirection: "column", gap: "24px" }}>
            <div>
            <p style={{ fontWeight: "bold" }}>戦術科・2年</p>
            <p>「最初は不安もありましたが、班のみんなと協力して課題を乗り越えるうちに、自分の判断にも自信が持てるようになりました。実習は大変で，もちろん危険もありますが、その分成長を強く実感できます。」</p>
            </div>
            <div>
            <p style={{ fontWeight: "bold" }}>治癒学科・1年</p>
            <p>「人を助ける仕事がしたくて入学しました。基礎から丁寧に教えてもらえるので安心です。先輩たちも優しくて、分からないことはすぐ聞ける環境です。」</p>
            </div>
            <div>
            <p style={{ fontWeight: "bold" }}>研究基礎科・3年</p>
            <p>「エーテル理論を深く学べる環境が整っていて、実験設備も充実しています。自分の“好き”をとことん追求できるのが、この学院の魅力だと思います。」</p>
            </div>
            <div>
            <p style={{ fontWeight: "bold" }}>戦術科・3年</p>
            <p>「ここに来てから、仲間の大切さを学びました。ひとりではできないことも、班ならできる。将来は魔導軍で現場に立って，より多くの人の未来を守れるようになりたいです。」</p>
            </div>
        </div>
        </section>

        {/* 安全への取り組み */}
        <section style={{ marginBottom: "56px" }}>
        <h2 style={{ fontSize: "1.4rem", fontWeight: "bold", borderBottom: "1px solid #000", paddingBottom: "8px", marginBottom: "24px" }}>■ 安全への取り組み</h2>
        <p>
            学院では，すべての実習において定められた安全基準を厳守しています。<br />
            実習において，ヴォイドの等級別対応マニュアルが策定されており，学院生は安全を最優先とした実習を行います．<br />
            現場形式の実習である以上，軽度の負傷や体調不良などが発生する可能性は可否出来ませんが，重大な事故を未然に防ぐためのシステムが確立されています．<br />
            また，未承認術式や危険なエーテル干渉行為は禁止されており、<br />
            これらの行為が確認された場合は、学院規定に基づき厳正な処置が取られます。<br />
            学生の皆さんが安心して学べる環境づくりに、<br />
            私たちは常に取り組んでいます。
        </p>
        </section>

        {/* 結び */}
        <footer style={{ marginTop: "64px" }}>
        <p style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "16px" }}>あなたの未来は、ここから始まります。</p>
        <p>
            アルケイア中央学院は、<br />
            才能だけでなく努力を尊重し、<br />
            すべての学生に可能性を開く場所です。<br />
            ともに学び、ともに成長し、<br />
            あなた自身の道を見つけてください。
        </p>
        </footer>

    </div>
    </div>
    );
}