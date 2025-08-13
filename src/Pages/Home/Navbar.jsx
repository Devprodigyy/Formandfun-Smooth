import { navbar } from "./../../component/Style";
import { navbarData } from './../../component/Data';



const Navbar = () => {
  
  return (
    <nav className={navbar.navbarStyle}>
      <img
        className={navbar.imgStyle}
        src={navbarData.imgSrc}
        alt={navbarData.alt}
      />
      <h1 className={navbar.centerheadStyle}>Creative Technology Studio</h1>
      <div className={navbar.menuStyle}>
        <a className={navbar.linkStyle} href="#">
          Studio
        </a>
        <a className={navbar.linkStyle} href="#">
          Contact
        </a>
        <a className={navbar.linkStyle} href="#">
          Work
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
