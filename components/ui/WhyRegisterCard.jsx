import Image from "next/image";
import React from "react";

const WhyRegisterCard = ({ details, title, img, width }) => {
  return (
    <div
      className="h-[200px] bg-white custom-shadow rounded-lg text-slate-700 p-7 max-md:p-4 col-flex justify-center items-center"
      style={{ width: width }}
    >
      <div className="flex items-start gap-5">
        <Image
          alt="Icon"
          src={`/images/${img}`}
          width={40}
          height={10}
          className="object-contain mt-2"
        />
        <div>
          <h1 className="text-[26px] font-semibold max-md:text-xl">{title}</h1>
          <p className="text-xl mt-3 max-md:text-base">{details}</p>
        </div>
      </div>
    </div>
  );
};

export default WhyRegisterCard;
