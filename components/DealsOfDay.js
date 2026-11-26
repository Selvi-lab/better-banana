"use client";
import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import Carousel from "./Carousel";
import ProductCard from "./ProductCard";
import { deals } from "./data";

function useCountdown(start = 8 * 3600 + 42 * 60 + 15) {
  const [s, setS] = useState(start);
  useEffect(() => {
    const t = setInterval(() => setS((x) => (x > 0 ? x - 1 : start)), 1000);
    return () => clearInterval(t);
  }, [start]);
  return [Math.floor(s / 3600), Math.floor((s % 3600) / 60), s % 60].map((n) =>
    String(n).padStart(2, "0"),
  );
}

export default function DealsOfDay() {
  const [h, m, s] = useCountdown();
  return (
    <section className="container-x py-7">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
        <Reveal v="left" className="shrink-0 lg:w-[200px]">
          <h2 className="section-title">Deals of the Day</h2>
          <p className="mt-1 text-xs text-forest-dark/80">
            Grab these amazing offers!
          </p>
          <div className="mt-3 flex items-center gap-1.5">
            {[
              [h, "Hours"],
              [m, "Mins"],
              [s, "Secs"],
            ].map(([v, l], idx) => (
              <div key={l} className="flex items-center gap-1.5">
                <div className="w-[46px] rounded-md bg-forest py-1 text-center text-white shadow">
                  <div
                    key={v}
                    className="animate-pop font-serif text-lg font-bold leading-tight"
                  >
                    {v}
                  </div>
                  <div className="text-[8px]">{l}</div>
                </div>
                {idx < 2 && <span className="font-bold text-forest">.</span>}
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal
          v="right"
          delay={150}
          className="min-w-0 flex-1 rounded-xl border border-forest/10 bg-white/60 px-3 py-2 shadow-sm"
        >
          <Carousel step={0.9}>
            {deals.map((d) => (
              <ProductCard key={d.id} p={d} />
            ))}
          </Carousel>
        </Reveal>
      </div>
    </section>
  );
}
