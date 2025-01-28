"use client";
import { useEffect, useRef, useState } from "react";
import { SliderProps } from "../../utils/interfaces";
import SlideContent from "./SlideContent";

export default function SliderContainer({
  slides,
  activeSlide,
  onSlideChange,
  numberOfSlidesPerView,
}: SliderProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const firstSlideRef = useRef<HTMLDivElement | null>(null);
  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);

  useEffect(() => {
    if (containerRef.current && firstSlideRef.current) {
      const gap = 16;
      const slideWidth = firstSlideRef.current.getBoundingClientRect().width;

      const translateXValue = -(activeSlide * (slideWidth + gap));
      containerRef.current.style.transform = `translateX(${translateXValue}px)`;
    }
  }, [activeSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    const swipeThreshold = 50;
    const swipeDistance = startX - endX;

    if (
      swipeDistance > swipeThreshold &&
      activeSlide < slides.length - numberOfSlidesPerView
    ) {
      onSlideChange(activeSlide + 1);
    } else if (swipeDistance < -swipeThreshold && activeSlide > 0) {
      onSlideChange(activeSlide - 1);
    }

    setStartX(0);
    setEndX(0);
  };

  return (
    <section aria-label="Services Slider" className="overflow-hidden">
      <div
        ref={containerRef}
        className="flex gap-4 transition-transform duration-500"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide, index) => (
          <div
            aria-label={`Slide ${slide.id}`}
            key={slide.id}
            ref={index === 0 ? firstSlideRef : null}
            className="flex-none bg-slideBg rounded-lg p-6 flex flex-col justify-between w-full custom-sm:w-[calc(50%-8px)] custom-lg:w-[calc(25%-12px)]"
          >
            <SlideContent slide={slide} />
          </div>
        ))}
      </div>
    </section>
  );
}
