
import Reveal from "./Reveal";
import {
  LeafLogo,
  Leaf,
  Instagram,
  Facebook,
  Youtube,
  Pinterest,
  Pin,
  Phone,
  Mail,
} from "./Icons";

const explore = [
  "All Products",
  "Bags & Totes",
  "Home & Living",
  "Accessories",
  "New Arrivals",
  "Best Sellers",
];

const care = [
  "About Us",
  "Contact Us",
  "Shipping Policy",
  "Return & Refund",
  "Privacy Policy",
  "FAQs",
];

const pay = [
  ["UPI", "bg-white text-forest-dark italic"],
  ["VISA", "bg-white text-blue-800"],
  ["RuPay", "bg-white text-blue-700 italic"],
  ["G Pay", "bg-white text-gray-700"],
  ["COD", "bg-blue-700 text-white"],
];

const socialLinks = [
  {
    Icon: Instagram,
    label: "Instagram",
    url: "https://www.instagram.com",
  },
  {
    Icon: Facebook,
    label: "Facebook",
    url: "https://www.facebook.com",
  },
  {
    Icon: Youtube,
    label: "YouTube",
    url: "https://www.youtube.com",
  },
  {
    Icon: Pinterest,
    label: "Pinterest",
    url: "https://www.pinterest.com",
  },
];

export default function Footer() {
  const heading =
    "mb-4 font-serif text-base font-semibold text-white";

  const link =
    "inline-block text-[13px] text-white/80 transition-all duration-300 hover:translate-x-1 hover:text-gold";

  return (
    <footer className="relative mt-8 overflow-hidden bg-forest text-white">

      {/* Decorative leaves */}
      <Leaf className="pointer-events-none absolute -left-8 bottom-10 hidden h-32 w-32 rotate-12 opacity-20 sm:block" />

      <Leaf className="pointer-events-none absolute -right-8 bottom-5 hidden h-36 w-36 -rotate-12 opacity-20 sm:block" />

      {/* Main footer */}
      <div
        className="
          container-x relative
          grid grid-cols-2
          gap-x-5 gap-y-10
          py-12
          sm:grid-cols-3
          sm:gap-x-8
          lg:grid-cols-[1.4fr_1fr_1fr_1.2fr_1fr]
          lg:gap-8
          lg:py-16
        "
      >

        {/* Brand */}
        <Reveal
          v="up"
          className="
            col-span-2
            flex flex-col items-center text-center
            sm:col-span-2
            lg:col-span-1
            lg:items-start lg:text-left
          "
        >
          <div className="flex items-center gap-3">

            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-forest">
              <LeafLogo className="h-7 w-7" />
            </span>

            <span className="leading-none">
              <span className="block whitespace-nowrap font-serif text-xl font-bold tracking-wide sm:text-2xl">
                BANANA FIBRE
              </span>

              <span className="mt-1 block text-[8px] tracking-[.22em]">
                NATURE IN EVERY THREAD
              </span>
            </span>

          </div>

          <p className="mt-5 max-w-[260px] text-[13px] leading-7 text-white/80">
            Bringing nature closer to your everyday life through
            sustainable banana fibre products.
          </p>

          {/* Social links */}
          <div className="mt-5 flex items-center justify-center gap-5 lg:justify-start">

            {socialLinks.map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="transition duration-300 hover:-translate-y-1 hover:text-gold"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}

          </div>
        </Reveal>

        {/* Explore */}
        <Reveal v="up" delay={100} className="min-w-0">

          <h4 className={heading}>Explore</h4>

          <ul className="space-y-3">
            {explore.map((item) => (
              <li key={item}>
                <a href="#" className={link}>
                  {item}
                </a>
              </li>
            ))}
          </ul>

        </Reveal>

        {/* Customer care */}
        <Reveal v="up" delay={200} className="min-w-0">

          <h4 className={heading}>Customer Care</h4>

          <ul className="space-y-3">
            {care.map((item) => (
              <li key={item}>
                <a href="#" className={link}>
                  {item}
                </a>
              </li>
            ))}
          </ul>

        </Reveal>

        {/* Contact */}
        <Reveal
          v="up"
          delay={300}
          className="col-span-2 min-w-0 sm:col-span-1"
        >

          <h4 className={heading}>Get in Touch</h4>

          <ul className="space-y-4 text-[13px] text-white/85">

            <li className="flex items-start gap-3">
              <Pin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>Tamil Nadu, India</span>
            </li>

            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href="tel:+919876543210" className="break-all hover:text-gold">
                +91 98765 43210
              </a>
            </li>

            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a
                href="mailto:hello@banafibre.com"
                className="break-all hover:text-gold"
              >
                hello@banafibre.com
              </a>
            </li>

          </ul>

        </Reveal>

        {/* Payment */}
        <Reveal
          v="up"
          delay={400}
          className="col-span-2 min-w-0 sm:col-span-1"
        >

          <h4 className={heading}>We Accept</h4>

          <div className="flex flex-wrap gap-2">

            {pay.map(([name, style]) => (
              <span
                key={name}
                className={`
                  rounded px-3 py-2
                  text-[11px] font-bold
                  transition duration-300
                  hover:-translate-y-1
                  ${style}
                `}
              >
                {name}
              </span>
            ))}

          </div>

          <p className="mt-4 max-w-[220px] text-xs leading-6 text-white/60">
            Secure and convenient payment options for your orders.
          </p>

        </Reveal>

      </div>

      {/* Bottom copyright */}
      <div className="relative border-t border-white/15">

        <div
          className="
            container-x
            flex flex-col items-center
            justify-center gap-2
            py-5 text-center
            sm:flex-row sm:justify-between
          "
        >

          <p className="text-[10px] uppercase tracking-wider text-white/70 sm:text-[11px]">
            © 2026 BANANA FIBRE. All rights reserved.
          </p>

          <p className="text-[10px] text-white/70 sm:text-[11px]">
            Made with nature in India.
          </p>

        </div>

      </div>

    </footer>
  );
}
