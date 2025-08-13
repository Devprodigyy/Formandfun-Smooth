
const Work = () => {

  return (
    <>
      <section className="flex flex-col gap-3 px-3">
        <div className="px-3 w-full flex flex-col gap-4 md:flex-row">
          <video
            autoPlay
            loop
            muted
            className="rounded-[20px] w-full h-[60vh] object-cover md:w-[60%]"
            src="/Videos/Work1.mp4"
          ></video>
          <div className="w-full md:hidden ">
            <h1 className="text-[2rem]">Oreo X Pacman</h1>
            <h6 className="text-[0.9rem]">AR EXPERIENCE</h6>
          </div>

          <video
            autoPlay
            loop
            muted
            className="rounded-[20px] w-full h-[60vh] object-cover md:w-[40%]"
            src="/Videos/Work2.mp4"
          ></video>
          <div className="w-full md:hidden ">
            <h1 className="text-[2rem] leading-[2.2rem]">
              Doordash <br /> Summer of Dashpass
            </h1>
            <h6 className="text-[0.9rem]">CAMPAIGN</h6>
          </div>
        </div>
        <div className="px-3 w-full flex flex-col gap-4 md:flex-row">
          <video
            autoPlay
            loop
            muted
            className="rounded-[20px] w-full h-[60vh] object-cover md:w-[40%]"
            src="/Videos/Work3.mp4"
          ></video>
          <div className="w-full md:hidden">
            <h1 className="text-[2rem]">Widllet</h1>
            <h6 className="text-[0.9rem]">BRAND IDNETITY, APP</h6>
          </div>

          <video
            autoPlay
            loop
            muted
            className="rounded-[20px] w-full h-[60vh] object-cover md:w-[60%]"
            src="/Videos/Work4.mp4"
          ></video>
          <div className="w-full md:hidden">
            <h1 className="text-[2rem]">Powerade Mindzone</h1>
            <h6 className="text-[0.9rem]">VR EXPERIENCE</h6>
          </div>
        </div>
      </section>

      <section
        className="w-[100%] px-3 flex h-[20vh] items-center gap-[10%]"
      >
        <div
          className="px-3 w-[100%] h-full  flex gap-5 items-center justify-around"
        >
          <img
            className="w-[50%] object-contain"
            src="https://cdn.prod.website-files.com/6403ade6e2cfd9c42fe587b0/672e582f6747c6055b813299_FormFun.svg"
            alt=""
          />
          <div className="w-[50%] flex flex-col items-end">
            <h6>Creative</h6>
            <h6>Technology</h6>
            <h6>Studio</h6>
          </div>
        </div>

        <div className="hidden w-[100%] md:flex gap-5">
          <img
            className="w-[50%] object-contain"
            src="https://cdn.prod.website-files.com/6403ade6e2cfd9c42fe587b0/672e582f6747c6055b813299_FormFun.svg"
            alt=""
          />
          <div className="w-[50%] flex flex-col items-end">
            <h6>Creative</h6>
            <h6>Technology</h6>
            <h6>Studio</h6>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
