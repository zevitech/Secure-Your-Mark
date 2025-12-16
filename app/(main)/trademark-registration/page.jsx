import React from "react";
import { Button, NextUIProvider } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "@/components/ui/PrimaryButton";
import HeadLine from "@/components/ui/HeadLine";
import { steps } from "@/constant/steps";
import LpAccordion from "@/components/ui/LpAccordion";
import { canBeTrademarked, canNotBeTrademarked } from "@/constant";
import FAQBox from "@/components/ui/FAQBox";
import TestimonialCarousel from "@/components/ui/TestimonialCarousel";
import PackageSection from "@/components/ui/PackageSection";

const page = () => {
  return (
    <main>
      {/* Header */}
      <header className="flex justify-between bg-color-primary pr-20 max-md:pr-7">
        <Image
          src={`/images/secure-your-mark-logo.png`}
          alt="secure your mark"
          width={200}
          height={65}
          className="max-md:w-38 max-md:h-14"
        />
        <div className="flex-center gap-2 max-md:hidden">
          <Image
            src={`/images/bell-fill.png`}
            alt="Bell"
            width={20}
            height={20}
            className="object-contain"
          />
          <p className="text-xs text-white">
            Get Started with Our Expert Services—Fast, Easy, and Affordable
            Protection for Your Business.
          </p>
        </div>

        <Link
          href="tel:+14082562372"
          className="flex-center bg-white py-2 gap-2 px-4 rounded-2xl my-4"
        >
          <Image
            src={`/images/orange-phone-icon.png`}
            alt="Bell"
            width={16}
            height={16}
            className="object-contain"
          />

          <h4 className="text-color-primary text-sm font-semibold">
            +1 (408) 256-2372
          </h4>
        </Link>
      </header>

      {/* Hero Section */}
      <section className="bg-[#fffbf9]">
        <div className="section-center max-md:py-12 max-md:pt-26">
          <div className="flex-between max-md:flex-col max-md:justify-around pr-10 max-md:pr-5 pl-14 max-md:pl-5 h-[90vh] max-md:h-auto">
            <div className="col-flex gap-3 max-md:gap-4 w-[750px] max-md:w-full max-md:mb-16">
              <div>
                <div className="flex gap-2 max-md:mb-3 ">
                  <p className="text-color-primary">We are here</p>
                  <Image
                    src={`/images/indicator-line.png`}
                    alt="Indicator Line"
                    width={80}
                    height={10}
                    className="object-contain"
                  />
                </div>
                <div className="text-[35px] max-md:text-[28px] font-bold text-color-secondary">
                  <h1>
                    Register a{" "}
                    <span className="text-color-primary px-2 py-0 bg-[#f2560154] rounded-md">
                      trademark
                    </span>{" "}
                    for your Business Name, Slogan, or Logo Starting at
                  </h1>
                  <h1 className="text-color-primary text-[40px] max-md:text-[30px]">
                    $35+ Federal Office Filing Fee
                  </h1>
                </div>
              </div>
              <p className="w-[90%] max-md:w-full">
                Start by filling out our simple trademark questionnaire,
                Affordable Rates, Expert Legal Support, Get your serial number
                of trade mark registration once your trademark application is
                filed with us!
              </p>
              <div className="mt-5 max-md:mt-8 max-md:text-center max-md:hidden">
                <PrimaryButton
                  text={"Trademark Now"}
                  animate={true}
                  size={`xl`}
                />
              </div>
              <div className="mt-5 max-md:mt-8 max-md:text-center hidden max-md:block">
                <PrimaryButton
                  text={"Trademark Now"}
                  animate={true}
                  size={`2xl`}
                />
              </div>
            </div>
            <Link href={`trademark-register`}>
              <Image
                src={`/images/hero-image.png`}
                alt="Information"
                width={350}
                height={400}
                className="object-contain max-md:w-[95%] max-md:h-auto max-md:m-auto"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="col-flex gap-20 max-md:gap-14 max-md:pt-8 pb-24 bg-[#fffbf9]">
        <div className="text-center max-md:px-5">
          <HeadLine text={`3 Step Process`} />
          <p className="mt-3 text-lg">
            Get your registered trademark in 3 easy steps.
          </p>
        </div>
        <div className="flex-center max-md:flex-col max-md:gap-1">
          {steps.map((step) => (
            <>
              <div
                key={step.id}
                className="col-flex w-[300px] h-[280px] bg-white custom-shadow rounded-md items-center justify-around px-3 max-md:py-2"
              >
                <h1 className="text-lg text-color-primary font-semibold">
                  {step.title}
                </h1>
                <Image
                  src={`/images/${step.image}`}
                  alt="Icon"
                  width={100}
                  height={100}
                  className="object-contain"
                />
                <p className="text-slate-600 text-sm text-center">
                  {step.details}
                </p>
              </div>
              <Image
                src={`/images/orange-arrow-right.png`}
                alt="Right Indicator"
                width={50}
                height={7}
                className="object-contain last:hidden max-md:rotate-90"
              />
            </>
          ))}
        </div>
        <div className="flex-center max-md:flex-col max-md:gap-5 gap-9">
          <PrimaryButton text={"Trademark Now"} animate={false} size={`xl`} />
          <Button
            variant="bordered"
            className={`rounded-full  font-semibold text-color-primary border-[#F25601] px-14 py-[23px]`}
          >
            {`Contact Us`}
          </Button>
        </div>
        <PackageSection />
      </section>

      {/* Protection Mode Section */}
      <section className="flex-center max-md:flex-col gap-20 max-md:gap-5 bg-[#F0F0F0] py-16">
        <div>
          <Image
            src={`/images/laptop-mockup.png`}
            alt="Right Indicator"
            width={500}
            height={400}
            className="object-contain"
          />
        </div>
        <div className="max-w-[500px] max-md:max-w-[90%]">
          <h1 className="text-color-primary text-4xl font-bold">{`Trademark Protection Made Easy`}</h1>
          <div className="my-5 max-md:my-7">
            <LpAccordion />
          </div>
          <PrimaryButton text={"Trademark Now"} animate={false} size={`lg`} />
        </div>
      </section>

      {/* What can be Trademarked */}
      <section className="flex-center max-md:flex-col gap-20 max-md:gap-12 bg-[#fffbf9] py-28 max-md:px-7">
        <div className="bg-white px-10 py-14 rounded-md custom-shadow">
          <h1 className="text-2xl font-bold text-color-secondary mb-4">
            Can be Trademarked
          </h1>
          <ul className="flex flex-col gap-3 mb-8">
            {canBeTrademarked.map((item) => (
              <li key={item.id} className="flex gap-3">
                <Image
                  src={`/images/checkmark.png`}
                  alt="Checkmark"
                  width={20}
                  height={20}
                  className="object-contain"
                />
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
          <PrimaryButton text={"Get Started Now"} animate={false} size={`md`} />
        </div>
        <div>
          <div className="text-3xl font-bold text-color-secondary mb-9">
            <h1>{`What Can and Can't Be`} </h1>
            <h1 className="text-color-primary">Trademarked?</h1>
          </div>
          <div className="bg-white px-10 py-14 rounded-md custom-shadow w-[400px] max-md:w-full">
            <ul className="flex flex-col gap-3 ">
              {canNotBeTrademarked.map((item) => (
                <li key={item.id} className="flex items-start gap-3">
                  <Image
                    src={`/images/crossmark.png`}
                    alt="crossmark"
                    width={20}
                    height={20}
                    className="object-contain mt-1"
                  />
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#F0F0F0] py-24 max-md:py-20">
        <div className="flex-center flex-col gap-4">
          <HeadLine text={`Testimonials`} />
          <Image
            src={`/images/trustpilot-excellent.png`}
            alt="trustpilot-excellent"
            width={200}
            height={100}
            className="object-contain max-md:w-[300px]"
          />
          <div className="flex-center gap-2 max-md:px-8 max-md:items-end">
            <p>
              Rated 4.9 / 5 based on{" "}
              <span className="font-semibold">255,672 reviews</span> on
            </p>
            <Image
              src={`/images/trustpilot-logo.png`}
              alt="trustpilot-logo"
              width={100}
              height={50}
              className="object-contain"
            />
          </div>

          <div className="max-md:w-full">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className=" bg-[#fffbf9]">
        <div className="section-center">
          <div className="flex justify-center max-md:flex-col max-md:w-[90%] max-md:m-auto gap-20 max-md:gap-10 py-28 max-md:py-20">
            <div className="max-w-[450px] col-flex gap-5 items-center">
              <div className="text-center ">
                <HeadLine text={`FAQs`} />
                <p className="mt-3 text-lg text-color-primary max-md:text-center">
                  Protect Your Brand with Confidence - Expert Trademark Services
                  Made Simple.
                </p>
              </div>
              <Image
                src={`/images/faq-icon.png`}
                alt="trustpilot-excellent"
                width={180}
                height={180}
                className="object-contain mt-4"
              />
            </div>
            <div className="max-w-[600px] col-flex gap-9">
              <h1 className="text-sm font-medium">
                {`Our FAQ section provides clear and concise answers to common
                questions about trademark registration and protection. Whether
                you're curious about the application process, fees, or how to
                handle trademark disputes, we've got you covered. Explore our
                FAQs to get quick and reliable information.`}
              </h1>
              <FAQBox />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="bg-color-primary-gradient relative">
        <div className="flex-center max-md:flex-col text-white py-32 gap-44 max-md:gap-1 max-md:py-24 max-md:pt-20">
          <div>
            <div className="flex items-center gap-2 max-md:gap-0 max-md:flex-col">
              <p className="text-sm font-normal max-md:mb-1">Call us at:</p>
              <Link href="tel:+13104244909" className="text-lg font-semibold">
                +1 (310) 424-4909
              </Link>
              <p className="text-xs font-normal">Mon-Fri 6:00 am - 5:00 pm</p>
            </div>
            <div className="col-flex max-md:items-center gap-1 max-md:gap-0 mt-7 max-md:mt-5 mb-16 max-md:mb-8">
              <p className="text-sm font-light">Email us for any support:</p>
              <Link
                href="mailto:support@secureyourmark.com"
                className="text-lg font-semibold"
              >
                support@secureyourmark.com
              </Link>
            </div>
            {/* <Image
                src={`/images/contact-logo.png`}
                alt="contact-logo"
                width={300}
                height={80}
                className="object-contain absolute left-0 max-md:bottom-[-10px]"
              /> */}
          </div>
          <div className="col-flex gap-4 max-md:gap-2 max-w-[300px]">
            <div className="flex gap-2">
              <h1 className="text-base font-medium">
                Looking for Professional Trademark Registration Services?
              </h1>
              <Image
                src={`/images/female-attorney.png`}
                alt="female attorney"
                width={60}
                height={80}
                className="object-contain rounded-md"
              />
            </div>
            <p className="text-sm font-light opacity-90">
              Connect with our experts to get expert trademark assistance!
            </p>
            <Link
              href="tel:+13104244909"
              className="py-2 px-2 text-sm bg-white rounded-full text-color-primary font-semibold text-center block max-md:mt-5"
            >
              Call Now
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="flex-center max-md:flex-col max-md:gap-10 py-28 max-md:py-20 gap-32">
        <div className="col-flex gap-3 max-md:px-10">
          <h1 className="text-2xl font-normal">Get your trademark today</h1>
          <div className="font-extralight">
            <p>Thousands have protected their brand by filing a trademark.</p>
            <p>What are you waiting for?</p>
          </div>
        </div>
        <div className="">
          <PrimaryButton
            text={"Start Filling Application"}
            animate={true}
            size={`xl`}
          />
        </div>
      </section>

      {/* Footer section */}
      <section className="bg-color-footer-gradient">
        <div className="flex-center max-md:flex-col py-28 gap-32 max-md:gap-16 max-md:py-24">
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
            <div className="flex items-center gap-5 mt-7 max-md:mt-3">
              <Link href="tel:+14082562372" className="flex-center">
                <Image
                  src={`/images/orange-phone-icon.png`}
                  alt="Bell"
                  width={24}
                  height={24}
                  className="object-contain"
                />
                <div className="flex flex-col items-center">
                  <h4 className="text-color-primary text-base font-semibold">
                    +1 (408) 256-3271
                  </h4>
                  <p className="text-xs !text-black">Secure Your Mark</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="max-w-[400px] text-white">
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
    </main>
  );
};

export default page;
