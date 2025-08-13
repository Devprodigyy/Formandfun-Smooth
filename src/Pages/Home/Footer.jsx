import { motion } from "motion/react";
const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center p-3">
      <div className="w-full h-[30vh] md:h-[40vh] flex flex-col md:flex-row items-center">
        <div className=" w-full md:w-[50%] flex items-start justify-start">
          <img
            className="h-[2rem]"
            src="https://cdn.prod.website-files.com/6403ade6e2cfd9c42fe587b0/673e7d618507b496c9abfece_Studio-Logo.svg"
            alt=""
          />
        </div>
        <div className=" mt-[2vh] md:mt-0  w-full md:w-[50%]  flex gap-1">
          <div className="text-[0.7rem] sm:text-[1rem] h-full w-[50%]  flex flex-col items-start">
            <h6>Menu</h6>
            <a href="#">Studio</a>
            <a href="#">Contact</a>
            <a href="#">Work</a>
          </div>
          <div className="text-[0.7rem] sm:text-[1rem] h-full w-[50%]  flex flex-col items-start">
            <h6>Social</h6>
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
            <a href="#">Behance</a>
          </div>
          <div className="text-[0.7rem] sm:text-[1rem] h-full w-[50%]  gap-3 flex flex-col items-start">
            <div className="w-full flex flex-col items-start">
              <h6>Business enquiries</h6>
              <h6>kunalwatulkar1@gmail.com</h6>
            </div>
            <div className="text-[0.7rem] sm:text-[1rem] w-full flex flex-col items-start">
              <h6>Join our team</h6>
              <h6>Apply@devprodigy.co</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-3">
        <motion.img
          drag
          dragConstraints={{
            left: 3,
            right: 3,
            top: 3,
            bottom: 2,
          }}
          className="w-full"
          src="https://cdn.prod.website-files.com/6403ade6e2cfd9c42fe587b0/672e582f6747c6055b813299_FormFun.svg"
          alt=""
        />
      </div>
    </footer>
  );
};

export default Footer;
