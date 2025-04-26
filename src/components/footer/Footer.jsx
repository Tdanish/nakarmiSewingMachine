import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-7/5 px-auto">
        <div className="mt-[-5px] md:mb-0">
          <Link to="/home">
            <img
              src="./src/components/images/logo-1.png"
              class="h-26 mb-6"
              alt="FlowBite Logo"
            />
          </Link>
          <div className="text-gray-500 ">
            As our slogan states, “Sew Your <br /> Passion,” we believe in
            meeting our <br /> customers’ demand by providing the <br /> right
            machines to create their passion <br /> in the sewing industry.
          </div>
        </div>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
