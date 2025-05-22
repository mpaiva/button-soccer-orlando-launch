
import React from 'react';
import { motion } from 'framer-motion';

const GallerySection = () => {
  // In a real app, these images would come from your own collection
  const galleryImages = [
    "https://images.unsplash.com/photo-1577741314755-048d8525d31e?w=800&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1459865264687-595d652de67e?w=800&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=800&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1610801264293-6281420068d3?w=800&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1511886929837-354d827aae26?w=800&auto=format&fit=crop&q=60",
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
