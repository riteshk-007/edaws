import Image from "next/image";
import React from "react";

const Thanks = () => {
  return (
    <div className="flex h-full w-full items-center justify-center bg-black/40 z-50 py-10 fixed top-0">
      <div className="mx-auto max-w-md overflow-hidden rounded-3xl text-gray-700 shadow-md">
        <div className="h-40 bg-rose-400 pt-10 sm:h-56">
          <Image
            width={400}
            height={300}
            className="h-full w-full object-contain"
            src="/msg1.png"
            alt="message illustration"
          />
        </div>
        <div className="flex flex-col items-center bg-white px-4 py-10">
          <h2 className="mb-2 text-3xl font-bold text-rose-500 sm:text-4xl">
            Thank you!
          </h2>
          <p className="mb-8 font-medium text-gray-500 capitalize">
            for your donation support.
          </p>
          <div className="flex items-center rounded-xl bg-rose-500 p-4">
            <Image
              width={50}
              height={50}
              alt="logo"
              className="h-12 w-12 rounded-full border-4 border-white object-cover"
              src="/logo.png"
            />
            <div className="ml-4 w-56">
              <p className="text-xs font-medium text-gray-100">From</p>
              <p className="font-medium text-white">
                EDAWS - Educational development And Agriculture Welfare Society
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
