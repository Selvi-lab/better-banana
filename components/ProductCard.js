
"use client";

import { Heart, Star } from "./Icons";
import { useStore } from "./Store";

const imgSrc = (img) => {
  if (!img) return "/placeholder.svg";

  let s = img.replace(/^\/?public\//, "/");

  if (!s.startsWith("/") && !/^https?:/.test(s)) {
    s = `/products/${s}`;
  }

  if (!/\.(jpe?g|png|webp|avif|svg)$/i.test(s)) {
    s += ".jpg";
  }

  return s;
};

export default function ProductCard({ p, compact = false }) {
  const { wishlist, toggleWish, addToCart } = useStore();
  const liked = wishlist.includes(p.id);

  return (
    <article
      className={`card group relative flex h-[175px] items-center gap-3 overflow-hidden rounded-2xl p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:gap-4 sm:p-5 ${
        compact
          ? "mx-auto w-full min-w-0 max-w-[600px]"
          : "w-[290px] min-w-[255px] shrink-0 snap-start"
      }`}
    >
      {/* Product Image */}
      <div className="h-[105px] w-[105px] shrink-0 overflow-hidden rounded-xl bg-cream sm:h-[120px] sm:w-[120px]">
        <img
          src={imgSrc(p.img)}
          alt={p.name}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/placeholder.svg";
          }}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      {/* Product Details */}
      <div className="min-w-0 flex-1 pr-4">
        <h3 className="line-clamp-3 text-[13px] font-semibold leading-snug text-forest-dark sm:text-base">
          {p.name}
        </h3>

        {p.rating && (
          <div className="mt-1 flex items-center gap-1 text-xs text-forest-dark/70">
            <span className="flex text-gold">
              <Star />
            </span>
            {p.rating}
            {p.reviews && <span>({p.reviews})</span>}
          </div>
        )}

        <div className="mt-2 flex flex-wrap items-baseline gap-2">
          <span className="text-base font-bold text-forest-dark">
            ₹{p.price.toLocaleString("en-IN")}
          </span>

          <span className="text-xs text-forest-dark/50 line-through">
            ₹{p.old.toLocaleString("en-IN")}
          </span>

          <span className="rounded bg-sage px-1.5 py-0.5 text-[10px] font-bold text-forest">
            {p.off}% OFF
          </span>
        </div>

        <button
          onClick={addToCart}
          className="mt-2 text-xs font-semibold text-gold transition hover:text-forest-dark"
        >
          + Add to cart
        </button>
      </div>

      {/* Wishlist */}
      <button
        aria-label="Wishlist"
        onClick={() => toggleWish(p.id)}
        className={`absolute right-3 top-3 transition hover:scale-125 ${
          liked ? "text-red-500" : "text-forest/40"
        }`}
      >
        <span
          key={String(liked)}
          className={liked ? "inline-block animate-pop" : ""}
        >
          <Heart className="h-5 w-5" filled={liked} />
        </span>
      </button>
    </article>
  );
}
