import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
const logo = "/images/logo.jpeg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="bg-white p-4 shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Microbits Logo" className="h-10 mr-2" />
          <span className="text-xl font-bold text-primary">Microbits  <br /> Consultancy</span> 
        </div>
        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-primary focus:outline-none">
            <i className={`fas fa-bars text-2xl ${isOpen ? 'hidden' : 'block'}`}></i>
            <i className={`fas fa-times text-2xl ${isOpen ? 'block' : 'hidden'}`}></i>
          </button>
        </div>
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-primary hover:text-gray-600">Home</Link>
          <Link to="/about" className="text-primary hover:text-gray-600">About</Link>
          <Link to="/books" className="text-primary hover:text-gray-600">Books</Link>
          <Link to="/videos" className="text-primary hover:text-gray-600">Videos</Link>
          <Link to="/contact" className="text-primary hover:text-gray-600">Contact</Link>
        </div>
        {/* Desktop Social Icons */}
        <div className="hidden md:flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f text-primary hover:text-gray-600"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram text-primary hover:text-gray-600"></i>
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-tiktok text-primary hover:text-gray-600"></i>
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-x-twitter text-primary hover:text-gray-600"></i>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube text-primary hover:text-gray-600"></i>
          </a>
        </div>
        {/* Mobile Sidebar */}
        <div
          ref={sidebarRef}
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out z-50 md:hidden`}
        >
          <div className="p-4">
            <button onClick={() => setIsOpen(false)} className="text-primary mb-4 focus:outline-none">
              <i className="fas fa-times text-2xl"></i>
            </button>
            <div className="flex flex-col space-y-6">
              <Link to="/" className="text-primary hover:text-gray-600" onClick={() => setIsOpen(false)}>Home</Link>
              <Link to="/about" className="text-primary hover:text-gray-600" onClick={() => setIsOpen(false)}>About</Link>
              <Link to="/books" className="text-primary hover:text-gray-600" onClick={() => setIsOpen(false)}>Books</Link>
              <Link to="/videos" className="text-primary hover:text-gray-600" onClick={() => setIsOpen(false)}>Videos</Link>
              <Link to="/contact" className="text-primary hover:text-gray-600" onClick={() => setIsOpen(false)}>Contact</Link>
              <div className="flex space-x-4 mt-6">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f text-primary hover:text-gray-600"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram text-primary hover:text-gray-600"></i>
                </a>
                <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-tiktok text-primary hover:text-gray-600"></i>
                </a>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-x-twitter text-primary hover:text-gray-600"></i>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-youtube text-primary hover:text-gray-600"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;