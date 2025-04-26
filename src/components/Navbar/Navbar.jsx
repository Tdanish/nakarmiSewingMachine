import React, { useState } from "react";
import { NavbarMenu } from "../../mock Data/data";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <nav className="bg-black w-full flex justify-center mx-auto sticky top-0  z-100">
        <div className=" flex justify-between py-6 sudip w-full uppercase">
          {/* logo section  */}
          <div className="    ">
            <a href="/">
              <img
                src="src/components/images/logo-1.png"
                alt=""
                className=" bg-black w-[90px] absolute top-1  "
              />
            </a>
          </div>
          {/* menu section  */}
          <div className="hidden md:block ">
            <ul className="flex items-center  lg:gap-6 font-bold text-sm text-white ">
              {NavbarMenu.map((item, index) => {
                return (
                  <li
                    key={item.id}
                    className={`inline-block py-1 px-3 hover:text-cyan-600 ${
                      activeIndex === index ? "text-cyan-600" : ""
                    }`}
                  >
                    <Link
                      onClick={(e) => {
                        setActiveIndex(index);
                      }}
                      to={item.link}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* logo hamburger menu section  */}
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? (
              <RxCross1 className="text-4xl text-white" />
            ) : (
              <MdMenu className="text-4xl text-white" />
            )}
          </div>
        </div>
        {/* mobile slide bar section  */}
        <ResponsiveMenu open={open} />
      </nav>
    </>
  );
};

export default Navbar;
