import Navbar from "./../Pages/Home/Navbar";
import Hero from "./../Pages/Home/Hero";
import About from "./../Pages/Home/About";
import Slider from "./../Pages/Home/Slider";
import Marquee from "./../Pages/Home/Marquee";
import Work from "./../Pages/Home/Work";
import Swiper from "./../Pages/Home/Swiper";
import Table from "./../Pages/Home/Table";
import Cards from "./../Pages/Home/Cards";
import Footer from "./../Pages/Home/Footer";
import Cursor from "../custom/Cursor.jsx";

const Home = () => {
  return (
    <>
      <div className="main h-full w-full">
        <Cursor /> 
        <Navbar /> 
        <Hero /> 
        <About /> 
        <Slider /> 
        <Marquee /> 
        <Work /> 
        <Swiper /> 
        <Table />
        <Cards />
        <Footer />
      </div>
    </>
  );
};

export default Home;
