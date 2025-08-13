const Hero = () => {
  return (
    <section>
      <div className="head h-[40vh] md:h-[40vh] w-full flex items-center justify-center">
        <h1 className="text-[8vw]">Form and Fun</h1>
      </div>
      <video
      
        className="cursorChange md:w-[98%] md:mx-auto px-2 rounded-3xl"
        loop
        muted
        autoPlay
        src="/Videos/video1.mp4"
      ></video>
    </section>
  );
};

export default Hero;
