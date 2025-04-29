import { Link } from 'react-router-dom';
import { useState } from 'react';
import SearchBar from './SearchBar';
import logo from '../assets/mother-4.jpg'; // Import the logo image

function Navbar({ onSearch = () => {} }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-pink-100 to-purple-100 p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between relative">
        {/* Logo in the left corner */}
        <div className="w-12 h-12 transition-transform duration-300 hover:scale-110">
          <Link to="/">
            <img
              src={logo}
              alt="Mother’s Day Tribute Logo"
              className="w-full h-full object-contain"
              onError={(e) => { e.target.src = 'path/to/fallback-image.jpg'; }} // Fallback if logo fails
            />
          </Link>
        </div>

        {/* Centered Title */}
        <div className="flex-1 text-center">
          <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-pink-600 transition-colors duration-300">
            Mother’s Day Tribute
          </Link>
        </div>

        {/* Hamburger Icon and Desktop Menu */}
        <div className="flex items-center space-x-4">
          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-pink-600 focus:outline-none hover:text-purple-600 transition-colors duration-300"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/about" className="text-gray-800 hover:text-pink-600 transition-colors duration-300 font-medium">
              About
            </Link>
            <Link to="/categories" className="text-gray-800 hover:text-pink-600 transition-colors duration-300 font-medium">
              Categories
            </Link>
            <Link to="/contact" className="text-gray-800 hover:text-pink-600 transition-colors duration-300 font-medium">
              Contact
            </Link>
            <SearchBar onSearch={onSearch} />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white/90 shadow-md md:hidden z-10 backdrop-blur-sm">
            <div className="flex flex-col items-center space-y-4 p-4">
              <Link to="/about" className="text-gray-800 hover:text-pink-600 transition-colors duration-300 font-medium" onClick={toggleMenu}>
                About
              </Link>
              <Link to="/categories" className="text-gray-800 hover:text-pink-600 transition-colors duration-300 font-medium" onClick={toggleMenu}>
                Categories
              </Link>
              <Link to="/contact" className="text-gray-800 hover:text-pink-600 transition-colors duration-300 font-medium" onClick={toggleMenu}>
                Contact
              </Link>
              <div className="w-full px-4">
                <SearchBar onSearch={onSearch} />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;