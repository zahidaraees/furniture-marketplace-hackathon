import Image from 'next/image';

export default function ImageGrid() {
  const images = [
    "/images/Rectangle36.png",
    "/images/Rectangle37.png",
    "/images/Rectangle38.png",
    "/images/Rectangle39.png",
    "/images/Rectangle40.png",
    "/images/Rectangle41.png",
    "/images/Rectangle43.png",
    "/images/Rectangle44.png",
    "/images/Rectangle45.png",
  ];

  return (
    <div className="container mx-auto px-4 py-8 grid-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`relative bg-gray-200 rounded-lg overflow-hidden ${
            index === 0
              ? 'grid-row-start-1 grid-row-end-2 grid-column-start-1 grid-column-end-2'
              : index === 1
              ? 'grid-row-start-1 grid-row-end-2 grid-column-start-3 grid-column-end-4'
              : index === 2
              ? 'grid-row-start-2 grid-row-end-3 grid-column-start-3 grid-column-end-4'
              : index === 3
              ? 'grid-row-start-1 grid-row-end-2 grid-column-start-3 grid-column-end-3'
              : index === 4
              ? 'grid-row-start-2 grid-row-end-3 grid-column-start-3 grid-column-end-4'
              : index === 5
              ? 'grid-row-start-2 grid-row-end-3 grid-column-start-4 grid-column-end-5'
              : index === 6
              ? 'grid-row-start-1 grid-row-end-2 grid-column-start-4 grid-column-end-5'
              : index === 7
              ? 'grid-row-start-2 grid-row-end-3 grid-column-start-4 grid-column-end-5'
              : index === 8
              ? 'grid-row-start-1 grid-row-end-2 grid-column-start-5 grid-column-end-6'
              : ''
          }`}
        >
          <Image
            src={image}
            alt={`Image ${index + 1}`}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      ))}
    </div>
  );
}
