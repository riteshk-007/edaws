"use client";
import Link from "next/link";
import { useState } from "react";
import Logo from "../other/logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <span className="w-full p-1 text-center bg-gradient-to-r from-amber-800 to-from-amber-800 block rtl:from-amber-800 rtl:to-brfrom-amber-800">
        <span className="text-sm sm:text-xs tracking-widest font-semibold">
          Support Education: Small Steps, Big Dreams.
        </span>
      </span>
      <nav className="bg-white border border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
            onClick={() => setIsOpen(false)}
          >
            <Logo />
          </Link>

          <button
            onClick={toggleDropdown}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-default"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`w-full md:block md:w-auto ${isOpen ? "" : "hidden"}`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">
              <li>
                <Link
                  href="/"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0  "
                  aria-current="page"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 "
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 "
                >
                  Gallery
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 "
                >
                  Contact
                </Link>
              </li>
              <li>
                <button className="md:hidden inline-flex items-center justify-center w-full py-2 text-sm font-medium text-white bg-amber-600 rounded-lg hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500">
                  Donate
                </button>
              </li>
            </ul>
          </div>

          <button className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-amber-600 rounded-lg hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500">
            Donate
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
