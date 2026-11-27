import Reveal from "./Reveal";
import { LeafLogo, Leaf, Instagram, Facebook, Youtube, Pinterest, Pin, Phone, Mail } from "./Icons";

const explore = ["All Products", "Bags & Totes", "Home & Living", "Accessories", "New Arrivals", "Best Sellers"];
const care = ["About Us", "Contact Us", "Shipping Policy", "Return & Refund", "Privacy Policy", "FAQs"];
const pay = [["UPI", "bg-white text-forest-dark italic"], ["VISA", "bg-white text-blue-800"], ["RuPay", "bg-white text-blue-700 italic"], ["G Pay", "bg-white text-gray-700"], ["COD", "bg-blue-700 text-white"]];

export default function Footer() {
  const h = "mb-4 font-serif text-[15px] font-semibold";
  const link = "text-[13px] text-white/90 transition hover:translate-x-1 hover:text-gold inline-block";
  return (
    <footer className="relative mt-4 overflow-hidden bg-forest text-white">
      <Leaf className="absolute -left-4 bottom-8 h-28 w-28 rotate-12 animate-sway opacity-70" />
      <Leaf className="absolute -right-4 bottom-4 h-32 w-32 -rotate-12 animate-sway opacity-70" />
      <div
  className="
    container-x relative
    grid grid-cols-2
    items-start
    gap-x-4 gap-y-8
    py-10
    sm:grid-cols-3
    sm:gap-8
    lg:grid-cols-[1.4fr_1fr_1fr_1.2fr_1fr]
  "
>

        <Reveal v="up">
          <div className="flex items-center gap-2.5">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-white text-forest"><LeafLogo className="h-7 w-7" /></span>
            <span className="leading-none"><span className="block font-serif text-2xl font-bold tracking-wide">BANANA FIBRE</span><span className="block text-[8px] tracking-[.22em]">NATURE IN EVERY THREAD</span></span>
          </div>
          <p className="mt-4 max-w-[240px] text-[13px] leading-relaxed text-white/90">Bringing nature closer to your everyday life through sustainable banana fibre products.</p>
          <div className="mt-4 flex gap-4">
  <a
    href="https://www.instagram.com"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="transition hover:-translate-y-1 hover:text-gold"
  >
    <Instagram className="h-5 w-5" />
  </a>

  <a
    href="https://www.facebook.com"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
    className="transition hover:-translate-y-1 hover:text-gold"
  >
    <Facebook className="h-5 w-5" />
  </a>

  <a
    href="https://www.youtube.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="YouTube"
    className="transition hover:-translate-y-1 hover:text-gold"
  >
    <Youtube className="h-5 w-5" />
  </a>

  <a
    href="https://www.pinterest.com"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Pinterest"
    className="transition hover:-translate-y-1 hover:text-gold"
  >
    <Pinterest className="h-5 w-5" />
  </a>
</div>
        </Reveal>
        <Reveal v="up" delay={100}><h4 className={h}>Explore</h4><ul className="space-y-2">{explore.map((l) => <li key={l}><a href="#" className={link}>{l}</a></li>)}</ul></Reveal>
        <Reveal v="up" delay={200}><h4 className={h}>Customer Care</h4><ul className="space-y-2">{care.map((l) => <li key={l}><a href="#" className={link}>{l}</a></li>)}</ul></Reveal>
        <Reveal v="up" delay={300}>
          <h4 className={h}>Get in Touch</h4>
          <ul className="space-y-3 text-[13px]">
            <li className="flex items-center gap-2.5"><Pin className="h-4 w-4 text-gold" />Tamil Nadu, India</li>
            <li className="flex items-center gap-2.5"><Phone className="h-4 w-4 text-gold" />+91 98765 43210</li>
            <li className="flex items-center gap-2.5"><Mail className="h-4 w-4 text-gold" /><a href="mailto:hello@BANANA FIBRE.com" className="underline-grow">hello@BANANA FIBRE.com</a></li>
          </ul>
        </Reveal>
        <Reveal v="up" delay={400}>
          <h4 className={h}>WE ACCEPT</h4>
          <div className="flex flex-wrap gap-2">{pay.map(([n, c]) => <span key={n} className={`rounded px-2 py-1 text-[11px] font-bold transition hover:-translate-y-1 ${c}`}>{n}</span>)}</div>
        </Reveal>
      </div>
      <div className="container-x relative border-t border-white/15 py-5 text-center text-[11px] uppercase tracking-wide">© 2026 BANANA FIBRE. All rights reserved. Made with nature in India.</div>
    </footer>
  );
}
