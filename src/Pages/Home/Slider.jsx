import gsap from "gsap";
import React from "react";

const Slider = () => {
  return (
    <>
      <section
        onMouseEnter={() => {
          gsap.to(".cursor", {
            backgroundColor: "white",
            scale: 3,
            duration: 0.2,
            ease: "power2.out",
            innerHTML: "view",
          });
        }}
        onMouseLeave={() => {
          gsap.to(".cursor", {
            backgroundColor: "black",
            scale: 1,
            duration: 0.2,
            ease: "power2.out",
            innerHTML: " ",
          });
        }}
        className="p-2 flex gap-3 mt-[10vh] md:mt-[20vh] px-3 overflow-x-auto scrollbar-hide "
      >
        <div className=" flex-shrink-0 w-[90vw] md:min-w-[24vw] md:max-w-[44vw] xl:max-w-[30vw] h-[40vh] md:h-[70vh] rounded-2xl overflow-hidden">
          <video
            loop
            muted
            autoPlay
            className="h-full w-full object-cover"
            src="/Videos/Slider1.mp4"
          ></video>
        </div>

        <div className="cursorChange flex-shrink-0 w-[90vw] md:min-w-[24vw] md:max-w-[44vw] xl:max-w-[30vw] h-[40vh] md:h-[70vh] rounded-2xl overflow-hidden">
          <video
            loop
            muted
            autoPlay
            className="h-full w-full object-cover"
            src="/Videos/Slider2.mp4"
          ></video>
        </div>

        <div className="cursorChange flex-shrink-0  w-[90vw] md:min-w-[24vw] md:max-w-[44vw] xl:max-w-[30vw] h-[40vh] md:h-[70vh] rounded-2xl overflow-hidden">
          <video
            loop
            muted
            autoPlay
            className="h-full w-full object-cover"
            src="/Videos/Slider3.mp4"
          ></video>
        </div>

        <div className="cursorChange flex-shrink-0  w-[90vw] md:min-w-[24vw] md:max-w-[44vw] xl:max-w-[30vw] h-[40vh] md:h-[70vh] rounded-2xl overflow-hidden">
          <video
            loop
            muted
            autoPlay
            className="h-full w-full object-cover"
            src="/Videos/Slider4.mp4"
          ></video>
        </div>

        <div className="cursorChange flex-shrink-0  w-[90vw] md:min-w-[24vw] md:max-w-[44vw] xl:max-w-[30vw] h-[40vh] md:h-[70vh] rounded-2xl overflow-hidden">
          <video
            loop
            muted
            autoPlay
            className="h-full w-full object-cover"
            src="/Videos/Slider5.mp4"
          ></video>
        </div>

        <div className="cursorChange flex-shrink-0  w-[90vw] md:min-w-[24vw] md:max-w-[44vw] xl:max-w-[30vw] h-[40vh] md:h-[70vh] rounded-2xl overflow-hidden">
          <video
            loop
            muted
            autoPlay
            className="h-full w-full object-cover"
            src="/Videos/Slider6.mp4"
          ></video>
        </div>
      </section>
    </>
  );
};

export default Slider;
