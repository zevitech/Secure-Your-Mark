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

  return (
    <main>
      <Header />
      <PageHero
        subHeading={`Protect`}
        bgImg={`sym-hero-bg-trademark.jpg`}
        heading={`Your Creative Work with Copyright Registration`}
        details={`Secure your intellectual property and ensure ownership of your original work. Boosting excellence is our mission. With every service we provide, we strive to empower your success. Choose us for top-notch solutions tailored just for you.`}
        btnIsShuffle={true}
      />

      {/* why should use  */}
      <section className="py-28 max-md:py-20 bg-[#F0F0F0]">
        <div>
          <div className="mb-16 max-md:mb-10 max-md:px-5">
            <div className="flex-center gap-3">
              <Image
                alt="Line"
                src={`/images/left-line-for-our-team-section.png`}
                width={100}
                height={10}
                className="max-md:w-20"
              />
              <h4 className="text-slate-700 font-normal text-lg">Why</h4>
              <Image
                alt="Line"
                src={`/images/right-line-for-our-team-section.png`}
                width={100}
                height={10}
                className="max-md:w-20"
              />
            </div>
            <h1 className="text-4xl max-md:text-3xl max-md:mb-3 text-slate-700 font-medium m-2 text-center">
              Copyright Registration Matters
            </h1>
            <p className="text-slate-700 text-center max-w-2xl m-auto max-md:text-sm">
              {`And typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took`}
            </p>
          </div>
          <div className="flex items-center justify-between max-md:flex-col max-md:gap-8">
            <div className="relative">
              <Image
                src={`/images/cr-img.png`}
                alt="Expert"
                width={600}
                height={600}
                className="object-contain"
              />
              <div className="absolute right-5 bottom-0">
                <PrimaryButton text={"Copyright Registration"} size={"xl"} />
              </div>
            </div>
            <div className="flex-center w-[50%] max-md:w-full max-md:px-5">
              <ul className="bg-white p-7 rounded-lg shadow-md">
                {listOfItems.map((item, index) => (
                  <li
                    key={index}
                    className="flex gap-5 text-slate-600 font-semibold text-base py-4"
                  >
                    <Image
                      src={`/images/${item.icon}`}
                      alt="icon"
                      width={30}
                      height={30}
                      className="object-contain"
                    />
                    <p>{item.details}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* how it works */}
      <section className="bg-white max-md:slate-50 py-28 max-md:py-20 max-md:px-5">
        <div className="mb-16 max-md:mb-10">
          <h1 className="text-4xl max-md:text-3xl max-md:mb-3 text-slate-700 font-medium m-2 text-center">
            How It Works
          </h1>
          <p className="text-slate-700 text-center max-w-2xl m-auto max-md:text-sm">
            {`Simple Steps to Register Your Copyright`}
          </p>
        </div>
        <div className="flex-center max-md:flex-col max-md:gap-7">
          <div className="mr-[-60px] max-md:mr-0 relative z-20 max-md:flex">
            <Image
              src={`/images/htw-1.png`}
              alt="Expert"
              width={400}
              height={400}
              className="object-contain max-md:w-[150px]"
            />
            <p className="text-lg max-md:text-base font-medium text-slate-800 max-w-[200px] text-center mt-7 ml-10">
              Choose Your Work Type
            </p>
          </div>
          <div className="mr-[-60px] max-md:mr-0 relative z-10  max-md:flex">
            <Image
              src={`/images/htw-2.png`}
              alt="Expert"
              width={400}
              height={400}
              className="object-contain  max-md:w-[150px]"
            />
            <p className="text-lg max-md:text-base font-medium text-slate-800 max-w-[200px] text-center mt-7 ml-10">
              Fill Out the Application Form
            </p>
          </div>
          <div className="">
            <Image
              src={`/images/htw-3.png`}
              alt="Expert"
              width={290}
              height={300}
              className="object-contain max-md:w-[80%] m-auto"
            />
            <p className="text-lg max-md:text-base font-medium text-slate-800 max-w-[200px] text-center mt-7 ml-10">
              Submit the Required Documents
            </p>
          </div>
        </div>
      </section>

      {/* protect your property */}
      <section className="bg-[#FFFAF8] py-28 max-md:py-20 max-md:px-5">
        <div className="flex-center max-md:flex-col max-md:gap-10 gap-20">
          <div className="max-w-xl ">
            <h1 className="text-4xl max-md:text-3xl text-slate-700 font-medium mb-2">
              Protect Your Intellectual Property Today!
            </h1>
            <p className="text-lg max-md:text-base mt-4 mb-8 text-slate-700">
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

      <section className="">
        <RebonCard />
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
