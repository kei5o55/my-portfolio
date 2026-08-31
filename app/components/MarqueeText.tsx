"use client"
export const MarqueeText = () => {
  const text = "★ WELCOME TO KEI5OT.COM ★ CHECK MY PORTFOLIO!! ☺☺ ★ ";

  return (
    <div className="group flex w-full overflow-hidden border-y-2 border-black bg-black py-1.5 font-dot text-xs font-bold text-green-400 select-none">
      <div className="flex shrink-0 animate-[marquee_12s_linear_infinite] whitespace-nowrap group-hover:[animation-play-state:paused]">
        <span>{text}</span>
        <span>{text}</span>
      </div>
      <div className="flex shrink-0 animate-[marquee_12s_linear_infinite] whitespace-nowrap group-hover:[animation-play-state:paused]" aria-hidden="true">
        <span>{text}</span>
        <span>{text}</span>
      </div>

      {/* インラインでkeyframesを定義（設定ファイル編集不要） */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};