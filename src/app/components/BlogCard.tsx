// Blog card for post desplay
import React from "react";
import Image from "next/image";

interface BlogCardProps {
  image: string; // Path or URL of the image
  title: string;
  category: string;
  date: string;
  description: string;
}

const BlogCard = ({ image, title, category, date, description }: BlogCardProps) => {
  return (
    <div className="mb-8 flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">
   
      <div className="w-full md:w-1/3 relative h-64">
        <Image
          src={image}
          alt={title}
          fill
          objectFit="cover" // Maintains aspect ratio and fills container
          className="rounded-t-lg md:rounded-t-none md:rounded-l-lg"
        />
      </div>
      <div className="p-6 flex-1">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-sm text-gray-500 mb-2">
          {category} • {date}
        </p>
        <p className="text-gray-700 mb-4">{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
