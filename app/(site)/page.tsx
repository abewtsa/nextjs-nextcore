import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  openGraph: {
  title: "Nextcore - Web and IT solutions partner",
  description: 'Provider of web and IT solutions. Experts in UX design, full stack development, and IT sourcing.',
  siteName: 'Nextcore Digital',
  
  url: 'https://nextcore.digital',
  // images: [
  //   {
  //     url: 'https://abccompany.com/socialmedia.png',
  //     width: 800,
  //     height: 600,
  //   },
  //   {
  //     url: 'https://abccompany.com/socialmedia-alt.png',
  //     width: 1800,
  //     height: 1600,
  //     alt: 'ABC Company',
  //   },
  // ],
  locale: 'en_AU',
  type: 'website',
},
keywords: ['web development', 'website', 'digital agency', 'it hiring', 'it sourcing', 'recruit developer', 'application development', 'software development'],
//   twitter: {
//   card: 'summary_large_image',
//   title: 'News Releases - ABC Company',
//   description: 'The amazing ABC Company',
//   siteId: '1467344254880',
//   creator: '@abccompanytwitter',
//   creatorId: '1467344254880',
//   images: ['https://abccompany.com/socialmedia.png'],
// },
}

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <Brands /> */}
      <Feature />
      <CTA />
      <About />
      {/* <FeaturesTab /> */}
      {/* <FunFact /> */}
      {/* <Integration /> */}
      {/* <FAQ /> */}
      {/* <Testimonial /> */}
      {/* <Pricing /> */}
      <Contact />
      {/* <Blog /> */}
    </main>
  );
}
