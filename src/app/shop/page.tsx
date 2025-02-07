import { allProducts } from "@/sanity/lib/quries"; // Query to fetch all products

import { client } from "@/sanity/lib/client"; // Sanity client for fetching data
import ProductList from "./ProductList"; // Component to display the list of products
import HeroSection2 from "@/app/components/Herosection2"; // Hero banner

// The Shop page fetches products on the server side
const Shop = async () => {
    // Fetch all products using the Sanity client
    const products = await client.fetch(allProducts);

    return (
        <>
            <div>
                {/* Render Hero Section */}
                <HeroSection2 title="Shop" breadcrumb="Home>Shop" />
            </div>
            <div className="max-w-6xl mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold mb-6 text-center">Latest Products</h1>
                {/* Pass products to the Client Component */}
                <ProductList products={products} />
                


            </div>
        </>
    );
};

export default Shop;
