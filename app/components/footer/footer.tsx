"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-[#000]/90 flex flex-col overflow-hidden">

      {/* Upper section — tagline left, nav right */}
      <div className="flex items-start justify-between px-8 pt-24 pb-24">

        {/* Tagline — bottom left */}
        <div className="flex flex-col leading-[1.15]">
          <h2 className="text-[#fff] text-[4rem] font-[400]">
            Wear what
          </h2>
          <h2 className="text-[#fff] text-[4rem] font-[400]">
            defines you.
          </h2>
        </div>

        {/* Nav — 3 columns right */}
        <div className="flex gap-16">
          <div className="flex flex-col gap-3">
            <a href="#" className="text-[#fff] text-[1.3rem] hover:opacity-50 transition-opacity primary uppercase">Home</a>
            <a href="#" className="text-[#fff] text-[1.3rem] hover:opacity-50 transition-opacity primary uppercase">About</a>
            <a href="#" className="text-[#fff] text-[1.3rem] hover:opacity-50 transition-opacity primary uppercase">Shop</a>
          </div>
          <div className="flex flex-col gap-3">
            <a href="#" className="text-[#fff] text-[1.3rem] hover:opacity-50 transition-opacity primary uppercase">REFUND POLICY</a>
            <a href="#" className="text-[#fff] text-[1.3rem] hover:opacity-50 transition-opacity primary uppercase">SHIPPING & RETURNS</a>
            <a href="#" className="text-[#fff] text-[1.3rem] hover:opacity-50 transition-opacity primary uppercase">FAQ</a>
          </div>
          <div className="flex flex-col gap-3">
            <a href="#" className="text-[#fff] text-[1.3rem] hover:opacity-50 transition-opacity primary uppercase">Facebook</a>
            <a href="#" className="text-[#fff] text-[1.3rem] hover:opacity-50 transition-opacity primary uppercase">Instagram</a>
            <a href="#" className="text-[#fff] text-[1.3rem] hover:opacity-50 transition-opacity primary uppercase">WhatsApp</a>
          </div>
        </div>

      </div>

      {/* Hairline divider */}
      <div className="w-full border-t border-[#e8ddd2]/20" />

      {/* Legal bar */}
      <div className="flex items-center justify-between px-8 py-4">
        <span className="text-[#e8ddd2]/50 text-[11px] uppercase">
          © 2026 Core Atelier. All rights reserved.
        </span>
        <div className="flex items-center gap-7">
          <a href="#" className="text-white/70 text-[11px] hover:text-[#fff] transition-colors uppercase">Privacy Policy</a>
          <a href="#" className="text-white/70 text-[11px] hover:text-[#fff] transition-colors uppercase">Terms of Service</a>
          <a href="#" className="text-white/70 text-[11px] hover:text-[#fff] transition-colors uppercase">Cookie Settings</a>
        </div>
      </div>

      {/* Massive brand name — bleeds off bottom edge */}
      <div className="w-full overflow-hidden py-[1.5rem] leading-[1] flex items-end justify-between">
        <h3 className="text-[#fff] uppercase text-[20rem] tracking-[-0.02em] leading-[.8] whitespace-nowrap pl-2">
          Aurel
        </h3>

         <button
              className="bg-white py-[.9rem] px-8 rounded-[.3rem] general-sans font-[600]  text-black/70 uppercase text-[.9rem] tracking-[0.15em] transition-all duration-300 cursor-pointer hover:bg-[#8c2923] hover:text-white"
            >
            Back to top
        </button>
      </div>

    </footer>
  );
}