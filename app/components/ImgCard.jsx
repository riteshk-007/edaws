"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function ImgCard() {
  return (
    <div className="p-5 md:p-10 rounded-md flex flex-col antialiased bg-gray-100  items-center justify-center relative overflow-hidden">
      <h1 className="text-xl md:text-3xl font-bold mb-4 text-center">
        Your Donation Can Light the Lamp of Knowledge for an Underprivileged
        Child
      </h1>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
      />
    </div>
  );
}

const testimonials = [
  {
    image: "/img/1.png",
  },
  {
    image: "/img/2.png",
  },
  {
    image: "/img/3.png",
  },
  {
    image: "/img/4.png",
  },
  {
    image: "/img/5.png",
  },
  {
    image: "/img/6.png",
  },
  {
    image: "/img/7.png",
  },
];
