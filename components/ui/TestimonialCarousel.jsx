"use client";

import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import ReviewCard from "./ReviewCard";
import { testimonials } from "@/constant/testimonial";

// Helper function to shuffle the array
const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

// Helper function to group testimonials into pairs
const groupIntoPairs = (array) => {
  const pairs = [];
  for (let i = 0; i < array.length; i += 2) {
    pairs.push(array.slice(i, i + 2));
  }
  return pairs;
};

const randomDates = [
  "8 Minutes ago",
  "23 Minutes ago",
  "30 Minutes ago",
  "44 Minutes ago",
  "58 Minutes ago",
  "1 Hour ago",
  "1 Days ago",
  "2 Days ago",
  "3 Days ago",
  "4 Days ago",
  "5 Days ago",
  "6 Days ago",
  "7 Days ago",
  "8 Days ago",
  "9 Days ago",
  "10 Days ago",
  "11 Days ago",
  "12 Days ago",
  "13 Days ago",
  "14 Days ago",
  "15 Days ago",
  "16 Days ago",
  "17 Days ago",
  "18 Days ago",
  "19 Days ago",
  "20 Days ago",
  "21 Days ago",
  "22 Days ago",
  "23 Days ago",
  "24 Days ago",
  "25 Days ago",
  "26 Days ago",
  "27 Days ago",
  "28 Days ago",
  "29 Days ago",
  "1 Month ago",
  "2 Months ago",
  "3 Months ago",
  "4 Months ago",
  "5 Months ago",
  "6 Months ago",
  "7 Months ago",
  "8 Months ago",
  "9 Months ago",
  "10 Months ago",
  "11 Months ago",
  "12 Months ago",
  "1 Year ago",
  "2 Years ago",
  "3 Years ago",
  "4 Years ago",
  "5 Years ago",
];

export default function TestimonialCarousel() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [shuffledTestimonials, setShuffledTestimonials] = useState([]);

  // Shuffle the testimonials once on component mount and group them into pairs
  useEffect(() => {
    setShuffledTestimonials(groupIntoPairs(shuffleArray([...testimonials])));
  }, []);

  return (
    <div className="relative z-10 flex justify-end py-7 px-16 max-md:px-0 rounded-md pb-9">
      <button
        ref={prevRef}
        className="absolute left-1 max-md:left-3 top-1/2 transform -translate-y-1/2 z-30"
      >
        <FaRegArrowAltCircleLeft className="text-color-primary text-3xl max-md:text-4xl" />
      </button>
      <button
        ref={nextRef}
        className="absolute right-1 max-md:right-3 top-1/2 transform -translate-y-1/2 z-30"
      >
        <FaRegArrowAltCircleRight className="text-color-primary text-3xl max-md:text-4xl" />
      </button>
      <Swiper
        slidesPerView={1}
        spaceBetween={1}
        grabCursor={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        pagination={true}
        modules={[Navigation, Pagination]}
        className="mySwiper max-w-[1000px] max-md:w-full m-0 z-10 pb-7 rounded-md"
      >
        {shuffledTestimonials.map((pair, index) => (
          <SwiperSlide key={index}>
            {pair.map((testimonial, i) => (
              <ReviewCard
                key={i}
                title={testimonial.title}
                description={testimonial.description}
                dateAgo={randomDates[Math.floor(Math.random() * 52)]}
              />
            ))}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
