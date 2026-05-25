// app/works/data.ts
import React from 'react';
import Image from "next/image";

export type Work = {
    slug: string;
    title: string;
    subtitle: string;
    content: React.ReactNode; // string ではなく ReactNode にする
    demoUrl?: string;
    githubUrl?: string;
};

export const worksData: Work[] = [
  {
    slug: "rejistella",
    title: "RejiStella / レジアプリ",
    subtitle: "同人即売会向けレジアプリ / React + Viteで制作中",

    content: (
      <div style={{border: "1px solid #000000",borderRadius: 8,padding: 24,lineHeight : 1.8,}}>
        <h2 style={{ fontSize: '20px', borderBottom: '1px solid #ddd', paddingBottom: '8px' }}>概要</h2>
        同人即売会向けのレジアプリケーションです。初めてTypescriptを使用して制作しました。
          開発当初、web技術について知識が無かったため、書籍やLLMを用いて学びながら開発を進めました。<br />
          インターネットを通じて気軽に作品を展示できる現代において、同人即売会（コミケとか）のようなフィジカル現場の価値は今までよりも高まっているのではないかと考えています。
          データではなく画集・ポストカード・グッズのような作品として実際に創作を共有できる、そういった価値をより高められたらいいなと思っています。<br /><br />
          <h2 style={{ fontSize: '20px', borderBottom: '1px solid #ddd', paddingBottom: '8px' }}>実運用を通して</h2>
          一度関西コミティアで実際に運用しました。自分の制作物だというコトもありとても楽しく、またユーザビリティの面で改善すべき点や新たな機能のアイデアが多く見つかりましたが、改善に向けてワクワクしながら取り組めています。<br />
          <div
            style={{
              marginTop: 32,
              display: "flex",
              gap: 16,
            }}
          >
            <div
              style={{
                width: 300,
                height: 200,
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Image
                src="/image/1.jpg"
                alt="実運用風景"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

            <div
              style={{
                width: 300,
                height: 200,
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Image
                src="/image/2.jpg"
                alt="実運用風景"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          技術的に高度なことはできていないのですが、欲しいと思った機能を上手く実現でき、現在でもある程度の完成度がある状態なんじゃないかなと思っています。<br />
        
        {/* 画像を入れる例
        <div style={{ margin: '24px 0' }}>
          <img 
            src="https://github.com/user-attachments/assets/96d82b42-8ba6-4252-9756-0383e8a5d3a5" 
            alt="実運用風景" 
            style={{ width: '100%', borderRadius: '8px', border: '1px solid #eee' }} 
          />
          <p style={{ fontSize: '12px', textAlign: 'center', opacity: 0.6 }}>関西コミティアでの実運用風景</p>
        </div>
          */}
      </div>
    ),

    demoUrl: "https://register-3k2l.vercel.app/",
    githubUrl: "https://github.com/kei5o55/register"
  },
  {
        slug: "worklog",
        title: "作業記録ツール",
        subtitle: "イラスト版Github風 / 現在はViteでミニマルに制作していますが、今後Next.jsに移行予定",

        content: (
      <div>
        <h2 style={{ fontSize: '20px', borderBottom: '1px solid #ddd', paddingBottom: '8px' }}>概要</h2>
        <p>READMEから抜粋した内容や、実運用レポートをここに書きます。</p>
        
        {/* 画像を入れる例
        <div style={{ margin: '24px 0' }}>
          <img 
            src="https://github.com/user-attachments/assets/96d82b42-8ba6-4252-9756-0383e8a5d3a5" 
            alt="実運用風景" 
            style={{ width: '100%', borderRadius: '8px', border: '1px solid #eee' }} 
          />
          <p style={{ fontSize: '12px', textAlign: 'center', opacity: 0.6 }}>関西コミティアでの実運用風景</p>
        </div>
          */}

        <h2 style={{ fontSize: '20px', marginTop: '32px' }}>こだわり</h2>
        <p>オフライン環境でも動作するよう、IndexedDBを活用しています。</p>
      </div>
    ),

        demoUrl: "https://worklog-app-ruby.vercel.app/projects",
        githubUrl: "https://github.com/kei5o55/worklog-app"
    },
    {
        slug: "drawapp",
        title: "簡易ペイントツール",
        subtitle: "超簡易的なペイントツール / C言語を使用したデスクトップアプリ",

        content: (
      <div>
        <h2 style={{ fontSize: '20px', borderBottom: '1px solid #ddd', paddingBottom: '8px' }}>概要</h2>
        <p>READMEから抜粋した内容や、実運用レポートをここに書きます。</p>
        
        {/* 画像を入れる例
        <div style={{ margin: '24px 0' }}>
          <img 
            src="https://github.com/user-attachments/assets/96d82b42-8ba6-4252-9756-0383e8a5d3a5" 
            alt="実運用風景" 
            style={{ width: '100%', borderRadius: '8px', border: '1px solid #eee' }} 
          />
          <p style={{ fontSize: '12px', textAlign: 'center', opacity: 0.6 }}>関西コミティアでの実運用風景</p>
        </div>
          */}

        <h2 style={{ fontSize: '20px', marginTop: '32px' }}>こだわり</h2>
        <p>オフライン環境でも動作するよう、IndexedDBを活用しています。</p>
      </div>
    ),

        demoUrl: undefined,
        githubUrl: "https://github.com/kei5o55/DrawApp"
    }
];