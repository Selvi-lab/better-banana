"use client";
import { useEffect, useState } from "react";
import { Search, User, Heart, Cart, LeafLogo } from "./Icons";
import { useStore } from "./Store";

// image files ah /public/categories/ folder la podunga
const nav = [
  { name: "Bags", img: "/categories/bags.jpg" },
  { name: "Mats", img: "/categories/mats.jpg" },
  { name: "Décor", img: "/categories/decor.jpg" },
  { name: "Fabrics", img: "/categories/fabrics.jpg" },
  { name: "Yarn", img: "/categories/yarn.jpg" },
  { name: "Stationery", img: "/categories/stationery.jpg" },
];

export default function Header() {
  const { wishlist, cart } = useStore();
  const [stuck, setStuck] = useState(false);
  const [q, setQ] = useState("");
  const [active, setActive] = useState("Bags");

  useEffect(() => {
    const f = () => setStuck(window.scrollY > 40);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);

  const badge =
    "absolute -right-2 -top-2 grid h-4 w-4 place-items-center rounded-full bg-gold text-[9px] font-bold text-white";

  return (
    <header className={`sticky top-0 z-50 bg-cream/95 backdrop-blur transition-shadow duration-300 ${stuck ? "shadow-md" : ""}`}>
      <div className="container-x flex items-center gap-4 py-3 md:gap-8">
        <a href="#" className="flex shrink-0 items-center gap-2.5">
          <span className="grid h-12 w-12 place-items-center rounded-full border-2 border-forest bg-white text-forest transition-transform duration-500 hover:rotate-[360deg]">
            <LeafLogo className="h-7 w-7" />
          </span>
          <span className="leading-none">
            <span className="block font-serif text-[26px] font-bold tracking-wide text-forest">BANANA FIBRE</span>
            <span className="block text-[8px] font-semibold tracking-[.2em] text-forest-light">NATURE IN EVERY THREAD</span>
          </span>
        </a>

        <form onSubmit={(e) => e.preventDefault()} className="relative mx-auto hidden max-w-[400px] flex-1 sm:block">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search for bags, home décor, accessories..."
            className="w-full rounded-full border border-forest/25 bg-white/80 py-2.5 pl-4 pr-10 text-xs outline-none transition focus:border-forest focus:shadow-[0_0_0_3px_rgba(27,82,51,.12)]"
          />
          <button aria-label="Search" className="absolute right-3 top-1/2 -translate-y-1/2 text-forest">
            <Search className="h-4 w-4" />
          </button>
        </form>

        <div className="ml-auto flex items-center gap-5 text-xs font-medium text-forest">
          <a href="#" className="hidden items-center gap-1.5 transition hover:text-gold md:flex">
            <User className="h-5 w-5" />Login
          </a>
          <a href="#" className="relative flex items-center gap-1.5 transition hover:text-gold">
            <span className="relative">
              <Heart className="h-5 w-5" />
              {wishlist.length > 0 && <span key={wishlist.length} className={`${badge} animate-pop`}>{wishlist.length}</span>}
            </span>
            <span className="hidden md:inline">Wishlist</span>
          </a>
          <a href="#" className="relative flex items-center gap-1.5 transition hover:text-gold">
            <span className="relative">
              <Cart className="h-5 w-5" />
              <span key={cart} className={`${badge} animate-pop`}>{cart}</span>
            </span>
            <span className="hidden md:inline">Cart</span>
          </a>
        </div>
      </div>

      {/* Category nav with thumbnail images */}
      <nav className="container-x no-scrollbar flex justify-start gap-6 overflow-x-auto pb-3 pt-1 md:justify-center md:gap-8">
        {nav.map(({ name, img }) => {
          const isActive = active === name;
          return (
            <a
              key={name}
              href="#"
              onClick={() => setActive(name)}
              className={`group flex shrink-0 items-center gap-2 text-sm font-medium transition-colors ${
                isActive ? "text-forest" : "text-forest-dark hover:text-forest"
              }`}
            >
              <img
                src={img}
                alt={name}
                width={32}
                height={32}
                loading="lazy"
                className="h-8 w-8 rounded-md object-cover ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-110"
              />
              <span className="underline-grow">{name}</span>
            </a>
          );
        })}
      </nav>
    </header>
  );
}