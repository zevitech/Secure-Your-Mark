import React from "react";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import { Button } from "@nextui-org/react";
import FaqAccordion from "@/components/ui/FaqAccordion";
import FAQBox from "@/components/ui/FAQBox";

const page = () => {
  return (
    <main>
      <Header />
      {/* faq header */}
      <section
        style={{ backgroundImage: `url('/images/faq-banner.png')` }}
        className={`py-16 max-md:py-10 w-full flex-center text-slate-700 bg-no-repeat bg-center bg-cover`}
      >
        <div className="flex flex-col max-w-4xl m-auto gap-6 text-center">
          <p className="mt-3">{`All your queries are addressed!`}</p>
          <h1 className="font-bold text-5xl max-md:text-4xl leading-tight">
            Frequently Asked
            <span className="text-color-primary"> Questions ?</span>
          </h1>
        </div>
      </section>

      {/* faq's */}
      <section className="bg-[#FFFAF8] pb-28 pt-20 max-md:pb-10 max-md:pt-10 px-20 max-md:px-5">
        <FaqAccordion />
      </section>

      {/* why expose section */}
      <section className="bg-[#F0F0F0] py-28 max-md:py-16">
        <div className="max-w-5xl m-auto text-center">
          <h1 className="font-bold text-4xl max-md:text-3xl leading-relaxed">
            Why expose your Digital Assets to infringement when you can
            <span className="text-color-primary">
              {" "}
              Trademark your Business?
            </span>
          </h1>
        </div>
        <div className="flex-center gap-10 mt-10 max-md:flex-col max-md:gap-3 max-md:mt-7m max-md:px-7">
          <Button
            color="red"
            radius="sm"
            variant="bordered"
            className=" px-14 py-7 text-color-primary font-semibold border-[#F25601] max-md:w-full "
          >
            {`> Contact Us`}
          </Button>
          <Button
            radius="sm"
            className="bg-color-primary px-14 py-7 text-slate-50 font-semibold max-md:w-full"
          >
            Get Started Now
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default page;
