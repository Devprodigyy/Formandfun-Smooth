import gsap from "gsap";
import React from "react";
import { motion } from "motion/react";
import { hangingAnimation } from "../../custom/Animation";

const Table = () => {
  const { initial, animate } = hangingAnimation();

  const awards = [
    {
      id: 1,
      title: "Webby Awards",
      project: "Powerade Mind Zone",
      category: "AI, Immersive & Games",
      year: 2025,
    },
    {
      id: 2,
      title: "Clio Awards - Gold",
      project: "Oreo & Parcman supermarcade",
      category: "Interactive/Experiental",
      year: 2024,
    },
    {
      id: 3,
      title: "3x Clio Awards - Shortlist",
      project: "Oreo & Parcman supermarcade",
      category: "1x Entertainment",
      year: 2025,
    },

    {
      id: 4,
      title: "Auggie Award",
      project: "Oreo & Parcman supermarcade",
      category: "Best Campaign",
      year: 2025,
    },

    {
      id: 5,
      title: "3x ADC Festival - Sliver",
      project: "Oreo & Parcman supermarcade",
      category: "1x Craft AR/VR",
      year: 2025,
    },

    {
      id: 6,
      title: "2x ADC Festival - Bronze",
      project: "Oreo & Parcman supermarcade",
      category: "1x Gaming Experiences",
      year: 2025,
    },
    {
      id: 7,
      title: "Clio Awards - Sliver",
      project: "Powerade Mind Zone",
      category: "Digital/Mobile",
      year: 2025,
    },
    {
      id: 8,
      title: "Cannes Lions - Bronze",
      project: "Oreo & Parcman supermarcade",
      category: "Outdoor",
      year: 2025,
    },
    {
      id: 9,
      title: "4x Cannes Lions",
      project: "Oreo & Parcman supermarcade",
      category: "Outdoor",
      year: 2025,
    },
    {
      id: 10,
      title: "New York Festivals - Bronze",
      project: "Oreo & Parcman supermarcade",
      category: "Digital/Mobile : Best use",
      year: 2025,
    },
  ];

  return (
    <section className="w-full px-3 py-3">
      <motion.h1
      style={{ position: "relative", zIndex: 9999 }}
        initial={initial}
        animate={animate}
        className="tableHeading realative z-50 text-[6vw] ml-[2%] mt-3 sm:leading-[4rem] md:leading-[6rem] xl:md:leading-[8rem]"
      >
        An Award <br />
        Winning studio
      </motion.h1>

      <div className="relative w-full z-10 flex flex-col mt-10">
        {awards.map((award, index) => (
          <div
            key={award.id}
            className={`h-[15vh] flex w-full items-center justify-between px-4 ${
              index !== 0 ? "border-t-2" : ""
            }`}
            onMouseEnter={(e) => {
              gsap.to(e.currentTarget, {
                backgroundColor: "#EEEEEE",
                duration: 0.3,
                overwrite: "auto",
              });
            }}
            onMouseLeave={(e) => {
              gsap.to(e.currentTarget, {
                backgroundColor: "transparent",
                duration: 0.3,
                overwrite: "auto",
              });
            }}
          >
            <span className="text-[0.6rem] sm:text-[0.8rem] md:text-[1rem] ">
              {index + 1}
            </span>
            <div className=" h-full flex items-center justify-start w-[20vw]">
              <h1 className="text-[0.6rem] sm:text-[0.8rem] md:text-[1rem] whitespace-wrap">
                {award.title}
              </h1>
            </div>
            <div className="flex flex-col w-[20vw] h-full items-start justify-center">
              <h6 className="text-[0.6rem] sm:text-[0.8rem] md:text-[1rem] whitespace-wrap text-[#dfdcdc]">
                Project
              </h6>
              <h5 className="text-[0.6rem] sm:text-[0.8rem] md:text-[1rem] whitespace-wrap">
                {award.project}
              </h5>
            </div>
            <div className="flex flex-col w-[20vw] h-full items-start justify-center">
              <h6 className="text-[0.6rem] sm:text-[0.8rem] md:text-[1rem] whitespace-wrap text-[#dfdcdc]">
                Category
              </h6>
              <h5 className="text-[0.6rem] sm:text-[0.8rem] md:text-[1rem] whitespace-wrap">
                {award.category}
              </h5>
            </div>
            <div>
              <h6 className="text-[0.6rem] sm:text-[0.8rem] md:text-[1rem] whitespace-nowrap text-[#dfdcdc]">
                Year
              </h6>
              <h5 className="text-[0.6rem] sm:text-[0.8rem] md:text-[1rem] whitespace-wrap">
                {award.year}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Table;
