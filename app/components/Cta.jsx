import Image from "next/image";
import { Link } from "next-view-transitions";
import React from "react";

const Cta = () => {
  return (
    <>
      <div className="h-64 w-full">
        <Image
          width={2067}
          height={1378}
          src="https://images.unsplash.com/photo-1569173675610-42c361a86e37?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="description"
          className="object-cover object-center w-full h-full"
        />
      </div>
      <section
        className="py-28"
        style={{
          background:
            "radial-gradient(circle, #f6e8ce, #ffeadf, #fff0f1, #fff8fd, #ffffff)",
        }}
      >
        <div className="max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
          <div className="max-w-xl space-y-3 md:mx-auto">
            <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Empower a Child&apos;s Future with Education
            </p>
            <p className="text-gray-600">
              Your contribution can provide underprivileged children with the
              education they need to build a brighter and more prosperous
              future. Join us in this noble cause and make a difference today.
            </p>
          </div>
          <div className="mt-4">
            <Link
              href="/"
              className="inline-block py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cta;
