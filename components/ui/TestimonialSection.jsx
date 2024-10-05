import React from "react";
import HeadLine from "./HeadLine";
import Image from "next/image";
import TestimonialCarousel from "./TestimonialCarousel";

const TestimonialSection = () => {
  return (
    <section className="bg-[#F0F0F0] py-24 max-md:py-20">
      <div className="flex-center flex-col gap-4">
        <h1 className="text-4xl max-md:mb-3 text-slate-800 font-semibold m-2 text-center ">
          What our clients say?
        </h1>
        <Image
          src={`/images/trustpilot-excellent.png`}
          alt="trustpilot-excellent"
          width={200}
          height={100}
          className="object-contain max-md:w-[300px]"
        />
        <div className="flex-center gap-2 max-md:px-8 max-md:items-end">
          <p>
            Rated 4.9 / 5 based on{" "}
            <span className="font-semibold">255,672 reviews</span> on
          </p>
          <Image
            src={`/images/trustpilot-logo.png`}
            alt="trustpilot-logo"
            width={100}
            height={50}
            className="object-contain"
          />
        </div>

        <div className="max-md:w-full">
          <TestimonialCarousel />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
