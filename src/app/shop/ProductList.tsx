"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Product } from "@/app/types/product";
import { urlFor } from "@/sanity/lib/image";
import { useState, useEffect } from "react";

const PRODUCTS_PER_PAGE = 12; // Show 3 rows of 4 products each

const ProductList = ({ products }: { products: Product[] }) => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    products.forEach((p) => {
      if (!p._id) console.error("Missing _id for product:", p);
    });
  }, [products]);

  const handleProductClick = (id: string) => {
    if (id) {
      router.push(`/shop/product/${id}`);
    } else {
      console.error("Product ID is missing!");
    }
  };

  const handleAddToCart = (product: Product) => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
    const productToAdd = {
      ...product,
      productImage: product.productImage
        ? urlFor(product.productImage).url()
        : null,
      discountPercentage: product.discountPercentage ?? 0, // ✅ Fixed typo
    };

    localStorage.setItem(
      "cartItems",
      JSON.stringify([...cartItems, productToAdd])
    );
    router.push("/cart");
  };

  // Filter products based on search term
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);

  return (
    <div>
      {/* Header Section */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">Shop</h1>
        <input
          type="text"
          placeholder="Search products..."
          className="border p-2 rounded-lg"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); // Reset to first page when searching
          }}
        />
      </header>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {paginatedProducts.length > 0 ? (
          paginatedProducts.map((product) => {
            if (!product._id) {
              console.warn("Product is missing an ID:", product);
              return null;
            }

            const imageUrl = product.productImage
              ? urlFor(product.productImage).url()
              : null;

            return (
              <div
                key={String(product._id)}
                className="product-card border p-4 rounded-lg hover:shadow-lg"
              >
                <p>Title: {product.title}</p>

                {imageUrl ? (
                  <Image
                    src={imageUrl}
                    alt={`Image of ${product.title}`}
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                ) : (
                  <div className="w-[200px] h-[200px] bg-gray-200 flex items-center justify-center rounded-lg">
                    <p>No image available</p>
                  </div>
                )}

                <p>Price: ${product.price}</p>
                <p>Discount: {product.discountPercentage ?? "N/A"}%</p>
                <div className="text-gray-600 flex flex-wrap">
                  {product.tags?.length ? (
                    product.tags.map((tag, index) => (
                      <span key={`${product._id}-tag-${tag}-${index}`} className="mr-1">
                        {tag}
                      </span>
                    ))
                  ) : (
                    <span>No tags</span>
                  )}
                </div>

                {/* Buttons */}
                <div className="flex justify-between mt-4">
                  <button
                    className="bg-yellow-500 text-white py-2 px-5 rounded-lg hover:bg-blue-600"
                    onClick={() => handleProductClick(product._id)}
                  >
                    Details
                  </button>
                  <button
                    className="bg-red-900 text-white py-2 px-4 rounded-lg hover:bg-green-600"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center text-gray-500">No products available</p>
        )}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8 space-x-4">
          <button
            className={`px-4 py-2 rounded-md ${
              currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </button>

          <span className="text-lg font-semibold">
            Page {currentPage} of {totalPages}
          </span>

          <button
            className={`px-4 py-2 rounded-md ${
              currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductList;
