import React from "react";
import { Button } from "@nextui-org/react";
import HeroBtn from "../buttons/HeroBtn";
import Link from "next/link";

const SearchModal = () => {
  return (
    <>
      <div className="relative w-[100%] max-md:w-full">
        <div className={`gap-4 md:gap-2 mt-4 flex items-center justify-center`}>
          <HeroBtn />

          <Button
            as={Link}
            href="/trademark-register"
            color="secondary"
            className="px-12 py-8 rounded-[10px] text-md bg-color-secondary max-md:w-full font-inriaSerif font-[400]"
            radius="sm"
          >
            Live Chat
          </Button>
        </div>
      </div>
    </>
  );
};

export default SearchModal;
