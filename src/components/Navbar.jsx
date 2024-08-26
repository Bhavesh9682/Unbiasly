// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Navbar.css'; // Corrected the import path

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">MysticVisions</Link>
      </div>
      <button className="toggle-button" onClick={handleToggle}>
        ☰
      </button>
      <ul className={`nav-links ${isNavOpen ? 'active' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/numerology-services">Services</Link></li>
        <li><Link to="/PagesBlogPage">Blog</Link></li>
        <li><Link to="/community">Community</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li id='pricing'><Link to="/pricing">Pricing</Link></li>
        <button id ="btn" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          <Link to="/BookingForm">BOOK</Link>
        </button>
        <button id ="btn" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
          <Link to="/crystal-shop">SHOP</Link>
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
