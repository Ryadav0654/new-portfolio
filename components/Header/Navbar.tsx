"use client"
import React, {useState} from 'react'
import Link from 'next/link';
import { navLinks } from '@/utils/constant';
import { motion } from 'motion/react';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }
  
  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  }

  return (
    <nav className=" fixed top-0 left-0 right-0 bg-transparent opacity-1 text-white z-50 backdrop-blur-m">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-24 sticky top-0 ">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="text-xl font-extrabold">Ravindra Yadav</span>
            </Link>
          </div>

          {/* Menu Button for Mobile */}
          <div className="flex sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex justify-center items-center  sm:space-x-4">
            {
                navLinks.map((link) => (
                    <Link key={link.name} href={link.path}>
                        <span className="hover:bg-gray-700 px-3 py-2 rounded-full text-lg font-semibold ">{link.name}</span>
                    </Link>
                ))
            }
            <Link
                href={"#"}
                className="hidden px-3 py-1 transition-color text-lg font-semibold  bg-blue-500  lg:flex hover:bg-blue-600 text-white rounded-full transition duration-300"
              >
                Hire Me
              </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {
                navLinks.map((link) => (
                  <motion.ul
                    initial="hidden"
                    whileInView="visible"
                    variants={list}
                    key={link.name}>
                    <Link key={link.name} href={link.path} >
                        <motion.li variants={item} onClick={() => setIsOpen(false)}   className="block hover:bg-gray-700 px-3 py-2 text-center rounded-full text-lg font-semibold">{link.name}</motion.li>
                    </Link>
                  </motion.ul>
                ))
            }
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar