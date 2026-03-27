"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Outer wrapper — centers the navbar pill */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center">
        <div
          className={`w-full max-w-[700px] rounded-b-[5px] overflow-hidden backdrop-blur-[10px] bg-[#ebebeb94] transition-shadow duration-300 ${scrolled ? "shadow-[0_4px_24px_rgba(26,23,16,0.10)]" : ""
            }`}
        >
          {/* Ticker Row — 3 static equal columns */}
          <div className="border-b border-[#c9c4bb] h-[26px] flex items-center justify-center">
            <Marquee
              speed={40}
              gradient={false}
              className="text-[9px] tracking-[0.15em] uppercase text-[#1c1a14] opacity-70 font-normal"
            >
              <span className="mx-8">Subscribe to our newsletter</span>
              <span className="mx-8">Subscribe to our newsletter</span>
              <span className="mx-8">Subscribe to our newsletter</span>
            </Marquee>
          </div>

          {/* Main Nav Row */}
          <div className="flex items-center justify-between px-5 h-12">
            {/* Brand */}
            <Link
              href={'/'}
              className="text-[1.2rem] font-[300] tracking-[0.12em] uppercase text-[#1c1a14] no-underline"
            >
              <h1>Aurel</h1>
            </Link>

            {/* Nav Links */}
            <div className="flex items-center gap-7">
              <a href="#" className="text-[11px] tracking-[0.04em] text-[#1c1a14] no-underline hover:opacity-40 transition-opacity duration-150 uppercase">
                Shop
              </a>
              <a href="#" className="hidden md:block text-[11px] tracking-[0.04em] text-[#1c1a14] no-underline hover:opacity-40 transition-opacity duration-150 uppercase">
                World
              </a>
              <a href="#" className="text-[11px] tracking-[0.04em] text-[#1c1a14] no-underline hover:opacity-40 transition-opacity duration-150 uppercase">
                Search
              </a>
              <a href="#" className="hidden md:block text-[11px] tracking-[0.04em] text-[#1c1a14] no-underline hover:opacity-40 transition-opacity duration-150 uppercase">
                Updates
              </a>
              <a href="#" className="text-[11px] tracking-[0.04em] text-[#1c1a14] no-underline hover:opacity-40 transition-opacity duration-150 uppercase">
                Wishlist <sup className="text-[7.5px]">(0)</sup>
              </a>
              <a href="#" className="text-[11px] tracking-[0.04em] text-[#1c1a14] no-underline hover:opacity-40 transition-opacity duration-150 uppercase">
                Bag <sup className="text-[7.5px]">(0)</sup>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}