// scr/app/components/Roominspiration.txt

import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F9F5F0]">
      <main className="container mx-auto px-4 py-10">
        <section className="flex gap-4 items-start">
          {/* Text Column (30%) */}
          <div className="w-[30%]">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-snug">
              50+ Beautiful rooms <br /> inspiration
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              Our designer already made a lot of beautiful <br /> prototypes of rooms that inspire you.
            </p>
            <button className="mt-6 px-6 py-3 bg-[#B8925E] text-white font-semibold rounded-lg shadow-lg hover:bg-[#997041]">
              Explore More
            </button>
          </div>

          {/* First Image Column (40%) */}
          <div className="w-[40%] relative">
            <div className="h-auto">
              <Image
                src="/assets/Rectangle24.png"
                alt="Room Inspiration 1"
                width={808}
                height={1164}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-70 p-4 flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  01 — Bed Room
                </h2>
                <p className="text-gray-600">Inner Peace</p>
              </div>
              <button className="px-4 py-2 bg-[#B8925E] text-white font-medium rounded shadow-lg hover:bg-[#997041]">
                Discover More
              </button>
            </div>
          </div>

          {/* Second Image Column (25%, height 90% of First Column) */}
          <div className="w-[25%] relative">
            <div
              className="h-[90%] mx-auto overflow-hidden"
              style={{
                height: '90%', // Dynamically match 90% of the first column's height
              }}
            >
              <Image
                src="/assets/Rectangle02.png"
                alt="Room Inspiration 2"
                width={372}
                height={486}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="flex justify-center mt-2 space-x-2">
              <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
              <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
              <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
              <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
            </div>
          </div>

          {/* Third Image Column (5%, height 70% of Second Column) */}
          <div className="w-[5%] flex flex-col items-end">
            <div
              className="h-[70%] relative overflow-hidden"
              style={{
                height: '70%', // Dynamically match 70% of the second column's height
              }}
            >
              <Image
                src="/assets/Rectangle03.png"
                alt="Room Inspiration 3"
                width={372}
                height={486}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="p-2 text-center">
              <h2 className="text-sm font-semibold text-gray-800">
                03 — Dining Room
              </h2>
              <p className="text-gray-600 mt-2 text-xs">Elegant Dining</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
