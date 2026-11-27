import Reveal from "./Reveal";
import ProductCard from "./ProductCard";
import { best } from "./data";

export default function BestSellers() {
  return (
    <section className="container-x py-7">
      <div className="flex flex-col-2 gap-5 lg:flex-row lg:items-center">
        <Reveal v="center" className="shrink-0 lg:w-[150px]">
          <h2 className="section-title">Best Sellers</h2>
          <p className="mt-1 text-xs text-forest-dark/90">
            Loved by our customers
          </p>
        </Reveal>
        <div className="grid flex-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {best.map((p, i) => (
            <Reveal key={p.id} v="up" delay={i * 110}>
              <ProductCard p={p} compact />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
