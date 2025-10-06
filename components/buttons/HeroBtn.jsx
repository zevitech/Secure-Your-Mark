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
      className="px-12 py-8 rounded-[10px] text-md bg-color-primary max-md:w-full font-inriaSerif font-[400]"
      radius="sm"
      onClick={handleButton}
      isLoading={isLoading}
    >
      Start Registration Now
    </Button>
  );
};

export default HeroBtn;
