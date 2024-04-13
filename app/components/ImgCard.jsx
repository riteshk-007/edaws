"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function ImgCard() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white  items-center justify-center relative overflow-hidden">
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
    image: "https://source.unsplash.com/random/800x600?query=poor",
  },
  {
    image: "https://source.unsplash.com/random/800x600?query=poor",
  },
  {
    image: "https://source.unsplash.com/random/800x600?query=poor",
  },
  {
    image: "https://source.unsplash.com/random/800x600?query=poor",
  },
  {
    image: "https://source.unsplash.com/random/800x600?query=poor",
  },
];
