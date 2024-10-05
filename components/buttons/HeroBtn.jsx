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
      className="px-12 py-7 text-md bg-color-primary max-md:w-full"
      radius="sm"
      onClick={() => setIsLoading(true)}
      isLoading={isLoading}
    >
      Start Registration Now
    </Button>
  );
};

export default HeroBtn;
