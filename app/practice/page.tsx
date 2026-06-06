"use client";

import {useEffect, useState} from "react";
import Image from "next/image"

interface Illustration {
    id: number;
    title: string;
    author: string;
    imageUrl: string;
    likes: number;
    tags:string[];
}

type illust={
    id:number;
    title:string;
    author:string;
    imageUrl:string;
}


const MOCK_DATA: illust[]=[
    {id:1,title:"タイトル１",author:"説明",imageUrl:"/image/1.jpg",},
    {id:2,title:"タイトル２",author:"説明２",imageUrl:"/image/2.jpg",},
    {id:3,title:"タイトル３",author:"説明３",imageUrl:"/image/3.jpg",}
];

export default function Home() {
    const [count, setCount] = useState(0);
    const [Illust,setIllust] = useState<illust[]>([]);
    const [load,setload] = useState(true);
    const [error,setError] =useState<string|null>(null);
    const increment=()=> setCount(count + 1);

    useEffect(()=>{
        fetch("http://localhost:3000/api/v1/posts")
            .then(res => {
                if (!res.ok) {
                    throw new Error("取得失敗");
                }

                return res.json();
            })
            .then(data => {
                console.log(data)
                const formatted:illust[]=data.map((post:any) => ({
                    id:post.id,
                    title:post.title,
                    author:post.description,
                    imageUrl:post.image_url
                }))
                console.log(formatted)
                setIllust(formatted); 
                setload(false)
            })
            .catch(err => {
                console.error(err);
                setError("データ取得に失敗しました。モックデータを表示します。");
                setIllust(MOCK_DATA);
            })
            .finally(() => {
                setload(false);
        });
    },[]);

    if(load){
        return(
            <div>読み込み中....</div>
        );
    }
    
    
    
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="flex flex-1 w-full  flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
            <p>オッス</p>
            <p>{error}</p>
            {/*3列のままでも全体の横幅が広がったので1枚あたりがかなり大きく*/}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
                {Illust.map((a) => {
                    return (
                        <div key={a.id}>
                            <div className="aspect-[4/3] bg-zinc-100 dark:bg-white/5 relative overflow-hidden rounded-md w-full">
                                <Image 
                                    className="object-cover"
                                    src={a.imageUrl ?? MOCK_DATA[0].imageUrl}
                                    alt={a.title ?? "無題"}
                                    fill
                                    unoptimized
                                />
                            </div>
                            <div style={{ fontWeight: 700 }}>
                                {a.title}
                            </div>
                        </div>
                    );
                })}
            </div>
            {/*<Image src={MOCK_DATA[0]?.imageUrl} alt="image" width={100} height={100} style={{ objectFit: "cover" }}></Image>*/}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={increment}>
                加算されるボタン
            </button>
            <p>{count}</p>
            {/*<p>{JSON.stringify(Illust)}</p>*/}
            
        </main>
        </div>
    );
}