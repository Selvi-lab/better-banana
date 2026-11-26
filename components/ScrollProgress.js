"use client";
import { useEffect, useState } from "react";
export default function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const f = () => { const h = document.documentElement; setP((h.scrollTop / (h.scrollHeight - h.clientHeight || 1)) * 100); };
    f(); window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return <div className="fixed left-0 top-0 z-[60] h-[3px] bg-gold transition-[width] duration-100" style={{ width: `${p}%` }} />;
}
