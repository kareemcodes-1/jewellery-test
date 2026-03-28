"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import Link from "next/link";

interface Product {
  name: string;
  price: string;
  image: string;
}

const products: Product[] = [
  {
    name: "Gold Serpent Ring",
    price: "4,000 NGN",
    image: "https://framerusercontent.com/images/RDVoBPvLRxLA5jWdCEAY7hTmrIU.png",
  },
  {
    name: "Pearl Drop Earrings",
    price: "5,000 NGN",
    image: "https://framerusercontent.com/images/nJBNJTyIiYb9fGvt5uIOYLPNps.png?width=1024&height=1024",
  },
  {
    name: "Diamond Tennis Bracelet",
    price: "5,000 NGN",
    image: "https://framerusercontent.com/images/mHTzZd3l6JVmLwekYtLKjZM2o.png?width=1024&height=1024",
  },
  {
    name: "Gold Chain Necklace",
    price: "2,500 NGN",
    image: "https://framerusercontent.com/images/m50hPs9gi5YAiakHEZ77qjQbB0.png?width=1024&height=1024",
  },
  {
    name: "Signet Ring",
    price: "3,000 NGN",
    image: "https://framerusercontent.com/images/74e4L8FqOUOhoGVkVcWrspe7EiU.png?width=1024&height=1024",
  },
  {
    name: "Hoop Earrings",
    price: "4,000 NGN",
    image: "https://framerusercontent.com/images/iH43LQuI7TiMG7iI5hMWCm6cEQ.png?width=840&height=840",
  },
];

export default function NewArrivals() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="w-full font-sans py-[5rem] min-h-screen px-[2rem]">
      {/* Banner */}
      {/* <div className="flex items-center gap-[2rem] w-full mb-[2rem]">
        <button className="text-[4rem] primary">RINGS <sup className="text-[1rem]">(3)</sup></button>
        <button className="text-[2rem] primary">NECKLACE <sup className="text-[1rem]">(3)</sup></button>
        <button className="text-[2rem] primary">BRACELETS <sup className="text-[1rem]">(3)</sup></button>
     </div> */}

      <div className="flex items-center justify-between gap-[2rem] w-full mb-[2rem]">
        <h1 className="text-[5rem] primary uppercase text-[#0A100D]">FEATURED PRODUCTS</h1>


        <Link
          href="/"
          className="bg-[#111] py-[.9rem] px-8 rounded-[.3rem] flex items-start text-white uppercase text-[.9rem] tracking-[0.15em] transition-all duration-300 cursor-pointer hover:bg-[#8c2923] hover:text-white"
        >
          View all
        </Link>
      </div>


      <div
        className="grid grid-cols-3 gap-[2rem]"
      >
        {products.map((product) => (
          <article key={product.name}>
            <div className="group cursor-pointer">
              <div className="relative w-full overflow-hidden bg-[#f0f0f0] mb-5 rounded-[.5rem]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain transition-all duration-500 scale-[.7] group-hover:scale-[.9]"
                />
              </div>
              <div className="flex items-center justify-between mt-[.5rem]">
                <h2 className="text-black text-[1.7rem] !font-[400] tracking-[-0.01em]">
                  {product.name}
                </h2>
                <p className="text-black/80 text-[1.2rem] font-[600]">{product.price}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}