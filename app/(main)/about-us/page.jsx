import React from "react";
import Header from "@/components/ui/Header";
import PageHero from "@/components/ui/PageHero";
import Image from "next/image";
import StatisticCountBox from "@/components/ui/StatisticCountBox";
import PrimaryButton from "@/components/ui/PrimaryButton";
import Footer from "@/components/ui/Footer";
import AboutAttorneyCard from "@/components/ui/AboutAttorneyCard";
import HowItWorks from "@/components/ui/HowItWorks";
import TestimonialSection from "@/components/ui/TestimonialSection";
import ResentBlogsSection from "@/components/ui/ResentBlogsSection";

const page = () => {
  return (
    <main>
      <Header />
      <PageHero
        subHeading={`Here is`}
        heading={`About Our System`}
        bgImg={`about-us-hero.png`}
        details={`Secure Your Mark provides brand protection packages tailored to your uniqueness. Opt for our DIY-assisted service or enlist the assistance of attorneys to file your trademark.`}
        btnIsShuffle={true}
      />
      {/* about us section */}
      <section className="py-28 max-md:py-20 max-md:px-5">
        <div className="flex-center gap-10 max-md:flex-col">
          <div className="max-w-[600px]">
            <div className="mb-5 ">
              <h1 className="text-4xl text-slate-700 font-medium mb-2">
                About Us
              </h1>
              <p className="text-lg">
                Your Trusted Partner for Trademark Registration and Brand
                Protection
              </p>
            </div>
            <div className="col-flex gap-3 text-sm text-slate-600">
              <p>
                {`At Secure Your Mark, we specialize in guiding businesses through the trademark registration process with ease and expertise. Whether you're looking to trademark a name, register a business trademark, or file a trademark for your brand, we simplify the complex legal steps involved.`}
              </p>
              <p>
                {`Our team is dedicated to ensuring a seamless process, from helping you apply for a trademark with the USPTO to securing your brand for Amazon Brand Registry. We offer personalized support for every step, ensuring your business is legally protected.`}
              </p>
              <p>{`Whether you need assistance to register your company name, file a trademark declaration, or simply understand how the process works, Secure Your Mark is your trusted partner in safeguarding your brand's future.`}</p>
            </div>
            <div className="flex mt-7 gap-4 mb-5">
              <StatisticCountBox text={`Happy Customer`} number={15400} />
              <div className="border-slate-300 border-l-[1.5px] pl-4">
                <StatisticCountBox text={`Logos Trademarked`} number={2600} />
              </div>
            </div>
            <PrimaryButton text={"Learn More >"} size={"lg"} animate={false} />
          </div>
          <div>
            <Image
              src={"/images/attorney-group.png"}
              alt="group of attorney picture"
              width={400}
              height={500}
            />
          </div>
        </div>
      </section>

      {/* meet our attorney */}
      <section className="bg-[#F0F0F0] py-28 max-md:py-20 max-md:px-5">
        <div className="mb-16 max-md:mb-10">
          <div className="flex-center gap-3">
            <Image
              alt="Line"
              src={`/images/left-line-for-our-team-section.png`}
              width={100}
              height={10}
            />
            <h4 className="text-slate-700 font-normal text-lg">Our Team</h4>
            <Image
              alt="Line"
              src={`/images/right-line-for-our-team-section.png`}
              width={100}
              height={10}
            />
          </div>
          <h1 className="text-4xl max-md:text-3xl text-slate-700 font-medium m-2 text-center">
            Meet Our Attorneys
          </h1>
        </div>
        <div className="col-flex gap-14">
          <AboutAttorneyCard
            image={`1st-attorney.png`}
            name={`Murten Joshef`}
            number={`+9900000`}
            details={`Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.


It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
          />
          <AboutAttorneyCard
            image={`2nd-attorney.png`}
            name={`Murten Joshef`}
            number={`+9900000`}
            details={`Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.


It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
          />
          <AboutAttorneyCard
            image={`3rd-attorney.png`}
            name={`Murten Joshef`}
            number={`+9900000`}
            details={`Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.


It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
          />
        </div>
      </section>

      {/* testimonial section */}
      <TestimonialSection />

      {/* how it works section */}
      <HowItWorks />

      {/* resent blogs */}
      <ResentBlogsSection />

      {/* footer section */}
      <Footer />
    </main>
  );
};

export default page;
