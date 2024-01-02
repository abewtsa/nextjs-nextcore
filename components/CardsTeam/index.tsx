"use client";
import React from "react";
import CardsTeam from "./CardsTeam";
import SingleCard from "../CardsBase/SingleCard";
import SectionHeader from "../Common/SectionHeader";

const Card = () => {
  return (
    <>
      {/* <!-- ===== Cards Start ===== --> */}
      <section id="cards" className="py-4">
        <div className="mx-auto max-w-c-1315 px-8 md:text-left xl:px-8">
          {/* <!-- Section Title Start --> */}
          {/* <SectionHeader
            headerInfo={{
              title: "What we do",
              subtitle: "Stay ahead, stay efficient, with Nextcore",
              description: `Nextcore is uniquely positioned to power you with IT solutions. Transform your digital presence and innovate your business process.
              `,
            }}
          /> */}
          {/* <!-- Section Title End --> */}

          <div className="mt-8 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-12.5">
            {/* <!-- Cards item Start --> */}

            {CardsTeam.map((card, key) => (
              <SingleCard card={card} key={key} />
            ))}
            {/* <!-- Cards item End --> */}
          </div>
        </div>
      </section>

      {/* <!-- ===== Cards End ===== --> */}
    </>
  );
};

export default Card;
