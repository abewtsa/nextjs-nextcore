import React from "react";
import { Content } from "@/types/content";
import Image from "next/image";
import { motion } from "framer-motion";

const SingleContent = ({ sectionContent }: { sectionContent: Content }) => {
  const { title, desc,image } = sectionContent;

  return (
    <>
    <div className="mt-30">
      <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top mt-12"
      >

        <h1 className="mx-auto text-center mb-4 text-3xl font-bold text-black dark:text-white md:w-4/5 xl:w-1/2 xl:text-sectiontitle3">
          {title}
        </h1>
        <p className="mx-auto text-center md:w-4/5 lg:w-3/5 xl:w-[70%]">{desc}</p>
        <div className="my-8">
          <Image className="mx-auto text-center" src={image} width={600} height={300} alt="title" />
        </div>

        </motion.div>
    </div>

    </>
  );
};

export default SingleContent;
