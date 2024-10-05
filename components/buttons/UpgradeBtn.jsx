"use client";

import { Button } from "@nextui-org/react";
import Link from "next/link";
import React, { useState } from "react";

const UpgradeBtn = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Button
      as={Link}
      href="/trademark-register"
      onClick={() => setIsLoading(true)}
      isLoading={isLoading}
      className="bg-color-primary text-white font-bold text-xl p-4 m-auto rounded-lg text-center hover:opacity-80 cursor-pointer w-full py-8"
    >
      Upgrade Now
    </Button>
  );
};

export default UpgradeBtn;
