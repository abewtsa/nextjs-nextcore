"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";
import ContentData from "./ContentData";
import SingleContent from "./SingleContent";
import SingleCard from "../CardsBase/SingleCard";

const ContentFullWidth = () => {
  return (
    <>
      <section>

      <div className="mx-auto mt-20 max-w-c-1390 px-4 md:px-8 2xl:px-0">  
          {/* Map Content from ContentData here */}
        
          {ContentData.map ((content , key) => (
            <SingleContent sectionContent={content} key={key} />
          ))}  
      </div>

      </section>

    </>
  );
};

export default ContentFullWidth;
