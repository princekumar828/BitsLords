import React from "react";
import { Link } from "react-router-dom";

function BreadCrumbs({ data }) {
  return (
    <div className="flex items-center py-4 overflow-auto whitespace-nowrap ">
      {data.map((item, index) => {
        return  (
            <div className="text-black/50 text-xs md:text-sm md md:font-roboto "key={index} > 
               <Link className="" to={item.link}>{index==0 || index==data.length?"":<p className="inline px-2.5">/</p>}{item.title}</Link>
            </div>
        )
      })}
    </div>
  );
}

export default BreadCrumbs;
