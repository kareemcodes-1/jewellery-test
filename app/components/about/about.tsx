"use client";

import Link from "next/link";

export default function About() {
  return (
    <section className="relative w-full bg-[#8c2923] overflow-hidden pt-[12rem] pb-[5rem]">
      <div className="px-10 flex items-center justify-center h-full flex-col gap-[3rem] w-full">
        <h1 className="text-[5rem] uppercase tracking-[-0.01em] text-white !leading-[150%]">
          Worn by over{" "} 10,000,000 {" "}
          people worldwide. Each piece turns a moment into a memory,
          a gift into a legacy.
        </h1>

        <div className="flex w-full justify-end items-end">
  <div className="w-[500px] flex items-start justify-start flex-col gap-[1.5rem]">
    <p className=" text-white uppercase">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, magni tempora voluptatibus ea modi praesentium dolorem. Neque quia eum dolore, quos in fugit, animi autem cumque libero debitis magni facere.
        </p>

       <Link 
  href="/" 
  className="bg-white py-3 px-8 flex items-start text-black/70 uppercase text-[11px] tracking-[0.15em] font-normal transition-all duration-300 cursor-pointer"
>
  Read More
</Link>
  </div>
        </div>
      </div>
    </section>
  );
}