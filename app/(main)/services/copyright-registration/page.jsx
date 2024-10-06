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

const page = () => {
  return (
    <main>
      <Header />
      <PageHero
        subHeading={`We are here`}
        bgImg={`sym-hero-bg-trademark.png`}
        heading={`Boosting Excellence with Every Service.`}
        details={`Boosting excellence is our mission. With every service we provide, we strive to empower your success. Choose us for top-notch solutions tailored just for you.`}
      />

      {/* protect your property */}
      <section className="bg-[#FFFAF8] py-28 max-md:py-20 max-md:px-5">
        <div className="flex-center max-md:flex-col max-md:gap-10 gap-20">
          <div className="max-w-xl ">
            <h1 className="text-4xl max-md:text-3xl text-slate-700 font-medium mb-2">
              Protect Your Intellectual Property Today!
            </h1>
            <p className="text-lg mt-4 mb-8 text-slate-700">
              {`Protecting your intellectual property (IP) is crucial in today's
              fast-paced and competitive market. Whether you are an
              entrepreneur, inventor, or business owner, securing your IP rights
              ensures that your hard work and creativity are safeguarded. Don't
              leave your innovations vulnerable—take the necessary steps to
              protect your intellectual property today.`}
            </p>
            <PrimaryButton text={"Learn More >"} size={"xl"} animate={true} />
          </div>
          <div className="max-w-lg col-flex gap-9">
            <div className="col-flex gap-3">
              <h2 className="text-color-primary bg-[#f256015c] py-2 px-6 rounded-full w-fit">
                Legal Safeguard
              </h2>
              <p className=" text-slate-700">
                Protect your brand, inventions, and creative works from
                unauthorized use by securing your intellectual property rights.
              </p>
            </div>
            <div className="col-flex gap-3 direction-rtl">
              <h2 className="text-color-primary bg-[#f256015c] py-2 px-6 rounded-full w-fit">
                Boost Business Value
              </h2>
              <p className=" text-slate-700">
                {`Strengthen your brand's identity and enhance your business's
                market position by registering your intellectual property.`}
              </p>
            </div>
            <div className="col-flex gap-3">
              <h2 className="text-color-primary bg-[#f256015c] py-2 px-6 rounded-full w-fit">
                Expert Support
              </h2>
              <p className=" text-slate-700">
                Receive professional guidance throughout the IP registration
                process, ensuring your rights are fully protected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* what we do */}
      <section className="bg-[#F0F0F0] py-28  max-md:py-20 max-md:px-5">
        <div className="mb-16 max-md:mb-10">
          <div className="flex-center gap-3">
            <Image
              alt="Line"
              src={`/images/left-line-for-our-team-section.png`}
              width={100}
              height={10}
              className="max-md:w-20"
            />
            <h4 className="text-slate-700 font-normal text-lg">What We Do</h4>
            <Image
              alt="Line"
              src={`/images/right-line-for-our-team-section.png`}
              width={100}
              height={10}
              className="max-md:w-20"
            />
          </div>
          <h1 className="text-4xl max-md:text-3xl max-md:mb-3 text-slate-700 font-medium m-2 text-center">
            Our Trademark Study
          </h1>
          <p className="text-slate-700 text-center max-w-2xl m-auto max-md:text-sm">
            {`Secure Your Mark helps you protect your business by safeguarding
            your digital assets and trademarks. With our expert services, we
            make it easy to register your trademark online and secure your brand
            in today's competitive landscape.`}
          </p>
        </div>
        <div className="flex-center gap-10 flex-wrap">
          {trademarkStudy.map((item, index) => (
            <div
              key={index}
              className="col-flex items-center gap-3 max-md:gap-2 w-[450px] max-md:w-[97%] p-10 max-md:p-6 max-md:py-8 bg-slate-50 transition-background hover:bg-[#F25601] hover:text-white text-slate-800 text-center rounded-xl shadow-lg"
            >
              <Image
                alt={item.heading}
                src={`/images/${item.icon}`}
                width={70}
                height={70}
              />
              <h1 className="text-lg font-semibold mt-4">{item.heading}</h1>
              <p className="text-sm ">{item.details}</p>
            </div>
          ))}
        </div>
        <div className="flex-center mt-14">
          <PrimaryButton size={"3xl"} animate={true} text={"Trademark Now"} />
        </div>
      </section>

      {/* 3 step process */}
      <section className="bg-[#FFFAF8] py-28  max-md:py-20 max-md:px-5">
        <div className="mb-20 max-md:mb-16">
          <div className="flex-center gap-3">
            <Image
              alt="Line"
              src={`/images/left-line-for-our-team-section.png`}
              width={70}
              height={10}
            />
            <h4 className="text-slate-700 font-normal text-lg">Just</h4>
            <Image
              alt="Line"
              src={`/images/right-line-for-our-team-section.png`}
              width={70}
              height={10}
            />
          </div>
          <h1 className="text-4xl text-slate-700 font-medium m-2 text-center">
            3 Step Process
          </h1>
        </div>
        <div className="flex-center max-md:flex-col gap-12">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative bg-[#F0F0F0] shadow-sm rounded-md w-[300px] min-h-[250px] col-flex items-center gap-3 p-5 text-center"
            >
              <div className="absolute top-[-20px] right-[-20px] rounded-full flex-center w-12 h-12 text-white text-xl font-bold  bg-[#d50000]">
                {step.id}
              </div>
              <Image
                alt={step.heading}
                src={`/images/${step.icon}`}
                width={70}
                height={70}
              />
              <h1 className="text-lg font-semibold mt-4 text-color-primary">
                {step.heading}
              </h1>
              <p className="text-sm">{step.details}</p>
            </div>
          ))}
        </div>
        <div className="flex-center gap-10 mt-20 max-md:mt-10 max-md:flex-col max-md:gap-4">
          <JointBtn />
        </div>
      </section>

      {/* packages */}
      <section className="bg-[#F0F0F0] py-28 max-md:py-20 max-md:px-5">
        <PackageSection />
      </section>

      {/* how it works section */}
      <HowItWorks />

      {/* testimonial section */}
      <TestimonialSection />

      {/* footer section */}
      <Footer />
    </main>
  );
};

export default page;
