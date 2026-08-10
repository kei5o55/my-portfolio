"use client";
import Link from "next/link";
import { useState, useRef } from "react";

export default function Home() {
  const contactSectionRef = useRef<HTMLElement>(null);
  
  const scrollToContact = () => {
    contactSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const email = "info@kei5ot.com";
  const [copied, setCopied] = useState(false);
  
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  };

  return (
    <main className="min-h-screen bg-[#fafafa] text-zinc-800 selection:bg-zinc-800 selection:text-white px-6 py-12 md:py-20 max-w-4xl mx-auto font-sans relative overflow-hidden">
      {/* 繊細な背景グラデーション / ノイズ感のある光 */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-slate-200/40 via-purple-100/30 to-transparent rounded-full blur-3xl -z-10" />
      <div className="pointer-events-none absolute top-1/3 -right-40 w-96 h-96 bg-gradient-to-bl from-blue-100/40 via-sky-100/20 to-transparent rounded-full blur-3xl -z-10" />

      {/* ヘッダー */}
      <header className="mb-12 border-b border-zinc-200 pb-8 flex flex-col gap-2">
        <h1 className="text-4xl md:text-5xl font-light tracking-widest text-zinc-900 flex items-center gap-3">
          Portfolio
          <span className="w-2 h-2 rounded-full bg-sky-400/80 animate-pulse" />
        </h1>
        <p className="text-xs text-zinc-400 tracking-wider font-mono uppercase">
          Illustration & Development Works
        </p>
      </header>

      {/* 自己紹介 & アクション */}
      <section className="mb-16 flex flex-wrap gap-4 items-center">
        <Link
          href="/about"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-300/80 bg-white/60 text-zinc-700 text-sm tracking-wide transition-all duration-300 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 backdrop-blur-sm shadow-sm hover:shadow-md"
        >
          More about me <span className="text-xs">→</span>
        </Link>
        <button
          onClick={scrollToContact}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-300/80 bg-white/60 text-zinc-700 text-sm tracking-wide transition-all duration-300 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 backdrop-blur-sm shadow-sm hover:shadow-md cursor-pointer"
        >
          Contact <span className="text-xs">↓</span>
        </button>
      </section>

      {/* 作品セクション */}
      <section className="mb-20">
        <div className="mb-8">
          <h2 className="text-2xl font-light tracking-wide text-zinc-900 mb-2">Works</h2>
          <p className="text-sm text-zinc-500 leading-relaxed font-light">
            力を入れている制作物を掲載しています。
            <br />
            GitHubのReadmeには機能詳細・工夫点などを、
            <br />
            「Detail Page →」には制作物に対する思いや開発背景を簡単に記載していますので、ぜひ両方ご覧ください。
          </p>
        </div>

        <div className="space-y-6">
          {/* Artwork */}
          <div className="group relative border border-zinc-200/90 rounded-2xl p-6 md:p-8 bg-white/70 backdrop-blur-md transition-all duration-300 hover:border-zinc-400/80 hover:shadow-xl hover:shadow-zinc-200/50">
            <h3 className="text-xl font-medium tracking-wide text-zinc-900 mb-3">Artwork</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-pink-50 text-pink-600 border border-pink-200/60">
                Illustrations
              </span>
            </div>
            <p className="text-sm text-zinc-600 leading-relaxed font-light mb-6">
              イラスト作品集。
              <br />
              感覚や手癖を大切にして描いています。オリジナルキャラクターや二次創作を中心に制作しています。
              <br />
              <span className="text-xs text-zinc-400">※高解像度画像を掲載しているため、読み込みに時間がかかる場合があります。</span>
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/art"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-300 bg-white text-zinc-800 text-sm transition-all duration-200 hover:bg-zinc-900 hover:text-white hover:border-zinc-900"
              >
                Illustrations →
              </Link>
            </div>
          </div>

          {/* Rejistella */}
          <div className="group relative border border-zinc-200/90 rounded-2xl p-6 md:p-8 bg-white/70 backdrop-blur-md transition-all duration-300 hover:border-zinc-400/80 hover:shadow-xl hover:shadow-zinc-200/50">
            <h3 className="text-xl font-medium tracking-wide text-zinc-900 mb-3">Rejistella <span className="text-xs font-normal text-zinc-400">( 仮称 ) / レジアプリ</span></h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-blue-50 text-blue-600 border border-blue-200/60">TypeScript</span>
              <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-sky-50 text-sky-600 border border-sky-200/60">React</span>
              <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-indigo-50 text-indigo-600 border border-indigo-200/60">Vite</span>
              <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-purple-50 text-purple-600 border border-purple-200/60">Web App</span>
              <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100 text-slate-700 border border-slate-300/60">PWA</span>
              <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-emerald-50 text-emerald-600 border border-emerald-200/60">実運用中</span>
              <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-amber-50 text-amber-600 border border-amber-200/60">個人開発</span>
            </div>
            <p className="text-sm text-zinc-600 leading-relaxed font-light mb-6">
              同人即売会向けのレジアプリケーション。
              <br />
              実運用を通して機能を改善し、長期的な視点での育成を継続しています。
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://register-3k2l.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-zinc-300 bg-white text-zinc-800 text-sm transition-all duration-200 hover:bg-zinc-900 hover:text-white hover:border-zinc-900"
              >
                ▶ DEMO
              </a>
              <a
                href="https://github.com/kei5o55/register"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-zinc-300 bg-white text-zinc-800 text-sm transition-all duration-200 hover:bg-zinc-900 hover:text-white hover:border-zinc-900"
              >
                GitHubリポジトリ
              </a>
              <Link
                href="/works/rejistella"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-zinc-300 bg-white text-zinc-800 text-sm transition-all duration-200 hover:bg-zinc-900 hover:text-white hover:border-zinc-900"
              >
                Detail Page →
              </Link>
            </div>
          </div>

          {/* 作業記録ツール */}
          <div className="group relative border border-zinc-200/90 rounded-2xl p-6 md:p-8 bg-white/70 backdrop-blur-md transition-all duration-300 hover:border-zinc-400/80 hover:shadow-xl hover:shadow-zinc-200/50">
            <h3 className="text-xl font-medium tracking-wide text-zinc-900 mb-3">作業記録ツール</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-blue-50 text-blue-600 border border-blue-200/60">TypeScript</span>
              <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-sky-50 text-sky-600 border border-sky-200/60">React</span>
              <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-100 text-zinc-800 border border-zinc-300/60">Next.js</span>
              <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-rose-50 text-rose-600 border border-rose-200/60">Ruby</span>
              <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-purple-50 text-purple-600 border border-purple-200/60">Web App</span>
              <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-emerald-50 text-emerald-600 border border-emerald-200/60">実運用中</span>
              <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-amber-50 text-amber-600 border border-amber-200/60">個人開発</span>
            </div>
            <p className="text-sm text-zinc-600 leading-relaxed font-light mb-6">
              イラスト版GitHubを目指した作業記録ツール。
              <br />
              現在はNext.jsへの移行とスケジュール管理機能を強化し、創作の継続を技術で支える、日常使いのアプリとして開発を進めています。
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://worklog-app-ruby.vercel.app/projects"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-zinc-300 bg-white text-zinc-800 text-sm transition-all duration-200 hover:bg-zinc-900 hover:text-white hover:border-zinc-900"
              >
                ▶ DEMO
              </a>
              <a
                href="https://github.com/kei5o55/worklog-app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-zinc-300 bg-white text-zinc-800 text-sm transition-all duration-200 hover:bg-zinc-900 hover:text-white hover:border-zinc-900"
              >
                GitHubリポジトリ
              </a>
              <Link
                href="/works/worklog"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-zinc-300 bg-white text-zinc-800 text-sm transition-all duration-200 hover:bg-zinc-900 hover:text-white hover:border-zinc-900"
              >
                Detail Page →
              </Link>
            </div>
          </div>

          {/* 簡易ペイントツール */}
          <div className="group relative border border-zinc-200/90 rounded-2xl p-6 md:p-8 bg-white/70 backdrop-blur-md transition-all duration-300 hover:border-zinc-400/80 hover:shadow-xl hover:shadow-zinc-200/50">
            <h3 className="text-xl font-medium tracking-wide text-zinc-900 mb-3">簡易ペイントツール</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-100 text-zinc-700 border border-zinc-300/60">C言語</span>
              <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-lime-50 text-lime-700 border border-lime-200/60">SDL2</span>
              <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100 text-slate-700 border border-slate-300/60">Desktop App</span>
              <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-amber-50 text-amber-600 border border-amber-200/60">個人開発</span>
            </div>
            <p className="text-sm text-zinc-600 leading-relaxed font-light mb-6">
              一番初めに開発したツールです。
              <br />
              デスクトップアプリとして制作したため、ブラウザ上でのデモは用意していませんが、GitHubにソースコードを公開しています。
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/kei5o55/DrawApp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-zinc-300 bg-white text-zinc-800 text-sm transition-all duration-200 hover:bg-zinc-900 hover:text-white hover:border-zinc-900"
              >
                GitHubリポジトリ
              </a>
              <Link
                href="/works/drawapp"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-zinc-300 bg-white text-zinc-800 text-sm transition-all duration-200 hover:bg-zinc-900 hover:text-white hover:border-zinc-900"
              >
                Detail Page →
              </Link>
            </div>
          </div>

          {/* ポートフォリオサイト */}
          <div className="group relative border border-zinc-200/90 rounded-2xl p-6 md:p-8 bg-white/70 backdrop-blur-md transition-all duration-300 hover:border-zinc-400/80 hover:shadow-xl hover:shadow-zinc-200/50">
            <h3 className="text-xl font-medium tracking-wide text-zinc-900 mb-3">ポートフォリオサイト</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-sky-50 text-sky-600 border border-sky-200/60">React</span>
              <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-100 text-zinc-800 border border-zinc-300/60">Next.js</span>
              <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-blue-50 text-blue-600 border border-blue-200/60">TypeScript</span>
              <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-cyan-50 text-cyan-600 border border-cyan-200/60">Tailwind CSS</span>
            </div>
            <p className="text-sm text-zinc-600 leading-relaxed font-light mb-6">
              このサイトです。
              <br />
              Next.jsを用いた初めての開発を通じ、技術習得と創作世界観の構築を両立させています。単なるポートフォリオに留まらず、自身の作品の一つとしてアップデートを続けていきます。
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/kei5o55/my-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-zinc-300 bg-white text-zinc-800 text-sm transition-all duration-200 hover:bg-zinc-900 hover:text-white hover:border-zinc-900"
              >
                GitHubリポジトリ
              </a>
              <Link
                href="/works/portfolio"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-zinc-300 bg-white text-zinc-800 text-sm transition-all duration-200 hover:bg-zinc-900 hover:text-white hover:border-zinc-900"
              >
                Detail Page →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact セクション */}
      <section ref={contactSectionRef} className="mb-20 scroll-mt-12">
        <h2 className="text-2xl font-light tracking-wide text-zinc-900 mb-6">Contact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Direct Contact */}
          <div className="border border-zinc-200/90 rounded-2xl p-6 bg-white/70 backdrop-blur-md flex flex-col justify-between">
            <div>
              <p className="text-xs uppercase font-mono tracking-wider text-zinc-400 mb-2">Direct Email</p>
              <p className="text-lg md:text-xl font-mono text-zinc-800 break-all mb-6">
                {email}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-100">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-1 px-4 py-2 rounded-lg border border-zinc-300 bg-white text-zinc-800 text-xs transition-all duration-200 hover:bg-zinc-900 hover:text-white hover:border-zinc-900"
              >
                メールを送る
              </a>
              <button
                onClick={handleCopy}
                className={`inline-flex items-center gap-1 px-4 py-2 rounded-lg border text-xs transition-all duration-200 cursor-pointer ${
                  copied
                    ? "bg-zinc-800 text-white border-zinc-800"
                    : "bg-white text-zinc-800 border-zinc-300 hover:bg-zinc-900 hover:text-white hover:border-zinc-900"
                }`}
              >
                {copied ? "Copied!" : "Copy"}
              </button>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 px-4 py-2 rounded-lg border border-zinc-300 bg-white text-zinc-800 text-xs transition-all duration-200 hover:bg-zinc-900 hover:text-white hover:border-zinc-900"
              >
                Commission →
              </Link>
            </div>
          </div>

          {/* Marshmallow */}
          <div className="border border-zinc-200/90 rounded-2xl p-6 bg-white/70 backdrop-blur-md flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-medium tracking-wide text-zinc-900 mb-2">お便り</h3>
              <p className="text-sm text-zinc-600 leading-relaxed font-light mb-6">
                感想とか質問とか、簡単なメッセージはマシュマロでくれると嬉しいです。
                <br />
                大体ツイートで返信します。
              </p>
            </div>
            <div className="text-right pt-4 border-t border-zinc-100">
              <Link
                href="https://marshmallow-qa.com/fti1k8ni3gu5g8t?t=C2uolO&utm_medium=url_text&utm_source=promotion"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-4 py-2 rounded-lg border border-zinc-300 bg-white text-zinc-800 text-xs transition-all duration-200 hover:bg-zinc-900 hover:text-white hover:border-zinc-900"
              >
                マシュマロ →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Links セクション */}
      <section className="pt-8 border-t border-zinc-200">
        <h2 className="text-xs uppercase font-mono tracking-widest text-zinc-400 mb-4">Links</h2>
        <ul className="flex flex-wrap gap-6 text-sm font-light">
          <li>
            <a
              href="https://github.com/kei5o55"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-zinc-900 underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-900 transition-all"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.pixiv.net/users/16743124"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-zinc-900 underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-900 transition-all"
            >
              pixiv
            </a>
          </li>
          <li>
            <a
              href="https://X.com/kei5ot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-zinc-900 underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-900 transition-all"
            >
              X (旧Twitter)
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}