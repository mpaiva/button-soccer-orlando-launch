import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Dices } from 'lucide-react';
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center bg-bso-beige pt-16">
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1554118879-e456fc79a245?q=80&w=2047&auto=format&fit=crop')] bg-fixed bg-cover bg-center opacity-10"></div>
      </div>
      <div className="container mx-auto z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading text-bso-blue mb-4">
              Welcome to <br />
              <span className="text-bso-red">Button Soccer Orlando</span>
            </h1>
            <p className="text-xl mb-8 text-gray-700 max-w-xl">
              Join our monthly meetups and play Brazil's unique table soccer! A fun community for all ages and skill levels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="bg-bso-red hover:bg-red-700 text-white text-lg px-8" onClick={() => document.getElementById('join')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                Join the Club
              </Button>
              <Button size="lg" variant="outline" className="border-bso-blue text-bso-blue hover:bg-bso-blue hover:text-white text-lg px-8" onClick={() => document.getElementById('rules')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                Learn to Play <Dices className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.8,
          delay: 0.3
        }} className="flex justify-center">
            <div className="relative">
              <img src="/lovable-uploads/9491f910-5ae8-4919-8112-80805fd8f570.png" alt="Button Soccer Orlando Logo" className="w-64 md:w-80 animate-bounce-slow" />
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-bso-blue text-white py-2 px-6 rounded-full">
                <p className="text-sm font-medium text-center">SOCCER.BUTTON </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-16">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full">
          <path fill="#1a3a6b" fillOpacity="1" d="M0,192L60,202.7C120,213,240,235,360,218.7C480,203,600,149,720,133.3C840,117,960,139,1080,160C1200,181,1320,203,1380,213.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
    </section>;
};
export default HeroSection;