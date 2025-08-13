import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

const About = () => {
  return (
    <div
      onMouseEnter={() => [
        document.fonts.ready.then(() => {
          gsap.set(".split", { opacity: 1 });

          let split;
          SplitText.create(".split", {
            type: "words,lines",
            linesClass: "line",
            autoSplit: true,
            mask: "lines",
            onSplit: (self) => {
              split = gsap.from(self.lines, {
                duration: 0.6,
                yPercent: 100,
                opacity: 0,
                stagger: 0.1,
                ease: "expo.out",
              });
              return split;
            },
          });
        }),
      ]}
      className="w-[98%] mt-[10vh] md:mt-[20vh] mx-auto flex flex-col items-start justify-center px-3"
    >
      <p className="split text-[1.2rem] sm:text-[3rem] md:text-[6vh] w-full font-[Mid] ">
        <span className="mr-5 bg-black text-white rounded-3xl md:bg-white md:text-black px-3 pr-3 text-[1rem]  min-w-[20%] inline-block">
          The studio
        </span>
        We are a global creative tech studio forging delightful experiences by
        blending design, technology, and storytelling. Driven to create value
        for people and brands through interaction
        <span className="mx-5 bg-black text-white text-[1rem] inline-flex w-fit px-2 items-center justify-center rounded-full">
          Learn more
        </span>
      </p>
    </div>
  );
};

export default About;
