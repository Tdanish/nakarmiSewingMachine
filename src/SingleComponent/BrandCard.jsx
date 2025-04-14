import React from "react";
import { FaShareSquare } from "react-icons/fa";

const BrandCard = () => {
  return (
    <div className="bg-red-300 w-max  text-center items-center p-10 ">
      <h1 className="font-extrabold text-3xl">brand name </h1>
      <div className="flex items-center justify-center text-2xl font-extralight text-cyan-600 m-4 capitalize ">
        <p className="px-2">view product</p>
        <FaShareSquare className="text-cyan-600 " />
      </div>
    </div>
  );
};

export default BrandCard;
