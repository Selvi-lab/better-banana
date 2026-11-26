import Reveal from "./Reveal";
import { Arrow } from "./Icons";

const banners = [
  {
    img: "fabrics",
    title: "Eco-Friendly Fashion",
    sub: "Sustainable style, naturally",
    cta: "SHOP FABRICS",
    pre: "FLAT",
    off: 25,
    v: "left",
  },
  {
    img: "decor",
    title: "Home Décor, Naturally",
    sub: "Bring nature indoors",
    cta: "SHOP DÉCOR",
    pre: "UP TO",
    off: 30,
    v: "right",
  },
];

export default function PromoBanners() {
  return (
    <section className="container-x grid gap-5 py-6 md:grid-cols-2">
      {banners.map((b, i) => (
        <Reveal key={b.title} v={b.v} delay={i * 120}>
          <div className="group relative flex min-h-[170px] items-center overflow-hidden rounded-xl bg-[#e9c88f] shadow-md">
            <img
              src={`/banners/${b.img}.jpg`}
              alt=""
              className="absolute inset-0 h-full w-full object-cover transition duration-[1200ms] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f7ead0]/60 to-[#f7ead0]" />
            <div className="relative ml-auto flex w-[75%] items-center justify-between gap-3 py-3 pr-4 sm:w-[60%]">
              <div>
                <h3 className="font-serif text-[24px] font-bold leading-tight text-forest">
                  {b.title}
                </h3>
                <p className="text-xs text-forest-dark">{b.sub}</p>
                <a
                  href="#"
                  className="mt-2 inline-flex items-center gap-1.5 rounded bg-forest px-3 py-1.5 text-[10px] font-bold tracking-wide text-white transition hover:bg-gold"
                >
                  {b.cta}{" "}
                  <Arrow className="h-3 w-3 transition group-hover:translate-x-1" />
                </a>
              </div>
              <div className="grid h-[72px] w-[72px] shrink-0 animate-pulseRing place-items-center rounded-full border-2 border-dashed border-leaf bg-forest text-center text-white">
                <div>
                  <div className="text-[8px] font-semibold">{b.pre}</div>
                  <div className="font-serif text-[22px] font-bold leading-none">
                    {b.off}%
                  </div>
                  <div className="text-[9px] font-bold">OFF</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </section>
  );
}
