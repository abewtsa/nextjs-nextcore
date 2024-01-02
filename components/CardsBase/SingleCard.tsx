import React from "react";
import { Card } from "@/types/card";
import Image from "next/image";
import { motion } from "framer-motion";

const SingleCard = ({ card }: { card: Card }) => {
  const { title, desc,image } = card;

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -10,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="animate_top z-40 rounded-lg border border-white bg-white p-6  shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-12.5"
      >

        {/* <h3 className="mb-8 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
          {title}
        </h3> */}
        <p>{desc}</p>
        <div className="mt-8 relative flex h-200 w-150 items-center justify-center rounded-[4px]">
          <Image src={image} width={200} height={150} alt="title" />
        </div>
      </motion.div>
    </>
  );
};

export default SingleCard;
