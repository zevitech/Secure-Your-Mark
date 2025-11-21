"use client";

import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const UpgradeBtn = () => {
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
      onClick={handleButton}
      isLoading={isLoading}
      className="bg-color-primary text-white font-bold text-xl p-4 m-auto rounded-lg text-center hover:opacity-80 cursor-pointer w-full py-8"
    >
      Get Started
    </Button>
  );
};

export default UpgradeBtn;
