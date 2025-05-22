
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-bso-blue bg-opacity-95 py-2 shadow-md' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/b4f1171c-56f0-4abb-a69d-fda004d7c2eb.png" 
            alt="Button Soccer Orlando Logo" 
            className="h-10 w-auto mr-2"
          />
          <span className={`font-heading text-xl ${isScrolled ? 'text-white' : 'text-bso-blue'}`}>
            Button Soccer Orlando
          </span>
        </div>
        <div className="hidden md:flex space-x-6">
          <NavLink href="#about" label="About" isScrolled={isScrolled} />
          <NavLink href="#rules" label="Rules" isScrolled={isScrolled} />
          <NavLink href="#meetups" label="Meetups" isScrolled={isScrolled} />
          <NavLink href="#gallery" label="Gallery" isScrolled={isScrolled} />
        </div>
        <Button 
          onClick={() => document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-bso-red hover:bg-red-700 text-white"
        >
          Join Us
        </Button>
      </div>
    </nav>
  );
};

interface NavLinkProps {
  href: string;
  label: string;
  isScrolled: boolean;
}

const NavLink = ({ href, label, isScrolled }: NavLinkProps) => (
  <a
    href={href}
    className={`font-medium hover:text-bso-red transition-colors ${
      isScrolled ? 'text-white' : 'text-bso-blue'
    }`}
    onClick={(e) => {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }}
  >
    {label}
  </a>
);

export default NavBar;
