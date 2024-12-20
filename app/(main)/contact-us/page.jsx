import React from "react";
import Header from "@/components/ui/Header";
import Image from "next/image";
import Footer from "@/components/ui/Footer";
import Link from "next/link";
import HowItWorks from "@/components/ui/HowItWorks";
import TestimonialSection from "@/components/ui/TestimonialSection";
import ResentBlogsSection from "@/components/ui/ResentBlogsSection";
import ContactForm from "@/components/ui/ContactForm";

const page = () => {
  return (
    <main>
      <Header />
      {/* contact us section */}
      <section className="bg-[#FFFAF8] pb-28 pt-16 max-md:py-20">
        <div className="mb-20">
          <div className="flex-center">
            <Image
              src={`/images/contact-us.png`}
              alt="Contact Us"
              width={350}
              height={100}
              className="object-contain rounded-md"
            />
          </div>
          <p className="max-w-2xl text-color-primary text-center m-auto mt-5">
            {`Get in touch with us for personalized support and expert guidance on
            securing your brand. We are here to assist you with all your
            trademark and brand protection needs.`}
          </p>
        </div>
        <div className="flex-between gap-28 max-md:flex-col max-md:gap-10">
          <div
            className="max-w-[40%] max-md:max-w-full py-28 max-md:py-16 pl-24 max-md:pl-7 max-md:pr-7 rounded-e-3xl max-md:mr-4"
            style={{
              background:
                "linear-gradient(102.29deg, rgba(255, 142, 81, 0.45) 0%, rgba(242, 86, 1, 0.9) 100%)",
            }}
          >
            <h1 className="text-4xl text-slate-70 font-bold mb-7">
              Contact Us For Any Enquiry
            </h1>
            <p className="text-slate-700 ">
              Secure Your Mark offers brand protection in packages that are as
              unique as you are. Choose between our DIY-assisted service or have
              attorneys help you file your trademark.
            </p>
            <div className="flex items-start justify-start flex-col gap-4 mt-9 max-md:mt-3">
              <div className="flex gap-5">
                <Link href="" target="_blank">
                  <Image
                    src={`/images/twritter-logo.png`}
                    alt="Secure Your Mark"
                    width={35}
                    height={35}
                    className="object-contain rounded-md"
                  />
                </Link>
                <Link href="" target="_blank">
                  <Image
                    src={`/images/whatsapp-logo.png`}
                    alt="Secure Your Mark"
                    width={35}
                    height={35}
                    className="object-contain rounded-md"
                  />
                </Link>
                <Link href="" target="_blank">
                  <Image
                    src={`/images/facebook-logo.png`}
                    alt="Secure Your Mark"
                    width={35}
                    height={35}
                    className="object-contain rounded-md"
                  />
                </Link>
                <Link href="" target="_blank">
                  <Image
                    src={`/images/linkedin-logo.png`}
                    alt="Secure Your Mark"
                    width={35}
                    height={35}
                    className="object-contain rounded-md"
                  />
                </Link>
              </div>
              <Link href="tel:+13104244909" className="flex-center">
                <Image
                  src={`/images/orange-phone-icon.png`}
                  alt="Bell"
                  width={24}
                  height={24}
                  className="object-contain"
                />
                <div className="flex flex-col items-center">
                  <h4 className="text-color-primary text-base font-bold">
                    +1 (310) 424-4909
                  </h4>
                  <p className="text-xs text-slate-700">Secure Your Mark</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="pr-40 max-md:px-5 max-md:w-full">
            <ContactForm />
          </div>
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
