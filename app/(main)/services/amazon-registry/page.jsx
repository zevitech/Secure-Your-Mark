import React from "react";
import Header from "@/components/ui/Header";
import PageHero from "@/components/ui/PageHero";
import Image from "next/image";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { steps, trademarkStudy } from "@/constant";
import Footer from "@/components/ui/Footer";
import HowItWorks from "@/components/ui/HowItWorks";
import TestimonialSection from "@/components/ui/TestimonialSection";
import PackageSection from "@/components/ui/PackageSection";
import JointBtn from "@/components/buttons/JointBtn";
import RebonCard from "@/components/ui/RebonCard";
import HeroBtn from "@/components/buttons/HeroBtn";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import WhyRegisterCard from "@/components/ui/WhyRegisterCard";
import { BiPlay } from "react-icons/bi";
import { FaPlay } from "react-icons/fa";

const Page = () => {
  const listOfItems = [
    {
      icon: "cr-icon-1.png",
      details: "Legal Protection for Your Original Work",
    },
    {
      icon: "cr-icon-2.png",
      details: "Proof of Ownership and Creation",
    },
    {
      icon: "cr-icon-3.png",
      details: "Right to License and Monetize Your Work",
    },
    {
      icon: "cr-icon-4.png",
      details: "Prevent Unauthorized Usage",
    },
    {
      icon: "cr-icon-5.png",
      details: "Enhance the Value of Your Intellectual Property",
    },
  ];

  const eligibleItems = [
    "Must have an active registered trademark in the country you're enrolling.",
    "The trademark must be in text or image format.",
    "The Amazon Brand Registry supports trademarks from several countries, including the US, UK, Canada, and more.",
  ];

  return (
    <main>
      <Header />

      <section
        style={{ backgroundImage: `url('/images/amazon-registration.png')` }}
        className={`py-10 max-md:py-14 w-full h-[90vh] max-md:h-auto max-md:min-h-[70vh] max-md:pb-24 max-md:px-5 flex items-center text-white bg-no-repeat bg-center bg-cover`}
      >
        <div className="flex flex-col max-w-6xl max-md:w-full m-auto gap-10 max-md:gap-5">
          <div>
            <div className="font-bold text-5xl max-md:text-4xl leading-tight">
              <h1 className="flex-center">
                Protect Your Brand with
                <span>
                  <Image
                    alt="amazon"
                    src={`/images/amazon.png`}
                    width={200}
                    height={10}
                    className="object-contain mt-[25px] px-3"
                  />
                </span>
              </h1>
              <h1> Brand Registry</h1>
            </div>
            <p className="text-slate-300 mt-5 text-lg">{`Secure your brand and prevent counterfeiters on the world's largest marketplace.`}</p>
          </div>

          <div
            className={`max-md:gap-5 flex items-center justify-between gap-20 !font-poppins
            `}
          >
            <HeroBtn />
            <Button
              as={Link}
              href="/contact-us"
              color="warning"
              variant="light"
              className="px-12 py-7 text-md text-[#F3F4F6] max-md:hidden font-[400] tracking-[0%] leading-[auto]"
              radius="sm"
            >
              {`> Contact Us`}
            </Button>
          </div>
        </div>
      </section>

      {/* why register */}
      <section className="bg-[#F0F0F0] py-28 max-md:px-5 max-md:py-16">
        <div className="max-w-[1100px] m-auto">
          <h1 className="text-4xl max-md:text-3xl max-md:mb-3 text-slate-800 font-medium mb-14">
            Why Register Your Brand on Amazon?
          </h1>
          <div className="flex flex-wrap gap-6">
            <WhyRegisterCard
              img={`wr-icon-1.png`}
              title={`Enhanced Brand Protection`}
              details={`Prevent unauthorized sellers from listing your products.`}
              width={`600px`}
            />
            <WhyRegisterCard
              img={`wr-icon-2.png`}
              title={`Improved Product Listings`}
              details={`Gain more control over product titles, details, and images.`}
              width={`470px`}
            />
            <WhyRegisterCard
              img={`wr-icon-3.png`}
              title={`Access to New Tools`}
              details={`Benefit from tools like Brand Dashboard and A+ Content.`}
              width={`400px`}
            />
            <WhyRegisterCard
              img={`wr-icon-4.png`}
              title={`Enhanced Reporting`}
              details={`Easier ways to detect and report violations.`}
              width={`445px`}
            />
            <div className="h-[200px] w-[200px] max-md:w-full bg-[#232E48] custom-shadow rounded-lg text-slate-700 col-flex justify-center items-center gap-5">
              <Image
                alt="Icon"
                src={`/images/amazon.png`}
                width={100}
                height={10}
                className="object-contain"
              />
              <div>
                <FaPlay className="text-slate-100 text-2xl" />
              </div>
              <Link
                href={`/trademark-register`}
                className="w-[80%] py-3 bg-slate-100 font-semibold text-center rounded-md"
              >
                Registration
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* trademark filing */}
      <section className="py-28 max-md:py-10 max-md:px-5">
        <h1 className="text-4xl max-md:text-3xl max-md:mb-3 text-slate-800 font-medium mb-16 text-center">
          How Our Services Make It Easy
        </h1>
        <div className="flex-center gap-20 max-md:flex-col-reverse max-md:gap-8 ">
          <div className="max-w-lg col-flex gap-10">
            <ul className="col-flex gap-10 max-md:gap-6">
              <li className="flex gap-3 items-start">
                <Image
                  width={40}
                  height={40}
                  alt="rectangle"
                  src={`/images/tr-1.png`}
                  className="object-contain"
                />
                <div className="">
                  <h1 className="text-2xl max-md:text-[20px] font-semibold">
                    Trademark Filing
                  </h1>
                  <p className="text-base mt-2">
                    Assistance in filing the required trademarks to qualify.
                  </p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <Image
                  width={40}
                  height={40}
                  alt="rectangle"
                  src={`/images/tr-2.png`}
                  className="object-contain"
                />
                <div className="">
                  <h1 className="text-2xl max-md:text-[20px] font-semibold">
                    Step-by-Step Guidance
                  </h1>
                  <p className="text-base mt-2">
                    We guide you through each part of the Amazon Brand Registry
                    process.
                  </p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <Image
                  width={40}
                  height={40}
                  alt="rectangle"
                  src={`/images/tr-3.png`}
                  className="object-contain"
                />
                <div className="">
                  <h1 className="text-2xl max-md:text-[20px] font-semibold">
                    Quick & Efficient
                  </h1>
                  <p className="text-base mt-2">
                    Ensure fast approval with minimal hassle.
                  </p>
                </div>
              </li>
            </ul>
            <PrimaryButton text={"Start Now"} size={"xl"} animate={true} />
          </div>
          <div className="">
            <Image
              width={500}
              height={500}
              alt="partners"
              src={`/images/AmazonBrandRegistry.png`}
              className="object-contain rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* Who is Eligible? */}
      <section className="py-28 max-md:py-10 max-md:px-5 bg-[#F0F0F0]">
        <div className="flex-center gap-20 max-md:flex-col-reverse max-md:gap-8 ">
          <div className="col-flex gap-6">
            <Image
              width={500}
              height={500}
              alt="partners"
              src={`/images/AmazonBrandRegistry.png`}
              className="object-contain rounded-xl"
            />
            <Image
              width={500}
              height={30}
              alt="flags"
              src={`/images/flags.png`}
              className="object-contain"
            />
          </div>
          <div className="max-w-lg col-flex gap-10 text-slate-800">
            <div>
              <h1 className="text-4xl max-md:text-3xl max-md:mb-3 font-medium">
                Who is Eligible?
              </h1>
              <p className="text-lg pt-3">
                It is a long established fact that a reader will be distracted
                by ..
              </p>
            </div>
            <ul className="col-flex gap-7">
              {eligibleItems.map((item, index) => (
                <li className="flex gap-3 items-start" key={index}>
                  <Image
                    width={30}
                    height={30}
                    alt="rectangle"
                    src={`/images/checkmark-circle.png`}
                    className="object-contain"
                  />
                  <p className="text-lg">{item}</p>
                </li>
              ))}
              <Link
                href={`/trademark-register`}
                className="w-full py-6 bg-[#282828] text-slate-100 font-semibold text-center rounded-xl"
              >
                Start Your Registration
              </Link>
            </ul>
          </div>
        </div>
      </section>

      {/* packages */}
      <section className="bg-slate-50 py-28 max-md:py-20 max-md:px-5">
        <PackageSection />
      </section>

      {/* testimonial section */}
      <TestimonialSection />

      {/* footer section */}
      <Footer />
    </main>
  );
};

export default Page;
