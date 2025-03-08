import React from "react";
import { images } from "../constants";

import { FaCheck } from "react-icons/fa6";


function ArticleCard({ className }) {
  return (
    <div className={`rounded-xl overflow-hidden shadow-lg   ${className}`}>
      <img
        src={images.cardLaptop}
        alt="blogImg"
       className="w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60"
      />

      <div className="p-5">
        <h2 className="font-roboto font-bold text-xl text-soft-dark md:text-2xl lg:text-[28px] ">
          Future of Work
        </h2>
        <p className="text-soft-light mt-3 text-sm md:text-lg">
        Majority of peole will work in jobs that don’t exist today.
          
        </p>
        <div className="flex justify-between flex-nowrap items-center mt-6">
          <div className="flex items-center gap-x-2 md:gap-x-2.5">
            <img
              src={images.cardUser}
              alt="user"
             className="w-9 h-9 md:w-10 md:h-10 rounded-full"
            />
            <div className="flex flex-col">
              <h4 className="font-bold italic text-dark-soft text-sm md:text-base">
                Viola Manisa
              </h4>
              <div className="flex items-center gap-x-2">
                <span className="bg-[#36B37E]/20 w-fit p-1.5 rounded-full "><FaCheck className="
                text-[#36B37E] w-2 h-2
                " /> </span>
                <h5 className="italic text-dark-light text-xs md:text-sm">Verified writer</h5>
              </div>
            </div>

          </div>
          <span className="font-bold text-soft-light italic text-sm md:text-base">02 May</span>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
