
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import RulesSection from '@/components/RulesSection';
import MeetupSection from '@/components/MeetupSection';
import GallerySection from '@/components/GallerySection';
import JoinSection from '@/components/JoinSection';
import Footer from '@/components/Footer';
import { motion, useAnimation } from 'framer-motion';

// Add framer-motion as a dependency
<lov-add-dependency>framer-motion@latest</lov-add-dependency>

const Index = () => {
  useEffect(() => {
    // Add smooth scrolling to all links
    document.documentElement.classList.add('smooth-scroll');
    
    return () => {
      document.documentElement.classList.remove('smooth-scroll');
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <NavBar />
      <main>
        <HeroSection />
        <AboutSection />
        <RulesSection />
        <MeetupSection />
        <GallerySection />
        <JoinSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
