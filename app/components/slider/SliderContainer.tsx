"use client";
import { useEffect, useRef } from "react";
import { SliderProps } from "../../utils/interfaces";
import SlideContent from "./SlideContent";

export default function SliderContainer({ slides, activeSlide }: SliderProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const firstSlideRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current && firstSlideRef.current) {
      const gap = 16;
      const slideWidth = firstSlideRef.current.getBoundingClientRect().width;

      const translateXValue = -(activeSlide * (slideWidth + gap));
      containerRef.current.style.transform = `translateX(${translateXValue}px)`;
    }
  }, [activeSlide]);

  return (
    <section aria-label="Services Slider" className="overflow-hidden">
      <div
        ref={containerRef}
        className="flex gap-4 transition-transform duration-500"
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
