import React from "react";
import Image from "next/image";
import HeroBtn from "../buttons/HeroBtn";
import PrimaryButton from "./PrimaryButton";

const RebonCard = () => {
  return (
    <div className="relative bg-white shadow-sm h-[200px] max-w-[1200px] m-auto flex items-center px-10 max-md:px-5 rounded-lg max-md:flex-col max-md:h-[420px] max-md:pt-5">
      <div className="col-flex items-center gap-5">
        <h1 className="text-4xl font-bold text-slate-800 max-w-[90%] max-md:max-w-[100%] max-md:text-2xl max-md:pt-5">
          Ready to Protect Your Work?
        </h1>
        <PrimaryButton text={"Start Now"} size={"3xl"} />
      </div>
      <Image
        width={500}
        height={500}
        alt="partners"
        src={`/images/rebon-card-img.png`}
        className="object-contain rounded-xl absolute right-0 bottom-[-8px]"
      />
    </div>
  );
};

export default RebonCard;
