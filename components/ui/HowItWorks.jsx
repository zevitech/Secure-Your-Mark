import { howItWorks } from "@/constant";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const HowItWorks = () => {
  return (
    <section className="bg-[#FFFAF8] py-28  max-md:py-20 max-md:px-5">
      <div className="mb-20 max-md:mb-16">
        <div className="flex-center gap-3">
          <Image
            alt="Line"
            src={`/images/left-orange-line.png`}
            width={100}
            height={10}
          />
          <h1 className="text-4xl max-md:text-3xl text-slate-70 font-medium m-2 text-center">
            How it works?
          </h1>
          <Image
            alt="Line"
            src={`/images/right-orange-line.png`}
            width={100}
            height={10}
          />
        </div>
      </div>
      <div className="flex justify-center gap-16 max-md:gap-12 max-md:flex-col">
        {howItWorks.map((item, index) => (
          <div
            key={index}
            className="w-[220px] max-md:w-[96%] max-md:m-auto col-flex gap-3 even:mt-32 max-md:even:mt-0"
          >
            <Image
              src={`/images/${item.icon}`}
              alt="Icon"
              width={80}
              height={80}
            />
            <div>
              <h1 className="font-bold text-lg text-slate-900">
                {item.heading}
              </h1>
              <p className="text-slate-700 text-xs font-bold">
                {item.subHeading}
              </p>
            </div>
            <p className="text-slate-700 mb-2 text-sm">{item.details}</p>
            <Button variant="flat" color="warning">
              Learn More
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
