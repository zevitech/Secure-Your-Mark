import Image from "next/image";
import React from "react";

const faqbox = () => {
  return (
    <div
      key={item.key}
      className="max-w-lg rounded-lg border-2 border-slate-300 text-slate-700 px-5 py-4"
    >
      <h1 className="text-xl font-semibold mb-2">{item.question}</h1>
      <div className="flex items-start gap-3">
        <Image
          alt="Star"
          src={`/images/star-icon.png`}
          width={20}
          height={20}
          className=" object-contain"
        />
        <p className="text-sm">{item.answer}</p>
      </div>
    </div>
  );
};

export default faqbox;
