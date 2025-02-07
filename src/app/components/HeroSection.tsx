import Image from "next/image"; // For optimized image loading
import React from "react";
import Link from "next/link";

const HeroSection: React.FC = () => {
  return (
    <section className="relative flex items-center bg-white h-[500px] lg:h-[600px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/hero.png"

          alt="Hero Image"
          width={500}
          height={600}
          priority
          className="w-full h-full object-cover"
        />

        
      </div>

      {/* Blurred Background Only Behind Text */}
      <div className="absolute inset-0 flex justify-end items-center px-6 lg:px-16">
        <div className="w-full max-w-lg backdrop-blur-lg bg-[#FDF6E5]/70 p-6 rounded-lg">
          <p className="text-sm font-medium uppercase text-gray-700 mb-4">
            New Arrival
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-6">
            Discover Our <br /> New Collection
          </h1>
          <p className="text-base lg:text-lg text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <Link href="/shop">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-md font-medium">
            
            Buy Now
            
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
