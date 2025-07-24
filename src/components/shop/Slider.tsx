import React from "react";
import SlideCard from "@/components/shared/ui/SlideCard";

const slides = [
  {
    id: 1,
    image: "/rbo.jpg",
    subtitle: "New Items",
    title: "Seasonal Delights",
  },
  {
    id: 2,
    image: "/oma.jpg",
    subtitle: "Our Specials",
    title: "Signature Dishes",
  },
  {
    id: 3,
    image: "/kas.jpg",
    subtitle: "Sweet Endings",
    title: "Decadent Desserts",
  },
];

const Slider = () => {
  return (
    <section
      aria-label="Promotional slides"
      className="hidden md:block container px-5 mx-auto my-10"
    >
      <div className="flex flex-wrap justify-center gap-4 text-white">
        {slides.map((slide) => (
          <SlideCard key={slide.id} {...slide} />
        ))}
      </div>
    </section>
  );
};

export default React.memo(Slider);
