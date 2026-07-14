"use client";

import { useEffect, useRef } from "react";

export function PictidyDemo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPlayback = () => {
      if (reducedMotion.matches) {
        video.pause();
      } else {
        void video.play().catch(() => undefined);
      }
    };

    syncPlayback();
    reducedMotion.addEventListener("change", syncPlayback);
    return () => reducedMotion.removeEventListener("change", syncPlayback);
  }, []);

  return (
    <video
      ref={videoRef}
      className="pictidyDemoVideo"
      muted
      loop
      playsInline
      controls
      preload="metadata"
      poster="/pictidy/sorting.webp"
      aria-label="Pictidy 从浏览照片、标记待删、双击收藏到结算确认的完整操作演示"
    >
      <source src="/pictidy/flow.mp4" type="video/mp4" />
    </video>
  );
}
