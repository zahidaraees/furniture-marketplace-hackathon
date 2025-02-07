// queries.ts
import groq from 'groq'

// Query to fetch all products at once
export const allProducts = groq`*[_type == "product"] | order(_createdAt desc) {
    _id,
    title,
    price,
    dicountPercentage,
    "productImage": productImage.asset->url,  // 🔹 Fetch the full image URL instead of just _ref
    slug,
    tags[0..3], // 🔹 Fetch the first 3 tags array
}`;

// Query to fetch paginated products
export const allProductsPaginated = groq`*[_type == "product"] | order(_createdAt desc) [ $start...$start + $limit ] {
    _id,
    title,
    price,
      discountPercentage,
      dicountPercentage, // 🔹 it was as it is from the management so I kept it same.
      
    "productImage": productImage.asset->url,  // 🔹 Fetch the full image URL instead of just _ref
    slug,
    tags[0..3], // 🔹 Fetch the first 3 tags array
}`;
