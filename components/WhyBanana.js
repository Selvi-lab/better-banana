import Reveal from "./Reveal";
import { Leaf, LeafLogo, Hands, Recycle, People } from "./Icons";

const items = [
  [LeafLogo, "Eco-Friendly", "Gentle on Earth"],
  [Hands, "Handmade", "Supports Artisans"],
  [Recycle, "Biodegradable", "Returns to Nature"],
  [People, "Supports Rural", "Empowerment"],
];

export default function WhyBanana() {
  return (
    <section className="container-x py-5">
      <Reveal wipe className="relative overflow-hidden rounded-2xl shadow-inner">
        {/* Desktop la image ratio match, so full image theriyum */}
        <div className="relative min-h-[350px] lg:min-h-0 lg:aspect-[1670/941]">
          {/* Background image */}
          <img
            src="/banners/fibre-process.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full select-none object-cover object-top"
            draggable={false}
          />

          {/* Readability gradient: mela image theriyum, kezha cream */}
          <div className="absolute inset-0 bg-gradient-to-t from-cream-dark via-cream-dark/70 to-transparent" />

          {/* Content: bottom la */}
          <div className="absolute inset-x-0 bottom-0 px-4 pb-5 pt-10 sm:px-6">
            <Leaf className="pointer-events-none absolute -left-5 bottom-10 hidden h-16 w-16 -rotate-45 animate-sway text-forest/80 sm:block" />
            <Leaf className="pointer-events-none absolute -right-3 bottom-10 h-16 w-16 rotate-45 animate-sway" />

            <div className="relative flex flex-col items-center gap-4 lg:flex-row lg:gap-0">
              <div className="text-center lg:w-[34%] lg:pl-10 lg:text-left">
                <h2 className="font-serif text-4xl font-bold text-forest">
                  Why Banana Fiber?
                </h2>
                <p className="mt-1 text-xs text-forest-dark/85">
                  A sustainable choice for a better tomorrow
                </p>
              </div>

              <div className="grid w-full flex-1 grid-cols-2 gap-y-4 sm:grid-cols-4 lg:px-6">
                {items.map(([Ic, t, s], i) => (
                  <Reveal
                    key={t}
                    v="zoom"
                    delay={300 + i * 120}
                    className="border-l border-forest/25 px-2 text-center"
                  >
                    <div className="mx-auto mb-1 grid h-9 w-9 place-items-center text-forest transition-transform duration-500 hover:scale-125 hover:rotate-12">
                      <Ic className="h-8 w-8" />
                    </div>
                    <div className="text-[13px] font-semibold text-forest-dark">{t}</div>
                    <div className="text-[11px] text-forest-dark/90">{s}</div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}