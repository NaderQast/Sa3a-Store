import React, { useState,useEffect } from "react";
import Darkpng from "../../assets/website/dark-mode-button.png";
import lightpng from "../../assets/website/light-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <>
    <div className="relative">
      <img
        src={lightpng}
        alt=""
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className={`absolute z-10 w-12 cursor-pointer rigth-0
     drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all
    duration-300 ${theme === "dark" ? "opacity-0" : "opacity-100"}`}
      ></img>

      <img
        src={Darkpng}
        alt=""
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 "
      ></img>
    </div>
    </>
  );
};

export default DarkMode;
