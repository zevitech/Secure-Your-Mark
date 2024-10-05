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
          heading={`Stories of our clients: All-in-one platform WebSell`}
          imageName={`blog-post.png`}
          details={`WebSell is an all-in-one platform, meaning that we handle everything when getting businesses online. We...`}
        />
        <BlogCard
          heading={`Stories of our clients: All-in-one platform WebSell`}
          imageName={`blog-post.png`}
          details={`WebSell is an all-in-one platform, meaning that we handle everything when getting businesses online. We...`}
        />
        <BlogCard
          heading={`Stories of our clients: All-in-one platform WebSell`}
          imageName={`blog-post.png`}
          details={`WebSell is an all-in-one platform, meaning that we handle everything when getting businesses online. We...`}
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
