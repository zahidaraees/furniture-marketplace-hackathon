"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Footer2 from "../components/Footer2";
import Image from "next/image";
import HeroSection2 from "../components/Herosection2";

// Define type for cart items
interface CartItem {
  _id: string;
  title: string;
  productImage: string;
  price: number;
  discountPercentage?: number;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const router = useRouter();

  useEffect(() => {
    const items: CartItem[] = JSON.parse(
      localStorage.getItem("cartItems") || "[]"
    );
    setCartItems(items);
  }, []);

  const handleCheckout = () => {
    console.log("Proceeding to checkout", cartItems);
    router.push("/checkout");
  };

  const handleClearCart = () => {
    localStorage.removeItem("cartItems");
    setCartItems([]);
  };

  const handleReturnToShop = () => {
    router.push("/shop");
  };

  return (
    <>
      <div>
        <HeroSection2 title="Cart" breadcrumb="Home > Cart" />
      </div>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

        {cartItems.length === 0 ? (
          <div>
            <p>Your cart is empty.</p>
            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
              onClick={handleReturnToShop}
            >
              Return to Shop
            </button>
          </div>
        ) : (
          <div className="grid gap-4">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center border p-4 rounded-lg shadow-md"
              >
                {item.productImage ? (
                  <Image
                    src={item.productImage}
                    alt={item.title}
                    width={100}
                    height={100}
                    className="rounded-lg"
                  />
                ) : (
                  <p>No image available</p>
                )}
                <div className="ml-4 flex-1">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p>Quantity: 1</p>
                  <p>Price: ${item.price}</p>
                  <p>Discount: {item.discountPercentage || "N/A"}%</p>
                </div>
              </div>
            ))}

            <div className="flex gap-4 mt-4">
              <button
                className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
                onClick={handleCheckout}
              >
                Checkout
              </button>
              <button
                className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
                onClick={handleClearCart}
              >
                Clear Cart
              </button>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                onClick={handleReturnToShop}
              >
                Return to Shop
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer2 />
    </>
  );
};

export default Cart;
