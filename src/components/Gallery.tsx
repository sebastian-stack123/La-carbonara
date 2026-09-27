import { IMAGES } from '../config/images';

export default function Gallery() {
  const images = IMAGES.gallery;

  return (
    <section className="bg-carbonara-black overflow-hidden py-2">
      <div className="flex w-full overflow-x-auto hide-scrollbar snap-x snap-mandatory">
        {images.map((src, index) => (
          <div 
            key={index}
            className="flex-none w-80 md:w-96 lg:w-[450px] h-[400px] md:h-[500px] snap-center relative group"
          >
            <img 
              src={src} 
              alt={`Gallery image ${index + 1}`} 
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
            />
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-carbonara-black/20 group-hover:bg-transparent transition-all duration-500"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
