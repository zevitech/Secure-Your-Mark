"use client";

import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { allFAQ } from "@/constant/faqs";

const FAQBox = () => {
  const itemClasses = {
    base: "py-0 w-full",
    title: "font-normal text-medium",
    trigger:
      "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center border-b-1",
    indicator: "text-medium",
    content: "text-small px-2",
  };

  // Split allFAQ into two halves
  const half = Math.ceil(allFAQ.length / 2);
  const leftSideFAQs = allFAQ.slice(0, half);
  const rightSideFAQs = allFAQ.slice(half);

  return (
    <div className="flex justify-between w-full max-md:flex-col">
      {/* Left Column */}
      <Accordion
        showDivider={false}
        className="p-2 flex flex-col gap-7 max-md:gap-4 w-[48%] max-md:w-[100%] bg-transparent shadow-none border-none rounded-none"
        variant="shadow"
        itemClasses={itemClasses}
      >
        {leftSideFAQs.map(({ key, question, answer }) => (
          <AccordionItem key={key} title={question}>
            {answer}
          </AccordionItem>
        ))}
      </Accordion>

      {/* Right Column */}
      <Accordion
        showDivider={false}
        className="p-2 flex flex-col gap-7 w-[48%] max-md:gap-4 max-md:w-[100%]  bg-transparent shadow-none border-none rounded-none"
        variant="shadow"
        itemClasses={itemClasses}
      >
        {rightSideFAQs.map(({ key, question, answer }) => (
          <AccordionItem key={key} title={question}>
            {answer}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQBox;
