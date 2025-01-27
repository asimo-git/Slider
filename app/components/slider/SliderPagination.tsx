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
      {Array.from({ length: numberOfPaginationButtons }, (_, index) =>
        index === activeSlide ? (
          <svg
            width="40"
            height="8"
            viewBox="0 0 40 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            key={index}
          >
            <rect width="40" height="8" rx="4" fill="#CCCCCC" />
            <rect width="20" height="8" rx="4" fill="#1C1C1C" />
          </svg>
        ) : (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`rounded-full w-2 h-2 transition-transform duration-200 ${
              index === activeSlide ? "bg-black w-10" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        )
      )}
    </div>
  );
}
