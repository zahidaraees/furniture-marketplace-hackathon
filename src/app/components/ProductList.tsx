"use client";

import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Import arrows

interface Product {
  _id: string;
  title: string;
  price: number;
  discountPercentage?: number;
  tags?: string[];
  productImage?: {
    asset: {
      _ref: string;
    };
  };
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      const productData: Product[] = await client.fetch(
        `*[_type == "product"] | order(_createdAt desc) {
          _id,
          title,
          price,
          "discountPercentage": coalesce(discountPercentage, 0), 
          tags,
          productImage
        }`
      );
      setProducts(productData);
    };

    fetchProducts();
  }, []);

  // Show only 3 products at a time
  const visibleProducts = products.slice(startIndex, startIndex + 3);

  // Handle next slide
  const nextSlide = () => {
    if (products.length > 3) {
      setStartIndex((prev) => (prev + 3 >= products.length ? 0 : prev + 3));
    }
  };

  // Handle previous slide
  const prevSlide = () => {
    if (products.length > 3) {
      setStartIndex((prev) => (prev - 3 < 0 ? products.length - (products.length % 3 || 3) : prev - 3));
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
      
      <div className="flex items-center justify-between">
        {/* Left Arrow */}
        <button 
          onClick={prevSlide} 
          className={`p-2 bg-gray-300 rounded-full ${products.length <= 3 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-400"}`}
          disabled={products.length <= 3}
        >
          <ChevronLeft size={32} />
        </button>

        {/* Product List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500">
          {visibleProducts.length > 0 ? (
            visibleProducts.map((product) => {
              const imageUrl = product.productImage
                ? urlFor(product.productImage.asset).url()
                : null;

              return (
                <div key={product._id} className="border rounded-lg p-4 shadow-lg transition-transform transform hover:scale-105">
                  <div className="cursor-pointer">
                    {imageUrl ? (
                      <Image
                        src={imageUrl}
                        alt={product.title}
                        width={300}
                        height={300}
                        className="rounded-lg object-cover"
                      />
                    ) : (
                      <p>No image available</p>
                    )}
                    <h3 className="text-xl font-semibold mt-3">{product.title}</h3>
                    <p className="text-gray-600">Price: ${product.price}</p>
                    <p className={product.discountPercentage ? "text-red-500" : "text-gray-400"}>
                      Discount: {product.discountPercentage}%
                    </p>
                    <p className="text-gray-600">
                      Tags: {product.tags?.join(", ") || "No tags"}
                    </p>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-center text-gray-500">No products available</p>
          )}
        </div>

        {/* Right Arrow */}
        <button 
          onClick={nextSlide} 
          className={`p-2 bg-gray-300 rounded-full ${products.length <= 3 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-400"}`}
          disabled={products.length <= 3}
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  );
};

export default ProductList;
