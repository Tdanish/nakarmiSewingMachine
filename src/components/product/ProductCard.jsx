import React from "react";

function ProductCard({ product }) {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
      <a href="#" className="block relative overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-contain p-4 transition-transform duration-300 group-hover:scale-105"
        />
      </a>
      <div className="p-4 border-t border-gray-100">
        <h3 className="font-medium text-center text-gray-800 hover:text-cyan-600 transition-colors duration-200">
          <a href="#">{product.title}</a>
        </h3>
      </div>
    </div>
  );
}

export default ProductCard;
