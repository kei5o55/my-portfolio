"use client";

import { useState } from "react";

export default function ArtLightbox({ src, alt }: { src: string; alt: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => {
          console.log("open!");
          setOpen(true);
        }}
        style={{
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: 12,
          overflow: "hidden",
          background: "rgba(255,255,255,0.06)",
          cursor: "zoom-in",
        }}
      >
        <img src={src} alt={alt} style={{ width: "100%", height: "auto", display: "block" }} />
      </div>

      {open && (
        <div
            onClick={() => setOpen(false)}
            style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)", // 透明度を少し上げる(0.85 -> 0.6)
            backdropFilter: "blur(12px)",  // ★ここで背後をぼかす
            WebkitBackdropFilter: "blur(12px)", // Safari用
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            cursor: "zoom-out",
            padding: 24,
            }}
        >
            <img
            src={src}
            alt={alt}
            style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
            onClick={(e) => e.stopPropagation()}
            />
        </div>
        )}
    </>
  );
}
