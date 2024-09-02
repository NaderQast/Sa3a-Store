import React from "react";
    
import { FaCaretDown, FaShoppingCart } from "react-icons/fa";
import DarkMode from "./DarkMode";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Seller",
    link: "/#services",
  },
];

const dropDownLinks = [
  { name: "Top sellers", link: "/#" },
  { name: "New Arrivals", link: "/#" },
  { name: "Trending Now", link: "/#" },
];

const Navbar = () => {
  return (
    <>
      <div className="shadow-md  w-full bg-white dark:bg-gray-900 duration-200 relative z-40 ">
        <div className="container py-3 md:py-0 ">
          <div className="flex items-center justify-between p-4 ">
            <div>
              <a href="#" className="flex text-2xl items sm:text-3xl">
                <span className="font-bold ">Sa3a-</span> store
              </a>
            </div>
            <div className="flex items-center justify-between gap-2 lg:gap-8">
              <div><DarkMode/></div>
              <ul className="hidden md:flex items-center gap-4">
                
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="inline-block px-4 py-4 hover:text-primary "
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
                {/* simple dropdown menu */}
                <li className="relative cursor-pointer group">
                  <a href="/#" className="flex h-[72px] items-center gap-[2px]">
                    Quick Links
                    <span>
                      <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                    </span>
                  </a>
                  {/* dropdown menu  */}
                  <div
                    className="absolute -left-9 z-[9999] hidden w-[150px] group-hover:block
                bg-white dark:bg-gray-700 dark:text-white p-2 shadow-md rounded-md"
                  >
                    <ul className="space-y-3">
                      {dropDownLinks.map((link) => (
                        <li key={link.name}>
                          <a
                            href={link.link}
                            className="inline-block w-full p-2 rounded-md hover:bg-primary/20"
                          >
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
              <button
              onClick={() => alert("Cart is Empty")} className="px-4 py-1 duration-200 rounded-full hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:scale-105">
                <FaShoppingCart className="text-xl cursor-pointer text-balck dark:text-gray-400 drop-shadow-sm  " />
              </button>
            </div>
          </div>
        </div>
      </div>
      </>
  );
};

export default Navbar;
