
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Dices } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-bso-beige pt-16">
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full bg-fixed bg-cover bg-center opacity-10"></div>
      </div>
      <div className="container mx-auto z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading text-bso-blue mb-4">
              Welcome to <br />
              <span className="text-bso-red">Button Soccer Orlando</span>
            </h1>
            <p className="text-xl mb-8 text-gray-700 max-w-xl">
              Join our monthly meetups and play Brazil's unique table soccer! A fun community for all ages and skill levels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                size="lg" 
                className="bg-bso-red hover:bg-red-700 text-white text-lg px-8" 
                onClick={() => document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Join the Club
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-bso-blue text-bso-blue hover:bg-bso-blue hover:text-white text-lg px-8" 
                onClick={() => document.getElementById('rules')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn to Play <Dices className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="relative">
              <img 
                src="/lovable-uploads/9491f910-5ae8-4919-8112-80805fd8f570.png" 
                alt="Button Soccer Orlando Logo" 
                className="w-64 md:w-80 animate-bounce-slow" 
              />
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-bso-blue text-white py-2 px-6 rounded-full">
                <p className="text-sm font-medium text-center">SOCCER.BUTTON </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
