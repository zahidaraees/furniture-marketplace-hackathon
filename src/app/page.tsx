// Hackathon Day 5 , Marketplace 
import ProductListing from "../app/components/ProductListing";
import HeroSection from "./components/HeroSection"; // for landing page
import RoomInspiration from "../app/components/RoomInspiration"
import ProductList from "./components/ProductList";
import ImageGallery from "./components/ImageGallery";




export default function Home() {
  return (
    <div>
      <HeroSection />
      <ProductListing />
      <div>
      <h1 className="text-4xl text-center font-bold mt-10">Welcome to Our Store</h1>
      
      {/* Show 3 featured products */}
      <ProductList />
    </div>
      
      
      <RoomInspiration />

      <ImageGallery />
      
    </div>
  );
}
