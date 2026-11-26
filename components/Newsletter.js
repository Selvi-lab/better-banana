"use client";
import { useState } from "react";
import Reveal from "./Reveal";
import { Leaf } from "./Icons";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  return (
    <section className="container-x py-4">
      <Reveal
        v="zoom"
        className="relative overflow-hidden rounded-2xl bg-forest px-5 py-4 text-white shadow-lg"
      >
        <Leaf className="absolute -right-2 -top-1 h-16 w-16 rotate-45 animate-sway opacity-80" />
        <div className="relative flex flex-col items-center gap-4 md:flex-row md:gap-8 md:pl-16">
          <Leaf className="absolute -left-1 top-0 hidden h-14 w-14 animate-float md:block" />
          <div className="md:w-[30%]">
            <h3 className="font-serif text-lg font-semibold">
              Join Our Green Community
            </h3>
            <p className="text-[11px] text-white/80">
              Get exclusive offers and updates on sustainable living.
            </p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email) setDone(true);
            }}
            className="flex w-full flex-1 gap-0 md:max-w-[560px]"
          >
            {done ? (
              <p className="animate-heroText rounded bg-white/15 px-4 py-2.5 text-sm">
                Thank you for subscribing! 🌿
              </p>
            ) : (
              <>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="min-w-0 flex-1 rounded-l bg-cream px-4 py-2.5 text-xs text-forest-dark outline-none"
                />
                <button className="rounded-r bg-gold px-6 text-xs font-bold tracking-wide transition hover:bg-[#d97d1c] active:scale-95">
                  SUBSCRIBE
                </button>
              </>
            )}
          </form>
        </div>
      </Reveal>
    </section>
  );
}
