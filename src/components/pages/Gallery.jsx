import React from "react";
import background from "../images/istockphoto-673637170-612x612.jpg";
import { Link } from "react-router-dom";
import GalleryCard from "../SingleComponent/GalleryCard";

const Gallery = () => {
  return (
    <div className="bg-re-200">
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
          <h2 className="text-5xl font-medium">Gallery</h2>
          <div className="flex">
            <Link to={"/home"}>
              <p className="text-gray-300 hover:text-white">Home{` / `} </p>
            </Link>
            <p> Gallery</p>
          </div>
        </div>
      </div>

      <div className="w-full flex bg-white flex-col sudip py-10">
        {/* top welcome section  */}
        <div className=" my-10">
          <div className="w-30  bg-gray-300 mb-2 ">
            <div className="w-10  border-[1.5px]  border-cyan-600  "></div>
          </div>
          <h1 className=" text-xl sm:text-2xl font-normal text-gray-800 ">
            Our Gallery
          </h1>
          <h2 className="text-xl sm:text-2xl font-medium text-cyan-600">
            For All Nakarmi Accessories
          </h2>
        </div>
        <GalleryCard />
      </div>
    </div>
  );
};

export default Gallery;
