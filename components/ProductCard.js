"use client";
import { Heart, Star } from "./Icons";
import { useStore } from "./Store";

const imgSrc = (img) => {
  if (!img) return "/placeholder.svg";
  let s = img.replace(/^\/?public\//, "/");
  if (!s.startsWith("/") && !/^https?:/.test(s)) s = `/products/${s}`;
  if (!/\.(jpe?g|png|webp|avif|svg)$/i.test(s)) s += ".jpg";
  return s;
};

export default function ProductCard({ p, compact = false }) {
  const { wishlist, toggleWish, addToCart } = useStore();
  const liked = wishlist.includes(p.id);

  return (
    <article
      className={`card group relative flex h-[175px] shrink-0 snap-start items-center gap-4 p-5 ${
        compact
          ? "w-[255px]"
          : "w-[290px] min-w-[255px] sm:w-[calc(25%-9px)]"
      }`}
    >
      {/* Image: 100 x 100 */}
      <div className="h-[100px] w-[100px] shrink-0 overflow-hidden rounded-lg bg-cream">
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

      {/* Details */}
      <div className="min-w-0 flex-1">
        <h3 className="line-clamp-3 text-[12px] font-semibold leading-snug text-forest-dark">
          {p.name}
        </h3>

        {p.rating && (
          <div className="mt-0.5 flex items-center gap-1 text-[10px] text-forest-dark/70">
            <span className="flex text-gold">
              <Star />
            </span>
            {p.rating}
            {p.reviews && <span>({p.reviews})</span>}
          </div>
        )}

        <div className="mt-1 flex flex-wrap items-baseline gap-1.5">
          <span className="text-[15px] font-bold text-forest-dark">
            ₹{p.price.toLocaleString("en-IN")}
          </span>
          <span className="text-[10px] text-forest-dark/50 line-through">
            ₹{p.old.toLocaleString("en-IN")}
          </span>
          <span className="rounded bg-sage px-1 text-[9px] font-bold text-forest">
            {p.off}% OFF
          </span>
        </div>

        <button
          onClick={addToCart}
          className="mt-1.5 translate-y-1 text-[10px] font-semibold text-gold opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        >
          + Add to cart
        </button>
      </div>

      {/* Wishlist */}
      <button
        aria-label="Wishlist"
        onClick={() => toggleWish(p.id)}
        className={`absolute right-2 top-2 transition hover:scale-125 ${
          liked ? "text-red-500" : "text-forest/40"
        }`}
      >
        <span
          key={String(liked)}
          className={liked ? "inline-block animate-pop" : ""}
        >
          <Heart className="h-4 w-4" filled={liked} />
        </span>
      </button>
    </article>
  );
}