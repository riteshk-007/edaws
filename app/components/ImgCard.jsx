"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function ImgCard() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-gray-100  items-center justify-center relative overflow-hidden">
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
    image: "https://source.unsplash.com/random/500x300",
  },
  {
    image: "https://source.unsplash.com/random/500x300",
  },
  {
    image: "https://source.unsplash.com/random/500x300",
  },
  {
    image: "https://source.unsplash.com/random/500x300",
  },
  {
    image: "https://source.unsplash.com/random/500x300",
  },
];
