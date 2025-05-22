import React, { useState } from "react";
import { NavbarMenu } from "../../mock Data/data";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";
import { RxCross1 } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const currentPage = useLocation().pathname;

  const [activeIndex, setActiveIndex] = useState(currentPage);

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
              {NavbarMenu.map((item) => {
                return (
                  <li
                    key={item.id}
                    className={`inline-block py-1 px-3 hover:text-cyan-600 ${
                      activeIndex === item.link ? "text-cyan-600" : ""
                    }`}
                  >
                    <Link
                      onClick={(e) => {
                        setActiveIndex(item.link);
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
