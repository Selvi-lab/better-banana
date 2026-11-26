import { Leaf } from "./Icons";
export default function TopBar() {
  const msg =
    "FREE SHIPPING ON ORDERS ABOVE ₹999  |  MADE WITH NATURE, MADE WITH LOVE";
  return (
    <div className="overflow-hidden bg-forest py-2 text-[11px] font-medium tracking-wide text-white">
      <div className="hidden items-center justify-center gap-3 sm:flex">
        <Leaf className="h-4 w-4" />
        {msg}
        <Leaf className="h-4 w-4 -scale-x-100" />
      </div>
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap sm:hidden">
        {[0, 1].map((i) => (
          <span key={i}>
            {msg}&nbsp;&nbsp;&nbsp;&nbsp;{msg}
          </span>
        ))}
      </div>
    </div>
  );
}
