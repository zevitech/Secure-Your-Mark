"use client";

import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const JointBtn = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Button
        as={Link}
        href="/trademark-register"
        radius="sm"
        className="bg-color-primary px-14 py-7 text-slate-50 font-semibold max-md:w-[98%]"
        onClick={() => setIsLoading(true)}
        isLoading={isLoading}
      >
        Get Started Now
      </Button>
      <Button
        as={Link}
        href="/contact-us"
        color="red"
        radius="sm"
        variant="bordered"
        className=" px-14 py-7 text-color-primary font-semibold border-[#F25601] max-md:w-[98%]"
      >
        {`> Contact Us`}
      </Button>
    </>
  );
};

export default JointBtn;
