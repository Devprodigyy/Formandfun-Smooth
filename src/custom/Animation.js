import gsap from "gsap";

export function initAnimations() {
  const main = document.querySelector(".main");
  const cursor = document.querySelector(".cursor");
  const head = document.querySelector(".head");
  const cursorchange = document.querySelector(".cursorChange");

  if (!main || !cursor || !head) {
    console.log("Main or cursor not found");
    return;
  }

  // Cursor animation
  let cursorr = () => {
    // Cursor follow
    main.addEventListener("mousemove", (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power3.out",
      });
    });
  };
  cursorr();

  cursorchange.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      backgroundColor: "white",
      scale: 3,
      duration: 0.2,
      ease: "power2.out",
    });
  });
  cursorchange.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
      backgroundColor: "black",
      scale: 1,
      duration: 0.2,
    });
  });

  // Cursor scale on hover
  if (cursorchange) {
    cursorchange.addEventListener("mousemove", () => {
      gsap.to(cursor, { scale: 0.6, duration: 0.2 });
    });
    cursorchange.addEventListener("mouseleave", () => {
      gsap.to(cursor, { scale: 1, duration: 0.2 });
    });
  }

  let Herohead = () => {
    gsap.from(head, {
      height: "100vh",
      duration: 2,
    });
  };
  Herohead();
}

export const hangingAnimation = () => ({
  initial: {
    transformOrigin: "left top", // pivot from top-left corner
  },
  animate: {
    rotate: 10,
    x:50,
    y: 0,
    opacity: 1,
    
    transition: {
      repeat: Infinity,   // equivalent to GSAP repeat:-1
      repeatType: "reverse",
      type: "spring",
      stiffness: 80,
      damping: 3,
    },
  },
});
