"use client";
import { useState } from "react";
import Image from "next/image"

export default function Ourproducts() {
  // Sample product data
  const products = [
    {
      id: 1,
      image: "/public/assets/Item01.png",
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rp 2,500,000",
      oldPrice: "Rp 3,500,000",
    },
    {
      id: 2,
      image: "/public/assets/product02.png",
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: "Rp 2,500,000",
    },
    {
      id: 3,
      image: "/public/assets/product03.png",
      name: "Lolito",
      description: "Luxury big sofa",
      price: "Rp 7,000,000",
      oldPrice: "Rp 14,000,000",
    },
    {
      id: 4,
      image: "/public/assets/product04a.png",
      name: "Respira",
      description: "Outdoor bar table and stool",
      price: "Rp 500,000",
    },
    {
      id: 5,
      image: "/public/assets/product04.png",
      name: "Grifo",
      description: "Night Lamp",
      price: "Rp 1,500,000",
    },
    {
      id: 6,
      image: "/public/assets/product05.png",
      name: "Muggo",
      description: "Small Mug",
      price: "Rp 150,000",
    },
    {
      id: 7,
      image: "/public/assets/product07.png",
      name: "Pingky",
      description: "Cute bed set",
      price: "Rp 7,000,000",
    },
    {
      id: 8,
      image: "/public/assets/product08.png",
      name: "Potty",
      description: "Minimal Flower Pot",
      price: "Rp 500,000",
    },
    {
    id: 9,
      image: "/public/assets/Item01.png",
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rp 2,500,000",
      oldPrice: "Rp 3,500,000",
    },
    {
      id: 10,
      image: "/public/assets/product02.png",
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: "Rp 2,500,000",
    },
    {
      id: 11,
      image: "/public/assets/product03.png",
      name: "Lolito",
      description: "Luxury big sofa",
      price: "Rp 7,000,000",
      oldPrice: "Rp 14,000,000",
    },
    {
      id: 12,
      image: "/public/assets/product04a.png",
      name: "Respira",
      description: "Outdoor bar table and stool",
      price: "Rp 500,000",
    },
    {
      id: 13,
      image: "/public/assets/product04.png",
      name: "Grifo",
      description: "Night Lamp",
      price: "Rp 1,500,000",
    },
    {
      id: 14,
      image: "/public/assets/product05.png",
      name: "Muggo",
      description: "Small Mug",
      price: "Rp 150,000",
    },
    {
      id: 15,
      image: "/public/assets/product07.png",
      name: "Pingky",
      description: "Cute bed set",
      price: "Rp 7,000,000",
    },
    {
      id: 16,
      image: "/public/assets/product08.png",
      name: "Potty",
      description: "Minimal Flower Pot",
      price: "Rp 500,000",
    },
  ];

  // State to control how many products are shown
  const [visibleCount, setVisibleCount] = useState(4);

  // Function to load more products
  const showMoreProducts = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <div className="font-[sans-serif] bg-gray-100">
      <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full">
        <h2 className="flex justify-center text-4xl font-extrabold text-gray-800">
          Our Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6 mt-6">
          {products.slice(0, visibleCount).map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative"
            >
              <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
                <Image
                  src={product.image}
                  alt={product.name}                
                  className="h-full w-full object-contain"
                  width={285}
                height={446}
                />

              </div>
              <div>
                <h3 className="text-lg font-extrabold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mt-2">{product.description}</p>
                <h4 className="text-lg text-gray-800 font-bold mt-4">
                  {product.price} {product.oldPrice && <s>{product.oldPrice}</s>}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {visibleCount < products.length && (
          <div className="flex justify-center mt-6">
            <button
              onClick={showMoreProducts}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
