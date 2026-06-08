"use client"
import React, { useEffect } from "react"
import {useState} from "react"
import Link from "next/link"

type ToDo={
    id:number,
    title:string,
    memo:string,
};

const test:ToDo[]=[
    {id:1,title:"1つめ",memo:"todoのテスト"},
    {id:2,title:"2つめ",memo:"todoの"},
]

export default function todo(){
    const [todo,setTodo]=useState<ToDo[]>([]);
    
    useEffect(()=>{
        setTodo(test);
    },[]);


    return(
        <main>
            <Link href="/about" 
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
                style={{ display: "inline-block", marginBottom: 14 }}>
                ← Back to about
            </Link>
            <h1>ToDoアプリ</h1>
            <p>現在のメモ</p>
            {todo.map((a) => {
                return(
                    <div key={a.id}>
                        <p>{a.title}</p>
                        <p>{a.memo}</p>
                    </div>
                );
            })

            }

        </main>
    )
}