import Image from "next/image";
export default function Footer2() {
  return (
    <footer className=" text-black py-6 mt-10">
      
      <section className="features-section py-8" style={{ backgroundColor: "#FAF3EA" }}>
        <div className="container mx-auto h-full w=270 flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="flex items-center justify-center">
              <Image src="/icons/trophy.png" alt="High Quality" width={48} height={48} />
              <div className="ml-4 text-left">
                <h3 className="font-bold">High Quality</h3>
                <p className="text-gray-600">Crafted from top materials</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image src="/icons/warranty.png" alt="Warranty Protection" width={48} height={48} />
              <div className="ml-4 text-left">
                <h3 className="font-bold">Warranty Protection</h3>
                <p className="text-gray-600">Over 2 years</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image src="/icons/shipping.png" alt="Free Shipping" width={48} height={48} />
              <div className="ml-4 text-left">
                <h3 className="font-bold">Free Shipping</h3>
                <p className="text-gray-600">Order over $150</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image src="/icons/support.png" alt="24/7 Support" width={48} height={48} />
              <div className="ml-4 text-left">
                <h3 className="font-bold">24/7 Support</h3>
                <p className="text-gray-600">Dedicated support</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
