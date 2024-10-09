import { Button, Input } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { BiSearch } from "react-icons/bi";
import HeroBtn from "../buttons/HeroBtn";
import Link from "next/link";

const PageHero = ({
  bgImg,
  heading,
  details,
  subHeading,
  btnIsShuffle,
  isSearchInput,
  isHome,
}) => {
  return (
    <section
      style={{ backgroundImage: `url('/images/${bgImg}')` }}
      className={`py-10 max-md:py-14 w-full h-[90vh] max-md:h-auto max-md:min-h-[70vh] max-md:pb-24 max-md:px-5 flex-center text-white bg-no-repeat bg-center bg-cover`}
    >
      <div className="flex flex-col max-w-4xl max-md:w-full m-auto gap-10 max-md:gap-5">
        <div>
          <div className="flex items-center gap-2 text-slate-300">
            <p className="font-inriaSerif">{subHeading}</p>
            <Image
              src={"/images/title-line.png"}
              alt="Secure Your Mark"
              width={150}
              height={10}
              className={`object-contain`}
            />
          </div>
          {isHome ? (
            <h1 className="text-center font-bold text-5xl max-md:text-4xl max-w-[850px] font-inriaSerif">
              Protect Your Brand - Register{" "}
              <span className="text-color-primary">Trademark</span> Today!
            </h1>
          ) : (
            <h1 className="font-bold text-5xl max-md:text-4xl leading-tight">
              {heading}
            </h1>
          )}

          <p className="text-slate-400 mt-3 *:first-letter:">
            {details}
          </p>
        </div>

        {isSearchInput && (
          <div className="w-full bg-[#F0f0f0] h-[60px] rounded-[10px] p-8 flex items-center justify-between text-start">
            <input type="text" 
            className="w-full h-[28px] outline-none focus:outline-none bg-transparent text-black placeholder:text-[#141C2F] placeholder:text-opacity-35"
            placeholder="Search for trademark availability..."
            />
            <BiSearch className="text-[#F25601] w-[30px] h-[30px]"/>
          </div>
        )}

        <div
          className={`max-md:gap-5 ${
            btnIsShuffle
              ? "flex items-center justify-between gap-16"
              : "flex-between flex-row-reverse"
          }`}
        >
          <HeroBtn />
          <Button
            as={Link}
            href="/contact-us"
            color="warning"
            variant="light"
            className="px-12 py-7 text-md text-[#F3F4F6] max-md:hidden font-inriaSerif font-[400] tracking-[0%] leading-[auto]"
            radius="sm"
          >
            {`> Contact Us`}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
