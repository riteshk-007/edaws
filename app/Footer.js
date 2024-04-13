"use client";
import React from "react";
import Logo from "./other/logo";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
          <span
            className="inline-block rounded-full cursor-pointer bg-teal-600 p-2 text-white shadow transition hover:bg-teal-500 sm:p-3 lg:p-4"
            onClick={(event) => {
              event.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <span className="sr-only">Back to top</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>

        <div className="lg:flex lg:items-end lg:justify-between">
          <div>
            <div className="flex justify-center text-teal-600 lg:justify-start">
              <Link href="/">
                <Logo />
              </Link>
            </div>

            <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
              Education is the most powerful tool we can use to change the
              world. Your donation can help provide education to underprivileged
              children, giving them a chance to learn, grow, and create a better
              future. Every contribution, no matter how small, can make a big
              difference. Thank you for your support.
            </p>
          </div>

          <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
            <li>
              <Link
                href="/about"
                className="text-gray-700 transition hover:text-gray-700/75"
              >
                {" "}
                About{" "}
              </Link>
            </li>

            <li>
              <Link
                href="/gallery"
                className="text-gray-700 transition hover:text-gray-700/75"
              >
                {" "}
                Gallery{" "}
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="text-gray-700 transition hover:text-gray-700/75"
              >
                {" "}
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
          Copyright © 2024, All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
