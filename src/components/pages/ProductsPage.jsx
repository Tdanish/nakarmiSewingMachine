import React, { useState } from "react";
import Breadcrumb from "../product/Breadcrumb";
import { productsData } from "../../mock Data/productData";
import ProductGrid from "../product/ProductGrid";
import Sidebar from "../product/Sidebar";

function ProductsPage() {
  const [products, setProducts] = useState(productsData);
  const [sortOrder, setSortOrder] = useState("latest");

  const handleSort = (e) => {
    const value = e.target.value;
    setSortOrder(value);

    let sortedProducts = [...productsData];
    if (value === "name-asc") {
      sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (value === "name-desc") {
      sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
    }

    setProducts(sortedProducts);
  };

  return (
    <div className=" sudip   py-6">
      <Breadcrumb />

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/4">
          <Sidebar />
        </div>

        <div className="w-full md:w-3/4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <p className="text-gray-600 mb-4 sm:mb-0">
              Showing 1-8 of 105 results
            </p>

            <div className="relative w-full sm:w-auto">
              <select
                value={sortOrder}
                onChange={handleSort}
                className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-4 pr-10 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full sm:w-48"
              >
                <option value="latest">Sort by latest</option>
                <option value="name-asc">Sort by name: A-Z</option>
                <option value="name-desc">Sort by name: Z-A</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          <ProductGrid products={products} />

          <div className="flex justify-center mt-8">
            <nav className="inline-flex">
              <a
                href="#"
                className="py-2 px-4 bg-white border border-gray-300 text-blue-600 hover:bg-gray-50 rounded-l-md"
              >
                1
              </a>
              <a
                href="#"
                className="py-2 px-4 bg-white border-t border-b border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                2
              </a>
              <a
                href="#"
                className="py-2 px-4 bg-white border-t border-b border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                3
              </a>
              <a
                href="#"
                className="py-2 px-4 bg-white border-t border-b border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                4
              </a>
              <a
                href="#"
                className="py-2 px-4 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-r-md"
              >
                Next →
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
