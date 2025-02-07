// app/components/heroSection2.tsx This page will create Hero Secton for  inside pages of the E Commerce website.

import Image from "next/image"; // For optimized image loading

type HeroBlogProps = {
  title: string;
  breadcrumb: string;
};

export default function HeroSection2({ title, breadcrumb }: HeroBlogProps) {
  return (
    <div>
      {/* Hero Section */}
      <section className="HeroBlog">
        <div className="hero-content relative w-full h-64">
          <Image
            src="/assets/header-background.png"
            width={1440}
            height={716.83}
            alt="Shop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <h1 className="text-black text-3xl font-semibold p-2 rounded">
              {title}
            </h1>
            <div>
              <h2 className="text-black text-l font-semibold p-1 rounded">
                {breadcrumb}
              </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
