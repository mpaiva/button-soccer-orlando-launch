
import React from 'react';
import { Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-bso-darkBeige py-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 flex items-center">
            <img 
              src="/lovable-uploads/9491f910-5ae8-4919-8112-80805fd8f570.png" 
              alt="Button Soccer Orlando Logo" 
              className="h-12 w-auto mr-3"
            />
            <div>
              <h3 className="text-xl font-heading text-bso-blue">Button Soccer Orlando</h3>
              <p className="text-sm text-gray-600">Bringing Brazil's favorite tabletop game to Florida</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-6 md:mb-0">
            <div className="text-center md:text-left">
              <h4 className="text-lg font-bold text-bso-blue mb-3">Connect With Us</h4>
              <div className="flex flex-col space-y-2">
                <a 
                  href="https://www.instagram.com/buttonsoccer" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-start text-gray-700 hover:text-bso-red transition-colors"
                >
                  <Instagram className="h-5 w-5 mr-2" /> @buttonsoccer
                </a>
                <a 
                  href="mailto:info@buttonsoccerorlando.com" 
                  className="text-gray-700 hover:text-bso-red transition-colors"
                >
                  info@buttonsoccerorlando.com
                </a>
              </div>
            </div>
            
            <div className="text-center md:text-left">
              <h4 className="text-lg font-bold text-bso-blue mb-3">Quick Links</h4>
              <div className="flex flex-col space-y-2">
                <a href="#about" className="text-gray-700 hover:text-bso-red transition-colors">About the Game</a>
                <a href="#rules" className="text-gray-700 hover:text-bso-red transition-colors">How To Play</a>
                <a href="#meetups" className="text-gray-700 hover:text-bso-red transition-colors">Upcoming Meetups</a>
                <a href="#join" className="text-gray-700 hover:text-bso-red transition-colors">Join Our Community</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-300 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Button Soccer Orlando. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Inspired by the Dadinho style from Rio de Janeiro
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
