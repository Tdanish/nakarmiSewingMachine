import { motion, AnimatePresence } from "framer-motion";
import React from "react";

const ResponsiveMenu = ({ open }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          mode="wait"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="absolute   top-19 left-0 w-full h-screen  z-20"
        >
          <div className="text-xl font-semibold uppercase bg-black text-white py-15  md:hidden">
            <ul className="flex flex-col justify-center items-center gap-10">
              <li>Home</li>

              <li>About us</li>
              <li>Products</li>
              <li>Galery</li>
              <li>Contact</li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
