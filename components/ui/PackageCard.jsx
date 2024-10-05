import React from "react";
import { FaDotCircle } from "react-icons/fa";
import UpgradeBtn from "../buttons/UpgradeBtn";

const PackageCard = ({ packageName, price, isPopular, items, mb }) => {
  return (
    <div className="relative w-[370px] max-md:w-[100%]">
      {isPopular && (
        <div className="absolute top-[-18px] left-1/2 transform -translate-x-1/2 bg-color-primary text-white px-6 py-2 rounded-full font-semibold text-xs ">
          Popular
        </div>
      )}
      <div className="rounded-[45px] pt-7 pb-10 bg-white shadow-lg">
        <div className="flex items-end justify-center gap-2">
          <h2 className="text-2xl text-slate-600">{packageName}</h2>
          <h1 className="text-4xl text-slate-800">Package</h1>
        </div>
        <div className="bg-[#242F49] py-7 px-5 my-4 flex justify-center items-end">
          <h1 className="text-slate-100 text-5xl font-bold">${price}</h1>
          <span className="text-slate-200 text-sm">
            + $350/ PER CLASS USPTO FEE
          </span>
        </div>
        <div className="px-5">
          <UpgradeBtn />
          <div>
            <p className="text-slate-700 mt-4">
              Trademark logo and name with expert registration service.
            </p>
            <ul
              className={`col-flex gap-3 mt-6 pcmb0`}
              style={{ marginBottom: `${mb}px` }}
            >
              {items.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-[9px] mt-[5px]">
                    <FaDotCircle className="text-color-primary text-[8px]" />
                  </div>
                  <span className="text-xs text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
