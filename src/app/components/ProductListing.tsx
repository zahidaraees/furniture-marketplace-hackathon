// components/ProductList.tsx it will display list of product items. 
import Image from "next/image"; // For optimized image loading

export default function ProductListing() {
  return (
    <div>
      <div className=" font-sans p-4 mx-auto lg:max-w-5xl md:max-w-3xl sm:max-w-full ">
        <h2 className="text-4xl font-extrabold text-gray-800 flex justify-center">
          Browse The Range
        </h2>
        <p className='flex justify-center'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all">
            <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
            <Image
                src="/assets/dining.png"
                width={285}
                height={446}
                alt="Product 1"
                className="h-full w-full object-cover object-top"
              />
            </div>

            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800 justify-center">Dining</h3>
              <div className="mt-4 flex items-center flex-wrap gap-2">
              
              </div>
            </div>
          </div>

          <div className="bg-white rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all">
            <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
            <Image
                src="/assets/Image-living room.png"
                alt="Living"
                className="h-full w-full object-cover object-top"
                width={285}
                height={446}
                
              />
            </div>

            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">Living</h3>
          
            </div>
          </div>

          <div className="bg-white rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all">
            <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
            <Image
                src="/assets/bedroom.png"
                alt="Bedroom"
                className="h-full w-full object-cover object-top"
                width={285}
                height={446}
                
              />
              
            </div>

            <div className="p-4 justify-center">
              <h3 className="text-lg font-bold text-gray-800">
                Bedroom
              </h3>
              
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}
