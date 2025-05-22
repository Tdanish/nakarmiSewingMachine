import React from "react";
import { Link } from "react-router-dom";

function Breadcrumb() {
  return (
    <div className="flex items-center py-4 text-sm">
      <Link to="/" className="text-gray-400 hover:text-black">
        Home
      </Link>
      <span className="mx-2 text-gray-500">/</span>
      <span className="text-gray-700">Products</span>
    </div>
  );
}

export default Breadcrumb;
