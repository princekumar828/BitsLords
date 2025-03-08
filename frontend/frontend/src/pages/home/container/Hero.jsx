import React from "react";
import images from "../../../constants/images";
import "../../../index.css";
import { GoSearch } from "react-icons/go";

function Hero() {
  return (
    <section
      className="container mx-auto flex flex-col px-5
    py-5 lg:flex-row "
    >
      <div className="mt-10 lg:w-1/2">
        <h1
          className="font-roboto text-3xl text-center font-bold lg:text-4xl
        text-soft-dark md:text-5xl lg:text-left lg:max-w[540px]
        "
        >
          {" "}
          Read the most interresting articles{" "}
        </h1>

        <p className="text-soft-light mt-4 text-center md:text-xl lg:text-left lg:text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi quos
          debitis blanditiis minima, ad sunt itaque
        </p>

        <div className="flex flex-col gap-y-2.5 mt-10 relative">
          <div className="relative">
            <GoSearch className="absolute left-3 top-1/2 w-6 h-6 -translate-y-1/2 text-[#959EAD]" />
            <input
              type="text"
              placeholder=""
              className="placeholder:font-bold font-semibold text-soft-dark  lg:mt-6 
             placeholder:text-[#959EAD] rounded-lg pl-12 pr-3 w-full py-3 focus:outline-none shadow-[5px_5px_19px_-6px_rgba(0,_0,_0,_0.1)] md:py-4
              "
            />
          </div>
          <button className="w-full bg-primery text-white font-semibold rounded-lg px-5 py-3 md:absolute lg:absolute lg:-translate-y-1/2 lg:right-2 lg:w-fit md:right-2 md:top-1/2 md:-translate-y-1/2 md:w-fit md:py-2  ">
            Search
          </button>
        </div>
        <div className="flex flex-col mt-4 lg:flex-row lg:flex-nowrap lg:gap-x-4 lg:mt-7 lg:items-start">
          <span className="text-soft-light font-semibold italic lg:mt-4 lg:text-sm">
            Populer Tages:
          </span>
          <ul className="flex flex-wrap gap-x-2.5 gap-y-2.5 mt-3 ">
            <li className="rounded-lg bg-primery/10	 px-3 py-1.5 text-primery font-semibold ">
              Design
            </li>
            <li className="rounded-lg bg-primery/10	 px-3 py-1.5 text-primery font-semibold">
              User Experience
            </li>
            <li className="rounded-lg bg-primery/10	 px-3 py-1.5 text-primery font-semibold ">
              User Interfaces
            </li>
          </ul>
        </div>
      </div>
      <div>
        <img
          className="hidden lg:block lg:1/2"
          src={images.HeroImg}
          alt="heroimage"
        />
      </div>
    </section>
  );
}

export default Hero;
