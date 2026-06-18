import { motion } from 'motion/react';

export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2574&auto=format&fit=crop", // Pasta
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2670&auto=format&fit=crop", // Restaurant interior
    "https://images.unsplash.com/photo-1604068549290-dea0e4a30536?q=80&w=2574&auto=format&fit=crop", // Pizza
    "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2670&auto=format&fit=crop", // Wine glasses
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2670&auto=format&fit=crop", // Gourmet dish
    "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2670&auto=format&fit=crop"  // Terrace / Outdoor
  ];

  return (
    <section className="bg-carbonara-black overflow-hidden py-2">
      <div className="flex w-full overflow-x-auto hide-scrollbar snap-x snap-mandatory">
        {images.map((src, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex-none w-80 md:w-96 lg:w-[450px] h-[400px] md:h-[500px] snap-center relative group"
          >
            <img 
              src={src} 
              alt={`Gallery image ${index + 1}`} 
              className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
            />
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-carbonara-black/20 group-hover:bg-transparent transition-all duration-500"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
