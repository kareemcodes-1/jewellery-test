"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";

const topTestimonials = [
  { name: "Sophia M.", text: "The pearl necklace I wore on my wedding day made me feel like the most beautiful version of myself. A cherished keepsake of my special day.", image: "https://i.pravatar.cc/150?img=47" },
  { name: "Amara K.", text: "I gifted my mother a gold chain for her birthday and she hasn't taken it off since. The craftsmanship is unlike anything I've seen at this price point.", image: "https://i.pravatar.cc/150?img=32" },
  { name: "Priya N.", text: "Every piece I've ordered has arrived beautifully packaged and exceeded my expectations. My go-to for every special occasion.", image: "https://i.pravatar.cc/150?img=44" },
  { name: "Lena B.", text: "Aurel pieces are the first thing people notice when I walk into a room. The quality is extraordinary and the designs are timeless.", image: "https://i.pravatar.cc/150?img=23" },
];

const bottomTestimonials = [
  { name: "Chidi O.", text: "Bought a ring for my partner's anniversary and she was speechless. Aurel delivered something truly special — fast shipping too.", image: "https://i.pravatar.cc/150?img=12" },
  { name: "Mia T.", text: "I've purchased from many jewellery brands but nothing compares to the attention to detail Aurel puts into every single piece.", image: "https://i.pravatar.cc/150?img=56" },
  { name: "Zara H.", text: "The hoop earrings I ordered are absolutely stunning. Lightweight, elegant, and I get compliments every time I wear them.", image: "https://i.pravatar.cc/150?img=19" },
  { name: "Fatima R.", text: "From the packaging to the piece itself, everything screams luxury. I'll be a customer for life.", image: "https://i.pravatar.cc/150?img=38" },
];

function TestimonialCard({ name, text, image }: { name: string; text: string; image: string }) {
  return (
    <div className="mx-3 h-[20rem] w-[350px] flex-shrink-0 bg-white rounded-[4px] px-7 py-8 flex flex-col gap-4">
      <p className="text-[1rem] text-[#1c1a14]/70 leading-relaxed uppercase">
        "{text}"
      </p>
      <div className="flex items-center gap-3 mt-auto">
        <Image
          src={image}
          alt={name}
          width={38}
          height={38}
          className="rounded-full object-cover"
        />
        <h3 className="text-[1rem] font-[400] text-[#1c1a14] tracking-[0.02em]">
          — {name}
        </h3>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="w-full bg-[#f0ede8] min-h-screen py-20 flex flex-col gap-4 overflow-hidden">

      <div className="flex items-center gap-[2rem] w-full mb-[2rem] px-[2rem]">
        <h1 className="text-[5rem] primary uppercase text-[#0A100D]">WORDS FROM OUR CLIENTS</h1>
      </div>

      <Marquee speed={40} direction="left" pauseOnHover gradient={false}>
        {topTestimonials.map((t, i) => (
          <TestimonialCard key={i} {...t} />
        ))}
      </Marquee>

      <Marquee speed={40} direction="right" pauseOnHover gradient={false}>
        {bottomTestimonials.map((t, i) => (
          <TestimonialCard key={i} {...t} />
        ))}
      </Marquee>

    </section>
  );
}