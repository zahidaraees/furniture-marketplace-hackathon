"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Ourproducts from "../components/OurProducts";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState("/assets/Sofa01.png");
  const [activeTab, setActiveTab] = useState("description");

  const thumbnails = [
    "/assets/Sofa01.png",
    "/assets/Sofa02.png",
    "/assets/Sofa03.png",
    "/assets/Sofa04.png",
    "/assets/Sofa05.png",
  ];

  return (
    <>
      {/* Main Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="flex items-center space-x-6">
            <i className="fa-solid fa-user text-gray-700 hover:text-black cursor-pointer"></i>
            <i className="fa-solid fa-heart text-gray-700 hover:text-black cursor-pointer"></i>
            <i className="fa-solid fa-cart-shopping text-gray-700 hover:text-black cursor-pointer"></i>
          </div>
        </div>
      </header>

      {/* Second Header */}
      <div className="py-4" style={{ backgroundColor: "#f9f1e7" }}>
        <div className="container mx-auto">
          <nav className="text-gray-600 text-sm">
            <Link href="/" className="hover:text-black">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/shop" className="hover:text-black">
              Shop
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-semibold">Asgaard Sofa</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {/* Left Section: Images */}
        <div>
          <div className="flex">
            {/* Thumbnails */}
            <div className="flex flex-col space-y-4 mr-4">
              {thumbnails.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className={`border rounded-lg overflow-hidden hover:opacity-80 ${
                    selectedImage === image
                      ? "border-gray-700"
                      : "border-transparent"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${index}`}
                    width={80}
                    height={80}
                  />
                </button>
              ))}
            </div>
            {/* Main Image */}
            <div className="flex-1">
              <Image
                src={selectedImage}
                alt="Asgaard Sofa"
                width={600}
                height={400}
                className="w-full rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Right Section: Product Details */}
        <div>
          <h1 className="text-3xl font-bold mb-4">Asgaard Sofa</h1>
          <p className="text-2xl font-semibold text-gray-700 mb-2">
            Rs. 250,000.00
          </p>
          <p className="text-yellow-500">⭐⭐⭐⭐⭐ (5 Customer Reviews)</p>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Setting the bar as one of the most durable and stylish sofas in its
            class. Its design features solid wood and premium cushions for
            maximum comfort.
          </p>

          {/* Quantity Selector */}
          <div className="mt-6 flex items-center">
            <button
              className="px-4 py-2 border rounded"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              -
            </button>
            <span className="mx-4">{quantity}</span>
            <button
              className="px-4 py-2 border rounded"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>

          {/* Buttons */}
          <div className="mt-6">
            <Link href="/cart">
              <button className="bg-black text-white px-6 py-3 rounded mr-4 hover:bg-gray-800">
                Add to Cart
              </button>
            </Link>
            <Link href="/comparison">
              <button className="border px-6 py-3 rounded hover:bg-gray-100">
                Compare
              </button>
            </Link>
          </div>

          {/* Missing Product Information */}
          <div className="mt-8 text-gray-700">
            <p>
              <strong>SKU:</strong> SS001
            </p>
            <p>
              <strong>Category:</strong> Sofas
            </p>
            <p>
              <strong>Tags:</strong> Sofa, Furniture, Home
            </p>
            <p>
              <strong>Availability:</strong> In Stock
            </p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="container mx-auto p-6">
        <div className="border-b">
          <button
            className={`mr-6 pb-2 ${
              activeTab === "description"
                ? "border-b-2 border-black text-black"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>
          <button
            className={`mr-6 pb-2 ${
              activeTab === "additional"
                ? "border-b-2 border-black text-black"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("additional")}
          >
            Additional Information
          </button>
          <button
            className={`pb-2 ${
              activeTab === "reviews"
                ? "border-b-2 border-black text-black"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews [5]
          </button>
        </div>
        <div className="mt-6 text-gray-600 leading-relaxed">
          {activeTab === "description" && (
            <>
              <p>
                Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
                portable active stereo speaker takes the unmistakable look and
                sound of Marshall, unplugs the chords, and takes the show on the
                road.
                <br />
                Weighing in under 7 pounds, the Kilburn is a lightweight piece
                of vintage styled engineering. Setting the bar as one of the
                loudest speakers in its class, the Kilburn is a compact,
                stout-hearted hero with a well-balanced audio which boasts a
                clear midrange and extended highs for a sound that is both
                articulate and pronounced. The analogue knobs allow you to fine
                tune the controls to your personal preferences while the
                guitar-influenced leather strap enables easy and stylish travel.
              </p>
              <div className="flex space-x-4 mt-6">
                <Image
                  src="/assets/sofa_description1.png"
                  alt="Sofa Description Image 1"
                  width={400}
                  height={300}
                  className="w-full rounded-lg"
                />
                <Image
                  src="/assets/sofa_description2.png"
                  alt="Sofa Description Image 2"
                  width={400}
                  height={300}
                  className="w-full rounded-lg"
                />
              </div>
            </>
          )}
          {activeTab === "additional" && (
            <p>
              Materials: Solid wood, Premium fabric. Dimensions: 150x80x75 cm.
              Weight: 45kg. Color options: Blue, Gray, Beige.
            </p>
          )}
          {activeTab === "reviews" && (
            <>
              <p>
                ⭐⭐⭐⭐⭐ - Excellent product! Highly recommend for its comfort
                and durability. <br />
                ⭐⭐⭐⭐ - Stylish and sturdy sofa. Worth the price!
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <Image
                  src="/assets/sofa_description1.png"
                  alt="Review Image 1"
                  width={400}
                  height={300}
                  className="w-full sm:w-1/2 rounded-lg"
                />
                <Image
                  src="/assets/sofa_description2.png"
                  alt="Review Image 2"
                  width={400}
                  height={300}
                  className="w-full sm:w-1/2 rounded-lg"
                />
              </div>
            </>
          )}
        </div>
      </section>
      <Ourproducts />
      {/* Footer */}
    </>
  );
};

export default ProductDetails;
