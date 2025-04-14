import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, isOpen] = useState(false);
  return (
    <>
      <header className="relative  bg-black h-20  md:px-22 lg:px-36 xl:px-40 flex items-center justify-between shadow-md  ">
        {/* desktop Navbar */}
        <div className="hidden sm:flex sm:items-center sm:justify-between  shadow-md w-full ">
          {/* Logo */}
          <div className="absolute bg-black top-1 ">
            <Link to="/">
              <img
                src="./src/components/images/logo-1.png"
                alt="Logo"
                className="h-30 mt-2 p-1 border rounded-2xl"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className=" space-x-10 text-white uppercase i text-sm tracking-wider font-semibold ">
            <Link to="/">Home</Link>
            <Link to="/aboutus">About Us</Link>
            <Link to="/products">Products</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
        Mobile Navigation
        <div
          className={` relative flex md:hidden px-4 justify-end w-full transition-opacity duration-300 ease-in-out `}
        >
          {/* Logo */}
          <div className=" absolute bg-black left-2 ">
            <Link to="/">
              <img
                src="./src/components/images/logo-1.png"
                alt="Logo"
                className="h-32 "
              />
            </Link>
          </div>

          <button onClick={() => isOpen(!open)}>
            <GiHamburgerMenu className="text-white" size={32} />
          </button>

          <div
            className={` ${
              open ? "translate-x-0" : "translate-x-[100%]"
            }  absolute inset-0 flex items-center justify-center h-screen w-screen gap-2 text-white bg-black uppercase text-sm font-semibold transition-all duration-300 ease-in `}
          >
            <div className="flex relative  flex-col items-center gap-6 text-2xl">
              <Link to="/">Home</Link>
              <Link to="/aboutus">About Us</Link>
              <Link to="/products">Products</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/contact">Contact</Link>

              <button
                onClick={() => isOpen(!open)}
                className="pl-20 absolute -top-[100%] -right-[100%]"
              >
                <RxCross1 className="text-white" size={32} />
              </button>
            </div>
          </div>
        </div>
      </header>
      <hr className=" mt-13  border-gray-300  h-9 sticky  w-full" />
    </>
  );
};

export default Navbar;
