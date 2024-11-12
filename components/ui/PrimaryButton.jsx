"use client";

import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const PrimaryButton = ({ text, animate, size }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const handleButton = () => {
    setIsLoading(true);
    router.push("/trademark-register");
  };

  return (
    <div>
      <Button
        isLoading={isLoading}
        variant="shadow"
        onClick={handleButton}
        radius="md"
        className={`font-semibold bg-color-primary text-white ${
          animate && `animate-expand`
        } ${size === "md" && ` px-8 py-5`} ${size === "lg" && `px-12 py-6`} ${
          size === "xl" && ` px-16 py-[25px]`
        } ${size === "2xl" && ` w-[90%] py-8 text-xl`}${
          size === "3xl" && ` px-20 py-9 text-2xl`
        }`}
      >
        {text}
      </Button>
    </div>
  );
};

export default PrimaryButton;
