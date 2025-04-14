import React from "react";
import { FaShareSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <Link to={props.to}>
      <div className="bg-gray-200  w-full  m-2  border-2 border-gray-200 rounded-sm shadow-xl transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110  ">
        <img
          src={props.image}
          alt=""
          className=" h-44 w-full object-cover rounded-t-md"
        />

        <h3 className="text-center p-5  font-semibold uppercase hover:text-cyan-600  ">
          {props.name}
        </h3>
        <div className="flex items-center justify-center text-cyan-600 mb-2 capitalize ">
          <p className="px-2">view product</p>
          <FaShareSquare className="text-cyan-600 " />
        </div>
      </div>
    </Link>
  );
};

export default Card;
