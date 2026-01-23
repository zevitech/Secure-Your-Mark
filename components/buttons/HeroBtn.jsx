"use client";

import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const HeroBtn = () => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
    const handleButton = () => {
    setIsLoading(true);
    router.push("/trademark-register");
  };


  return (
    <Button
      as={Link}
      href="/trademark-register"
      color="primary"
      className="px-6 md:px-12 py-8 rounded-[10px] text-sm md:text-md bg-color-primary max-md:w-full font-inriaSerif font-[400] whitespace-normal md:whitespace-nowrap"
      radius="sm"
      onClick={handleButton}
      isLoading={isLoading}
    >
      <span className="text-center">Start Registration Now</span>
    </Button>
  );
};

export default HeroBtn;
