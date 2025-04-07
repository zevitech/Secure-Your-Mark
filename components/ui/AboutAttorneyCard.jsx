import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiOutlineMail } from "react-icons/hi";

const AboutAttorneyCard = ({ image, name, details, number, number02, email }) => {
  return (
    <div className="flex-center even:flex-row-reverse max-md:even:flex-col gap-14 max-md:gap-8 max-md:flex-col">
      <Image alt="attorney" src={`/images/${image}`} width={300} height={500} />
      <div className="max-w-xl">
        <h1 className="text-xl font-bold text-slate-700 mb-4">{name}</h1>
        <p className="text-slate-700">{details}</p>
        <div className="flex items-center gap-5 mt-6">
          <Link
            href=""
            target="_blank"
            className="text-color-primary flex-center"
          >
            <HiOutlineMail className="text-[40px]" />
            <div className="flex flex-col items-center">
              <h4 className="text-color-primary text-base font-semibold">
                {email}
              </h4>
            </div>
          </Link>

          <div className="flex flex-col gap-4">
            <Link href="tel:+14082562372" className="flex-center gap-2">
              <Image
                src={`/images/orange-phone-icon.png`}
                alt="Bell"
                width={24}
                height={24}
                className="object-contain"
              />
              <div className="flex flex-col items-center">
                <h4 className="text-color-primary text-base font-semibold">
                  {number}
                </h4>
              </div>
            </Link>

            <Link href="tel:+14082563271" className="flex-center gap-2">
              <Image
                src={`/images/orange-phone-icon.png`}
                alt="Bell"
                width={24}
                height={24}
                className="object-contain"
              />
              <div className="flex flex-col items-center">
                <h4 className="text-color-primary text-base font-semibold">
                  {number02}
                </h4>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAttorneyCard;
