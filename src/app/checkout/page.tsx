// app/checkout/page.tsx
import Footer2 from "../components/Footer2";
import HeroSection2 from "../components/Herosection2";

export default function CheckoutPage() {
  return (
    <div>
      <HeroSection2 title="Checkout" breadcrumb="Home > Check Out" />
      <div className="max-w-7xl mx-auto px-4 py-8">
       

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Billing Details */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Billing Details</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="p-3 border rounded"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="p-3 border rounded"
                />
              </div>
              <input
                type="text"
                placeholder="Company Name (Optional)"
                className="p-3 border rounded w-full"
              />
              <select className="p-3 border rounded w-full">
                <option>Sri Lanka</option>
              </select>
              <input
                type="text"
                placeholder="Street Address"
                className="p-3 border rounded w-full"
              />
              <input
                type="text"
                placeholder="Town / City"
                className="p-3 border rounded w-full"
              />
              <input
                type="text"
                placeholder="Province"
                className="p-3 border rounded w-full"
              />
              <input
                type="text"
                placeholder="ZIP Code"
                className="p-3 border rounded w-full"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="p-3 border rounded w-full"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="p-3 border rounded w-full"
              />
            </form>
          </div>

          {/* Order Summary */}
          <div className="p-6 bg-white shadow rounded">
            <h2 className="text-xl font-semibold mb-4">Your Order</h2>
            <div className="space-y-4">
              <div className="flex justify-between text-gray-600">
                <span>Asgaard Sofa x 1</span>
                <span>Rs. 250,000.00</span>
              </div>
              <hr />
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span className="text-yellow-600">Rs. 250,000.00</span>
              </div>
              <div className="mt-6">
                <h3 className="font-medium">Payment Method</h3>
                <div className="flex flex-col gap-2 mt-2">
                  <label className="flex items-center">
                    <input type="radio" name="payment" className="mr-2" />
                    Direct Bank Transfer
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="payment" className="mr-2" />
                    Cash on Delivery
                  </label>
                </div>
              </div>
              <button className="w-full bg-yellow-600 text-white p-3 rounded mt-4 hover:bg-yellow-700">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer2 />      
    </div>
  );
}
