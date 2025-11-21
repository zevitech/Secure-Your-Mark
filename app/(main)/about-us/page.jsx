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
        heading={`About Our Trademark Services`}
        bgImg={`about-us-hero.png`}
        details={`At Secure Your Mark, we offer comprehensive trademark protection packages designed to meet the unique needs of your brand. Choose our DIY-assisted service for a hands-on approach, allowing you to navigate the trademark registration process at your own pace. Alternatively, you can enlist the expertise of our experienced attorneys to guide you through the filing process, ensuring every detail is expertly handled. Our goal is to empower you to secure your trademark confidently and effectively, safeguarding your brand's identity in the marketplace.`}
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
                {`Our team is dedicated to ensuring a seamless process, from helping you apply for a trademark with the Federal Office to securing your brand for Amazon Brand Registry. We offer personalized support for every step, ensuring your business is legally protected.`}
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
            number={`+9930400`}
            number02={`+9945006`}
            details={`With years of experience in trademark registration and brand protection, he helps businesses secure their digital assets confidently. His expertise spans from filing trademarks to handling complex legal processes, ensuring your brand is protected in the online world. He guides companies through every step, providing comprehensive support. Whether it's securing your trademark or managing legal intricacies, he ensures your brand's safety. Trust him to protect your business's identity and digital assets effectively, allowing you to focus on growth with peace of mind.`}
          />
          <AboutAttorneyCard
            image={`2nd-attorney.png`}
            name={`Jhon Felx`}
            number={`+9902100`}
            number02={`+9900506`}
            details={`As a specialist in trademark law, John Felix provides expert guidance on registering business trademarks and securing brand protection. He focuses on digital trademarks and intellectual property, ensuring your brand stays protected in a dynamic market. His comprehensive services help clients safeguard their business assets and maintain a competitive edge. From filing applications to navigating legal complexities, he offers tailored support for every need. John works closely with businesses to protect their intellectual property, keeping them secure as they grow. Trust him for effective, long-term brand protection solutions.`}
          />
          <AboutAttorneyCard
            image={`3rd-attorney.png`}
            name={`Luca Tony`}
            number={`+9900000`}
            number02={`+9900006`}
            details={`Luca Tony offers extensive expertise in international trademark registration and digital brand security. He guides businesses through every step, from filing trademarks to addressing legal challenges. With a global approach, Luca helps secure trademarks across borders, ensuring your brand’s identity remains protected. His services are tailored to support companies in navigating complex legal landscapes and defending their intellectual property. Luca’s focus on digital security ensures brands stay safe in the online marketplace. Rely on him for comprehensive trademark protection and brand safeguarding worldwide.`}
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
