import React from "react"

export type Diary = {
    id: string;          // URL用（例: "dia-portrait"）
    title: string;
    content: React.ReactNode;
    date: string;          // "2026-02-09"
    tags?: string[];        // 例: ["MISORIA", "キャラ", "立ち絵"]
    description?: string;
};

export const diary: Diary[] = [
    {
        id: "1",
        title: "ニートKochi / kei5ot：創作の原点と山籠もり",
        date: "2026-03-05",
        tags: ["爆笑"],
        description: "個人サイトと即売会を主軸に置く理由と、創作への考えについての記録。",
        content: (
        <div className="space-y-8 text-zinc-700 leading-relaxed">
            {/* セクション1 */}
            <section className="space-y-4">
            <h2 className="text-lg md:text-xl font-light tracking-wide text-zinc-900 border-b border-zinc-200/80 pb-2">
                個人サイトと即売会という原点
            </h2>
            <p className="text-sm md:text-base">
                FANBOXの記事でも少し触れたけれど、昔の絵描きって今みたいにSNSが無くて、個人サイトと即売会くらいしか作品発表の場が無かったらしい。
            </p>
            </section>

            {/* セクション2 */}
            <section className="space-y-4">
            <h2 className="text-lg md:text-xl font-light tracking-wide text-zinc-900 border-b border-zinc-200/80 pb-2">
                「評価されるため」ではなく「理想を描くため」に
            </h2>
            <p className="text-sm md:text-base">
                最近思うのが、自分って別に「絵が伸びてほしい」とかはあんまりなくて、ただ「自分の理想とする絵が描けるように上手くなりたい」って気持ちのほうが圧倒的に強い。
            </p>
            <p className="text-sm md:text-base">
                「伸びたいから上手くなりたい」ではなく、純粋な技術と美学の探求。それを突き詰めて考えたときに、自分はSNSの波に流されるよりも、個人サイトと即売会をメインにした活動スタイルのほうがしっくり来るんじゃないかと感じた。
            </p>
            </section>

            {/* セクション3 */}
            <section className="space-y-4">
            <h2 className="text-lg md:text-xl font-light tracking-wide text-zinc-900 border-b border-zinc-200/80 pb-2">
                山籠もりのような美学
            </h2>
            <p className="text-sm md:text-base">
                Xに絵をあげずこの方針にするのは、「不特定多数の目に触れない、もしかしたら描いた作品が誰の目にも付くことなんて無いのかもしれない」という環境下で、それでも自分は情熱を注いで描けるのか？という問いに対する自分なりのアンサーでもある。
            </p>
            <p className="text-sm md:text-base">
                （当時の絵描きはそんな大層なこと考えてなかったと思うけど笑）
            </p>
            <p className="text-sm md:text-base italic text-zinc-500 pt-2">
                感覚的には、静かに山に籠もって一人で土を捏ね続ける陶芸家みたいなノリに近いのかもしれない。
            </p>
            </section>
        </div>
        ),
    },
];