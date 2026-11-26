import Reveal from "./Reveal";
import Carousel from "./Carousel";
import { Star } from "./Icons";
import { reviews } from "./data";

export default function Testimonials() {
  return (
    <section className="container-x py-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
        <Reveal v="left" className="shrink-0 lg:w-[150px]">
          <h2 className="font-serif text-lg font-bold leading-tight text-forest-dark">
            What Our Customers Say
          </h2>
        </Reveal>
        <Reveal v="up" delay={120} className="min-w-0 flex-1">
          <Carousel step={0.9}>
            {reviews.map((r) => (
              <div
                key={r.n + r.t}
                className="card flex w-[290px] shrink-0 snap-start items-center gap-3 p-2.5 sm:w-[calc(33.33%-8px)] sm:min-w-[260px]"
              >
                <img
                  src={`/images/${r.img}.jpg`}
                  alt={r.n}
                  className="h-[62px] w-[62px] shrink-0 rounded-md object-cover"
                />
                <div>
                  <div className="flex gap-0.5 text-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5" />
                    ))}
                  </div>
                  <p className="mt-1 text-[13px] leading-snug text-forest-dark">
                    {r.t}
                  </p>
                  <p className="mt-1 text-[12px] font-medium text-forest-dark/80">
                    {r.n}
                  </p>
                </div>
              </div>
            ))}
          </Carousel>
        </Reveal>
      </div>
    </section>
  );
}
