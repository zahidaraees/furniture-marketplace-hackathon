import Image from 'next/image';

const ImageGallery = () => {
  const images = [
    { id: 1, src: '/images/Rectangle36.png', alt: 'Image 1', style: 'col-start-1 col-span-1 row-start-1 row-span-1' },
    { id: 2, src: '/images/Rectangle38.png', alt: 'Image 2', style: 'col-start-2 col-span-2 row-start-1 row-span-1' },
    { id: 3, src: '/images/Rectangle37.png', alt: 'Image 3', style: 'col-start-1 col-span-1 row-start-2 row-span-1' },
    { id: 4, src: '/images/Rectangle39.png', alt: 'Image 4', style: 'col-start-2 col-span-1 row-start-2 row-span-1' },
    { id: 5, src: '/images/Rectangle40.png', alt: 'Image 5', style: 'col-start-3 col-span-1 row-start-1 row-span-2' },
    { id: 6, src: '/images/Rectangle41.png', alt: 'Image 6', style: 'col-start-4 col-span-1 row-start-2 row-span-1' },
    { id: 7, src: '/images/Rectangle43.png', alt: 'Image 7', style: 'col-start-4 col-span-1 row-start-1 row-span-1' },
    { id: 8, src: '/images/Rectangle44.png', alt: 'Image 8', style: 'col-start-5 col-span-1 row-start-2 row-span-1' },
    { id: 9, src: '/images/Rectangle45.png', alt: 'Image 9', style: 'col-start-5 col-span-1 row-start-1 row-span-1' },
  ];

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-center text-4xl font-bold mb-8">
        Share your setup with <br />
        <span className="text-gray-600">#FuniroFurniture</span>
      </h1>

      {/* CSS Grid Container */}
      <div className="grid grid-cols-5 grid-rows-2 gap-4">
        {images.map((image) => (
          <div
            key={image.id}
            className={`relative overflow-hidden rounded-lg shadow-lg ${image.style} h-48`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill // Automatically fills the container
              objectFit="cover" // Ensures the image maintains aspect ratio
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
