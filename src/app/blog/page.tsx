"use client";
import React, { useState } from "react";
import BlogCard from "../components/BlogCard";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer2";
import HeroSection2 from "../components/Herosection2";

const Blog = () => {
  const allBlogs = [
    {
      image: "/assets/Blog1.png",
      title: "Going all-in with millennial design",
      category: "Wood",
      date: "14 Oct 2022",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      image: "/assets/Blog2.png",
      title: "Exploring new ways of decorating",
      category: "Handmade",
      date: "14 Oct 2022",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      image: "/assets/Blog3.png",
      title: "Handmade pieces that took time to make",
      category: "Wood",
      date: "14 Oct 2022",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
  ];

  const [filteredBlogs, setFilteredBlogs] = useState(allBlogs);

  // Filter posts by category
  const handleCategoryClick = (category: string) => {
    const filtered = allBlogs.filter((blog) => blog.category === category);
    setFilteredBlogs(filtered);
  };

  // Show single post on click (Recent Posts)
  const handleRecentPostClick = (title: string) => {
    const filtered = allBlogs.filter((blog) => blog.title === title);
    setFilteredBlogs(filtered);
  };

  return (
    <>
      <HeroSection2 title="Blog" breadcrumb="Home > Blog" />

      <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Blog Post Section */}
        <section className="md:col-span-3">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog, index) => <BlogCard key={index} {...blog} />)
          ) : (
            <p className="text-center text-gray-500">No posts available.</p>
          )}
        </section>

        {/* Sidebar Section */}
        <section>
          <Sidebar
            onCategoryClick={handleCategoryClick}
            onRecentPostClick={handleRecentPostClick}
            recentPosts={allBlogs} // Pass allBlogs for Recent Posts
          />
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Blog;
