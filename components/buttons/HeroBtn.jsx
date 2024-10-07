"use client";

import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const HeroBtn = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Button
      as={Link}
      href="/trademark-register"
      color="primary"
      className="px-12 py-8 rounded-[10px] text-md bg-color-primary max-md:w-full font-inriaSerif font-[400]"
      radius="sm"
      onClick={() => setIsLoading(true)}
      isLoading={isLoading}
    >
      Start Registration Now
    </Button>
  );
};

export default HeroBtn;
