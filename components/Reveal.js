"use client";
import { useEffect, useRef, useState } from "react";

const hidden = {
  up: "translateY(24px)",
  left: "translateX(-32px)",
  right: "translateX(32px)",
  zoom: "scale(0.85)",
};

export default function Reveal({
  children,
  v = "up",
  delay = 0,
  wipe = false,
  className = "",
}) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reveal = () => setShow(true);

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          reveal();
          io.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -5% 0px" }
    );
    io.observe(el);

    const t = setTimeout(reveal, 2000); // safety: never stay hidden

    return () => {
      io.disconnect();
      clearTimeout(t);
    };
  }, []);

  const style = {
    transition: `opacity 700ms ease ${delay}ms, transform 700ms ease ${delay}ms, clip-path 900ms ease ${delay}ms`,
    opacity: show ? 1 : 0,
    transform: show ? "none" : hidden[v] ?? hidden.up,
    ...(wipe
      ? { clipPath: show ? "inset(0 0 0 0)" : "inset(0 100% 0 0)" }
      : {}),
  };

  return (
    <div ref={ref} className={className}>
      <div style={style}>{children}</div>
    </div>
  );
}