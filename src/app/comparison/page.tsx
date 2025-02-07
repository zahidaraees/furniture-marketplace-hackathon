"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Footer from "../components/Footer2";
import HeroSection2 from "../components/Herosection2";

const Comparison = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleRedirect = (url: string) => {
    window.location.href = url;
  };

  return (
    <>
      {/* Hero Section */}
      <HeroSection2 title="Product Comparison" breadcrumb="Home > Comparison" />

      <div className="container mx-auto p-6">
        {/* Product Information */}
        <div className="grid grid-cols-3 gap-6 mb-10">
          {/* Product 1 */}
          <div className="p-4">
            <Link href="/productdetail">
              <Image
                src="/assets/Sofa01.png"
                alt="Asgaard Sofa"
                width={300}
                height={200}
                className="mx-auto cursor-pointer"
              />
            </Link>
            <h2 className="text-xl font-bold mt-4 text-center">Asgaard Sofa</h2>
            <p className="text-center text-gray-600">Rs. 250,000.00</p>
          </div>

          {/* Product 2 */}
          <div className="p-4">
            <Image
              src="/assets/Sofa02.png"
              alt="Outdoor Sofa Set"
              width={300}
              height={200}
              className="mx-auto"
            />
            <h2 className="text-xl font-bold mt-4 text-center">Outdoor Sofa Set</h2>
            <p className="text-center text-gray-600">Rs. 224,000.00</p>
          </div>

          {/* Add a Product - Dropdown Button */}
          <div className="flex flex-col justify-center items-center p-4">
            <h2 className="text-xl font-bold mb-4">Add A Product</h2>
            <div className="relative">
              <button
                onClick={handleDropdownToggle}
                className="bg-yellow-500 text-white py-2 px-4 rounded flex items-center justify-between w-56"
              >
                Choose a Product
                <svg
                  className="w-5 h-5 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute bg-white shadow-lg mt-2 w-full py-2 rounded">
                  <button
                    className="block px-4 py-2 text-gray-800 w-full text-left hover:bg-gray-100"
                    onClick={() => handleRedirect('https://example.com/product1')}
                  >
                    Product 1
                  </button>
                  <button
                    className="block px-4 py-2 text-gray-800 w-full text-left hover:bg-gray-100"
                    onClick={() => handleRedirect('https://example.com/product2')}
                  >
                    Product 2
                  </button>
                  <button
                    className="block px-4 py-2 text-gray-800 w-full text-left hover:bg-gray-100"
                    onClick={() => handleRedirect('https://example.com/product3')}
                  >
                    Product 3
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* The rest of the component remains unchanged */}
        <Footer />
      </div>
    </>
  );
};

export default Comparison;
