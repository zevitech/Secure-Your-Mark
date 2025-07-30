import React from "react";
import Header from "@/components/ui/Header";
import PageHero from "@/components/ui/PageHero";
import BrandCarousel from "@/components/ui/BrandCarousel";
import Image from "next/image";
import StatisticCountBox from "@/components/ui/StatisticCountBox";
import PrimaryButton from "@/components/ui/PrimaryButton";
import AttorneyCard from "@/components/ui/AttorneyCard";
import { steps, trademarkStudy } from "@/constant";
import { Button } from "@nextui-org/react";
import Footer from "@/components/ui/Footer";
import Link from "next/link";
import HowItWorks from "@/components/ui/HowItWorks";
import TestimonialSection from "@/components/ui/TestimonialSection";
import ResentBlogsSection from "@/components/ui/ResentBlogsSection";
import ContactForm from "@/components/ui/ContactForm";
import PackageSection from "@/components/ui/PackageSection";
import SearchModal from "@/components/ui/cta-buttons";
import FAQBox from "@/components/ui/FAQBox";
import HeadLine from "@/components/ui/HeadLine";

const page = () => {
  return (
    <main>
      <Header />
      <section
        style={{ backgroundImage: `url('/images/sym-hero-bg-trademark.jpg')` }}
        className={`py-10 max-md:py-14 w-full h-[90vh] max-md:h-auto max-md:min-h-[70vh] max-md:pb-24 max-md:px-5 flex-center text-white bg-no-repeat bg-center bg-cover`}
      >
        <div className="flex flex-col max-w-4xl max-md:w-full m-auto gap-10 max-md:gap-5">
          <div>
            <div className="flex items-center gap-2 text-slate-300">
              <p className="font-inriaSerif">{`We are here`}</p>
              <Image
                src={"/images/title-line.png"}
                alt="Secure Your Mark"
                width={150}
                height={10}
                className={`object-contain`}
              />
            </div>
            <h1 className="text-center font-bold text-5xl max-md:text-4xl max-w-[850px] font-inriaSerif">
              Protect Your Brand - Register{" "}
              <span className="text-color-primary">Trademark</span> Today!
            </h1>

            <p className="text-slate-300 mt-3 *:first-letter:">{`Start the process now and discover how to trademark a name, file a trademark, or apply for your business trademark with ease.`}</p>
          </div>

          <SearchModal />
        </div>
      </section>

      {/* packages */}
      <section className="bg-[#F0F0F0] py-28  max-md:py-20 max-md:px-5">
        <PackageSection />
      </section>

      {/* <section className="max-w-5xl max-md:w-[90%] m-auto pt-9 pb-7 max-md:pb-0 bg-slate-200 rounded-md mt-[-30px] px-10 max-md:px-3 shadow-lg max-md:flex-center">
        <BrandCarousel />
      </section> */}

      {/* about us section */}
      {/* <section className="py-28 max-md:py-20 max-md:px-5">
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
      </section> */}

      {/* meet our attorney */}
      {/* <section className="bg-[#F0F0F0] py-28 max-md:py-20 max-md:px-5">
        <div className="mb-16 max-md:mb-10">
          <div className="flex-center gap-3">
            <Image
              alt="Line"
              src={`/images/left-line-for-our-team-section.png`}
              width={100}
              height={10}
              className="max-md:w-20"
            />
            <h4 className="text-slate-700 font-normal text-lg">Our Team</h4>
            <Image
              alt="Line"
              src={`/images/right-line-for-our-team-section.png`}
              width={100}
              height={10}
              className="max-md:w-20"
            />
          </div>
          <h1 className="text-4xl max-md:text-3xl text-slate-700 font-medium m-2 text-center">
            Meet Our Attorneys
          </h1>
        </div>
        <div className="flex-center gap-10 max-md:flex-col">
          <AttorneyCard
            name={`Murten Joshef`}
            imageName={`1st-attorney.png`}
            flag={`usa-flag.png`}
            details={`With years of experience in trademark registration and brand protection, He ensures that businesses can secure their digital assets with confidence. His expertise covers everything from filing trademarks to navigating complex legal processes, protecting your brand in the online world.`}
          />
          <AttorneyCard
            name={`Jhon Felx`}
            imageName={`2nd-attorney.png`}
            flag={`usa-flag.png`}
            details={`As a specialist in trademark law, Jhon Felx offers comprehensive guidance on how to register business trademarks and apply for brand protection. With a focus on digital trademarks and intellectual property, he helps clients maintain their competitive edge in an evolving market.`}
          />
          <AttorneyCard
            name={`Luca Tony`}
            imageName={`3rd-attorney.png`}
            flag={`mx-flag.png`}
            details={`Luca Tony brings a wealth of experience in international trademark registration and digital brand security. From filing a trademark to handling legal challenges, Luca Tony supports businesses in securing their trademarks across borders and safeguarding their brand identity.`}
          />
        </div>
      </section> */}

      {/* protect your property */}
      <section className="bg-[#FFFAF8] py-28  max-md:py-20 max-md:px-5">
        <div className="flex-center max-md:flex-col gap-20">
          <div className="max-w-xl ">
            <h1 className="text-4xl max-md:text-3xl text-slate-700 font-medium mb-2">
              Protect Your Business with Secure Your Mark!
            </h1>
            <p className="text-lg mt-4 mb-8 text-slate-700">
              {`Securing your intellectual property (IP) is essential in today's competitive business environment. As an entrepreneur, inventor, or business owner, trademarking your brand ensures that your hard work and creativity are safeguarded. With Secure Your Mark, we offer the fastest trademark registration services to protect your business and your brand. Don’t leave your business vulnerable—file a trademark for your business today with our easy online trademark registration process!`}
            </p>
            <div className="max-md:flex-center max-md:w-full">
              <PrimaryButton text={"Learn More >"} size={"xl"} animate={true} />
            </div>
          </div>
          <div className="max-w-lg col-flex gap-9">
            <div className="col-flex gap-3">
              <h2 className="text-color-primary bg-[#f256015c] py-2 px-6 rounded-full w-fit">
                Legal Safeguard
              </h2>
              <p className=" text-slate-700">
                Protect your brand, inventions, and creative works from
                unauthorized use with trademark and brand registration through
                Secure Your Mark.
              </p>
            </div>
            <div className="col-flex gap-3 direction-rtl">
              <h2 className="text-color-primary bg-[#f256015c] py-2 px-6 rounded-full w-fit">
                Boost Business Value
              </h2>
              <p className=" text-slate-700">
                {`Strengthen your brand's identity and enhance your business's market position by registering a trademark for your business name.`}
              </p>
            </div>
            <div className="col-flex gap-3">
              <h2 className="text-color-primary bg-[#f256015c] py-2 px-6 rounded-full w-fit">
                Expert Support
              </h2>
              <p className=" text-slate-700">
                Receive professional guidance from Secure Your Mark throughout
                the trademark registration process, ensuring your rights are
                fully protected.
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
      {/* <section className="bg-[#FFFAF8] py-28  max-md:py-20 max-md:px-5">
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
          <Button
            as={Link}
            href="/trademark-register"
            radius="sm"
            className="bg-color-primary px-14 py-7 text-slate-50 font-semibold max-md:w-[98%]"
          >
            Get Started Now
          </Button>
          <Button
            as={Link}
            href="/contact-us"
            color="red"
            radius="sm"
            variant="bordered"
            className=" px-14 py-7 text-color-primary font-semibold border-[#F25601] max-md:w-[98%]"
          >
            {`> Contact Us`}
          </Button>
        </div>
      </section> */}

      {/* how it works section */}
      <HowItWorks />

      {/* testimonial section */}
      <TestimonialSection />

      {/* FAQ */}
      <section className=" bg-[#fff]">
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

      {/* contact form */}
      <section className="bg-[#F0F0F0] py-28 max-md:py-20 max-md:px-5">
        <div className="flex items-center max-md:flex-col gap-28 max-md:gap-10 max-w-[80%] w-full mx-auto">
          <div className="max-w-md md:ml-20">
            <h1 className="text-4xl text-slate-70 font-medium mb-3">
              Contact Us For Any Enquiry
            </h1>
            <p className="text-slate-700">
              Secure Your Mark offers brand protection in packages that are as
              unique as you are. Choose between our DIY-assisted service or have
              attorneys help you file your trademark.
            </p>
            <div className="flex items-start justify-start flex-col gap-4 mt-9 max-md:mt-3">
              <div className="flex flex-col gap-4">
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
                      +1 (408) 256-2372
                    </h4>
                    <p className="text-xs !text-black">Secure Your Mark</p>
                  </div>
                </Link>

                <Link href="tel:+14082563271" className="flex-center">
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
          </div>
          <ContactForm />
        </div>
      </section>

      {/* resent blogs */}
      {/* <ResentBlogsSection /> */}

      {/* footer section */}
      <Footer />
    </main>
  );
};

export default page;
