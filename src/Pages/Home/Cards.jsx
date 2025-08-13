import React from "react";
const Cards = () => {
  return (
    <section className="px-3">
      <h1 className="text-[6vw] md:text-[3vw]">
        Trusted by the World's <br /> Leading Brands
      </h1>
      <div className="w-full h-[20vh] sm:h-[30vh] md:h-[40vh] flex gap-[2vw] items-center justify-between ">
        <div 
         
        className="h-[10vh] sm:h-[20vh] w-[25%] rounded-2xl bg-gray-200 flex flex-col items-center justify-center">
          <img
            className="h-full p-2 object-contain "
            src="https://cdn.prod.website-files.com/6403ade6e2cfd9c42fe587b0/67db30e34e47ff0775e1c2b8_logo_Powerade.svg"
            alt=""
          />
        </div>

        <div className="h-[10vh] sm:h-[20vh] w-[25%] rounded-2xl bg-gray-200 flex flex-col items-center justify-center">
          <img
            className="h-full p-2 object-contain  mix-blend-difference "
            src="https://cdn.prod.website-files.com/6403ade6e2cfd9c42fe587b0/67db30e3a04d22ccb8a4055d_logo_Doordash--white.svg"
            alt=""
          />
        </div>

        <div className="h-[10vh] sm:h-[20vh] w-[25%] rounded-2xl bg-gray-200 flex flex-col items-center justify-center">
          <img
            className="h-full p-2 object-contain mix-blend-difference "
            src="https://cdn.prod.website-files.com/6403ade6e2cfd9c42fe587b0/67db30e3d3b7ed6b7d1e8d93_logo_Ogilvy--white.svg"
            alt=""
          />
        </div>

        <div className="h-[10vh] sm:h-[20vh] w-[25%] rounded-2xl bg-gray-200 flex flex-col items-center justify-center">
          <img
            className="h-full p-2 object-contain "
            src="https://cdn.prod.website-files.com/6403ade6e2cfd9c42fe587b0/67db30e30170e1fc0f157f58_logo_Coca-Cola.svg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Cards;
