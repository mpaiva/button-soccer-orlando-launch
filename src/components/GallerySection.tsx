
import React from 'react';
import { motion } from 'framer-motion';
import { AspectRatio } from './ui/aspect-ratio';

const GallerySection = () => {
  // High quality button soccer specific images
  const galleryImages = [
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80", // Close-up of colorful button
    "https://images.unsplash.com/photo-1590477331018-33be968cd098?w=800&auto=format&fit=crop&q=80", // Miniature game pieces
    "https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?w=800&auto=format&fit=crop&q=80", // Table game with players
    "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop&q=80", // Game pieces in action
    "https://images.unsplash.com/photo-1610801264293-6281420068d3?w=800&auto=format&fit=crop&q=80", // Game board overview
    "https://images.unsplash.com/photo-1611079830811-292d9cb89aba?w=800&auto=format&fit=crop&q=80", // Close-up of game pieces
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
              className="rounded-lg overflow-hidden shadow-md"
            >
              <AspectRatio ratio={4/3}>
                <img 
                  src={image} 
                  alt={`Button Soccer Orlando Community Event ${index + 1}`} 
                  className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                />
              </AspectRatio>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
