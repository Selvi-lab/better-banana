
import Reveal from "./Reveal";
import Carousel from "./Carousel";
import { arrivals } from "./data";

export default function NewArrivals() {
  return (
    <section className="container-x py-7">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
        <Reveal v="left" className="shrink-0 lg:w-[150px]">
          <h2 className="section-title">New Arrivals</h2>
          <p className="mt-1 text-xs text-forest-dark/80">
            Fresh from our artisans
          </p>
        </Reveal>
        <Reveal v="right" delay={120} className="min-w-0 flex-1">
          <Carousel left step={0.8}>
            {arrivals.map((a, i) => (
              <a
                key={a}
                href="#"
                className="card group relative h-[72px] w-[150px] shrink-0 snap-start overflow-hidden bg-white sm:h-[130px] sm:w-[calc(16.66%-10px)] sm:min-w-[130px]"
              >
                <img
                  src={`/products/${a}`}
                  alt={`New arrival ${i + 1}`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <span className="absolute inset-0 bg-forest/0 transition group-hover:bg-forest/10" />
              </a>
            ))}
          </Carousel>
        </Reveal>
      </div>
    </section>
  );
}
