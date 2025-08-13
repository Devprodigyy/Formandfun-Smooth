import Home from "./component/Home";
import "lenis/dist/lenis.css";
import Lenis from "lenis";
import { useEffect } from "react";
import { initAnimations } from "./custom/Animation";


const App = () => {
  const lenis = new Lenis({
    autoRaf: true,
    lerp: 0.01,
  });

  useEffect(() => {
    initAnimations();
  }, []);

  return (
    <>
      <Home />
    </>
  );
};

export default App;
