"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

interface Product {
  name: string;
  price: string;
  image: string;
}

const products: Product[] = [
  {
    name: "Gold Serpent Ring",
    price: "290 USD",
    image: "https://framerusercontent.com/images/mfmet4Ba9GVPWMHoDOFyDwI9ks.png?scale-down-to=1024&width=1064&height=1064",
  },
  {
    name: "Pearl Drop Earrings",
    price: "210 USD",
    image: "https://framerusercontent.com/images/nUwSuxwsp02hQ7MGFvhecwlhto.png?width=720&height=720",
  },
  {
    name: "Diamond Tennis Bracelet",
    price: "590 USD",
    image: "https://framerusercontent.com/images/bJzbNihfgkaONkku3rq42wsB60o.png?width=1000&height=1000",
  },
  {
    name: "Gold Chain Necklace",
    price: "850 USD",
    image: "https://framerusercontent.com/images/OkgH35GG7H2C3KPsm3EabLkiKg.png?width=1000&height=1000",
  },
  {
    name: "Signet Ring",
    price: "150 USD",
    image: "https://framerusercontent.com/images/uXJBBF3kSG5p0TEGISWHq5l74g.png?width=1000&height=1000",
  },
  {
    name: "Hoop Earrings",
    price: "180 USD",
    image: "https://framerusercontent.com/images/g0uw1VO4vD0Dq7WoSvir6HxxYQ.png?width=1024&height=1024",
  },
];

export default function BestSellers() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="w-full font-sans py-[5rem] min-h-screen px-[2rem]">
      <div className="flex items-center gap-[2rem] w-full mb-[2rem]">
        <h1 className="text-[5rem] primary uppercase">Best sellers</h1>
     </div>

      <div
      className="grid grid-cols-3 gap-[2rem]"
      >
        {products.map((product) => (
          <article key={product.name}>
            <div className="group cursor-pointer">
              <div className="relative w-full overflow-hidden bg-[#f0f0f0]  rounded-[.5rem]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain transition-all duration-500 scale-[.7] group-hover:scale-[.9]"
                />
              </div>
              <div className="flex items-center justify-between mt-[.5rem]">
                <h2 className="text-black text-[1.5rem] !font-[400] tracking-[-0.01em]">
                  {product.name}
                </h2>
                <p className="text-black/80 text-[1rem] font-medium">{product.price}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}