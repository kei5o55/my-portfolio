"use client"
import React, { useState } from 'react';

export const SecretPage: React.FC = () => {
    const [password, setPassword] = useState('');
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [error, setError] = useState(false);

    // パスワード判定（例として 'gate' に設定）
    const handleUnlock = (e: React.FormEvent) => {
        e.preventDefault();
        if (password.toLowerCase() === 'gate') {
        setIsUnlocked(true);
        setError(false);
        } else {
        setError(true);
        }
    };

    return (
        <div className="min-h-screen bg-[#0d0d0d] text-[#888] font-mono flex flex-col items-center justify-center p-6 select-none">
        <div className="max-w-md w-full text-center space-y-8">
            {/* ヘッダー演出 */}
            <div className="text-xs text-[#333] tracking-widest">
            [ ERR_GATE_UNAUTHORIZED // INDEX: 0x00FC ]
            </div>

            {/* メインメッセージ */}
            {/*<div className="text-sm leading-loose text-[#555] hover:text-[#aaa] transition-colors duration-500">
            <p>境界の向こう側には、何も存在しない。</p>
            <p>
                ただ重なり続ける線と、削ぎ落とされた
                <span className="text-[#333] hover:text-[#4a90e2] cursor-pointer transition-colors px-1">
                言葉
                </span>
                の記憶。
            </p>
            <p>観測されない空間において、構造は永遠に確定しない。</p>
            </div>

            {/* ロック状態 / 解除状態の切り替え */}
            {!isUnlocked ? (
            <form onSubmit={handleUnlock} className="space-y-4 pt-4">
                <div className="relative">
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="ENTER PASSCODE..."
                    className="w-full bg-[#141414] border border-[#222] focus:border-[#4a90e2] text-center text-xs text-[#eee] py-2 px-4 rounded outline-none transition-all placeholder-[#333]"
                />
                </div>

                {error && (
                <p className="text-xs text-red-900/80 tracking-wider">
                    ACCESS DENIED: INVALID PASSCODE
                </p>
                )}
            </form>
            ) : (
            /* 解除された人だけに見えるシークレットコンテンツ */
            <div className="border border-[#222] bg-[#111] p-6 rounded text-left space-y-4 animate-fade-in">
                <div className="text-xs text-[#4a90e2] tracking-wider border-b border-[#222] pb-2">
                &gt; ACCESS GRANTED // SECRET LOG
                </div>
                <p className="text-xs text-[#ccc] leading-relaxed">
                ここに未公開のラフスケッチ、裏設定、限定ギャラリーのリンクなどを配置します。
                </p>
                <div className="pt-2">
                <a
                    href="/gallery/unreleased"
                    className="text-xs text-[#4a90e2] hover:underline"
                >
                    &gt; View Secret Gallery [LINK]
                </a>
                </div>
            </div>
            )}

            {/* 戻るリンク */}
            <div className="pt-8">
            <a
                href="/"
                className="text-xs text-[#222] hover:text-[#444] transition-colors"
            >
                &lt; return to index
            </a>
            </div>
        </div>
        </div>
    );
};

export default SecretPage;