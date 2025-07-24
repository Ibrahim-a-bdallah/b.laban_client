import React from "react";
import Image from "next/image";

type SlideCardProps = {
  image: string;
  subtitle: string;
  title: string;
};

const SlideCard = ({ image, subtitle, title }: SlideCardProps) => (
  <article className="relative w-full sm:w-[450px] h-[350px] group overflow-hidden rounded-lg">
    <Image
      src={image}
      alt=""
      width={1000}
      height={1000}
      className="object-cover transition-transform duration-500 group-hover:scale-105"
      priority
      quality={85}
    />
    <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:opacity-70" />
    <div className="absolute bottom-0 left-0 p-6 z-10">
      <p className="font-semibold text-xl uppercase">{subtitle}</p>
      <h3 className="font-semibold text-2xl mt-1">{title}</h3>
    </div>
  </article>
);

export default React.memo(SlideCard);
