import React, { useState } from 'react';
import logoImage from '../img/logo.png'; // Import your logo image

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-5f4c4c p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-2xl font-bold hover:text-gray-300 transition duration-300">
          <img src={logoImage} alt="Your Logo" className="w-40 h-20 mr-10" /> {/* Insert your logo image */}
        </a>
        <div className="lg:hidden"> {/* Hide on large screens */}
          {/* Mobile menu button */}
          <button onClick={toggleMobileMenu} className="text-white">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          {/* Display on small screens when isMobileMenuOpen is true */}
          <div className="fixed top-0 left-0 h-screen w-screen bg-white bg-opacity-50 z-50 flex flex-col items-center justify-center space-y-4">
            <a href="/" className="text-2xl font-bold text-088395">Home</a>
            <a href="/foods" className="text-2xl font-bold text-088395">Foods</a>
            <a href="/video" className="text-2xl font-bold text-088395">Videos</a>
            <a href="/temples" className="text-2xl font-bold text-088395">Temples</a>
            <a href="/sign-in" className="text-2xl font-bold text-088395">Sign in/up</a>
          </div>
        </div>
        <div className="hidden lg:flex space-x-4"> {/* Display on large screens */}
          <a href="/" className="text-white hover:text-gray-300 transition duration-300">Home</a>
          <a href="/foods" className="text-white hover:text-gray-300 transition duration-300">Foods</a>
          <a href="/video" className="text-white hover:text-gray-300 transition duration-300">Videos</a>
          <a href="/temples" className="text-white hover:text-gray-300 transition duration-300">Temples</a>
          <a href="/sign-in" className="text-white hover:text-gray-300 transition duration-300">Sign in/up</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
