import React from "react";
import gsap from "gsap";

const Swiper = () => {
  return (
    <section className="flex px-3 gap-2 flex-col md:flex-row md:mb-[10vh]">
      <div
        onMouseEnter={(e) => {
          gsap.to(e.currentTarget, {
            scale: 0.9,
            backgroundColor:"#bdeff88f"
          });
        }}

         onMouseLeave={(e) => {
          gsap.to(e.currentTarget, {
            scale: 1,
            backgroundColor:"transparent"
          });
        }}
        className="swiperBox1 w-full xl:w-[35vw] rounded-xl"
      >
        <div className="p-5">
          <div className="rounded-xl overflow-hidden">
            <video
              autoPlay
              muted
              loop
              src="/Videos/Swiper1.mp4"
              alt="Technology Cube"
              className="w-full object-cover"
            ></video>
          </div>

          <div
          className="mt-6 px-5">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Technology
            </h2>
            <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-700">
              <p>Spatial Computing (AR, VR, XR)</p>
              <p className="text-right">Web3 / Blockchain</p>
              <p>AI Tools & Experiences</p>
              <p className="text-right">Game Development</p>
              <p>Web Development</p>
              <p className="text-right">Rapid Prototyping</p>
              <p>WebGL Experiences</p>
            </div>
          </div>
        </div>
      </div>

      <div 
       onMouseEnter={(e) => {
          gsap.to(e.currentTarget, {
            scale: 0.9,
            backgroundColor:"#ebb9fd5b"
          });
        }}

         onMouseLeave={(e) => {
          gsap.to(e.currentTarget, {
            scale: 1,
            backgroundColor:"transparent"
          });
        }}
         className="swiperBox2 w-full xl:w-[35vw] rounded-xl">
        <div className="p-5">
          <div className="rounded-xl overflow-hidden">
            <video
              autoPlay
              muted
              loop
              src="/Videos/Swiper2.mp4"
              alt="Technology Cube"
              className="w-full object-cover"
            ></video>
          </div>

          <div className="mt-6 px-5">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Design
            </h2>
            <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-700">
              <p>Creative Direction</p>
              <p className="text-right">Art Direction</p>
              <p>User Experience Design</p>
              <p className="text-right">user Interface Design</p>
              <p>Brand Identity</p>
              <p className="text-right">Design Systems</p>
              <p>Concept Design</p>
            </div>
          </div>
        </div>
      </div>

      <div 
       onMouseEnter={(e) => {
          gsap.to(e.currentTarget, {
            scale: 0.9,
            backgroundColor:"#d1fac3"
          });
        }}

         onMouseLeave={(e) => {
          gsap.to(e.currentTarget, {
            scale: 1,
            backgroundColor:"transparent"
          });
        }}
         className="swiperBox3 w-full xl:w-[35vw] rounded-xl">
        <div className="p-5">
          <div className="rounded-xl overflow-hidden">
            <video
              autoPlay
              muted
              loop
              src="/Videos/Swiper3.mp4"
              alt="Technology Cube"
              className="w-full object-cover"
            ></video>
          </div>

          <div className="mt-6 px-5">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Motion & CGI
            </h2>
            <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-700">
              <p>2d & 3d Animation</p>
              <p className="text-right">2d & 3d Illustration</p>
              <p>Concept Art</p>
              <p className="text-right">FOOH</p>
              <p>Character Design</p>
              <p className="text-right">Motion Identity</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Swiper;
