"use client";
import { SliderPaginationProps } from "@/app/utils/interfaces";
import { useEffect, useState } from "react";

export default function SliderPagination({
  activeSlide,
  numberOfElements,
  onSlideChange,
  numberOfSlidesPerView,
}: SliderPaginationProps) {
  const [numberOfPaginationButtons, setNumberOfPaginationButtons] = useState(1);

  const handleSlideChange = (index: number) => {
    onSlideChange(index);
  };

  useEffect(() => {
    setNumberOfPaginationButtons(numberOfElements - numberOfSlidesPerView + 1);
  }, [numberOfSlidesPerView]);

  return (
    <div aria-label="Slider pagination" className="flex gap-2 mb-5">
      {Array.from({ length: numberOfPaginationButtons }, (_, index) => (
        <button
          key={index}
          onClick={() => handleSlideChange(index)}
          className={`rounded-full h-2 transition-all duration-500 ease-in-out ${
            index === activeSlide
              ? "bg-buttonBg pointer-events-none w-10 before:content-[''] before:w-5 before:h-2 before:bg-black before:rounded-full before:absolute before:left-0 before:top-0 transition-all duration-500 ease-in-out relative"
              : "bg-buttonBg w-2"
          }`}
          aria-label={`Go to slide ${index + 1}`}
        ></button>
      ))}
    </div>
  );
}
