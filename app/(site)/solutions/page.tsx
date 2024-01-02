import React from "react";
import Contact from "@/components/Contact";
import FeaturesTab from "@/components/FeaturesTab";
import ContentFullWidth from "@/components/ContentFullWidth";
import CTA from "@/components/CTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support Page - Solid SaaS Boilerplate",
  description: "This is Support page for Solid Pro",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
    
    {/* Custom header from Hero section Component */}

    <section className="pt-35 md:pt-40 xl:pt-46 xl:mx-8">
        <div className="mx-auto max-w-c-1390 px-8 md:px-8 2xl:px-0">
          <div className="flex-col lg:items-center lg:gap-8 xl:gap-32.5">
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                Elevate your business
              </h4>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                Nextcore is your Web Solutions Partner
              </h1>
              <p>
              We specialise in crafting dynamic websites, intuitive e-commerce platforms, and cost effective IT resourcing solutions that resonate with your digital strategies.
              From meaningful designs to seamless functionality, our team merges creativity with technology to drive your business forward.
              We specialise in crafting dynamic websites, intuitive e-commerce platforms, and cost effective IT resourcing solutions that resonate with your digital strategies.
              </p>
          </div>
        </div>              
    </section>

    <div className="pb-20">
      <FeaturesTab />
      <ContentFullWidth />
      <CTA />
    </div>

    </>
  );
};

export default ContactPage;
