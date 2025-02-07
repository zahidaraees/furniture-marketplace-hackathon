"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client"; 
import { Product } from "@/app/types/product";
import HeroSection2 from "@/app/components/Herosection2"; // ✅ Hero banner

export default function ProductDetail() {
  const params = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!params.id) return;

    const fetchProduct = async () => {
      try {
        const productData = await client.fetch(
          `*[_type == "product" && _id == $id][0]{
            _id,
            title,
            price,
            discountPercentage,
            description,
            isNew,
            tags,
            productImage
          }`,
          { id: params.id }
        );

        if (productData) {
          setProduct(productData);
        } else {
          console.error("🚨 Product not found");
        }
      } catch (error) {
        console.error("🔥 Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params.id]);

  const handleAddToCart = (product: Product) => {
    try {
      const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");

      const productToAdd = {
        ...product,
        productImage: product.productImage ? urlFor(product.productImage).url() : null,
        discountPercentage: product.discountPercentage ?? 0,
      };

      localStorage.setItem("cartItems", JSON.stringify([...cartItems, productToAdd]));
      alert("✅ Product added to cart!");
      router.push("/cart");
    } catch (error) {
      console.error("🔥 Error adding to cart:", error);
    }
  };

  if (loading) return <p className="text-center text-lg">⏳ Loading product...</p>;
  if (!product) return <p className="text-center text-lg text-red-500">❌ Product not found</p>;

  return (
    <div>
      {/* ✅ Hero Banner */}
      <HeroSection2 title="Shop" breadcrumb="Home > Shop" />

      {/* ✅ Product Detail Section */}
      <div className="max-w-5xl mx-auto p-6">
        {/* ✅ First Row - Image & Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* ✅ Left Column - Product Image + Details Underneath */}
          <div className="flex flex-col items-center">
            {/* Product Image */}
            {product.productImage ? (
              <Image
                src={urlFor(product.productImage).url()}
                alt={product.title}
                width={400}
                height={500} // ⬅ 60% of description height
                className="rounded-lg shadow-lg object-contain"
              />
            ) : (
              <div className="w-[400px] h-[500px] bg-gray-200 flex items-center justify-center rounded-lg">
                <p>No Image Available</p>
              </div>
            )}

            {/* ✅ Under Image - Price, Discount, Tags, Is New, Buttons */}
            <div className="mt-4 text-center space-y-3">
              <p className="text-lg font-semibold">Price: ${product.price}</p>
              <p className="text-lg">
                Discount: <span className="text-red-600">{product.discountPercentage ?? 0}%</span>
              </p>
              <p className="text-lg">
                Is New: <span className="text-blue-600 font-semibold">{product.isNew ? "Yes" : "No"}</span>
              </p>

              {/* ✅ Tags Section */}
              {product.tags && product.tags.length > 0 && (
                <div>
                  <p className="font-semibold">Tags:</p>
                  <div className="flex flex-wrap gap-2 justify-center mt-2">
                    {product.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* ✅ Buttons: Add to Cart & Return to Shop */}
              <div className="flex flex-col gap-3 mt-4">
                <button
                  className="px-6 py-3 bg-red-600 text-white text-lg rounded-lg shadow-md hover:bg-red-700 transition"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
                <button
                  className="px-6 py-3 bg-gray-600 text-white text-lg rounded-lg shadow-md hover:bg-gray-700 transition"
                  onClick={() => router.push("/shop")}
                >
                  Return to Shop
                </button>
              </div>
            </div>
          </div>

          {/* ✅ Right Column - Description (Multiple Rows) */}
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            {product.description ? (
              <p className="text-lg text-gray-600 leading-relaxed">{product.description}</p>
            ) : (
              <p className="text-gray-500 italic">No description available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
