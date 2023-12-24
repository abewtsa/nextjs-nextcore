import React from "react";
import { Metadata } from "next";

import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import CardsTeam from "@/components/CardsTeam";

export const metadata: Metadata = {
  title: "Support Page - Solid SaaS Boilerplate",
  description: "This is Support page for Solid Pro",
  // other metadata
};

const OurTeam = () => {
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
              </p>
          </div>
        </div>              
      </section>

    {/* Component starts here */}

    <div className="pb-20">
      <CardsTeam />
    </div>

    </>
  );
};

export default OurTeam;


