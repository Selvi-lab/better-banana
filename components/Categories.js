import Reveal from "./Reveal";
import { categories } from "./data";

export default function Categories() {
  return (
    <section id="categories" className="container-x py-7">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
        <Reveal v="left" className="shrink-0 lg:w-[150px]">
          <h2 className="section-title">Shop by<br />Category</h2>
          <p className="mt-1 text-xs text-forest-dark/90">Find your perfect match</p>
        </Reveal>
        <div className="grid flex-1 grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((c, i) => (
            <Reveal key={c.n} v="up" delay={i * 90}>
              <a href="#" className="group relative block overflow-hidden rounded-lg bg-gradient-to-b from-sage to-[#c9dcae] text-center shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                <span className="absolute right-2 top-2 text-forest/70 transition group-hover:text-red-500">♡</span>
                <div className="flex h-[100px] items-center justify-center overflow-hidden px-2 pt-3">
                  <img src={`/categories/${c.img}.jpg`} alt={c.n} className="h-full w-auto max-w-full object-contain mix-blend-multiply transition duration-500 group-hover:scale-110 group-hover:-rotate-2" />
                </div>
                <div className="pb-2.5 pt-1.5">
                  <div className="text-[14px] font-semibold text-forest-dark/100">{c.n}</div>
                  <div className="text-[12px] text-forest-dark/90">{c.s}</div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
