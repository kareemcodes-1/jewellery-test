"use client";

import Link from "next/link";

export default function About() {
  return (
    <section className="relative w-full bg-[#8c2923] overflow-hidden pt-[12rem] pb-[5rem]">
      <div className="px-10 flex items-center justify-center h-full flex-col gap-[3rem] w-full">
        <h1 className="text-[5rem] uppercase tracking-[-0.01em] text-white">
          Worn by over{" "} 10,000,000 {" "}
          people worldwide. Each piece turns a moment into a memory,
          a gift into a legacy.
        </h1>

        <div className="flex flex-col w-full justify-end ml-auto items-end gap-[1rem]">
            <p className="w-[500px] text-white uppercase">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, magni tempora voluptatibus ea modi praesentium dolorem. Neque quia eum dolore, quos in fugit, animi autem cumque libero debitis magni facere.
        </p>

        <Link href="/" className="bg-[#fff] py-[1rem] text-black w-[500px] uppercase text-[1rem]  !font-[400] hover:text-white/90 transition-[.4] cursor-pointer text-left">Read more</Link>
        </div>
      </div>
    </section>
  );
}