import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import "./header.scss";
const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [firstLoad, setFirstLoad] = useState(true);
  const [menu, setMenu] = useState(true);
  useEffect(() => {
    const scrollUpdate = () => {
      const list = document.querySelector(".menu-list");
      const sections = document.querySelectorAll("section");
      setScrollY(window.scrollY);
      if (window.scrollY >= 180) setFirstLoad(false);
      if (window.scrollY <= 180) {
        list.classList.remove("menu-list-scale-in-tr");
        setMenu(true);
        sections.forEach((e) => (e.style.filter = "blur(0rem)"));
      }
    };
    window.addEventListener("scroll", scrollUpdate);
    return () => {
      window.removeEventListener("scroll", scrollUpdate);
    };
  }, []);
  const toggleMenu = () => {
    const list = document.querySelector(".menu-list");
    const sections = document.querySelectorAll("section");
    list.classList.contains("menu-list-scale-in-tr")
      ? list.classList.remove("menu-list-scale-in-tr")
      : list.classList.add("menu-list-scale-in-tr");
    setMenu(!menu);
    menu
      ? sections.forEach((e) => (e.style.filter = "blur(0.3rem)"))
      : sections.forEach((e) => (e.style.filter = "blur(0rem)"));
  };

  const linkClicked = () => {
    const list = document.querySelector(".menu-list");
    const sections = document.querySelectorAll("section");
    sections.forEach((e) => (e.style.filter = "blur(0rem)"));
    list.classList.remove("menu-list-scale-in-tr");
    setMenu(true);
  };
  return (
    <header>
      <div
        className={`gradient-1 ${
          scrollY < 180 && firstLoad
            ? "down-1"
            : scrollY < 180
            ? "right"
            : "left-1"
        }`}
      ></div>
      <div
        className={`gradient-2 ${
          scrollY < 180 && firstLoad
            ? "down-2"
            : scrollY < 180
            ? "right"
            : "left-2-3 hide-link"
        }`}
      ></div>
      <div
        className={`gradient-3 ${
          scrollY < 180 && firstLoad
            ? "down-3"
            : scrollY < 180
            ? "right"
            : "left-2-3"
        }`}
      ></div>
      <div className={`gradient-4 ${scrollY < 180 ? "down-4" : "up-4"}`}></div>
      <div className={`gradient-5 ${scrollY < 180 ? "down-5" : "up-5"}`}></div>
      <div className={`gradient-6 ${scrollY < 180 ? "down-6" : "up-6"}`}></div>
      {menu ? (
        <RxHamburgerMenu
          className={`menu ${scrollY < 180 ? "hide" : "show"}`}
          onClick={toggleMenu}
        />
      ) : (
        <AiOutlineClose
          className={`menu ${scrollY < 180 ? "hide" : "show"}`}
          onClick={toggleMenu}
        />
      )}
      <div className="menu-list">
        <ul>
          <li>
            <a href="#services" onClick={linkClicked}>
              Services
            </a>
          </li>
          <li>
            <a href="#work" onClick={linkClicked}>
              work
            </a>
          </li>
          <li>
            <a href="#about" onClick={linkClicked}>
              about
            </a>
          </li>
          <li>
            <a href="#contact" onClick={linkClicked}>
              contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
