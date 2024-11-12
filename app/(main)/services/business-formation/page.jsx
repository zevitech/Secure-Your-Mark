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
import BusinessStructure from "@/components/sections/BusinessStructure";
import HowItWorkLine from "@/components/ui/HowItWorkLine";

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
      <PageHero
        subHeading={`We are here`}
        heading={`Start Your Business the Right Way!`}
        bgImg={`business-formation.png`}
        details={`Expert guidance to establish your business legally and efficiently.`}
        btnIsShuffle={true}
      />

      {/* why Choose us - business formation*/}
      <section className="bg-[#ECF0F2] py-32 max-md:px-5 max-md:py-20">
        <div className="text-slate-800 max-w-[1100px] m-auto pb-10 max-md:pb-5">
          <h1 className="text-lg max-md:text-base">
            Briefly explain the importance of proper business formation.
          </h1>
          <p className="text-3xl font-semibold max-md:text-2xl">
            Why Choose Us for Business Formation?
          </p>
        </div>
        <div className="col-flex gap-5">
          <div className="flex-center gap-5 max-md:gap-0 h-[180px] max-md:h-auto max-md:flex-col">
            <div className="w-[300px] h-full p-5 bg-white max-md:bg-transparent rounded-lg flex-center flex-col gap-5 max-md:gap-2 text-slate-700">
              <Image
                width={70}
                height={100}
                alt="'"
                src={`/images/bf-1.png`}
                className="object-contain"
              />
              <h2 className="text-lg font-semibold ">Legal Compliance</h2>
            </div>
            <div className="w-[700px] max-md:w-full bg-white rounded-lg p-10 max-md:p-5 h-full hover:bg-[#0085FF] hover:text-white transition-all ">
              <p className="max-md:text-sm">
                {`Ensuring your business is properly formed helps you meet all legal requirements, from licenses to permits and industry regulations. This foundation not only minimizes the risk of penalties but also builds credibility, helping your business operate smoothly and responsibly.`}
              </p>
            </div>
          </div>
          <div className="flex-center gap-5 max-md:gap-0 h-[180px] max-md:h-auto flex-row-reverse max-md:flex-col">
            <div className="w-[300px] h-full p-5 bg-white max-md:bg-transparent rounded-lg flex-center flex-col gap-5 max-md:gap-2 text-slate-700">
              <Image
                width={70}
                height={100}
                alt="'"
                src={`/images/bf-2.png`}
                className="object-contain"
              />
              <h2 className="text-lg font-semibold ">Tax Benefits</h2>
            </div>
            <div className="w-[700px] max-md:w-full hover:bg-white rounded-lg p-10 max-md:p-5 h-full bg-[#0085FF] text-white  hover:text-slate-800 transition-all ">
              <p className="max-md:text-sm">
                {`Choosing the right business structure can lead to significant tax savings. We guide you through options that maximize deductions and benefits, helping you reduce tax liability and keep more of your earnings, so you can reinvest in business growth.`}
              </p>
            </div>
          </div>
          <div className="flex-center gap-5 max-md:gap-0 h-[180px] max-md:h-auto max-md:flex-col">
            <div className="w-[300px] h-full p-5 bg-white max-md:bg-transparent rounded-lg flex-center flex-col gap-5 max-md:gap-2 text-slate-700">
              <Image
                width={70}
                height={100}
                alt="'"
                src={`/images/bf-3.png`}
                className="object-contain"
              />
              <h2 className="text-lg font-semibold ">Liability Protection</h2>
            </div>
            <div className="w-[700px] max-md:w-full bg-white rounded-lg p-10 max-md:p-5 h-full hover:bg-[#0085FF] hover:text-white transition-all ">
              <p className="max-md:text-sm">
                {`Proper business formation separates your personal and business assets, providing a vital layer of protection. If your business faces debts or lawsuits, your personal assets remain safeguarded, ensuring peace of mind and financial security for you and your family.`}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* business structure */}
      <section className="py-28 bg-slate-100 max-md:py-20 max-md:px-5">
        <BusinessStructure />
      </section>

      {/* how it works */}
      <section className="py-28 bg-[#ECF0F2] max-md:py-20 max-md:px-5">
        <div className="col-flex justify-center items-center gap-5 max-w-4xl m-auto  max-md:px-3 mb-10">
          <h1 className="text-4xl max-md:text-3xl max-md:mb-3 text-slate-800 font-medium">
            Choose the Right Business Structure?
          </h1>
          <p className="text-slate-500 text-base text-center max-md:text-start">
            {`Start with a quick consultation, provide essential details, and our experts handle the filing process, ensuring smooth and secure setup.`}
          </p>
        </div>
        <div className="col-flex gap-6">
          <HowItWorkLine
            step={`1`}
            details={`Choose Your Business Structure`}
          />
          <HowItWorkLine step={`2`} details={`Register Your Business Name`} />
          <HowItWorkLine step={`3`} details={`File Formation Documents`} />
          <HowItWorkLine
            step={`4`}
            details={`Obtain EIN (Employer Identification Number)`}
          />
          <HowItWorkLine step={`5`} details={`State Filing and Compliance`} />
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
