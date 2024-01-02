import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nextcore - Privacy Policy",
  description: "Nextcore privacy policy",
  // other metadata
};

const PrivacyPolicy = () => {
  return (
    <>

    {/* Custom header from Hero section Component */}

    <section className="pt-35 md:pt-40 xl:pt-46 xl:mx-8">
        <div className="mx-auto max-w-c-1390 px-8 md:px-8 2xl:px-0">
          <div className="flex-col lg:items-center lg:gap-8 xl:gap-32.5">
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                Privacy Policy
              </h1>
              
              <h4 className="mt-8 mb-2 text-lg font-medium text-black dark:text-white">
              Introduction
              </h4>

              <p>
              This Privacy Policy applies and has effect in respect of all services and other products, software, made available by us, as well as any other online features relating to the website and its content (the “Service(s)”).
              <br />
              <br />
              If you have any questions or comments about this Privacy Policy, please contact us at hello@nextcore.digital.
              <br />
              <br />
              We are committed to protecting and respecting your privacy. The Privacy Policy explains the basis on which personal information we collect from you will be processed by us or on our behalf. Where we decide the purpose or means for which personal data you supply through these Services is processed, we are the “controller”. Where you decide the purpose or means for which personal data you supply through these Services is processed, you are the “controller”. We will comply with proper and applicable data protection laws, including the General Data Protection Regulation 2016/679.
              <br />
              <br />
              We encourage you to read this Privacy Policy carefully as it contains important information about the following:
              <br />
              – What information we may collect about you;
              <br />
              – How we will use the information we collect about you;
              <br />
              – Whether we will disclose your details to anyone else; and
              <br />
              – Your choices and rights regarding the personal information you have provided to us.
              <br />
              <br />
              The Services may contain links to services owned and operated by third parties. We may also use some third-parties software or products to provide you with the Service properly. If we do so and provide third -parties of any personal data you can be sure the transfer is legal and secured. These third-party services may have their own privacy policies and we recommend that you review them. They will govern the use of personal information that you submit or which is collected by cookies and other tracking technologies whilst using these services. We do not accept any responsibility or liability for the privacy practices of such third party services and your use of these is at your own risk.
              </p>

              <h4 className="mt-8 mb-2 text-lg font-medium text-black dark:text-white">
              Information we may collect about you
              </h4>
              <p>
              We collect and process the following information which may include your personal data.
              <br />
              Your name, last name, and email address you supply to us and information provided by you when using the Service or website.
              </p>

              <h4 className="mt-8 mb-2 text-lg font-medium text-black dark:text-white">
              Collecting, processing and using personal data
              </h4>

              <p>
              We only store and process your personal data when you have voluntarily supplied us with it such as by filling in a contact form or signing up for the product purchase. Your personal data will only be disclosed or otherwise transmitted if this is necessary to implement the contract, render our Services or you have given your prior consent.
              </p>

              <h4 className="mt-8 mb-2 text-lg font-medium text-black dark:text-white">
              Why we collect information about you
              </h4>

              <p>
              We will use information about you for delivering our Services to you under the terms of use agreed between us. The processing of information in this way is necessary for us to provide you the Service properly and to ensure the features function properly so that you have the best Service possible.
              </p>

              <h4 className="mt-8 mb-2 text-lg font-medium text-black dark:text-white">
              Cookies 
              </h4>

              <p>
              We use cookies to make the use of our website easier for you. These cookies are used to store information including visitors preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users experience by customizing our web page content based on visitors’ browser type and/or other information.Cookies may be opt-out by you and in case you do not accept cookies, this may lead to a limitation of functionality.
              </p>

              <h4 className="mt-8 mb-2 text-lg font-medium text-black dark:text-white">
              Data sharing
              </h4>

              <p>
              We will share your information (including personal data) with third parties only in the ways that are described in this Privacy Policy.
              <br />
              <br />
              Personnel, suppliers or subcontractors: We keep your information confidential, but may disclose it to our personnel, suppliers or subcontractors insofar as it is reasonably necessary for the purposes set out in this Privacy Policy. However, this is on the basis that they do not make independent use of the information, and have agreed to safeguard it.
              </p>

              <h4 className="mt-8 mb-2 text-lg font-medium text-black dark:text-white">
              Changes to this privacy policy
              </h4>

              <p>
              This Privacy Policy may be updated from time to time. We encourage you to review this website for the latest information on our privacy practices.
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

export default PrivacyPolicy;


