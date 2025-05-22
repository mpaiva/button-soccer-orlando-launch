
import React from 'react';
import { motion } from 'framer-motion';

const GallerySection = () => {
  // Button soccer specific images
  const galleryImages = [
    "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=800&auto=format&fit=crop&q=60", // Keeping one colorful image
    "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&auto=format&fit=crop&q=60", // Table game
    "https://images.unsplash.com/photo-1606167668584-78701c57f90d?w=800&auto=format&fit=crop&q=60", // People playing a table game
    "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop&q=60", // Game pieces
    "https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?w=800&auto=format&fit=crop&q=60", // Table game with players
    "https://images.unsplash.com/photo-1611079830811-292d9cb89aba?w=800&auto=format&fit=crop&q=60", // Close-up of game pieces
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-heading mb-6 text-bso-blue"
          >
            Our Community
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-700"
          >
            Button Soccer Orlando brings together a diverse group of enthusiasts, from Brazilian expats to curious newcomers. Check out some moments from our past events!
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="aspect-[4/3] overflow-hidden rounded-lg"
            >
              <img 
                src={image} 
                alt={`Button Soccer Orlando Community Event ${index + 1}`} 
                className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
