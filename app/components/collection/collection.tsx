"use client";

import Link from "next/link";


const collections = [
  {
    title: "Rings",
    image: "https://i.pinimg.com/736x/8f/3b/71/8f3b71783e42736e2f790830eae38e55.jpg",
  },
  {
    title: "Necklace",
    image: "https://res.cloudinary.com/datpkisht/image/upload/v1723328098/yebesselrc7dnm5al50i.jpg",
  },
  {
    title: "Bracelets",
    image: "https://framerusercontent.com/images/yOpFZrOkvRnpjZYqhK9OUZyzbI.png",
  },
];

export default function Collection() {
  return (
    <section className="flex w-full h-screen">
      {collections.map((col, i) => (
        <div key={i} className="relative flex-1 overflow-hidden group">

          {/* Full bleed image */}
          <img
            src={col.image}
            alt={col.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />

          {/* Bottom-left label */}
          <div className="absolute bottom-6 left-6 z-10">
  <h2 className="text-white text-[3rem] leading-tight mb-3">
    {col.title}
  </h2>
  <Link
    href="/"
    className="bg-white hover:bg-[#8c2923] hover:text-white transition-[.4] py-[.9rem] px-8 inline-flex items-center rounded-[.3rem] text-black/70 uppercase text-[.9rem] tracking-[0.15em] font-normal transition-all duration-300 cursor-pointer"
  >
    Shop now
  </Link>
</div>

        </div>
      ))}
    </section>
  );
}