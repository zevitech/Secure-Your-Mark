import Image from "next/image";
import React from "react";
import PackageCard from "./PackageCard";
import {
  basicPackage,
  standardPackage,
  premiumPackage,
} from "@/constant/packages";

const PackageSection = () => {
  return (
    <div className="flex gap-5 justify-center max-md:flex-col">
      <div className="mb-20 max-md:mb-2 hidden max-md:block">
        <div className="flex-center gap-3">
          <Image
            alt="Line"
            src={`/images/left-orange-line.png`}
            width={70}
            height={10}
          />
          <h4 className="text-slate-700 font-normal text-lg">Packages</h4>
          <Image
            alt="Line"
            src={`/images/right-orange-line.png`}
            width={70}
            height={10}
          />
        </div>
        <h1 className="text-4xl max-md:text-3xl text-slate-700 font-medium m-2 text-center">
          Trademark Registration
        </h1>
      </div>
      <div className="relative">
        <div className="relative w-[800px] max-md:hidden">
          <Image
            alt="Shape"
            src={`/images/pricing-table-shape.png`}
            width={800}
            height={500}
          />
          <div className="flex-center gap-3 absolute top-[40px] right-[50px]">
            <Image
              alt="Line"
              src={`/images/left-orange-line.png`}
              width={150}
              height={10}
            />
            <h1 className="text-sm text-color-primary m-1 text-center">
              Made Easy
            </h1>
          </div>
          <div className="flex items-center gap-6 absolute top-[70px] left-[60px]">
            <h1 className="text-5xl  font-bold ">Trademark Registration</h1>
            <Image
              alt="Arrow"
              src={`/images/Arrow_right.png`}
              width={70}
              height={70}
            />
          </div>
          <div className="flex items-center gap-6 absolute top-[150px] left-[60px]">
            <h1 className="text-5xl  font-bold text-color-primary">Packages</h1>
          </div>
        </div>
        <div className="flex ml-4 max-md:ml-0 gap-5 max-md:gap-12 mt-5 max-md:flex-col">
          <PackageCard
            packageName={`Basic`}
            price={`35`}
            isPopular={false}
            items={basicPackage}
          />
          <div className="absolute top-[190px] right-[12px] max-md:relative max-md:top-0 max-md:right-0">
            <PackageCard
              packageName={`Standard`}
              price={`135`}
              isPopular={true}
              items={standardPackage}
              mb={"60"}
            />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <PackageCard
          packageName={`Premium`}
          price={`235`}
          isPopular={false}
          items={premiumPackage}
          mb={"50"}
        />
      </div>
    </div>
  );
};

export default PackageSection;
