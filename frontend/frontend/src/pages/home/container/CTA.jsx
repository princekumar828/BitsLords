import React from "react";
import {images} from "../../../constants";

function CTA() {
  return (
    <>
      <svg
        className="w-full h-auto max-h-40"
        preserveAspectRatio="none"
        viewBox="0 0 2160 263"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Wave"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2160 262.5H0V0C360 80 720 120 1080 120C1440 120 1800 80 2160 0V262.5Z"
          fill="#0D2436"
        />
      </svg>
      <section className="  relative bg-hard-dark px-5 -translate-y-1">
        <div className="container grid grid-cols-12 mx-auto py-10 md:pb-20 lg:place-items-center ">
          <div className="col-span-12 lg:col-span-6">
            <h2 className="text-white font-roboto font-bold text-2xl md:text-4xl md:text-center md:leading-normal lg:text-left">
              Get our stories delivered From us to your inbox weekly.
            </h2>
            <div className="w-full max-w-[494px] mt-12 space-y-3 mx-auto">
              <input
                type="text"
                className="px-4 py-3  rounded-lg w-full placeholder:text-soft-light bg-white text-soft-dark font-sans focus:outline-none"
                placeholder=" Your email "
              />
              <button className="bg-primery text-white px-4 py-3 rounded-lg w-full font-bold">
                Subscribe
              </button>
            </div>
            <p className="text-[#5A7184] text-sm mt-6 leading-6">
              <span className="font-bold italic text-[#B3BAC5] ">
                Get a response tomorrow{" "}
              </span>
              if you submit by 9pm today. If we received after 9pm will get a
              reponse the following day.
            </p>
          </div>

          <div className="col-span-12 hidden mb-[70px] md:block md:order-first lg:col-span-6 lg:order-last">
            <div className="w-3/4 mx-auto relative">
              <div className="w-1/2 h-1/2 bg-[#FC5A5A] rounded-lg absolute top-[10%] -right-[8%]" />
              <div className="w-1/2 h-1/2 bg-white rounded-lg opacity-[.06] absolute -bottom-[10%] -left-[8%]" />
              <div className="w-full rounded-xl bg-white p-3 z-[1] relative">
                <img
                  src={images.facebook}
                  alt="title"
                  className="w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60 rounded-xl"
                />
                <div className="p-5">
                  <h2 className="font-roboto font-bold text-xl text-dark-soft md:text-2xl lg:text-[28px]">
                  The best aticles every week
                  </h2>
                  <p className="text-soft-light mt-3 text-sm md:text-lg">
                  Our insurance plans offers are priced the same everywhere else.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CTA;
