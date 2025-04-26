import React from "react";
import background from "../images/istockphoto-673637170-612x612.jpg";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div className="">
      <div
        className=""
        style={{
          backgroundImage: `url(${background})`,
          background: "linear-gradient(black 5 )",
          opacity: "01",

          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",

          width: "100%",
          height: "auto",
        }}
      >
        <div className="bg-gradient-to-t from-gray-900  flex flex-col justify-center items-center gap-6 p-20 text-white">
          <h2 className="text-5xl font-medium">Contact Us</h2>
          <div className="flex">
            <Link to={"/home"}>
              <p className="text-gray-300 hover:text-white">Home{` / `} </p>
            </Link>
            <p> Contact Us</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
