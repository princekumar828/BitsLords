import React, { useState } from "react";
import { images } from "../constants";
import { FiX } from "react-icons/fi";
import { FiAlignJustify } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
const navItems = [
  { name: "Home", type: "link" },
  { name: "Aricles", type: "link" },
  { name: "Pages", type: "dropdown", items: ["About", "Contact"] },
  { name: "Pricing", type: "link" },
  { name: "Faq", type: "link" },
];

const NavList = ({ item }) => {
  return (
    <li className="relative group ">
      <a href="/" className="px-2 py-2 ">
        {item.name}
        {item.type && item.type == "dropdown" ? (
          <FaAngleDown className="inline mx-1.5" />
        ) : null}
      </a>
      <span
        className="absolute text-blue-500 transition-all duration-500
      font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100 "
      >
        /
      </span>
      <div className="hidden transition-full duration-500 pt-4 absolute bottom-0 right-0 translate-y-full group-hover:block w-max ">
        <ul className="flex flex-col shadow-lg overflow-hidden ">
          {item.items &&
            item.items.map((item, index) => (
              <a
                key={index}
                href="/"
                className="hover:bg-hard-dark hover:text-white text-center px-4 py-2
                     text-white lg:text-soft-dark "
              >
                <li key={index} className="px-2 py-2 text-center">
                  {item}
                </li>
              </a>
            ))}
        </ul>
      </div>
    </li>
  );
};

function Header() {
  const [navVisible, setnavVisible] = useState(false);
  const navVisibilityHandler = () => {
    setnavVisible((prev) => {
      return !prev;
    });
  };
  return (
    <section className="sticky top-0 left-0 right-0 z-50 bg-white">
      <header className="container mx-auto px-5 flex justify-between py-4 items-center">
        <div>
          <img  alt="logo" className="w-16" />
        </div>
        <div className="z-50 lg:hidden">
          {!navVisible ? (
            <FiAlignJustify
              className="w-6 h-6"
              onClick={navVisibilityHandler}
            />
          ) : (
            <FiX className="w-6 h-6" onClick={navVisibilityHandler} />
          )}
        </div>

        <div
          className={`${navVisible ? "right-0" : "-right-full"
            } z-[49] flex flex-col
            w-full justify-center  lg:static lg:w-auto lg:flex-row  lg:justify-end 
        fixed top-0 bottom-0   gap-x-10 items-center bg-hard-dark lg:bg-transparent mt-[56px] lg:mt-0 transition-all duration-500`}
        >
          <ul className=" m-5 flex  flex-col items-center gap-y-5 lg:flex-row gap-x-5 font-semibold text-white lg:text-soft-dark ">
            {navItems.map((item, index) => (
              <NavList key={index} item={item} />
            ))}
          </ul>

          <Link to="/login"
            className="border-2 mt-5 lg:mt-0 border-blue-500 font-semibold px-6 py-2 
          hover:bg-blue-500 hover:text-white transition-all duration-300
          rounded-full text-blue-500"
          >
            Sign in
          </Link>
        </div>
      </header>
    </section>
  );
}

export default Header;
