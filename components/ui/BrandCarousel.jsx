"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "@/components/styles/BrandCarousel.css";

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import Image from "next/image";
import { recentlyTrademarked } from "@/constant";

export default function BrandCarousel() {
  return (
    <>
      <h1 className="text-3xl max-md:text-xl font-semibold text-slate-700 text-center mb-10 max-md:mb-5">
        Recently Trademarked
      </h1>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        autoplay={true}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper brandCarousel"
      >
        {recentlyTrademarked.map((item, index) => (
          <SwiperSlide key={index}>
            <div>
              <Image
                src={`/images/${item}`}
                alt="Brand Name"
                width={110}
                height={110}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
