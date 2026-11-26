"use client";
import { useRef } from "react";
import { ChevL, ChevR } from "./Icons";

export default function Carousel({ children, className = "", step = 0.8, left = false }) {
  const ref = useRef(null);
  const go = (d) => ref.current?.scrollBy({ left: d * ref.current.clientWidth * step, behavior: "smooth" });
  const btn = "absolute top-1/2 z-10 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full border border-forest/20 bg-white text-forest shadow transition hover:scale-110 hover:bg-forest hover:text-white";
  return (
    <div className="relative min-w-0 flex-1">
      {left && <button aria-label="Previous" onClick={() => go(-1)} className={`${btn} -left-3`}><ChevL className="h-4 w-4" /></button>}
      <div ref={ref} className={`no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth py-2 ${className}`}>{children}</div>
      <button aria-label="Next" onClick={() => go(1)} className={`${btn} -right-3`}><ChevR className="h-4 w-4" /></button>
    </div>
  );
}
