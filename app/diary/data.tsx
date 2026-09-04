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
        id:"1",
        title:"titele",
        content: (
        <div >
            <section className="space-y-4">
            <h2 className="text-lg md:text-xl font-light tracking-wide text-zinc-900 border-b border-zinc-200/80 pb-2">
                概要
            </h2>
            <p className="text-sm md:text-base">
                動的ルーティングのテストデータです。どう？
            </p>
            </section>
        </div>
        ),
        date:"2026",
    }];