import Image from "next/image";

interface ProductCardProps {
  image: string; // Path to the image in public folder
  name: string;
  price: string;
  rating: number;
  reviews: number;
}

const ProductCard = ({ image, name, price, rating, reviews }: ProductCardProps) => {
  return (
    <div className="border rounded-md shadow-sm p-4">
      {/* Correctly sized Image */}
      <div className="w-full relative">
        <Image
          src={image} // Path relative to public folder
          alt={name}
          width={400} // Specify exact dimensions
          height={200} // Adjust based on your design
          className="rounded object-cover"
        />
      </div>
      <h2 className="text-lg font-semibold mt-2">{name}</h2>
      <p className="text-gray-600">{price}</p>
      <div className="flex items-center mt-1">
        <span className="text-yellow-500 text-sm">{`⭐ ${rating}`}</span>
        <span className="text-gray-500 ml-2 text-sm">{`(${reviews} Reviews)`}</span>
      </div>
    </div>
  );
};

export default ProductCard;
