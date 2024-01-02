import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nextcore - Terms of Service",
  description: "Nextcore terms of service",
  // other metadata
};

const OurTeam = () => {
  return (
    <>

    {/* Custom header from Hero section Component */}

    <section className="pt-35 md:pt-40 xl:pt-46 xl:mx-8">
        <div className="mx-auto max-w-c-1390 px-8 md:px-8 2xl:px-0">
          <div className="flex-col lg:items-center lg:gap-8 xl:gap-32.5">

              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
              Terms of Service
              </h1>

              <h4 className="mt-8 mb-2 text-lg font-medium text-black dark:text-white">
              Agreement to Terms
              </h4>
              <p>
              By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
              </p>

              <h4 className="mt-8 mb-2 text-lg font-medium text-black dark:text-white">
              Use License
              </h4>
              <p>
              Permission is granted to temporarily download one copy of the materials on Nextcore website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
              </p>

              <h4 className="mt-8 mb-2 text-lg font-medium text-black dark:text-white">
              Disclaimer
              </h4>
              <p>
              The materials on Nextcore's website are provided on an 'as is' basis. Nextcore makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>

              <h4 className="mt-8 mb-2 text-lg font-medium text-black dark:text-white">
              Limitations
              </h4>
              <p>
              In no event shall Nextcore or its suppliers be liable for any damages - including, without limitation, damages for loss of data or profit, or due to business interruption - arising out of the use or inability to use the materials on Nextcore's website, even if Nextcore or a Nextcore authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>

              <h4 className="mt-8 mb-2 text-lg font-medium text-black dark:text-white">
              Changes
              </h4>
              <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.
              <br />
              By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
              </p>

          </div>
        </div>              
      </section>

    {/* Component starts here */}

    <div className="pb-20">
    </div>

    </>
  );
};

export default OurTeam;


