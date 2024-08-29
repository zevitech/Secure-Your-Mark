"use client";

import React, { useState } from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { tpme } from "@/constant";

const LpAccordion = () => {
  const [selectedKeys, setSelectedKeys] = useState(new Set(["3"]));
  return (
    <Accordion selectedKeys={selectedKeys} onSelectionChange={setSelectedKeys}>
      {tpme.map((item) => (
        <AccordionItem
          key={item.id}
          aria-label={item.title}
          title={item.title}
          className=" font-medium text-color-secondary custom-accordion-item relative pl-9"
          indicator={` `}
        >
          <p className="font-normal">{item.details}</p>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default LpAccordion;
