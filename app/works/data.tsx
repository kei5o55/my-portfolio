// app/works/data.ts
import React from 'react';

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

    demoUrl: "https://register-3k2l.vercel.app/",
    githubUrl: "https://github.com/kei5o55/register"
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