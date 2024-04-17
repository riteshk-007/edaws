import Image from "next/image";
import React from "react";

const Providing = () => {
  return (
    <div className="bg-white mt-16">
      <div className="container mx-auto py-8 px-4 md:px-0 md:flex md:justify-center md:items-center">
        <div className="md:w-1/2 lg:w-1/3 md:mr-8">
          <h1 className="text-3xl font-bold mb-4">
            Empowering India&apos;s Underprivileged Children Through Education
          </h1>
          <p className="text-lg mb-4">
            Our mission is to empower underprivileged children across India by
            providing them with quality education. Your generous donation can
            light the lamp of knowledge in their lives, helping them break free
            from the shackles of poverty. Your contribution will not only fund
            their education but also pave the way for their brighter and
            prosperous future. Join us in this noble cause and make a difference
            today.
          </p>
        </div>
        <div className="md:w-1/2  mt-8 md:mt-0">
          <Image
            width={1000}
            height={500}
            src="https://images.unsplash.com/photo-1576381394626-53b3d2d48145?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="child"
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Providing;
