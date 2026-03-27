"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const slides = [
  "https://arozjewelry.com/themes/Arozjewelry_2/assets/img/home/gravure_image_2.jpeg",
  "https://images.unsplash.com/photo-1573408301185-9519f94815b1?w=1800&q=80",
  "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=1800&q=80",
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % 3), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden font-sans">

      {/* Slide Backgrounds */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${active === 0 ? "opacity-100" : "opacity-0"} bg-[url('https://framerusercontent.com/images/FpJkmcO1nccrgnuOzf2HY1gd9kc.png')]`}
      />
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${active === 1 ? "opacity-100" : "opacity-0"} bg-[url('https://framerusercontent.com/images/aP67aArB7bl4xAny84m7tnlNg.png')]`}
      />
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${active === 2 ? "opacity-100" : "opacity-0"} bg-[url('https://framerusercontent.com/images/4z5AootUChh2XDNZW0NMzXO2LI.png')]`}
      />

      {/* Bottom gradient for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 z-[1]" />

      {/* UI Layer */}
      <div className="absolute inset-0 z-[2]">

        {/* SLIDE NUMBER 01 — far left, vertically centered */}
        <h3
          onClick={() => setActive(0)}
          className={`absolute left-6 top-1/2 -translate-y-1/2 text-[1.2rem] tracking-[0.04em] cursor-pointer transition-colors duration-300 ${active === 0 ? "text-white/90" : "text-white/50"}`}
        >
          01
        </h3>

        {/* SLIDE NUMBER 02 — center, vertically centered */}
        <h3
          onClick={() => setActive(1)}
          className={`absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-[1.2rem] tracking-[0.04em] cursor-pointer transition-colors duration-300 ${active === 1 ? "text-white/90" : "text-white/50"}`}
        >
          02
        </h3>

        {/* SLIDE NUMBER 03 — right of center, vertically centered */}
        <h3
          onClick={() => setActive(2)}
          className={`absolute right-[200px] top-1/2 -translate-y-1/2 text-[1.2rem] tracking-[0.04em] cursor-pointer transition-colors duration-300 ${active === 2 ? "text-white/90" : "text-white/50"}`}
        >
          03
        </h3>

        {/* SCROLL — far right, vertically centered */}
        <h3 className="absolute right-6 top-1/2 -translate-y-1/2 text-white/75 text-[1.2rem]  tracking-[0.06em]">
          Scroll
        </h3>

        {/* BOTTOM LEFT — CTA */}
        <div className="absolute bottom-10 w-full">
          <div className="flex items-end justify-between px-[2rem]">
            <div>
              <h1
                // href="#"
                className="block text-white uppercase tracking-[0.03em] text-[6rem] leading-none no-underline"
              >
                JEWELLERY MADE TO
              </h1>
              <h1 className="block text-white uppercase tracking-[0.03em] text-[6rem] leading-none">
                BE REMEMBERED
              </h1>
            </div>

            <Link
              href="/"
              className="bg-white py-[.9rem] px-8 rounded-[.3rem] flex items-start text-black/70 uppercase text-[.9rem] tracking-[0.15em] transition-all duration-300 cursor-pointer hover:bg-[#8c2923] hover:text-white"
            >
              Shop now
            </Link>
          </div>
        </div>


      </div>
    </section>
  );
}