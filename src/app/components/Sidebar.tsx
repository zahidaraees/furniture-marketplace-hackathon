import React from "react";
import Image from "next/image";

interface SidebarProps {
  onCategoryClick: (category: string) => void;
  onRecentPostClick: (title: string) => void;
  recentPosts: { title: string; image: string; date: string }[];
}

const Sidebar = ({ onCategoryClick, onRecentPostClick, recentPosts }: SidebarProps) => {
  const categories = [
    { name: "Crafts", count: 2 },
    { name: "Design", count: 8 },
    { name: "Handmade", count: 7 },
    { name: "Interior", count: 1 },
    { name: "Wood", count: 6 },
  ];

  return (
    <aside className="p-6 bg-gray-50 rounded-lg shadow-lg">
      {/* Categories */}
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-4">Categories</h3>
        <ul>
          {categories.map((category) => (
            <li
              key={category.name}
              className="flex justify-between py-2 cursor-pointer hover:text-blue-600"
              onClick={() => onCategoryClick(category.name)}
            >
              <span>{category.name}</span>
              <span>({category.count})</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Posts */}
      <div>
        <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
        <ul>
          {recentPosts.map((post, index) => (
            <li
              key={index}
              className="flex items-center mb-4 cursor-pointer hover:text-blue-600"
              onClick={() => onRecentPostClick(post.title)}
            >
              {/* Image */}
              <div className="w-16 h-16 relative mr-4">
                <Image
                  src={post.image}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              {/* Post Info */}
              <div>
                <h4 className="font-semibold">{post.title}</h4>
                <p className="text-sm text-gray-500">{post.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
