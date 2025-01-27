"use client";
import { slides } from "@/app/data/slides";
import { CUSTOM_LG_WIDTH, CUSTOM_SM_WIDTH } from "@/app/utils/constants";
import { useEffect, useState } from "react";
import SliderContainer from "./SliderContainer";
import SliderPagination from "./SliderPagination";

export default function Slider() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (index: number) => {
    setActiveSlide(index);
  };

  const [numberOfSlidesPerView, setNumberOfSlidesPerView] = useState(1);

  const calculateSlidesPerView = () => {
    let slidesPerView: number;
    const screenWidth = window.innerWidth;
    if (screenWidth >= CUSTOM_LG_WIDTH) {
      slidesPerView = 4;
    } else if (screenWidth >= CUSTOM_SM_WIDTH) {
      slidesPerView = 2;
    } else {
      slidesPerView = 1;
    }

    setNumberOfSlidesPerView(slidesPerView);
    setActiveSlide(0);
  };

  useEffect(() => {
    calculateSlidesPerView();
    window.addEventListener("resize", calculateSlidesPerView);

    return () => {
      window.removeEventListener("resize", calculateSlidesPerView);
    };
  }, []);

  return (
    <>
      <SliderPagination
        activeSlide={activeSlide}
        onSlideChange={handleSlideChange}
        numberOfElements={slides.length}
        numberOfSlidesPerView={numberOfSlidesPerView}
      />
      <SliderContainer activeSlide={activeSlide} slides={slides} />
    </>
  );
}
