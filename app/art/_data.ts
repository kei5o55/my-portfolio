export type ArtWork = {
  slug: string;          // URL用（例: "dia-portrait"）
  title: string;
  date: string;          // "2026-02-09"
  tags: string[];        // 例: ["MISORIA", "キャラ", "立ち絵"]
  image: string;         // public配下のパス（例: "/art/dia.png"）
  description?: string;
};

export const artworks: ArtWork[] = [
  {
    slug: "annna-portrait",
    title: "annna / Portrait",
    date: "2026-02-09",
    tags: ["ファンアート"],
    image: "/art/sample1.webp",
    description: "CHUNITHMファンアート",
  },
  {
    slug: "somunia-illustration",
    title: "somunia / illustration",
    date: "2026-02-09",
    tags:["ファンアート"],
    image: "/art/sample3.webp",
    description: "somunia 楽曲モチーフファンアートイラスト\n liberateという楽曲をイメージしています。オススメの楽曲なのでぜひ聴いてみてください。",
  },
  {
    slug: "white-illustration",
    title: "white / illustration",
    date: "2026-02-09",
    tags:["オリジナル","眼鏡"],
    image: "/art/sample4.webp",
    description: "オリジナルイラスト",
  },
  {
    slug: "white2-illustration",
    title: "white2 / illustration",
    date: "2026-02-09",
    tags:["オリジナル","眼鏡"],
    image: "/art/sample.webp",
    description: "オリジナルイラスト2",
  },
  {
    slug: "embark-illustration",
    title: "embark / illustration",
    date: "2026-02-09",
    tags:["ファンアート"],
    image: "/art/sample5.webp",
    description: "CHUNITHMファンアートイラスト",
  },
  {
    slug: "amor_fati",
    title: "amor_fati / artwork",
    date: "2026-02-10",
    tags:["ファンアート","造形"],
    image: "/art/amor_fati.webp",
    description: "CHUNITHMファンアート造形作品\n シーリングスタンプと便箋をデザインして、実際にスタンプを作成しました。即売会でポストカードを入れたりしたいなと思っています。",
  },
  {
    slug: "mire",
    title: "mire / illustration",
    date: "2026-05-17",
    tags:["オリジナル"],
    image: "/art/mire.webp",
    description: "オリジナル・関西コミティアでポストカードとして頒布したイラスト作品",
  },
  {
    slug: "ethos",
    title: "ethos / illustration",
    date: "2026-05-17",
    tags:["オリジナル","眼鏡"],
    image: "/art/ethos.webp",
    description: "オリジナル・関西コミティアでポストカード・画集表紙として頒布したイラスト作品\n Annnaと構図が一緒で恥ずかしい",
  },
  {
    slug: "megane",
    title: "megane / illustration",
    date: "2026-05-17",
    tags:["オリジナル","眼鏡"],
    image: "/art/megane.webp",
    description: "オリジナル・デカいめがねは可愛い",
  },
  {
    slug: "mekakure",
    title: "mekakure / illustration",
    date: "2026-05-17",
    tags:["オリジナル"],
    image: "/art/mekakure.webp",
    description: "オリジナル・メカクレは可愛いすぎる。",
  },
  {
    slug: "anna2",
    title: "anna2 / illustration",
    date: "2026-05-11",
    tags:["ファンアート","anna"],
    image: "/art/anna2.webp",
    description: "CHUNITHMファンアート",
  },
  {
    slug: "renas",
    title: "renas / rough",
    date: "2026-05-17",
    tags:["ファンアート","ラフ"],
    image: "/art/renas.webp",
    description: "CHUNITHMファンアート",
  },
  {
    slug: "funny_anna",
    title: "funny anna",
    date: "2026-05-09",
    tags:["ファンアート","anna"],
    image: "/art/funny_anna.webp",
    description: "かわいい",
  },
  {
    slug: "setup_wizard",
    title: "setup_wizard / rough",
    date: "2026-05-19",
    tags:["オリジナル","ラフ"],
    image: "/art/setup_wizard.webp",
    description: "アルケイア中央学院 戦術科３年 ネア連星。\n 優れたエーテル操作技術と実績・使用術式から「虹の魔法使い」と他学生から呼ばれている。\n７色のエーテルを扱える数少ない人間",
  },
  {
    slug: "o_anna",
    title: "o_anna / illustration",
    date: "2026-04-09",
    tags:["ファンアート","anna"],
    image: "/art/o_anna.webp",
    description: "CHUNITHMファンアート",
  },
  {
    slug: "wing",
    title: "wing / illustration",
    date: "2026-04-12",
    tags:["オリジナル"],
    image: "/art/wing.webp",
    description: "黒いドレスを描きたかった。",
  },
  {
    slug: "anna3",
    title: "anna3 / illustration",
    date: "2026-05-04",
    tags:["ファンアート","anna"],
    image: "/art/anna3.webp",
    description: "アンナ（コメントないかも）",
  },
  {
    slug: "anna_summer",
    title: "anna_summer / illustration",
    date: "2026-05-29",
    tags:["ファンアート","anna"],
    image: "/art/summer.jpg",
    description: "チュウニズム１０周年で描いたファンアート",
  },
  {
    slug: "anna_megane",
    title: "annna_でかメガネ部",
    date: "2026-06-19",
    tags:["ファンアート","anna","眼鏡"],
    image: "/art/5.png",
    description:"アンナ・マルグレーテでかメガネ部"
  },
  {
    slug: "tsunoko",
    title: "漢ゴスロリアーツ",
    date: "2026-06-19",
    tags:["オリジナル","眼鏡"],
    image: "/art/tuno.png",
    description:"つのっこ漢ゴスロリアーツのつもり"
  },
  {
    slug: "annna_back",
    title: "anna_back / illustration",
    date: "2026-06-30",
    tags:["ファンアート","anna"],
    image: "/art/annnadayo.png",
    description:"アンナの後ろ姿、フェチの絵です"
  },
  {
    slug: "anne_4",
    title: "anna4 / illustration",
    date: "2026-06-30",
    tags:["ファンアート","anna"],
    image: "/art/enne.png",
    description:"アンナの顔、いつもと違う描き方の試し"
  },
  {
    slug: "anna_art",
    title: "Oanna. / illustration",
    date: "2026-06-30",
    tags:["ファンアート","anna"],
    image: "/art/ennnetyen.png",
    description:"聖女様の御姿を絵にしたためました。\n美しく威厳ある紫水晶を宿した瞳。儚さを湛えた髪。荒れ果てた世界の中、民の希望の光たる運命をその小さな身に背負い、祈りを捧げ続ける彼女に、どうか安寧のあらんことを。"
  },
  {
    slug: "kemomimi",
    title: "anna_けもみみ / illustration",
    date: "2026-06-30",
    tags:["ファンアート","anna"],
    image: "/art/kemomimi.png",
    description:"ケモミミ聖女と大宇宙のヒミツ!?編"
  },
  {
    slug: "Oanna2",
    title: "Oanna2 / illustration",
    date: "2026-06-30",
    tags:["ファンアート","anna"],
    image: "/art/えんぴつ.png",
    description:"いつもと違う描き方の試し２．こういう全身を可愛くデザイン調に書けるようになりたい"
  },
  {
    slug: "tikutiku_linestep",
    title: "tikutiku_linestep / illustration",
    date: "2026-9-17",
    tags:["オリジナル"],
    image: "/art/4.png",
    description:"ちくちくちくちく\n時給1200円で世界と世界を縫うバイト募集中"
  },
  {
    slug: "bugs_life",
    title: "bugs_life / illustration",
    date: "2026-09-16",
    tags:["オリジナル"],
    image: "/art/2.png",
    description:"バグとバグの日々\nいつまでたっても僕らはガキでいたいだけなのに"
  },
  {
    slug: "ar_tis",
    title: " ar_tis / illustration",
    date: "2026-09-17",
    tags:["オリジナル","ar_tis","goth"],
    image: "/art/15.png",
    description:"オリキャラのアールティスちゃんです。色白に描きすぎたかも"
  },
  {
    slug: "sinku",
    title: " 真紅 / illustration",
    date: "2026-09-17",
    tags:["ファンアート"],
    image: "/art/d.png",
    description:"ローゼンメイデン見た。\n真紅いい女すぎる。"
  },
  {
    slug: "goth_doll",
    title: " goth_doll / illustration",
    date: "2026-09-17",
    tags:["オリジナル","goth"],
    image: "/art/data.png",
    description:"気品があって威厳もあるけど、自由が無い感じの美少女って\nなんか良いなぁ。"
  },
  {
    slug: "ar_tis2",
    title: " ar_tis2 / illustration",
    date: "2026-09-17",
    tags:["オリジナル","ar_tis"],
    image: "/art/14.png",
    description:"アールティスちゃん２\n腰に紋章あると良いと思う。エロいので"
  },
  {
    slug: "ar_tis3",
    title: " ar_tis3 / illustration",
    date: "2026-09-17",
    tags:["オリジナル","ar_tis"],
    image: "/art/16.png",
    description:"あるてぃーーすちゃん３\nだよぅ"
  },
  {
    slug: "Authority",
    title: " Authority / illustration",
    date: "2026-09-17",
    tags:["オリジナル","眼鏡"],
    image: "/art/3.png",
    description:"宝剣って装飾目的でしかなく、権威の象徴らしい。\n角と翼の生えた少女、権威に守られてるのか縛られているのか"
  },
  {
    slug: "black_bone",
    title: " black_bone / Rough",
    date: "2026-09-17",
    tags:["オリジナル","ラフ"],
    image: "/art/hyousi.png",
    description:"せっかくなのでラフも"
  },
  {
    slug: "scythe_of_goth",
    title: " scythe_of_goth / Rough",
    date: "2026-09-17",
    tags:["オリジナル","goth","ラフ"],
    image: "/art/rt.png",
    description:"正方形風\nこれでラフやばい"
  },
  {
    slug: "white_rose",
    title: " white_rose / illustration",
    date: "2026-09-17",
    tags:["オリジナル"],
    image: "/art/練１.png",
    description:"ちゃんと肌を塗りまして。\nセクシーで綺麗な雰囲気を描きたい"
  },
  {
    slug: "chigiri",
    title: " chigiri / illustration",
    date: "2026-09-22",
    tags:["オリジナル"],
    image: "/art/hyousi.png",
    description:"意味ありげな印みたいな手の表情って\n良いなぁ。"
  },
  {
    slug: "chigiri_face",
    title: " chigiri_御顔 / illustration",
    date: "2026-09-22",
    tags:["オリジナル"],
    image: "/art/t4.png",
    description:"久しぶりに目をシッカリ描いた。\nカワイー"
  },
];
