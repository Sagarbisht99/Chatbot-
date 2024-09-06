import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-gray-900 py-2 shadow-md w-full z-10 transition-all">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Mobile Menu Button */}
        <div className="flex items-center sm:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle navigation"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Logo and Title */}
        <div className="flex items-center gap-4">
          <img
            className="w-16 sm:w-24 md:w-32" // Adjust size for different screen sizes
            src="https://media.licdn.com/dms/image/v2/D4D0BAQHY13MjAoAkvg/company-logo_200_200/company-logo_200_200/0/1702551124247/beyond_chats_logo?e=2147483647&v=beta&t=lsHYl-3UKzJjL_Rc4KupCVZ7oPEQfHvcVwt3n73jDG8"
            alt="Company Logo"
          />
          <p className="text-xl sm:text-2xl font-semibold text-white">
            ChatBot MindMap
          </p>
        </div>

        {/* Profile Icon */}
        <div className="relative hidden sm:flex items-center">
          <div className="text-white bg-blue-500 rounded-full p-2 flex items-center justify-center shadow-lg">
            <CgProfile className="text-3xl" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-75 z-20 transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out sm:hidden`}
      >
        <div className="flex flex-col items-center pt-16">
          <button
            onClick={toggleMobileMenu}
            className="text-white mb-4"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <nav className="flex flex-col items-center">
            <a
              href="#"
              className="text-white text-xl py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Dashboard
            </a>
            <a
              href="#"
              className="text-white text-xl py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Team
            </a>
            <a
              href="#"
              className="text-white text-xl py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#"
              className="text-white text-xl py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Calendar
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
