import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  const { name, to, external, onclick } = props;
  if (to && external) {
    return (
      <a href={to}>
        <button className="bg-cyan-600 text-white px-8 py-3 font-light rounded-sm shadow-md hover:bg-black w-fit">
          {name}
        </button>
      </a>
    );
  }
  if (to) {
    return (
      <Link to={to}>
        <button className="bg-cyan-600 text-white px-8 py-3 font-light rounded-sm shadow-md hover:bg-black w-fit">
          {name}
        </button>
      </Link>
    );
  }
};

export default Button;
