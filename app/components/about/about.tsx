"use client";

import Link from "next/link";

export default function About() {
  return (
    <section className="relative w-full bg-[#8c2923] overflow-hidden pt-[12rem] pb-[5rem]">
      <div className="px-10 flex items-center justify-center h-full flex-col gap-[3rem] w-full">
        <h1 className="text-[5rem] tracking-[-0.01em] text-white">
          Our pieces are sustainable in more ways than one. It’s not just down to the materials we use, but they’re transformable, meaning there’s never just one way to wear them
        </h1>

        <div className="flex w-full justify-end items-end">
          <div className="w-[500px] flex items-start justify-start flex-col gap-[1.5rem]">
            <p className=" text-white/60 uppercase">
              Every piece in our collection is shaped by hand, guided by decades
              of craft, and finished to endure a lifetime. We believe jewellery
              is not merely worn — it is carried. Through milestones, memories,
              and the quiet moments that define who we are.

            </p>

            <Link
              href="/"
              className="bg-white hover:bg-[#111] hover:text-white transition-[.4] py-[.9rem] px-8 flex items-start rounded-[.3rem] text-black/70 uppercase text-[.9rem] tracking-[0.15em] transition-all duration-300 cursor-pointer"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}