'use client';

import Link from 'next/link';
import { FaListCheck, FaBars, FaXmark } from 'react-icons/fa6';
import { useState } from 'react';
import NavbarLinks from './NavbarLinks';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full max-w-screen-2xl mx-auto text-white px-4 py-4 flex justify-between items-center relative">
      {/* Logo + Title */}
      <Link href="/" title="Home" className="flex items-center space-x-3">
        <FaListCheck className="h-8 w-8 text-white" />
        <span className="text-2xl sm:text-3xl font-bold">Task Flow</span>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex">
        <NavbarLinks />
      </div>

      {/* Mobile Hamburger Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden focus:outline-none z-20"
        aria-label="Toggle Menu"
      >
        {isOpen ? <FaXmark className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-900 text-white shadow-lg rounded-md p-4 md:hidden z-10">
          <NavbarLinks onMobileClick={() => setIsOpen(false)} />
        </div>
      )}
    </nav>
  );
}
