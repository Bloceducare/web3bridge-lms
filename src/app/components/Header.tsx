"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from './ui/Button';
import logo from '@/public/assets/logo.svg';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex items-center justify-between px-4 sm:px-8 py-4 bg-[#FCF7F2] shadow-lg fixed top-0 left-0 w-full z-10">
      <Link href="/" className="flex items-center">
        <Image src={logo} alt="Web3Bridge Logo" width={120} height={40} />
      </Link>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8">
        <Link href="/courses" className="text-gray-800 hover:text-red-600">Courses</Link>
        <Link href="/learn" className="text-gray-800 hover:text-red-600">Learn</Link>
        <Link href="/blog" className="text-gray-800 hover:text-red-600">Blog</Link>
        <Link href="/pricing" className="text-gray-800 hover:text-red-600">Pricing</Link>
      </nav>
      
      {/* Desktop Auth Buttons */}
      <div className="hidden md:flex items-center space-x-4">
        <Link href="/login" className="text-gray-800 hover:text-red-600">Login</Link>
        <Button text="Connect Wallet" href="/connect" variant="primary" />
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-gray-800 focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {!isMenuOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#FCF7F2] shadow-lg py-4 px-6 flex flex-col space-y-4">
          <Link href="/courses" className="text-gray-800 hover:text-red-600 py-2">Courses</Link>
          <Link href="/learn" className="text-gray-800 hover:text-red-600 py-2">Learn</Link>
          <Link href="/blog" className="text-gray-800 hover:text-red-600 py-2">Blog</Link>
          <Link href="/pricing" className="text-gray-800 hover:text-red-600 py-2">Pricing</Link>
          <div className="flex flex-col space-y-3 pt-2 border-t border-gray-200">
            <Link href="/login" className="text-gray-800 hover:text-red-600 py-2">Login</Link>
            <Button text="Connect Wallet" href="/connect" variant="primary" className="w-[208px] h-[58px] " />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;