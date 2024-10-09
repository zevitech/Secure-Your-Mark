import React from "react";
import BlogCard from "./BlogCard";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const ResentBlogsSection = () => {
  return (
    <section className="bg-[#F0F0F0] py-28  max-md:py-20 max-md:px-5">
      <div className="mb-16">
        <div className="flex-center gap-3">
          <Image
            alt="Line"
            src={`/images/left-line-for-our-team-section.png`}
            width={100}
            height={10}
          />
          <h4 className="text-slate-700 font-normal text-lg">Explore</h4>
          <Image
            alt="Line"
            src={`/images/right-line-for-our-team-section.png`}
            width={100}
            height={10}
          />
        </div>
        <h1 className="text-4xl text-slate-700 font-medium m-2 text-center">
          Most recent blogs
        </h1>
      </div>
      <div className="flex-center max-md:flex-col gap-10">
        <BlogCard
          heading={`Stories of our clients: Protecting Brands with Trademark Registration`}
          imageName={`blog-post.png`}
          details={`"Our client, WebSell, recognized the importance of trademark registration in safeguarding their brand identity. By partnering with us, they successfully secured their trademarks, allowing them to focus on growing their business with confidence. Read how our trademark solutions helped WebSell protect its innovative platform."`}
        />
        <BlogCard
          heading={`Success Story: Securing Trademarks for EcoGreen Solutions`}
          imageName={`blog-post.png`}
          details={`"EcoGreen Solutions approached us to navigate the complex trademark registration process. With our guidance, they successfully registered their trademarks, enhancing their brand credibility and market position. Discover how our expertise in trademark law empowered EcoGreen to protect its eco-friendly innovations."`}
        />
        <BlogCard
          heading={`Client Spotlight: Trademark Protection for Revamp Clothing Co.`}
          imageName={`blog-post.png`}
          details={`"Revamp Clothing Co. faced challenges with brand imitation in a competitive market. Our team provided comprehensive trademark protection services, ensuring their unique designs were legally safeguarded. Learn how we helped Revamp establish a strong brand presence through effective trademark strategies."`}
        />
      </div>
      <div className="flex-center mt-10">
        <Button
          color="warning"
          variant="light"
          className="text-color-primary"
          as={Link}
          href="/trademark-register"
        >
          {`> See all articles`}
        </Button>
      </div>
    </section>
  );
};

export default ResentBlogsSection;
