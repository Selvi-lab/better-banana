
import Reveal from "./Reveal";
import ProductCard from "./ProductCard";
import { best } from "./data";

export default function BestSellers() {
  return (
    <section className="container-x w-full py-10 sm:py-12">

      {/* Heading */}
      <div className="mb-6 flex w-full flex-col items-center text-center lg:mb-8 lg:items-start lg:text-left">
        <Reveal v="center">
          <h2 className="section-title">
            Best Sellers
          </h2>

          <p className="mt-2 text-sm text-forest-dark/90 sm:text-base">
            Loved by our customers
          </p>
        </Reveal>
      </div>

      {/* Product Grid */}
      <div className="mx-auto grid w-full grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4">

        {best.map((p, i) => (
          <Reveal
            key={p.id}
            v="up"
            delay={i * 110}
            className="w-full"
          >
            <ProductCard p={p} compact />
          </Reveal>
        ))}

      </div>
    </section>
  );
}
