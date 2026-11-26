"use client";
import { useEffect, useState } from "react";
import { Arrow, ChevL, ChevR, Leaf } from "./Icons";

const slides = [
  {
    eyebrow: "THE ART OF NATURAL LIVING",
    h: ["A little closer", "to nature."],
    p: "Discover thoughtfully handcrafted banana fibre essentials for a more beautiful, conscious lifestyle.",
    off: 40,
  },
  {
    eyebrow: "HANDMADE BY ARTISANS",
    h: ["Woven with", "love & care."],
    p: "Every bag, mat and basket carries the story of the rural artisans who made it.",
    off: 30,
  },
  {
    eyebrow: "SUSTAINABLE STYLE",
    h: ["Fashion that", "feels good."],
    p: "Eco-friendly fabrics and accessories that are gentle on you and on the earth.",
    off: 25,
  },
  {
    eyebrow: "HOME DÉCOR, NATURALLY",
    h: ["Bring nature", "indoors."],
    p: "Baskets, trays and mats that add warmth and texture to every corner of your home.",
    off: 35,
  },
];

export default function Hero() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((x) => (x + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, [paused]);
  const go = (d) => setI((x) => (x + d + slides.length) % slides.length);
  const s = slides[i];
  return (
    <section
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative overflow-hidden bg-gradient-to-r from-cream via-[#eaf0d6] to-[#a8c07a]"
    >
      {/* basket image with soft fade on its left edge */}
      <div
        className="absolute inset-y-0 right-0 w-full md:w-[70%]"
        style={{
          WebkitMaskImage: "linear-gradient(to right, transparent, #000 40%)",
          maskImage: "linear-gradient(to right, transparent, #000 40%)",
        }}
      >
        <img
          key={i}
          src="/banners/hero.jpg"
          alt="Banana fibre tote"
          className="h-full w-full animate-[heroText_1s_ease-out_both] object-cover object-center opacity-left"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/40 to-cream/10 md:hidden" />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-cream via-cream/40 to-transparent md:block" />
      </div>
      <Leaf className="absolute bottom-3 left-[44%] hidden h-10 w-10 animate-sway md:block" />

      <div className="container-x relative flex min-h-[270px] items-center md:min-h-[330px]">
        <div key={i} className="max-w-[420px] py-10">
          <p className="animate-heroText text-xs font-semibold tracking-[.12em] text-forest-dark [animation-delay:.05s]">
            {s.eyebrow}
          </p>
          <h1 className="mt-2 animate-heroText font-serif text-[40px] font-bold leading-[1.05] text-forest md:text-[52px] [animation-delay:.15s]">
            {s.h[0]}
            <br />
            {s.h[1]}
          </h1>
          <p className="mt-4 max-w-[340px] animate-heroText text-sm leading-relaxed text-forest-dark/90 [animation-delay:.3s]">
            {s.p}
          </p>
          <a
            href="#categories"
            className="btn-gold mt-5 animate-heroText [animation-delay:.45s]"
          >
            Explore Collection <Arrow className="h-4 w-4" />
          </a>
        </div>

        <div
          key={`b${i}`}
          className="absolute left-[42%] top-1/2 hidden -translate-y-1/2 animate-float md:block"
        >
          <div className="grid h-[104px] w-[104px] place-items-center rounded-full border-[3px] border-dashed border-leaf bg-forest text-center text-white shadow-xl">
            <div>
              <div className="text-[10px] font-semibold tracking-widest">
                UP TO
              </div>
              <div className="font-serif text-[34px] font-bold leading-none">
                {s.off}%
              </div>
              <div className="text-[13px] font-bold tracking-wider">OFF</div>
            </div>
          </div>
        </div>
      </div>

      <button
        aria-label="Previous slide"
        onClick={() => go(-1)}
        className="absolute left-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-forest-dark/90 text-white transition hover:scale-110 hover:bg-gold"
      >
        <ChevL className="h-5 w-5" />
      </button>
      <button
        aria-label="Next slide"
        onClick={() => go(1)}
        className="absolute right-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-forest-dark/90 text-white transition hover:scale-110 hover:bg-gold"
      >
        <ChevR className="h-5 w-5" />
      </button>
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2.5">
        {slides.map((_, n) => (
          <button
            key={n}
            aria-label={`Slide ${n + 1}`}
            onClick={() => setI(n)}
            className={`h-3 rounded-full border border-white transition-all duration-300 ${n === i ? "w-7 bg-white" : "w-3 bg-transparent"}`}
          />
        ))}
      </div>
    </section>
  );
}
