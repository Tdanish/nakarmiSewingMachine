import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function CategorySection({ title, items, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="mb-6 ">
      <div
        className="flex justify-between items-center mb-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-sm font-semibold text-cyan-600">{title}</h3>
        {isOpen ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}
      </div>
      <hr className="text-gray-300 mb-3" />

      {isOpen && (
        <ul className="space-y-2 text-sm font-light">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <span className="text-gray-500  mr-2">•</span>
              <a
                href="#"
                className="text-gray-700 hover:text-cyan-600 transition-colors duration-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Sidebar() {
  const categories = [
    "ACCESSORIES",
    "CUTTING MACHINE",
    "DOMESTIC SEWING MACHINE",
    "HOUSEHOLD/DESIGNER SEWING MACHINE",
    "INDUSTRIAL MACHINES",
    "IRON",
  ];

  const brands = [
    "BROTHER",
    "CUPID",
    "FINGTEX",
    "FRIEND",
    "JACK",
    "MERRITT",
    "MONA",
    "NAKARMI",
    "PRECIOUS",
    "RAHUL",
    "REVO",
    "UNIQUE",
    "USHA",
  ];

  return (
    <div className="bg-white p-5   ">
      <CategorySection
        title="Categories"
        items={categories}
        defaultOpen={true}
      />

      <CategorySection title="Brands" items={brands} defaultOpen={true} />
    </div>
  );
}

export default Sidebar;
