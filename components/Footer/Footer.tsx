import Link from "next/link";
import React from "react";
import { navLinks } from "@/utils/constant";
import SocialLinks from "../SocialLinks";

const Footer = () => {
  return (
    <footer className="bg-[#042121] text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-32">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Logo or Branding */}
          <div className="mb-4 sm:mb-0">
            <Link href="/" className="text-xl font-extrabold hover:text-gray-300">
              Ravindra Yadav
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6 mb-4 sm:mb-0">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="hover:text-gray-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <SocialLinks />
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="text-center mt-8 text-sm text-gray-400">
          © {new Date().getFullYear()} MyPortfolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
