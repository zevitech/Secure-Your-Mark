import Image from "next/image";
import React from "react";

const ReviewCard = ({ title, description, dateAgo }) => {
  return (
    <div className="flex flex-col gap-2 max-w-[320px] max-md:max-w-[70%] max-md:m-auto z-10 bg-slate-50 shadow-sm p-4 rounded-md my-5 max-md:mb-2">
      <div className="flex-between">
        <Image
          src={"/images/trustpilot-5star.png"}
          alt="Trust Pilot"
          width={80}
          height={20}
        />
        <p className="text-xs font-mono text-slate-500">{dateAgo}</p>
      </div>
      <h5 className="text-sm font-bold text-slate-700 capitalize">{title}</h5>
      <p className="text-slate-600 text-xs capitalize">{description}</p>
    </div>
  );
};

export default ReviewCard;
