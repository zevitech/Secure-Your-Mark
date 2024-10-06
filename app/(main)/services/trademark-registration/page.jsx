import React from "react";
import Header from "@/components/ui/Header";
import PageHero from "@/components/ui/PageHero";
import Image from "next/image";
import StatisticCountBox from "@/components/ui/StatisticCountBox";
import PrimaryButton from "@/components/ui/PrimaryButton";
import Footer from "@/components/ui/Footer";
import TestimonialSection from "@/components/ui/TestimonialSection";
import PackageSection from "@/components/ui/PackageSection";
import JointBtn from "@/components/buttons/JointBtn";

const page = () => {
  return (
    <main>
      <Header />
      <PageHero
        subHeading={`We are here`}
        heading={`Trademark Registration for Your Business!`}
        bgImg={`services-tm.png`}
        details={`Protect your business before it is fully established and prevent other companies from replicating your digital assets, such as logos, names, slogans, and more.`}
        btnIsShuffle={true}
      />
      <section className="max-w-5xl max-md:w-[95%] m-auto pb-10 bg-slate-200 rounded-md mt-[-30px] px-10 shadow-lg">
        <div className="flex-center max-md:flex-col gap-36 max-md:gap-20 ">
          <div className="col-flex gap-2 max-md:gap-1 -mt-12 max-md:flex-center">
            <Image
              alt="Happy Customer"
              src={`/images/user-with-star.png`}
              width={120}
              height={120}
            />
            <StatisticCountBox text={`Happy Customer`} number={15400} />
          </div>
          <div className="col-flex gap-2 max-md:gap-1 -mt-12 max-md:flex-center">
            <Image
              alt="Taglines Trademarked"
              src={`/images/customize-icon.png`}
              width={120}
              height={120}
            />
            <StatisticCountBox text={`Taglines Trademarked`} number={500} />
          </div>
          <div className="col-flex gap-2 max-md:gap-1 -mt-12 max-md:flex-center">
            <Image
              alt="Logos Trademarked"
              src={`/images/customize-icon.png`}
              width={120}
              height={120}
            />
            <StatisticCountBox text={`Logos Trademarked`} number={6400} />
          </div>
        </div>
      </section>

      {/* protect property */}
      <section className="py-28 max-md:py-20 max-md:px-5">
        <div className="flex-center max-md:flex-col gap-14">
          <div className="max-w-lg">
            <div className="mb-5 ">
              <h1 className="text-4xl max-md:text-3xl text-slate-700 font-medium mb-2">
                Protect Your Business From Infringement
              </h1>
              {/* <p className="text-lg">
                Experienced Trademark Registration Partners!
              </p> */}
            </div>
            <div className="col-flex gap-3 mb-8">
              <h2 className="text-color-primary bg-[#f256015c] py-2 px-6 rounded-full font-semibold w-fit">
                Protect & Verify Domain Name
              </h2>
              <h2 className="text-color-primary bg-[#f256015c] py-2 px-6 rounded-full font-semibold w-fit">
                Enforce Rights
              </h2>
              <h2 className="text-color-primary bg-[#f256015c] py-2 px-6 rounded-full font-semibold w-fit">
                Differentiate Your Business
              </h2>
            </div>
            <PrimaryButton
              text={"Get Started Now"}
              size={"lg"}
              animate={true}
            />
          </div>
          <div>
            <Image
              src={"/images/two-attorney.png"}
              alt="group of attorney picture"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>

      {/* packages */}
      <section className="bg-[#F0F0F0] py-28 max-md:py-20 max-md:px-5">
        <PackageSection />
      </section>

      {/* why expose section */}
      <section className="bg-[#FFFAF8] py-28 max-md:py-20 max-md:px-5">
        <div className="max-w-5xl m-auto text-center">
          <h1 className="font-bold text-4xl max-md:text-3xl leading-relaxed">
            Why expose your Digital Assets to infringement when you can
            <span className="text-color-primary">Trademark your Business?</span>
          </h1>
          <p className="text-slate-700 mt-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            vel? Eaque animi perferendis commodi enim qui fugit doloribus
            corporis, sit in at dicta excepturi quaerat quos exercitationem
            odit! Et ea praesentium id consectetur laboriosam dolorem earum
            mollitia. Optio assumenda corporis quo fugiat quidem ea cumque
            praesentium consequuntur minus, reiciendis ipsa hic vitae, cum odio
            expedita et eos magni enim! Veritatis sequi provident dolor nobis
            sapiente nesciunt, beatae assumenda magnam corrupti eos ipsam
            dolorem nostrum delectus deserunt maiores consequuntur cum sunt
            architecto natus dicta sint hic voluptatibus? Quae, deleniti
            consequatur saepe ipsum ducimus magnam ipsa eius, consequuntur
            eveniet asperiores molestias rerum.
          </p>
        </div>
        <div className="flex-center gap-10 mt-10">
          <JointBtn />
        </div>
      </section>

      {/* testimonial section */}
      <TestimonialSection />

      {/* footer section */}
      <Footer />
    </main>
  );
};

export default page;
