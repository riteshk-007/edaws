import Image from "next/image";
import React from "react";

const IndiaMap = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full p-4   rounded-lg shadow-md">
      <Image width={700} height={700} src="/in.svg" alt="India Map" />
    </div>
  );
};

export default IndiaMap;
