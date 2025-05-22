
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-bso-blue text-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-heading mb-6"
          >
            What Is Button Soccer?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-200"
          >
            Button Soccer (or "Futebol de Botão" in Portuguese) is a beloved tabletop game that's immensely popular in Brazil. 
            Players flick small discs ("buttons") to control the ball and score goals, simulating the dynamic and strategic elements of soccer on a miniature pitch.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/ErbN7hNBkuM" 
                  title="Button Soccer Gameplay" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="absolute inset-0"
                ></iframe>
              </div>
            </Card>
          </div>
          
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl font-heading mb-4">The Dadinho Style</h3>
              <p className="mb-4">
                Our club plays "Dadinho" style button soccer, which originated in Rio de Janeiro. 
                This style is characterized by:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Unique button flicking technique</li>
                <li>Special "goalkeeper" buttons</li>
                <li>Strategic formations and gameplay</li>
                <li>Rich tradition dating back to the 1930s</li>
              </ul>
              <p>
                Whether you're a Brazilian expat missing this childhood game or a curious newcomer, 
                Button Soccer offers a perfect blend of skill, strategy, and friendly competition.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
