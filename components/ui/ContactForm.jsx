import { Input, Textarea } from "@nextui-org/react";
import React from "react";
import PrimaryButton from "./PrimaryButton";

const ContactForm = () => {
  return (
    <div className="w-[500px] max-md:w-[99%] m-auto col-flex gap-3">
      <div className="flex gap-7 max-md:flex-col max-md:gap-3">
        <Input label="First Name" required type="text" variant="underlined" />
        <Input label="Last Name" required type="text" variant="underlined" />
      </div>
      <div className="flex gap-7  max-md:flex-col max-md:gap-3">
        <Input label="Enter Email" required type="email" variant="underlined" />
        <Input
          label="Phone Number"
          required
          type="number"
          variant="underlined"
        />
      </div>
      <Input label="Enter Subject" required type="text" variant="underlined" />
      <Textarea
        variant="underlined"
        labelPlacement="outside"
        placeholder="Enter Message"
        className="col-span-12 md:col-span-6 mb-6 md:mb-0"
      />
      <div className="w-full flex-end flex mt-5 max-md:mt-1">
        <PrimaryButton text={`Send`} size={`lg`} animate={false} />
      </div>
    </div>
  );
};

export default ContactForm;
