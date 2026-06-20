"use client"
import Link from "next/link"
import {useState} from "react"

export  default function page(){
    const email = 'info@kei5ot.com'; // 設定したアドレス
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
        await navigator.clipboard.writeText(email);
        setCopied(true);
        
        // 2秒後に「Copied!」から元の表示に戻す
        setTimeout(() => {
            setCopied(false);
        }, 2000);
        } catch (err) {
        console.error('Failed to copy email: ', err);
        }
    }

    return(
        <main style={{ padding: 32, maxWidth: 900, margin: "0 auto" }}>
            <h1 style={{ fontSize: 32, marginBottom: 8 }}>
                Contact
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
            <div style={{border: "1px solid #000000",borderRadius: 8,padding: 24,lineHeight : 1.8,}}>
                <p style={{fontSize:24}}>Email : info@kei5ot.com</p>
                <div className="py-4">
                    <a href="mailto:info@kei5ot.com" className="rounded bg-blue-500 px-2 py-2 text-white cursor-pointer">
                    メールを送る
                    </a>
                    <button
                        onClick={handleCopy}
                        className={`rounded bg-blue-500  px-4 py-2 text-white text-sm font-medium rounded-md transition-all duration-200 cursor-pointer ml-3 ${
                        copied
                            ? 'bg-green-600 text-white'
                            : 'bg-blue-500 hover:bg-gray-200 text-white'
                        }`}
                    >
                        {copied ? 'Copied!' : 'Copy'}
                    </button>
                </div>
                
            </div>
        </main>
    );
}