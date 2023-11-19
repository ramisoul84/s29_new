import { useState, useEffect } from "react";
import "./header.scss";
const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [firstLoad, setFirstLoad] = useState(true);
  useEffect(() => {
    const scrollUpdate = () => {
      setScrollY(window.scrollY);
      if (window.scrollY >= 180) setFirstLoad(false);
    };
    window.addEventListener("scroll", scrollUpdate);
    return () => {
      window.removeEventListener("scroll", scrollUpdate);
    };
  }, []);
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
    </header>
  );
};
export default Header;
