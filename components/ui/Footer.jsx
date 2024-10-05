import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="bg-color-footer-gradient">
      <div className="flex-center max-md:flex-col py-28 gap-32 max-md:gap-10 max-md:py-20 max-md:pb-10">
        <div className="col-flex gap-4 max-w-[500px] max-md:px-6">
          <Image
            src={`/images/Secure-Your-Mark-white.png`}
            alt="Secure Your Mark Logo"
            width={120}
            height={80}
            className="object-contain"
          />
          <p className="text-slate-200 text-sm">
            Secure Your Mark helps brands protect their identity and image
            through a simple steps trademark registration process.
          </p>
          <div className="flex items-center gap-5 mt-7 max-md:mt-3 max-md:flex-col max-md:items-start">
            <div className="flex gap-4">
              <Link href="" target="_blank">
                <Image
                  src={`/images/twritter-logo.png`}
                  alt="Secure Your Mark"
                  width={30}
                  height={30}
                  className="object-contain rounded-md"
                />
              </Link>
              <Link href="" target="_blank">
                <Image
                  src={`/images/whatsapp-logo.png`}
                  alt="Secure Your Mark"
                  width={30}
                  height={30}
                  className="object-contain rounded-md"
                />
              </Link>
              <Link href="" target="_blank">
                <Image
                  src={`/images/facebook-logo.png`}
                  alt="Secure Your Mark"
                  width={30}
                  height={30}
                  className="object-contain rounded-md"
                />
              </Link>
              <Link href="" target="_blank">
                <Image
                  src={`/images/linkedin-logo.png`}
                  alt="Secure Your Mark"
                  width={30}
                  height={30}
                  className="object-contain rounded-md"
                />
              </Link>
            </div>
            <Link href="tel:+13104244909" className="flex-center">
              <Image
                src={`/images/orange-phone-icon.png`}
                alt="Bell"
                width={24}
                height={24}
                className="object-contain"
              />
              <div className="flex flex-col items-center">
                <h4 className="text-color-primary text-base font-semibold">
                  +1 (310) 424-4909
                </h4>
                <p className="text-xs text-white">Secure Your Mark</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="max-w-[400px] max-md:w-[90%] text-white">
          <h1 className="text-2xl font-normal">Subscribe Now</h1>
          <p className="font-extralight text-sm mt-1">
            {`Don't miss our future updates! Get Subscribed Today!`}
          </p>
          <form action="" className="col-flex gap-3 mt-5">
            <input
              className="w-full px-4 py-3 bg-slate-200 rounded-md text-slate-900 outline-none text-sm"
              placeholder="Enter Your Email"
            />
            <input
              className="w-full px-4 py-3 bg-color-primary cursor-pointer rounded-md text-slate-100 outline-none text-sm hover:opacity-90"
              type="submit"
              value="Subscribe"
            />
          </form>
        </div>
      </div>
      <div className="bg-color-primary text-slate-200 text-center text-sm p-5">
        <p>
          ©Copyright & All Rights Reserved by{" "}
          <Link href={``} className="opacity-85 hover:opacity-100">
            Secure Your Mark
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Footer;
