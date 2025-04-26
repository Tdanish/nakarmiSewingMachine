import React from "react";
import { FaShareSquare } from "react-icons/fa";

const BrandCard = ({ brand }) => {
  const BrandCardData = [
    {
      id: 1,
      brand: "brother",
    },
    {
      id: 2,
      brand: "cupid",
    },
    {
      id: 3,
      brand: "fingertex",
    },
    {
      id: 4,
      brand: "jack",
    },
    {
      id: 5,
      brand: "merritt",
    },
    {
      id: 6,
      brand: "mona",
    },
    {
      id: 7,
      brand: "nakarmi",
    },
    {
      id: 8,
      brand: "precious",
    },
    {
      id: 9,
      brand: "rahul",
    },
    {
      id: 10,
      brand: "revo",
    },
    {
      id: 11,
      brand: "unique",
    },
    {
      id: 12,
      brand: "usha",
    },
    {
      id: 13,
      brand: "friend",
    },
  ];
  return (
    <div className="w-full flex bg-white flex-col sudip py-20  ">
      {/* // {head section} */}
      <div className=" my-10">
        <div className="w-30  bg-gray-300 mb-2 ">
          <div className="w-10  border-[1.5px]  border-cyan-600  "></div>
        </div>
        <h1 className=" text-xl sm:text-2xl font-normal text-gray-800 ">
          Shop By
        </h1>
        <h2 className="text-xl sm:text-2xl font-medium text-cyan-600">
          Brands
        </h2>
      </div>

      {/* {card sections} */}
      <div className="grid   sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4   container gap-10     uppercase">
        {BrandCardData.map((brandName) => {
          return (
            <div
              key={brandName.id}
              className="bg-gray-100 border border-gray-200 h-full text-center   py-4   "
            >
              <h1 className="font-semibold text-md hover:text-cyan-600 ">
                {brandName.brand}{" "}
              </h1>
              <div className="flex items-center justify-center  font-semibold text-sm text-cyan-600 m-4 capitalize ">
                <p className="px-2">view product</p>
                <FaShareSquare className="text-cyan-600 " />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BrandCard;
