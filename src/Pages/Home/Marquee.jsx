import React, { useRef } from "react";
import gsap from "gsap";

const Marquee = () => {
  return (
    <section className="px-3 mt-10 overflow-x-hidden">
      <h1 className="text-[14vw] p-0">Work</h1>
      <div className="text-[#8080804b] marquee w-full ">
        <div className="text-[10vh] flex gap-[100px] whitespace-nowrap overflow-x-hidden">
          <div
            onMouseEnter={(e) => {
              gsap.to(e.currentTarget, {
                x: "-150%",
                duration:5,
                ease: "bounce.in",
              });
            }}
              onMouseLeave={(e) => {
              gsap.to(e.currentTarget, {
                x: "0%",
                duration:5,
                ease: "bounce.in",
              });
            }}
            className="w-[100%] text-[10vh] flex gap-[100px] whitespace-nowrap"
          >
            <span>IMMERSIVE</span>
            <span>BRAND</span>
            <span>DIGITAL</span>
            <span>EXPERIENTIAL</span>
            <span>MOTION</span>
            <span>SPATIAL</span>
            <span>VR</span>
            <span>GEN-AI</span>
            <span>AR</span>
            <span>GAMING</span>
            <span>VIRTUAL-FASHION</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marquee;
